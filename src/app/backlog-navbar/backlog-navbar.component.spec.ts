import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklogNavbarComponent } from './backlog-navbar.component';

describe('BacklogNavbarComponent', () => {
  let component: BacklogNavbarComponent;
  let fixture: ComponentFixture<BacklogNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacklogNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BacklogNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
