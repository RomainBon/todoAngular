import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskProviderService {

  tasks = new Array<Task>();
  tasksSubjet = new ReplaySubject<Task[]>(1);
  nextID:number;

  constructor(private http: HttpClient) {
    this.http.get<Task[]>('/assets/tasks.json').subscribe(tasks => {
      this.tasks = tasks;
      this.nextID=this.tasks.reduce((maxId: number, task: Task) => Math.max(maxId, task.id), 0) + 1;
      this.tasksSubjet.next(this.tasks);
    })
  }

  getTasks(): Observable<Task[]> {
    return this.tasksSubjet.asObservable();
  }

  add(newTask: Task) {

    newTask.id = this.nextID++;
    //ajoute au debut du tableau
    this.tasks.unshift(newTask);
    //notifie tous abooné avec la nouvelle version de la liste
    this.tasksSubjet.next(this.tasks);

  }
  getbyId(id: number) {
    const task = this.tasks.find((taskelt: Task) => taskelt.id === id);
    console.log(task);
    return task;
  }
}
