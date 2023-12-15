// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviseListComponent } from './devise-list/devise-list.component';
import { AddDeviseComponent } from './add-devise/add-devise.component';
import { EditDeviseComponent } from './edit-devise/edit-devise.component';
import { DeviseDetailsComponent } from './devise-details/devise-details.component';
import { ConvertDeviseComponent } from './convertir-montant/convertir-montant.component';


const routes: Routes = [
  { path: 'devises', component: DeviseListComponent },
  { path: 'addDevise', component: AddDeviseComponent },
  { path: 'edit/:id', component: EditDeviseComponent },
  { path: 'deviseDetails/:id', component: DeviseDetailsComponent }, 
  { path: '', redirectTo: '/devises', pathMatch: 'full' },
  { path: 'convertirMontant', component: ConvertDeviseComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
