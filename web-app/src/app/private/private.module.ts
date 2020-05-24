import { NgModule } from '@angular/core';

import { AdminComponent } from './admin/admin.component';
import { PrivateRoutingModule } from './private-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '@api/_helpers/jwt.interceptor';
import { ErrorInterceptor } from '@api/_helpers/error.interceptor';
import { LegionModule } from './legion/legion.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    LegionModule,
    PrivateRoutingModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: []
})
export class PrivateModule { }
