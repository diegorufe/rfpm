function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-tag-tag-module"], {
  /***/
  "./src/app/components/masters/tag/tag.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/masters/tag/tag.component.ts ***!
    \*********************************************************/

  /*! exports provided: TagComponent */

  /***/
  function srcAppComponentsMastersTagTagComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagComponent", function () {
      return TagComponent;
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


    var src_app_services_masters_tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/masters/tag.service */
    "./src/app/services/masters/tag.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function TagComponent_ng_container_1_ng_template_2_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "rf-toolbarbrowser", 7);
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("baseController", ctx_r50);
      }
    }

    function TagComponent_ng_container_1_ng_template_2_ng_template_3_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "rf-table", 11);
      }

      if (rf & 2) {
        var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r52.columns)("baseControllerLazyLoad", ctx_r52);
      }
    }

    function TagComponent_ng_container_1_ng_template_2_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "rf-card", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "i18n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TagComponent_ng_container_1_ng_template_2_ng_template_3_ng_template_3_Template, 1, 2, "ng-template", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "rfpm.menu.tags"));
      }
    }

    function TagComponent_ng_container_1_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "rf-toolbarpage");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TagComponent_ng_container_1_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "rf-bodypage");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TagComponent_ng_container_1_ng_template_2_ng_template_3_Template, 4, 3, "ng-template", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function TagComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "rf-page", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TagComponent_ng_container_1_ng_template_2_Template, 4, 0, "ng-template", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("idPage", ctx_r47.id);
      }
    }

    function TagComponent_ng_container_2_form_1_ng_template_3_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "rf-toolbarred", 15);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

        var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("baseController", ctx_r56)("form", _r54);
      }
    }

    function TagComponent_ng_container_2_form_1_ng_template_3_ng_template_3_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "rf-inputtext", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "i18n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "rf-inputtext", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "i18n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "rf-inputcolor", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "i18n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", "code" + ctx_r58.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r58.isStateRead())("required", true)("model", ctx_r58.element)("property", "code")("max", 4)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 19, "rfng.code"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", "description" + ctx_r58.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r58.isStateRead())("required", true)("model", ctx_r58.element)("property", "description")("max", 100)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 21, "rfng.description"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", "color" + ctx_r58.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r58.isStateRead())("model", ctx_r58.element)("property", "color")("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 23, "rfng.color"));
      }
    }

    function TagComponent_ng_container_2_form_1_ng_template_3_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "rf-card", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "i18n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TagComponent_ng_container_2_form_1_ng_template_3_ng_template_3_ng_template_3_Template, 7, 25, "ng-template", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "rfng.general"))("styleBody", ctx_r57.styleCard());
      }
    }

    function TagComponent_ng_container_2_form_1_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "rf-toolbarpage");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TagComponent_ng_container_2_form_1_ng_template_3_ng_template_1_Template, 1, 2, "ng-template", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "rf-bodypage");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TagComponent_ng_container_2_form_1_ng_template_3_ng_template_3_Template, 4, 4, "ng-template", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function TagComponent_ng_container_2_form_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 13, 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "rf-page", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TagComponent_ng_container_2_form_1_ng_template_3_Template, 4, 0, "ng-template", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("idPage", ctx_r53.id);
      }
    }

    function TagComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TagComponent_ng_container_2_form_1_Template, 4, 1, "form", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r48.isElementNotNull());
      }
    }

    var TagComponent =
    /*#__PURE__*/
    function (_rfnglib__WEBPACK_IMP) {
      _inherits(TagComponent, _rfnglib__WEBPACK_IMP);

      function TagComponent(rfNgService, service) {
        var _this;

        _classCallCheck(this, TagComponent);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(TagComponent).call(this, rfNgService, service));
        _this.style = {};
        _this.oldColor = '';
        return _this;
      }
      /**
       * Load columns show in browser
       */


      _createClass(TagComponent, [{
        key: "loadColumns",
        value: function loadColumns() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.columns.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Column"]('code', this.i18n('rfpm.columns.proyects.code'), 150, true));
                    this.columns.push(new rfnglib__WEBPACK_IMPORTED_MODULE_2__["Column"]('description', this.i18n('rfpm.columns.proyects.description'), 600, true));

                  case 2:
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
          if (rfnglib__WEBPACK_IMPORTED_MODULE_2__["CommonsUtils"].isNotNull(this.element) && rfnglib__WEBPACK_IMPORTED_MODULE_2__["CommonsUtils"].isNotNull(this.element) && rfnglib__WEBPACK_IMPORTED_MODULE_2__["CommonsUtils"].isNotNull(this.element.color) && this.oldColor !== this.element.color) {
            this.oldColor = this.element.color;
            this.style = {
              'background-color': this.rfngService.convertHexColorToRgba(this.element.color, 0.5)
            };
          }

          return this.style;
        }
      }, {
        key: "styleRow",
        value: function styleRow(style, rowData) {
          if (rfnglib__WEBPACK_IMPORTED_MODULE_2__["CommonsUtils"].isNotNull(rowData) && rfnglib__WEBPACK_IMPORTED_MODULE_2__["CommonsUtils"].isNotNull(rowData.color)) {
            style['background-color'] = this.rfngService.convertHexColorToRgba(rowData.color, 0.5);
          }

          return style;
        }
      }]);

      return TagComponent;
    }(rfnglib__WEBPACK_IMPORTED_MODULE_2__["BaseRedControllerComponent"]);

    TagComponent.ɵfac = function TagComponent_Factory(t) {
      return new (t || TagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](rfnglib__WEBPACK_IMPORTED_MODULE_2__["RfngService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_masters_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"]));
    };

    TagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TagComponent,
      selectors: [["rfpm-tag"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 2,
      consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "idPage"], ["rfTemplate", "pageContent"], ["rfTemplate", "toolBarPageContent"], ["rfTemplate", "bodyPageContent"], [3, "baseController"], [1, "floatLeftFullDiv"], [3, "title"], ["rfTemplate", "cardContent"], [3, "columns", "baseControllerLazyLoad"], ["novalidate", "", "class", "floatLeftFullDiv", 4, "ngIf"], ["novalidate", "", 1, "floatLeftFullDiv"], ["frm", "ngForm"], [3, "baseController", "form"], [3, "title", "styleBody"], [1, "floatLeftFullDivCard"], [3, "name", "disabled", "required", "model", "property", "max", "label"], [3, "name", "disabled", "model", "property", "label"]],
      template: function TagComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TagComponent_ng_container_1_Template, 3, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TagComponent_ng_container_2_Template, 2, 1, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.enumStateAccess);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "list");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchDefault"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["PageComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["RFTemplateDirective"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["ToolBarPageComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["BodyPageComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["ToolBarBrowserComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["TableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["ToolBarRedComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["InputTextComponent"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["InputColorComponent"]],
      pipes: [rfnglib__WEBPACK_IMPORTED_MODULE_2__["I18nPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFzdGVycy90YWcvdGFnLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'rfpm-tag',
          templateUrl: './tag.component.html',
          styleUrls: ['./tag.component.css']
        }]
      }], function () {
        return [{
          type: rfnglib__WEBPACK_IMPORTED_MODULE_2__["RfngService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [src_app_services_masters_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/masters/tag/tag.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/components/masters/tag/tag.module.ts ***!
    \******************************************************/

  /*! exports provided: TagModule */

  /***/
  function srcAppComponentsMastersTagTagModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagModule", function () {
      return TagModule;
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


    var _tag_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tag.component */
    "./src/app/components/masters/tag/tag.component.ts");
    /* harmony import */


    var src_app_services_masters_tag_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/masters/tag.service */
    "./src/app/services/masters/tag.service.ts");

    var TagModule =
    /*#__PURE__*/
    function (_rfnglib__WEBPACK_IMP2) {
      _inherits(TagModule, _rfnglib__WEBPACK_IMP2);

      function TagModule() {
        _classCallCheck(this, TagModule);

        return _possibleConstructorReturn(this, _getPrototypeOf(TagModule).apply(this, arguments));
      }

      return TagModule;
    }(rfnglib__WEBPACK_IMPORTED_MODULE_0__["BaseModule"]);

    TagModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: TagModule,
      bootstrap: [_tag_component__WEBPACK_IMPORTED_MODULE_4__["TagComponent"]]
    });
    TagModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function TagModule_Factory(t) {
        return ɵTagModule_BaseFactory(t || TagModule);
      },
      providers: [src_app_services_masters_tag_service__WEBPACK_IMPORTED_MODULE_5__["TagService"]],
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ButtonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["CardModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["PageModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["TableModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarRedModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarBrowserModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputButtonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["I18nModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputTextModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputColorModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TagModule, {
        declarations: [_tag_component__WEBPACK_IMPORTED_MODULE_4__["TagComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ButtonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["CardModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["PageModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["TableModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarRedModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarBrowserModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputButtonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["I18nModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputTextModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputColorModule"]],
        exports: [_tag_component__WEBPACK_IMPORTED_MODULE_4__["TagComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TagModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_tag_component__WEBPACK_IMPORTED_MODULE_4__["TagComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ButtonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["CardModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["PageModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["TableModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarRedModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["ToolBarBrowserModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputButtonModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["I18nModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputTextModule"], rfnglib__WEBPACK_IMPORTED_MODULE_0__["InputColorModule"]],
          providers: [src_app_services_masters_tag_service__WEBPACK_IMPORTED_MODULE_5__["TagService"]],
          bootstrap: [_tag_component__WEBPACK_IMPORTED_MODULE_4__["TagComponent"]],
          exports: [_tag_component__WEBPACK_IMPORTED_MODULE_4__["TagComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
        }]
      }], null, null);
    })();

    var ɵTagModule_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](TagModule);
    /***/

  }
}]);
//# sourceMappingURL=masters-tag-tag-module-es5.js.map