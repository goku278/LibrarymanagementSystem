import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {

  constructor(private http:HttpClient) { }

  public findBooksBySearchItem(item:any) {
      // alert('Search-Results : ' + item);
      return this.http.get<any[]>("http://localhost:8181/lms/api/user/getBooks/"+item+"/")
  }
}
