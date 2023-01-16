import { Component, OnInit } from '@angular/core';
import { GeneralUserDashboardService } from 'src/app/services/general-user-dashboard.service';
import { VisitLibraryDialogComponent } from '../visit-library-dialog/visit-library-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckprofileComponent } from '../checkprofile/checkprofile.component';

@Component({
  selector: 'app-general-user-dashboard',
  templateUrl: './general-user-dashboard.component.html',
  styleUrls: ['./general-user-dashboard.component.css'],
})
export class GeneralUserDashboardComponent implements OnInit {
  constructor(
    private service: GeneralUserDashboardService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  message: any;
  ngOnInit(): void {}

  public viewLibraries() {
    // alert('view all libraries!');
    this.service.viewAllLibraries().subscribe((data) => {
      this.message = data;
    });
    // localStorage.setItem('view_all_books',"false");
    this.router.navigate(['/viewalllibraries'])
  }

  public checkProfile() {
    // this.router.navigate(['/checkprofile'])
    this.dialog.open(CheckprofileComponent, {
      width: '25%',
      height: '35%',
      enterAnimationDuration: '1000ms',
      disableClose: true,
    });
  }

  public viewBooks() {
    // localStorage.setItem('view_all_books',"true");
    this.router.navigate(['/viewallbooks'])
  }

  public redirectToLibrary(libraryName: any) {
    // alert('Visit this library!');
    this.dialog.open(VisitLibraryDialogComponent, {
      width: '18%',
      height: '22',
      disableClose: true,
    });
  }
}
