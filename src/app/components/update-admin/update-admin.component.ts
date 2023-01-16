import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { UpdateAdminProfile } from 'src/app/updateadminprofile';
import { UpdateAdminService } from 'src/app/services/update-admin.service';
import { Router } from '@angular/router';
import { TransferService } from 'src/app/services/transfer.service';
import { AdminProfile2Service } from 'src/app/services/admin-profile2.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css'],
})
export class UpdateAdminComponent implements OnInit {
  updateadminprofile: UpdateAdminProfile = new UpdateAdminProfile();
  message: any;
  admin: any;
  constructor(
    private dialog: MatDialog,
    private matSnackBar: MatSnackBar,
    private service: UpdateAdminService,
    private service1: TransferService,
    private service2: AdminProfile2Service,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public redirect(res: any, updateadminprofile1: any) {
    if (res == 'true') {
      // alert(res + ' ' + this.updateadminprofile.adminName);
      this.service
        .updateAdmin('1', this.updateadminprofile)
        .subscribe((data) => {
          this.message = data;
          this.service1.setData(data);
        });
      this.openSnackBar('Admin profile successfully updated!', 'close');
      // this.service2.getAdminProfile1('1').subscribe((data) => (this.admin = data));
    }
  }
  public openSnackBar(msg: any, action: any) {
    let snackBar = this.matSnackBar.open(msg, action);
    snackBar.afterDismissed().subscribe((action) => {
      // alert('action : ' + action.dismissedByAction);
      if (action.dismissedByAction)
        this.service2
          .getAdminProfile1('1')
          .subscribe((data) => (this.admin = data));
    });
  }
}
