import { TestBed } from '@angular/core/testing';

import { DummyGuardService } from './dummy-guard.service';

describe('DummyGuardService', () => {
  let service: DummyGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
