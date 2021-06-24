import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ThemePalette} from "@angular/material/core";

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
  selector: 'app-backlog-dialog',
  templateUrl: './backlog-dialog.component.html',
  styleUrls: ['./backlog-dialog.component.css']
})
export class BacklogDialogComponent implements OnInit {

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

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
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

}
