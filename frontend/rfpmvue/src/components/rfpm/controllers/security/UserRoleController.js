import BaseRedController from "../../../rfvue/beans/BaseRedController";
import Column from "../../../rfvue/beans/Column";
import Filter from "../../../rfvue/beans/Filter";
import Fetch from "../../../rfvue/beans/Fetch";
import RFPMConstantsService from "../../constants/RFPMConstantsService";
import CommonsUtils from "../../../rfvue/utils/CommonsUtils";
import ConstantsModals from "../../../rfvue/constants/ConstantsModals";
/**
 * Controller for user role
 */
export default class UserRoleController extends BaseRedController {
  constructor(baseViewController) {
    super(baseViewController);
  }

  getServiceName() {
    return RFPMConstantsService.SERVICE_USER_ROLE;
  }

  /**
   * Method to set default fetchs for find data
   */
  setDefaulFetchs() {
    this.defaultFetchs = [];
    this.defaultFetchs.push(new Fetch("Role", "INNER"));
  }

  setDefaultFilters() {
    this.defaultFilters = [];
    this.defaultFilters.push(
      new Filter(
        "userId",
        null,
        this.baseViewController.userId,
        "and",
        null,
        null
      )
    );
  }

  /**
   * Method for reload for user
   */
  reloadUser() {
    this.setDefaultFilters();
    this.loadDataTable();
  }

  /**
   * Load columns show in browser
   */
  loadColumns() {
    this.columns.push(
      new Column("Role_name", this.i18n("rfvue.name"), 300, true)
    );
  }

  /**
   * Method prepare add role
   */
  prepareAddRole() {
    const params = {};
    // Add function on select table
    params[ConstantsModals.KEY_MODAL_COMPONENT_PARAM_BEAN_SELECT_TABLE] = this;
    params[ConstantsModals.KEY_MODAL_COMPONENT_PARAM_FUNCTION_SELECT_TABLE] =
      "addRole";

    this.baseViewController
      .getVueContext()
      .addModal(
        this.i18n("rfpm.role.select"),
        "Role",
        "Security",
        CommonsUtils.isNotNull(this.baseViewController.tab),
        params
      );
  }

  /**
   * Method for add role
   * @param entity
   */
  async addRole(entity) {
    this.baseViewController.hideToolTips();
    try {
      if (CommonsUtils.isNotNull(entity)) {
        let data = {
          userId: this.baseViewController.userId,
          roleId: entity.id,
        };
        let response = await this.service.add(data);

        if (this.isElectronApp() && CommonsUtils.isNotNull(response)) {
          response = JSON.parse(response);
        }

        if (
          CommonsUtils.isNotNull(response) &&
          response[this.isElectronApp() ? "statusProp" : "status"] === 200
        ) {
          this.addMessageSucces(this.i18n("rfvue.red.save.success"));
          this.loadDataTable();
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  }
}
