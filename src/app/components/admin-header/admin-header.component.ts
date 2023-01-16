import { Component, OnInit } from '@angular/core';
import { AdminProfileService } from 'src/app/services/admin-profile.service';
import { AdminProfile } from 'src/app/adminprofile';
import { AllUsers } from 'src/app/user_profile';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
})
export class AdminHeaderComponent implements OnInit {
  profile: any;
  userprofiles: AllUsers[] = []

  constructor(private service: AdminProfileService) {}

  ngOnInit(): void {}

  public seeAdminProfile() {
    this.service
      .getAdminProfile('1')
      .subscribe((data) => (this.profile = data));
  }

  public seeUserProfile() {
    this.service.getAllusers().subscribe((data)=> {
      this.userprofiles = data;
    })
  }
}
