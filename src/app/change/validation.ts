import {AbstractControl} from '@angular/forms';
export class Validation {

    static MatchPassword(AC: AbstractControl) {
       let npassword = AC.get('npassword').value; // to get value in input tag
       let cpassword = AC.get('cpassword').value; // to get value in input tag
        if(npassword != cpassword) {
            //console.log('false');
            AC.get('cpassword').setErrors( {MatchPassword: true} )
        } else {
            //console.log('true');
            return null
        }
    }
}