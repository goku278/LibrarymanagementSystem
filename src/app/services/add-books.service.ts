import { Injectable } from '@angular/core';
import { AddBooks } from '../addbooks';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddBooksService {

  constructor(private http:HttpClient) { }

  public addBooks(addBooks: AddBooks) {
    return this.http.post("http://localhost:8181/lms/api/librarian/books/add/"+addBooks.libraryId+"/",addBooks,{responseType:'text' as 'json'});
  }
}
