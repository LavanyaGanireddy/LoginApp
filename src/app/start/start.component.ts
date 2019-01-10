import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  counter$: Observable<number>;
  count = 60;
  constructor(public dialogRef: MatDialogRef<StartComponent>) {
    this.counter$ = timer(0, 1000).pipe(
      take(this.count),
      map(() => --this.count)
    );
  }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
  start() {
    this.dialogRef.close('start')
  }
}
