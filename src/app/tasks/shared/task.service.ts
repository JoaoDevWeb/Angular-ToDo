import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [
    { id: 1, description: 'Tarefa 1', completed: false},
    { id: 2, description: 'Tarefa 2', completed: true},
    { id: 3, description: 'Tarefa 3', completed: true},
    { id: 4, description: 'Tarefa 4', completed: false},
    { id: 5, description: 'Tarefa 5', completed: true},
  ];

  constructor() { }

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    const task = this.tasks.find((value) => value.id == id);
    return task;
  }

  save(task: Task) {
    if (task.id) {
      const taskArr = this.getById(task.id);
      taskArr.description = task.description;
      task.completed = task.completed;
    } else {
      const lastId = this.tasks[this.tasks.length-1].id;
      task.id = lastId + 1;
      task.completed = false;
      this.tasks.push(task);
    }
  }

  delete(id: number) {
    const taskIndex = this.tasks.findIndex((value) => value.id == id);
    this.tasks.splice(taskIndex, 1);
  }

}
