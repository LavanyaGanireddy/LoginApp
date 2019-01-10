import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '../../node_modules/@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { GetComponent } from './get/get.component';
import { FirstComponent } from './first/first.component';
import { ChangeComponent } from './change/change.component';
import { PasswordComponent } from './password/password.component';

import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatRadioModule,
  MatGridListModule,
  MatExpansionModule,
  MatListModule,
  MatTableModule,
  MatCardModule,
  MatDialogModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectModule
} from '@angular/material';

import { AlertService } from './alert.service';
import { DetailService } from './detail.service';
import { ConfirmService } from './confirm.service';
import { StartComponent } from './start/start.component';
import { ExamComponent } from './exam/exam.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GetComponent,
    FirstComponent,
    ChangeComponent,
    PasswordComponent,
    ConfirmComponent,
    StartComponent,
    ExamComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    NgbModule,
    MatRadioModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: '',
        component: GetComponent
      },
      {
        path: 'first',
        component: FirstComponent
      },
      {
        path: 'change',
        component: ChangeComponent
      },
      {
        path: 'exam',
        pathMatch: 'full',
        component: ExamComponent
      }
    ])
  ],
  entryComponents: [
    RegisterComponent,
    LoginComponent,
    PasswordComponent,
    ConfirmComponent,
    StartComponent
  ],
  providers: [AlertService, DetailService, ConfirmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
