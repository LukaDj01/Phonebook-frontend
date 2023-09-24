import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import { selectLoggedUser } from 'src/app/store/user.selector';
import { AppState } from 'src/app/app.state';
import { addPhoneNumber, loadUsers, loggedUser } from 'src/app/store/user.action';
import jwt_decode from 'jwt-decode';
import { UserResponse } from 'src/app/models/userResponse';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  user: User | null = null;

  constructor(
    private authService: AuthService, 
    private store: Store<AppState>
    ) {}

  ngOnInit(): void {
    const value = localStorage.getItem('token');
    const decodedToken: UserResponse = jwt_decode(value!);
    this.store.select(selectLoggedUser).subscribe((user) => {
      if(user){
        this.user = user;
      }
    });
    this.store.dispatch(
      loggedUser({
        userId: decodedToken.user.id
      })
    );
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
    if (!phoneNumber || !this.user) return;
    
    this.store.dispatch(addPhoneNumber({ userId: this.user.id, phoneNumber }));

    this.form.reset(phoneNumber);
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

