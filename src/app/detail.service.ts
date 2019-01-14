import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
import { ExamService } from './exam.service';
import { Observable } from "rxjs"
// import { MatDialog, MatDialogRef } from '@angular/material';
// import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  obj: any = [{}];
  email1;
  password2;
  userName;
  email;
  token1;
  constructor(private http: HttpClient, private router: Router, private alertService: AlertService, private examService: ExamService) { }
  public retrieve(email, password) {

//     this.http.get('http://172.17.15.68:3000/users/tokenGen').subscribe(
//       (data) => {
// this.token1=data.token;
// console.log(this.token1);
        
// this.examService.token();
// this.examService.token1;
this.token1=localStorage.getItem("token")
console.log('ffgh',this.token1);
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'token': this.token1
  })
};
        this.http.post('http://172.17.15.68:3000/users/userLogin/', {
          email: email,
          password: password
        },httpOptions)
          .subscribe(
            (data) => {
              this.obj = data;
              //console.log(email);
              this.userName = this.obj.data[0].userName;
              this.email = this.obj.data[0].email;
              console.log(this.userName);
              console.log('email',this.email);
              if (this.email1 == this.obj.email && this.password2 == this.obj.password) {
                this.router.navigateByUrl('/first');
                this.alertService.success('You have been Logged in Successfully!!!');
                //this.dialogRef.close();
              }
              else {
                alert("please enter username and password ");
              }
            },
            err => {
              console.log('Error occured');
              this.router.navigateByUrl('/');
              this.alertService.warn('Registration failed!!!');
            });
      // });
  }
}
