function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["security-modals-userprofile-userprofile-module"], {
  /***/
  "./src/app/components/security/modals/userprofile/userprofile.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/security/modals/userprofile/userprofile.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppComponentsSecurityModalsUserprofileUserprofileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
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


    var src_app_services_security_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/security/user.service */
    "./src/app/services/security/user.service.ts");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var UserProfileComponent =
    /*#__PURE__*/
    function (_rfnglib__WEBPACK_IMP) {
      _inherits(UserProfileComponent, _rfnglib__WEBPACK_IMP);

      function UserProfileComponent(rfngService, userService, appService) {
        var _this;

        _classCallCheck(this, UserProfileComponent);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(UserProfileComponent).call(this, rfngService));
        _this.userService = userService;
        _this.appService = appService;
        _this.password = null;
        return _this;
      }

      _createClass(UserProfileComponent, [{
        key: "actionSave",
        value: function actionSave(form) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var valid, data, response;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.rfngService.showWaitStatus(this.tab);

                    if (!(rfnglib__WEBPACK_IMPORTED_MODULE_2__["CommonsUtils"].isNotNull(form.invalid) && form.invalid === true)) {
                      _context.next = 6;
                      break;
                    }

                    this.rfngService.hideWaitStatus();
                    this.showFormValidationErrors(form);
                    _context.next = 22;
                    break;

                  case 6:
                    valid = true;
                    _context.prev = 7;
                    data = {
                      userId: this.appService.getUserId(),
                      password: this.password
                    };
                    _context.next = 11;
                    return this.userService.editUserProfile(data);

                  case 11:
                    response = _context.sent;

                    if (rfnglib__WEBPACK_IMPORTED_MODULE_2__["CommonsUtils"].isNotNull(response) && response.status === 200) {
                      valid = true;
                    } else {
                      valid = false;
                    }

                    this.rfngService.hideWaitStatus(this.tab);
                    _context.next = 19;
                    break;

                  case 16:
                    _context.prev = 16;
                    _context.t0 = _context["catch"](7);
                    valid = false;

                  case 19:
                    if (valid) {
                      this.addMessageSucces(this.i18n('rfpm.userProfile.save.success'));
                    } else {
                      this.addMessageError(this.i18n('rfpm.userProfile.save.error'));
                    }

                    this.rfngService.hideWaitStatus();
                    this.closeModal();

                  case 22:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[7, 16]]);
          }));
        }
      }]);

      return UserProfileComponent;
    }(rfnglib__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

    UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) {
      return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](rfnglib__WEBPACK_IMPORTED_MODULE_2__["RfngService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_security_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]));
    };

    UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UserProfileComponent,
      selectors: [["rfpm-userprofile"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 7,
      consts: [["novalidate", "", 1, "FullContainer"], ["frm", "ngForm"], [1, "UserProfileMessage"], [3, "name", "disabled", "required", "model", "property", "max", "label"], [1, "UserProfileAcctions"], [1, "UserProfileButton", "UserProfileAcctionsAcctionsFirst", 3, "click"], [1, "far", "fa-thumbs-up"]],
      template: function UserProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "rf-inputpassword", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserProfileComponent_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            return ctx.actionSave(_r13.control);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", "password" + ctx.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", false)("required", true)("model", ctx)("property", "password")("max", 50)("label", "Password");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["InputPasswordComponent"]],
      styles: [".UserProfileMessage[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  float: left;\r\n  clear: left;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  color: var(--rf-fontColor, #466289);\r\n}\r\n\r\n.UserProfileAcctions[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  width: 100%;\r\n  float: left;\r\n  clear: left;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  border-top: 1px solid var(--rf-fontColor, #466289);\r\n}\r\n\r\n.UserProfileAcctionsAcctionsFirst[_ngcontent-%COMP%]{\r\n  margin-left: 42%;\r\n}\r\n\r\n.UserProfileButton[_ngcontent-%COMP%]{\r\n  width: 30px;\r\n  height: 30px;\r\n  color: var(--rf-buttonColor, #466289);\r\n  background-color: transparent;\r\n  border: none;\r\n  float: left;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWN1cml0eS9tb2RhbHMvdXNlcnByb2ZpbGUvdXNlcnByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsa0RBQWtEO0FBQ3BEOztBQUdBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdXJpdHkvbW9kYWxzL3VzZXJwcm9maWxlL3VzZXJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLlVzZXJQcm9maWxlTWVzc2FnZXtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBjbGVhcjogbGVmdDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6IHZhcigtLXJmLWZvbnRDb2xvciwgIzQ2NjI4OSk7XHJcbn1cclxuXHJcbi5Vc2VyUHJvZmlsZUFjY3Rpb25ze1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgY2xlYXI6IGxlZnQ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tcmYtZm9udENvbG9yLCAjNDY2Mjg5KTtcclxufVxyXG5cclxuXHJcbi5Vc2VyUHJvZmlsZUFjY3Rpb25zQWNjdGlvbnNGaXJzdHtcclxuICBtYXJnaW4tbGVmdDogNDIlO1xyXG59XHJcblxyXG4uVXNlclByb2ZpbGVCdXR0b257XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1yZi1idXR0b25Db2xvciwgIzQ2NjI4OSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'rfpm-userprofile',
          templateUrl: './userprofile.component.html',
          styleUrls: ['./userprofile.component.css']
        }]
      }], function () {
        return [{
          type: rfnglib__WEBPACK_IMPORTED_MODULE_2__["RfngService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [src_app_services_security_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/security/modals/userprofile/userprofile.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/security/modals/userprofile/userprofile.module.ts ***!
    \******************************************************************************/

  /*! exports provided: UserProfileModule */

  /***/
  function srcAppComponentsSecurityModalsUserprofileUserprofileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileModule", function () {
      return UserProfileModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rfnglib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rfnglib */
    "./node_modules/rfnglib/fesm2015/rfnglib.js");
    /* harmony import */


    var _userprofile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./userprofile.component */
    "./src/app/components/security/modals/userprofile/userprofile.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_security_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/security/user.service */
    "./src/app/services/security/user.service.ts");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");

    var UserProfileModule =
    /*#__PURE__*/
    function (_rfnglib__WEBPACK_IMP2) {
      _inherits(UserProfileModule, _rfnglib__WEBPACK_IMP2);

      function UserProfileModule() {
        _classCallCheck(this, UserProfileModule);

        return _possibleConstructorReturn(this, _getPrototypeOf(UserProfileModule).apply(this, arguments));
      }

      return UserProfileModule;
    }(rfnglib__WEBPACK_IMPORTED_MODULE_2__["BaseModule"]);

    UserProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserProfileModule
    });
    UserProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserProfileModule_Factory(t) {
        return ɵUserProfileModule_BaseFactory(t || UserProfileModule);
      },
      providers: [src_app_services_security_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], src_app_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["I18nModule"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["TooltipModule"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["InputPasswordModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserProfileModule, {
        declarations: [_userprofile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["I18nModule"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["TooltipModule"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["InputPasswordModule"]],
        exports: [_userprofile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_userprofile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["I18nModule"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["TooltipModule"], rfnglib__WEBPACK_IMPORTED_MODULE_2__["InputPasswordModule"]],
          providers: [src_app_services_security_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], src_app_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]],
          exports: [_userprofile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();

    var ɵUserProfileModule_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](UserProfileModule);
    /***/

  }
}]);
//# sourceMappingURL=security-modals-userprofile-userprofile-module-es5.js.map