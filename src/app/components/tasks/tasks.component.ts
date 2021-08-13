import { Component, OnInit } from '@angular/core';
import { MTASKS } from 'src/app/mock-tasks';
import { TaskServService } from 'src/app/services/task-serv.service';
import { TaskInterface } from 'src/app/taskInterface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  mtasks: TaskInterface[] = [];

  constructor(private taskService: TaskServService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((mtasks) => this.mtasks = mtasks);
  }

  // deleteTask(task: TaskInterface){
  //   this.taskService.deleteTask(task).subscribe(() => (this.mtasks.filter(t => t.id !== task.id)));
  // }

  deleteTask(task: TaskInterface){
    this.taskService.deleteTask(task).subscribe(() => {
      this.mtasks = this.mtasks.filter((t) => {
        t.id !== task.id;
      })
    })
  }

  toggleReminder(task: TaskInterface){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: TaskInterface){
    this.taskService.addTask(task).subscribe((task) => {
      this.mtasks.push(task);
    });
  }


}
