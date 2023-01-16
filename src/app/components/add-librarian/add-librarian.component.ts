import { Component, OnInit } from '@angular/core';
import { AddLibrarianService } from 'src/app/add-librarian.service';
import { Librarian } from 'src/app/librarian';
import { NewStatus } from 'src/app/newstatus';
import { Status } from 'src/app/status';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-librarian',
  templateUrl: './add-librarian.component.html',
  styleUrls: ['./add-librarian.component.css'],
})
export class AddLibrarianComponent implements OnInit {
  librarian: Librarian = new Librarian();
  message: any;
  stat: Status = new Status();

  roles: string[] = ['LIBRARIAN'];
  selected: string = 'Choose Role';

  constructor(
    private service: AddLibrarianService,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  public addLibrarian() {
    alert('this.librarian : ' + this.librarian.role);
    this.service
      .addLibrarian(this.librarian, this.librarian.libraryId)
      .subscribe((data) => {
        this.stat = data;
        this.showInSnackBar(JSON.stringify(data));
      });
  }

  public showInSnackBar(message: any) {
    if (message.includes('successful') || message.includes('200')) {
      this.matSnackBar.open('Librarian added successfully', 'close');
    }
  }
}
