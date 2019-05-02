import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { CurrentTaskProviderService } from '../current-task-provider.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  task = new Task();

  constructor(private currentTaskProviderService: CurrentTaskProviderService) { }

  ngOnInit() {
    this.currentTaskProviderService.getCurrentTask().subscribe(task => this.task = task)
  }
}