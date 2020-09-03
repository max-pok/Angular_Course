import { TestBed } from '@angular/core/testing';

import { ArchiveDataService } from './archive-data.service';

describe('ArchiveDataService', () => {
  let service: ArchiveDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchiveDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
