import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@public/login/login.component';
import { PresentationForm } from '@public/presentation-form/presentation-form.component';


const routes: Routes = [
    { path: '', component: PresentationForm },
    { path: 'login', component: LoginComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
