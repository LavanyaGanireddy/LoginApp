import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StartComponent>) {
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
