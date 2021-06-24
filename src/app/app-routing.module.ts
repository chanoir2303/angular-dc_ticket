import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BacklogViewComponent} from "./backlog-view/backlog-view.component";
import {ProfileViewComponent} from "./profile-view/profile-view.component";

const routes: Routes = [
  { path: 'backlog', component: BacklogViewComponent },
  { path: 'profile', component: ProfileViewComponent },
  { path: '', redirectTo: '/backlog', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
