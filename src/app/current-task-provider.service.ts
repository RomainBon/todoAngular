import { TaskProviderService } from './task-provider.service';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})

export class CurrentTaskProviderService {

  taskSubjet = new Subject<Task>();

  constructor(private provider: TaskProviderService) {
    this.provider.getTasks().subscribe(tasks => this.taskSubjet.next(tasks[0]))
  }

  getCurrentTask(): Observable<Task> {
    // les composent peuvent etre souscir aux observable 
    //mais ils ne doive pas pouvoir declancher de nouveaux etats
    return this.taskSubjet.asObservable();
  }

  define(task: Task) {
    // En cas de changement de Tâche courante 
    //on modifie tous les observateur avec un nouvel etat
    this.taskSubjet.next(task);
  }
}
