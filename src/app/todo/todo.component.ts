import { Component, Input } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Todo } from '../todo';
import { AppService } from '../app.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todoArray: Todo[] = [];
  todo!: FormArray;
  todoForm!: FormGroup;
  checked: boolean = true;
  value!: string;
  editable = false;
  editableTodoItem!: FormControl;
  serviceLink: any;
  todoService: any;
  today = new Date().toISOString();

  constructor(private fb: FormBuilder, public AppService: AppService) {
    this.todoForm = this.fb.group({
      checked: fb.control(true),
      value: [this.value, Validators.required],
    });
    this.serviceLink = this.AppService.getData();
    this.todoService = this.AppService.setData();
    this.serviceLink;
  }

  saveItem(todo: Todo) {
    todo.value = this.editableTodoItem?.value;
    this.editable = false;
    console.log(todo);
  }

  addTodo(value: string) {
    if (value !== '') {
      this.todoArray?.unshift({
        id: this.todoArray.length + 1,
        value,
        checked: this.checked,
      });
      this.todoService;
    }
  }

  deleteItem(todo: Todo) {
    this.todoArray.forEach((value, index) => {
      if (todo == this.todoArray[index]) this.todoArray.splice(index, 1);
    });
  }
}
