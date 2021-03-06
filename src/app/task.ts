export enum TaskStatus {
    Todo = "Todo",
    Doing = "Doing",
    Done = "Done"
}

export class Task {
    id:number;
    name: string;
    status: TaskStatus;
    deadLine: Date;
}