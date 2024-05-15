import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './registerPage/register-page.component';

const routes: Routes = [
  { path: '', component: RegisterPageComponent } // Default redirect to about page
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterPageRoutingModule { }
