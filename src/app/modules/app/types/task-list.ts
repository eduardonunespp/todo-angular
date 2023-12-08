export type ITaskList = {
    items: Task
}

export type Task = {
    id: string
    name: string
    assignments: []
}