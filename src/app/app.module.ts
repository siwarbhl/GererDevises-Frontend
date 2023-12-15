import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviseListComponent } from './devise-list/devise-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddDeviseComponent } from './add-devise/add-devise.component';
import { EditDeviseComponent } from './edit-devise/edit-devise.component';
import { DeviseDetailsComponent } from './devise-details/devise-details.component';
import { FormsModule } from '@angular/forms';
import { ConvertDeviseComponent } from './convertir-montant/convertir-montant.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviseListComponent,
    AddDeviseComponent,
    EditDeviseComponent,
    DeviseDetailsComponent,
    ConvertDeviseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
