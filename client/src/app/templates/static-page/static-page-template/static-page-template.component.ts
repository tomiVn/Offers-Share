import { Component, Input } from '@angular/core';

@Component({
  selector: 'static-page-template',
  templateUrl: './static-page-template.component.html',
  styleUrls: ['./static-page-template.component.css']
})
export class StaticPageTemplateComponent {

  @Input() data: any;
}
