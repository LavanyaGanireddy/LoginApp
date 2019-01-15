import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  token1;
  constructor(private http: HttpClient) {
    this.http.get('http://172.17.15.68:3000/users/tokenGen').subscribe(
      (data) => {
        this.token1 = data.token;
        console.log(this.token1);
        localStorage.setItem("token", this.token1);
      });
  }
}