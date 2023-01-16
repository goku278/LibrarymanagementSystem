import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VisitLibraryDialogService } from 'src/app/services/visit-library-dialog.service';
import { RaiseIssueOrCancelComponent } from '../raise-issue-or-cancel/raise-issue-or-cancel.component';
import { Books } from 'src/app/books';
@Component({
  selector: 'app-view-all-books',
  templateUrl: './view-all-books.component.html',
  styleUrls: ['./view-all-books.component.css'],
})
export class ViewAllBooksComponent implements OnInit {
  book: any;
  books: Books[] = [];

  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];

  constructor(
    private service: VisitLibraryDialogService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getBooks();
  }

  public getBooks() {
    this.service.seeBooksAlternative().subscribe((data) => {
      this.book = data;
      this.books = data;
    });
  }

  public requestIssueBook(bId: any) {
    localStorage.setItem('book_id',bId);
    this.dialog.open(RaiseIssueOrCancelComponent, {
      width: '20%',
      height: '30%',
      disableClose: false,
    });
  }

  onTableDataChanged(event: any) {
    this.page = event;
    this.getBooks();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getBooks();
  }
}
