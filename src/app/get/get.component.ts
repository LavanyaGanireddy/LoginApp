import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';

import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit() {
  }

  login() {
    const dialogRef = this.dialog.open(LoginComponent, {
      height: '490px',
      width: '450px'
    });
  }
  register() {
    const dialogRef = this.dialog.open(RegisterComponent, {
      height: '500px',
      width: '550px'
    });
  }
}