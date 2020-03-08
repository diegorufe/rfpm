import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RfngService, BaseRedControllerComponent, Fetch, Filter, ConstantsModals, CommonsUtils, Column } from 'rfnglib';
import { UserRoleService } from 'src/app/services/security/userrole.service';


@Component({
  selector: 'rfpm-userrole',
  templateUrl: './userrole.component.html',
  styleUrls: ['./userrole.component.css']
})
export class UserRoleComponent extends BaseRedControllerComponent implements OnChanges {

  @Input()
  userId: number;


  constructor(rfNgService: RfngService, @Inject(UserRoleService) service) {
    super(rfNgService, service);
  }

  ngOnChanges(changes: SimpleChanges) {
    // On change load datable for user
    this.loadDataTable();
  }

  /**
   * Method to set default fetchs for find data
   */
  setDefaulFetchs() {
    this.defaultFetchs = [];
    this.defaultFetchs.push(new Fetch('Role', 'INNER'));
  }

  setDefaultFilters() {
    this.defaultFilters = [];
    this.defaultFilters.push(new Filter('userId', null, this.userId, "and", null, null));
  }

  /**
   * Load columns show in browser
   */
  async loadColumns() {
    this.columns.push(new Column('Role_name', this.i18n('rfng.name'), 300, true));
  }

  /**
   * Method prepare add role
   */
  prepareAddRole(): void {

    const params = {};
    // Add function on select table
    params[ConstantsModals.KEY_MODAL_COMPONENT_PARAM_BEAN_SELECT_TABLE] = this;
    params[ConstantsModals.KEY_MODAL_COMPONENT_PARAM_FUNCTION_SELECT_TABLE] = 'addRole';
    this.rfngService.addModal(this.i18n('rfpm.role.select'), 'RoleComponent', 'Security', CommonsUtils.isNotNull(this.tab), params);
  }

  /**
   * Method for add role
   * @param entity
   */
  async addRole(entity) {
    this.rfngService.hideToolTips();
    try {
      if (CommonsUtils.isNotNull(entity)) {
        let data = { userId: this.userId, roleId: entity.id };
        let response = await this.service.add(data);
        if (CommonsUtils.isNotNull(response) && response.status === 200) {
          this.addMessageSucces(this.i18n('rfng.red.save.success'));
          this.loadDataTable();
        }

      }
    } catch (ex) {

    }
  }
}
