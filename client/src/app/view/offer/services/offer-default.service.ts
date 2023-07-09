import { Injectable } from '@angular/core';
import { IOffer } from '../interfaces/offer.interface';
import { HttpUrlGenerator, Logger } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { AdaptorDefaultDataService } from 'src/app/utils/service/adaptor.service';
import { environment } from 'src/environments/api.environment';

@Injectable({
    providedIn: 'root'
})
export class OfferDefaultService extends AdaptorDefaultDataService<IOffer>{

    constructor(

        http: HttpClient,
        httpUrlGenerator: HttpUrlGenerator,
        logger: Logger) {

        httpUrlGenerator.entityResource('Offer', environment.apiUrl, true);

        super('Offer', http, httpUrlGenerator);

        logger.log('Created custom Offer default Service.');
    }
}


