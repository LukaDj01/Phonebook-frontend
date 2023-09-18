import { createReducer, on } from "@ngrx/store";
import * as Actions from "./user.action";
import { User } from "../models/user";

export interface UsersState {
    users: User[];
    selectedUser: number;
}

export const initialState: UsersState = {
    users: [],
    selectedUser: 0,
}

export const usersReducer = createReducer(
    initialState,
    on(Actions.selectUser, (state, {userId}) => {
        return {
            ...state,
            selectedUser: userId
        };
    }),
);