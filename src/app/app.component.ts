import { Component, OnInit } from '@angular/core';
import { SubjectService } from './services/subject.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    constructor(private subjectService: SubjectService) {}
    title = 'learn-subject';
    value: string = 'App';

    ngOnInit() {
        this.subjectService.subject.subscribe((data) => (this.value = data));
    }

    onClick(input: string): void {
        this.subjectService.update(input);
    }
}
