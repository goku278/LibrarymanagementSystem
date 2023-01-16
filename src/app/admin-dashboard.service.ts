import { Injectable } from '@angular/core';
import { SeeLibraries } from './seelibraries';

import { Librarian } from './librarian';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../app/user';


@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  constructor(private http:HttpClient) { }

  public seeLibraries() {
    return this.http.get<any[]>("http://localhost:8181/lms/api/admin/libraries/")
  }

  public seeLibrarians() {
    return this.http.get<any[]>("http://localhost:8181/lms/api/admin/librarians/")
  }
}
