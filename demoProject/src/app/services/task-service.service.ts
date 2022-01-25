import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  // mock items 
  url: string = "http://localhost:3000/tasks";

  constructor(private http: HttpClient) { }

  getALLTasks(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url);
  }

  removeTask(item: Item): Observable<Item> {
    console.log(`remove ${item.title} @ ${this.url}/${item.id}`);
    const delUrl = `${this.url}/${item.id}`
    return this.http.delete<Item>(delUrl);
  }

  addTask(item: Item): Observable<Item> {
    console.log(item);
    return this.http.post<Item>(this.url, item);
  }
}
