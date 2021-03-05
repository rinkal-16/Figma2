import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTreeComponent } from './sub-tree.component';

describe('SubTreeComponent', () => {
  let component: SubTreeComponent;
  let fixture: ComponentFixture<SubTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
