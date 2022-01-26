import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/interfaces/item';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  @Output() addTaskEvent: EventEmitter<Item> = new EventEmitter();
  taskForm!: FormGroup;
  charLimit: number = 50;
  constructor(private taskService: TaskServiceService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.taskForm = this.formbuilder.group(
      {
        taskLable: ["", [
          Validators.required
        ]],
        taskDescription: ["", [
          Validators.maxLength(50)
        ]],
        taskTime: ["", [
        ]],
        boolReminder: ["false"]
      }
    )
  }
  get taskLable() {
    return this.taskForm.controls['taskLable'];
  }
  get taskDescription() {
    return this.taskForm.get('taskDescription');
  }

  addTask(): void {
    let item: Item =
    {
      title: this.taskForm.value.taskLable,
      description: this.taskForm.value.taskDescription,
      reminder: this.taskForm.value.boolReminder,
    }
    this.addTaskEvent.emit(item);
  }

}
