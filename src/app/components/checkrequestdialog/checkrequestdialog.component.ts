import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-checkrequestdialog',
  templateUrl: './checkrequestdialog.component.html',
  styleUrls: ['./checkrequestdialog.component.css'],
})
export class CheckrequestdialogComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public seeRequest(str: any) {
    // alert('str is : ' + str);
    if (str.includes('Check Issue Request')) {
      localStorage.setItem('issue_req', 'true');
      this.router.navigate(['/checkrequest']);
    } else if (str.includes('Check Cancel Request')) {
      localStorage.setItem('issue_req', 'false');
      this.router.navigate(['/checkrequest']);
    }
  }
}
