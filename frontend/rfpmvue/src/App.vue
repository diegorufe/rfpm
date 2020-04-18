<template>
  <div id="app">
    <RFPMAppComponent>
      <template slot="menuContentTemplate">
        <MenuItemComponent :label="i18n('rfpm.menu.masters')">
          <template slot="menuItemContentTemplate">
            <MenuItemComponent
              :label="i18n('rfpm.menu.notes')"
              :level="1"
              :componentView="'Note'"
              :module="'Masters'"
            />
            <MenuItemComponent
              v-if="getExtraData('App').isAdmin()"
              :label="i18n('rfpm.menu.proyects')"
              :level="1"
              :componentView="'Proyect'"
              :module="'Masters'"
            />
            <MenuItemComponent
              v-if="getExtraData('App').isAdmin()"
              :label="i18n('rfpm.menu.tags')"
              :level="1"
              :componentView="'Tag'"
              :module="'Masters'"
            />
            <MenuItemComponent
              :label="i18n('rfpm.menu.wiki')"
              :level="1"
              :componentView="'Wiki'"
              :module="'Masters'"
            />
          </template>
        </MenuItemComponent>
        <MenuItemComponent :label="i18n('rfpm.menu.security')" v-if="getExtraData('App').isAdmin()">
          <template slot="menuItemContentTemplate">
            <MenuItemComponent
               v-if="getExtraData('App').isAdmin()"
              :label="i18n('rfpm.menu.roles')"
              :level="1"
              :componentView="'Role'"
              :module="'Masters'"
            />
          </template>
        </MenuItemComponent>
      </template>
    </RFPMAppComponent>
  </div>
</template>

<script>
import RFPMAppComponent from "./components/rfpm/components/RFPMAppComponent";
import MenuItemComponent from "./components/rfvue/components/menuitem/MenuItemComponent";
import BaseComponent from "./components/rfvue/components/base/BaseComponent";

export default {
  extends: BaseComponent,
  name: "App",
  components: {
    RFPMAppComponent,
    MenuItemComponent
  }
};
</script>