import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { TicketTemplate } from "./ticket";
import { BACKLOG_DATA } from "./mock-ticket";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  getTicket(id: number): Observable<TicketTemplate> {
    const ticket = BACKLOG_DATA.find(h => h.id === id)!;
    return of(ticket);
  }



}
