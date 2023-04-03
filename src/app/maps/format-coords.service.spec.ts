import { TestBed } from '@angular/core/testing';

import { FormatCoordsService } from './format-coords.service';

describe('FormatCoordsService', () => {
  let service: FormatCoordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatCoordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
