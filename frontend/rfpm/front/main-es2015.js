(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.js":
/*!**********************************!*\
  !*** ./src/app/app.component.js ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rfnglib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rfnglib */ "./node_modules/rfnglib/fesm2015/rfnglib.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function AppComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "RFPM", " ");
} }
function AppComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_2_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.clickUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "rfng.user"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.appService.getNickUser());
} }
function AppComponent_ng_template_3_ng_container_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rf-menuitem", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "i18n");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "rfpm.menu.users"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("level", 1);
} }
function AppComponent_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "rf-menuitem", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_template_3_ng_container_0_ng_template_3_Template, 2, 4, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "rfpm.menu.security"));
} }
function AppComponent_ng_template_3_ng_template_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rf-menuitem", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "rfpm.menu.proyects"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("level", 1);
} }
function AppComponent_ng_template_3_ng_template_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rf-menuitem", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "rfpm.menu.tags"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("level", 1);
} }
function AppComponent_ng_template_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rf-menuitem", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_template_3_ng_template_3_ng_container_2_Template, 3, 4, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rf-menuitem", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_ng_template_3_ng_template_3_ng_container_5_Template, 3, 4, "ng-container", 7);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 6, "rfpm.menu.notes"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("level", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.appService.isAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, "rfpm.menu.wiki"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("level", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.appService.isAdmin());
} }
function AppComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_template_3_ng_container_0_Template, 4, 3, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "rf-menuitem", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_template_3_ng_template_3_Template, 6, 10, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.appService.isAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "rfpm.menu.masters"));
} }
class AppComponent extends rfnglib__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(rfngService, appService, cd, el) {
        super(rfngService);
        this.cd = cd;
        this.el = el;
        this.appService = appService;
    }
    /**
     * Function execute when login if succes
     * @param rfNgService
     * @param data
     * @param params
     */
    functionPostLogin(rfNgService, data, params) {
        if (rfnglib__WEBPACK_IMPORTED_MODULE_1__["CommonsUtils"].isNotNull(data)) {
            rfNgService.addDataInSession(data.data);
        }
    }
    /**
     * Event produce when click user top
     */
    clickUser() {
        const params = {};
        params[rfnglib__WEBPACK_IMPORTED_MODULE_1__["ConstantsModals"].KEY_MODAL_COMPONENT_PARAM_STYLE_CLASS_MODAL] = 'UserProfileModal';
        this.rfngService.addModal(this.i18n('rfpm.userProfile.title'), 'UserProfileComponent', 'Security', false, params);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](rfnglib__WEBPACK_IMPORTED_MODULE_1__["RfngService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 1, consts: [[3, "fnPostLogin"], ["rfTemplate", "headerLeft"], ["rfTemplate", "headerBody"], ["rfTemplate", "menuContent"], [1, "RfpmTitle"], [1, "RfpmUser"], [3, "click"], [4, "ngIf"], [3, "label"], ["rfTemplate", "menuItemContent"], ["componentView", "UserComponent", "module", "Security", 3, "label", "level"], ["componentView", "NoteComponent", "module", "Masters", 3, "label", "level"], ["componentView", "WikiComponent", "module", "Masters", 3, "label", "level"], ["componentView", "ProyectComponent", "module", "Masters", 3, "label", "level"], ["componentView", "TagComponent", "module", "Masters", 3, "label", "level"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rf-app", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_template_1_Template, 2, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_template_2_Template, 5, 4, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_template_3_Template, 4, 4, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fnPostLogin", ctx.functionPostLogin);
    } }, directives: [rfnglib__WEBPACK_IMPORTED_MODULE_1__["BaseAppComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_1__["RFTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], rfnglib__WEBPACK_IMPORTED_MODULE_1__["MenuItemComponent"]], pipes: [rfnglib__WEBPACK_IMPORTED_MODULE_1__["I18nPipe"]], styles: [".RfpmTitle[_ngcontent-%COMP%] {\r\n  float: left;\r\n  font-size: 24px;\r\n  margin-top: 10px;\r\n  margin-left: 5px;\r\n  color: white;\r\n  font-weight: bold;\r\n  font-family: initial;\r\n}\r\n\r\n.RfpmUser[_ngcontent-%COMP%] {\r\n  float: right;\r\n  color: white;\r\n  font-size: 16px;\r\n  margin-right: 20px;\r\n  margin-top: 13px;\r\n}\r\n\r\n.RfpmUser[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlJmcG1UaXRsZSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6IGluaXRpYWw7XHJcbn1cclxuXHJcbi5SZnBtVXNlciB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEzcHg7XHJcbn1cclxuXHJcbi5SZnBtVXNlciA+IGEge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [rfnglib__WEBPACK_IMPORTED_MODULE_1__["RfngService"]]
            }] }, { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var rfnglib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rfnglib */ "./node_modules/rfnglib/fesm2015/rfnglib.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component.js */ "./src/app/app.component.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_service_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.service.js */ "./src/app/app.service.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_config_config_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/config/config.app */ "./src/app/components/config/config.app.ts");










class AppModule extends rfnglib__WEBPACK_IMPORTED_MODULE_0__["BaseModule"] {
    constructor(rfngService) {
        super();
        // Load config for application
        Object(_components_config_config_app__WEBPACK_IMPORTED_MODULE_8__["configApp"])(rfngService);
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component_js__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](rfnglib__WEBPACK_IMPORTED_MODULE_0__["RfngService"])); }, providers: [_app_service_js__WEBPACK_IMPORTED_MODULE_6__["AppService"],
        // Http interceptor
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
            useClass: rfnglib__WEBPACK_IMPORTED_MODULE_0__["SecurityInterceptor"],
            multi: true
        },
        // Error interceptor
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"],
            useClass: rfnglib__WEBPACK_IMPORTED_MODULE_0__["GlobalErrorInterceptor"]
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            rfnglib__WEBPACK_IMPORTED_MODULE_0__["RfnglibModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component_js__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        rfnglib__WEBPACK_IMPORTED_MODULE_0__["RfnglibModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component_js__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    rfnglib__WEBPACK_IMPORTED_MODULE_0__["RfnglibModule"],
                ],
                providers: [_app_service_js__WEBPACK_IMPORTED_MODULE_6__["AppService"],
                    // Http interceptor
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                        useClass: rfnglib__WEBPACK_IMPORTED_MODULE_0__["SecurityInterceptor"],
                        multi: true
                    },
                    // Error interceptor
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"],
                        useClass: rfnglib__WEBPACK_IMPORTED_MODULE_0__["GlobalErrorInterceptor"]
                    }
                ],
                bootstrap: [_app_component_js__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [rfnglib__WEBPACK_IMPORTED_MODULE_0__["RfngService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.service.js":
/*!********************************!*\
  !*** ./src/app/app.service.js ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rfnglib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rfnglib */ "./node_modules/rfnglib/fesm2015/rfnglib.js");



class AppService {
    constructor(rfngService) {
        this.rfngService = rfngService;
    }
    /**
     * Method to know is admin role
     */
    isAdmin() {
        let valid = false;
        try {
            const dataSession = this.rfngService.getDataInSession();
            if (rfnglib__WEBPACK_IMPORTED_MODULE_1__["CommonsUtils"].isNotNull(dataSession)) {
                const roles = dataSession['roles'];
                if (rfnglib__WEBPACK_IMPORTED_MODULE_1__["CommonsUtils"].arrayNotNull(roles)) {
                    for (let i = 0; i < roles.length; i++) {
                        if (roles[i].name === 'ADMIN') {
                            valid = true;
                            break;
                        }
                    }
                }
            }
        }
        catch (ex) {
        }
        return valid;
    }
    /**
     * Method for get nick form user
     */
    getNickUser() {
        let nick = "";
        try {
            const dataSession = this.rfngService.getDataInSession();
            if (rfnglib__WEBPACK_IMPORTED_MODULE_1__["CommonsUtils"].isNotNull(dataSession)) {
                nick = dataSession['nick'];
            }
        }
        catch (ex) {
        }
        return nick;
    }
    /**
     * Method for get user id
     */
    getUserId() {
        let userId = -999;
        try {
            const dataSession = this.rfngService.getDataInSession();
            if (rfnglib__WEBPACK_IMPORTED_MODULE_1__["CommonsUtils"].isNotNull(dataSession)) {
                userId = dataSession['userId'];
            }
        }
        catch (ex) {
        }
        return userId;
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](rfnglib__WEBPACK_IMPORTED_MODULE_1__["RfngService"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [rfnglib__WEBPACK_IMPORTED_MODULE_1__["RfngService"]]
            }] }]; }, null); })();
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rfnglib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rfnglib */ "./node_modules/rfnglib/fesm2015/rfnglib.js");



