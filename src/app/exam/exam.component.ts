import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

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
  length;
  seconds = 3;
  tech;
  qid;
  answer;
  token;
  token1;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private detailService: DetailService) { }

  public technology1: string;

  ngOnInit() {

    this.technology1 = this.route.snapshot.queryParamMap.get('technology');

    this.token1 = localStorage.getItem("token")
    console.log('ExamComponent', this.token1);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.token1
      })
    };
    this.http.get('http://172.17.15.68:3000/users/getQuestions?technologyCode=' + this.technology1, httpOptions)
      .subscribe(response => {
        this.response1 = response.questions;
        this.length = response.questions.length;
        this.seconds = this.length * 60000;
        this.tech = response.technology;
        this.qid = response.qid;
        console.log('ExamComponent', this.technology1);
        console.log('ExamComponent', this.length);
        console.log('ExamComponent', this.tech);
        console.log('ExamComponent', response);
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
    this.token1 = localStorage.getItem("token")
    console.log('ExamComponent', this.token1);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.token1
      })
    };
    this.http.post('http://172.17.15.68:3000/users/addTransaction', {
      email: this.detailService.email,
      userName: this.detailService.userName,
      technology: this.tech,
      technologyCode: this.technology1,
      questions: [{
        qid: this.qid,
        answer: this.signupForm.get('option').value
      }]
    }, httpOptions)
      .subscribe(
        res => {
          console.log('ExamComponent', res);
        },
        err => {
          console.log('ExamComponent...Error occured');
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
