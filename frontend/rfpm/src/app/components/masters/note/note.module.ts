import {
  BaseModule,
  InputButtonModule, I18nModule, InputTextModule, InputTextAreaModule,
  ButtonModule, CardModule, PageModule, TableModule, ToolBarRedModule, ToolBarBrowserModule
} from 'rfnglib';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteComponent } from './note.component';
import { NoteService } from 'src/app/services/masters/note.service';
import { ProyectService } from 'src/app/services/masters/proyect.service';
import { TagService } from 'src/app/services/masters/tag.service';

@NgModule({
  declarations: [NoteComponent],
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
  providers: [NoteService, ProyectService, TagService],
  bootstrap: [NoteComponent],
  exports: [
    NoteComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class NoteModule extends BaseModule {
}
