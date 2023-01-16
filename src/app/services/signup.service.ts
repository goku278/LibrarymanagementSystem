import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  public register(user: User) {
    return this.http.post("http://localhost:8181/lms/api/admin/register/",user,{responseType:'text' as 'json'});
  }
}
