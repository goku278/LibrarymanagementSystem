import { Component, OnInit } from '@angular/core';
import { RequestBooks } from 'src/app/requestbook';
import { GeneralUserDashboardService } from 'src/app/services/general-user-dashboard.service';
import { Status } from 'src/app/status';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-request-book',
  templateUrl: './request-book.component.html',
  styleUrls: ['./request-book.component.css'],
})
export class RequestBookComponent implements OnInit {
  req: RequestBooks = new RequestBooks();
  status: Status;
  st: any;
  constructor(private service: GeneralUserDashboardService, private matSnackBar: MatSnackBar) {}

  ngOnInit(): void {}

  public raiseRequestOrCancel(res: any, req1: any) {
    if (res.includes('true')) {
      // alert(req1.title + ' ' + req1.author);
      this.service.placeOrder(req1).subscribe((data) => {
        this.status = data;
        this.showInSnackbar(this.status);
      });
    }
  }

  public showInSnackbar(status: any) {
    // alert('code : ' + status.code);
    var s = status.split(',');
    for (let i in s) {
      if (s[i].includes('message')) {
        // alert(s[i]);
        this.matSnackBar.open(s[i].substring(11,s[i].length-1), 'close');
      }
    }
  }
}
