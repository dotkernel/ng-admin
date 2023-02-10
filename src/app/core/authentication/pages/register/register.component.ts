import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {MustMatch} from '../../helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: UntypedFormGroup;
  loading = false;
  submitted = false;
  hide = true;
  hideConfirm = true;

  constructor(public authService: AuthService,
              private formBuilder: UntypedFormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      identity: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'passwordConfirm')
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    const formData = new FormData();
    const formValue = this.form.value;
    Object.keys(formValue).forEach((key) => { formData.append(key, formValue[key]); });
    this.authService.register(formData)
      .pipe(first())
      .subscribe(
        data => {
          this.toastr.success('Registration successful');
          this.router.navigate(['../login'], { relativeTo: this.route });
        },
        err => {
          this.toastr.error(err);
          this.loading = false;
        });
  }
}
