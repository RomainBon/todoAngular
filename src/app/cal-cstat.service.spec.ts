import { TestBed } from '@angular/core/testing';

import { CalCStatService } from './cal-cstat.service';

describe('CalCStatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalCStatService = TestBed.get(CalCStatService);
    expect(service).toBeTruthy();
  });
});
