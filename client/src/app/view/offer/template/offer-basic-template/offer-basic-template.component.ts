import { Component, Input } from '@angular/core';
import { IOffer } from '../../interfaces/offer.interface';

@Component({
  selector: 'app-offer-basic-template',
  templateUrl: './offer-basic-template.component.html',
  styleUrls: ['./offer-basic-template.component.css']
})
export class OfferBasicTemplateComponent {
  @Input() offer!:   any;
}
