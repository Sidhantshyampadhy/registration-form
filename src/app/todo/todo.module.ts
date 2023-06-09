import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo.component';
import { TodoPageRoutingModule } from './todo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TodoPageRoutingModule,
  ],
  declarations: [TodoComponent],
})
export class TodoPageModule {}
