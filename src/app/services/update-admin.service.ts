import { Injectable } from '@angular/core';
import { UpdateAdminProfile } from '../updateadminprofile';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateAdminService {

  constructor(private http:HttpClient) { }

  public updateAdmin(adminId: any, updateadminprofile: UpdateAdminProfile) {
    // alert('Admin Name is : ' + updateadminprofile.adminName);
    return this.http.put("http://localhost:8181/lms/api/admin/update/profile/"+adminId+"/",updateadminprofile,{responseType:'text' as 'json'});
  }
}
