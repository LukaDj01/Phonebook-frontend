import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { evnironment } from 'src/environments/environment';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient
    .get<User[]>(evnironment.api + "/users");
  }

  addPhoneNumber(userId: number, phoneNumber: string): Observable<User> {
    return this.httpClient
    .post<User>(
      `${evnironment.api}/users/${userId}`, 
      { number: phoneNumber }, 
      this.httpOptions
    ).pipe(take(1));
  }

}
