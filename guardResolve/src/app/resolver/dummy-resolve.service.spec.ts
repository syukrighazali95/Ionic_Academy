import { TestBed } from '@angular/core/testing';

import { DummyResolveService } from './dummy-resolve.service';

describe('DummyResolveService', () => {
  let service: DummyResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
