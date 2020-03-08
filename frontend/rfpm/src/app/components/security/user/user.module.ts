import {
  BaseModule, InputButtonModule, I18nModule, InputTextModule, InputPasswordModule, ButtonModule,
  CardModule, PageModule, TableModule, ToolBarRedModule, ToolBarBrowserModule
} from 'rfnglib';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { UserService } from 'src/app/services/security/user.service';
import { UserRoleModule } from '../userrole/userrole.module';

@NgModule({
  declarations: [UserComponent],
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
    InputPasswordModule,
    UserRoleModule
  ],
  providers: [UserService],
  bootstrap: [UserComponent],
  exports: [
    UserComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class UserModule extends BaseModule {
}
