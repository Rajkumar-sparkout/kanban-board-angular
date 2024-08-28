import { Injectable } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { User } from '../interface/common';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/users` , user);
  }

  getUserByEmail(email: string): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/users?email=${email}`)
  }

  checkEmailExists(email: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}/users?email=${email}`).pipe(
      map(users => users.some(user => user.email === email)),
      catchError(() => of(false))
    );
  }
}
