import { TestBed, inject } from '@angular/core/testing';

import { AccountManagerService } from './account-manager.service';

describe('AccountManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountManagerService]
    });
  });

  it('should be created', inject([AccountManagerService], (service: AccountManagerService) => {
    expect(service).toBeTruthy();
  }));
});
