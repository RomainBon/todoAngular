import { Injectable } from '@angular/core';
import { Task, TaskStatus } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskProviderService {

  constructor() { }

  tasks: Array<Task> = [
    {
      name: "Apprendre Angular",
      status: TaskStatus.Doing,
      deadLine: new Date('2019-05-03')
    },
    {
      name: "Faire une todoList",
      status: TaskStatus.Todo,
      deadLine: new Date('2019-04-29')
    },
    {
      name: "Finir la formation",
      status: TaskStatus.Doing,
      deadLine: new Date('2019-05-30')
    },
    {
      name: "Apprendre Le COBOL",
      status: TaskStatus.Todo,
      deadLine: new Date('1901-01-01')
    },
    {
      name: "Aller a CapG",
      status: TaskStatus.Todo,
      deadLine: new Date('2019-06-04')
    },
    {
      name: "Adopter des chatons",
      status: TaskStatus.Todo,
      deadLine: new Date('2019-05-12')
    }
  ];
}
