import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../TaskService@angular/core';
import { TaskService } from './../../services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent implements OnInit {
  myId = 4;

  newTask = {
    id: this.myId,
    title: '',
    description: '',
  };

  constructor(private listServ: TaskService) {}

  ngOnInit(): void {}

  addTask() {
    console.log('Sending the data...', this.newTask);
    this.listServ.addTask(this.newTask);
    this.myId++;
    this.newTask = {
      id: 0,
      title: '',
      description: '',
    };
  }
}
