import { Injectable } from '@angular/core';
import { Sprint, SPRINT_LIST } from 'mock-sprint';
import { BehaviorSubject, Observable, of, Subject, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SubjectService {
    subject = new Subject<string>();

    initialData: Sprint = {
        id: 'initial',
        name: '------',
        timeFrame: 'initial',
    };
    sprintSubject = new BehaviorSubject<Sprint>(this.initialData);

    getSprintList(): Observable<Sprint[]> {
        const sprintList = of(SPRINT_LIST);
        return sprintList;
    }

    update(data: string) {
        this.subject.next(data);
    }

    updateSelectedSprint(sprint: Sprint): void {
        this.sprintSubject.next(sprint);
    }
}
