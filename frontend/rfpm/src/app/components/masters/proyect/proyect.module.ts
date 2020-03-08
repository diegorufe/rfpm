import {
  BaseModule,
  InputButtonModule, I18nModule, InputTextModule, ButtonModule, CardModule, PageModule, TableModule, ToolBarRedModule, ToolBarBrowserModule
} from 'rfnglib';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProyectComponent } from './proyect.component';
import { ProyectService } from 'src/app/services/masters/proyect.service';
import { AppService } from 'src/app/app.service';

@NgModule({
  declarations: [ProyectComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    CardModule,
    PageModule,
    TableModule,
    ToolBarRedModule,
    ToolBarBrowserModule,
    InputButtonModule,
    I18nModule,
    InputTextModule
  ],
  providers: [ProyectService, AppService],
  bootstrap: [ProyectComponent],
  exports: [
    ProyectComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ProyectModule extends BaseModule {
}
