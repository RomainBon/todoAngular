import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { TaskProviderService } from './task-provider.service';
import { Task } from './task';

const tasksFactory = (language) => {
  if (language == "fr") {
    return new Task();
  } else {
    return new Task();
  }

}

@NgModule({
  declarations: [
    AppComponent,
    NavListComponent,
    DetailComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TaskProviderService,
    /* diffrente facon de call un service
    { provide: TaskProviderService2, useClass: TaskProviderService },
    { provide: TaskProviderService3, useExisting: TaskProviderService },//Cree un alias sur un service existant
    { provide: Task, useValue: { name: "Coucou" } },
    { provide: Task, useFactory: tasksFactory, deps: ["fr"] }
    */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
