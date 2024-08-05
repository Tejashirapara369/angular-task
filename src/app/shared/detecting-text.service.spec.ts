import { TestBed } from '@angular/core/testing';

import { DetectingTextService } from './detecting-text.service';

describe('DetectingTextService', () => {
  let service: DetectingTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetectingTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
