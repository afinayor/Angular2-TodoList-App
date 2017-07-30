import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

import { ListItem } from '../classes/ListItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() listData;
  @Output() upChangeStatus = new EventEmitter<Object>();
  @Output() deleteItemApp = new EventEmitter<ListItem>();
  constructor() { }

  ngOnInit() {
  }
  statusChange(data){
    this.upChangeStatus.emit(data);

  }
  deleteItem(data){
    this.deleteItemApp.emit(data);
  }
}
