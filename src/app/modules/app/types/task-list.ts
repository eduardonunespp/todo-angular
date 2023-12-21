export type ITaskList = {
  id: string;
  name: string;
};

export type Task = {
  id: string;
  name: string;
  assignments: string[];
};

export type ItaskListFilter = {
  assignmentListId: string;
};

export type ITaskListById = {
  id: string;
  name: string;
  assignments: IAssignments[];
};

export type IAssignments = {
  id: string;
  description: string;
  assignmentListId: string;
  deadline: string;
  concluded: boolean;
  concludedAt: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};
