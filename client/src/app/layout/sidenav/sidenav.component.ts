import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { useOfferFn } from 'src/app/view/offer/config/use.offer';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

    router              = inject(Router);
    route               = inject(ActivatedRoute);
    
    useOffer            = useOfferFn();
    offerFormService    = this.useOffer.serviceForm.createDatePicker();
    FormModels          = this.offerFormService.models;   
    form                = this.offerFormService.form;

    curentDate!: Date;

    ngOnInit(): void {

        this.curentDate = new Date();

        this.route.queryParams

            .subscribe((params) => {

                if (params['date']) {

                    console.log('[Side Nav Date] - date is: ', new Date(params['date']));

                    this.curentDate = new Date(params['date']);
                    return;
                }
            });
    }

    onSubmit(form: any) {

        if(!this.form.valid){
            return;
        }

        const form_date = new Date(form.date.value);

        form_date.setDate(form_date.getDate() + 1);

        console.log('[Side Nav Date] - ', form_date);

        const date = new Date(form_date).toISOString().split('T')[0];

        this.router.navigate( ['/offer'], { queryParams: { date: date } });      
    }
}
