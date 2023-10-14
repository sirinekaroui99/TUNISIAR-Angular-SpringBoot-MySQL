import { TestBed } from '@angular/core/testing';

import { PilotesService } from './pilotes.service';

describe('PilotesService', () => {
  let service: PilotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PilotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
