import { Component, OnInit } from '@angular/core';
import { VisitLibraryDialogService } from 'src/app/services/visit-library-dialog.service';
import { Status } from 'src/app/status';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-raise-issue-or-cancel',
  templateUrl: './raise-issue-or-cancel.component.html',
  styleUrls: ['./raise-issue-or-cancel.component.css'],
})
export class RaiseIssueOrCancelComponent implements OnInit {
  status: Status = new Status;
  constructor(
    private service: VisitLibraryDialogService,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  public raiseRequestOrCancel(req: any) {
    if (req == 'true') {
      // alert();
      this.sendRequest();
    } else if (req == 'false') {
      this.canelRequest();
    }
  }

  public sendRequest() {
    var b_id = localStorage.getItem('book_id');
    this.service.issueBookRequest(b_id).subscribe((data) => {
      this.status = data;
    });
    // if (this.status.message == 'Issuing books request raised successfully') {
    //   this.openSnackBar('Issuing books request raised successfully', 'close');
    // }
    this.openSnackBar('Issuing books request raised successfully', 'close');
  }

  public openSnackBar(msg: any, action: any) {
    this.matSnackBar.open(msg, action);
  }

  public canelRequest() {
    var u_id = localStorage.getItem('userId');
    var b_id = localStorage.getItem('book_id');
    alert('User Id : '+ u_id + "\nb_id : " + b_id);
    this.service.cancelIssueRequest(u_id,b_id).subscribe(
      (data)=> {
        this.status = data;
      }
    );
    this.openSnackBar('Cancel books request raised successfully', 'close');
  }
}