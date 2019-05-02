import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskProviderService } from '../task-provider.service'
import { CurrentTaskProviderService } from '../current-task-provider.service'

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {

  taskList: Array<Task>;

  constructor(private provider: TaskProviderService,
    private current: CurrentTaskProviderService) {
  }

  ngOnInit() {
    this.provider.getTasks().subscribe(tasks => this.taskList = tasks)
  }

  select(task: Task) {
    //console.log("One Click on the nav list",task);
    this.current.define(task);
  }
}
