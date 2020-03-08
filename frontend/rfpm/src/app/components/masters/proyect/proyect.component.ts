import { Component, Inject } from '@angular/core';
import { RfngService, BaseRedControllerComponent, Column } from 'rfnglib';
import { ProyectService } from 'src/app/services/masters/proyect.service';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'rfpm-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent extends BaseRedControllerComponent {

  appService: AppService;

  constructor(rfNgService: RfngService, @Inject(ProyectService) service, @Inject(AppService) appService) {
    super(rfNgService, service);
    this.appService = appService;
  }

  /**
   * Load columns show in browser
   */
  async loadColumns() {
    this.columns.push(new Column('code', this.i18n('rfpm.columns.proyects.code'), 150, true));
    this.columns.push(new Column('description', this.i18n('rfpm.columns.proyects.description'), 400, true));
  }
}
