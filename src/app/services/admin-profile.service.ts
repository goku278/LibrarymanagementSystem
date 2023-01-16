import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AdminProfileService {

  constructor(private http:HttpClient) { }

  public getAdminProfile(adminId: any) {
    // alert('adinId : ' + adminId);
    return this.http.get("http://localhost:8181/lms/api/admin/profile/"+adminId + "/");
  }

  public getAllusers() {
    return this.http.get<any[]>("http://localhost:8181/lms/api/admin/allUsers/view/")
  }
}
