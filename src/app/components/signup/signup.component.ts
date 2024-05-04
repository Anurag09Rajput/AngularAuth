import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private router:Router){

  }
  OnSubmitSignupForm(signupForm:NgForm) {
    console.log(signupForm.value);
    this.router.navigate(['/login']);
  }

  ClearForm(signupForm:NgForm){}
}
