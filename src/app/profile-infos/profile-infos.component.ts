import { Component, OnInit } from '@angular/core';
import { ThemePalette } from "@angular/material/core";

@Component({
  selector: 'app-profile-infos',
  templateUrl: './profile-infos.component.html',
  styleUrls: ['./profile-infos.component.css']
})
export class ProfileInfosComponent implements OnInit {

  color: ThemePalette = 'warn';

  constructor() { }

  ngOnInit(): void {
  }

}
