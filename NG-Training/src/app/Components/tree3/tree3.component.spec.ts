import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tree3Component } from './tree3.component';

describe('Tree3Component', () => {
  let component: Tree3Component;
  let fixture: ComponentFixture<Tree3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tree3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tree3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
