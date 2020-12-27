import { TestBed } from '@angular/core/testing';

import { GetJobDataService } from './get-job-data.service';

describe('GetJobDataService', () => {
  let service: GetJobDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetJobDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
