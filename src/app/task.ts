export enum TaskStatus {
    Todo="Todo",
    Doing="Doing",
    Done="Done"
}

export class Task {
    name: string;
    status: TaskStatus;
    deadLine: Date;
}