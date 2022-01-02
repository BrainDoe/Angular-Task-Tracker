import { TaskInterface } from './../taskInterface';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();
  private editSubj = new Subject<TaskInterface>();

  constructor() { }

  toggleAddTask(): void{
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
  
  onEdit(item: TaskInterface) {
    return this.editSubj.next(item);
  }

  edit(): Observable<TaskInterface>{
    return this.editSubj.asObservable();
  }
}