class AppService {
    constructor(rfngService) {
        this.rfngService = rfngService;
    }
    /**
     * Method to know is admin role
     */
    isAdmin() {
        let valid = false;
        try {
            const dataSession = this.rfngService.getDataInSession();
            if (rfnglib__WEBPACK_IMPORTED_MODULE_1__["CommonsUtils"].isNotNull(dataSession)) {
                const roles = dataSession['roles'];
                if (rfnglib__WEBPACK_IMPORTED_MODULE_1__["CommonsUtils"].arrayNotNull(roles)) {
                    for (let i = 0; i < roles.length; i++) {
                        if (roles[i].name === 'ADMIN') {
                            valid = true;
                            break;
                        }
                    }
                }
            }
        }
        catch (ex) {
        }
        return valid;
    }
    /**
     * Method for get nick form user
     */
    getNickUser() {
        let nick = "";
        try {
            const dataSession = this.rfngService.getDataInSession();
            if (rfnglib__WEBPACK_IMPORTED_MODULE_1__["CommonsUtils"].isNotNull(dataSession)) {
                nick = dataSession['nick'];
            }
        }
        catch (ex) {
        }
        return nick;
    }
    /**
     * Method for get user id
     */
    getUserId() {
        let userId = -999;
        try {
            const dataSession = this.rfngService.getDataInSession();
            if (rfnglib__WEBPACK_IMPORTED_MODULE_1__["CommonsUtils"].isNotNull(dataSession)) {
                userId = dataSession['userId'];
            }
        }
        catch (ex) {
        }
        return userId;
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](rfnglib__WEBPACK_IMPORTED_MODULE_1__["RfngService"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [rfnglib__WEBPACK_IMPORTED_MODULE_1__["RfngService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/config/config.app.ts":
/*!*************************************************!*\
  !*** ./src/app/components/config/config.app.ts ***!
  \*************************************************/
/*! exports provided: configApp, loadI18n, loadServices, loadMapModalsLazyImports, loadMapLazyImports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configApp", function() { return configApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadI18n", function() { return loadI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadServices", function() { return loadServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMapModalsLazyImports", function() { return loadMapModalsLazyImports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMapLazyImports", function() { return loadMapLazyImports; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rfnglib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rfnglib */ "./node_modules/rfnglib/fesm2015/rfnglib.js");
/* harmony import */ var _i18n_locales_en_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../i18n/locales/en.json */ "./src/app/i18n/locales/en.json");
var _i18n_locales_en_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../i18n/locales/en.json */ "./src/app/i18n/locales/en.json", 1);
/* harmony import */ var src_app_services_masters_proyect_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/masters/proyect.service.js */ "./src/app/services/masters/proyect.service.js");
/* harmony import */ var src_app_services_masters_tag_service_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/masters/tag.service.js */ "./src/app/services/masters/tag.service.js");





