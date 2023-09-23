import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserResponse } from 'src/app/models/userResponse';
import jwt_decode from 'jwt-decode';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  user: User | null = null;

  constructor(private authService: AuthService, private router: Router) {
    
  }

  ngOnInit(): void {
    const value = localStorage.getItem('token');
    if (value) {
      const decodedToken: UserResponse = jwt_decode(value);
      this.user = decodedToken.user;
    }
  }

  onBack() {
    this.router.navigateByUrl('/home');
  }

  onSignOut() {
    this.authService.logout();
  }

  onUpdate() {
    let { firstName, lastName, email, birthDate, description } = this.form.value;
    firstName = !firstName ? this.user?.firstName : firstName;
    lastName = !lastName ? this.user?.lastName : lastName;
    email = !email ? this.user?.email : email;
    birthDate = !birthDate ? this.user?.additionalInfos.birthDate : birthDate;
    description = !description ? this.user?.additionalInfos.description : description;

    // izmena podataka
    

  }

  onCancel() {
    this.form.resetForm();
  }

  onAdd() {
    const { phoneNumber } = this.form.value;
    if (!phoneNumber) return;
    
    // dodavanje telefona
    
  }

  setInputDateValue () {
    const date : Date =new Date(this.user!.additionalInfos.birthDate);
    return [
      this.padTo2Digits(date.getDate()),
      this.padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('-');
  }

  padTo2Digits(num:number) {
    return num.toString().padStart(2, '0');
  }

}

