import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/tasks';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})
export class ListTasksComponent implements OnInit {
  myTasks: Task[];

  constructor(private listServ: TaskService) {}

  ngOnInit(): void {
    this.myTasks = this.listServ.getTasks();
    console.log('My tasks : ', this.myTasks);
  }
}
