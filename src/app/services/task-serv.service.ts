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
  private apiUrl = 'http://localhost:50001/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<TaskInterface[]> {
    return this.http.get<TaskInterface[]>(this.apiUrl);
  }

  deleteTask(task: TaskInterface): Observable<TaskInterface>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<TaskInterface>(url);
  }

  updateTaskReminder(task: TaskInterface){
    const url = `${this.apiUrl}/${task.id}`;
    console.log(url);
    return this.http.put<TaskInterface>(url, task, httpOptions);
  }
  
  updateTask(task: TaskInterface): Observable<TaskInterface>{
    const url = `${this.apiUrl}/${task.id}`;
    console.log(url);
    return this.http.put<TaskInterface>(url, task, httpOptions);
  }

  addTask(task: TaskInterface): Observable<TaskInterface>{
    return this.http.post<TaskInterface>(this.apiUrl, task, httpOptions);
  }

}
