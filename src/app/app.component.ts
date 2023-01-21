import { Component, OnInit } from '@angular/core';
import { Sprint } from 'mock-sprint';
import { SubjectService } from './services/subject.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    constructor(private subjectService: SubjectService) {}

    value: string = 'App';

    initialData: Sprint = {
        id: '0',
        name: '------',
        timeFrame: 'initial',
    };

    sprintList: Sprint[] = [this.initialData];
    selectedSprint: Sprint = this.initialData;

    ngOnInit() {
        // フォームのサンプル
        this.subjectService.subject.subscribe((data) => (this.value = data));

        // 選択中のSprintを購読
        this.subjectService.sprintSubject.subscribe((res) => {
            this.selectedSprint = res;
        });

        // Sprint一覧を取得
        this.subjectService.getSprintList().subscribe((res) => {
            // Sprint一覧から現在のSprintを取得
            const sprint = res.find((s) => this.isCurrentSprint(s));

            if (sprint) {
                // 現在のSprintを選択中Sprint更新メソッドへ渡す
                this.subjectService.updateSelectedSprint(sprint);
            }

            // Sprint一覧を初期値に追加
            this.sprintList.push(...res);
        });
    }

    // フォームのサンプル
    onClick(input: string): void {
        this.subjectService.update(input);
    }

    // 選択したSprintをselectedSprint更新用メソッドへ渡す
    onChange(sprintName: string) {
        const sprint = this.sprintList.find((s) => s.name === sprintName);
        if (!sprint || sprint.id === '0') return;

        this.subjectService.updateSelectedSprint(sprint);
    }

    isCurrentSprint(sprint: Sprint): boolean {
        return sprint.timeFrame === 'current';
    }
}
