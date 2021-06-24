import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-backlog-button',
  templateUrl: './backlog-button.component.html',
  styleUrls: ['./backlog-button.component.css'],
  // Need to remove view encapsulation so that the custom tooltip style defined in
  // `tooltip-custom-class-example.css` will not be scoped to this component's view.
  encapsulation: ViewEncapsulation.None,
})
export class BacklogButtonComponent implements OnInit {

  // badge
  hidden = false;
  hiddenBis = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  toggleBadgeVisibilityBis() {
    this.hiddenBis = !this.hiddenBis;
  }

  // tooltip
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  constructor() { }

  ngOnInit(): void {
  }

}
