import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { IAuth } from '../interfaces/auth.interface';
import { Observable,  map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthEntityService extends EntityCollectionServiceBase<IAuth> {

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {

        super('Auth', serviceElementsFactory);
    }

    authenticate(query: string): Observable<any> {

        return this.getWithQuery(query).pipe(map((res: any) => res[0]));
    }


    register(data: any): Observable<any> {

        return this.add(data).pipe(map((res: any) => res.payload.data));
    }

    validate(): Observable<any> {

        return this.getWithQuery('?validate=true')
            .pipe(map((res: any) => res[0]));
    }

}
