import { Component, OnInit } from '@angular/core';
import { UpdateGeneralUserService } from 'src/app/services/update-general-user.service';
import { Status } from 'src/app/status';
import { AllUsers } from 'src/app/user_profile';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-general-user',
  templateUrl: './update-general-user.component.html',
  styleUrls: ['./update-general-user.component.css'],
})
export class UpdateGeneralUserComponent implements OnInit {
  usersprofile: AllUsers = new AllUsers();
  status: Status = new Status();
  message: any;
  role: string;
  dynamicRole: string;
  constructor(
    private service: UpdateGeneralUserService,
    private matSnackBar: MatSnackBar
  ) {
    this.role = localStorage.getItem('userRole');
    this.dynamicRole = localStorage.getItem('dynamic_role');
  }

  ngOnInit(): void {
    this.role = localStorage.getItem('userRole');
    // alert("role1 : " + this.role);
  }
  public redirect(res: any, usersprofile: any) {
    // alert(":::"+this.role);
    if (res == 'true') {
      this.service
        .updateGeneralUser(usersprofile, this.role)
        .subscribe((data) => {
          this.status = data;
          this.message = data;
          if (this.message == 'General user updated successfully!') {
            // alert('updated!');
            this.openSnackBar('General user updated successfully!', 'close');
          }
        });
    }
  }

  public openSnackBar(message: any, close: any) {
    let s = this.matSnackBar.open(message, close);
    // alert("s.dismissWithAction.toString" + s.afterDismissed);
    // if (s.dismissWithAction.toString)
    s.onAction().subscribe(() => {
      // alert('Action button clicked!');
    });
  }
}
