import { Injectable } from '@angular/core';
import { HttpUrlGenerator, Logger } from '@ngrx/data';
import { IAuth } from '../interfaces/auth.interface';
import { HttpClient } from '@angular/common/http';
import { AdaptorDefaultDataService } from 'src/app/utils/service/adaptor.service';
import { environment } from 'src/environments/api.environment';

@Injectable({
    providedIn: 'root'
})
export class AuthDefaultService extends AdaptorDefaultDataService<IAuth>{

    constructor(

        http: HttpClient,
        httpUrlGenerator: HttpUrlGenerator,
        logger: Logger ) {

        httpUrlGenerator.entityResource('Auth', environment.apiUrl, true);

        super('Auth', http, httpUrlGenerator);

        logger.log('Created custom Auth default Service.');

    }
}
