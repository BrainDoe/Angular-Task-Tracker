import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskInterface } from '../../taskInterface';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: TaskInterface;
  @Output() onDeleteTask: EventEmitter<TaskInterface> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<TaskInterface> = new EventEmitter();
  @Output() onEdit: EventEmitter<TaskInterface> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: TaskInterface){
    this.onDeleteTask.emit(task);
  }

  onToggle(task: TaskInterface){
    this.onToggleReminder.emit(task);
  }

  edit(task: TaskInterface) {
    this.onEdit.emit(task);
  }

}
