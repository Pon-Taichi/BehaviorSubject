import { Component, OnInit } from '@angular/core';
import { Sprint } from 'mock-sprint';
import { BehaviorSubject, Subject } from 'rxjs';
import { SubjectService } from '../services/subject.service';

@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
    constructor(private subjectService: SubjectService) {}

    value: string = 'Subject';
    selectedSprint: Sprint = this.subjectService.sprintSubject.getValue();

    ngOnInit(): void {
        // フォームのサンプル
        this.subjectService.subject.subscribe((data) => (this.value = data));

        // 選択中のSprintを購読
        this.subjectService.sprintSubject.subscribe((res) => {
            console.log('selectedSprintを購読: Subject');
            this.selectedSprint = res;
        });
    }
}
