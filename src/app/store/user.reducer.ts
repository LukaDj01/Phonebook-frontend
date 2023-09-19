import { createReducer, on } from "@ngrx/store";
import * as Actions from "./user.action";
import { User } from "../models/user";
import { EntityState, createEntityAdapter } from "@ngrx/entity";

export interface UsersState extends EntityState<User> {
    selectedUser: number;
}

export const adapter = createEntityAdapter<User>();

export const initialState: UsersState = adapter.getInitialState({
    selectedUser: 0
});

export const usersReducer = createReducer(
    initialState,
    on(Actions.selectUser, (state, {userId}) => {
        return {
            ...state,
            selectedUser: userId
        };
    }),
    on(Actions.loadUsersSuccess, (state, {users}) => 
        adapter.setAll(users, state)
    )
);