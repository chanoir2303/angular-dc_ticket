import {Component, Input, OnInit} from '@angular/core';
import { TicketService } from "../ticket.service";
import { ActivatedRoute } from "@angular/router";
import { TicketTemplate } from "../ticket";
import { Location } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ThemePalette } from "@angular/material/core";

// selector interface
interface Category {
  value: string;
  viewValue: string;
}

interface Tag {
  value: string;
  viewValue: string;
}

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
    private location: Location,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getTicket();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

  color: ThemePalette = 'warn';

  // selector input
  category: Category [] = [
    { value: 'account-0', viewValue: 'Account' },
    { value: 'errors-1', viewValue: 'Errors' }
  ]

  // @ts-ignore
  selectedValue: string;

  tag: Tag [] = [
    { value: 'pass-0', viewValue: 'Forgotten password' },
    { value: '500-1', viewValue: '500 error' },
    { value: '404-2', viewValue: '404 error' }
  ]

  // stepper
  isLinear = false;
  // @ts-ignore
  firstFormGroup: FormGroup;
  // @ts-ignore
  secondFormGroup: FormGroup;
  // @ts-ignore
  thirdFormGroup: FormGroup;

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
