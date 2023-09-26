import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, debounceTime, distinctUntilChanged, filter, from, fromEvent, map, of, switchMap } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { selectUser } from 'src/app/store/user.action';
import { selectUsersList } from 'src/app/store/user.selector';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  user$: Observable<User[]> = of([]);

  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
    ){}

  ngOnInit(): void {
    this.user$ = this.store.select(selectUsersList);
    const search: HTMLInputElement = document.querySelector(".search")!;
    fromEvent(search, "input").pipe(
      debounceTime(600),
      map((event) => (<HTMLInputElement>event.target).value),
      distinctUntilChanged(),
      //switchMap((text: string) => )
    ).subscribe(x=>console.log(x));
  }

  selectUser(user: User) {
    this.store.dispatch(
      selectUser({
        userId: user.id
      })
    );
  }

  onSignOut() {
    this.authService.logout();
  }
}
