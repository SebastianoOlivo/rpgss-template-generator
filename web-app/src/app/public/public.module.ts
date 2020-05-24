import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PublicRoutingModule } from './public-routing.module';
import { PresentationForm } from './presentation-form/presentation-form.component';
import { Previewer } from '../components/previewer/previewer.component';
import { FormatPleinText } from '../pipes/format-plain-text.pipe';
import { HttpClientModule } from '@angular/common/http';
import { EditionDataService } from '../shared/edition-data.service';

@NgModule({
  declarations: [
    LoginComponent,
    Previewer,
    FormatPleinText,
    PresentationForm
  ],
  imports: [
    BrowserModule,
    PublicRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EditionDataService],
  bootstrap: []
})
export class PublicModule { }
