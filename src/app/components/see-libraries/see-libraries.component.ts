import { Component, OnInit } from '@angular/core';
import { SeeLibrariesService } from 'src/app/see-libraries.service';
import { SeeLibraries } from 'src/app/seelibraries';

@Component({
  selector: 'app-see-libraries',
  templateUrl: './see-libraries.component.html',
  styleUrls: ['./see-libraries.component.css']
})
export class SeeLibrariesComponent implements OnInit {

  seelibraries: SeeLibraries = new SeeLibraries()
  message: any

  constructor(private service: SeeLibrariesService) { }

  ngOnInit(): void {
  }

  // public seeLibraries() {

  // }

}
