import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '../../node_modules/@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GetComponent } from './get/get.component';
import { FirstComponent } from './first/first.component';
import { ChangeComponent } from './change/change.component';
import { PasswordComponent } from './password/password.component';
import { StartComponent } from './start/start.component';
import { ExamComponent } from './exam/exam.component';
import { DeleteComponent } from './delete/delete.component';

import { AlertService } from './alert.service';
import { DetailService } from './detail.service';

import { AuthGuard } from './auth.guard';

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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GetComponent,
    FirstComponent,
    ChangeComponent,
    PasswordComponent,
    StartComponent,
    ExamComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatRadioModule,
    MatExpansionModule,
    MatMenuModule,
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
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent,
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
        component: FirstComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'change',
        component: ChangeComponent
      },
      {
        path: 'exam',
        component: ExamComponent
      }
    ])
  ],
  entryComponents: [
    RegisterComponent,
    LoginComponent,
    PasswordComponent,
    DeleteComponent,
    StartComponent
  ],
  providers: [AlertService, DetailService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }