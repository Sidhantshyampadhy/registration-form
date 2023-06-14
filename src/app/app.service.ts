import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Todo } from './todo';

@Injectable()
export class AppService {
  todoArray: Todo[] = [];
  todoService = localStorage.setItem(
    'todoArray',
    JSON.stringify(this.todoArray)
  );
  setDataService = localStorage.setItem(
    'todoArray',
    JSON.stringify(this.todoArray)
  );

  getData() {
    this.todoService;
  }

  setData() {
    this.setDataService;
  }
}
