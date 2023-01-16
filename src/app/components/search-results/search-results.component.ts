import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/books';
import { MatDialog } from '@angular/material/dialog';
import { RaiseIssueOrCancelComponent } from '../raise-issue-or-cancel/raise-issue-or-cancel.component';
import { SearchResultsService } from 'src/app/services/search-results.service';
import { ActivatedRoute } from '@angular/router';
import { Search } from 'src/app/searchitems';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  books: Books[] = [];
  t:any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  constructor(private service: SearchResultsService, private dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((parameter)=> {
        this.t = parameter;
        // alert('t : ' + this.t);
    })
      this.findBooksBySearchItem();
  }

  public findBooksBySearchItem() {
  var item = localStorage.getItem('searchitems'); 
  // alert('search : ' + item);
  this.service.findBooksBySearchItem(item)
  .subscribe((data)=> {
      this.books = data;
  })
}

  onTableDataChanged(event: any) {
    this.page = event;
    this.findBooksBySearchItem();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.findBooksBySearchItem();
  }

  public requestIssueBook(bId: any) {
    localStorage.setItem('book_id',bId);
    this.dialog.open(RaiseIssueOrCancelComponent, {
      width: '20%',
      height: '30%',
      disableClose: false,
    });
  }

}
