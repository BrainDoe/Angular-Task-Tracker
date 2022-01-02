import { Component, OnInit } from '@angular/core';
// import { MTASKS } from 'src/app/mock-tasks';
import { TaskServService } from 'src/app/services/task-serv.service';
import { TaskInterface } from 'src/app/taskInterface';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: TaskInterface[] = [];

  constructor(private taskService: TaskServService, private uiService: UiService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  // deleteTask(task: TaskInterface){
  //   this.taskService.deleteTask(task).subscribe(() => (this.mtasks.filter(t => t.id !== task.id)));
  // }

  deleteTask(task: TaskInterface){
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => {
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
      this.tasks.push(task);
    });
  }

  editTask(task: TaskInterface) {
    this.uiService.onEdit(task);
  }

  updateTask(task: TaskInterface) {
    this.taskService.updateTask(task).subscribe();
    // console.log(task);
  }

}
