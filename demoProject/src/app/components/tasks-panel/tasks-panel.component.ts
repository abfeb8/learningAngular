import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-tasks-panel',
  templateUrl: './tasks-panel.component.html',
  styleUrls: ['./tasks-panel.component.css']
})
export class TasksPanelComponent implements OnInit {
  // mock items 
  items: Item[] = []
  constructor(private taskServices: TaskServiceService) { }

  ngOnInit(): void {
    this.taskServices.getALLTasks().subscribe(val => this.items = val)
  }

}
