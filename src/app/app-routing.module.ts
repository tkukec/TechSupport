import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/registerPage/register-page.component';
import { LoginPageModule } from './login-page/login-page.module';
import { RegisterModule } from './register-page/register-page.module';
import { MainPageModule } from './main-page/main-page.module';
import { AuthenticationGuard } from './auth.guard';
import { DetailsPageModule } from './details-page/details-page.module';


const routes: Routes = [
  {path:'',loadChildren: () => LoginPageModule},
  {path:'register',loadChildren: () => RegisterModule},
  {path:'home',loadChildren: () => MainPageModule/*, canActivate: [AuthenticationGuard]*/},
  {path:'details/:id',loadChildren: () => DetailsPageModule/*, canActivate: [AuthenticationGuard]*/},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
