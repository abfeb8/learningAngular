import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/interfaces/item';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  taskForm!: FormGroup;
  description: string = "";
  charLimit: number = 50;
  constructor(private taskService: TaskServiceService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.taskForm = this.formbuilder.group(
      {
        taskLable: ["", Validators.required],
        taskDescription: ["", Validators.required],
        taskTime: ["", Validators.required],
        boolReminder: ["", Validators.required]
      }
    )
  }

  addTask() {
    let item: Item =
    {
      title: this.taskForm.value.taskLable,
      description: this.taskForm.value.taskDescription,
      reminder: this.taskForm.value.boolReminder,
    }
    this.taskService.addTask(item);
  }

}
