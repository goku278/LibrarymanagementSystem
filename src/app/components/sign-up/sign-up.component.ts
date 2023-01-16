import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/signup.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/user';
import { Status } from 'src/app/status';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  user: User = new User();
  message: any;
  status: Status = new Status();
  roles: string[] = ['ADMIN', 'GENERAL USER'];
  selected: string = 'Choose Role';
  constructor(
    private service: SignupService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
    // alert('selected : ' + this.selected);
  }

  ngOnInit(): void {}

  public signup() {
    // alert('Hello World')
    // alert('selected : ' + this.selected);
    this.user.role = this.selected;
    let resp = this.service.register(this.user);
    resp.subscribe((data) => {
      this.status = data;
    });
    if (this.status.message != 'User with same email already exists') {
      this.router.navigate(['/signin']);
    } else {
      this.openSnackBar('User with same email already exists', 'Close');
    }
  }
  public openSnackBar(msg: any, action: any) {
    let snackBar = this.matSnackBar.open(msg, action);
  }
}
