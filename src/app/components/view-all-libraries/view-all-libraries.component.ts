import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { GeneralUserDashboardService } from 'src/app/services/general-user-dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-view-all-libraries',
  templateUrl: './view-all-libraries.component.html',
  styleUrls: ['./view-all-libraries.component.css'],
})
export class ViewAllLibrariesComponent implements OnInit {
  message: any;
  userId: any;
  constructor(private service: GeneralUserDashboardService, private router: Router) {
    this.viewLibraries();
    this.userId = localStorage.getItem('userId');
    // alert("cookie : " + document.cookie);
    console.log("userId : " + this.userId);
    // alert('userId : ' + this.userId);
  }

  ngOnInit(): void {
    this.viewLibraries();
  }

  public viewLibraries() {
    // alert('view all libraries!');
    this.service.viewAllLibraries().subscribe((data) => {
      this.message = data;
    });
    // this.router.navigate(['/viewalllibraries'])
  }

  public goToLibraryDashboard(libraryName: any, libId: any) {
    // alert('Library Name is : ' + libraryName);
    localStorage.setItem('library_id', libId)
    localStorage.setItem('libraryname', libraryName);
    this.router.navigate(['/librarydashboard'])
  }
}
