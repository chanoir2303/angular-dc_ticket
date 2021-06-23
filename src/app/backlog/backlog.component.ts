import { Component, OnInit } from '@angular/core';
import { BACKLOG_DATA } from "../mock-ticket";
import {ThemePalette } from "@angular/material/core";

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {

  displayedColumns: string[] = ['id', 'status', 'lvl', 'category', 'tag', 'agent', 'lastUpdateTimestamp', 'lastUpdateAgent', 'userMail', 'closeTimestamp'];
  dataSource = BACKLOG_DATA;

  color: ThemePalette = 'warn';

  constructor() { }

  ngOnInit(): void {
  }

}
