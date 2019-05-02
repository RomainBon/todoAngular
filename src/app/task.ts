export enum TaskStatus {
    Todo,
    Doing,
    Done
}

export class Task {
    name: string;
    status: TaskStatus;
    deadLine: Date;
}