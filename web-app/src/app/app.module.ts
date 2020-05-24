import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrivateModule } from '@private/private.module';
import { PublicModule } from '@public/public.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEdition } from './components/form-edition/form-edition.component';
import { Header } from './components/header/header.component';
import { EditionDataService } from './shared/edition-data.service';



@NgModule({
  declarations: [
    AppComponent,
    Header,
    FormEdition,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PublicModule,
    PrivateModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,

  ],
  providers: [EditionDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
