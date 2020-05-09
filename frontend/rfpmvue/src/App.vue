<template>
  <div id="app">
    <RFPMAppComponent>
      <!-- Header -->
      <template slot="headerLeftTemplate">
        <div class="RfpmTitle">{{"RFPM"}}</div>
      </template>
      <template slot="headerBodyTemplate" slot-scope="slotProps">
        <div class="RfpmUser">
          {{i18n('rfvue.user')}}:
          <a v-on:click="clickUser()">{{slotProps.app.nickUser}}</a>
        </div>
      </template>
      <!-- Menu -->
      <template slot="menuContentTemplate" slot-scope="slotProps">
        <MenuItemComponent v-if="slotProps.app.logged" :label="i18n('rfpm.menu.masters')">
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
            <MenuItemComponent
              v-if="getExtraData('App').isAdmin()"
              :label="i18n('rfpm.menu.users')"
              :level="1"
              :componentView="'User'"
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
import ConstantsModals from "./components/rfvue/constants/ConstantsModals";

export default {
  extends: BaseComponent,
  name: "App",
  components: {
    RFPMAppComponent,
    MenuItemComponent
  },
  methods: {
    /**
     * Methoc execuete click user profile open modal modify this
     */
    clickUser: async function() {
      const params = {};
      params[ConstantsModals.KEY_MODAL_COMPONENT_PARAM_STYLE_CLASS_MODAL] =
        "UserProfileModal";

      let self = this;

      self.getVueContext().applyAsyncFunctionWithHandlerViewError(() => {
        return self
          .getVueContext()
          .addModal(
            self.i18n("rfpm.userProfile.title"),
            "UserProfile",
            "Security",
            false,
            params
          );
      });
    }
  }
};
</script>

<style scoped>
.RfpmTitle {
  float: left;
  font-size: 24px;
  margin-top: 10px;
  margin-left: 5px;
  color: white;
  font-weight: bold;
  font-family: initial;
}

.RfpmUser {
  float: right;
  color: white;
  font-size: 16px;
  margin-right: 20px;
  margin-top: 13px;
}

.RfpmUser > a {
  cursor: pointer;
  text-decoration: underline;
}
</style>