import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticPageTemplateComponent } from './static-page-template.component';

describe('StaticPageTemplateComponent', () => {
  let component: StaticPageTemplateComponent;
  let fixture: ComponentFixture<StaticPageTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaticPageTemplateComponent]
    });
    fixture = TestBed.createComponent(StaticPageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
