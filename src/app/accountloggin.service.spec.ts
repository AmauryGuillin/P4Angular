import { TestBed } from '@angular/core/testing';

import { AccountlogginService } from './accountloggin.service';

describe('AccountlogginService', () => {
  let service: AccountlogginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountlogginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
