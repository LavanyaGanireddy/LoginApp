import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { ChangeComponent } from '../change/change.component';
import { StartComponent } from '../start/start.component';
import { DeleteComponent } from '../delete/delete.component';

import { DetailService } from '../detail.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  panelOpenState = false;
  email;
  password;
  user;
  token;
  token1;
  constructor(public auth: AuthService, private router: Router, public dialog: MatDialog, private detailService: DetailService) {
    this.user = detailService.userName;
    console.log('FirstComponent',this.user);
  }

  ngOnInit() {
  }

  edit() {
    const dialogRef = this.dialog.open(ChangeComponent, {
      height: '500px',
      width: '420px'
    });
  }

  delete() {
    const dialogRef = this.dialog.open(DeleteComponent, {
      height: '250px',
      width: '320px'
    });  
  }

  logout(){
    this.auth.logout();
  }

  openDialog(subj) {
    const dialogRef = this.dialog.open(StartComponent, {
      height: '250px',
      width: '320px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'start') {
        this.router.navigate(['/exam'], { queryParams: { technology: subj } })
      }
    });
  }
}