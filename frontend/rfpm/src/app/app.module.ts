import { RfngService, RfnglibModule, SecurityInterceptor, BaseModule, GlobalErrorInterceptor } from 'rfnglib';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Inject, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component.js';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service.js';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { configApp } from './components/config/config.app';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RfnglibModule,
  ],
  providers: [AppService,
    // Http interceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    },
    // Error interceptor
    {
      provide: ErrorHandler,
      useClass: GlobalErrorInterceptor
    }

  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule extends BaseModule {

  constructor(@Inject(RfngService) rfngService) {
    super();
    // Load config for application
    configApp(rfngService);
  }

}
