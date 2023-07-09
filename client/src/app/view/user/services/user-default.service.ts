import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpUrlGenerator, Logger } from "@ngrx/data";
import { AdaptorDefaultDataService } from "src/app/utils/service/adaptor.service";
import { environment } from "src/environments/api.environment";

@Injectable({
    providedIn: 'root'
})
export class UserDefaultService extends AdaptorDefaultDataService<any>{

    constructor(

        http: HttpClient,
        httpUrlGenerator: HttpUrlGenerator,
        logger: Logger ) {

        httpUrlGenerator.entityResource('User', environment.apiUrl, true);

        super('User', http, httpUrlGenerator);

        logger.log('Created custom User default Service.');
    }
}