import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllUsers } from 'src/app/user_profile';
@Injectable({
  providedIn: 'root',
})
export class CheckprofileService {
  constructor(private http: HttpClient) {}

  public getProfileByUserId(uId: any) {
    var uRole = localStorage.getItem('userRole');
    // alert('Inside service uId : ' + uId + '\nuRole : ' + uRole);
    var apiUrl = '';
    if (uRole == 'LIBRARIAN' || uRole == 'Librarian' || uRole == 'librarian') {
      apiUrl = 'http://localhost:8181/lms/api/user/profile/' + uId + '/' + uRole + '/';
    }
    if (uRole == 'ADMIN' || uRole == 'Admin' || uRole == 'admin') {
      apiUrl = 'http://localhost:8181/lms/api/user/profile/' + uId + '/' + uRole + '/';
    }
    if (
      uRole == 'GENERAL USER' ||
      uRole == 'General User' ||
      uRole == 'general user'
    ) {
      apiUrl = 'http://localhost:8181/lms/api/user/profile/' + uId + '/' + uRole + '/';
    }
    // alert(apiUrl);
    // document.write(apiUrl);
    return this.http.get<any>(apiUrl);
  }

  public getAllUserProfiles() {
    return this.http.get<any[]>(
      'http://localhost:8181/lms/api/admin/allUsers/view/'
    );
  }

  public updateProfile(uId: any) {
    var message: string;
    var uRole = localStorage.getItem('userRole');
    var apiUrl = '';
    if (uRole == 'LIBRARIAN' || uRole == 'Librarian' || uRole == 'librarian') {
      apiUrl = 'http://localhost:8181/lms/api/user/profile/update/' + uId + '/';
    }
    if (uRole == 'ADMIN' || uRole == 'Admin' || uRole == 'admin') {
      apiUrl = 'http://localhost:8181/lms/api/user/profile/update/' + uId + '/';
    }
    if (
      uRole == 'GENARAL USER' ||
      uRole == 'General User' ||
      uRole == 'general user'
    ) {
      apiUrl = 'http://localhost:8181/lms/api/user/profile/update/' + uId + '/';
    }
    return this.http.put<AllUsers>(apiUrl, message, {
      responseType: 'text' as 'json',
    });
  }
}
