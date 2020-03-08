import { RfngService, LazyImport } from 'rfnglib';
import en from './../../i18n/locales/en.json';
import { ProyectService } from 'src/app/services/masters/proyect.service.js';
import { TagService } from 'src/app/services/masters/tag.service.js';

export function configApp(rfngService: RfngService) {
  // load i18n
  loadI18n(rfngService);
  // Load map lazy import
  rfngService.addMapLazyImports(loadMapLazyImports(rfngService));
  // Load map modals lazy import
  rfngService.addMapModalsLazyImport(loadMapModalsLazyImports(rfngService));
  // Load services
  loadServices(rfngService);
}

/**
 * Méthod for load i18n for aplication
 * @param rfngService
 */
export function loadI18n(rfngService: RfngService) {
  rfngService.i18nService.addTranslations([{ "en": en }]);
  rfngService.titleApp = rfngService.i18nService.translate('rfpm.title', null);
}

/**
 * Method for load services
 * @param rfngService
 */
export function loadServices(rfngService: RfngService) {
  // Proyect service
  rfngService.addServiceClassName('ProyectService', () => {
    return rfngService.resolveService<ProyectService>(ProyectService);
  });
  // Tag service
  rfngService.addServiceClassName('TagService', () => {
    return rfngService.resolveService<TagService>(TagService);
  });
}

/**
 * Method for load map modals lazy imports
 * @param rfngService
 */
export function loadMapModalsLazyImports(rfngService: RfngService) {
  return {
    "UserProfileComponent":
      new LazyImport(
        async () => {
          const module = await import('./../security/modals/userprofile/userprofile.module');
          return module.UserProfileModule;
        }
      )
  };
}

/**
 * Method for load map lazy imports
 * @param rfngService
 */
export function loadMapLazyImports(rfngService: RfngService) {
  return {
    "UserComponent": new LazyImport(
      async () => {
        const module = await import('./../security/user/user.module');
        return module.UserModule;
      }
    ),
    "ProyectComponent": new LazyImport(
      async () => {
        const module = await import('./../masters/proyect/proyect.module');
        return module.ProyectModule;
      }
    ),
    "TagComponent": new LazyImport(
      async () => {
        const module = await import('./../masters/tag/tag.module');
        return module.TagModule;
      }
    ),
    "NoteComponent": new LazyImport(
      async () => {
        const module = await import('./../masters/note/note.module');
        return module.NoteModule;
      }
    ),
    "WikiComponent": new LazyImport(
      async () => {
        const module = await import('./../masters/wiki/wiki.module');
        return module.WikiModule;
      }
    ),
    "RoleComponent": new LazyImport(
      async () => {
        const module = await import('./../security/role/role.module');
        return module.RoleModule;
      }
    )
  };
}
