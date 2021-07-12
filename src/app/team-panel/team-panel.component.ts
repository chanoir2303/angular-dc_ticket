import { Component, OnInit } from '@angular/core';

interface GroupsTemplate {
  nameGroups: string,
  app: string
}

interface TeamsTemplate {
  id: number,
  nameAgent: string,
}

const GROUPS_DATA: GroupsTemplate[] = [
  { nameGroups: "Team 1", app: "1 & 2" },
  { nameGroups: "Team 2", app: "3 & 4" },
  { nameGroups: "Team 3", app: "5 & 6" },
  { nameGroups: "Team 4", app: "7 & 8" },
]

const TEAMS_DATA: TeamsTemplate[] = [
  { id: 1, nameAgent: "Mickey Mouse" },
  { id: 2, nameAgent: "Sirius Black" },
  { id: 3, nameAgent: "Sacha Ketchum" },
  { id: 4, nameAgent: "SpongeBob"}
]

@Component({
  selector: 'app-team-panel',
  templateUrl: './team-panel.component.html',
  styleUrls: ['./team-panel.component.css']
})

export class TeamPanelComponent implements OnInit {

  panelOpenState = false;

  data = TEAMS_DATA;
  groups = GROUPS_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
