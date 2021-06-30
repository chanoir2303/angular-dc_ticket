import { Component, OnInit } from '@angular/core';
import { ThemePalette } from "@angular/material/core";

@Component({
  selector: 'app-backlog-selector',
  templateUrl: './backlog-selector.component.html',
  styleUrls: ['./backlog-selector.component.css']
})
export class BacklogSelectorComponent implements OnInit {

  color: ThemePalette = 'warn';

  // toggle
  panelOpenState = false;
  checked = true;
  disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
