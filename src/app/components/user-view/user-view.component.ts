import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { User } from 'src/app/models/user';
import { selectSelectedUser } from 'src/app/store/user.selector';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  @Input() user: User | null = null;
  userId: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectSelectedUser).subscribe((user) => {
      if(user){
        this.user = user;
      }
    });
  }

}
