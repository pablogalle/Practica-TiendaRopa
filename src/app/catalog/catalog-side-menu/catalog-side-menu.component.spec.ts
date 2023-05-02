import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogSideMenuComponent } from './catalog-side-menu.component';

describe('CatalogSideMenuComponent', () => {
  let component: CatalogSideMenuComponent;
  let fixture: ComponentFixture<CatalogSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogSideMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
