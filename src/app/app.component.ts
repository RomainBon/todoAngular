import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskProviderService } from './task-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tasks: Array<Task> = [];
 

  constructor(public manager: TaskProviderService) {}

  ngOnInit(): void {
    this.tasks = this.manager.tasks;
  } 
  currentTask = this.tasks[0];
  setCurentTask(task: Task) {
    this.currentTask = task;
  }
  addTaskToList(task: Task) {
    this.tasks.unshift(task);
    this.currentTask = task;
  }
}