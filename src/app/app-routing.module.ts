import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BacklogViewComponent} from "./backlog-view/backlog-view.component";
import {ProfileViewComponent} from "./profile-view/profile-view.component";
import {BacklogTicketViewComponent} from "./backlog-ticket-view/backlog-ticket-view.component";

const routes: Routes = [
  { path: 'backlog', component: BacklogViewComponent },
  { path: 'backlog/:id', component: BacklogTicketViewComponent},
  { path: 'profile', component: ProfileViewComponent },
  { path: '', redirectTo: '/backlog', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
