import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Status } from 'src/app/status';
@Injectable({
  providedIn: 'root',
})
export class GeneralUserDashboardService {
  status: Status = new Status;
  constructor(private http: HttpClient) {}

  public viewAllLibraries() {
    return this.http.get<any[]>(
      'http://localhost:8181/lms/api/user/libraries/'
    );
  }

  public placeOrder(req1: any): Observable<Status> {
    return this.http.post<Status>(
      'http://localhost:8181/lms/api/user/request/newBooks/',
      req1,
      { responseType: 'text' as 'json' }
    );
  }
}
