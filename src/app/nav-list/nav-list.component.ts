import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {

  @Input() taskList: Array<Task>;

  constructor() { }

  ngOnInit() {
  }

}
