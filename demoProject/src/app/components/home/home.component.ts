import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  addTaskBool: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  addTask() {
    this.addTaskBool = !(this.addTaskBool);
    console.log("Add new task!");
  }
}
