import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Status } from '../status';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  public placeOrderAndconfirm(b_title: any,l_id: any):Observable<Status> {
      // alert('b_title : ' + b_title + "  " + "l_id : " + l_id);
      return this.http.put<Status>("http://localhost:8181/lms/api/user/confirm/order/"+b_title+"/"+l_id+"/", {responseType:'text' as 'json'})
  }
}
