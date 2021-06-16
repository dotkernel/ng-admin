import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html',
  styleUrls: ['./activate-user.component.css']
})
export class ActivateUserComponent implements OnInit {
  hash;
  error = true;
  loading = false;

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private tostr: ToastrService) {
    this.hash = this.route.snapshot.paramMap.get('hash');
  }

  ngOnInit(): void {
    console.log(this.hash);
    this.activateUser(this.hash);
  }

  private activateUser(hash) {
    this.loading = true;
    this.authService.activateUser(hash).subscribe(res => {
      this.tostr.success('User activated with success!');
      this.error = false;
      this.loading = false;
    },
    error => {
      this.tostr.error(error, 'Error to activate user.');
      this.loading = false;
    });
  }
}
