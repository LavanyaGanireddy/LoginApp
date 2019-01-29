import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialogRef } from '@angular/material';

import { AlertService } from '../alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;
  userName;
  email;
  city;
  state;
  country;
  phoneNo;
  token;
  qualification;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  token1;

  constructor(private http: HttpClient, public dialogRef: MatDialogRef<RegisterComponent>, private alertService: AlertService) { }

  countries = [
    'Afghanistan', 'Argentina', 'Australia',
    'Bangladesh', 'Belgium', 'Brazil', 'Canada',
    'China', 'Denmark', 'Egypt', 'France',
    'Germany', 'Iceland', 'India', 'Japan',
    'Kenya', 'Mexico', 'Myanmar ', 'Nepal',
    'New Zealand', 'Pakistan', 'Philippines',
    'Russia', 'Singapore', 'South Africa',
    'Sri Lanka', 'Sweden', 'Switzerland',
    'Switzerland', 'Taiwan', 'Turkey',
    'Ukraine', 'United Arab Emirates',
    'United Kingdom', 'United States', 'Venezuela',
    'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ]

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'userName': new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(30), Validators.minLength(3)]),
        'email': new FormControl(null, Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
          // /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        ])),
        'city': new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(30), Validators.minLength(3)]),
        'state': new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(30), Validators.minLength(3)]),
        'country': new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(30), Validators.minLength(3)]),
        'phoneNo': new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(10), Validators.minLength(10)]),
        'qualification': new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(30), Validators.minLength(3)])
      }),
    });
  }

  register() {
    console.log('Name is ', this.userName);
    console.log('Email is ', this.email);
    console.log('City is ', this.city);
    console.log('State is ', this.state);
    console.log('Country is ', this.country);
    console.log('Phone number is ', this.phoneNo);
    console.log('Qualification is ', this.qualification);
  }

  onSubmit() {
    this.token1 = localStorage.getItem("token")
    console.log('RegisterComponent', this.token1);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.token1
      })
    };
    this.http.post('http://172.17.15.68:3000/users/addUser', {
      userName: this.signupForm.value.userData.userName,
      email: this.signupForm.value.userData.email,
      city: this.signupForm.value.userData.city,
      state: this.signupForm.value.userData.state,
      country: this.signupForm.value.userData.country,
      phoneNo: this.signupForm.value.userData.phoneNo,
      qualification: this.signupForm.value.userData.qualification
    }, httpOptions)
      .subscribe(
        res => {
          console.log(res);
          this.alertService.success('Registration is successful!!!');
          },
        err => {
          console.log('RegisterComponent...Error occured');
          this.alertService.warn('Registration failed!!!');
        }
      );
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

  reset() {
    this.signupForm.reset();
  }

}