import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AdminProfile2Service {
  
  constructor(private http:HttpClient) { }

  public getAdminProfile1(adminId: any) {
    // alert('adinId : ' + adminId);
    return this.http.get("http://localhost:8181/lms/api/admin/profile/"+adminId + "/");
  }
}