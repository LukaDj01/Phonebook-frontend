import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-directory-item',
  templateUrl: './directory-item.component.html',
  styleUrls: ['./directory-item.component.scss']
})
export class DirectoryItemComponent implements OnInit {

  user: User = {
    id: 2,
    firstName: "string",
    lastName: "string",
    phoneNumber: "string",
    email: "string",
  }

  constructor() {}

  ngOnInit(): void {
    
  }

}
