import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component'
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';

import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import { RowComponent } from '../../common/row/row.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { ForgoPwdComponent } from './pages/forgo-pwd/forgo-pwd.component';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {CustomErrorStateMatcher} from './helpers';
import { ActivateUserComponent } from './pages/activate-user/activate-user.component';

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    RegisterComponent,
    RowComponent,
    ForgoPwdComponent,
    AuthLayoutComponent,
    ActivateUserComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: CustomErrorStateMatcher}
  ],
})
export class AuthenticationModule { }
