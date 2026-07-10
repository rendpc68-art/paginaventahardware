import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandCarousel } from './brand-carousel';

describe('BrandCarousel', () => {
  let component: BrandCarousel;
  let fixture: ComponentFixture<BrandCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandCarousel],
    }).compileComponents();

    fixture = TestBed.createComponent(BrandCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
