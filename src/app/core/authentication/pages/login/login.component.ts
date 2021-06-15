import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  terms = new FormControl(true, [Validators.requiredTrue]);

  constructor(public service: AuthService) { }

  ngOnInit(): void {
  }
}
