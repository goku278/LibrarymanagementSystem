import { Component, OnInit } from '@angular/core';
import { CheckprofileService } from 'src/app/services/checkprofile.service';
import { AllUsers } from 'src/app/user_profile';
import { MatDialog } from '@angular/material/dialog';
import { UpdateGeneralUserComponent } from '../update-general-user/update-general-user.component';
@Component({
  selector: 'app-checkprofile',
  templateUrl: './checkprofile.component.html',
  styleUrls: ['./checkprofile.component.css'],
})
export class CheckprofileComponent implements OnInit {
  uId: any;
  users: AllUsers = new AllUsers();
  allusers: AllUsers[] = [];
  email: any;
  role: any;
  prof: any;
  constructor(private service: CheckprofileService, private dialog: MatDialog) {
    this.role = localStorage.getItem('userRole');
    // this.role = this.role.subString(0,1) + this.role.subString(1).toLocaleLowerCase();
    // this.service.getProfileByUserId(this.uId).subscribe((data) => {
    //   this.users = data;

    // });
  }

  ngOnInit(): void {
    this.uId = localStorage.getItem('userId');
    // alert('cookie : ' + this.uId);
    this.prof = localStorage.getItem('profile');
    this.service.getProfileByUserId(this.uId).subscribe((data) => {
      this.users = data;
      // alert('email : ' + this.users.email);
    });
    // if (this.prof == 'NA') {
    //   this.service.getProfileByUserId(this.uId).subscribe((data) => {
    //     this.users = data;
    //     alert('email : ' + this.users.email);
    //   });
    // }
    // else {
    //   this.service.getAllUserProfiles()
    //   .subscribe((data)=> {
    //       this.allusers = data;
    //   });
    // }
    // console.log('users : ' + this.users.email);
    // alert('users : ' + this.users.email);
  }

  public update() {
    // alert('Updated!');
    // this.service.updateProfile(this.uId)
    this.dialog.open(UpdateGeneralUserComponent, {
      width: '25%',
      height: '60%',
      disableClose: true,
    });
  }

  public delete() {
    if (
      this.role.includes('ADMIN') ||
      this.role.includes('Admin') ||
      this.role.includes('admin')
    ) {
      alert('Profile has been deleted!');
    } else {
      alert('Only admin has priviledge to delete user profile!');
    }
  }
}
