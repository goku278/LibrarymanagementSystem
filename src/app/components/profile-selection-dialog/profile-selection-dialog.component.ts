import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CheckprofileComponent } from '../checkprofile/checkprofile.component';
import { CheckallprofilesComponent } from '../checkallprofiles/checkallprofiles.component';
@Component({
  selector: 'app-profile-selection-dialog',
  templateUrl: './profile-selection-dialog.component.html',
  styleUrls: ['./profile-selection-dialog.component.css'],
})
export class ProfileSelectionDialogComponent implements OnInit {
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  public redirect(res: any) {
    // alert(res);
    if (res.includes('check_all_profile')) {
      localStorage.setItem('profile', 'check_all_profile');
      // this.router.navigate(['/checkallprofiles']);
      this.dialog.open(CheckallprofilesComponent, {
        width: '90%',
        height: '80%',
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '1000ms',
        disableClose: false,
      });
    } else {
      localStorage.setItem('profile', 'NA');
      // this.router.navigate(['/checkprofile']);
      this.dialog.open(CheckprofileComponent, {
        width: '25%',
        height: '35%',
        enterAnimationDuration: '1000ms',
        disableClose: true,
      });
    }
  }
}
