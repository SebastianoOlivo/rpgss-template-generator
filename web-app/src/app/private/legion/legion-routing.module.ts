import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegionComponent } from './legion.component';
import { LegionDetailComponent } from './legion-detail/legion-detail.component';



const routes: Routes = [
  {path: '', component: LegionComponent},
  {path: 'new', component: LegionDetailComponent},
  {path: ':id', component: LegionDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(
    routes
  )],
  exports: [RouterModule]
})
export class LegionRoutingModule { }
