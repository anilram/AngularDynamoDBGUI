import { TestBed } from '@angular/core/testing';

import { HardCodedServiceService } from './hard-coded-service.service';

describe('HardCodedServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardCodedServiceService = TestBed.get(HardCodedServiceService);
    expect(service).toBeTruthy();
  });
});
