function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-note-note-module"], {
  /***/
  "./src/app/components/masters/note/note.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/masters/note/note.component.ts ***!
    \***********************************************************/

  /*! exports provided: NoteComponent */

  /***/
  function srcAppComponentsMastersNoteNoteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoteComponent", function () {
      return NoteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rfnglib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rfnglib */
    "./node_modules/rfnglib/fesm2015/rfnglib.js");
    /* harmony import */


    var src_app_services_masters_note_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/masters/note.service */
    "./src/app/services/masters/note.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function NoteComponent_ng_container_1_ng_template_4_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "rf-toolbarbrowser", 9);
      }

      if (rf & 2) {
        var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("baseController", ctx_r63)("renderTableViews", true);
      }
    }

    function NoteComponent_ng_container_1_ng_template_4_ng_template_3_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "rf-inputbutton", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "i18n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "i18n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "rf-inputbutton", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "i18n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "i18n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "rf-inputtext", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "i18n");
      }

      if (rf & 2) {
        var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", false)("required", false)("model", ctx_r65.filtersBrowser[0])("model2", ctx_r65.filtersBrowser[0])("property", "value_code")("max", 4)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 37, "rfpm.proyect.title"))("disabledButton", false)("componentView", "ProyectComponent")("serviceName", "ProyectService")("moduleView", "Masters")("titleSelect", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 39, "rfpm.proyect.select"))("name", "ProyectFilters_code" + ctx_r65.id)("property2", "value_description")("max2", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", false)("required", false)("model", ctx_r65.filtersBrowser[1])("model2", ctx_r65.filtersBrowser[1])("property", "value_code")("max", 4)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 41, "rfpm.tag.title"))("disabledButton", false)("componentView", "TagComponent")("serviceName", "TagService")("moduleView", "Masters")("titleSelect", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 43, "rfpm.tag.select"))("name", "TagFilters_code" + ctx_r65.id)("property2", "value_description")("max2", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", "descriptioFilter" + ctx_r65.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", false)("required", false)("model", ctx_r65.filtersBrowser[2])("property", "value")("max", 30)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 45, "rfng.description"));
      }
    }

    function NoteComponent_ng_container_1_ng_template_4_ng_template_3_ng_template_6_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var rowData_r68 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 14, "rfpm.proyect.title"), ": ", rowData_r68["Proyect"]["description"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 16, "rfpm.tag.title"), ": ", rowData_r68["Tag"]["description"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 18, "rfpm.columns.notes.userCreate"), ": ", rowData_r68["UserCreate"]["nick"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 20, "rfpm.columns.notes.userUpdate"), ": ", rowData_r68["UserUpdate"]["nick"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 22, "rfpm.columns.notes.createdAt"), ": ", rowData_r68["createdAt"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 24, "rfpm.columns.notes.updatedAt"), ": ", rowData_r68["updatedAt"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 26, "rfng.description"), ": ", rowData_r68["description"], " ");
      }
    }

    function NoteComponent_ng_container_1_ng_template_4_ng_template_3_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "rf-table", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NoteComponent_ng_container_1_ng_template_4_ng_template_3_ng_template_6_ng_template_1_Template, 22, 28, "ng-template", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r66.columns)("baseControllerLazyLoad", ctx_r66)("typeView", ctx_r66.tableView);
      }
    }

    function NoteComponent_ng_container_1_ng_template_4_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "rf-card", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "i18n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NoteComponent_ng_container_1_ng_template_4_ng_template_3_ng_template_3_Template, 8, 47, "ng-template", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "rf-card", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "i18n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NoteComponent_ng_container_1_ng_template_4_ng_template_3_ng_template_6_Template, 2, 3, "ng-template", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "rfng.filters"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, "rfpm.menu.notes"));
      }
    }

    function NoteComponent_ng_container_1_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "rf-toolbarpage");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NoteComponent_ng_container_1_ng_template_4_ng_template_1_Template, 1, 2, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "rf-bodypage");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NoteComponent_ng_container_1_ng_template_4_ng_template_3_Template, 7, 6, "ng-template", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function NoteComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 3, 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "rf-page", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NoteComponent_ng_container_1_ng_template_4_Template, 4, 0, "ng-template", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("idPage", ctx_r59.id);
      }
    }

    function NoteComponent_ng_container_2_form_1_ng_template_3_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "rf-toolbarred", 20);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

        var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("baseController", ctx_r72)("form", _r70);
      }
    }

    function NoteComponent_ng_container_2_form_1_ng_template_3_ng_template_3_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "rf-inputbutton", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "i18n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "i18n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "rf-inputbutton", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "i18n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "i18n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "rf-inputtext", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "i18n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "rf-inputtext", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "i18n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "rf-inputtext", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "i18n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "rf-inputtext", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "i18n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "rf-inputtextarea", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "i18n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r74.isStateRead())("required", true)("model", ctx_r74.element)("model2", ctx_r74.element)("property", "Proyect_code")("max", 4)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 66, "rfpm.proyect.title"))("disabledButton", ctx_r74.isStateRead())("componentView", "ProyectComponent")("serviceName", "ProyectService")("moduleView", "Masters")("titleSelect", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 68, "rfpm.proyect.select"))("name", "Proyect_code" + ctx_r74.id)("property2", "Proyect_description")("max2", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r74.isStateRead())("required", true)("model", ctx_r74.element)("model2", ctx_r74.element)("property", "Tag_code")("max", 4)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 70, "rfpm.tag.title"))("disabledButton", ctx_r74.isStateRead())("componentView", "TagComponent")("serviceName", "TagService")("moduleView", "Masters")("titleSelect", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 72, "rfpm.tag.select"))("name", "Tag_code" + ctx_r74.id)("property2", "Tag_description")("max2", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", "userCreate" + ctx_r74.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true)("required", true)("model", ctx_r74.element)("property", "UserCreate_nick")("max", 30)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 74, "rfpm.columns.notes.userCreate"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", "Update" + ctx_r74.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true)("required", true)("model", ctx_r74.element)("property", "UserUpdate_nick")("max", 30)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 76, "rfpm.columns.notes.userUpdate"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", "createdAt" + ctx_r74.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true)("required", true)("model", ctx_r74.element)("property", "createdAt")("max", 20)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 78, "rfpm.columns.notes.createdAt"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", "updatedAt" + ctx_r74.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true)("required", true)("model", ctx_r74.element)("property", "updatedAt")("max", 20)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 80, "rfpm.columns.notes.updatedAt"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", "description" + ctx_r74.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r74.isStateRead())("required", true)("model", ctx_r74.element)("property", "description")("cols", 200)("rows", 32)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 82, "rfng.description"));
      }
    }

    function NoteComponent_ng_container_2_form_1_ng_template_3_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "rf-card", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "i18n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NoteComponent_ng_container_2_form_1_ng_template_3_ng_template_3_ng_template_3_Template, 19, 84, "ng-template", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "rfng.general"))("styleBody", ctx_r73.styleCard());
      }
    }

    function NoteComponent_ng_container_2_form_1_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "rf-toolbarpage");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NoteComponent_ng_container_2_form_1_ng_template_3_ng_template_1_Template, 1, 2, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "rf-bodypage");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NoteComponent_ng_container_2_form_1_ng_template_3_ng_template_3_Template, 4, 4, "ng-template", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function NoteComponent_ng_container_2_form_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 3, 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "rf-page", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NoteComponent_ng_container_2_form_1_ng_template_3_Template, 4, 0, "ng-template", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("idPage", ctx_r69.id);
      }
    }

    function NoteComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NoteComponent_ng_container_2_form_1_Template, 4, 1, "form", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.isElementNotNull());
      }
    }

    var NoteComponent =
    /*#__PURE__*/
    function (_rfnglib__WEBPACK_IMP) {
      _inherits(NoteComponent, _rfnglib__WEBPACK_IMP);

      function NoteComponent(rfNgService, service) {
        var _this;

        _classCallCheck(this, NoteComponent);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(NoteComponent).call(this, rfNgService, service));
        _this.style = {};
        _this.oldColor = '';
        _this.tableView = 'Grid';
        return _this;
      }
      /**
       * Method to set default fetchs for find data
       */


      _createClass(NoteComponent, [{
        key: "setDefaulFetchs",
        value: function setDefaulFetchs() {
          this.defaultFetchs = [];
          this.defaultFetchs.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Fetch"]('Proyect', 'INNER'));
          this.defaultFetchs.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Fetch"]('Tag', 'INNER'));
          this.defaultFetchs.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Fetch"]('UserCreate', 'INNER'));
          this.defaultFetchs.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Fetch"]('UserUpdate', 'INNER'));
        }
        /**
         * Method for set filters on init
         */

      }, {
        key: "setFiltersBrowser",
        value: function setFiltersBrowser() {
          this.filtersBrowser = [];
          this.filtersBrowser.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Filter"]('proyectId', null, {
            id: null,
            code: null,
            description: null
          }, "and", null, "id"));
          this.filtersBrowser.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Filter"]('tagId', null, {
            id: null,
            code: null,
            description: null
          }, "and", null, "id"));
          this.filtersBrowser.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Filter"]('description', "like_all", null, "and", null));
        }
        /**
         * Load columns show in browser
         */

      }, {
        key: "loadColumns",
        value: function loadColumns() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.columns.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Column"]('Proyect_description', this.i18n('rfpm.columns.notes.proyect'), 150, true));
                    this.columns.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Column"]('Tag_description', this.i18n('rfpm.columns.notes.tag'), 150, true));
                    this.columns.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Column"]('UserCreate_nick', this.i18n('rfpm.columns.notes.userCreate'), 150, true));
                    this.columns.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Column"]('UserUpdate_nick', this.i18n('rfpm.columns.notes.userUpdate'), 150, true));
                    this.columns.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Column"]('createdAt', this.i18n('rfpm.columns.notes.createdAt'), 200, true));
                    this.columns.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Column"]('updatedAt', this.i18n('rfpm.columns.notes.updatedAt'), 200, true));
                    this.columns.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Column"]('description', this.i18n('rfpm.columns.notes.description'), 500, true));

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
        /**
         * Method for generate style for card
         */

      }, {
        key: "styleCard",
        value: function styleCard() {
          if (rfnglib__WEBPACK_IMPORTED_MODULE_2__["CommonsUtils"].isNotNull(this.element) && rfnglib__WEBPACK_IMPORTED_MODULE_2__["CommonsUtils"].isNotNull(this.element.Tag) && rfnglib__WEBPACK_IMPORTED_MODULE_2__["CommonsUtils"].isNotNull(this.element.Tag.color) && this.oldColor !== this.element.Tag.color) {
            this.oldColor = this.element.Tag.color;
            this.style = {
              'background-color': this.rfngService.convertHexColorToRgba(this.element.Tag.color, 0.5)
            };
          }

          return this.style;
        }
      }, {
        key: "styleRow",
        value: function styleRow(style, rowData) {
          if (rfnglib__WEBPACK_IMPORTED_MODULE_2__["CommonsUtils"].isNotNull(rowData) && rfnglib__WEBPACK_IMPORTED_MODULE_2__["CommonsUtils"].isNotNull(rowData.Tag) && rfnglib__WEBPACK_IMPORTED_MODULE_2__["CommonsUtils"].isNotNull(rowData.Tag.color)) {
            style['background-color'] = this.rfngService.convertHexColorToRgba(rowData.Tag.color, 0.5);
          }

          if (this.tableView === 'Grid') {
            style['width'] = '390px';
            style['height'] = '200px';
            style['overflow'] = 'auto';
          }

          return style;
        }
      }]);

      return NoteComponent;
    }(rfnglib__WEBPACK_IMPORTED_MODULE_2__["BaseRedControllerComponent"]);

    NoteComponent.ɵfac = function NoteComponent_Factory(t) {
      return new (t || NoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](rfnglib__WEBPACK_IMPORTED_MODULE_2__["RfngService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_masters_note_service__WEBPACK_IMPORTED_MODULE_3__["NoteService"]));
    };

    NoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NoteComponent,
      selectors: [["rfpm-note"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 2,
      consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["novalidate", "", 1, "floatLeftFullDiv"], ["frm", "ngForm"], [3, "idPage"], ["rfTemplate", "pageContent"], ["rfTemplate", "toolBarPageContent"], ["rfTemplate", "bodyPageContent"], [3, "baseController", "renderTableViews"], [1, "floatLeftFullDiv"], [3, "title"], ["rfTemplate", "cardContent"], [3, "disabled", "required", "model", "model2", "property", "max", "label", "disabledButton", "componentView", "serviceName", "moduleView", "titleSelect", "name", "property2", "max2"], [3, "name", "disabled", "required", "model", "property", "max", "label"], [3, "columns", "baseControllerLazyLoad", "typeView"], ["rfTemplate", "tableGridLine"], [1, "NoteGridLine"], [1, "NoteGridLineContent"], ["novalidate", "", "class", "floatLeftFullDiv", 4, "ngIf"], [3, "baseController", "form"], [3, "title", "styleBody"], [1, "floatLeftFullDivCard"], [2, "float", "left", "clear", "left"], [3, "name", "disabled", "required", "model", "property", "cols", "rows", "label"]],
      template: function NoteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NoteComponent_ng_container_1_Template, 5, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NoteComponent_ng_container_2_Template, 2, 1, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.enumStateAccess);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "list");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchDefault"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["PageComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["RFTemplateDirective"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["ToolBarPageComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["BodyPageComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["ToolBarBrowserComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["InputButtonComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["InputTextComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["TableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["ToolBarRedComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["InputTextAreaComponent"]],
      pipes: [rfnglib__WEBPACK_IMPORTED_MODULE_2__["I18nPipe"]],
      styles: [".NoteGridLine[_ngcontent-%COMP%]{\r\n  float: left;\r\n}\r\n\r\n.NoteGridLineContent[_ngcontent-%COMP%]{\r\n  float: left;\r\n  clear: left;\r\n  margin-top: 5px;\r\n  color: var(--rf-tableSumaryFontColor, #466289);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXN0ZXJzL25vdGUvbm90ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYXN0ZXJzL25vdGUvbm90ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLk5vdGVHcmlkTGluZXtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLk5vdGVHcmlkTGluZUNvbnRlbnR7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgY2xlYXI6IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGNvbG9yOiB2YXIoLS1yZi10YWJsZVN1bWFyeUZvbnRDb2xvciwgIzQ2NjI4OSk7XHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NoteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'rfpm-note',
          templateUrl: './note.component.html',
          styleUrls: ['./note.component.css']
        }]
      }], function () {
        return [{
          type: rfnglib__WEBPACK_IMPORTED_MODULE_2__["RfngService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [src_app_services_masters_note_service__WEBPACK_IMPORTED_MODULE_3__["NoteService"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/masters/note/note.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/masters/note/note.module.ts ***!
    \********************************************************/

  /*! exports provided: NoteModule */

  /***/
  function srcAppComponentsMastersNoteNoteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoteModule", function () {
      return NoteModule;
    });
    /* harmony import */


    var rfnglib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rfnglib */
    "./node_modules/rfnglib/fesm2015/rfnglib.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _note_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./note.component */
    "./src/app/components/masters/note/note.component.ts");
    /* harmony import */


    var src_app_services_masters_note_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/masters/note.service */
    "./src/app/services/masters/note.service.ts");
    /* harmony import */


    var src_app_services_masters_proyect_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/masters/proyect.service */
    "./src/app/services/masters/proyect.service.ts");
    /* harmony import */


    var src_app_services_masters_tag_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/masters/tag.service */
    "./src/app/services/masters/tag.service.ts");

    var NoteModule =
    /*#__PURE__*/
    function (_rfnglib__WEBPACK_IMP2) {
      _inherits(NoteModule, _rfnglib__WEBPACK_IMP2);

      function NoteModule() {
        _classCallCheck(this, NoteModule);

        return _possibleConstructorReturn(this, _getPrototypeOf(NoteModule).apply(this, arguments));
      }

      return NoteModule;
    }(rfnglib__WEBPACK_IMPORTED_MODULE_0__["BaseModule"]);

    NoteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: NoteModule,
      bootstrap: [_note_component__WEBPACK_IMPORTED_MODULE_4__["NoteComponent"]]
    });
    NoteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function NoteModule_Factory(t) {
        return ɵNoteModule_BaseFactory(t || NoteModule);
      },
      providers: [src_app_services_masters_note_service__WEBPACK_IMPORTED_MODULE_5__["NoteService"], src_app_services_masters_proyect_service__WEBPACK_IMPORTED_MODULE_6__["ProyectService"], src_app_services_masters_tag_service__WEBPACK_IMPORTED_MODULE_7__["TagService"]],
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ButtonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["CardModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["PageModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["TableModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarRedModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarBrowserModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputButtonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["I18nModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputTextModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputTextAreaModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputButtonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NoteModule, {
        declarations: [_note_component__WEBPACK_IMPORTED_MODULE_4__["NoteComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ButtonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["CardModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["PageModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["TableModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarRedModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarBrowserModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputButtonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["I18nModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputTextModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputTextAreaModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputButtonModule"]],
        exports: [_note_component__WEBPACK_IMPORTED_MODULE_4__["NoteComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NoteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_note_component__WEBPACK_IMPORTED_MODULE_4__["NoteComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ButtonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["CardModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["PageModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["TableModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarRedModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarBrowserModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputButtonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["I18nModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputTextModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputTextAreaModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputButtonModule"]],
          providers: [src_app_services_masters_note_service__WEBPACK_IMPORTED_MODULE_5__["NoteService"], src_app_services_masters_proyect_service__WEBPACK_IMPORTED_MODULE_6__["ProyectService"], src_app_services_masters_tag_service__WEBPACK_IMPORTED_MODULE_7__["TagService"]],
          bootstrap: [_note_component__WEBPACK_IMPORTED_MODULE_4__["NoteComponent"]],
          exports: [_note_component__WEBPACK_IMPORTED_MODULE_4__["NoteComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
        }]
      }], null, null);
    })();

    var ɵNoteModule_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](NoteModule);
    /***/

  },

  /***/
  "./src/app/services/masters/note.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/masters/note.service.ts ***!
    \**************************************************/

  /*! exports provided: NoteService */

  /***/
  function srcAppServicesMastersNoteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoteService", function () {
      return NoteService;
    });
    /* harmony import */


    var rfnglib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rfnglib */
    "./node_modules/rfnglib/fesm2015/rfnglib.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /**
     * User service for load data from note
     */


    var NoteService =
    /*#__PURE__*/
    function (_rfnglib__WEBPACK_IMP3) {
      _inherits(NoteService, _rfnglib__WEBPACK_IMP3);

      function NoteService(rfngService, httpClient) {
        _classCallCheck(this, NoteService);

        return _possibleConstructorReturn(this, _getPrototypeOf(NoteService).call(this, rfngService, httpClient, '/secure/note'));
      }

      return NoteService;
    }(rfnglib__WEBPACK_IMPORTED_MODULE_0__["BaseService"]);

    NoteService.ɵfac = function NoteService_Factory(t) {
      return new (t || NoteService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](rfnglib__WEBPACK_IMPORTED_MODULE_0__["RfngService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    NoteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: NoteService,
      factory: NoteService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NoteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [rfnglib__WEBPACK_IMPORTED_MODULE_0__["RfngService"]]
          }]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=masters-note-note-module-es5.js.map