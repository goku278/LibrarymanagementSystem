import { Injectable } from '@angular/core';
import { Librarian } from './librarian';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../app/user';
import { Status } from './status';

@Injectable({
  providedIn: 'root'
})
export class AddLibrarianService {

  constructor(private http:HttpClient) { }

  public addLibrarian(librarian: Librarian, libraryId: any): Observable<Status> {
    return this.http.put<Status>("http://localhost:8181/lms/api/admin/library/librarian/link/" + libraryId + "/",librarian,{responseType:'text' as 'json'});
  }
}
