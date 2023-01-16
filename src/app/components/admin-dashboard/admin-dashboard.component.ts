import { STRING_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminDashboardService } from 'src/app/admin-dashboard.service';
import { SeeLibraries } from 'src/app/seelibraries';
import { AddLibrarianComponent } from '../add-librarian/add-librarian.component';
import { AddlibraryComponent } from '../addlibrary/addlibrary.component';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitLibrarianProfileComponent } from '../visit-librarian-profile/visit-librarian-profile.component';
import { CheckprofileComponent } from '../checkprofile/checkprofile.component';
import { ProfileSelectionDialogComponent } from '../profile-selection-dialog/profile-selection-dialog.component';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  seelibraries: Array<SeeLibraries> = [];

  message: any;
  message1: string = '';
  user_id: any;
  librarians: any;

  libraryName = new Array();
  libraryNameCopy = new Array();
  librarianName = new Set<string>();
  librarianNameCopy = new Array();

  constructor(
    private dialog: MatDialog,
    private service: AdminDashboardService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
    });
  }

  public checkProfile() {
    this.dialog.open(ProfileSelectionDialogComponent, {
      width: '25%',
      height: '32%',
      disableClose: false,
    });
  }

  addLibrary(str: any) {
    this.dialog.open(AddlibraryComponent, {
      width: '25%',
      height: '50%',
      disableClose: false,
    });
  }

  addLibrarian(str: any) {
    this.dialog.open(AddLibrarianComponent, {
      width: '30%',
      height: '70%',
      disableClose: false,
    });
  }

  public seeLibraries() {
    this.router.navigate(['/viewalllibraries']);
  }

  public redirectToLibrary(libraryname: any) {}

  public seeLibrarians() {
    this.router.navigate(['/adminviewalllibrarians']);
  }

  public visitLibrarianProfile(librarianId: string, librarianName: string) {
    this.dialog.open(VisitLibrarianProfileComponent, {
      width: '20%',
      height: '30%',
      disableClose: false,
    });
  }
}
