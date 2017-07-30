import { Component, OnInit , Output , EventEmitter} from '@angular/core';

//import the list item object
import { ListItem } from '../classes/ListItem';
import { IdGenerator } from '../classes/IdGenerator';

@Component({
  selector: 'app-add-to-list-form',
  templateUrl: './add-to-list-form.component.html',
  styleUrls: ['./add-to-list-form.component.css']
})
export class AddToListFormComponent implements OnInit {
  public listItem  = '';
  @Output() listItemAdded = new EventEmitter<ListItem>();
  @Output() clearTodoList = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

    getUniqueId(){


    }
  addToList(){
      var generator = new IdGenerator(5);
      var id = generator.generate();
      var listItemObj = new ListItem(this.listItem,'incomplete',id);
      this.listItem = "";
      this.listItemAdded.emit(listItemObj);

  }
    clearList(){
        this.clearTodoList.emit();
    }
}
