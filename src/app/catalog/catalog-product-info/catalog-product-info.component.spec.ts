import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogProductInfoComponent } from './catalog-product-info.component';

describe('CatalogProductInfoComponent', () => {
  let component: CatalogProductInfoComponent;
  let fixture: ComponentFixture<CatalogProductInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogProductInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogProductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
