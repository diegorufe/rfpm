import BaseCrudService from "../../../rfvue/service/basecrudservice/BaseCrudService";
import RFPMConstantsService from "../../constants/RFPMConstantsService";
/**
 * Services for Tag
 */
export default class TagService extends BaseCrudService {
  constructor() {
    super(
      RFPMConstantsService.BASE_HOST,
      RFPMConstantsService.PATH_SERVICE_TAG
    );
  }
}
