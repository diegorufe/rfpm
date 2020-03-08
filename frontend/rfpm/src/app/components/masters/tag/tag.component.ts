import { Component, Inject } from '@angular/core';
import { RfngService, BaseRedControllerComponent, CommonsUtils, Column } from 'rfnglib';
import { TagService } from 'src/app/services/masters/tag.service';


@Component({
  selector: 'rfpm-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent extends BaseRedControllerComponent {

  oldColor: string;
  style: any;


  constructor(rfNgService: RfngService, @Inject(TagService) service) {
    super(rfNgService, service);
    this.style = {};
    this.oldColor = '';
  }

  /**
   * Load columns show in browser
   */
  async loadColumns() {
    this.columns.push(new Column('code', this.i18n('rfpm.columns.proyects.code'), 150, true));
    this.columns.push(new Column('description', this.i18n('rfpm.columns.proyects.description'), 600, true));
  }

  /**
   * Method for generate style for card
   */
  styleCard() {
    if (CommonsUtils.isNotNull(this.element) && CommonsUtils.isNotNull(this.element)
      && CommonsUtils.isNotNull(this.element.color) && this.oldColor !== this.element.color) {
      this.oldColor = this.element.color;
      this.style = { 'background-color': this.rfngService.convertHexColorToRgba(this.element.color, 0.5) };
    }
    return this.style;
  }

  styleRow(style, rowData) {
    if (CommonsUtils.isNotNull(rowData)
      && CommonsUtils.isNotNull(rowData.color)) {
      style['background-color'] = this.rfngService.convertHexColorToRgba(rowData.color, 0.5);
    }
    return style;
  }
}
