import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visit-librarian-profile',
  templateUrl: './visit-librarian-profile.component.html',
  styleUrls: ['./visit-librarian-profile.component.css']
})
export class VisitLibrarianProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public redirect(res: any) {
    // alert(res);
    
  }
 
}
