import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AlertService } from '../alert.service';
import { DetailService } from '../detail.service';
import { ExamService } from '../exam.service';

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
  constructor(private http: HttpClient,private alertService: AlertService,private examService: ExamService,private detailService: DetailService) { }

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
    this.token1=localStorage.getItem("token")
console.log('ffgh',this.token1);
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'token': this.token1
  })
};
    this.http.post('http://172.17.15.68:3000/users/forgotPassword', {
      email: this.signupForm.value.userData.email
    },httpOptions).subscribe(
      (data) => {
        console.log(data);
        this.alertService.success('Password has been sent to your Email!!!');
      });
  }

}
