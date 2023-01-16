import { Component, OnInit } from '@angular/core';
import { VisitLibraryDialogService } from 'src/app/services/visit-library-dialog.service';
import { Books } from 'src/app/books';
@Component({
  selector: 'app-check-request',
  templateUrl: './check-request.component.html',
  styleUrls: ['./check-request.component.css']
})
export class CheckRequestComponent implements OnInit {
  
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  books: Books[] = [];
  constructor(private service: VisitLibraryDialogService) { }

  ngOnInit(): void {
    this.seeAllRequest();
  }

  public seeAllRequest() {
    var l_id = localStorage.getItem('userId');
    var req = localStorage.getItem('issue_req');
    this.service.seeAllBooksIssueRequestByUserId(l_id, req).subscribe((data) => {
      this.books = data;
    });
  }

  onTableDataChanged(event: any) {
    this.page = event;
    this.seeAllRequest();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.seeAllRequest()
  }

}
