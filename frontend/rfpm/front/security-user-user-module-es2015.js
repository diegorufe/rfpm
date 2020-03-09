(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["security-user-user-module"],{

/***/ "./src/app/components/security/user/user.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/security/user/user.component.ts ***!
  \************************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rfnglib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rfnglib */ "./node_modules/rfnglib/fesm2015/rfnglib.js");
/* harmony import */ var src_app_services_security_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/security/user.service */ "./src/app/services/security/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _userrole_userrole_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../userrole/userrole.component */ "./src/app/components/security/userrole/userrole.component.ts");









function UserComponent_ng_container_1_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "rf-toolbarbrowser", 7);
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("baseController", ctx_r18);
} }
function UserComponent_ng_container_1_ng_template_2_ng_template_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "rf-table", 11);
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r20.columns)("baseControllerLazyLoad", ctx_r20);
} }
function UserComponent_ng_container_1_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "rf-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserComponent_ng_container_1_ng_template_2_ng_template_3_ng_template_3_Template, 1, 2, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "rfpm.menu.users"));
} }
function UserComponent_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "rf-toolbarpage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserComponent_ng_container_1_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "rf-bodypage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserComponent_ng_container_1_ng_template_2_ng_template_3_Template, 4, 3, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "rf-page", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserComponent_ng_container_1_ng_template_2_Template, 4, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("idPage", ctx_r15.id);
} }
function UserComponent_ng_container_2_form_1_ng_template_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "rf-toolbarred", 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("baseController", ctx_r24)("form", _r22);
} }
function UserComponent_ng_container_2_form_1_ng_template_3_ng_template_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "rf-inputtext", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "rf-inputpassword", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", "nick" + ctx_r26.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r26.isStateRead())("required", true)("model", ctx_r26.element)("property", "nick")("max", 50)("label", "Nick");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", "password" + ctx_r26.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r26.isStateRead())("required", false)("model", ctx_r26.element)("property", "passwordChange")("max", 50)("label", "Password");
} }
function UserComponent_ng_container_2_form_1_ng_template_3_ng_template_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "rfpm-userrole", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("userId", ctx_r27.element.id);
} }
function UserComponent_ng_container_2_form_1_ng_template_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "rf-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserComponent_ng_container_2_form_1_ng_template_3_ng_template_3_ng_template_3_Template, 3, 14, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UserComponent_ng_container_2_form_1_ng_template_3_ng_template_3_ng_container_4_Template, 2, 1, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "rfng.general"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r25.enumStateAccess === "read");
} }
function UserComponent_ng_container_2_form_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "rf-toolbarpage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserComponent_ng_container_2_form_1_ng_template_3_ng_template_1_Template, 1, 2, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "rf-bodypage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserComponent_ng_container_2_form_1_ng_template_3_ng_template_3_Template, 5, 4, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserComponent_ng_container_2_form_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "rf-page", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserComponent_ng_container_2_form_1_ng_template_3_Template, 4, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("idPage", ctx_r21.id);
} }
function UserComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserComponent_ng_container_2_form_1_Template, 4, 1, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.isElementNotNull());
} }
class UserComponent extends rfnglib__WEBPACK_IMPORTED_MODULE_2__["BaseRedControllerComponent"] {
    constructor(rfNgService, service) {
        super(rfNgService, service);
    }
    /**
     * Load columns show in browser
     */
    loadColumns() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.columns.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Column"]('nick', 'Nick', 300, true));
        });
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](rfnglib__WEBPACK_IMPORTED_MODULE_2__["RfngService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_security_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["rfpm-user"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "idPage"], ["rfTemplate", "pageContent"], ["rfTemplate", "toolBarPageContent"], ["rfTemplate", "bodyPageContent"], [3, "baseController"], [1, "floatLeftFullDiv"], [3, "title"], ["rfTemplate", "cardContent"], [3, "columns", "baseControllerLazyLoad"], ["novalidate", "", "class", "floatLeftFullDiv", 4, "ngIf"], ["novalidate", "", 1, "floatLeftFullDiv"], ["frm", "ngForm"], [3, "baseController", "form"], [4, "ngIf"], [1, "floatLeftFullDivCard"], [3, "name", "disabled", "required", "model", "property", "max", "label"], [3, "userId"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.enumStateAccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "list");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchDefault"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["PageComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["RFTemplateDirective"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["ToolBarPageComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["BodyPageComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["ToolBarBrowserComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["TableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["ToolBarRedComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["InputTextComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["InputPasswordComponent"], _userrole_userrole_component__WEBPACK_IMPORTED_MODULE_6__["UserRoleComponent"]], pipes: [rfnglib__WEBPACK_IMPORTED_MODULE_2__["I18nPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdXJpdHkvdXNlci91c2VyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'rfpm-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.css']
            }]
    }], function () { return [{ type: rfnglib__WEBPACK_IMPORTED_MODULE_2__["RfngService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [src_app_services_security_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/security/user/user.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/security/user/user.module.ts ***!
  \*********************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var rfnglib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rfnglib */ "./node_modules/rfnglib/fesm2015/rfnglib.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.component */ "./src/app/components/security/user/user.component.ts");
/* harmony import */ var src_app_services_security_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/security/user.service */ "./src/app/services/security/user.service.ts");
/* harmony import */ var _userrole_userrole_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../userrole/userrole.module */ "./src/app/components/security/userrole/userrole.module.ts");








class UserModule extends rfnglib__WEBPACK_IMPORTED_MODULE_0__["BaseModule"] {
}
UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UserModule, bootstrap: [_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]] });
UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function UserModule_Factory(t) { return ɵUserModule_BaseFactory(t || UserModule); }, providers: [src_app_services_security_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]], imports: [[
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
            rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputPasswordModule"],
            _userrole_userrole_module__WEBPACK_IMPORTED_MODULE_6__["UserRoleModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
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
        rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputPasswordModule"],
        _userrole_userrole_module__WEBPACK_IMPORTED_MODULE_6__["UserRoleModule"]], exports: [_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]],
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
                    rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputPasswordModule"],
                    _userrole_userrole_module__WEBPACK_IMPORTED_MODULE_6__["UserRoleModule"]
                ],
                providers: [src_app_services_security_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]],
                bootstrap: [_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]],
                exports: [
                    _user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();
const ɵUserModule_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](UserModule);


