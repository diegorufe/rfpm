<!--

Component Proyect 

-->

<template>
  <!-- list -->
  <PageComponent :idPage="getIdList()" v-if="baseController.stateAccess == 'list'">
    <template slot="pageContentTemplate">
      <ToolBarPageComponent>
        <template slot="toolBarPageContentTemplate">
          <ToolBarBrowserComponent
            :baseController="baseController"
            :renderAdd="getExtraData('App').isAdmin()"
          />
        </template>
      </ToolBarPageComponent>
      <BodyPageComponent>
        <template slot="bodyPageContentTemplate">
          <CardComponent :title="i18n('rfpm.menu.proyects')">
            <template slot="cardContentTemplate">
              <TableComponent
                :renderEdit="getExtraData('App').isAdmin()"
                :renderRead="getExtraData('App').isAdmin()"
                :renderDelete="getExtraData('App').isAdmin()"
                :baseControllerLazyLoad="baseController"
              />
            </template>
          </CardComponent>
        </template>
      </BodyPageComponent>
    </template>
  </PageComponent>
  <!-- red -->
  <PageComponent :idPage="getIdRed()" v-else-if="baseController.isElementNotNull()">
    <template slot="pageContentTemplate">
      <ToolBarPageComponent>
        <template slot="toolBarPageContentTemplate">
          <ToolBarRedComponent :baseController="baseController" />
        </template>
      </ToolBarPageComponent>
      <BodyPageComponent>
        <template slot="bodyPageContentTemplate">
          <CardComponent :title="i18n('rfvue.general')">
            <template slot="cardContentTemplate">
              <div class="floatLeftFullDivCard">
                <InputTextComponent
                  :disabled="baseController.isStateRead()"
                  :required="true"
                  :element="baseController.element"
                  :property="'code'"
                  :max="4"
                  :tab="tab"
                  :label="i18n('rfvue.code')"
                />
                <InputTextComponent
                  :disabled="baseController.isStateRead()"
                  :required="true"
                  :element="baseController.element"
                  :property="'description'"
                  :max="100"
                  :tab="tab"
                  :label="i18n('rfvue.description')"
                />
              </div>
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
import ProyectController from "../../controllers/masters/ProyectController";
import ToolBarRedComponent from "../../../rfvue/components/toolbars/ToolBarRedComponent";
import InputTextComponent from "../../../rfvue/components/inputtext/InputTextComponent";

export default {
  extends: BaseViewControllerComponent,
  name: "ProyectViewControllerComponent",
  components: {
    PageComponent,
    ToolBarPageComponent,
    ToolBarBrowserComponent,
    BodyPageComponent,
    CardComponent,
    TableComponent,
    ToolBarRedComponent,
    InputTextComponent
  },
  data() {
    return {
      baseController: new ProyectController(this)
    };
  }
};
</script>

<style scoped>
</style>