import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import { MTASKS } from 'src/app/mock-tasks';
import { TaskInterface } from 'src/app/taskInterface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskServService {
  private appUrl = 'http://localhost:5000/tasks';

  constructor(private http:HttpClient) { }

  getTasks(): Observable<TaskInterface[]> {
    return this.http.get<TaskInterface[]>(this.appUrl);
  }

  deleteTask(task: TaskInterface): Observable<TaskInterface>{
    const url = `${this.appUrl}/${task.id}`;
    return this.http.delete<TaskInterface>(url);
  }

  updateTaskReminder(task: TaskInterface){
    const url = `${this.appUrl}/${task.id}`;
    return this.http.put<TaskInterface>(url, task, httpOptions);
  }

  addTask(task: TaskInterface): Observable<TaskInterface>{
    return this.http.post<TaskInterface>(this.appUrl, task, httpOptions);
  }

}
