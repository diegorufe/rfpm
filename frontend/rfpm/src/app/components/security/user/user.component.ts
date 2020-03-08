import { Component, Inject } from '@angular/core';
import { RfngService, BaseRedControllerComponent, Column } from 'rfnglib';
import { UserService } from 'src/app/services/security/user.service';


@Component({
  selector: 'rfpm-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends BaseRedControllerComponent {


  constructor(rfNgService: RfngService, @Inject(UserService) service) {
    super(rfNgService, service);
  }

  /**
   * Load columns show in browser
   */
  async loadColumns() {
    this.columns.push(new Column('nick', 'Nick', 300, true));
  }
}
