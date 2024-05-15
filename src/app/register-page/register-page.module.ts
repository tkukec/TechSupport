import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { RegisterPageRoutingModule } from './register-page-routing.module';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './registerPage/register-page.component';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterPageRoutingModule
  ]
})
export class RegisterModule { }
