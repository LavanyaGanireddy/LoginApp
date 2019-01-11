import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
token1;
  constructor(private http: HttpClient, private router: Router, private alertService: AlertService) {
    this.http.get('http://172.17.15.68:3000/users/tokenGen').subscribe(
      (data) => {
this.token1=data.token;
console.log(this.token1);
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'token': data.token
          })
        };
      });
   }

  // public node(){
    
  // }
  // public mongo(){

  // }
  // public angular(){

  // }

  // token(){
    
  // }
  // console.log(this.token1);
}
