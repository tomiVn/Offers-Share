import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { Observable, takeWhile, } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { useOfferFn } from '../../config/use.offer';
import { loadOffersFn } from '../../helpers/load.offers';
import { filterOfferFn } from '../../helpers/offer-find/filter.offers';

@Component({
    selector: 'app-offer-find',
    templateUrl: './offer-find.component.html',
    styleUrls: ['./offer-find.component.css']
})
export class OfferFindComponent implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild("input") inputField!: ElementRef;
    
    router              = inject(Router);
    route               = inject(ActivatedRoute);

    useOffer            = useOfferFn();
    toastr              = this.useOffer.toastr;
    offerEntityService  = this.useOffer.serviceEntity;
   
    isAlive             = true;
    options             = {};
    valueSearch         = '';

    offers$:  Observable<any>;
    error$:   Observable<any>;
    loading$: Observable<boolean>;

    date:     string | undefined;
    filter:   string | undefined;

    constructor() {

        this.offers$  = this.offerEntityService.entities$;
        this.error$   = this.offerEntityService.errors$;      
        this.loading$ = this.offerEntityService.loading$;
    }

    ngOnInit(): void {

        loadOffersFn.call(this);

        filterOfferFn.call(this);    
    }

    ngAfterViewInit() {

        this.inputField.nativeElement.focus();
    }

    applyFilter(event: Event) {

        const filterValue = (event.target as HTMLInputElement).value;

        this.router.navigate(['/offer'], { queryParams: { date: this.date, filter: filterValue } });
    }

    ngOnDestroy() {

        this.isAlive = false;
    }
}