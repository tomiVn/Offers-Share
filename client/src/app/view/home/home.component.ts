import { Component } from '@angular/core';
import { STATIC_PAGES_DEFAULT_IMAGE } from 'src/app/utils/constants/static.pages';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    data = {
        title: 'Wellcome to our website.',
        image: STATIC_PAGES_DEFAULT_IMAGE,
        content:
            [
                {   
                    header: 'If you\'re selling a tourism product.',
                    text:
                        [
                            'where your customers will only truly understand your value when using it, ' +
                            'don\'t be shy. We do a great job of prompting first-time users to get started right away.'
                        ]
                },
                {   
                    header: 'If you\'re customer',
                    text:
                        [
                            'you can check our offers and make your vacation unbelievable.'
                        ]
                }
            ]
    }

}
