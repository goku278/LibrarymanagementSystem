import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public dialog: MatDialog) {

  }

  openDialog(event: any, enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogBoxComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: true
    });

}
}
