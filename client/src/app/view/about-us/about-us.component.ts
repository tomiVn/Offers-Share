import { Component } from '@angular/core';
import { STATIC_PAGES_DEFAULT_IMAGE } from 'src/app/utils/constants/static.pages';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  data = {
    title: 'All about us.',
    image: STATIC_PAGES_DEFAULT_IMAGE,
    content:
        [
            {   
                header: 'We are profecional team promoting tourism service offers.',
                text:
                    [
                        'We have business partners in many countries of the world. ' + 
                        'Our main aim is to provide quality service to you at a very reasonable cost.',
                    ]
            },
            {   
                header: 'We take special care of our clients during their Travel..',
                text:
                    [
                        'Our Guides & Tour managers are trained to form a very friendly relation with tourists.'
                    ]
            }
        ]
}

}
