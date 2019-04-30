import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {

  @Input() taskList: Array<Task>;
  @Output() taskSelected = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  select(taskClick :Task){
    //console.log("One Click on the nav list",taskClick);
    this.taskSelected.emit(taskClick);
  }
}
