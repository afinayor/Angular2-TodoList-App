import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AddToListFormComponent } from './add-to-list-form/add-to-list-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ListItemComponent } from './Todo-List/list-item/list-item.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AddToListFormComponent,
    TodoListComponent,
    ListItemComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
