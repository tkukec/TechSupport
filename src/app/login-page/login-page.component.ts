import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {

  errorMessage : string | null = null;
  signinForm: FormGroup = new FormGroup({});
  constructor(private auth : AuthService,private router: Router) { }

  ngOnInit() {

    this.signinForm = new FormGroup({
      'email' : new FormControl(null, [Validators.required]),
      'password' : new FormControl(null, [Validators.required])
    });

   this.auth.errorEmitter
        .subscribe((error : string) => {
          this.errorMessage = error;
        });

  

  }
  onLogin(){

    this.auth.login(this.signinForm.value);
  }
  forgotPassword() {
    // Here you would navigate to the forgot password page or display a modal
    console.log('Forgot Password');
  }

  register() {
    // Here you would navigate to the registration page
    this.router.navigate(['/register']);
  }
}
