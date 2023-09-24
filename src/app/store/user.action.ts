import { createAction, props } from "@ngrx/store";
import { User } from "../models/user";


export const loadUsers = createAction("Load Users");
export const loadUsersSuccess = createAction("Load Users Success", props<{ users: User[] }>());
export const selectUser = createAction("Select a user", props<{ userId: number }>());
export const loggedUser = createAction("Logged user", props<{ userId: number }>());
export const addPhoneNumber = createAction("Add phone number", props<{ userId: number, phoneNumber: string }>());
export const addPhoneNumberSuccess = createAction("Add phone number Success", props<{ user: User }>());