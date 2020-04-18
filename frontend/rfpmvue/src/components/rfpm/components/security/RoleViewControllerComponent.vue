<!--

Component Role 

-->

<template>
  <!-- list -->
  <PageComponent :idPage="getIdList()" v-if="baseController.stateAccess == 'list'">
    <template slot="pageContentTemplate">
      <ToolBarPageComponent>
        <template slot="toolBarPageContentTemplate">
          <ToolBarBrowserComponent
            :baseController="baseController"
            :renderAdd="false"
            :renderApplyFilters="false"
            :renderResetFilters="false"
          />
        </template>
      </ToolBarPageComponent>
      <BodyPageComponent>
        <template slot="bodyPageContentTemplate">
          <CardComponent :title="i18n('rfpm.menu.roles')">
            <template slot="cardContentTemplate">
              <TableComponent
                :hasActions="false"
                :renderEdit="false"
                :renderRead="false"
                :renderDelete="false"
                :baseControllerLazyLoad="baseController"
                :disableClickRowDblActions="true"
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
import RoleController from "../../controllers/security/RoleController";

export default {
  extends: BaseViewControllerComponent,
  name: "RoleViewControllerComponent",
  components: {
    PageComponent,
    ToolBarPageComponent,
    ToolBarBrowserComponent,
    BodyPageComponent,
    CardComponent,
    TableComponent
  },
  data() {
    return {
      baseController: new RoleController(this)
    };
  }
};
</script>

<style scoped>
</style>