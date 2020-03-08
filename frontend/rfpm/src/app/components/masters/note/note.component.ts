import { Component, Inject } from '@angular/core';
import { RfngService, BaseRedControllerComponent, Fetch, CommonsUtils, Filter, Column } from 'rfnglib';
import { NoteService } from 'src/app/services/masters/note.service';


@Component({
  selector: 'rfpm-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent extends BaseRedControllerComponent {

  oldColor: string;
  style: any;

  constructor(rfNgService: RfngService, @Inject(NoteService) service) {
    super(rfNgService, service);
    this.style = {};
    this.oldColor = '';
    this.tableView = 'Grid';
  }

  /**
   * Method to set default fetchs for find data
   */
  setDefaulFetchs() {
    this.defaultFetchs = [];
    this.defaultFetchs.push(new Fetch('Proyect', 'INNER'));
    this.defaultFetchs.push(new Fetch('Tag', 'INNER'));
    this.defaultFetchs.push(new Fetch('UserCreate', 'INNER'));
    this.defaultFetchs.push(new Fetch('UserUpdate', 'INNER'));
  }

  /**
   * Method for set filters on init
   */
  setFiltersBrowser() {
    this.filtersBrowser = [];
    this.filtersBrowser.push(new Filter('proyectId', null, { id: null, code: null, description: null }, "and", null, "id"));
    this.filtersBrowser.push(new Filter('tagId', null, { id: null, code: null, description: null }, "and", null, "id"));
    this.filtersBrowser.push(new Filter('description', "like_all", null, "and", null));
  }

  /**
   * Load columns show in browser
   */
  async loadColumns() {
    this.columns.push(new Column('Proyect_description', this.i18n('rfpm.columns.notes.proyect'), 150, true));
    this.columns.push(new Column('Tag_description', this.i18n('rfpm.columns.notes.tag'), 150, true));
    this.columns.push(new Column('UserCreate_nick', this.i18n('rfpm.columns.notes.userCreate'), 150, true));
    this.columns.push(new Column('UserUpdate_nick', this.i18n('rfpm.columns.notes.userUpdate'), 150, true));
    this.columns.push(new Column('createdAt', this.i18n('rfpm.columns.notes.createdAt'), 200, true));
    this.columns.push(new Column('updatedAt', this.i18n('rfpm.columns.notes.updatedAt'), 200, true));
    this.columns.push(new Column('description', this.i18n('rfpm.columns.notes.description'), 500, true));
  }

  /**
   * Method for generate style for card
   */
  styleCard() {
    if (CommonsUtils.isNotNull(this.element) && CommonsUtils.isNotNull(this.element.Tag)
      && CommonsUtils.isNotNull(this.element.Tag.color) && this.oldColor !== this.element.Tag.color) {
      this.oldColor = this.element.Tag.color;
      this.style = { 'background-color': this.rfngService.convertHexColorToRgba(this.element.Tag.color, 0.5) };
    }
    return this.style;
  }

  styleRow(style, rowData) {
    if (CommonsUtils.isNotNull(rowData) && CommonsUtils.isNotNull(rowData.Tag)
      && CommonsUtils.isNotNull(rowData.Tag.color)) {
      style['background-color'] = this.rfngService.convertHexColorToRgba(rowData.Tag.color, 0.5);
    }
    if (this.tableView === 'Grid') {
      style['width'] = '390px';
      style['height'] = '200px';
      style['overflow'] = 'auto';
    }
    return style;
  }
}
