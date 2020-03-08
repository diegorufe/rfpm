import { BaseModule, I18nModule, ButtonModule, CardModule, PageModule, TableModule, ToolBarRedModule, ToolBarBrowserModule } from 'rfnglib';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoleComponent } from './role.component';
import { RoleService } from 'src/app/services/security/role.service';

@NgModule({
  declarations: [RoleComponent],
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
    I18nModule
  ],
  providers: [RoleService],
  bootstrap: [RoleComponent],
  exports: [
    RoleComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class RoleModule extends BaseModule {
}
