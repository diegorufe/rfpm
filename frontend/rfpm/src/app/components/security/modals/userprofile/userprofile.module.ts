import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule, I18nModule, TooltipModule, InputPasswordModule } from 'rfnglib';
import { UserProfileComponent } from './userprofile.component';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/security/user.service';
import { AppService } from 'src/app/app.service';

@NgModule({
  declarations: [
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    I18nModule,
    TooltipModule,
    InputPasswordModule
  ],
  providers: [UserService, AppService],
  exports: [
    UserProfileComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserProfileModule extends BaseModule {
}
