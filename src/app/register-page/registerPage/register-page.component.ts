import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { DataService } from '../../data.service';
import { User } from '../../login-page/auth/user.model';
import { Router } from '@angular/router';


const passwordMatchValidator = (control: AbstractControl): { [key: string]: boolean } | null => {
const password = control.get('password');
const confirmPassword = control.get('confirmPassword');

if (!password || !confirmPassword) {
  return null;
}

return password.value === confirmPassword.value ? null : { 'passwordMismatch': true };
};




@Component({
selector: 'app-registerPage',
templateUrl: './register-page.component.html',
styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

registrationForm: FormGroup = new FormGroup({});
registrationSuccess: boolean = false;
constructor(private fb: FormBuilder, private dataService : DataService,private router : Router) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
          }, { validators: passwordMatchValidator });
}
onSubmit() {
  if (this.registrationForm.valid) {
    const user: User = {
      name: this.registrationForm.get('name')!.value,
      surname: this.registrationForm.get('name')!.value,
      password: this.registrationForm.get('password')!.value,
      email: this.registrationForm.get('email')!.value,
      role: 2,
    };

    console.log(user);

    this.dataService.addUser(user).subscribe(
      (response) => {
        // Handle successful user creation response here
        console.log('User added successfully:', response);
        this.registrationSuccess = true;
        this.registrationForm.reset();
      },
      (error) => {
        // Handle error response here
        console.error('Error adding user:', error);
        this.registrationSuccess = false;
      }
    );
  } else {
    this.registrationSuccess = false;
  }
}
backToLogin() {
  // Navigate back to the login page
  this.router.navigate(['/']);
}
}
