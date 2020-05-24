import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LegionComponent } from './legion/legion.component';


const routes: Routes = [
    { path: 'admin', component: AdminComponent},
    { path: 'admin/camp', 
    loadChildren: './legion/legion.module#LegionModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(
    routes
  )],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