/***/ }),

/***/ "./src/app/components/security/userrole/userrole.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/security/userrole/userrole.component.ts ***!
  \********************************************************************/
/*! exports provided: UserRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleComponent", function() { return UserRoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rfnglib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rfnglib */ "./node_modules/rfnglib/fesm2015/rfnglib.js");
/* harmony import */ var src_app_services_security_userrole_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/security/userrole.service */ "./src/app/services/security/userrole.service.ts");






function UserRoleComponent_ng_template_1_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserRoleComponent_ng_template_1_ng_template_1_ng_template_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r32.prepareAddRole(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "rf-tooltip", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "rfng.toolbar.goAdd"));
} }
function UserRoleComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "rf-toolbarbrowser", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserRoleComponent_ng_template_1_ng_template_1_ng_template_1_Template, 4, 3, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("baseController", ctx_r29)("renderAdd", false)("renderApplyFilters", false)("renderResetFilters", false);
} }
function UserRoleComponent_ng_template_1_ng_template_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "rf-table", 12);
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r34.columns)("baseControllerLazyLoad", ctx_r34)("renderDelete", true)("renderEdit", false)("renderRead", false);
} }
function UserRoleComponent_ng_template_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "rf-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserRoleComponent_ng_template_1_ng_template_3_ng_template_3_Template, 1, 5, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "rfpm.roles"));
} }
function UserRoleComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "rf-toolbarpage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserRoleComponent_ng_template_1_ng_template_1_Template, 2, 4, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "rf-bodypage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserRoleComponent_ng_template_1_ng_template_3_Template, 4, 3, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class UserRoleComponent extends rfnglib__WEBPACK_IMPORTED_MODULE_2__["BaseRedControllerComponent"] {
    constructor(rfNgService, service) {
        super(rfNgService, service);
    }
    ngOnChanges(changes) {
        // On change load datable for user
        this.loadDataTable();
    }
    /**
     * Method to set default fetchs for find data
     */
    setDefaulFetchs() {
        this.defaultFetchs = [];
        this.defaultFetchs.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Fetch"]('Role', 'INNER'));
    }
    setDefaultFilters() {
        this.defaultFilters = [];
        this.defaultFilters.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Filter"]('userId', null, this.userId, "and", null, null));
    }
    /**
     * Load columns show in browser
     */
    loadColumns() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.columns.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Column"]('Role_name', this.i18n('rfng.name'), 300, true));
        });
    }
    /**
     * Method prepare add role
     */
    prepareAddRole() {
        const params = {};
        // Add function on select table
        params[rfnglib__WEBPACK_IMPORTED_MODULE_2__["ConstantsModals"].KEY_MODAL_COMPONENT_PARAM_BEAN_SELECT_TABLE] = this;
        params[rfnglib__WEBPACK_IMPORTED_MODULE_2__["ConstantsModals"].KEY_MODAL_COMPONENT_PARAM_FUNCTION_SELECT_TABLE] = 'addRole';
        this.rfngService.addModal(this.i18n('rfpm.role.select'), 'RoleComponent', 'Security', rfnglib__WEBPACK_IMPORTED_MODULE_2__["CommonsUtils"].isNotNull(this.tab), params);
    }
    /**
     * Method for add role
     * @param entity
     */
    addRole(entity) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.rfngService.hideToolTips();
            try {
                if (rfnglib__WEBPACK_IMPORTED_MODULE_2__["CommonsUtils"].isNotNull(entity)) {
                    let data = { userId: this.userId, roleId: entity.id };
                    let response = yield this.service.add(data);
                    if (rfnglib__WEBPACK_IMPORTED_MODULE_2__["CommonsUtils"].isNotNull(response) && response.status === 200) {
                        this.addMessageSucces(this.i18n('rfng.red.save.success'));
                        this.loadDataTable();
                    }
                }
            }
            catch (ex) {
            }
        });
    }
}
UserRoleComponent.ɵfac = function UserRoleComponent_Factory(t) { return new (t || UserRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](rfnglib__WEBPACK_IMPORTED_MODULE_2__["RfngService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_security_userrole_service__WEBPACK_IMPORTED_MODULE_3__["UserRoleService"])); };
UserRoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserRoleComponent, selectors: [["rfpm-userrole"]], inputs: { userId: "userId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()], decls: 2, vars: 1, consts: [[3, "idPage"], ["rfTemplate", "pageContent"], ["rfTemplate", "toolBarPageContent"], ["rfTemplate", "bodyPageContent"], [3, "baseController", "renderAdd", "renderApplyFilters", "renderResetFilters"], ["rfTemplate", "afterContent"], ["type", "button", 1, "ToolBarButtonsDefault", 3, "click"], [3, "value"], [1, "fas", "fa-plus"], [1, "floatLeftFullDiv"], [3, "title"], ["rfTemplate", "cardContent"], [3, "columns", "baseControllerLazyLoad", "renderDelete", "renderEdit", "renderRead"]], template: function UserRoleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "rf-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserRoleComponent_ng_template_1_Template, 4, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("idPage", ctx.id);
    } }, directives: [rfnglib__WEBPACK_IMPORTED_MODULE_2__["PageComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["RFTemplateDirective"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["ToolBarPageComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["BodyPageComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["ToolBarBrowserComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["ToolTipComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["TableComponent"]], pipes: [rfnglib__WEBPACK_IMPORTED_MODULE_2__["I18nPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdXJpdHkvdXNlcnJvbGUvdXNlcnJvbGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserRoleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'rfpm-userrole',
                templateUrl: './userrole.component.html',
                styleUrls: ['./userrole.component.css']
            }]
    }], function () { return [{ type: rfnglib__WEBPACK_IMPORTED_MODULE_2__["RfngService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [src_app_services_security_userrole_service__WEBPACK_IMPORTED_MODULE_3__["UserRoleService"]]
            }] }]; }, { userId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/security/userrole/userrole.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/security/userrole/userrole.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserRoleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleModule", function() { return UserRoleModule; });
/* harmony import */ var rfnglib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rfnglib */ "./node_modules/rfnglib/fesm2015/rfnglib.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_security_userrole_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/security/userrole.service */ "./src/app/services/security/userrole.service.ts");
/* harmony import */ var _userrole_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userrole.component */ "./src/app/components/security/userrole/userrole.component.ts");







class UserRoleModule extends rfnglib__WEBPACK_IMPORTED_MODULE_0__["BaseModule"] {
}
UserRoleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UserRoleModule, bootstrap: [_userrole_component__WEBPACK_IMPORTED_MODULE_5__["UserRoleComponent"]] });
UserRoleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function UserRoleModule_Factory(t) { return ɵUserRoleModule_BaseFactory(t || UserRoleModule); }, providers: [src_app_services_security_userrole_service__WEBPACK_IMPORTED_MODULE_4__["UserRoleService"]], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            rfnglib__WEBPACK_IMPORTED_MODULE_0__["ButtonModule"],
            rfnglib__WEBPACK_IMPORTED_MODULE_0__["CardModule"],
            rfnglib__WEBPACK_IMPORTED_MODULE_0__["PageModule"],
            rfnglib__WEBPACK_IMPORTED_MODULE_0__["TableModule"],
            rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarBrowserModule"],
            rfnglib__WEBPACK_IMPORTED_MODULE_0__["I18nModule"],
            rfnglib__WEBPACK_IMPORTED_MODULE_0__["TooltipModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UserRoleModule, { declarations: [_userrole_component__WEBPACK_IMPORTED_MODULE_5__["UserRoleComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        rfnglib__WEBPACK_IMPORTED_MODULE_0__["ButtonModule"],
        rfnglib__WEBPACK_IMPORTED_MODULE_0__["CardModule"],
        rfnglib__WEBPACK_IMPORTED_MODULE_0__["PageModule"],
        rfnglib__WEBPACK_IMPORTED_MODULE_0__["TableModule"],
        rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarBrowserModule"],
        rfnglib__WEBPACK_IMPORTED_MODULE_0__["I18nModule"],
        rfnglib__WEBPACK_IMPORTED_MODULE_0__["TooltipModule"]], exports: [_userrole_component__WEBPACK_IMPORTED_MODULE_5__["UserRoleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UserRoleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_userrole_component__WEBPACK_IMPORTED_MODULE_5__["UserRoleComponent"]],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    rfnglib__WEBPACK_IMPORTED_MODULE_0__["ButtonModule"],
                    rfnglib__WEBPACK_IMPORTED_MODULE_0__["CardModule"],
                    rfnglib__WEBPACK_IMPORTED_MODULE_0__["PageModule"],
                    rfnglib__WEBPACK_IMPORTED_MODULE_0__["TableModule"],
                    rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarBrowserModule"],
                    rfnglib__WEBPACK_IMPORTED_MODULE_0__["I18nModule"],
                    rfnglib__WEBPACK_IMPORTED_MODULE_0__["TooltipModule"]
                ],
                providers: [src_app_services_security_userrole_service__WEBPACK_IMPORTED_MODULE_4__["UserRoleService"]],
                bootstrap: [_userrole_component__WEBPACK_IMPORTED_MODULE_5__["UserRoleComponent"]],
                exports: [
                    _userrole_component__WEBPACK_IMPORTED_MODULE_5__["UserRoleComponent"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();
const ɵUserRoleModule_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](UserRoleModule);


/***/ }),

/***/ "./src/app/services/security/userrole.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/security/userrole.service.ts ***!
  \*******************************************************/
/*! exports provided: UserRoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleService", function() { return UserRoleService; });
/* harmony import */ var rfnglib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rfnglib */ "./node_modules/rfnglib/fesm2015/rfnglib.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




/**
 * User service for load data from user role
 */
class UserRoleService extends rfnglib__WEBPACK_IMPORTED_MODULE_0__["BaseService"] {
    constructor(rfngService, httpClient) {
        super(rfngService, httpClient, '/secure/userrole');
    }
}
UserRoleService.ɵfac = function UserRoleService_Factory(t) { return new (t || UserRoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](rfnglib__WEBPACK_IMPORTED_MODULE_0__["RfngService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserRoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserRoleService, factory: UserRoleService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserRoleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [rfnglib__WEBPACK_IMPORTED_MODULE_0__["RfngService"]]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=security-user-user-module-es2015.js.map