import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { AddBookComponent } from '../add-book/add-book.component';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitLibraryDialogService } from 'src/app/services/visit-library-dialog.service';
import { Books } from 'src/app/books';
import { CheckrequestdialogComponent } from '../checkrequestdialog/checkrequestdialog.component';
import { RequestBookComponent } from '../request-book/request-book.component';
import { CheckprofileComponent } from '../checkprofile/checkprofile.component';
@Component({
  selector: 'app-librarian-dashboard',
  templateUrl: './librarian-dashboard.component.html',
  styleUrls: ['./librarian-dashboard.component.css'],
})
export class LibrarianDashboardComponent implements OnInit {
  books: Books[] = [];
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private service: VisitLibraryDialogService
  ) {}

  ngOnInit(): void {}

  triggered(str: any) {
    // alert(str)

    if (str.includes('add_books')) {
      this.dialog.open(AddBookComponent, {
        width: '30%',
        height: '500px',
        disableClose: true,
      });
    }
    if (str.includes('check_profile')) {
      // alert('Check profile');
      // alert('cookie : ' + localStorage.getItem('userId'));
      // this.router.navigate(['/checkprofile']);
      this.dialog.open(CheckprofileComponent, {
        width: '25%',
        height: '35%',
        enterAnimationDuration: '1000ms',
        disableClose: true,
      });
    }
    if (str.includes('check_request')) {
      // alert('Check Request');
      // alert('cookie : ' + localStorage.getItem('userId'));
      var l_id = localStorage.getItem('userId');
      this.dialog.open(CheckrequestdialogComponent, {
        width: '29%',
        height: '28%',
        disableClose: false,
      }); 
      // this.router.navigate(['/checkrequest']);
    }
    if (str.includes('view_requested_books')) {
      var l_id = localStorage.getItem('userId');
      this.router.navigate(['/viewrequestedbooks']);
    }

    // view_order_books

    if (str.includes('view_order_books')) {
      var l_id = localStorage.getItem('userId');
      // alert(str);
      this.router.navigate(['/viewrequestedbooks']);
    }

    if (str == 'order_books') {
      var l_id = localStorage.getItem('userId');
      // alert(str);
      this.dialog.open(RequestBookComponent, {
        width: '25%',
        height: '45%',
        disableClose: true,
      });
      // this.router.navigate(['/viewrequestedbooks']);
    }
  }
}
