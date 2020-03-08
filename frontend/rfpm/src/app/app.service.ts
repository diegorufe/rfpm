import { Injectable, Inject } from '@angular/core';
import { RfngService, CommonsUtils } from 'rfnglib';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  rfngService: RfngService;

  constructor(@Inject(RfngService) rfngService) {
    this.rfngService = rfngService;
  }

  /**
   * Method to know is admin role
   */
  isAdmin(): boolean {
    let valid: boolean = false;
    try {
      const dataSession = this.rfngService.getDataInSession();
      if (CommonsUtils.isNotNull(dataSession)) {
        const roles = dataSession['roles'];
        if (CommonsUtils.arrayNotNull(roles)) {
          for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === 'ADMIN') {
              valid = true;
              break;
            }
          }
        }
      }
    } catch (ex) {

    }
    return valid;
  }

  /**
   * Method for get nick form user
   */
  getNickUser(): string {
    let nick = "";
    try {
      const dataSession = this.rfngService.getDataInSession();
      if (CommonsUtils.isNotNull(dataSession)) {
        nick = dataSession['nick'];
      }
    } catch (ex) {

    }
    return nick;
  }

  /**
   * Method for get user id
   */
  getUserId(): number {
    let userId = -999;
    try {
      const dataSession = this.rfngService.getDataInSession();
      if (CommonsUtils.isNotNull(dataSession)) {
        userId = dataSession['userId'];
      }
    } catch (ex) {

    }
    return userId;
  }


}
