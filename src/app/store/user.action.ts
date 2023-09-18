import { createAction, props } from "@ngrx/store";


export const loadUsers = createAction("Load Users");
export const loadUsersSuccess = createAction("Load Users Success");
export const selectUser = createAction("Select a user", props<{ userId: number }>());