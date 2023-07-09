import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

export interface Offer {
  id: string;
  name: string;
  data: any;
}

export const loadingOffer = createAction('@ngrx/data/loading/update-one');

export const updateOffer = createAction(
  '[Offer] @ngrx/data/save/update-one',
  props<{ payload: { data: Update<Offer> } }>());

export const updateOfferFailure = createAction(
  '[Offer] @ngrx/error',
  props<{ error: any }>());

// export const updateOffer2 = createAction(
//   '[User/API] Update User',
//   props<{ payload: {data: Update<Offer> }}>());