function configApp(rfngService) {
    // load i18n
    loadI18n(rfngService);
    // Load map lazy import
    rfngService.addMapLazyImports(loadMapLazyImports(rfngService));
    // Load map modals lazy import
    rfngService.addMapModalsLazyImport(loadMapModalsLazyImports(rfngService));
    // Load services
    loadServices(rfngService);
}
/**
 * Méthod for load i18n for aplication
 * @param rfngService
 */
function loadI18n(rfngService) {
    rfngService.i18nService.addTranslations([{ "en": _i18n_locales_en_json__WEBPACK_IMPORTED_MODULE_2__ }]);
    rfngService.titleApp = rfngService.i18nService.translate('rfpm.title', null);
}
/**
 * Method for load services
 * @param rfngService
 */
function loadServices(rfngService) {
    // Proyect service
    rfngService.addServiceClassName('ProyectService', () => {
        return rfngService.resolveService(src_app_services_masters_proyect_service_js__WEBPACK_IMPORTED_MODULE_3__["ProyectService"]);
    });
    // Tag service
    rfngService.addServiceClassName('TagService', () => {
        return rfngService.resolveService(src_app_services_masters_tag_service_js__WEBPACK_IMPORTED_MODULE_4__["TagService"]);
    });
}
/**
 * Method for load map modals lazy imports
 * @param rfngService
 */
