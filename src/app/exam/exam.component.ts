import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, timer, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertService } from '../alert.service';
import { DetailService } from '../detail.service';
import { ExamService } from '../exam.service';
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
  // minutes;
  seconds = 3;
  tech;
  qid;
  answer;
  token;
  // entries = [];
  // selectedEntry;
  // onSelectionChange(entry) {
  //   this.selectedEntry = entry;
  //   console.log(this.selectedEntry);
  // }
  constructor(private http: HttpClient, private examService: ExamService, private router: Router, private route: ActivatedRoute, private alertService: AlertService, private detailService: DetailService) { }

  public technology1: string;
  // countDownDate;
  // now;
  // distance;
  // x;

  ngOnInit() {
    // this.msToTime(10000);
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



    // this.cal(this.length);

    // this.signupForm = new FormGroup({
    //   'userData': new FormGroup({
    //     option: new FormControl()
    //   }),
    // });
    this.technology1 = this.route.snapshot.queryParamMap.get('technology');

    // var token = "";
    // var a = new Headers({ "token": token });
    // a.append('Content-Type', 'application/json');
    this.examService.token1;
    console.log('ffgh', this.examService.token1);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.examService.token1
      })
    };
    this.http.get('http://172.17.15.68:3000/users/getQuestions?technologyCode=' + this.technology1, httpOptions)
      .subscribe(response => {
        this.response1 = response.questions;
        this.length = response.questions.length;
        this.seconds = this.length * 60000;
        this.tech = response.technology;
        this.qid = response.qid;
        console.log(this.technology1);
        console.log(this.length);
        console.log(this.tech);
        console.log(response);
      })
    setInterval(() => {

      this.seconds = this.seconds - 1;
      if (this.seconds < 0) {
        this.seconds = 0;
      }

      if (this.seconds == 0) {
        alert("Exam Over");
        this.submit();

      }

    }, 1000);
  }
  // cal(len){
  //   this.countDownDate = len;
  //   console.log("sdgdfg",len);
  //   this.now = new Date().getTime();
  //   this.distance = this.countDownDate - this.now;
  //   this.x = setInterval(() => {
  //     this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000),
  //       this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60))
  //   }, 1000);
  //   console.log("nksdfhksdjf",this.minutes, ":", this.seconds);
  //   if (this.distance < 0) {
  //     clearInterval(this.x);
  //   }
  // }

  // msToTime(duration) {
  //   // this.milliseconds = +((duration % 1000) / 100),
  //   this.seconds = +((duration / 1000) % 60),
  //     this.minutes = +((duration / (1000 * 60)) % 60),
  //     //this.hours = +((duration / (1000 * 60 * 60)) % 24);

  //     //this.hours = (this.hours < 10) ? "0" + this.hours : this.hours;
  //     this.minutes = (this.minutes < 10) ? "0" + this.minutes : this.minutes;
  //   this.seconds = (this.seconds < 10) ? "0" + this.seconds : this.seconds;
  //   this.min = Math.floor(this.minutes)
  //   this.sec = Math.floor(this.seconds)
  //   console.log(`In console: ${Math.floor(this.minutes)} : ${Math.floor(this.seconds)}`);
  //   return this.minutes + ":" + this.seconds;
  // }

  submit() {

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
