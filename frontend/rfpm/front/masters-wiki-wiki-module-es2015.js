(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-wiki-wiki-module"],{

/***/ "./src/app/components/masters/wiki/wiki.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/masters/wiki/wiki.component.ts ***!
  \***********************************************************/
/*! exports provided: WikiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiComponent", function() { return WikiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rfnglib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rfnglib */ "./node_modules/rfnglib/fesm2015/rfnglib.js");
/* harmony import */ var src_app_services_masters_wiki_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/masters/wiki.service */ "./src/app/services/masters/wiki.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








function WikiComponent_ng_container_1_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "rf-toolbarbrowser", 9);
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("baseController", ctx_r79)("renderTableViews", true);
} }
function WikiComponent_ng_container_1_ng_template_4_ng_template_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "rf-inputbutton", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "rf-inputtext", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "rf-inputtext", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "i18n");
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", false)("required", false)("model", ctx_r81.filtersBrowser[0])("model2", ctx_r81.filtersBrowser[0])("property", "value_code")("max", 4)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 29, "rfpm.proyect.title"))("disabledButton", false)("componentView", "ProyectComponent")("serviceName", "ProyectService")("moduleView", "Masters")("titleSelect", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 31, "rfpm.proyect.select"))("name", "ProyectFilters_code" + ctx_r81.id)("property2", "value_description")("max2", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", "titleFilter" + ctx_r81.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", false)("required", false)("model", ctx_r81.filtersBrowser[1])("property", "value")("max", 30)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 33, "rfng.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", "descriptioFilter" + ctx_r81.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", false)("required", false)("model", ctx_r81.filtersBrowser[2])("property", "value")("max", 30)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 35, "rfng.description"));
} }
function WikiComponent_ng_container_1_ng_template_4_ng_template_3_ng_template_6_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 14, "rfpm.proyect.title"), ": ", rowData_r84["Proyect"]["description"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 16, "rfpm.columns.notes.userCreate"), ": ", rowData_r84["UserCreate"]["nick"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 18, "rfpm.columns.notes.userUpdate"), ": ", rowData_r84["UserUpdate"]["nick"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 20, "rfpm.columns.notes.createdAt"), ": ", rowData_r84["createdAt"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 22, "rfpm.columns.notes.updatedAt"), ": ", rowData_r84["updatedAt"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 24, "rfng.title"), ": ", rowData_r84["title"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 26, "rfng.description"), ": ", rowData_r84["description"], " ");
} }
function WikiComponent_ng_container_1_ng_template_4_ng_template_3_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "rf-table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WikiComponent_ng_container_1_ng_template_4_ng_template_3_ng_template_6_ng_template_1_Template, 22, 28, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r82.columns)("baseControllerLazyLoad", ctx_r82)("typeView", ctx_r82.tableView);
} }
function WikiComponent_ng_container_1_ng_template_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "rf-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WikiComponent_ng_container_1_ng_template_4_ng_template_3_ng_template_3_Template, 7, 37, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "rf-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, WikiComponent_ng_container_1_ng_template_4_ng_template_3_ng_template_6_Template, 2, 3, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "rfng.filters"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, "rfpm.menu.notes"));
} }
function WikiComponent_ng_container_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "rf-toolbarpage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WikiComponent_ng_container_1_ng_template_4_ng_template_1_Template, 1, 2, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "rf-bodypage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WikiComponent_ng_container_1_ng_template_4_ng_template_3_Template, 7, 6, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WikiComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "rf-page", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, WikiComponent_ng_container_1_ng_template_4_Template, 4, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("idPage", ctx_r75.id);
} }
function WikiComponent_ng_container_2_form_1_ng_template_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "rf-toolbarred", 20);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("baseController", ctx_r88)("form", _r86);
} }
function WikiComponent_ng_container_2_form_1_ng_template_3_ng_template_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "rf-inputbutton", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "rf-inputtext", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "rf-inputtext", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "rf-inputtext", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "rf-inputtext", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "rf-inputtextarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "rf-inputtextarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r90.isStateRead())("required", true)("model", ctx_r90.element)("model2", ctx_r90.element)("property", "Proyect_code")("max", 4)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 59, "rfpm.proyect.title"))("disabledButton", ctx_r90.isStateRead())("componentView", "ProyectComponent")("serviceName", "ProyectService")("moduleView", "Masters")("titleSelect", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 61, "rfpm.proyect.select"))("name", "Proyect_code" + ctx_r90.id)("property2", "Proyect_description")("max2", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", "userCreate" + ctx_r90.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true)("required", true)("model", ctx_r90.element)("property", "UserCreate_nick")("max", 30)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 63, "rfpm.columns.notes.userCreate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", "Update" + ctx_r90.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true)("required", true)("model", ctx_r90.element)("property", "UserUpdate_nick")("max", 30)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 65, "rfpm.columns.notes.userUpdate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", "createdAt" + ctx_r90.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true)("required", true)("model", ctx_r90.element)("property", "createdAt")("max", 20)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 67, "rfpm.columns.notes.createdAt"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", "updatedAt" + ctx_r90.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true)("required", true)("model", ctx_r90.element)("property", "updatedAt")("max", 20)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 69, "rfpm.columns.notes.updatedAt"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", "title" + ctx_r90.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r90.isStateRead())("required", true)("model", ctx_r90.element)("property", "title")("cols", 200)("rows", 5)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 71, "rfng.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", "description" + ctx_r90.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r90.isStateRead())("required", true)("model", ctx_r90.element)("property", "description")("cols", 200)("rows", 25)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 73, "rfng.description"));
} }
function WikiComponent_ng_container_2_form_1_ng_template_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "rf-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WikiComponent_ng_container_2_form_1_ng_template_3_ng_template_3_ng_template_3_Template, 18, 75, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "rfng.general"));
} }
function WikiComponent_ng_container_2_form_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "rf-toolbarpage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WikiComponent_ng_container_2_form_1_ng_template_3_ng_template_1_Template, 1, 2, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "rf-bodypage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WikiComponent_ng_container_2_form_1_ng_template_3_ng_template_3_Template, 4, 3, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WikiComponent_ng_container_2_form_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "rf-page", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WikiComponent_ng_container_2_form_1_ng_template_3_Template, 4, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("idPage", ctx_r85.id);
} }
function WikiComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WikiComponent_ng_container_2_form_1_Template, 4, 1, "form", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r76.isElementNotNull());
} }
class WikiComponent extends rfnglib__WEBPACK_IMPORTED_MODULE_2__["BaseRedControllerComponent"] {
    constructor(rfNgService, service) {
        super(rfNgService, service);
        this.tableView = 'Grid';
    }
    /**
     * Method to set default fetchs for find data
     */
    setDefaulFetchs() {
        this.defaultFetchs = [];
        this.defaultFetchs.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Fetch"]('Proyect', 'INNER'));
        this.defaultFetchs.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Fetch"]('UserCreate', 'INNER'));
        this.defaultFetchs.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Fetch"]('UserUpdate', 'INNER'));
    }
    /**
     * Method for set filters on init
     */
    setFiltersBrowser() {
        this.filtersBrowser = [];
        this.filtersBrowser.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Filter"]('proyectId', null, { id: null, code: null, description: null }, "and", null, "id"));
        this.filtersBrowser.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Filter"]('title', "like_all", null, "and", null));
        this.filtersBrowser.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Filter"]('description', "like_all", null, "and", null));
    }
    /**
     * Load columns show in browser
     */
    loadColumns() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.columns.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Column"]('Proyect_description', this.i18n('rfpm.columns.wiki.proyect'), 100, true));
            this.columns.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Column"]('UserCreate_nick', this.i18n('rfpm.columns.wiki.userCreate'), 150, true));
            this.columns.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Column"]('UserUpdate_nick', this.i18n('rfpm.columns.wiki.userUpdate'), 150, true));
            this.columns.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Column"]('createdAt', this.i18n('rfpm.columns.wiki.createdAt'), 200, true));
            this.columns.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Column"]('updatedAt', this.i18n('rfpm.columns.wiki.updatedAt'), 200, true));
            this.columns.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Column"]('title', this.i18n('rfpm.columns.wiki.title'), 300, true));
            this.columns.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Column"]('description', this.i18n('rfpm.columns.wiki.description'), 432, true));
        });
    }
    styleRow(style, rowData) {
        if (this.tableView === 'Grid') {
            style['width'] = '390px';
            style['height'] = '200px';
            style['overflow'] = 'auto';
        }
        return style;
    }
}
WikiComponent.ɵfac = function WikiComponent_Factory(t) { return new (t || WikiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](rfnglib__WEBPACK_IMPORTED_MODULE_2__["RfngService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_masters_wiki_service__WEBPACK_IMPORTED_MODULE_3__["WikiService"])); };
WikiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WikiComponent, selectors: [["rfpm-wiki"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["novalidate", "", 1, "floatLeftFullDiv"], ["frm", "ngForm"], [3, "idPage"], ["rfTemplate", "pageContent"], ["rfTemplate", "toolBarPageContent"], ["rfTemplate", "bodyPageContent"], [3, "baseController", "renderTableViews"], [1, "floatLeftFullDiv"], [3, "title"], ["rfTemplate", "cardContent"], [3, "disabled", "required", "model", "model2", "property", "max", "label", "disabledButton", "componentView", "serviceName", "moduleView", "titleSelect", "name", "property2", "max2"], [3, "name", "disabled", "required", "model", "property", "max", "label"], [3, "columns", "baseControllerLazyLoad", "typeView"], ["rfTemplate", "tableGridLine"], [1, "WikiGridLine"], [1, "WikiGridLineContent"], ["novalidate", "", "class", "floatLeftFullDiv", 4, "ngIf"], [3, "baseController", "form"], [1, "floatLeftFullDivCard"], [2, "float", "left", "clear", "left"], [3, "name", "disabled", "required", "model", "property", "cols", "rows", "label"]], template: function WikiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WikiComponent_ng_container_1_Template, 5, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, WikiComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.enumStateAccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "list");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchDefault"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["PageComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["RFTemplateDirective"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["ToolBarPageComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["BodyPageComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["ToolBarBrowserComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["InputButtonComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["InputTextComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["TableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["ToolBarRedComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["InputTextAreaComponent"]], pipes: [rfnglib__WEBPACK_IMPORTED_MODULE_2__["I18nPipe"]], styles: [".WikiGridLine[_ngcontent-%COMP%]{\r\n  float: left;\r\n}\r\n\r\n.WikiGridLineContent[_ngcontent-%COMP%]{\r\n  float: left;\r\n  clear: left;\r\n  margin-top: 5px;\r\n  color: var(--rf-tableSumaryFontColor, #466289);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXN0ZXJzL3dpa2kvd2lraS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYXN0ZXJzL3dpa2kvd2lraS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLldpa2lHcmlkTGluZXtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLldpa2lHcmlkTGluZUNvbnRlbnR7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgY2xlYXI6IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGNvbG9yOiB2YXIoLS1yZi10YWJsZVN1bWFyeUZvbnRDb2xvciwgIzQ2NjI4OSk7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WikiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'rfpm-wiki',
                templateUrl: './wiki.component.html',
                styleUrls: ['./wiki.component.css']
            }]
    }], function () { return [{ type: rfnglib__WEBPACK_IMPORTED_MODULE_2__["RfngService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [src_app_services_masters_wiki_service__WEBPACK_IMPORTED_MODULE_3__["WikiService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/masters/wiki/wiki.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/masters/wiki/wiki.module.ts ***!
  \********************************************************/
/*! exports provided: WikiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiModule", function() { return WikiModule; });
/* harmony import */ var rfnglib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rfnglib */ "./node_modules/rfnglib/fesm2015/rfnglib.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_masters_proyect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/masters/proyect.service */ "./src/app/services/masters/proyect.service.ts");
/* harmony import */ var src_app_services_masters_tag_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/masters/tag.service */ "./src/app/services/masters/tag.service.ts");
/* harmony import */ var src_app_services_masters_wiki_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/masters/wiki.service */ "./src/app/services/masters/wiki.service.ts");
/* harmony import */ var _wiki_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wiki.component */ "./src/app/components/masters/wiki/wiki.component.ts");









class WikiModule extends rfnglib__WEBPACK_IMPORTED_MODULE_0__["BaseModule"] {
}
WikiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WikiModule, bootstrap: [_wiki_component__WEBPACK_IMPORTED_MODULE_7__["WikiComponent"]] });
WikiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function WikiModule_Factory(t) { return ɵWikiModule_BaseFactory(t || WikiModule); }, providers: [src_app_services_masters_wiki_service__WEBPACK_IMPORTED_MODULE_6__["WikiService"], src_app_services_masters_proyect_service__WEBPACK_IMPORTED_MODULE_4__["ProyectService"], src_app_services_masters_tag_service__WEBPACK_IMPORTED_MODULE_5__["TagService"]], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            rfnglib__WEBPACK_IMPORTED_MODULE_0__["ButtonModule"],
            rfnglib__WEBPACK_IMPORTED_MODULE_0__["CardModule"],
            rfnglib__WEBPACK_IMPORTED_MODULE_0__["PageModule"],
            rfnglib__WEBPACK_IMPORTED_MODULE_0__["TableModule"],
            rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarRedModule"],
            rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarBrowserModule"],
            rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputButtonModule"],
            rfnglib__WEBPACK_IMPORTED_MODULE_0__["I18nModule"],
            rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputTextModule"],
            rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputTextAreaModule"],
            rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WikiModule, { declarations: [_wiki_component__WEBPACK_IMPORTED_MODULE_7__["WikiComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        rfnglib__WEBPACK_IMPORTED_MODULE_0__["ButtonModule"],
        rfnglib__WEBPACK_IMPORTED_MODULE_0__["CardModule"],
        rfnglib__WEBPACK_IMPORTED_MODULE_0__["PageModule"],
        rfnglib__WEBPACK_IMPORTED_MODULE_0__["TableModule"],
        rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarRedModule"],
        rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarBrowserModule"],
        rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputButtonModule"],
        rfnglib__WEBPACK_IMPORTED_MODULE_0__["I18nModule"],
        rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputTextModule"],
        rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputTextAreaModule"],
        rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputButtonModule"]], exports: [_wiki_component__WEBPACK_IMPORTED_MODULE_7__["WikiComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](WikiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_wiki_component__WEBPACK_IMPORTED_MODULE_7__["WikiComponent"]],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    rfnglib__WEBPACK_IMPORTED_MODULE_0__["ButtonModule"],
                    rfnglib__WEBPACK_IMPORTED_MODULE_0__["CardModule"],
                    rfnglib__WEBPACK_IMPORTED_MODULE_0__["PageModule"],
                    rfnglib__WEBPACK_IMPORTED_MODULE_0__["TableModule"],
                    rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarRedModule"],
                    rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarBrowserModule"],
                    rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputButtonModule"],
                    rfnglib__WEBPACK_IMPORTED_MODULE_0__["I18nModule"],
                    rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputTextModule"],
                    rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputTextAreaModule"],
                    rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputButtonModule"]
                ],
                providers: [src_app_services_masters_wiki_service__WEBPACK_IMPORTED_MODULE_6__["WikiService"], src_app_services_masters_proyect_service__WEBPACK_IMPORTED_MODULE_4__["ProyectService"], src_app_services_masters_tag_service__WEBPACK_IMPORTED_MODULE_5__["TagService"]],
                bootstrap: [_wiki_component__WEBPACK_IMPORTED_MODULE_7__["WikiComponent"]],
                exports: [
                    _wiki_component__WEBPACK_IMPORTED_MODULE_7__["WikiComponent"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();
const ɵWikiModule_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](WikiModule);


/***/ }),

/***/ "./src/app/services/masters/wiki.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/masters/wiki.service.ts ***!
  \**************************************************/
/*! exports provided: WikiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiService", function() { return WikiService; });
/* harmony import */ var rfnglib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rfnglib */ "./node_modules/rfnglib/fesm2015/rfnglib.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




/**
 * User service for load data from wiki
 */
class WikiService extends rfnglib__WEBPACK_IMPORTED_MODULE_0__["BaseService"] {
    constructor(rfngService, httpClient) {
        super(rfngService, httpClient, '/secure/wiki');
    }
}
WikiService.ɵfac = function WikiService_Factory(t) { return new (t || WikiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](rfnglib__WEBPACK_IMPORTED_MODULE_0__["RfngService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
WikiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WikiService, factory: WikiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WikiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [rfnglib__WEBPACK_IMPORTED_MODULE_0__["RfngService"]]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=masters-wiki-wiki-module-es2015.js.map