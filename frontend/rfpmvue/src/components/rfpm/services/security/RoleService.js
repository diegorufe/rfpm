import BaseCrudService from "../../../rfvue/service/basecrudservice/BaseCrudService";
import RFPMConstantsService from "../../constants/RFPMConstantsService";
/**
 * Services for roles
 */
export default class RoleService extends BaseCrudService {
  constructor() {
    super(RFPMConstantsService.BASE_HOST, RFPMConstantsService.PATH_SERVICE_ROLE);
  }
}
