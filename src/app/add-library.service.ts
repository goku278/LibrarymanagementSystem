import { Injectable } from '@angular/core';
import { Library } from './library';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Status } from './status';
import { NewStatus } from './newstatus';


@Injectable({
  providedIn: 'root'
})
export class AddLibraryService {

  constructor(private http:HttpClient) { }

  public addLibrary(library: Library):Observable<Status> {
    return this.http.put<Status>("http://localhost:8181/lms/api/admin/library/",library,{responseType:'text' as 'json'});
  }
}
