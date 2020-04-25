import BaseRedController from "../../../rfvue/beans/BaseRedController";
import Column from "../../../rfvue/beans/Column";
import RFPMConstantsService from "../../constants/RFPMConstantsService";
import Fetch from "../../../rfvue/beans/Fetch";
import Filter from "../../../rfvue/beans/Filter";
import CommonsUtils from "../../../rfvue/utils/CommonsUtils";
import ColorUtils from "../../../rfvue/utils/ColorUtils";
/**
 * Controller for note
 */
export default class NoteController extends BaseRedController {
  constructor(baseViewController) {
    super(baseViewController);
    this.tableView = "Grid";
    this.style = "";
    this.oldColor = null;
  }

  getServiceName() {
    return RFPMConstantsService.SERVICE_NOTE;
  }

  /**
   * Method to set default fetchs for find data
   */
  setDefaulFetchs() {
    this.defaultFetchs = [];
    this.defaultFetchs.push(new Fetch("Proyect", "INNER"));
    this.defaultFetchs.push(new Fetch("Tag", "INNER"));
    this.defaultFetchs.push(new Fetch("UserCreate", "INNER"));
    this.defaultFetchs.push(new Fetch("UserUpdate", "INNER"));
  }

  /**
   * Method for set filters on init
   */
  setFiltersBrowser() {
    this.filtersBrowser = [];
    this.filtersBrowser.push(
      new Filter(
        "proyectId",
        null,
        { id: null, code: null, description: null },
        "and",
        null,
        "id"
      )
    );
    this.filtersBrowser.push(
      new Filter(
        "tagId",
        null,
        { id: null, code: null, description: null },
        "and",
        null,
        "id"
      )
    );
    this.filtersBrowser.push(
      new Filter("description", "like_all", null, "and", null)
    );

    const filterHashTag = new Filter("hashtags", "=", null, "and", null);
    filterHashTag.hashtagFilter = true;

    this.filtersBrowser.push(filterHashTag);
  }

  loadColumns() {
    this.columns.push(
      new Column(
        "Proyect_description",
        this.i18n("rfpm.columns.notes.proyect"),
        150,
        true
      )
    );
    this.columns.push(
      new Column(
        "Tag_description",
        this.i18n("rfpm.columns.notes.tag"),
        150,
        true
      )
    );
    this.columns.push(
      new Column(
        "UserCreate_nick",
        this.i18n("rfpm.columns.notes.userCreate"),
        150,
        true
      )
    );
    this.columns.push(
      new Column(
        "UserUpdate_nick",
        this.i18n("rfpm.columns.notes.userUpdate"),
        150,
        true
      )
    );
    this.columns.push(
      new Column(
        "createdAt",
        this.i18n("rfpm.columns.notes.createdAt"),
        200,
        true
      )
    );
    this.columns.push(
      new Column(
        "updatedAt",
        this.i18n("rfpm.columns.notes.updatedAt"),
        200,
        true
      )
    );
    this.columns.push(
      new Column(
        "description",
        this.i18n("rfpm.columns.notes.description"),
        500,
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
      CommonsUtils.isNotNull(this.element.Tag) &&
      CommonsUtils.isNotNull(this.element.Tag.id) &&
      CommonsUtils.isNotNull(this.element.Tag.color) &&
      this.oldColor !== this.element.Tag.color
    ) {
      this.oldColor = this.element.Tag.color;
      this.style =
        " background-color: " +
        ColorUtils.convertHexColorToRgba(this.element.Tag.color, 0.5) +
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
      CommonsUtils.isNotNull(rowData.Tag) &&
      CommonsUtils.isNotNull(rowData.Tag.id) &&
      CommonsUtils.isNotNull(rowData.Tag.color)
    ) {
      style =
        style +
        " background-color: " +
        ColorUtils.convertHexColorToRgba(rowData.Tag.color, 0.5) +
        " !important; ";
    }
    if (this.tableView === "Grid") {
      style = style + " width:  390px;";
      style = style + " height:  200px;";
      style = style + " overflow:  auto;";
    }
    return style;
  }
}