function loadMapModalsLazyImports(rfngService) {
    return {
        "UserProfileComponent": new rfnglib__WEBPACK_IMPORTED_MODULE_1__["LazyImport"](() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const module = yield Promise.all(/*! import() | security-modals-userprofile-userprofile-module */[__webpack_require__.e("common"), __webpack_require__.e("security-modals-userprofile-userprofile-module")]).then(__webpack_require__.bind(null, /*! ./../security/modals/userprofile/userprofile.module */ "./src/app/components/security/modals/userprofile/userprofile.module.ts"));
            return module.UserProfileModule;
        }))
    };
}
/**
 * Method for load map lazy imports
 * @param rfngService
 */
function loadMapLazyImports(rfngService) {
    return {
        "UserComponent": new rfnglib__WEBPACK_IMPORTED_MODULE_1__["LazyImport"](() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const module = yield Promise.all(/*! import() | security-user-user-module */[__webpack_require__.e("common"), __webpack_require__.e("security-user-user-module")]).then(__webpack_require__.bind(null, /*! ./../security/user/user.module */ "./src/app/components/security/user/user.module.ts"));
            return module.UserModule;
        })),
        "ProyectComponent": new rfnglib__WEBPACK_IMPORTED_MODULE_1__["LazyImport"](() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const module = yield Promise.all(/*! import() | masters-proyect-proyect-module */[__webpack_require__.e("common"), __webpack_require__.e("masters-proyect-proyect-module")]).then(__webpack_require__.bind(null, /*! ./../masters/proyect/proyect.module */ "./src/app/components/masters/proyect/proyect.module.ts"));
            return module.ProyectModule;
        })),
        "TagComponent": new rfnglib__WEBPACK_IMPORTED_MODULE_1__["LazyImport"](() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const module = yield Promise.all(/*! import() | masters-tag-tag-module */[__webpack_require__.e("common"), __webpack_require__.e("masters-tag-tag-module")]).then(__webpack_require__.bind(null, /*! ./../masters/tag/tag.module */ "./src/app/components/masters/tag/tag.module.ts"));
            return module.TagModule;
        })),
        "NoteComponent": new rfnglib__WEBPACK_IMPORTED_MODULE_1__["LazyImport"](() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const module = yield Promise.all(/*! import() | masters-note-note-module */[__webpack_require__.e("common"), __webpack_require__.e("masters-note-note-module")]).then(__webpack_require__.bind(null, /*! ./../masters/note/note.module */ "./src/app/components/masters/note/note.module.ts"));
            return module.NoteModule;
        })),
        "WikiComponent": new rfnglib__WEBPACK_IMPORTED_MODULE_1__["LazyImport"](() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const module = yield Promise.all(/*! import() | masters-wiki-wiki-module */[__webpack_require__.e("common"), __webpack_require__.e("masters-wiki-wiki-module")]).then(__webpack_require__.bind(null, /*! ./../masters/wiki/wiki.module */ "./src/app/components/masters/wiki/wiki.module.ts"));
            return module.WikiModule;
        })),
        "RoleComponent": new rfnglib__WEBPACK_IMPORTED_MODULE_1__["LazyImport"](() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const module = yield __webpack_require__.e(/*! import() | security-role-role-module */ "security-role-role-module").then(__webpack_require__.bind(null, /*! ./../security/role/role.module */ "./src/app/components/security/role/role.module.ts"));
            return module.RoleModule;
        }))
    };
}


