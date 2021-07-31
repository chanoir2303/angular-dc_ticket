import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPanelButtonComponent } from './team-panel-button.component';

describe('TeamPanelButtonComponent', () => {
  let component: TeamPanelButtonComponent;
  let fixture: ComponentFixture<TeamPanelButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamPanelButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPanelButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
