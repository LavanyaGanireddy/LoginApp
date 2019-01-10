import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../alert.service';
import { Validation } from './validation';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DetailService } from '../detail.service';

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
  constructor(private http: HttpClient, private detailService: DetailService, private alertService: AlertService, fb: FormBuilder,public dialogRef: MatDialogRef<ChangeComponent>) {
    // console.log(this.detailService.email)
    this.user=detailService.email;
    console.log(this.user);
    this.signupForm = fb.group({
      // define your control in you form
      password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      npassword: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]]
    }, {
        validator: Validation.MatchPassword // your validation method
      })
  }

  ngOnInit() {
    this.user=this.detailService.email;
    console.log(this.user);
    // this.signupForm = new FormGroup({
    //   'userData': new FormGroup({
    //     'password': new FormControl(null, [Validators.required, Validators.maxLength(20), Validators.minLength(6)]),
    //     'npassword': new FormControl(null, [Validators.required, Validators.maxLength(20), Validators.minLength(6)]),
    //     'cpassword': new FormControl(null, [Validators.required, Validators.maxLength(20), Validators.minLength(6)])
    //   }),
    // });
  }

  function() {
    this.x = document.getElementById("input");
    if (this.x.type === "password") {
      this.x.type = "text";      
    } else {
      this.x.type = "password";      
    }
  }

  function1(){
    this.y = document.getElementById("input1");
    if (this.y.type === "password") {
      this.y.type = "text";
    } else {
      this.y.type = "password";
    }
  }

  function2(){
    this.z = document.getElementById("input2");
    if (this.z.type === "password") {
      this.z.type = "text";
    } else {
      this.z.type = "password";
    }
  }

  change() {
    this.email=this.detailService.email;
    // console.log(this.detailService.email)
    console.log(this.cpassword);
    this.http.post('http://172.17.15.68:3000/users/changePassword?email='+this.email, {
       password: this.cpassword
    }).subscribe(
      (data) => {
        
        console.log(data);
        console.log(this.password)
        console.log(this.detailService.email);
        this.dialogRef.close();
        this.alertService.success('Password has been changed successfully!!!');
      });
  }

}
