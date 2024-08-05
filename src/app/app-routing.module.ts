import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'task', loadChildren: ()=>import('./modules/task/task.module').then((m)=>m.TaskModule)},
  //Wildcard route - default redirect to Dashboard
  {path : '**', redirectTo:'task'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
