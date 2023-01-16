import { Injectable } from '@angular/core';
import { AllUsers } from 'src/app/user_profile';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UpdateGeneralUserService {
  constructor(private http: HttpClient) {}

  public updateGeneralUser(usersprofile: AllUsers, role: any) {
    let uId = localStorage.getItem('userId');
    alert('uId : ' + uId);
    alert('role : ' + usersprofile.role);
    return this.http.put(
      'http://localhost:8181/lms/api/user/profile/update/' +
        uId +
        '/' +
        role +
        '/',
      usersprofile,
      { responseType: 'text' as 'json' }
    );
  }

  public updateAllGeneralUser(usersprofile: AllUsers, id: any, role: any) {
    let uId = usersprofile.userId;
    alert('Update All General Users : ' + uId + '   ' + role);
    return this.http.put(
      'http://localhost:8181/lms/api/user/dynamicprofile/update/' +
        id +
        '/' +
        role +
        '/',
      usersprofile,
      { responseType: 'text' as 'json' }
    );
  }
}
