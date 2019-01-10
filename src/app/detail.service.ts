import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
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
  constructor(private http: HttpClient, private router: Router, private alertService: AlertService) { }
  public retrieve(email, password) {
    this.http.get('http://172.17.15.68:3000/users/userLogin/' + email + '/' + password)
      .subscribe(
        (data) => {
          this.obj = data;
          //console.log(email);
          this.userName = this.obj.data[0].userName;
          this.email = this.obj.data[0].email;
          console.log(this.userName);
          console.log(this.email);
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
  }
}
