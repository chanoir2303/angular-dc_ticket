// @angular/cli
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// @angular/material
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';

// component
import { AppComponent } from './app.component';
import { BacklogComponent } from './backlog/backlog.component';
import { BacklogSelectorComponent } from './backlog-selector/backlog-selector.component';
import { BacklogToolsComponent } from './backlog-tools/backlog-tools.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    AppComponent,
    BacklogComponent,
    BacklogSelectorComponent,
    BacklogToolsComponent
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
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
