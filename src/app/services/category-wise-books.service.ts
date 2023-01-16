import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CategoryWiseBooksService {
  constructor(private http: HttpClient) {}

  public getBooksByCategory(category: any): Observable<any[]> {
    // alert('In category wise books category is : ' + category);
    return this.http.get<any[]>(
      'http://localhost:8181/lms/api/user/books/' + category + '/'
    );
  }
}
