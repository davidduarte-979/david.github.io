import { TestBed } from '@angular/core/testing';

import { FileDownloadsService } from './file-downloads.service';

describe('FileDownloadsService', () => {
  let service: FileDownloadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileDownloadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
