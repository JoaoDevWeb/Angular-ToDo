import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskListItemComponent } from './task/task-list-item/task-list-item.component';
import { TaskFormComponent } from './tasks/task-form/task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskListItemComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
