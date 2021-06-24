import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklogDialogComponent } from './backlog-dialog.component';

describe('BacklogDialogComponent', () => {
  let component: BacklogDialogComponent;
  let fixture: ComponentFixture<BacklogDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacklogDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BacklogDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
