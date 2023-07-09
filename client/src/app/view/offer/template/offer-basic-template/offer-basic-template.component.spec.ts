import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferBasicTemplateComponent } from './offer-basic-template.component';

describe('OfferBasicTemplateComponent', () => {
  let component: OfferBasicTemplateComponent;
  let fixture: ComponentFixture<OfferBasicTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferBasicTemplateComponent]
    });
    fixture = TestBed.createComponent(OfferBasicTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
