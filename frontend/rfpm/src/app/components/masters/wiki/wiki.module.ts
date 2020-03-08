import {
  BaseModule,
  InputButtonModule, I18nModule, InputTextModule, InputTextAreaModule, ButtonModule,
  CardModule, PageModule, TableModule, ToolBarRedModule, ToolBarBrowserModule
} from 'rfnglib';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProyectService } from 'src/app/services/masters/proyect.service';
import { TagService } from 'src/app/services/masters/tag.service';
import { WikiService } from 'src/app/services/masters/wiki.service';
import { WikiComponent } from './wiki.component';

@NgModule({
  declarations: [WikiComponent],
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
    InputTextModule,
    InputTextAreaModule,
    InputButtonModule
  ],
  providers: [WikiService, ProyectService, TagService],
  bootstrap: [WikiComponent],
  exports: [
    WikiComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class WikiModule extends BaseModule {
}
