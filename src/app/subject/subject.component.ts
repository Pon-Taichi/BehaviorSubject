import { Component, OnInit } from '@angular/core';
import { Sprint } from 'mock-sprint';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { SubjectService } from '../services/subject.service';

@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
    constructor(private subjectService: SubjectService) {}

    value: string = 'Subject';
    selectedSprint$: Observable<Sprint> =
        this.subjectService.sprintSubject.asObservable();

    selectedSprintName$: Observable<string> = this.selectedSprint$.pipe(
        map((sprint) => sprint.name)
    );

    ngOnInit(): void {
        // フォームのサンプル
        this.subjectService.subject.subscribe((data) => (this.value = data));

        // 以下不要
        // this.subjectService.sprintSubject.subscribe((res) => {
        //     console.log('selectedSprintを購読: Subject');
        //     this.selectedSprint = res;
        // });
    }
}
