import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditionComponent } from './components/edition/edition.component';
import { Header } from './components/header/header.component';
import { Previewer } from './components/previewer/previewer.component';
import { FormEdition } from './components/form-edition/form-edition.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PresentationForm } from './components/presentation-form/presentation-form.component';
import { EditionDataService } from './shared/edition-data.service';
import { FormatPleinText } from './pipes/format-plain-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EditionComponent,
    Header,
    Previewer,
    FormEdition,
    PresentationForm,
    FormatPleinText,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [EditionDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
