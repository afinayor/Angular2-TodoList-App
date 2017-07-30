import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';

import { ListItem } from '../../classes/ListItem';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() listItemCon;
  @Output() itemStatusChanged = new EventEmitter<Object>();
  @Output() deleteItem = new EventEmitter<ListItem>();
  constructor() { }
  ngOnInit() {
  }
  delete(data: ListItem){
    this.deleteItem.emit(data);
  }

  changeStatus(data : Object){
    this.itemStatusChanged.emit(data);

  }

}
