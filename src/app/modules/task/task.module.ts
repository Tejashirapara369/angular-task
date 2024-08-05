import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Menu1Component } from 'src/app/menu1/menu1.component';
import { ProgressCardComponent } from 'src/app/shared/progress-card/progress-card.component';


@NgModule({
  declarations: [
    TodoDashboardComponent,
    ProgressCardComponent,
    NavbarComponent,
    Menu1Component
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }

