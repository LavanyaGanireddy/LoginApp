import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatTableDataSource,MatSort } from '@angular/material';

import { MatDialog } from '@angular/material';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  rows;
  displayedColumns: string[] = ['username', 'email', 'city', 'state','country','phone','qualification','actions'];
  dataSource : MatTableDataSource<any>;
  img="http://localhost:4200/assets/cert.png";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient,public dialog: MatDialog) { }

  ngOnInit() {
    // this.http.get('http://localhost:4200/assets/employee.json').subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.rows=data;
    //     this.dataSource = new MatTableDataSource(this.rows);
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //   });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

login(){
  const dialogRef = this.dialog.open(LoginComponent, {
    height: '490px',
    width: '450px'
  });
}
register(){
  const dialogRef = this.dialog.open(RegisterComponent, {
    height: '500px',
    width: '550px'
  });
}
}
export interface Users {
  username: string;
  email: string;
  city: string;
  state: string;
  country: string;
  phone: number;
  qualification: string;
}
