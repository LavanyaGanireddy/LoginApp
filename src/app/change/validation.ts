import { AbstractControl } from '@angular/forms';
export class Validation {

    static MatchPassword(AC: AbstractControl) {
        let npassword = AC.get('npassword').value;
        let cpassword = AC.get('cpassword').value;
        if (npassword != cpassword) {
            AC.get('cpassword').setErrors({ MatchPassword: true })
        } else {
            return null
        }
    }
}