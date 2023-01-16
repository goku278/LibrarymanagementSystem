import { Component, OnInit } from '@angular/core';
import { LibrarianProfileService } from 'src/app/librarian-profile.service';
import { Librarian } from 'src/app/librarians';
import { MatTable } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminProfile } from 'src/app/adminprofile';
import { AdminProfileService } from 'src/app/services/admin-profile.service';
import { AdminProfile2Service } from 'src/app/services/admin-profile2.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateAdminComponent } from '../update-admin/update-admin.component';
import { Router } from '@angular/router';
import { TransferService } from 'src/app/services/transfer.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css'],
})
export class AdminProfileComponent implements OnInit {
  admin: AdminProfile = new AdminProfile();

  // admin: any;

  displayedColumns: string[] = [
    'Admin Name',
    'Admin Email',
    'Admin ContactNo',
    'Update',
  ];

  constructor(
    private service: AdminProfile2Service,
    private dialog: MatDialog,
    private matSnackBar: MatSnackBar,
    private transferService: TransferService,
    private router: Router
  ) {
    this.service.getAdminProfile1('1').subscribe((data) => (this.admin = data));
  }

  ngOnInit(): void {}

  data = this.transferService.getData();

  public update() {
    this.dialog.open(UpdateAdminComponent, {
      width: '20%',
      height: '45%',
      disableClose: true,
    });
  }
}
