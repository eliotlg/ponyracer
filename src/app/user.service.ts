import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  register(login: string, password: string, birthYear: number): Observable<any> {
    const body = { login, password, birthYear };
    return this.http.post('http://ponyracer.ninja-squad.com/api/users', body);
  }

}
