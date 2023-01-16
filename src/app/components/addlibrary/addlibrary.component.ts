import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddLibraryService } from 'src/app/add-library.service';
import { Library } from 'src/app/library';
import { NewStatus } from 'src/app/newstatus';
import { Status } from 'src/app/status';

@Component({
  selector: 'app-addlibrary',
  templateUrl: './addlibrary.component.html',
  styleUrls: ['./addlibrary.component.css']
})
export class AddlibraryComponent implements OnInit {

  library: Library = new Library()
  message: Status = new Status;

  constructor(private service: AddLibraryService, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public addLibrary() {
    let resp = this.service.addLibrary(this.library).
    subscribe((data)=> {
      this.openSnackBar(JSON.stringify(data))
    })
    
   
  }

  public openSnackBar(msg: any) {
    if (msg.includes('200')) {
      // alert('Library successfully added');
      this.matSnackBar.open('Library successfully added', 'close');
    }
      
  }

}
