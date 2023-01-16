import { Component, OnInit } from '@angular/core';
import { AddBooks } from 'src/app/addbooks';
import { AddBooksService } from 'src/app/services/add-books.service';
import { Status } from 'src/app/status';
import { StatusMessage } from '../statusmessage';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addbooks: AddBooks = new AddBooks;
  statusmessage: any;
  constructor(private service: AddBooksService) { }

  ngOnInit(): void {
  }

  public triggered(check_request: any) {
      // alert('Clicked on triggered!');
  }

  public addBooks(addbooks: any) {
      // alert('addbooks : ' + addbooks.libraryId);
      this.service.addBooks(addbooks)
      .subscribe((data) => {
          this.statusmessage = data;
      });
      if (this.statusmessage.code == '200') {
          alert('Books successfully added');  
      } 
      else {
        alert(this.statusmessage.message); 
      }
      // alert(this.statusmessage);
  }
}