import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { NAV_LIST } from 'src/app/constant/app-constant';
import { Menu1Component } from 'src/app/menu1/menu1.component';
import { Menu2Component } from 'src/app/menu2/menu2.component';
import { Menu3Component } from 'src/app/menu3/menu3.component';
import { Menu4Component } from 'src/app/menu4/menu4.component';

const routes: Routes = [
  {
    path: '',
    component: TodoDashboardComponent,
    children: [
      {
        path: 'menu1',
        component: Menu1Component,
      },
      {
        path: 'menu2',
        component: Menu2Component,
      },
      {
        path: 'menu3',
        component: Menu3Component,
      },
      {
        path: 'menu4',
        component: Menu4Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
