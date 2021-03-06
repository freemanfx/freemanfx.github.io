(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/silviu/work/elrond-tools/dashboard/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/api.service */ "o6Md");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transactions/transactions.component */ "rt1i");






function AppComponent_app_transactions_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-transactions", 12);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("profile", ctx_r0.profile)("egldPriceUSD", ctx_r0.egldPriceUSD);
} }
class AppComponent {
    constructor(api) {
        this.api = api;
        this.profile = {
            account: '',
            transactionsCount: 2,
            status: 'all'
        };
        this.egldPriceUSD = 250;
    }
    ngOnInit() {
        this.loadSettings();
        this.api.getPriceEGLD().subscribe(egldPrice => this.egldPriceUSD = egldPrice);
    }
    ngOnDestroy() {
        this.storeSettings();
    }
    storeSettings() {
        localStorage.setItem('profile', JSON.stringify(this.profile));
    }
    loadSettings() {
        const value = localStorage.getItem('profile');
        if (value) {
            this.profile = JSON.parse(value);
        }
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_data_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 2, consts: [[1, "layout", "flex-fill"], [1, "main-navbar"], [1, "px-3", "px-md-4", "py-2"], [1, "col", "navbar", "navbar-expand-lg", "align-items-stretch", "justify-content-between", "flex-nowrap", "p-0"], [1, "container"], [1, "col-12", "row"], ["type", "text", "placeholder", "Please enter the wallet address erd1..", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "container", "d-flex", "flex-column", "flex-grow-1"], [1, "main-content", "row", "d-flex", "flex-column"], [1, "row"], [3, "profile", "egldPriceUSD", 4, "ngIf"], [1, "toast-messages", "d-flex", "flex-column", "align-items-center", "justify-content-sm-end"], [3, "profile", "egldPriceUSD"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Wallet address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_8_listener($event) { return ctx.profile.account = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "main", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, AppComponent_app_transactions_12_Template, 1, 2, "app-transactions", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.profile.account);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.profile.account);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_5__["TransactionsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transactions/transactions.component */ "rt1i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_5__["TransactionsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();


/***/ }),

/***/ "o6Md":
/*!*************************************!*\
  !*** ./src/app/data/api.service.ts ***!
  \*************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ApiService {
    constructor(http) {
        this.http = http;
    }
    getTransactions(account, count) {
        const url = `https://api.elrond.com/accounts/${account}/transactions?size=${count}`;
        return this.http.get(url);
    }
    getPriceEGLD() {
        const url = `https://api.elrond.com/economics`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((economics) => economics.price));
    }
}
ApiService.??fac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ApiService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: ApiService, factory: ApiService.??fac, providedIn: 'root' });


/***/ }),

/***/ "rt1i":
/*!********************************************************!*\
  !*** ./src/app/transactions/transactions.component.ts ***!
  \********************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/api.service */ "o6Md");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function TransactionsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " No results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function TransactionsComponent_table_26_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const transaction_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](transaction_r3.nonce);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](5, 7, transaction_r3.timestamp * 1000, ctx_r2.dateTimeFormat));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r2.description(transaction_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](transaction_r3.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](12, 10, ctx_r2.eGLD(transaction_r3.value), ctx_r2.numberFormat));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](15, 13, ctx_r2.eGLDToUSD(transaction_r3.value), ctx_r2.numberFormat), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](18, 16, ctx_r2.eGLDToUSD(transaction_r3.fee), ctx_r2.numberFormat), "");
} }
function TransactionsComponent_table_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Nonce");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Value $");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Fee $");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](29, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](32, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](33, TransactionsComponent_table_26_tr_33_Template, 19, 19, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](42, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](45, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](48, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Total for ", ctx_r1.transactions.length, " transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](26, 9, ctx_r1.totalUSD("value") / ctx_r1.egldPriceUSD, ctx_r1.numberFormat));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](29, 12, ctx_r1.totalUSD("value"), ctx_r1.numberFormat), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](32, 15, ctx_r1.totalUSD("fee"), ctx_r1.numberFormat), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r1.transactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Total for ", ctx_r1.transactions.length, " transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](42, 18, ctx_r1.totalUSD("value") / ctx_r1.egldPriceUSD, ctx_r1.numberFormat));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](45, 21, ctx_r1.totalUSD("value"), ctx_r1.numberFormat), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](48, 24, ctx_r1.totalUSD("fee"), ctx_r1.numberFormat), "");
} }
class TransactionsComponent {
    constructor(api) {
        this.api = api;
        this.profile = {
            account: '',
            transactionsCount: 2,
            status: 'all'
        };
        this.egldPriceUSD = 250;
        this.transactions = [];
        this.numberFormat = '1.2-2';
        this.dateTimeFormat = 'MMM dd, yyyy hh:mm:ss a';
    }
    ngOnChanges(changes) {
        this.loadData();
    }
    loadData() {
        if (this.profile.account.length === 62 && this.profile.transactionsCount > 0) {
            this.api.getTransactions(this.profile.account, this.profile.transactionsCount)
                .subscribe(transactions => {
                if (this.profile.status !== 'all') {
                    this.transactions = lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](transactions, t => t.status === this.profile.status);
                }
                else {
                    this.transactions = transactions;
                }
                this.transactions = lodash__WEBPACK_IMPORTED_MODULE_0__["reverse"](lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"](this.transactions, 'timestamp'));
            });
        }
    }
    description(transaction) {
        if (transaction.action) {
            return transaction.action.description;
        }
        else {
            return 'Transfer';
        }
    }
    eGLDToUSD(egld) {
        return this.egldPriceUSD * egld / Math.pow(10, 18);
    }
    eGLD(egld) {
        return egld / Math.pow(10, 18);
    }
    totalUSD(field) {
        let sum = 0;
        this.transactions.forEach((transaction) => sum = sum + this.eGLDToUSD(transaction[field]));
        return sum;
    }
}
TransactionsComponent.??fac = function TransactionsComponent_Factory(t) { return new (t || TransactionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_data_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
TransactionsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: TransactionsComponent, selectors: [["app-transactions"]], inputs: { profile: "profile", egldPriceUSD: "egldPriceUSD" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]], decls: 27, vars: 5, consts: [[1, "col-12", "py-spacer", "h5", "m-0", "text-secondary"], [1, "col-12", "mb-4"], [1, "standard-card", "card", "farm-card", "overflow-hidden"], [1, "card-header", "p-4", "d-flex", "align-items-center", "justify-content-between", "rounded", 2, "cursor", "pointer"], [1, "col-12"], [1, "form-group", "row"], [1, "col-4"], ["type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "all"], ["value", "success"], ["value", "fail"], [4, "ngIf"], ["class", "table", 4, "ngIf"], [1, "table"], [1, "col-2"], [1, "col-5"], [1, "bg-primary"], [4, "ngFor", "ngForOf"]], template: function TransactionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Transaction count");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function TransactionsComponent_Template_input_ngModelChange_10_listener($event) { return ctx.profile.transactionsCount = $event; })("ngModelChange", function TransactionsComponent_Template_input_ngModelChange_10_listener() { return ctx.loadData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "EGLD Price USD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function TransactionsComponent_Template_input_ngModelChange_14_listener($event) { return ctx.egldPriceUSD = $event; })("ngModelChange", function TransactionsComponent_Template_input_ngModelChange_14_listener() { return ctx.loadData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function TransactionsComponent_Template_select_ngModelChange_18_listener($event) { return ctx.profile.status = $event; })("ngModelChange", function TransactionsComponent_Template_select_ngModelChange_18_listener() { return ctx.loadData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "fail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](25, TransactionsComponent_div_25_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](26, TransactionsComponent_table_26_Template, 49, 27, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.profile.transactionsCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.egldPriceUSD);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.profile.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.transactions.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.transactions.length > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2FjdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map