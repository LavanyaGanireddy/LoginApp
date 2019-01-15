import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from "rxjs";

import { RegisterComponent } from '../register/register.component';
import { PasswordComponent } from '../password/password.component';

import { DetailService } from '../detail.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email1;
  password2;
  submitted = false;
  signupForm: FormGroup;
  x;
  img = "http://localhost:4200/assets/user.jpg";
  obj: any = [{}];
  public users$: Observable<DetailService[]>
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<LoginComponent>, private detailService: DetailService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'email': new FormControl(null, Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        'password': new FormControl(null, [Validators.required, Validators.maxLength(20), Validators.minLength(6)])
      }),
    });
  }
  function() {
    this.x = document.getElementById("input");
    if (this.x.type === "password") {
      this.x.type = "text";
    } else {
      this.x.type = "password";
    }
  }
  doLogin(email, password) {
    console.log(email,"",password);
    this.detailService.retrieve(email, password);
    this.dialogRef.close();
  }

  register() {
    const dialogRef = this.dialog.open(RegisterComponent, {
      height: '500px',
      width: '550px'
    });
  }
  password1() {
    const dialogRef = this.dialog.open(PasswordComponent, {
      height: '280px',
      width: '400px'
    });
  }

}
