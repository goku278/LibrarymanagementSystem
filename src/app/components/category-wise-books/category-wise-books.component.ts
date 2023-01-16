import { Component, OnInit } from '@angular/core';
import { CategoryWiseBooksService } from 'src/app/services/category-wise-books.service';
import { Books } from 'src/app/books';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialog } from '@angular/material/dialog';
import { RaiseIssueOrCancelComponent } from '../raise-issue-or-cancel/raise-issue-or-cancel.component';
@Component({
  selector: 'app-category-wise-books',
  templateUrl: './category-wise-books.component.html',
  styleUrls: ['./category-wise-books.component.css'],
})
export class CategoryWiseBooksComponent implements OnInit {
  category: any;
  book: Books[] = [];

  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];

  constructor(private service: CategoryWiseBooksService,  private dialog: MatDialog) {
    // for(let i)
  }

  ngOnInit(): void {
      this.getBooks();
  }

  public getBooks(): void {
    this.category = localStorage.getItem('category_wise_books');
    this.service.getBooksByCategory(this.category).subscribe((data) => {
      this.book = data;
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

  public requestIssueBook(bId: any) {
    // alert("bId : " + bId);
    localStorage.setItem('book_id',bId);
    this.dialog.open(RaiseIssueOrCancelComponent, {
      width: '20%',
      height: '30%',
      disableClose: false,
    });
  }
}