import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowStatComponent } from './show-stat/show-stat.component';

const appRoutes: Routes = [
  { path: 'todolist', component: NavListComponent },
  { path: 'create', component: CreateComponent },
  { path: 'task/:id', component: DetailComponent },
  { path: '', redirectTo: '/todolist', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    NavListComponent,
    DetailComponent,
    CreateComponent,
    ShowStatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
