import { TestBed } from '@angular/core/testing';

import { BookSearchService } from './book-search.service';

describe('YoutubeSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookSearchService = TestBed.get(BookSearchService);
    expect(service).toBeTruthy();
  });
});
