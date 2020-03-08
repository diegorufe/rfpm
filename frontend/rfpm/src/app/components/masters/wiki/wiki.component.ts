import { Component, Inject } from '@angular/core';
import { RfngService, BaseRedControllerComponent, Fetch, Filter, Column } from 'rfnglib';
import { WikiService } from 'src/app/services/masters/wiki.service';


@Component({
  selector: 'rfpm-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent extends BaseRedControllerComponent {


  constructor(rfNgService: RfngService, @Inject(WikiService) service) {
    super(rfNgService, service);
    this.tableView = 'Grid';
  }

  /**
   * Method to set default fetchs for find data
   */
  setDefaulFetchs() {
    this.defaultFetchs = [];
    this.defaultFetchs.push(new Fetch('Proyect', 'INNER'));
    this.defaultFetchs.push(new Fetch('UserCreate', 'INNER'));
    this.defaultFetchs.push(new Fetch('UserUpdate', 'INNER'));
  }

  /**
   * Method for set filters on init
   */
  setFiltersBrowser() {
    this.filtersBrowser = [];
    this.filtersBrowser.push(new Filter('proyectId', null, { id: null, code: null, description: null }, "and", null, "id"));
    this.filtersBrowser.push(new Filter('title', "like_all", null, "and", null));
    this.filtersBrowser.push(new Filter('description', "like_all", null, "and", null));
  }

  /**
   * Load columns show in browser
   */
  async loadColumns() {
    this.columns.push(new Column('Proyect_description', this.i18n('rfpm.columns.wiki.proyect'), 100, true));
    this.columns.push(new Column('UserCreate_nick', this.i18n('rfpm.columns.wiki.userCreate'), 150, true));
    this.columns.push(new Column('UserUpdate_nick', this.i18n('rfpm.columns.wiki.userUpdate'), 150, true));
    this.columns.push(new Column('createdAt', this.i18n('rfpm.columns.wiki.createdAt'), 200, true));
    this.columns.push(new Column('updatedAt', this.i18n('rfpm.columns.wiki.updatedAt'), 200, true));
    this.columns.push(new Column('title', this.i18n('rfpm.columns.wiki.title'), 300, true));
    this.columns.push(new Column('description', this.i18n('rfpm.columns.wiki.description'), 432, true));
  }

  styleRow(style, rowData) {
    if (this.tableView === 'Grid') {
      style['width'] = '390px';
      style['height'] = '200px';
      style['overflow'] = 'auto';
    }
    return style;
  }
}
