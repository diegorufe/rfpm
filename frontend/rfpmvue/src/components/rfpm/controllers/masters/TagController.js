import BaseRedController from "../../../rfvue/beans/BaseRedController";
import Column from "../../../rfvue/beans/Column";
import RFPMConstantsService from "../../constants/RFPMConstantsService";
import CommonsUtils from "../../../rfvue/utils/CommonsUtils";
import ColorUtils from "../../../rfvue/utils/ColorUtils";
/**
 * Controller for tags
 */
export default class TagController extends BaseRedController {
  constructor(baseViewController) {
    super(baseViewController);
    this.style = "";
    this.oldColor = null;
  }

  getServiceName() {
    return RFPMConstantsService.SERVICE_TAG;
  }

  loadColumns() {
    this.columns.push(
      new Column("code", this.i18n("rfpm.columns.proyects.code"), 150, true)
    );
    this.columns.push(
      new Column(
        "description",
        this.i18n("rfpm.columns.proyects.description"),
        600,
        true
      )
    );
  }

  /**
   * Method for generate style for card
   */
  styleCard() {
    if (
      CommonsUtils.isNotNull(this.element) &&
      CommonsUtils.isNotNull(this.element) &&
      CommonsUtils.isNotNull(this.element.color) &&
      this.oldColor !== this.element.color
    ) {
      this.oldColor = this.element.color;
      this.style =
        " background-color: " +
        ColorUtils.convertHexColorToRgba(this.element.color, 0.5) +
        " !important; ";
    }
    return this.style;
  }

  styleRow(style, rowData) {
    if (CommonsUtils.isNull(style)) {
      style = "";
    }
    if (
      CommonsUtils.isNotNull(rowData) &&
      CommonsUtils.isNotNull(rowData.color)
    ) {
      style =
        style +
        " background-color: " +
        ColorUtils.convertHexColorToRgba(rowData.color, 0.5) +
        " !important; ";
    }
    return style;
  }
}
