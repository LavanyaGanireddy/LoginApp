import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http: HttpClient, private router: Router, private alertService: AlertService) { }

  public node(){
    
  }
  public mongo(){

  }
  public angular(){

  }
}
