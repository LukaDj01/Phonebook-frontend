import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { loadUsers, selectUser } from 'src/app/store/user.action';
import { selectUsersList } from 'src/app/store/user.selector';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  user$: Observable<User[]> = of([]);

  title = "Imenik";

  constructor(
    private usersService: UsersService,
    private store: Store<AppState>
    ){}

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.user$ = this.store.select(selectUsersList);
  }

  selectUser(user: User) {
    this.store.dispatch(
      selectUser({
        userId: user.id
      })
    );
  }
}
