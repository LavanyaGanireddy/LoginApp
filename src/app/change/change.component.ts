import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Validation } from './validation';
import { MatDialogRef } from '@angular/material';

import { DetailService } from '../detail.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {

  signupForm: FormGroup;
  email;
  x;
  y;
  z;
  user;
  password;
  cpassword;
  token;
  token1;
  
  constructor(private http: HttpClient, private detailService: DetailService, private alertService: AlertService, fb: FormBuilder, public dialogRef: MatDialogRef<ChangeComponent>) {
    this.signupForm = fb.group({
      password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      npassword: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]]
    }, {
        validator: Validation.MatchPassword
      })
  }

  ngOnInit() {
    this.user = this.detailService.email;
    console.log('ChangeComponent',this.user);
  }

  function() {
    this.x = document.getElementById("input");
    if (this.x.type === "password") {
      this.x.type = "text";
    } else {
      this.x.type = "password";
    }
  }

  function1() {
    this.y = document.getElementById("input1");
    if (this.y.type === "password") {
      this.y.type = "text";
    } else {
      this.y.type = "password";
    }
  }

  function2() {
    this.z = document.getElementById("input2");
    if (this.z.type === "password") {
      this.z.type = "text";
    } else {
      this.z.type = "password";
    }
  }

  change() {
    this.email = this.detailService.email;
    console.log('ChangeComponent',this.email);
    this.token1 = localStorage.getItem("token")
    console.log('ChangeComponent', this.token1);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.token1
      })
    };
    this.http.post('http://172.17.15.68:3000/users/changePassword?email=' + this.email, {
      password: this.cpassword
    }, httpOptions).subscribe(
      (data) => {
        console.log('ChangeComponent',data);
        console.log('ChangeComponent',this.password)
        console.log('ChangeComponent',this.detailService.email);
        this.dialogRef.close();
        this.alertService.success('Password has been changed successfully!!!');
      },
      err => {
        console.log('ChangeComponent...Error occured');
        this.alertService.warn('Your old password is incorrect!!!');
      });
  }

}