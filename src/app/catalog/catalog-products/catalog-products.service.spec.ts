import { TestBed } from '@angular/core/testing';

import { CatalogProductsService } from './catalog-products.service';

describe('CatalogProductsService', () => {
  let service: CatalogProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
