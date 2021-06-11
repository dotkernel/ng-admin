import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgo-pwd',
  templateUrl: './forgo-pwd.component.html',
  styleUrls: ['./forgo-pwd.component.css']
})
export class ForgoPwdComponent implements OnInit {

  constructor(public service: AuthService) { }

  ngOnInit(): void {
  }
}
