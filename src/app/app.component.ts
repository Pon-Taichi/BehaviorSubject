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

    selectedSprint: Sprint = this.subjectService.sprintSubject.getValue();

    sprintList: Sprint[] = [this.selectedSprint];

    ngOnInit() {
        // フォームのサンプル
        this.subjectService.subject.subscribe((data) => (this.value = data));

        // 選択中のSprintを購読
        this.subjectService.sprintSubject.subscribe((res) => {
            console.log('selectedSprintを購読: App');
            this.selectedSprint = res;
        });

        // Sprint一覧を取得
        this.subjectService.getSprintList().subscribe((res) => {
            if (res.length) {
                // Sprint一覧から現在のSprintを取得
                console.log('currentSprintを取得');
                const currentSprint = res.find((s) => this.isCurrentSprint(s));

                if (currentSprint) {
                    console.log('currentSprintをselectedSprintへ流す');
                    // 現在のSprintを選択中Sprint更新メソッドへ渡す
                    this.subjectService.updateSelectedSprint(currentSprint);
                }

                // Sprint一覧を初期値に追加
                this.sprintList = res;
            }
        });
    }

    // フォームのサンプル
    onClick(input: string): void {
        this.subjectService.update(input);
    }

    // 選択したSprintをselectedSprint更新用メソッドへ渡す
    onSelect(sprintName: string) {
        const sprint = this.sprintList.find((s) => s.name === sprintName);
        if (!sprint || sprint.id === 'initial') return;
        console.log('選択したsprintをselectedSprintへ流す');
        this.subjectService.updateSelectedSprint(sprint);
    }

    isCurrentSprint(sprint: Sprint): boolean {
        return sprint.timeFrame === 'current';
    }
}