/***/ }),

/***/ "./src/app/i18n/locales/en.json":
/*!**************************************!*\
  !*** ./src/app/i18n/locales/en.json ***!
  \**************************************/
/*! exports provided: rfpm, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"rfpm\":{\"title\":\"RFPM\",\"roles\":\"Roles\",\"menu\":{\"security\":\"Security\",\"masters\":\"Masters\",\"users\":\"Users\",\"proyects\":\"Proyects\",\"tags\":\"Tags\",\"notes\":\"Notes\",\"wiki\":\"Wiki\"},\"proyect\":{\"title\":\"Proyect\",\"select\":\"Select proyect\"},\"tag\":{\"title\":\"Tag\",\"select\":\"Select tag\"},\"role\":{\"select\":\"Select role\"},\"columns\":{\"proyects\":{\"code\":\"Code\",\"description\":\"Descriptión\"},\"notes\":{\"proyect\":\"Proyect\",\"tag\":\"Tag\",\"description\":\"Descriptión\",\"userCreate\":\"User create\",\"userUpdate\":\"User update\",\"createdAt\":\"Created at\",\"updatedAt\":\"Updated at\"},\"wiki\":{\"proyect\":\"Proyect\",\"title\":\"Title\",\"description\":\"Descriptión\",\"userCreate\":\"User create\",\"userUpdate\":\"User update\",\"createdAt\":\"Created at\",\"updatedAt\":\"Updated at\"}},\"userProfile\":{\"title\":\"User profile\",\"save\":{\"success\":\"User profile saved successfully\",\"error\":\"An error occurred while saving the user's profile\"}}}}");

/***/ }),

/***/ "./src/app/services/masters/proyect.service.js":
/*!*****************************************************!*\
  !*** ./src/app/services/masters/proyect.service.js ***!
  \*****************************************************/
/*! exports provided: ProyectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectService", function() { return ProyectService; });
/* harmony import */ var rfnglib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rfnglib */ "./node_modules/rfnglib/fesm2015/rfnglib.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




/**
 * User service for load data from proyect
 */
class ProyectService extends rfnglib__WEBPACK_IMPORTED_MODULE_0__["BaseService"] {
    constructor(rfngService, httpClient) {
        super(rfngService, httpClient, '/secure/proyect');
    }
}
ProyectService.ɵfac = function ProyectService_Factory(t) { return new (t || ProyectService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](rfnglib__WEBPACK_IMPORTED_MODULE_0__["RfngService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProyectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProyectService, factory: ProyectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProyectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [rfnglib__WEBPACK_IMPORTED_MODULE_0__["RfngService"]]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();
//# sourceMappingURL=proyect.service.js.map

/***/ }),

/***/ "./src/app/services/masters/tag.service.js":
/*!*************************************************!*\
  !*** ./src/app/services/masters/tag.service.js ***!
  \*************************************************/
/*! exports provided: TagService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagService", function() { return TagService; });
/* harmony import */ var rfnglib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rfnglib */ "./node_modules/rfnglib/fesm2015/rfnglib.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




/**
 * User service for load data from tag
 */
class TagService extends rfnglib__WEBPACK_IMPORTED_MODULE_0__["BaseService"] {
    constructor(rfngService, httpClient) {
        super(rfngService, httpClient, '/secure/tag');
    }
}
TagService.ɵfac = function TagService_Factory(t) { return new (t || TagService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](rfnglib__WEBPACK_IMPORTED_MODULE_0__["RfngService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TagService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TagService, factory: TagService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [rfnglib__WEBPACK_IMPORTED_MODULE_0__["RfngService"]]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();
//# sourceMappingURL=tag.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\trabajo\repos\rfpm\frontend\rfpm\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map