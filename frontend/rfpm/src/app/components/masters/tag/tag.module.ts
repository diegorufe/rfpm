import {
  BaseModule,
  InputButtonModule, I18nModule, InputTextModule, InputColorModule, ButtonModule, CardModule, PageModule,
  TableModule, ToolBarRedModule, ToolBarBrowserModule
} from 'rfnglib';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagComponent } from './tag.component';
import { TagService } from 'src/app/services/masters/tag.service';

@NgModule({
  declarations: [TagComponent],
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
    InputColorModule
  ],
  providers: [TagService],
  bootstrap: [TagComponent],
  exports: [
    TagComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class TagModule extends BaseModule {
}
