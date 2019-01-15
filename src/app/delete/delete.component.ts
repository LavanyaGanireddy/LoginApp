import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

import { DetailService } from '../detail.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  email;
  token1;
  constructor(private http: HttpClient, public dialogRef: MatDialogRef<DeleteComponent>, private router: Router, private detailService: DetailService, private alertService: AlertService) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
  delete() {
    this.email = this.detailService.email;
    console.log('DeleteComponent', this.email);
    this.token1 = localStorage.getItem("token")
    console.log('DeleteComponent', this.token1);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.token1
      })
    };
    this.http.delete('http://172.17.15.68:3000/deleteUser?email=' + this.email, httpOptions)
      .subscribe(res => {
        console.log('DeleteComponent',res);
        this.router.navigateByUrl('/');
        this.alertService.success('Your Account has been deleted successfully!!!');
      },
        err => {
          console.log('DeleteComponent',err);
        })
  }

}
