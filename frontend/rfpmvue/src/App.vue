<template>
  <div id="app">
    <RFPMAppComponent>
      <template slot="menuContentTemplate">
        <MenuItemComponent :label="i18n('rfpm.menu.masters')">
          <template slot="menuItemContentTemplate">
            <MenuItemComponent
              :label="i18n('rfpm.menu.notes')"
              :level="1"
              :componentView="'NoteComponent'"
              :module="'Masters'"
            />
            <MenuItemComponent
              :label="i18n('rfpm.menu.proyects')"
              :level="1"
              :componentView="'Proyect'"
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