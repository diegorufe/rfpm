import { RfngService, BaseService } from 'rfnglib';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * User service for load data from users
 */
@Injectable()
export class UserService extends BaseService {

  constructor(@Inject(RfngService) rfngService, httpClient: HttpClient) {
    super(rfngService, httpClient, '/secure/user');
  }

  editUserProfile(base) {
    const body = { 'data': base };
    return this.httpClient.post(
      this.rfngService.baseHost + '' + this.path + '/editUserProfile', JSON.stringify(body), this.getHttpOptions()).toPromise();
  }

}
