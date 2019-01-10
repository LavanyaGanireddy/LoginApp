import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, timer, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  // public sub: Observable<string>;
  public technology: string;
  // route;
  ngOnInit() {
    // this.startTimer();
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        
      }),
    });
    this.technology = this.route.snapshot.queryParamMap.get('technology');
    // .map((params) => params.get('a'));
    // this.sub.subscribe((val) => this.technology = val));
    // console.log(this.technology);
    this.http.get('http://172.17.15.68:3000/users/getQuestions?technology=' + this.technology)
      .subscribe(response => {
        this.response1=response.questions;
        console.log(this.technology);
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
  // private startTimer() {
  //   let timer = Observable.timer(1, 1000);
  //   this.sub = timer.subscribe(
  //     t => {
  //       this.ticks = t;

  //       this.secondsDisplay = this.getSeconds(this.ticks);
  //       this.minutesDisplay = this.getMinutes(this.ticks);
  //       this.hoursDisplay = this.getHours(this.ticks);
  //     }
  //   );
  // }
  private getSeconds(ticks: number) {
    return this.pad(ticks % 60);
  }

  private getMinutes(ticks: number) {
    return this.pad((Math.floor(ticks / 60)) % 60);
  }

  private getHours(ticks: number) {
    return this.pad(Math.floor((ticks / 60) / 60));
  }

  private pad(digit: any) {
    return digit <= 9 ? '0' + digit : digit;
  }

  cancel(){
    this.router.navigateByUrl('/first');
  }
  reset(){
    this.signupForm.reset();
  }
}
