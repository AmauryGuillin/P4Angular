import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountlogginComponent } from './accountloggin.component';

describe('AccountlogginComponent', () => {
  let component: AccountlogginComponent;
  let fixture: ComponentFixture<AccountlogginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountlogginComponent]
    });
    fixture = TestBed.createComponent(AccountlogginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
