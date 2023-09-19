import { createAction, props } from "@ngrx/store";
import { User } from "../models/user";


export const loadUsers = createAction("Load Users");
export const loadUsersSuccess = createAction("Load Users Success", props<{ users: User[] }>());
export const selectUser = createAction("Select a user", props<{ userId: number }>());