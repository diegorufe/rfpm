(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-proyect-proyect-module"],{

/***/ "./src/app/components/masters/proyect/proyect.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/masters/proyect/proyect.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProyectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectComponent", function() { return ProyectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rfnglib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rfnglib */ "./node_modules/rfnglib/fesm2015/rfnglib.js");
/* harmony import */ var src_app_services_masters_proyect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/masters/proyect.service */ "./src/app/services/masters/proyect.service.ts");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









function ProyectComponent_ng_container_1_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "rf-toolbarbrowser", 7);
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("baseController", ctx_r38)("renderAdd", ctx_r38.appService.isAdmin());
} }
function ProyectComponent_ng_container_1_ng_template_2_ng_template_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "rf-table", 11);
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r40.columns)("baseControllerLazyLoad", ctx_r40)("renderEdit", ctx_r40.appService.isAdmin())("renderDelete", ctx_r40.appService.isAdmin())("renderRead", ctx_r40.appService.isAdmin());
} }
function ProyectComponent_ng_container_1_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "rf-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProyectComponent_ng_container_1_ng_template_2_ng_template_3_ng_template_3_Template, 1, 5, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "rfpm.menu.proyects"));
} }
function ProyectComponent_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "rf-toolbarpage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProyectComponent_ng_container_1_ng_template_2_ng_template_1_Template, 1, 2, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "rf-bodypage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProyectComponent_ng_container_1_ng_template_2_ng_template_3_Template, 4, 3, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProyectComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "rf-page", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProyectComponent_ng_container_1_ng_template_2_Template, 4, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("idPage", ctx_r35.id);
} }
function ProyectComponent_ng_container_2_form_1_ng_template_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "rf-toolbarred", 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("baseController", ctx_r44)("form", _r42);
} }
function ProyectComponent_ng_container_2_form_1_ng_template_3_ng_template_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "rf-inputtext", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "rf-inputtext", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", "code" + ctx_r46.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r46.isStateRead())("required", true)("model", ctx_r46.element)("property", "code")("max", 4)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 14, "rfng.code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", "description" + ctx_r46.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r46.isStateRead())("required", true)("model", ctx_r46.element)("property", "description")("max", 100)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 16, "rfng.description"));
} }
function ProyectComponent_ng_container_2_form_1_ng_template_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "rf-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProyectComponent_ng_container_2_form_1_ng_template_3_ng_template_3_ng_template_3_Template, 5, 18, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "rfng.general"));
} }
function ProyectComponent_ng_container_2_form_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "rf-toolbarpage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProyectComponent_ng_container_2_form_1_ng_template_3_ng_template_1_Template, 1, 2, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "rf-bodypage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProyectComponent_ng_container_2_form_1_ng_template_3_ng_template_3_Template, 4, 3, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProyectComponent_ng_container_2_form_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "rf-page", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProyectComponent_ng_container_2_form_1_ng_template_3_Template, 4, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("idPage", ctx_r41.id);
} }
function ProyectComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProyectComponent_ng_container_2_form_1_Template, 4, 1, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r36.isElementNotNull());
} }
class ProyectComponent extends rfnglib__WEBPACK_IMPORTED_MODULE_2__["BaseRedControllerComponent"] {
    constructor(rfNgService, service, appService) {
        super(rfNgService, service);
        this.appService = appService;
    }
    /**
     * Load columns show in browser
     */
    loadColumns() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.columns.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Column"]('code', this.i18n('rfpm.columns.proyects.code'), 150, true));
            this.columns.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Column"]('description', this.i18n('rfpm.columns.proyects.description'), 400, true));
        });
    }
}
ProyectComponent.ɵfac = function ProyectComponent_Factory(t) { return new (t || ProyectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](rfnglib__WEBPACK_IMPORTED_MODULE_2__["RfngService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_masters_proyect_service__WEBPACK_IMPORTED_MODULE_3__["ProyectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"])); };
ProyectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProyectComponent, selectors: [["rfpm-proyect"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "idPage"], ["rfTemplate", "pageContent"], ["rfTemplate", "toolBarPageContent"], ["rfTemplate", "bodyPageContent"], [3, "baseController", "renderAdd"], [1, "floatLeftFullDiv"], [3, "title"], ["rfTemplate", "cardContent"], [3, "columns", "baseControllerLazyLoad", "renderEdit", "renderDelete", "renderRead"], ["novalidate", "", "class", "floatLeftFullDiv", 4, "ngIf"], ["novalidate", "", 1, "floatLeftFullDiv"], ["frm", "ngForm"], [3, "baseController", "form"], [1, "floatLeftFullDivCard"], [3, "name", "disabled", "required", "model", "property", "max", "label"]], template: function ProyectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProyectComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProyectComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.enumStateAccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "list");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchDefault"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["PageComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["RFTemplateDirective"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["ToolBarPageComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["BodyPageComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["ToolBarBrowserComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["TableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["ToolBarRedComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["InputTextComponent"]], pipes: [rfnglib__WEBPACK_IMPORTED_MODULE_2__["I18nPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFzdGVycy9wcm95ZWN0L3Byb3llY3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProyectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'rfpm-proyect',
                templateUrl: './proyect.component.html',
                styleUrls: ['./proyect.component.css']
            }]
    }], function () { return [{ type: rfnglib__WEBPACK_IMPORTED_MODULE_2__["RfngService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [src_app_services_masters_proyect_service__WEBPACK_IMPORTED_MODULE_3__["ProyectService"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/masters/proyect/proyect.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/masters/proyect/proyect.module.ts ***!
  \**************************************************************/
/*! exports provided: ProyectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectModule", function() { return ProyectModule; });
/* harmony import */ var rfnglib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rfnglib */ "./node_modules/rfnglib/fesm2015/rfnglib.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _proyect_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proyect.component */ "./src/app/components/masters/proyect/proyect.component.ts");
/* harmony import */ var src_app_services_masters_proyect_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/masters/proyect.service */ "./src/app/services/masters/proyect.service.ts");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");








class ProyectModule extends rfnglib__WEBPACK_IMPORTED_MODULE_0__["BaseModule"] {
}
ProyectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProyectModule, bootstrap: [_proyect_component__WEBPACK_IMPORTED_MODULE_4__["ProyectComponent"]] });
ProyectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ProyectModule_Factory(t) { return ɵProyectModule_BaseFactory(t || ProyectModule); }, providers: [src_app_services_masters_proyect_service__WEBPACK_IMPORTED_MODULE_5__["ProyectService"], src_app_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]], imports: [[
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
            rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputTextModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProyectModule, { declarations: [_proyect_component__WEBPACK_IMPORTED_MODULE_4__["ProyectComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
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
        rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputTextModule"]], exports: [_proyect_component__WEBPACK_IMPORTED_MODULE_4__["ProyectComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ProyectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_proyect_component__WEBPACK_IMPORTED_MODULE_4__["ProyectComponent"]],
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
                    rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputTextModule"]
                ],
                providers: [src_app_services_masters_proyect_service__WEBPACK_IMPORTED_MODULE_5__["ProyectService"], src_app_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]],
                bootstrap: [_proyect_component__WEBPACK_IMPORTED_MODULE_4__["ProyectComponent"]],
                exports: [
                    _proyect_component__WEBPACK_IMPORTED_MODULE_4__["ProyectComponent"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();
const ɵProyectModule_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ProyectModule);


/***/ })

}]);
//# sourceMappingURL=masters-proyect-proyect-module-es2015.js.map