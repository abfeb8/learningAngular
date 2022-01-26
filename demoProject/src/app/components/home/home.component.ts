import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  addTaskBool: boolean = false;
  buttonText: string = "Add"
  constructor(private taskService: TaskServiceService) { }

  ngOnInit(): void {
  }
  toggleForm() {
    if (this.addTaskBool) {
      this.addTaskBool = false;
      this.buttonText = "Add"
    } else {
      this.addTaskBool = true;
      this.buttonText = "^"
    }
  }

  addTask(item: Item) {
    this.taskService.addTask(item).subscribe();
    this.toggleForm();
  }
}
