import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInONeCompComponent } from './all-in-one-comp.component';

describe('AllInONeCompComponent', () => {
  let component: AllInONeCompComponent;
  let fixture: ComponentFixture<AllInONeCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllInONeCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInONeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
