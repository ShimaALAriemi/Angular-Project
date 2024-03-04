import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todolist } from '../Shared/Models/todolist';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const filters = [
  (item : Todolist) => item,
  (item : Todolist) => !item.isComplete,
  (item : Todolist) => item.isComplete
];


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolist';
  todoTask = '';
  listFilter: any = '0';

  todolist: Todolist[] = [
    new Todolist('Copmlete Angular Project'),
    new Todolist('Todo Angular Project', true),
    new Todolist('Movie Angular Project')
  ];

  get visibleItem() : Todolist[] {
    return this.todolist.filter(filters[this.listFilter]);
    /*
    let value = this.listFilter;

    if (value === '0') {
      return this.todolist;
    } else if (value === '1') {
      return this.todolist.filter(item => !item.isComplete);
    } else {
      return this.todolist.filter(item => item.isComplete);
    }
    */
  };



  addNewTodoTaskToList() {
    this.todolist.push(new Todolist(this.todoTask));
    this.todoTask = '';
  }



  toggelItem(item: Todolist) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }


}
