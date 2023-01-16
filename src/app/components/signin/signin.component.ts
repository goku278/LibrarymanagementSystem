import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/login';
import { SigninService } from 'src/app/services/signin.service';
import { Status } from 'src/app/status';
import { AllUsers } from 'src/app/user_profile';
import { UpdateAdminComponent } from '../update-admin/update-admin.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateGeneralUserComponent } from '../update-general-user/update-general-user.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  login: Login = new Login();
  status: Status = new Status();
  usersprofile: AllUsers = new AllUsers();
  uRole: string;
  constructor(
    private service: SigninService,
    private dialog: MatDialog,
    private matSnackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    let p = localStorage.getItem('pass');
    if (p != null) {
      // alert('saved credential is : ' + p);
      this.fetchProfileDetails(p);
    }
    // else alert('localStorage is : null!!');
  }

  public fetchProfileDetails(p: any) {
    // alert('From fetchProfileDetails : ' + p);
    let uId = localStorage.getItem('userId');
    this.service.getUserProfile(p).subscribe((data) => {
      this.usersprofile = data;
      // alert(this.usersprofile);
    });
  }

  public signin(log: any) {
    this.service.signIn(log.email, log.userName).subscribe((data) => {
      this.status = data;
      if (this.status.message == 'Login Successful') {
        localStorage.setItem('pass', JSON.stringify(log.email));
        localStorage.setItem('userId', JSON.stringify(this.status.userId));
        if (
          this.status.userRole == 'ADMIN' ||
          this.status.userRole == 'Admin'
        ) {
          this.uRole = 'ADMIN';
        } else if (
          this.status.userRole == 'LIBRARIAN' ||
          this.status.userRole == 'Librarian'
        ) {
          this.uRole = 'LIBRARIAN';
        } else {
          this.uRole = 'GENERAL USER';
        }
        this.openSnackBar('Login Successful', 'close', this.uRole);
      }
    });
  }

  public openSnackBar(msg: any, action: any, uRole: any) {
    let snackBar = this.matSnackBar.open(msg, action);
    document.cookie = 'UserName=' + localStorage.getItem('userId');
    // alert('cookie : ' + localStorage.getItem('userId'));
    // alert('uRole : ' + uRole);
    localStorage.setItem('userRole', this.uRole);
    if (uRole == 'ADMIN' || uRole == 'Admin') {
      this.router.navigate([
        '/admindashboard',
        { queryParams: { user_id: localStorage.getItem('userId') } },
      ]);
    }
    if (uRole == 'LIBRARIAN' || uRole == 'Librarian') {
      this.router.navigate([
        '/librariandashboard',
        { queryParams: { user_id: localStorage.getItem('userId') } },
      ]);
    }
    if (uRole == 'GENERAL USER' || uRole == 'General User') {
      this.router.navigate([
        '/userdashboard',
        { queryParams: { user_id: localStorage.getItem('userId') } },
      ]);
    }
  }

  public update() {
    this.dialog.open(UpdateGeneralUserComponent, {
      width: '25%',
      height: '60%',
      disableClose: true,
    });
  }
}
