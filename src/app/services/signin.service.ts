import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  constructor(private http: HttpClient) {}

  public signIn(email: any, userName: any) {
    return this.http.get<any>(
      'http://localhost:8181/lms/api/user/login/' + userName + '/' + email + '/'
    );
  }
  public getUserProfile(p: any) {
    // alert('p is : ' + p);
    return this.http.get<any>(
      'http://localhost:8181/lms/api/user/profile/' + p + '/'
    );
  }
}
