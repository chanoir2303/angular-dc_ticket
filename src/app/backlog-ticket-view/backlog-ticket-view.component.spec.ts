import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklogTicketViewComponent } from './backlog-ticket-view.component';

describe('BacklogTicketViewComponent', () => {
  let component: BacklogTicketViewComponent;
  let fixture: ComponentFixture<BacklogTicketViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacklogTicketViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BacklogTicketViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
