<!--

Component Note 

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
                :service="'Proyect'"
                :moduleView="'Masters'"
                :titleSelect="i18n('rfpm.proyect.select')"
                :property2="'value_description'"
                :tab="this.tab"
                :max2="100"
              />
              <InputTextButtonComponent
                :disabled="false"
                :required="false"
                :element="baseController.filtersBrowser[1]"
                :element2="baseController.filtersBrowser[1]"
                :property="'value_code'"
                :max="4"
                :label="i18n('rfpm.tag.title')"
                :disabledButton="false"
                :componentView="'Tag'"
                :service="'Tag'"
                :moduleView="'Masters'"
                :titleSelect="i18n('rfpm.tag.select')"
                :property2="'value_description'"
                :tab="this.tab"
                :max2="100"
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
          <CardComponent :title="i18n('rfpm.menu.notes')">
            <template slot="cardContentTemplate">
              <TableComponent
                :baseControllerLazyLoad="baseController"
                :typeView="baseController.tableView"
              >
                <template slot="tableGridLineTemplate" slot-scope="slotProps">
                  <div class="NoteGridLine">
                    <div
                      class="NoteGridLineContent"
                    >{{i18n('rfpm.proyect.title')+': '+ slotProps.rowData['Proyect']['description']}}</div>

                    <div
                      class="NoteGridLineContent"
                    >{{i18n('rfpm.columns.notes.userCreate')+': '+ slotProps.rowData['UserCreate']['nick']}}</div>

                    <div
                      class="NoteGridLineContent"
                    >{{i18n('rfpm.columns.notes.userUpdate')+': '+ slotProps.rowData['UserUpdate']['nick']}}</div>

                    <div
                      class="NoteGridLineContent"
                    >{{i18n('rfpm.columns.notes.createdAt')+': '+ slotProps.rowData['createdAt']}}</div>

                    <div
                      class="NoteGridLineContent"
                    >{{i18n('rfpm.columns.notes.updatedAt')+': '+ slotProps.rowData['updatedAt']}}</div>

                    <div
                      class="NoteGridLineContent"
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
          <CardComponent :title="i18n('rfvue.general')" :styleBody="baseController.styleCard()">
            <template slot="cardContentTemplate">
              <div class="floatLeftFullDivCard">
                <InputTextButtonComponent
                  :disabled="baseController.isStateRead()"
                  :required="true"
                  :element="baseController.element"
                  :element2="baseController.element"
                  :property="'Proyect_code'"
                  :max="4"
                  :label="i18n('rfpm.proyect.title')"
                  :disabledButton="baseController.isStateRead()"
                  :componentView="'Proyect'"
                  :service="'Proyect'"
                  :moduleView="'Masters'"
                  :titleSelect="i18n('rfpm.proyect.select')"
                  :property2="'Proyect_description'"
                  :tab="tab"
                  :max2="100"
                />
                <InputTextButtonComponent
                  :disabled="baseController.isStateRead()"
                  :required="true"
                  :element="baseController.element"
                  :element2="baseController.element"
                  :property="'Tag_code'"
                  :max="4"
                  :label="i18n('rfpm.tag.title')"
                  :disabledButton="baseController.isStateRead()"
                  :componentView="'Tag'"
                  :service="'Tag'"
                  :moduleView="'Masters'"
                  :titleSelect="i18n('rfpm.tag.select')"
                  :property2="'Tag_description'"
                  :tab="tab"
                  :max2="100"
                />
                <div style="float: left; clear: left;">
                  <InputTextComponent
                    :disabled="true"
                    :rendered="baseController.isStateRead()"
                    :required="false"
                    :element="baseController.element"
                    :property="'UserCreate_nick'"
                    :max="30"
                    :label="i18n('rfpm.columns.notes.userCreate')"
                  />
                  <InputTextComponent
                    :disabled="true"
                    :rendered="baseController.isStateRead()"
                    :required="false"
                    :element="baseController.element"
                    :property="'UserUpdate_nick'"
                    :max="30"
                    :label="i18n('rfpm.columns.notes.userUpdate')"
                  />
                </div>
                <div style="float: left; clear: left;">
                  <InputTextAreaComponent
                    :disabled="baseController.isStateRead()"
                    :required="true"
                    :element="baseController.element"
                    :property="'description'"
                    :cols="200"
                    :rows="35"
                    :tab="tab"
                    :label="i18n('rfvue.description')"
                  />
                </div>
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
import NoteController from "../../controllers/masters/NoteController";
import ToolBarRedComponent from "../../../rfvue/components/toolbars/ToolBarRedComponent";
import InputTextComponent from "../../../rfvue/components/inputtext/InputTextComponent";
import InputTextButtonComponent from "../../../rfvue/components/inputtextbutton/InputTextButtonComponent";
import InputTextAreaComponent from "../../../rfvue/components/inputtextarea/InputTextAreaComponent";

export default {
  extends: BaseViewControllerComponent,
  name: "NoteViewControllerComponent",
  components: {
    PageComponent,
    ToolBarPageComponent,
    ToolBarBrowserComponent,
    BodyPageComponent,
    CardComponent,
    TableComponent,
    ToolBarRedComponent,
    InputTextComponent,
    InputTextButtonComponent,
    InputTextAreaComponent
  },
  data() {
    return {
      baseController: new NoteController(this)
    };
  }
};
</script>

<style scoped>
.NoteGridLine {
  float: left;
}

.NoteGridLineContent {
  float: left;
  clear: left;
  margin-top: 5px;
  color: var(--rf-tableSumaryFontColor, #466289);
}
</style>