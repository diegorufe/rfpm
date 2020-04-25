import BaseRedController from "../../../rfvue/beans/BaseRedController";
import Column from "../../../rfvue/beans/Column";
import RFPMConstantsService from "../../constants/RFPMConstantsService";
import Fetch from "../../../rfvue/beans/Fetch";
import Filter from "../../../rfvue/beans/Filter";
import StringUtils from "../../../rfvue/utils/StringUtils";
/**
 * Controller for wiki
 */
export default class WikiController extends BaseRedController {
  constructor(baseViewController) {
    super(baseViewController);
    this.tableView = "Grid";
  }

  getServiceName() {
    return RFPMConstantsService.SERVICE_WIKI;
  }

  /**
   * Method to set default fetchs for find data
   */
  setDefaulFetchs() {
    this.defaultFetchs = [];
    this.defaultFetchs.push(new Fetch("Proyect", "INNER"));
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
      new Filter("title", "like_all", null, "and", null)
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
        this.i18n("rfpm.columns.wiki.proyect"),
        100,
        true
      )
    );
    this.columns.push(
      new Column(
        "UserCreate_nick",
        this.i18n("rfpm.columns.wiki.userCreate"),
        150,
        true
      )
    );
    this.columns.push(
      new Column(
        "UserUpdate_nick",
        this.i18n("rfpm.columns.wiki.userUpdate"),
        150,
        true
      )
    );
    this.columns.push(
      new Column(
        "createdAt",
        this.i18n("rfpm.columns.wiki.createdAt"),
        200,
        true
      )
    );
    this.columns.push(
      new Column(
        "updatedAt",
        this.i18n("rfpm.columns.wiki.updatedAt"),
        200,
        true
      )
    );
    this.columns.push(
      new Column("title", this.i18n("rfpm.columns.wiki.title"), 300, true)
    );
    this.columns.push(
      new Column(
        "description",
        this.i18n("rfpm.columns.wiki.description"),
        432,
        true
      )
    );
  }

  styleRow(style, rowData) {
    rowData != null;
    if (StringUtils.isBlank(style)) {
      style = "";
    }
    if (this.tableView === "Grid") {
      style = style + " width:  390px;";
      style = style + " height:  200px;";
      style = style + " overflow:  auto;";
    }
    return style;
  }
}
