import BaseCrudService from "../../../rfvue/service/basecrudservice/BaseCrudService";
import RFPMConstantsService from "../../constants/RFPMConstantsService";
/**
 * Services for user
 */
export default class UserService extends BaseCrudService {
  constructor() {
    super(
      RFPMConstantsService.BASE_HOST,
      RFPMConstantsService.PATH_SERVICE_USER
    );
    this.pathEditProfile = "/editUserProfile";
  }

  /**
   * Method for edit user profile
   * @param {*} dataUserProfile
   */
  editUserProfile(dataUserProfile) {
    const body = { data: dataUserProfile };
    return this.sendFetchRequest(
      this.getRealPathHost() + this.pathEditProfile,
      JSON.stringify(body),
      null
    );
  }
}
