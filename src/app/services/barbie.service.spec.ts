import { TestBed } from '@angular/core/testing';

import { BarbieService } from './barbie.service';

describe('BarbieService', () => {
  let service: BarbieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarbieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
