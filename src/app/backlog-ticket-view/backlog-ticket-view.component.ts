import {Component, Input, OnInit} from '@angular/core';
import { TicketService } from "../ticket.service";
import { ActivatedRoute } from "@angular/router";
import { TicketTemplate } from "../ticket";
import { Location } from "@angular/common";

@Component({
  selector: 'app-backlog-ticket-view',
  templateUrl: './backlog-ticket-view.component.html',
  styleUrls: ['./backlog-ticket-view.component.css']
})
export class BacklogTicketViewComponent implements OnInit {

  @Input() ticket?: TicketTemplate;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTicket();
  }

  // take a snapshot of id extracted with paramMap and convert it into
  // a number
  getTicket(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ticketService.getTicket(id)
      .subscribe(ticket => this.ticket = ticket);
  }

  goBack(): void {
    this.location.back();
  }

}
