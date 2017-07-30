import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  listArray = [];

  addNewListItem(data){
      this.listArray.push(data);

  }
  changeStatusData(value){
      for(var i=0;i<this.listArray.length;i++){
        if(this.listArray[i].id == value.data.id){
          this.listArray[i].status = value.status;
          break;
        }
      }
  }
  deleteData(value){
    for(var i=0;i<this.listArray.length;i++){
      if(this.listArray[i].id == value.id){

        this.listArray.splice(i,1);
        //console.log(this.listArray);
        break;
      }
    }

  }
  clearList(){
    this.listArray = [];
  }
}
