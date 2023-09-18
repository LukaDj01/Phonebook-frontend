import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  users: User[] = [];

  title = "Imenik";

  constructor(private usersService: UsersService){

  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(users => {
      this.users = users;
    });
  }
}
