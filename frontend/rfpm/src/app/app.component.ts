import { Component, ChangeDetectorRef, ElementRef, Inject } from '@angular/core';
import { AppService } from './app.service';
import { RfngService, CommonsUtils, BaseComponent, ConstantsModals } from 'rfnglib';


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent {

  cd: ChangeDetectorRef;
  el: ElementRef;
  appService: AppService;

  constructor(@Inject(RfngService) rfngService, appService: AppService, cd: ChangeDetectorRef, el: ElementRef) {
    super(rfngService);
    this.cd = cd;
    this.el = el;
    this.appService = appService;
  }

  /**
   * Function execute when login if succes
   * @param rfNgService
   * @param data
   * @param params
   */
  functionPostLogin(rfNgService: RfngService, data, params) {
    if (CommonsUtils.isNotNull(data)) {
      rfNgService.addDataInSession(data.data);
    }
  }

  /**
   * Event produce when click user top
   */
  clickUser() {
    const params = {};
    params[ConstantsModals.KEY_MODAL_COMPONENT_PARAM_STYLE_CLASS_MODAL] = 'UserProfileModal';
    this.rfngService.addModal(this.i18n('rfpm.userProfile.title'), 'UserProfileComponent', 'Security', false, params);
  }

}
