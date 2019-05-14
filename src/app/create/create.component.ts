import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskProviderService } from '../task-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  newTask = new Task();

  constructor(private provider: TaskProviderService,
    private router: Router) { }
  addTask() {
    this.provider.add(this.newTask);
    this.router.navigate(['/task',this.newTask.id]);
  }


}
