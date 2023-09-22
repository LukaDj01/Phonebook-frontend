import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  submissionType: 'login' | 'register' = 'login';

  constructor() {}

  ngOnInit(): void {
    
  }

  onSubmit() {
    const { email, password } = this.form.value;
    if (!email || !password) return;

    if (this.submissionType === 'login') {
      console.log(1, 'handle login', email, password);
    } else if (this.submissionType === 'register') {
      const { firstName, lastName } = this.form.value;
      if (!firstName || !lastName) return;
      console.log(2, 'handle register', email, password, firstName, lastName);
    }
  }

  toggleText() {
    if (this.submissionType === 'login') {
      this.submissionType = 'register';
    } else if (this.submissionType === 'register') {
      this.submissionType = 'login';
    }
  }
}
