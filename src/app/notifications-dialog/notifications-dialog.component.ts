import { Component, OnInit } from '@angular/core';
import { ThemePalette } from "@angular/material/core";

@Component({
  selector: 'app-notifications-dialog',
  templateUrl: './notifications-dialog.component.html',
  styleUrls: ['./notifications-dialog.component.css']
})
export class NotificationsDialogComponent implements OnInit {

  color: ThemePalette = 'warn';

  constructor() { }

  ngOnInit(): void {
  }

}
