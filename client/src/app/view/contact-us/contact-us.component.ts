import { Component } from '@angular/core';
import { STATIC_PAGES_DEFAULT_IMAGE } from 'src/app/utils/constants/static.pages';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  data = {
    title: 'You can contact us.',
    image: STATIC_PAGES_DEFAULT_IMAGE,
    content:
        [
            {   
                header: 'Our phones are:',
                text:
                    [
                        '+359 8 999 8888, +359 8 999 7777, +359 8 999 6666',
                    ]
            },
            {   
                header: 'Email us:',
                text:
                    [
                        'info@offer-app.com.'
                    ]
            }
        ]
}

}
