import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VisitLibraryDialogService {
  constructor(private http: HttpClient) {}

  public seeBooks(ln: any) {
    var lId = localStorage.getItem('library_id');
    return this.http.get<any[]>(
      'http://localhost:8181/lms/api/user/book/viewAll/' + ln + '/' + lId + '/'
    );
  }

  public seeBooksAlternative() {
    return this.http.get<any[]>(
      'http://localhost:8181/lms/api/user/book/viewAll/'
    );
  }

  public issueBookRequest(bId: any) {
    var u_id = localStorage.getItem('userId');
    // alert('bId' + bId + '\nu_id' + u_id);
    return this.http.put(
      'http://localhost:8181/lms/api/user/issue/book/' + bId + '/' + u_id + '/',
      ''
    );
  }

  public cancelIssueRequest(userId: any, bookId: any) {
    return this.http.put(
      'http://localhost:8181/lms/api/user/cancel/book/' +
        bookId +
        '/' +
        userId +
        '/',
      ''
    );
  }

  public seeAllBooksIssueRequestByUserId(librarian_id: any, req: any) {
    // alert('librarian_id' + librarian_id);
    var api = '';
    // alert('req : ' + req);
    if (req.includes('true')) {
      api =
        'http://localhost:8181/lms/api/librarian/book/issue/request/' +
        librarian_id +
        '/';
    } else if (req.includes('false')) {
      api =
        'http://localhost:8181/lms/api/librarian/book/issue/cancel/request/' +
        librarian_id +
        '/';
    }
    return this.http.get<any[]>(api);
  }
}
