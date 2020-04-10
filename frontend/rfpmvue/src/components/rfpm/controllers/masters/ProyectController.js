import BaseRedController from "../../../rfvue/beans/BaseRedController";
import Column from "../../../rfvue/beans/Column";
import RFPMConstantsService from "../../constants/RFPMConstantsService";

export default class ProyectController extends BaseRedController {
  constructor(baseViewController) {
    super(baseViewController);
  }

  getServiceName() {
    return RFPMConstantsService.SERVICE_PROYECT;
  }

  loadColumns() {
    this.columns.push(
      new Column("code", this.i18n("rfpm.columns.proyects.code"), 150, true)
    );
    this.columns.push(
      new Column(
        "description",
        this.i18n("rfpm.columns.proyects.description"),
        400,
        true
      )
    );
  }
}
