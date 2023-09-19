import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as UsersActions from './user.action';
import { catchError, map, mergeMap, of } from "rxjs";
import { UsersService } from "../services/users.service";

@Injectable()
export class UsersEffects {

    constructor(private actions$: Actions, private usersService: UsersService) {}
    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.loadUsers),
            mergeMap(() => 
                this.usersService.getAll().pipe(
                    map((users) => (UsersActions.loadUsersSuccess({ users: users }))),
                    catchError(() => of({ type: 'load error' }))
                )
            )
        )
    );
}