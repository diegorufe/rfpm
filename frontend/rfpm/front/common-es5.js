function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/services/masters/proyect.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/masters/proyect.service.ts ***!
    \*****************************************************/

  /*! exports provided: ProyectService */

  /***/
  function srcAppServicesMastersProyectServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProyectService", function () {
      return ProyectService;
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
     * User service for load data from proyect
     */


    var ProyectService =
    /*#__PURE__*/
    function (_rfnglib__WEBPACK_IMP) {
      _inherits(ProyectService, _rfnglib__WEBPACK_IMP);

      function ProyectService(rfngService, httpClient) {
        _classCallCheck(this, ProyectService);

        return _possibleConstructorReturn(this, _getPrototypeOf(ProyectService).call(this, rfngService, httpClient, '/secure/proyect'));
      }

      return ProyectService;
    }(rfnglib__WEBPACK_IMPORTED_MODULE_0__["BaseService"]);

    ProyectService.ɵfac = function ProyectService_Factory(t) {
      return new (t || ProyectService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](rfnglib__WEBPACK_IMPORTED_MODULE_0__["RfngService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ProyectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ProyectService,
      factory: ProyectService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProyectService, [{
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

  },

  /***/
  "./src/app/services/masters/tag.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/masters/tag.service.ts ***!
    \*************************************************/

  /*! exports provided: TagService */

  /***/
  function srcAppServicesMastersTagServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagService", function () {
      return TagService;
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
     * User service for load data from tag
     */


    var TagService =
    /*#__PURE__*/
    function (_rfnglib__WEBPACK_IMP2) {
      _inherits(TagService, _rfnglib__WEBPACK_IMP2);

      function TagService(rfngService, httpClient) {
        _classCallCheck(this, TagService);

        return _possibleConstructorReturn(this, _getPrototypeOf(TagService).call(this, rfngService, httpClient, '/secure/tag'));
      }

      return TagService;
    }(rfnglib__WEBPACK_IMPORTED_MODULE_0__["BaseService"]);

    TagService.ɵfac = function TagService_Factory(t) {
      return new (t || TagService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](rfnglib__WEBPACK_IMPORTED_MODULE_0__["RfngService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    TagService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: TagService,
      factory: TagService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagService, [{
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

  },

  /***/
  "./src/app/services/security/user.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/security/user.service.ts ***!
    \***************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesSecurityUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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
     * User service for load data from users
     */


    var UserService =
    /*#__PURE__*/
    function (_rfnglib__WEBPACK_IMP3) {
      _inherits(UserService, _rfnglib__WEBPACK_IMP3);

      function UserService(rfngService, httpClient) {
        _classCallCheck(this, UserService);

        return _possibleConstructorReturn(this, _getPrototypeOf(UserService).call(this, rfngService, httpClient, '/secure/user'));
      }

      _createClass(UserService, [{
        key: "editUserProfile",
        value: function editUserProfile(base) {
          var body = {
            'data': base
          };
          return this.httpClient.post(this.rfngService.baseHost + '' + this.path + '/editUserProfile', JSON.stringify(body), this.getHttpOptions()).toPromise();
        }
      }]);

      return UserService;
    }(rfnglib__WEBPACK_IMPORTED_MODULE_0__["BaseService"]);

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](rfnglib__WEBPACK_IMPORTED_MODULE_0__["RfngService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
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
//# sourceMappingURL=common-es5.js.map