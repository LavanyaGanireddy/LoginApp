import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  signupForm: FormGroup;
  email;
  constructor(private http: HttpClient,private alertService: AlertService) { }

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
    this.http.post('http://172.17.15.68:3000/users/forgotPassword', {
      email: this.signupForm.value.userData.email
    }).subscribe(
      (data) => {
        console.log(data);
        this.alertService.success('Password has been sent to your Email!!!');
      });
  }

}
