<!--

Component User role

-->

<template>
  <!-- list -->
  <PageComponent :idPage="getIdList()" v-if="baseController.stateAccess == 'list'">
    <template slot="pageContentTemplate">
      <ToolBarPageComponent>
        <template slot="toolBarPageContentTemplate">
          <ToolBarBrowserComponent
            :baseController="baseController"
            :renderApplyFilters="false"
            :renderResetFilters="false"
            :renderAdd="false"
          >
            <template slot="afterContentTemplate">
              <button
                class="ToolBarButtonsDefault"
                v-on:click="baseController.prepareAddRole()"
                type="button"
              >
                <ToolTipComponent :value="i18n('rfvue.toolbar.goAdd')" />
                <i class="fas fa-plus"></i>
              </button>
            </template>
          </ToolBarBrowserComponent>
        </template>
      </ToolBarPageComponent>
      <BodyPageComponent>
        <template slot="bodyPageContentTemplate">
          <CardComponent :title="i18n('rfpm.menu.roles')">
            <template slot="cardContentTemplate">
              <TableComponent
                :renderEdit="false"
                :renderRead="false"
                :renderDelete="true"
                :baseControllerLazyLoad="baseController"
              />
            </template>
          </CardComponent>
        </template>
      </BodyPageComponent>
    </template>
  </PageComponent>
</template>

<script>
import BaseViewControllerComponent from "../../../rfvue/components/base/baseviewcontroller/BaseViewControllerComponent";
import PageComponent from "../../../rfvue/components/page/PageComponent";
import ToolBarPageComponent from "../../../rfvue/components/toolbarpage/ToolBarPageComponent";
import ToolBarBrowserComponent from "../../../rfvue/components/toolbars/ToolBarBrowserComponent";
import BodyPageComponent from "../../../rfvue/components/bodypage/BodyPageComponent";
import CardComponent from "../../../rfvue/components/card/CardComponent";
import TableComponent from "../../../rfvue/components/table/TableComponent";
import ToolTipComponent from "../../../rfvue/components/tooltip/ToolTipComponent";
import UserRoleController from "../../controllers/security/UserRoleController";

export default {
  extends: BaseViewControllerComponent,
  name: "UserRoleViewControllerComponent",
  components: {
    PageComponent,
    ToolBarPageComponent,
    ToolBarBrowserComponent,
    BodyPageComponent,
    CardComponent,
    TableComponent,
    ToolTipComponent
  },
  props: {
    userId: {
      type: Number,
      default: -999
    }
  },
  watch: {
    userId: function(newVal) {
      // watch it
      // console.log("Prop changed: ", newVal, " | was: ", oldVal);
      // Reload user props
      this.baseController.reloadUser();
      return newVal;
    }
  },
  data() {
    return {
      baseController: new UserRoleController(this)
    };
  }
};
</script>

<style scoped>
</style>