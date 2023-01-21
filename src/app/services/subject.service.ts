import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SubjectService {
    subject = new Subject<string>();

    update(data: string) {
        this.subject.next(data);
    }
}
