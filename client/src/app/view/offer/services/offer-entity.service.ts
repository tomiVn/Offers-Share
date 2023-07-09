import { Injectable, inject } from '@angular/core';
import { IOffer } from '../interfaces/offer.interface';
import { EntityActionFactory, EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { environment } from 'src/environments/api.environment';
import { map, tap } from 'rxjs';
import { updateOffer } from '../ngrx/offer.actions';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfferEntityService extends EntityCollectionServiceBase<IOffer> {

  http                = inject(HttpClient);
  //entityActionFactory = inject(EntityActionFactory);

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Offer', serviceElementsFactory);
  }
  
  updateOne(_id: string, data: any) {
    return this.http.put(environment.apiUrl + '/offer/' + _id, data)
      .pipe(
        map((response: any) => response.payload.data),
        tap((data: any) => {
          console.log('[Res Data]', data);         
          super.updateOneInCache(data);
          return this.store.dispatch(updateOffer( { 
            payload: { 
              entityName: 'Offer', 
              entityOp: '[Offer] @ngrx/data/save/update-one/success', 
              ...data }
            }));
        })
      );
  }
}
