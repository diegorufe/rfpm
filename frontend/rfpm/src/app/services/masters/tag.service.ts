import { RfngService, BaseService } from 'rfnglib';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * User service for load data from tag
 */
@Injectable({
  providedIn: 'root',
})
export class TagService extends BaseService {

  constructor(@Inject(RfngService) rfngService, httpClient: HttpClient) {
    super(rfngService, httpClient, '/secure/tag');
  }

}
