import { Component, OnInit } from '@angular/core';
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

    ngOnInit(): void {
        this.subjectService.subject.subscribe((data) => (this.value = data));
    }
}
