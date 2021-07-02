import { Component, OnInit } from '@angular/core';
import { ThemePalette } from "@angular/material/core";

@Component({
  selector: 'app-backlog-navbar',
  templateUrl: './backlog-navbar.component.html',
  styleUrls: ['./backlog-navbar.component.css']
})
export class BacklogNavbarComponent implements OnInit {

  constructor() { }

  color: ThemePalette = 'warn';

  ngOnInit(): void {
  }

}
