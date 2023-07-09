import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferFindComponent } from './offer-find.component';

describe('OfferFindComponent', () => {
  let component: OfferFindComponent;
  let fixture: ComponentFixture<OfferFindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferFindComponent]
    });
    fixture = TestBed.createComponent(OfferFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
