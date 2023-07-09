import { createReducer, on } from '@ngrx/store';
import { updateOffer } from './offer.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface Offer {
  id: string;
  name: string;
  data: any;
}

export interface State extends EntityState<Offer> { }

export const adapter: EntityAdapter<Offer> = createEntityAdapter<Offer>();

export const initialState: State = adapter.getInitialState({});

export const offerReducer = createReducer(
  initialState,
  on(updateOffer, (state, { payload: { data } }) => {
    return adapter.updateOne(data, state);
  }),
);


