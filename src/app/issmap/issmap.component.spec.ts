import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssmapComponent } from './issmap.component';

describe('IssmapComponent', () => {
  let component: IssmapComponent;
  let fixture: ComponentFixture<IssmapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssmapComponent]
    });
    fixture = TestBed.createComponent(IssmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
