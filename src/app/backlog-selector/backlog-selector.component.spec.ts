import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklogSelectorComponent } from './backlog-selector.component';

describe('BacklogSelectorComponent', () => {
  let component: BacklogSelectorComponent;
  let fixture: ComponentFixture<BacklogSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacklogSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BacklogSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
