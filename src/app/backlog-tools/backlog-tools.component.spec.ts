import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklogToolsComponent } from './backlog-tools.component';

describe('BacklogToolsComponent', () => {
  let component: BacklogToolsComponent;
  let fixture: ComponentFixture<BacklogToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacklogToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BacklogToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
