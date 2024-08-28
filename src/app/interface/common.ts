export interface Common {
}

export interface User {
    name: string;
    email: string;
    role: string;
    password: string;
}

export type Statuses = 'Todo' | 'InProgress' | 'Done' | 'Testing' | 'Deploy';
export interface Task {
    id: string,
    title: string;
    description: string;
    dueDate: string;
    status: Statuses
    priority: string;
  }