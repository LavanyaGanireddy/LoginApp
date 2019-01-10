import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ChangeComponent } from '../change/change.component';
import { StartComponent } from '../start/start.component';
import { DetailService } from '../detail.service';
import { ConfirmService } from '../confirm.service';
import { AlertService } from '../alert.service';
import { ExamService } from '../exam.service';
import { EmailValidator } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  rows;
  displayedColumns: string[] = ['username', 'email', 'city', 'state', 'country', 'phone', 'qualification', 'actions'];
  pictures = [
    {
      id: 1,
      title: 'Natural',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg'
    },
    {
      id: 2,
      title: 'Newspaper',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg'
    },
    {
      id: 3,
      title: 'Pizza',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg'
    }
  ];
  // dataSource : MatTableDataSource<any>;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  panelOpenState = false;
  email;
  password;
  // public users:DetailService[];
  user;
  // userName;
  NG1101;
  DB1001;
  NG1001;
  constructor(private http: HttpClient, private router: Router, public dialog: MatDialog, private alertService: AlertService, private detailService: DetailService, private confirmService: ConfirmService, private examService: ExamService) {
    this.user = detailService.userName;
    console.log(this.user);
  }

  ngOnInit() {
    // let value=this.http.retrieve(this.email,this.password);
    //   this.detailService.retrieve(this.email, this.password).subscribe((users: DetailService[]) => {
    //     this.users = users
    // })
    // this.user
    // this.http.get('http://localhost:4200/assets/employee.json').subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.rows=data;
    //     this.dataSource = new MatTableDataSource(this.rows);
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //   });
  }
  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  edit() {
    //edit code
    const dialogRef = this.dialog.open(ChangeComponent, {
      height: '500px',
      width: '420px'
    });
    // this.router.navigateByUrl('/change');
  }

  openConfirmationDialog() {
    this.email = this.detailService.email;
    if (confirm("Are you sure you want to delete account...?")) {
      this.http.delete('http://172.17.15.68:8090/deleteUser?email=' + this.email)
        .subscribe(res => {
          // console.log(this.id);
          console.log(res);
          this.router.navigateByUrl('/');
          this.alertService.success('Your Account has been deleted successfully!!!');
          // this.result='Deleted successfully!!!';
        },
          err => {
            console.log('Error occured');
          })
    }
    // this.confirmService.confirm('Please confirm..', 'Do you really want to ... ?')
    // .then((confirmed) => console.log('User confirmed:', confirmed))
    // .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
  openDialog(subj) {
    // this.router.navigateByUrl('/');
    const dialogRef = this.dialog.open(StartComponent, {
      height: '250px',
      width: '320px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'start') {
        this.router.navigate(['/exam'], { queryParams: { technology: subj } })
      }
    });

  }
  // mongo() {
  //   // this.router.navigateByUrl('/');
  //   const dialogRef = this.dialog.open(StartComponent, {
  //     height: '250px',
  //     width: '320px'
  //   });
  // }
  // angular() {
  //   // this.router.navigateByUrl('/');
  //   const dialogRef = this.dialog.open(StartComponent, {
  //     height: '250px',
  //     width: '320px'
  //   });
  // }

  logout() {
    this.router.navigateByUrl('/');
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