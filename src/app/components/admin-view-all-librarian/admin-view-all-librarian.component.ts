import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from 'src/app/admin-dashboard.service';
import { Librarian } from 'src/app/librarian';
@Component({
  selector: 'app-admin-view-all-librarian',
  templateUrl: './admin-view-all-librarian.component.html',
  styleUrls: ['./admin-view-all-librarian.component.css'],
})
export class AdminViewAllLibrarianComponent implements OnInit {
  librarians: Librarian[] = [];
  l: any;
  message: any;
  constructor(private service: AdminDashboardService) {
    // alert('cookie inside admin dashboard : ' + localStorage.getItem('userId'));
    this.message = localStorage.getItem('userId');
  }

  ngOnInit(): void {
    this.service.seeLibrarians().subscribe((data) => {
      this.librarians = data;
      this.l = data;
    });
    // alert('cookie inside admin dashboard : ' + localStorage.getItem('userId'));
    this.message = localStorage.getItem('userId');
  }
}
