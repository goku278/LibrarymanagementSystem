import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Search } from 'src/app/searchitems';
import { MatDialog } from '@angular/material/dialog';
import { RequestBookComponent } from '../request-book/request-book.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  t:Search=new Search;
  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public signup() {
    this.router.navigate(['/signup'])
  }

  public signin() {
    this.router.navigate(['/signin'])
  }

  public categoryWise(books: any) {
    localStorage.setItem('category_wise_books',books);
    this.router.navigate(['/categorywisebooks'])
  }

  public searchBooks(text: any) {
      // alert(text.text);
      localStorage.setItem('searchitems',text.text);
      var searchItems = text;
      this.router.navigate(['/searchresult'], { queryParams: { category: text.text } });
  }

  public requestBook() {
      // alert('request new book');
      // requestbook
      this.dialog.open(RequestBookComponent, {
        width: '25%',
        height: '45%',
        disableClose: true,
      });
  }

}
