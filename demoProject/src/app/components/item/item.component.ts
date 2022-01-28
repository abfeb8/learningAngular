import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;
  isReminder: boolean = false;
  constructor(private taskService: TaskServiceService) { }

  ngOnInit(): void {
    this.isReminder = this.item.reminder;
  }

  delItem(title: string) {
    this.taskService.removeTask(this.item).subscribe();
  }
}
