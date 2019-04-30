import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() task : Task;
  constructor() { }

  ngOnInit() {
  }
}