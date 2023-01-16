import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ViewrequestedbooksService {

  constructor(private http: HttpClient) { }

  public viewRequestedBooks(l_id: any) {
    return this.http.get<any[]>(
      'http://localhost:8181/lms/api/librarian/find/orders/' + l_id+'/'
    );
  }
}
