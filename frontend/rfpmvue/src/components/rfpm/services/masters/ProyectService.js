import BaseCrudService from "../../../rfvue/service/basecrudservice/BaseCrudService";
import RFPMConstantsService from "../../constants/RFPMConstantsService";
/**
 * Services for proyects
 */
export default class ProyectService extends BaseCrudService {
  constructor() {
    super(
      RFPMConstantsService.BASE_HOST,
      RFPMConstantsService.PATH_SERVICE_PROYECT
    );
  }
}
