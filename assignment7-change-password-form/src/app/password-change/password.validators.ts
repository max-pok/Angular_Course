import { ValidationErrors, AbstractControl } from '@angular/forms';

export class PasswordValidators {
  static isCurrentPassword(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'mypassword') resolve(null);
        else resolve({ incorrect: true });
      }, 2000);
    });
  }

  static arePasswordMatch(control: AbstractControl): ValidationErrors | null {    
    if (control.get('newPassword').value === control.get('confirmPassword').value) return null;
    return { notMatch: true };
  }
}