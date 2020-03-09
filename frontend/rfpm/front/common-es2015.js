(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/masters/proyect.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/masters/proyect.service.ts ***!
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


/***/ }),

/***/ "./src/app/services/masters/tag.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/masters/tag.service.ts ***!
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


/***/ }),

/***/ "./src/app/services/security/user.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/security/user.service.ts ***!
  \***************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rfnglib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rfnglib */ "./node_modules/rfnglib/fesm2015/rfnglib.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




/**
 * User service for load data from users
 */
class UserService extends rfnglib__WEBPACK_IMPORTED_MODULE_0__["BaseService"] {
    constructor(rfngService, httpClient) {
        super(rfngService, httpClient, '/secure/user');
    }
    editUserProfile(base) {
        const body = { 'data': base };
        return this.httpClient.post(this.rfngService.baseHost + '' + this.path + '/editUserProfile', JSON.stringify(body), this.getHttpOptions()).toPromise();
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](rfnglib__WEBPACK_IMPORTED_MODULE_0__["RfngService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [rfnglib__WEBPACK_IMPORTED_MODULE_0__["RfngService"]]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map