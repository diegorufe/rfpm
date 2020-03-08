import { Component, Inject } from '@angular/core';
import { BaseComponent, RfngService, CommonsUtils } from 'rfnglib';
import { UserService } from 'src/app/services/security/user.service';
import { AppService } from 'src/app/app.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'rfpm-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserProfileComponent extends BaseComponent {

  userService: UserService;
  appService: AppService;
  password: string;


  constructor(rfngService: RfngService, @Inject(UserService) userService, @Inject(AppService) appService) {
    super(rfngService);
    this.userService = userService;
    this.appService = appService;
    this.password = null;
  }

  async actionSave(form: FormGroup) {
    this.rfngService.showWaitStatus(this.tab);
    if (CommonsUtils.isNotNull(form.invalid) && form.invalid === true) {
      this.rfngService.hideWaitStatus();
      this.showFormValidationErrors(form);
    } else {
      let valid: boolean = true;
      try {
        let data = { userId: this.appService.getUserId(), password: this.password };
        let response: any = await this.userService.editUserProfile(data);

        if (CommonsUtils.isNotNull(response) && response.status === 200) {
          valid = true;
        } else {
          valid = false;
        }

        this.rfngService.hideWaitStatus(this.tab);

      } catch (ex) {
        valid = false;
      }
      if (valid) {
        this.addMessageSucces(this.i18n('rfpm.userProfile.save.success'));
      } else {
        this.addMessageError(this.i18n('rfpm.userProfile.save.error'));
      }
      this.rfngService.hideWaitStatus();
      this.closeModal();
    }
  }

}
