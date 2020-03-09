function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["security-role-role-module"], {
  /***/
  "./src/app/components/security/role/role.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/security/role/role.component.ts ***!
    \************************************************************/

  /*! exports provided: RoleComponent */

  /***/
  function srcAppComponentsSecurityRoleRoleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleComponent", function () {
      return RoleComponent;
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


    var src_app_services_security_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/security/role.service */
    "./src/app/services/security/role.service.ts");

    function RoleComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "rf-toolbarbrowser", 4);
      }

      if (rf & 2) {
        var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("baseController", ctx_r92)("renderAdd", false)("renderApplyFilters", false)("renderResetFilters", false);
      }
    }

    function RoleComponent_ng_template_1_ng_template_3_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "rf-table", 8);
      }

      if (rf & 2) {
        var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r94.columns)("baseControllerLazyLoad", ctx_r94)("renderDelete", false)("renderEdit", false)("renderRead", false);
      }
    }

    function RoleComponent_ng_template_1_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "rf-card", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "i18n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RoleComponent_ng_template_1_ng_template_3_ng_template_3_Template, 1, 5, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "rfpm.roles"));
      }
    }

    function RoleComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "rf-toolbarpage");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RoleComponent_ng_template_1_ng_template_1_Template, 1, 4, "ng-template", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "rf-bodypage");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RoleComponent_ng_template_1_ng_template_3_Template, 4, 3, "ng-template", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var RoleComponent =
    /*#__PURE__*/
    function (_rfnglib__WEBPACK_IMP) {
      _inherits(RoleComponent, _rfnglib__WEBPACK_IMP);

      function RoleComponent(rfNgService, service) {
        _classCallCheck(this, RoleComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(RoleComponent).call(this, rfNgService, service));
      }
      /**
       * Load columns show in browser
       */


      _createClass(RoleComponent, [{
        key: "loadColumns",
        value: function loadColumns() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.columns.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Column"]('name', this.i18n('rfng.name'), 300, true));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return RoleComponent;
    }(rfnglib__WEBPACK_IMPORTED_MODULE_2__["BaseRedControllerComponent"]);

    RoleComponent.ɵfac = function RoleComponent_Factory(t) {
      return new (t || RoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](rfnglib__WEBPACK_IMPORTED_MODULE_2__["RfngService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_security_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]));
    };

    RoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RoleComponent,
      selectors: [["rfpm-role"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 1,
      consts: [[3, "idPage"], ["rfTemplate", "pageContent"], ["rfTemplate", "toolBarPageContent"], ["rfTemplate", "bodyPageContent"], [3, "baseController", "renderAdd", "renderApplyFilters", "renderResetFilters"], [1, "floatLeftFullDiv"], [3, "title"], ["rfTemplate", "cardContent"], [3, "columns", "baseControllerLazyLoad", "renderDelete", "renderEdit", "renderRead"]],
      template: function RoleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "rf-page", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RoleComponent_ng_template_1_Template, 4, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("idPage", ctx.id);
        }
      },
      directives: [rfnglib__WEBPACK_IMPORTED_MODULE_2__["PageComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["RFTemplateDirective"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["ToolBarPageComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["BodyPageComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["ToolBarBrowserComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["TableComponent"]],
      pipes: [rfnglib__WEBPACK_IMPORTED_MODULE_2__["I18nPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdXJpdHkvcm9sZS9yb2xlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RoleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'rfpm-role',
          templateUrl: './role.component.html',
          styleUrls: ['./role.component.css']
        }]
      }], function () {
        return [{
          type: rfnglib__WEBPACK_IMPORTED_MODULE_2__["RfngService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [src_app_services_security_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/security/role/role.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/security/role/role.module.ts ***!
    \*********************************************************/

  /*! exports provided: RoleModule */

  /***/
  function srcAppComponentsSecurityRoleRoleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleModule", function () {
      return RoleModule;
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


    var _role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./role.component */
    "./src/app/components/security/role/role.component.ts");
    /* harmony import */


    var src_app_services_security_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/security/role.service */
    "./src/app/services/security/role.service.ts");

    var RoleModule =
    /*#__PURE__*/
    function (_rfnglib__WEBPACK_IMP2) {
      _inherits(RoleModule, _rfnglib__WEBPACK_IMP2);

      function RoleModule() {
        _classCallCheck(this, RoleModule);

        return _possibleConstructorReturn(this, _getPrototypeOf(RoleModule).apply(this, arguments));
      }

      return RoleModule;
    }(rfnglib__WEBPACK_IMPORTED_MODULE_0__["BaseModule"]);

    RoleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: RoleModule,
      bootstrap: [_role_component__WEBPACK_IMPORTED_MODULE_4__["RoleComponent"]]
    });
    RoleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function RoleModule_Factory(t) {
        return ɵRoleModule_BaseFactory(t || RoleModule);
      },
      providers: [src_app_services_security_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"]],
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ButtonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["CardModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["PageModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["TableModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarRedModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarBrowserModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["I18nModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RoleModule, {
        declarations: [_role_component__WEBPACK_IMPORTED_MODULE_4__["RoleComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ButtonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["CardModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["PageModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["TableModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarRedModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarBrowserModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["I18nModule"]],
        exports: [_role_component__WEBPACK_IMPORTED_MODULE_4__["RoleComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RoleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_role_component__WEBPACK_IMPORTED_MODULE_4__["RoleComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ButtonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["CardModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["PageModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["TableModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarRedModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarBrowserModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["I18nModule"]],
          providers: [src_app_services_security_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"]],
          bootstrap: [_role_component__WEBPACK_IMPORTED_MODULE_4__["RoleComponent"]],
          exports: [_role_component__WEBPACK_IMPORTED_MODULE_4__["RoleComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
        }]
      }], null, null);
    })();

    var ɵRoleModule_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](RoleModule);
    /***/

  },

  /***/
  "./src/app/services/security/role.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/security/role.service.ts ***!
    \***************************************************/

  /*! exports provided: RoleService */

  /***/
  function srcAppServicesSecurityRoleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleService", function () {
      return RoleService;
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
     * User service for load data from role
     */


    var RoleService =
    /*#__PURE__*/
    function (_rfnglib__WEBPACK_IMP3) {
      _inherits(RoleService, _rfnglib__WEBPACK_IMP3);

      function RoleService(rfngService, httpClient) {
        _classCallCheck(this, RoleService);

        return _possibleConstructorReturn(this, _getPrototypeOf(RoleService).call(this, rfngService, httpClient, '/secure/role'));
      }

      return RoleService;
    }(rfnglib__WEBPACK_IMPORTED_MODULE_0__["BaseService"]);

    RoleService.ɵfac = function RoleService_Factory(t) {
      return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](rfnglib__WEBPACK_IMPORTED_MODULE_0__["RfngService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    RoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: RoleService,
      factory: RoleService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RoleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
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
//# sourceMappingURL=security-role-role-module-es5.js.map