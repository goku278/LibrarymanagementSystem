import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/books';
import { MatDialog } from '@angular/material/dialog';
import { ViewrequestedbooksService } from 'src/app/services/viewrequestedbooks.service';
import { OrderComponent } from '../order/order.component';
@Component({
  selector: 'app-viewrequestedbooks',
  templateUrl: './viewrequestedbooks.component.html',
  styleUrls: ['./viewrequestedbooks.component.css']
})
export class ViewrequestedbooksComponent implements OnInit {
  books: Books[] =[];
  constructor(private service: ViewrequestedbooksService, private dialog: MatDialog) { }

  ngOnInit(): void {
    var l_id = localStorage.getItem('userId');
      this.service.viewRequestedBooks(l_id)
      .subscribe((data)=> {
          this.books = data;
      })
  }

  public order(title: any) {
    localStorage.setItem('bookTitle',title);
    this.dialog.open(OrderComponent, {
      width: '16%',
      height: '25%',
      disableClose: true,
    });
  }

}
