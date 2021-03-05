import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveTaskComponent } from './directive-task.component';

describe('DirectiveTaskComponent', () => {
  let component: DirectiveTaskComponent;
  let fixture: ComponentFixture<DirectiveTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
