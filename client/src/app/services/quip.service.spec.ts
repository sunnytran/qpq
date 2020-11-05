import { TestBed } from '@angular/core/testing';

import { QuipService } from './quip.service';

describe('QuipService', () => {
  let service: QuipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
