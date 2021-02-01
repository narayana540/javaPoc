import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CommonModule } from "@angular/common";


const routes: Routes = [
  {path:'',component:CreateComponent},
  // {path:'list',component:ListComponent},
  // {path:'edit/:id',component:CreateComponent},
  // {path:'',redirectTo:'/list',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
