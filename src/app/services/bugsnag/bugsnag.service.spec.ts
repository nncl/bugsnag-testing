import { TestBed } from '@angular/core/testing';

import { BugsnagService } from './bugsnag.service';

describe('BugsnagService', () => {
  let service: BugsnagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BugsnagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
