import BaseCrudService from "../../../rfvue/service/basecrudservice/BaseCrudService";
import RFPMConstantsService from "../../constants/RFPMConstantsService";
/**
 * Services for wiki
 */
export default class WikiService extends BaseCrudService {
  constructor() {
    super(
      RFPMConstantsService.BASE_HOST,
      RFPMConstantsService.PATH_SERVICE_WIKI
    );
  }
}
