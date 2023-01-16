import { Component, OnInit } from '@angular/core';
import { LibrarianProfileService } from 'src/app/librarian-profile.service';
import { Librarian } from 'src/app/librarians';
import { MatTable } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-librarian-profile',
  templateUrl: './librarian-profile.component.html',
  styleUrls: ['./librarian-profile.component.css'],
})
export class LibrarianProfileComponent implements OnInit {
  librarians: Librarian[] = [];

  message: any;

  // librarians: any;

  displayedColumns: string[] = [
    'Library Name',
    'Librarian Id',
    'Librarian Name',
    'Email',
    'Contact No',
    'Edit',
    'Delete',
  ];

  constructor(
    private service: LibrarianProfileService,
    private matSnackBar: MatSnackBar
  ) {
    this.service
      .fetchLibrarianProfile()
      .subscribe((data) => (this.librarians = data));
    // alert('libraians size is : ' + this.librarians.size);
  }

  ngOnInit(): void {}

  public delete(librarianId: any, element: any, msg: any) {
    this.service.deleteLibrarian(librarianId).subscribe((data) => {
      this.message = data;
    });

    this.openSnackBar(msg, 'close');
  }

  public openSnackBar(message: any, close: any) {
    this.matSnackBar.open(message, close);

    this.service
      .fetchLibrarianProfile()
      .subscribe((data) => (this.librarians = data));
  }
}
