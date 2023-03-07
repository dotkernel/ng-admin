import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MustMatch} from "../../../authentication/helpers";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {
  form: FormGroup;
  loading = true;
  submitted = false;
  hide = true;
  hideConfirm = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder,) {
  }

  ngOnInit(): void {
    this.loadData();
    this.createForm();
  }

  private loadData(): void {

  }


  private createForm(): void {
    this.form = this.formBuilder.group({
      identity: [null, [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: [null, [Validators.required]],
      password: ['', [Validators.minLength(6)]],
      passwordConfirm: ['']
    }, {
      validator: MustMatch('password', 'passwordConfirm')
    });
    this.fillForm();
  }

  private fillForm(): void {
    this.form.patchValue({
      identity: this.data.account.identity,
      firstname: this.data.account.firstName,
      lastname: this.data.account.lastName,
    });
    this.loading = false;
  }

  get f() { return this.form.controls; }

  public onSubmit() {

  }


}
