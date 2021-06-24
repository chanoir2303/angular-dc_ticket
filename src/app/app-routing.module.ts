import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BacklogViewComponent} from "./backlog-view/backlog-view.component";

const routes: Routes = [
  { path: 'backlog', component: BacklogViewComponent },
  // { path: '', redirectTo: '/backlog', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
