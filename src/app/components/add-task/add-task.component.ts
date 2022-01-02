import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { TaskInterface } from 'src/app/taskInterface';
import { TaskServService } from 'src/app/services/task-serv.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit, OnDestroy {
  @Output() onAddTask: EventEmitter<TaskInterface> = new EventEmitter();
  @Output() onEditTask: EventEmitter<TaskInterface> = new EventEmitter();
  @Output() onUpdateTask: EventEmitter<TaskInterface> = new EventEmitter();

  text: string = '';
  day: string = '';
  reminder: boolean = false;
  id?: number;

  editNode: boolean = true;

  showAddTask!: boolean;
  subscription: Subscription;
  endEditSub!: Subscription;

  constructor(private uiService: UiService, private route: ActivatedRoute, private taskService: TaskServService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => (this.showAddTask = value));
  }
  
  ngOnInit(): void {
    this.initEdit();
  }
  
  onSubmit(){
    if(!this.text){
      alert('Please add something to the textbox');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
      id: this.id
    }

    if(this.editNode) {
      this.onUpdateTask.emit(newTask);
    }
    
    this.onAddTask.emit(newTask);
    
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
  
  initEdit() {
    this.endEditSub = this.uiService.edit().subscribe((data) => {
      this.editNode = true;
      this.showAddTask = true;
      
      this.text = data.text;
      this.day = data.day;
      this.reminder = data.reminder;
      this.id = data.id;
    });
    
  }

  ngOnDestroy() {
    this.endEditSub.unsubscribe();
  }

}

