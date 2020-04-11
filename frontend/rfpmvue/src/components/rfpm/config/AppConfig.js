import en from "./../i18n/locales/en.json";
import VueContext from "./../../rfvue/context/VueContext";
import LazyImport from "./../../rfvue/beans/LazyImport";
import RFPMConstantsService from "./../constants/RFPMConstantsService";
import AppService from "./../services/app/AppService";
/**
 * Class for config app
 */
export default class AppConfig {
  /**
   * Load map extra data
   */
  static loadMapExtraData() {
    VueContext.mapExtraData[
      RFPMConstantsService.SERVICE_APP
    ] = new AppService();
  }
  /**
   * Config i18n from app
   */
  static configI18n() {
    // Load i18n for aplication
    VueContext.i18n.addTranslations([{ en: en }]);
  }
  /**
   * Method for load components
   */
  static loadComponents() {
    const mapLazyImports = {
      Proyect: new LazyImport(async () => {
        const module = await import(
          "../components/masters/ProyectViewControllerComponent.vue"
        );
        return module.default;
      }),
      Wiki: new LazyImport(async () => {
        const module = await import(
          "../components/masters/WikiViewControllerComponent.vue"
        );
        return module.default;
      })
    };
    VueContext.addMapLazyImports(mapLazyImports);
  }
  /**
   * Method for load services
   */
  static loadServices() {
    const mapLazyServices = {};
    mapLazyServices[RFPMConstantsService.SERVICE_PROYECT] = new LazyImport(
      async () => {
        const module = await import("../services/masters/ProyectService.js");
        let service = module.default;
        return new service();
      }
    );
    mapLazyServices[RFPMConstantsService.SERVICE_WIKI] = new LazyImport(
      async () => {
        const module = await import("../services/masters/WikiService.js");
        let service = module.default;
        return new service();
      }
    );
    VueContext.addMapServicesLazyImports(mapLazyServices);
  }
  /**
   * Config app
   */
  static configApp() {
    AppConfig.configI18n();
    AppConfig.loadComponents();
    AppConfig.loadServices();
    AppConfig.loadMapExtraData();

    VueContext.appName = "RFPM";
    VueContext.titleApp = VueContext.i18n.translate("rfpm.title");
  }
}
