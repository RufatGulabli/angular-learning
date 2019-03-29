import { AbstractControl, ValidatorFn } from "@angular/forms";

//to pass only 1 pattern
export function usernameValidator(pattern: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const flag = pattern.test(control.value);
    return flag ? { forbiddenName: { value: control.value } } : null;
  };
}

//to pass array of patterns
export function usernameValidatorArray(pattern: RegExp[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    for (const item of pattern) {
      const flag = item.test(control.value);
      if (flag) return { forbiddenName: { value: control.value } };
    }
    return null;
  };
}

export function passwordValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  const password = control.get("password");
  const passwordConfirm = control.get("confirmPassword");
  if (password.pristine || passwordConfirm.pristine) return null;
  return password && passwordConfirm && password.value !== passwordConfirm.value
    ? { misMatch: true }
    : null;
}
