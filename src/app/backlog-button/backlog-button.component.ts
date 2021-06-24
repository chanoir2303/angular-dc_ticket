import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backlog-button',
  templateUrl: './backlog-button.component.html',
  styleUrls: ['./backlog-button.component.css']
})
export class BacklogButtonComponent implements OnInit {

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
