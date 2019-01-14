import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, timer, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
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

  constructor(private http: HttpClient, private examService: ExamService, private router: Router, private route: ActivatedRoute, private alertService: AlertService, private detailService: DetailService) { }

  public technology1: string;

  ngOnInit() {

    this.technology1 = this.route.snapshot.queryParamMap.get('technology');

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
        },
        err => {
          console.log('Error occured');
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
