import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/books';
import { VisitLibraryDialogService } from 'src/app/services/visit-library-dialog.service';
import { Status } from 'src/app/status';
import { MatDialog } from '@angular/material/dialog';
import { RaiseIssueOrCancelComponent } from '../raise-issue-or-cancel/raise-issue-or-cancel.component';
@Component({
  selector: 'app-library-dashboard',
  templateUrl: './library-dashboard.component.html',
  styleUrls: ['./library-dashboard.component.css'],
})
export class LibraryDashboardComponent implements OnInit {
  status: Status = new Status();
  book: any;
  message: any;

  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];

  ln1: string;
  constructor(
    private service: VisitLibraryDialogService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    let ln = localStorage.getItem('libraryname');
    this.ln1 = ln;
    let lId = localStorage.getItem('library_id');
    // alert(
    //   'From LibraryDashboard libraryName is : ' + ln + '\nlibraryId : ' + lId
    // );
    this.seeBooks(ln);
    this.message = localStorage.getItem('userId');
  }

  public seeBooks(ln: any) {
    this.service.seeBooks(ln).subscribe((data) => {
      this.book = data;
    });
  }

  public requestIssueBook(bId: any) {
    this.dialog.open(RaiseIssueOrCancelComponent, {
      width: '20%',
      height: '30%',
      disableClose: false,
    });
  }

  onTableDataChanged(event: any) {
    this.page = event;
    this.seeBooks(this.ln1);
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.seeBooks(this.ln1);
  }
}
