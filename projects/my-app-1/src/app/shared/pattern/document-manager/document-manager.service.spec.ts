import { TestBed } from '@angular/core/testing';

import { DocumentManagerService } from './document-manager.service';

describe('DocumentManagerService', () => {
  let service: DocumentManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
