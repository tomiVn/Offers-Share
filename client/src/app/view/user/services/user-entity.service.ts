import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { map, tap } from "rxjs";
import { updateUser } from "../ngrx/user.actions";
import { environment } from "src/environments/api.environment";

@Injectable({
    providedIn: 'root'
})
export class UserEntityService extends EntityCollectionServiceBase<any> {

    http = inject(HttpClient);

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {

        super('User', serviceElementsFactory);
    }

    updateOne(_id: string, data: any) {
        return this.http.put(environment.apiUrl + '/user/' + _id, data).pipe(
            map((response: any) => response.payload.data),
            tap((data: any) => {
                console.log('[Res Data]', data);
                
                super.updateOneInCache(data[0]);
                return this.store.dispatch(updateUser({
                    payload: {
                        entityName: 'User',
                        entityOp: '[User] @ngrx/data/save/update-one/success',
                        ...data[0]
                    }
                }));
            })
        );
    }
}