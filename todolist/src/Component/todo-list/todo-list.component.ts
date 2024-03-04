import { Component, OnInit , Input} from '@angular/core';
import { Todolist } from '../../Shared/Models/todolist';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
@Input()  todos : Todolist[] = [];

  toggelItem(item: Todolist) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
