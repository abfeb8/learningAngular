import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  // mock items 
  items: Item[] = [
    {
      id: 1,
      title: "Shopping",
      description: "Go to mall for grocery shoping",
      reminder: false
    },
    {
      id: 2,
      title: "Recharge",
      description: "purchase data plain for mobile",
      reminder: true
    },
  ]

  constructor() { }

  getALLTasks(): Observable<Item[]> {
    return of(this.items);
  }

  removeTask(item: Item) {
    console.log("remove task with id: " + item.id);
  }
}
