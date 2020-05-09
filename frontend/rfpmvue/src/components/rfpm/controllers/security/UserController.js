import BaseRedController from "../../../rfvue/beans/BaseRedController";
import Column from "../../../rfvue/beans/Column";
import RFPMConstantsService from "../../constants/RFPMConstantsService";
/**
 * Controller for user
 */
export default class UserController extends BaseRedController {
  constructor(baseViewController) {
    super(baseViewController);
  }

  /**
   * Method for get user id
   */
  getUserId() {
    return this.element.id;
  }

  getServiceName() {
    return RFPMConstantsService.SERVICE_USER;
  }

  loadColumns() {
    this.columns.push(new Column("nick", "Nick", 300, true));
  }
}
