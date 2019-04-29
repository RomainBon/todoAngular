export enum TaskStatus{
    Todo="Tomorrow, I begin ",
    Doing="Doing",
    Done="Already done boss ;)"
}

export class Task{
    name:string;
    status:TaskStatus;
    deadLine: Date;
}