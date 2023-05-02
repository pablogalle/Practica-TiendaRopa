import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogProductPriceComponent } from './catalog-product-price.component';

describe('CatalogProductPriceComponent', () => {
  let component: CatalogProductPriceComponent;
  let fixture: ComponentFixture<CatalogProductPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogProductPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogProductPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
