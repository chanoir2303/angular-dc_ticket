import { Component, OnInit } from '@angular/core';
import {TooltipPosition} from "@angular/material/tooltip";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-team-panel-button',
  templateUrl: './team-panel-button.component.html',
  styleUrls: ['./team-panel-button.component.css']
})
export class TeamPanelButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // tooltip
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

}
