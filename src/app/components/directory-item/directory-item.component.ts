import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-directory-item',
  templateUrl: './directory-item.component.html',
  styleUrls: ['./directory-item.component.scss']
})
export class DirectoryItemComponent implements OnInit {

  @Input()
  user: User | null = null;

  constructor() {}

  ngOnInit(): void {
    
  }

}
