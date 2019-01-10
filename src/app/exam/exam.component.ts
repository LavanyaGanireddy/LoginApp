import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, timer, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertService } from '../alert.service';
import { DetailService } from '../detail.service';
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  ticks = 0;
  signupForm: FormGroup;
  minutesDisplay: number = 0;
  hoursDisplay: number = 0;
  secondsDisplay: number = 0;
  response1;
  sub: Subscription;
  length;
  minutes;
  seconds = 3;
  tech;
  qid;
  answer;

  // entries = [];
  // selectedEntry;
  // onSelectionChange(entry) {
  //   this.selectedEntry = entry;
  //   console.log(this.selectedEntry);
  // }
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private alertService: AlertService, private detailService: DetailService) { }

  public technology1: string;
  // route;

  ngOnInit() {

    // setTimeout(() => {
    //   // if(this.examfinished!=1)
    //   // this.examresult();
    // }, 30000);


    // setInterval(() => {

    //   this.minutes = this.minutes - 1;
    //   if (this.minutes == 0) {
    //     alert("Exam Over");
    //     //this.submit();


    //   }
    //   if (this.minutes < 0) {
    //     this.minutes = 0;

    //   }
    // }, 60000);

    // setInterval(() => {

    //   this.seconds = this.seconds - 1;
    //   if (this.minutes <= 0) {
    //     if (this.seconds < 0) {
    //       this.seconds = 0;

    //     }
    //   }
    //   if (this.seconds == 0) {
    //     alert("Exam Over");
    //     // this.submit();


    //   }

    // }, 1000);




    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        option: new FormControl()
      }),
    });
    this.technology1 = this.route.snapshot.queryParamMap.get('technology');
    // .map((params) => params.get('a'));
    // this.sub.subscribe((val) => this.technology = val));
    // console.log(this.technology);
    var token = "";
    var a = new Headers({ "token": token });
    a.append('Content-Type', 'application/json');

    this.http.get('http://172.17.15.68:3000/users/getQuestions?technology=' + this.technology1)
      .subscribe(response => {

        this.response1 = response.questions;
        this.length = response.questions.length;
        this.minutes = this.length;
        this.tech = response.technology;
        this.qid = response.qid;
        console.log(this.technology1);
        console.log(this.length);
        console.log(this.tech);
        console.log(response);
        // this.router.navigateByUrl('/');
        // this.alertService.success('Your Account has been deleted successfully!!!');
        // this.result='Deleted successfully!!!';
      })
    // },
    //   err => {
    //     console.log('Error occured');
    //   })
  }

  submit() {
    // alert('hello....')

    this.http.post('http://172.17.15.68:3000/users/addTransaction', {
      email: this.detailService.email,
      userName: this.detailService.userName,
      technology: this.tech,
      technologyCode: this.technology1,
      questions: [{
        qid: this.qid,
        answer: this.signupForm.get('option').value
      }]
    })
      .subscribe(
        res => {
          console.log(res);
          // this.alertService.success('Registration was successful!!!');
          // this.router.navigate(['/']);
        },
        err => {
          console.log('Error occured');
          // this.alertService.warn('Registration failed!!!');
        }
      );
    this.router.navigateByUrl('/first');
  }
  cancel() {
    this.router.navigateByUrl('/first');
  }
  reset() {
    this.signupForm.reset();
  }
}
