import {
  BaseModule, I18nModule, TooltipModule,
  ButtonModule, CardModule, PageModule, TableModule, ToolBarBrowserModule
} from 'rfnglib';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoleService } from 'src/app/services/security/userrole.service';
import { UserRoleComponent } from './userrole.component';

@NgModule({
  declarations: [UserRoleComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    CardModule,
    PageModule,
    TableModule,
    ToolBarBrowserModule,
    I18nModule,
    TooltipModule
  ],
  providers: [UserRoleService],
  bootstrap: [UserRoleComponent],
  exports: [
    UserRoleComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class UserRoleModule extends BaseModule {
}
