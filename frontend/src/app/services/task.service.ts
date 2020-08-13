import { Injectable } from '@angular/core';
// import { Task } from '../models/Task';
// import { Task } from '../models/Taks';
import { Task } from '../models/Task';

const TaskList = [
  {
    id: 1,
    title: 'Coding',
    description: 'Which is awesome',
  },
  {
    id: 2,
    title: 'Doing another thing',
    description: 'that´s fine',
  },
  {
    id: 3,
    title: 'what else',
    description: 'yeah whatever',
  },
];

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks() {
    return TasksList;
  }

  getOneTask(_id) {
    return TasksList.find((task) => task.id === _id);
  }
  addTask(task: Task) {
    TasksList.push(task);
  }
  editTask(newTaskEdit) {
    const index = TasksList.findIndex((task) => task.id === newTaskEdit.id);

    TaskList[index] = newTaskEdit;
  }
  deleteTask(_id) {
    TaskList.splice(_id, 1);
  }
}
