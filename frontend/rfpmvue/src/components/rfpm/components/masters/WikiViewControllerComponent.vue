<!--

Component Proyect 

-->

<template>
  <!-- list -->
  <PageComponent :idPage="getIdList()" v-if="baseController.stateAccess == 'list'">
    <template slot="pageContentTemplate">
      <ToolBarPageComponent>
        <template slot="toolBarPageContentTemplate">
          <ToolBarBrowserComponent :renderTableViews="true" :baseController="baseController" />
        </template>
      </ToolBarPageComponent>
      <BodyPageComponent>
        <template slot="bodyPageContentTemplate">
          <!-- Filters -->
          <CardComponent :title="i18n('rfvue.filters')">
            <template slot="cardContentTemplate">
              <InputTextButtonComponent
                :disabled="false"
                :required="false"
                :element="baseController.filtersBrowser[0]"
                :element2="baseController.filtersBrowser[0]"
                :property="'value_code'"
                :max="4"
                :label="i18n('rfpm.proyect.title')"
                :disabledButton="false"
                :componentView="'Proyect'"
                :serviceName="'ProyectService'"
                :moduleView="'Masters'"
                :titleSelect="i18n('rfpm.proyect.select')"
                :property2="'value_description'"
                :tab="this.tab"
                :max2="100"
              />
              <InputTextComponent
                :disabled="false"
                :required="false"
                :element="baseController.filtersBrowser[1]"
                :property="'value'"
                :max="30"
                :tab="this.tab"
                :label="i18n('rfvue.title')"
              />
              <InputTextComponent
                :disabled="false"
                :required="false"
                :element="baseController.filtersBrowser[2]"
                :property="'value'"
                :max="30"
                :tab="this.tab"
                :label="i18n('rfvue.description')"
              />
            </template>
          </CardComponent>
          <!-- Table -->
          <CardComponent :title="i18n('rfpm.menu.wiki')">
            <template slot="cardContentTemplate">
              <TableComponent
                :baseControllerLazyLoad="baseController"
                :typeView="baseController.tableView"
              >
                <template slot="tableGridLineTemplate" slot-scope="slotProps">
                  <div class="WikiGridLine">
                    <div
                      class="WikiGridLineContent"
                    >{{i18n('rfpm.proyect.title')+': '+ slotProps.rowData['Proyect']['description']}}</div>

                    <div
                      class="WikiGridLineContent"
                    >{{i18n('rfpm.columns.notes.userCreate')+': '+ slotProps.rowData['UserCreate']['nick']}}</div>

                    <div
                      class="WikiGridLineContent"
                    >{{i18n('rfpm.columns.notes.userUpdate')+': '+ slotProps.rowData['UserUpdate']['nick']}}</div>

                    <div
                      class="WikiGridLineContent"
                    >{{i18n('rfpm.columns.notes.createdAt')+': '+ slotProps.rowData['createdAt']}}</div>

                    <div
                      class="WikiGridLineContent"
                    >{{i18n('rfpm.columns.notes.updatedAt')+': '+ slotProps.rowData['updatedAt']}}</div>

                    <div
                      class="WikiGridLineContent"
                    >{{i18n('rfvue.title')+': '+ slotProps.rowData['title']}}</div>

                    <div
                      class="WikiGridLineContent"
                    >{{i18n('rfvue.description')+': '+ slotProps.rowData['description']}}</div>
                  </div>
                </template>
              </TableComponent>
            </template>
          </CardComponent>
        </template>
      </BodyPageComponent>
    </template>
  </PageComponent>
  <!-- red -->
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
                <!-- <InputTextComponent
                  :disabled="baseController.isStateRead()"
                  :required="true"
                  :element="baseController.element"
                  :property="'code'"
                  :max="4"
                  :label="i18n('rfvue.code')"
                />
                <InputTextComponent
                  :disabled="baseController.isStateRead()"
                  :required="true"
                  :element="baseController.element"
                  :property="'description'"
                  :max="100"
                  :label="i18n('rfvue.description')"
                />-->
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
import WikiController from "../../controllers/masters/WikiController";
import ToolBarRedComponent from "../../../rfvue/components/toolbars/ToolBarRedComponent";
import InputTextComponent from "../../../rfvue/components/inputtext/InputTextComponent";
import InputTextButtonComponent from "../../../rfvue/components/inputtextbutton/InputTextButtonComponent";

export default {
  extends: BaseViewControllerComponent,
  name: "WikiViewControllerComponent",
  components: {
    PageComponent,
    ToolBarPageComponent,
    ToolBarBrowserComponent,
    BodyPageComponent,
    CardComponent,
    TableComponent,
    ToolBarRedComponent,
    InputTextComponent,
    InputTextButtonComponent
  },
  data() {
    return {
      baseController: new WikiController(this)
    };
  }
};
</script>

<style scoped>
.WikiGridLine {
  float: left;
}

.WikiGridLineContent {
  float: left;
  clear: left;
  margin-top: 5px;
  color: var(--rf-tableSumaryFontColor, #466289);
}
</style>