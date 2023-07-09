import { createAction, props } from '@ngrx/store';
import { User } from './user.reducer';
import { Update } from '@ngrx/entity';

export const updateUser = createAction(
  '[User] @ngrx/data/save/update-one',
  props<{ payload: { data: Update<User> } }>());
