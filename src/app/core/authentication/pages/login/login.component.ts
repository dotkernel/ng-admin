import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UntypedFormBuilder, FormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: UntypedFormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  hide = true;

  constructor(
    public authService: AuthService,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    // redirect to home if already logged in
    if (this.authService.tokenData) {
      this.router.navigate(['/main/home']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      terms: [true, Validators.requiredTrue]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService.login(this.f.email.value, this.f.password.value)
      .subscribe(
        () => {
          this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/main/home';
          this.router.navigate([this.returnUrl]);
        },
        (err) => {
          this.toastr.error(err, 'Error to sign in!');
          this.loading = false;
        });
  }
}
