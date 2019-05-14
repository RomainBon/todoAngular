import { Injectable } from '@angular/core';
import { Task } from './task';
import { TaskProviderService } from './task-provider.service';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalCStatService {

  private data: number[];
  statSubjet = new Subject<number[]>();

  constructor(provider: TaskProviderService) {
    provider.getTasks().subscribe((tasks: Task[]) => {
      this.data = tasks.reduce(statReducer, [0, 0, 0]);
      this.statSubjet.next(this.data);
    });
  }

  getStat(): Observable<number[]> {
    return this.statSubjet.asObservable();
  }
}
const statReducer = (acc, cur) => {
  acc[cur.status]++;
  return acc;
}