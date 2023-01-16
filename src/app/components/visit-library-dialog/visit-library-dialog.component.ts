import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitLibraryDialogService } from 'src/app/services/visit-library-dialog.service';

@Component({
  selector: 'app-visit-library-dialog',
  templateUrl: './visit-library-dialog.component.html',
  styleUrls: ['./visit-library-dialog.component.css'],
})
export class VisitLibraryDialogComponent implements OnInit {
  message: any;

  constructor(
    private service: VisitLibraryDialogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.seeBooks();
  }

  public redirect(msg: any) {
    // alert(msg);

    if (msg == 'Yes please') {
      // alert('Library visited!');
      this.router.navigate(['/librarydashboard']);
    }
  }

  // public seeBooks() {
  //   this.service.seeBooks().subscribe((data) => (this.message = data));
  // }
}