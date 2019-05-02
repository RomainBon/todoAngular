import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskProviderService {

  constructor(private http: HttpClient) { }

  getTasks():Observable<Task[]> {
    return this.http.get<Task[]>('/assets/tasks.json')
  }
}
