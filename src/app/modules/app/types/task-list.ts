export type ITaskList = {
    id: string
    name: string
}

export type Task = {
    id: string
    name: string
    assignments: string[]
}

export type ItaskListFilter = {
    assignmentList: string
}