import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  user$: Observable<User[]> = of([]);

  title = "Imenik";

  constructor(private usersService: UsersService){

  }

  ngOnInit(): void {
    this.user$ = this.usersService.getAll();
  }

  selectUser(user: User) {
    console.log(user);
    
  }
}
