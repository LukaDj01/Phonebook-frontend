import { Component, Input, OnInit } from '@angular/core';
import { Phone } from 'src/app/models/phone';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  @Input() phone: Phone | null = null;
  constructor() {}

  ngOnInit(): void {
    
  }
}
