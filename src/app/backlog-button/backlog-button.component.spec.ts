import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklogButtonComponent } from './backlog-button.component';

describe('BacklogButtonComponent', () => {
  let component: BacklogButtonComponent;
  let fixture: ComponentFixture<BacklogButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacklogButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BacklogButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
