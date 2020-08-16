import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Taks';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})
export class ListTasksComponent implements OnInit {
  myTasks: task[]

  constructor(private listServ: TaskService) { }

  ngOnInit(): void {
    this.myTasks = this.listServ.getTasks();
    console.log("my tasks : " , this.myTasks);
  }
}
