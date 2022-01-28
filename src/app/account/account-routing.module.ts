import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {
    // http://localhost:4200/account
    path:'', component: AccountComponent, 
    children: [
       // http://localhost:4200/account/login
      { path:'login', component: LoginComponent },
        // http://localhost:4200/account/register
      { path:'register', component: RegisterComponent }
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
