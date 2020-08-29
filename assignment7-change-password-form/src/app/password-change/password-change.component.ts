import { PasswordValidators } from './password.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent {
  form = new FormGroup({
    oldPassword: new FormControl('', [Validators.required, Validators.minLength(3)], PasswordValidators.isCurrentPassword),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(3)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(3)])
  }, PasswordValidators.arePasswordMatch);

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  onChangePasswordClick() {

  }
}
