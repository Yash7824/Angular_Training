import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoSinglePriceComponent } from './crypto-single-price.component';

describe('CryptoSinglePriceComponent', () => {
  let component: CryptoSinglePriceComponent;
  let fixture: ComponentFixture<CryptoSinglePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoSinglePriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoSinglePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
