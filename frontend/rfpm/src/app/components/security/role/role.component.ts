import { Component, Inject } from '@angular/core';
import { RfngService, BaseRedControllerComponent, Column } from 'rfnglib';
import { RoleService } from 'src/app/services/security/role.service';


@Component({
  selector: 'rfpm-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent extends BaseRedControllerComponent {


  constructor(rfNgService: RfngService, @Inject(RoleService) service) {
    super(rfNgService, service);
  }

  /**
   * Load columns show in browser
   */
  async loadColumns() {
    this.columns.push(new Column('name', this.i18n('rfng.name'), 300, true));
  }
}
