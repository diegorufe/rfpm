import BaseRedController from "../../../rfvue/beans/BaseRedController";
import Column from "../../../rfvue/beans/Column";
import RFPMConstantsService from "../../constants/RFPMConstantsService";
/**
 * Controller for roles
 */
export default class RoleController extends BaseRedController {
  constructor(baseViewController) {
    super(baseViewController);
  }

  getServiceName() {
    return RFPMConstantsService.SERVICE_ROLE;
  }

  loadColumns() {
    this.columns.push(new Column("name", this.i18n("rfvue.name"), 500, true));
  }
}
