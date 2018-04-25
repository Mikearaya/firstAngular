import { TestBed, inject } from '@angular/core/testing';

import { PhoneBookManagerService } from './phone-book-manager.service';

describe('PhoneBookManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhoneBookManagerService]
    });
  });

  it('should be created', inject([PhoneBookManagerService], (service: PhoneBookManagerService) => {
    expect(service).toBeTruthy();
  }));
});
