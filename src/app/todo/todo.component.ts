import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Todo1 } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todoArray: Todo1[] = [];
  todo!: FormArray;
  todoForm!: FormGroup;
  checked: boolean = true;
  value: any;
  editable = false;
  editableTodoItem!: FormControl;
  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      checked: fb.control(true),
      value: this.value,
    });
    localStorage.getItem('todoArray');
  }

  saveItem(todo: Todo1) {
    todo.value = this.editableTodoItem.value;
    console.log(this.todoArray);
    this.editable = false;
  }

  addTodo(value: string) {
    if (value !== '') {
      this.todoArray?.unshift({
        id: this.todoArray.length + 1,
        value,
        checked: true,
      });
      localStorage.setItem('todoArray', JSON.stringify(this.todoArray));
      console.log(this.todoArray);
    } else {
      alert('Field required **');
    }
  }

  deleteItem(todo: any) {
    this.todoArray.forEach((value, index) => {
      if (todo == this.todoArray[index]) this.todoArray.splice(index, 1);
    });
    console.log(this.todoArray);
  }
}
