// @angular/cli
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

// @angular/material
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';

// component
import { AppComponent } from './app.component';
import { BacklogComponent } from './backlog/backlog.component';
import { BacklogSelectorComponent } from './backlog-selector/backlog-selector.component';
import { BacklogToolsComponent } from './backlog-tools/backlog-tools.component';
import { BacklogViewComponent } from './backlog-view/backlog-view.component';
import { BacklogNavbarComponent } from './backlog-navbar/backlog-navbar.component';
import { BacklogButtonComponent } from './backlog-button/backlog-button.component';
import { BacklogDialogComponent } from './backlog-dialog/backlog-dialog.component';
import { NotificationsDialogComponent } from './notifications-dialog/notifications-dialog.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileInfosComponent } from './profile-infos/profile-infos.component';


@NgModule({
  declarations: [
    AppComponent,
    BacklogComponent,
    BacklogSelectorComponent,
    BacklogToolsComponent,
    BacklogViewComponent,
    BacklogNavbarComponent,
    BacklogButtonComponent,
    BacklogDialogComponent,
    NotificationsDialogComponent,
    ProfileViewComponent,
    ProfileInfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatInputModule,
    MatBadgeModule,
    MatTooltipModule,
    MatDialogModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
