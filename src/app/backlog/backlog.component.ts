import { Component, OnInit } from '@angular/core';
import { ThemePalette } from "@angular/material/core";
import { BACKLOG_DATA } from "../mock-ticket";


@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {

  color: ThemePalette = 'warn';

  // table
  displayedColumns: string[] = ['id', 'status', 'lvl', 'category', 'tag', 'agent', 'lastUpdateTimestamp', 'lastUpdateAgent', 'userMail', 'closeTimestamp'];
  dataSource = BACKLOG_DATA;

  constructor() { }

  ngOnInit(): void {
  }
}
