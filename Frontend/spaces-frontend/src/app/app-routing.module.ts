import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './login-module/signup/signup.component';
import { LoginComponent } from './login-module/login/login.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  //{path: '', component : AppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
