import { Component, OnInit } from '@angular/core';
import { ThemePalette } from "@angular/material/core";

@Component({
  selector: 'app-backlog-selector',
  templateUrl: './backlog-selector.component.html',
  styleUrls: ['./backlog-selector.component.css']
})
export class BacklogSelectorComponent implements OnInit {

  panelOpenState = false;

  color: ThemePalette = 'warn';
  checked = true;
  disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
