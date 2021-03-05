import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigmaUIComponent } from './figma-ui.component';

describe('FigmaUIComponent', () => {
  let component: FigmaUIComponent;
  let fixture: ComponentFixture<FigmaUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FigmaUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FigmaUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
