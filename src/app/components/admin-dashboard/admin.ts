import { Component, OnInit } from '@angular/core';

import { AdminDashboardService } from 'src/app/admin-dashboard.service';
import { SeeLibraries } from 'src/app/seelibraries';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class admin {
  seelibraries: Array<SeeLibraries> = [];


  constructor(
    private service: AdminDashboardService
  ) {}

  setAdminProfile() {
    localStorage.setItem('admin',"Raghav");
  }

  getAdminProfile() {
    localStorage.getItem('admin');
  }

//   testForLoop() {
//     for (let i = 0; i < 10; i++) {
//         console.log(i);
//     }
//   }

 
}
