import BaseCrudService from "../../../rfvue/service/basecrudservice/BaseCrudService";
import RFPMConstantsService from "../../constants/RFPMConstantsService";
/**
 * Services for notes
 */
export default class NoteService extends BaseCrudService {
  constructor() {
    super(
      RFPMConstantsService.BASE_HOST,
      RFPMConstantsService.PATH_SERVICE_NOTE
    );
  }
}
