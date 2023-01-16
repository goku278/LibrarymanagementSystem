import { Injectable } from '@angular/core';
import { SeeLibraries } from './seelibraries';

import { Librarian } from './librarian';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../app/user';


@Injectable({
  providedIn: 'root'
})
export class  LibrarianProfileService{

  constructor(private http:HttpClient) { }

  public fetchLibrarianProfile() {
    return this.http.get<any[]>("http://localhost:8181/lms/api/admin/librarians/")
  }

  public deleteLibrarian(librarianId: any) {
    return this.http.delete("http://localhost:8181/lms/api/admin/librarian/remove/" + librarianId + "/",{responseType:'text' as 'json'});
  }
}
