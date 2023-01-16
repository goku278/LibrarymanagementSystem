import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CheckprofileService } from 'src/app/services/checkprofile.service';
import { AllUsers } from 'src/app/user_profile';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { UpdateGeneralAllUserComponent } from 'src/app/components/update-general-all-user/update-general-all-user.component';

// export interface PeriodicElement {
//   userName: string;
//   email: number;
//   role: number;
//   contactNo: string;
//   edit: string;
//   delete: string;
// }

@Component({
  selector: 'app-checkallprofiles',
  templateUrl: './checkallprofiles.component.html',
  styleUrls: ['./checkallprofiles.component.css'],
})
export class CheckallprofilesComponent implements OnInit {
  uId: any;
  users: AllUsers = new AllUsers();
  allusers: AllUsers[] = [];
  email: any;
  role: any;
  prof: any;
  dataSource: any;
  ELEMENT_DATA: any;
  constructor(
    private service: CheckprofileService,
    private dialog: MatDialog
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    // this.dataSource = new MatTableDataSource<AllUsers>(this.allusers);
    // this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.service.getAllUserProfiles().subscribe((data) => {
      this.allusers = data;
      // this.dataSource = this.allusers;
      this.dataSource = new MatTableDataSource<AllUsers>(this.allusers);
      this.dataSource.paginator = this.paginator;
    });
  }

  displayedColumns: string[] = [
    'name',
    'email',
    'role',
    'contactNo',
    'edit',
    'delete',
  ];
  // this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // dataSource = this.allusers;

  public update(r: any, id: any) {
    // alert('Updated!' + r);
    localStorage.setItem('dynamic_profile', r);
    localStorage.setItem('dynamic_user_id', id);
    // this.service.updateProfile(this.uId)
    this.dialog.open(UpdateGeneralAllUserComponent, {
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
