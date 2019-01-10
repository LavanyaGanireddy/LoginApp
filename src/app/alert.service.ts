import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  // config: MatSnackBarConfig = {
  //   duration: 2000,
  //   horizontalPosition: 'center',
  //   verticalPosition: 'top',
  //   panelClass:['green-snackbar']
  // }
  constructor(private router: Router, public snackBar:MatSnackBar) {
  }

  success(msg) {
    // this.config['panelClass'] = ['alert', 'success'];
    this.snackBar.open(msg, '', {
      duration: 2000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
    panelClass:['green-snackbar']
    });
  }

  warn(msg) {
    // this.config['panelClass'] = ['alert', 'warn'];
    this.snackBar.open(msg, '', {
      duration: 2000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
    panelClass:['red-snackbar']
    });
  }
}
