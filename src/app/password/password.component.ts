import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialogRef } from '@angular/material';

import { AlertService } from '../alert.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  signupForm: FormGroup;
  email;
  token;
  token1;

  constructor(private http: HttpClient, public dialogRef: MatDialogRef<PasswordComponent>, private alertService: AlertService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'email': new FormControl(null, Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]))
      }),
    });
  }

  password() {
    this.token1 = localStorage.getItem("token")
    console.log('PasswordComponent', this.token1);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.token1
      })
    };
    this.http.post('http://172.17.15.68:3000/users/forgotPassword', {
      email: this.signupForm.value.userData.email
    }, httpOptions).subscribe(
      (data) => {
        console.log(data);
        this.alertService.success('Password has been sent to your Email!!!');
      },
      err => {
        console.log('PasswordComponent...Error occured');
        this.alertService.warn('You are not registered yet!!!');
      });
    this.dialogRef.close();
  }

}
