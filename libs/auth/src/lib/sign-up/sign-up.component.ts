import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'web-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {

  signupForm = new FormGroup({})

}
