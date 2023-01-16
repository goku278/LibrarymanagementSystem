import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderService } from 'src/app/services/order.service';
import { Status } from 'src/app/status';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  status: Status = new Status;
  constructor(private service: OrderService,private matSnackBar: MatSnackBar) {}

  ngOnInit(): void {}

  public raiseRequestOrCancel(res: any) {
    // bookTitle
    var b_title = localStorage.getItem('bookTitle');
    var l_id = localStorage.getItem('userId');

    if (res.includes('true')) {
      // alert(res + ' == ' + l_id + ' == ' + b_title);
      this.service.placeOrderAndconfirm(b_title, l_id).subscribe((data) => {
        this.status = data;
        console.warn(this.status);
        this.displaySnackBar(this.status);
      });
    }
  }

  public displaySnackBar(status: Status) {
    // alert('status : ' + status.message);
    this.matSnackBar.open(status.message, 'close');
    
  }
}
