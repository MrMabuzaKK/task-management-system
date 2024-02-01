declare enum TaskStatus {
    Done = "done",
    InProgress = "in progress",
    Pending = "pending"
}
export declare class Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
export {};
