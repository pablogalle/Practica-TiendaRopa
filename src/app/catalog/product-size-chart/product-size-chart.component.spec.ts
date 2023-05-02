import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSizeChartComponent } from './product-size-chart.component';

describe('ProductSizeChartComponent', () => {
  let component: ProductSizeChartComponent;
  let fixture: ComponentFixture<ProductSizeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSizeChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSizeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
