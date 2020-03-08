import { RfngService, BaseService } from 'rfnglib';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * User service for load data from user role
 */
@Injectable()
export class UserRoleService extends BaseService {

  constructor(@Inject(RfngService) rfngService, httpClient: HttpClient) {
    super(rfngService, httpClient, '/secure/userrole');
  }

}
