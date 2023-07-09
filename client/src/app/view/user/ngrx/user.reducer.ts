import { createReducer, on } from '@ngrx/store';
import { updateUser } from './user.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface User {
  id: string;
  name: string;
  data: FormData;
}

export interface State extends EntityState<User> { }

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState();

export const userReducer = createReducer(
  initialState,
  on(updateUser, (state, { payload: { data } }) => {
    return adapter.updateOne(data, state);
  })
);



