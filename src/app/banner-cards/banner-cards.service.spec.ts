import { TestBed } from '@angular/core/testing';

import { BannerCardsService } from './banner-cards.service';

describe('BannerCardsService', () => {
  let service: BannerCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
