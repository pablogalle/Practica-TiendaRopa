import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhishlistButtonComponent } from './whishlist-button.component';

describe('WhishlistButtonComponent', () => {
  let component: WhishlistButtonComponent;
  let fixture: ComponentFixture<WhishlistButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhishlistButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhishlistButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
