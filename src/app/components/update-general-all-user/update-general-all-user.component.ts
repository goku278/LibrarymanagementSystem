import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpdateGeneralUserService } from 'src/app/services/update-general-user.service';
import { Status } from 'src/app/status';
import { AllUsers } from 'src/app/user_profile';
@Component({
  selector: 'app-update-general-all-user',
  templateUrl: './update-general-all-user.component.html',
  styleUrls: ['./update-general-all-user.component.css'],
})
export class UpdateGeneralAllUserComponent implements OnInit {
  usersprofile: AllUsers = new AllUsers();
  status: Status = new Status;
  message: any;
  role: string;
  dynamicRole: string;
  dynamicUserId: any;
  constructor(
    private service: UpdateGeneralUserService,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.dynamicRole = localStorage.getItem('dynamic_profile');
    this.dynamicUserId = localStorage.getItem('dynamic_user_id');
  }

  public redirect(res: any, usersprofile: any, id: any) {
    // alert(":::"+id);
    if (res == 'true') {
      this.service.updateAllGeneralUser(usersprofile, this.dynamicUserId, this.dynamicRole).subscribe((data) => {
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
