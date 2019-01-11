import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { AlertService } from '../alert.service';
import { Validation } from './validation';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DetailService } from '../detail.service';
import { ExamService } from '../exam.service';

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
  constructor(private http: HttpClient, private detailService: DetailService,private examService: ExamService, private alertService: AlertService, fb: FormBuilder, public dialogRef: MatDialogRef<ChangeComponent>) {
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
    console.log(this.user);
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
    console.log(this.email);
    this.examService.token1;
console.log('ffgh',this.examService.token1);
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'token': this.examService.token1
  })
};
    this.http.post('http://172.17.15.68:3000/users/changePassword?email=' + this.email, {
      password: this.cpassword
    },httpOptions).subscribe(
      (data) => {

        console.log(data);
        console.log(this.password)
        console.log(this.detailService.email);
        this.dialogRef.close();
        this.alertService.success('Password has been changed successfully!!!');
      });
  }

}
