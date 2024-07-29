import { RouterModule, Routes} from '@angular/router';  // Routes türünü içe aktarın
import { LoginComponent } from '../login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../auth/authguard.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { RegisterComponent } from '../register/register/register.component';



export const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent }, 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
