function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _app_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app/login/login.component */
    "./src/app/login/login.component.ts"); //import { AuthGuard } from './auth/auth.guard'


    var routes = [{
      path: 'ipl',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./ipl/ipl-routing.module */
        "./src/app/ipl/ipl-routing.module.ts")).then(function (m) {
          return m.IplRoutingModule;
        });
      }
    }, {
      path: '',
      component: _app_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Author';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _ipl_ipl_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./ipl/ipl.module */
    "./src/app/ipl/ipl.module.ts");
    /* harmony import */


    var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-filter-pipe */
    "./node_modules/ngx-filter-pipe/__ivy_ngcc__/esm2015/ngx-filter-pipe.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js"); //import { AuthService } from "../app/auth/auth.service";


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterPipeModule"], _ipl_ipl_module__WEBPACK_IMPORTED_MODULE_10__["IplModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterPipeModule"], _ipl_ipl_module__WEBPACK_IMPORTED_MODULE_10__["IplModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterPipeModule"], _ipl_ipl_module__WEBPACK_IMPORTED_MODULE_10__["IplModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 15,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["routerLink", "home", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["routerLink", "ipl", 1, "nav-link"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "IPL ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_tr_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_tr_28_Template_i_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var author_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.editAuthor(author_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_tr_28_Template_i_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var author_r2 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.deleteAuthor(author_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var author_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](author_r2.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](author_r2.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](author_r2.age);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(http) {
        _classCallCheck(this, HomeComponent);

        this.author = {
          name: "",
          email: "",
          age: null
        };
        this.authorName = "";
        this.authors = [{
          name: 'Apoorv',
          email: 'bhattapoorv10@gmail.com',
          age: 20
        }, {
          name: 'Kartik',
          email: 'bhattapoorv10@gmail.com',
          age: 20
        }, {
          name: 'Aman',
          email: 'bhattapoorv10@gmail.com',
          age: 20
        }];
        this.selected = [];
        this.items = [{
          name: 'Apoorv',
          email: 'bhattapoorv10@gmail.com',
          age: 20
        }, {
          name: 'Kartik',
          email: 'bhattapoorv10@gmail.com',
          age: 20
        }, {
          name: 'Aman',
          email: 'bhattapoorv10@gmail.com',
          age: 20
        }];
        this.facData = [];
        this._http = http;
      }

      _createClass(HomeComponent, [{
        key: "searchAuthors",
        value: function searchAuthors(searchString) {
          return this.authors.filter(function (author) {
            return author.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getFacData",
        value: function getFacData() {
          this._http.get("./src/fac.json").subscribe(function (data) {});
        }
      }, {
        key: "addAuthor",
        value: function addAuthor() {}
      }, {
        key: "search",
        value: function search() {
          var _this = this;

          //return this.authors.filter(author => author.name.toLowerCase().indexOf(this.value.toLowerCase()) !== -1);
          if (this.author.name != "") {
            this.authors = this.authors.filter(function (res) {
              return res.name.toLocaleLowerCase().match(_this.name.toLocaleLowerCase());
            });
          } else if (this.author.name == "") {
            console.log("No Data");
            this.ngOnInit();
          }
        }
      }, {
        key: "editAuthor",
        value: function editAuthor(author) {
          console.log(this.author);
          this.author = author;
        }
      }, {
        key: "deleteAuthor",
        value: function deleteAuthor(author) {
          var index = this.authors.indexOf(author);
          this.authors.splice(index, 1);
        }
      }, {
        key: "submitData",
        value: function submitData(f) {
          this.author = f.value;
          this.authors.push(this.author);
          f.value.reset();
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 29,
      vars: 6,
      consts: [[1, "row", "mt-2"], [1, "col-md-4"], ["id", "authorFormId", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["type", "text", "required", "", "minlength", "3", "name", "name", "placeholder", "Enter Name", 1, "form-control", "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "minlength", "3", "name", "email", "placeholder", "Enter Email", 1, "form-control", "mb-2", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "minlength", "3", "name", "age", "placeholder", "Enter Age", 1, "form-control", "mb-2", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary"], [1, "row-mt-2"], ["type", "text", "placeholder", "Search", 3, "ngModel", "ngModelChange", "input"], [1, "table", "table-striped", "table-hover"], [4, "ngFor", "ngForOf"], [1, "badge", "badge-primary", "badge", "pill"], [1, "fas", "fa-edit", "ml-2", 3, "click"], [1, "fas", "fa-trash", "ml-2", 3, "click"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            return ctx.submitData(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.author.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.author.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.author.age = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.name = $event;
          })("input", function HomeComponent_Template_input_input_14_listener() {
            return ctx.search();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Edit/Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HomeComponent_tr_28_Template, 11, 3, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.author.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.author.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.author.age);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.authors);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["#authorFormId[_ngcontent-%COMP%]{\r\n    border: 1px solid grey;\r\n    padding: 20px;\r\n    border-radius: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F1dGhvckZvcm1JZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ipl/ipl-routing.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/ipl/ipl-routing.module.ts ***!
    \*******************************************/

  /*! exports provided: IplRoutingModule */

  /***/
  function srcAppIplIplRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IplRoutingModule", function () {
      return IplRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ipl_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ipl.component */
    "./src/app/ipl/ipl.component.ts");
    /* harmony import */


    var _team_team_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./team/team.component */
    "./src/app/ipl/team/team.component.ts");
    /* harmony import */


    var _player_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./player/player.component */
    "./src/app/ipl/player/player.component.ts");
    /* harmony import */


    var _iplhome_iplhome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./iplhome/iplhome.component */
    "./src/app/ipl/iplhome/iplhome.component.ts");

    var routes = [{
      path: '',
      component: _ipl_component__WEBPACK_IMPORTED_MODULE_2__["IplComponent"],
      children: [{
        path: '',
        component: _iplhome_iplhome_component__WEBPACK_IMPORTED_MODULE_5__["IplhomeComponent"]
      }, {
        path: 'team',
        component: _team_team_component__WEBPACK_IMPORTED_MODULE_3__["TeamComponent"]
      }, {
        path: 'players',
        component: _player_player_component__WEBPACK_IMPORTED_MODULE_4__["PlayerComponent"]
      }]
    }];

    var IplRoutingModule = function IplRoutingModule() {
      _classCallCheck(this, IplRoutingModule);
    };

    IplRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IplRoutingModule
    });
    IplRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IplRoutingModule_Factory(t) {
        return new (t || IplRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IplRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IplRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ipl/ipl.component.ts":
  /*!**************************************!*\
    !*** ./src/app/ipl/ipl.component.ts ***!
    \**************************************/

  /*! exports provided: IplComponent */

  /***/
  function srcAppIplIplComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IplComponent", function () {
      return IplComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var IplComponent = /*#__PURE__*/function () {
      function IplComponent() {
        _classCallCheck(this, IplComponent);
      }

      _createClass(IplComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IplComponent;
    }();

    IplComponent.ɵfac = function IplComponent_Factory(t) {
      return new (t || IplComponent)();
    };

    IplComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IplComponent,
      selectors: [["app-ipl"]],
      decls: 9,
      vars: 0,
      consts: [[1, "row", "mt-6", "offset-5"], ["routerLink", "/ipl/team", 1, "btn", "mr-2"], ["routerLink", "/ipl/players", 1, "btn", "mr-2"]],
      template: function IplComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Players");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".btn[_ngcontent-%COMP%]{\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 1.5em;\r\n   \r\n    background-color: rgba(255, 255, 255, 0.6);\r\n      transition: 0.3s ease-out all 0.1s;\r\n}\r\n.btn[_ngcontent-%COMP%]:hover{\r\n    color: honeydew;\r\n    background-color: grey;\r\n    box-shadow: 0 5px 15px rgba(0,0,0,0.9);\r\n    transition: box-shadow 0s ease-in-out;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXBsL2lwbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNENBQTRDO0lBQzVDLGdCQUFnQjs7SUFFaEIsMENBQTBDO01BQ3hDLGtDQUFrQztBQUN4QztBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixzQ0FBc0M7SUFDdEMscUNBQXFDO0VBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvaXBsL2lwbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bntcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQgYWxsIDAuMXM7XHJcbn1cclxuLmJ0bjpob3ZlcntcclxuICAgIGNvbG9yOiBob25leWRldztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwwLDAsMC45KTtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMHMgZWFzZS1pbi1vdXQ7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IplComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ipl',
          templateUrl: './ipl.component.html',
          styleUrls: ['./ipl.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ipl/ipl.module.ts":
  /*!***********************************!*\
    !*** ./src/app/ipl/ipl.module.ts ***!
    \***********************************/

  /*! exports provided: IplModule */

  /***/
  function srcAppIplIplModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IplModule", function () {
      return IplModule;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ipl_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ipl-routing.module */
    "./src/app/ipl/ipl-routing.module.ts");
    /* harmony import */


    var _ipl_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ipl.component */
    "./src/app/ipl/ipl.component.ts");
    /* harmony import */


    var _team_team_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./team/team.component */
    "./src/app/ipl/team/team.component.ts");
    /* harmony import */


    var _player_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./player/player.component */
    "./src/app/ipl/player/player.component.ts");
    /* harmony import */


    var _iplhome_iplhome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./iplhome/iplhome.component */
    "./src/app/ipl/iplhome/iplhome.component.ts");

    var IplModule = function IplModule() {
      _classCallCheck(this, IplModule);
    };

    IplModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IplModule
    });
    IplModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IplModule_Factory(t) {
        return new (t || IplModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ipl_routing_module__WEBPACK_IMPORTED_MODULE_3__["IplRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IplModule, {
        declarations: [_ipl_component__WEBPACK_IMPORTED_MODULE_4__["IplComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_5__["TeamComponent"], _player_player_component__WEBPACK_IMPORTED_MODULE_6__["PlayerComponent"], _iplhome_iplhome_component__WEBPACK_IMPORTED_MODULE_7__["IplhomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ipl_routing_module__WEBPACK_IMPORTED_MODULE_3__["IplRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IplModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_ipl_component__WEBPACK_IMPORTED_MODULE_4__["IplComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_5__["TeamComponent"], _player_player_component__WEBPACK_IMPORTED_MODULE_6__["PlayerComponent"], _iplhome_iplhome_component__WEBPACK_IMPORTED_MODULE_7__["IplhomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ipl_routing_module__WEBPACK_IMPORTED_MODULE_3__["IplRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ipl/iplhome/iplhome.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/ipl/iplhome/iplhome.component.ts ***!
    \**************************************************/

  /*! exports provided: IplhomeComponent */

  /***/
  function srcAppIplIplhomeIplhomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IplhomeComponent", function () {
      return IplhomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IplhomeComponent = /*#__PURE__*/function () {
      function IplhomeComponent() {
        _classCallCheck(this, IplhomeComponent);
      }

      _createClass(IplhomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IplhomeComponent;
    }();

    IplhomeComponent.ɵfac = function IplhomeComponent_Factory(t) {
      return new (t || IplhomeComponent)();
    };

    IplhomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IplhomeComponent,
      selectors: [["app-iplhome"]],
      decls: 2,
      vars: 0,
      template: function IplhomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "iplhome works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lwbC9pcGxob21lL2lwbGhvbWUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IplhomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-iplhome',
          templateUrl: './iplhome.component.html',
          styleUrls: ['./iplhome.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ipl/player/player.component.ts":
  /*!************************************************!*\
    !*** ./src/app/ipl/player/player.component.ts ***!
    \************************************************/

  /*! exports provided: PlayerComponent */

  /***/
  function srcAppIplPlayerPlayerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerComponent", function () {
      return PlayerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PlayerComponent_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var team_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", team_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", team_r2, " ");
      }
    }

    function PlayerComponent_tr_18_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r3.role);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r3.label);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", player_r3.price, "");
      }
    }

    function PlayerComponent_tr_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayerComponent_tr_18_div_1_Template, 9, 4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r3 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", player_r3.label == ctx_r1.getTeamName());
      }
    }

    var PlayerComponent = /*#__PURE__*/function () {
      function PlayerComponent() {
        _classCallCheck(this, PlayerComponent);

        this.teams = ["RCB", "CSK", "KKR", "RR", "MI", "SRH", "KXIP", "DC"];
        this.userFilter = {
          name: ''
        };
        this.teamName = 'RCB';
        this.batcount = 0;
        this.bowlcount = 0;
        this.wkcount = 0;
        this.allcount = 0;
        this.players = [{
          "name": "Virat Kohli (R)",
          "role": "Batsman",
          "label": "RCB",
          "price": 170000000
        }, {
          "name": "Pat Cummins",
          "role": "All-Rounder",
          "label": "KKR",
          "price": 155000000
        }, {
          "name": "Rishabh Pant (R)",
          "role": "Wicket Keeper",
          "label": "DC",
          "price": 150000000
        }, {
          "name": "Rohit Sharma (R)",
          "role": "Batsman",
          "label": "MI",
          "price": 150000000
        }, {
          "name": "MS Dhoni (R)",
          "role": "Wicket Keeper",
          "label": "CSK",
          "price": 150000000
        }, {
          "name": "Steve Smith (R)",
          "role": "Batsman",
          "label": "RR",
          "price": 125000000
        }, {
          "name": "Ben Stokes (R)",
          "role": "All-Rounder",
          "label": "RR",
          "price": 125000000
        }, {
          "name": "Sunil Narine (R)",
          "role": "All-Rounder",
          "label": "KKR",
          "price": 125000000
        }, {
          "name": "David Warner (R)",
          "role": "Batsman",
          "label": "SRH",
          "price": 125000000
        }, {
          "name": "AB de Villiers (R)",
          "role": "Batsman",
          "label": "RCB",
          "price": 110000000
        }, {
          "name": "Hardik Pandya (R)",
          "role": "All-Rounder",
          "label": "MI",
          "price": 110000000
        }, {
          "name": "Suresh Raine (R)",
          "role": "Batsman",
          "label": "CSK",
          "price": 110000000
        }, {
          "name": "Manish Pandey (R)",
          "role": "Batsman",
          "label": "SRH",
          "price": 110000000
        }, {
          "name": "KL Rahul (R)",
          "role": "Wicket Keeper",
          "label": "KXIP",
          "price": 110000000
        }, {
          "name": "Glenn Maxwell",
          "role": "All-Rounder",
          "label": "KXIP",
          "price": 107500000
        }, {
          "name": "Christopher Morris",
          "role": "All-Rounder",
          "label": "RCB",
          "price": 100000000
        }, {
          "name": "Rashid Khan (R)",
          "role": "Bowler",
          "label": "SRH",
          "price": 90000000
        }, {
          "name": "Krunal Pandya (R)",
          "role": "All-Rounder",
          "label": "MI",
          "price": 88000000
        }, {
          "name": "Andre Russell (R)",
          "role": "Batsman",
          "label": "KKR",
          "price": 85000000
        }, {
          "name": "Bhuvneshwar Kumar (R)",
          "role": "Bowler",
          "label": "SRH",
          "price": 85000000
        }, {
          "name": "Sheldon Cottrell",
          "role": "Bowler",
          "label": "KXIP",
          "price": 85000000
        }, {
          "name": "Nathan Coulter-Nile",
          "role": "Bowler",
          "label": "MI",
          "price": 80000000
        }, {
          "name": "Sanju Samson (R)",
          "role": "Wicket Keeper",
          "label": "RR",
          "price": 80000000
        }, {
          "name": "Kedar Jadhav (R)",
          "role": "All-Rounder",
          "label": "CSK",
          "price": 78000000
        }, {
          "name": "Shimron Heymyer",
          "role": "Batsman",
          "label": "DC",
          "price": 77500000
        }, {
          "name": "Ravichandran Ashwin (R)",
          "role": "Bowler",
          "label": "DC",
          "price": 76000000
        }, {
          "name": "Dinesh Karthik (R)",
          "role": "Wicket Keeper",
          "label": "KKR",
          "price": 74000000
        }, {
          "name": "Jofra Archer (R)",
          "role": "Bowler",
          "label": "RR",
          "price": 72000000
        }, {
          "name": "Shreyas Iyer (R)",
          "role": "Batsman",
          "label": "DC",
          "price": 70000000
        }, {
          "name": "Jasprit Bumrah (R)",
          "role": "Bowler",
          "label": "MI",
          "price": 70000000
        }, {
          "name": "Ravindra jadeja (R)",
          "role": "All-Rounder",
          "label": "CSK",
          "price": 70000000
        }, {
          "name": "Piyush Chawla",
          "role": "Bowler",
          "label": "CSK",
          "price": 67500000
        }, {
          "name": "Dwayne Bravo (R)",
          "role": "All-Rounder",
          "label": "CSK",
          "price": 64000000
        }, {
          "name": "Ishan Kishan (R)",
          "role": "Wicket Keeper",
          "label": "MI",
          "price": 62000000
        }, {
          "name": "Gowtham Krishnappa (R)",
          "role": "Batsman",
          "label": "KXIP",
          "price": 62000000
        }, {
          "name": "Yuzvendra Chahal (R)",
          "role": "Bowler",
          "label": "RCB",
          "price": 60000000
        }, {
          "name": "Kuldeep Yadav (R)",
          "role": "Bowler",
          "label": "KKR",
          "price": 58000000
        }, {
          "name": "Karun Nair (R)",
          "role": "Batsman",
          "label": "KXIP",
          "price": 56000000
        }, {
          "name": "Sam Curran",
          "role": "All-Rounder",
          "label": "CSK",
          "price": 55000000
        }, {
          "name": "Kieron Pollard (R)",
          "role": "All-Rounder",
          "label": "MI",
          "price": 54000000
        }, {
          "name": "Ajinkya Rahane (R)",
          "role": "Batsman",
          "label": "DC",
          "price": 52500000
        }, {
          "name": "Eoin Morgan",
          "role": "Batsman",
          "label": "KKR",
          "price": 52500000
        }, {
          "name": "Shikhar Dhawan (R)",
          "role": "Batsman",
          "label": "DC",
          "price": 52000000
        }, {
          "name": "Axax Patel (R)",
          "role": "Bowler",
          "label": "DC",
          "price": 50000000
        }, {
          "name": "Shivam Dube (R)",
          "role": "All-Rounder",
          "label": "RCB",
          "price": 50000000
        }, {
          "name": "Karn Sharma (R)",
          "role": "All-Rounder",
          "label": "CSK",
          "price": 50000000
        }, {
          "name": "Marcus Stoinis",
          "role": "All-Rounder",
          "label": "DC",
          "price": 48000000
        }, {
          "name": "Mohammad Shami (R)",
          "role": "Bowler",
          "label": "KXIP",
          "price": 48000000
        }, {
          "name": "Aaron Finch",
          "role": "Batsman",
          "label": "RCB",
          "price": 44000000
        }, {
          "name": "Jos Butler (R)",
          "role": "Wicket Keeper",
          "label": "RR",
          "price": 44000000
        }, {
          "name": "Kagiso Rabada (R)",
          "role": "Bowler",
          "label": "DC",
          "price": 42000000
        }, {
          "name": "Umesh Yadav (R)",
          "role": "Bowler",
          "label": "RCB",
          "price": 42000000
        }, {
          "name": "Nicholas Pooran (R)",
          "role": "Batsman",
          "label": "KXIP",
          "price": 42000000
        }, {
          "name": "Amit Mishra (R)",
          "role": "Bowler",
          "label": "DC",
          "price": 40000000
        }, {
          "name": "Kane Richardson",
          "role": "Bowler",
          "label": "RCB",
          "price": 40000000
        }, {
          "name": "Shane Watson (R)",
          "role": "All-Rounder",
          "label": "CSK",
          "price": 40000000
        }, {
          "name": "Varun Chakaravarthy",
          "role": "All-Rounder",
          "label": "KKR",
          "price": 40000000
        }, {
          "name": "Siddarth Kaul (R)",
          "role": "Bowler",
          "label": "SRH",
          "price": 38000000
        }, {
          "name": "Nitish Rana (R)",
          "role": "Batsman",
          "label": "KKR",
          "price": 34000000
        }, {
          "name": "Washington Sundar (R)",
          "role": "Bowler",
          "label": "RCB",
          "price": 32000000
        }, {
          "name": "Suryakumar Yadav (R)",
          "role": "Batsman",
          "label": "MI",
          "price": 32000000
        }, {
          "name": "Trent Boult (R)",
          "role": "Bowler",
          "label": "MI",
          "price": 32000000
        }, {
          "name": "Kamlesh Nagarkoti (R)",
          "role": "Batsman",
          "label": "KKR",
          "price": 32000000
        }, {
          "name": "Vijay Shankar (R)",
          "role": "All-Rounder",
          "label": "SRH",
          "price": 32000000
        }, {
          "name": "Shahbaz Nadeem (R)",
          "role": "Bowler",
          "label": "SRH",
          "price": 32000000
        }, {
          "name": "Navdeep Saini (R)",
          "role": "Bowler",
          "label": "RCB",
          "price": 30000000
        }, {
          "name": "Robin Uthappa",
          "role": "Batsman",
          "label": "RR",
          "price": 30000000
        }, {
          "name": "Ankit Rajpoot (R)",
          "role": "Bowler",
          "label": "RR",
          "price": 30000000
        }, {
          "name": "Rahul Tweatia (R)",
          "role": "Bowler",
          "label": "RR",
          "price": 30000000
        }, {
          "name": "Jaydev Unadkat",
          "role": "Bowler",
          "label": "RR",
          "price": 30000000
        }, {
          "name": "Shivam Mavi (R)",
          "role": "All-Rounder",
          "label": "KKR",
          "price": 30000000
        }, {
          "name": "Kane Williamson",
          "role": "Batsman",
          "label": "SRH",
          "price": 30000000
        }, {
          "name": "Sandeep Sharma (R)",
          "role": "Bowler",
          "label": "SRH",
          "price": 30000000
        }, {
          "name": "Syed Khaleel Ahmed (R)",
          "role": "Bowler",
          "label": "SRH",
          "price": 30000000
        }, {
          "name": "Chris Jordan",
          "role": "All-Rounder",
          "label": "KXIP",
          "price": 30000000
        }, {
          "name": "Quinton de Kock (R)",
          "role": "Wicket Keeper",
          "label": "MI",
          "price": 28000000
        }, {
          "name": "Mohammaed Siraj (R)",
          "role": "Bowler",
          "label": "RCB",
          "price": 26000000
        }, {
          "name": "Shardul Thakur (R)",
          "role": "Bowler",
          "label": "CSK",
          "price": 26000000
        }, {
          "name": "Alex Carey",
          "role": "Wicket Keeper",
          "label": "DC",
          "price": 24000000
        }, {
          "name": "Yashasvi Jaiswal",
          "role": "All-Rounder",
          "label": "RR",
          "price": 24000000
        }, {
          "name": "Varun Aaron (R)",
          "role": "Bowler",
          "label": "RR",
          "price": 24000000
        }, {
          "name": "Ambati Rayadu (R)",
          "role": "Batsman",
          "label": "CSK",
          "price": 22000000
        }, {
          "name": "Jonny Bairstow (R)",
          "role": "Wicket Keeper",
          "label": "SRH",
          "price": 22000000
        }, {
          "name": "Dale Steyn",
          "role": "Bowler",
          "label": "RCB",
          "price": 20000000
        }, {
          "name": "Sherfane Rutherford (R)",
          "role": "Batsman",
          "label": "MI",
          "price": 20000000
        }, {
          "name": "Chris Lynn",
          "role": "Batsman",
          "label": "MI",
          "price": 20000000
        }, {
          "name": "Lasith Malinga (R)",
          "role": "Bowler",
          "label": "MI",
          "price": 20000000
        }, {
          "name": "Murali Vijay (R)",
          "role": "Batsman",
          "label": "CSK",
          "price": 20000000
        }, {
          "name": "Harbhajan Singh (R)",
          "role": "Bowler",
          "label": "CSK",
          "price": 20000000
        }, {
          "name": "Josh Hazlewood",
          "role": "Bowler",
          "label": "CSK",
          "price": 20000000
        }, {
          "name": "Mayank Markande (R)",
          "role": "Bowler",
          "label": "RR",
          "price": 20000000
        }, {
          "name": "Mitchell Marsh",
          "role": "All-Rounder",
          "label": "SRH",
          "price": 20000000
        }, {
          "name": "Chris Gayle (R)",
          "role": "Batsman",
          "label": "KXIP",
          "price": 20000000
        }, {
          "name": "Ravi Bishnoi",
          "role": "Bowler",
          "label": "KXIP",
          "price": 20000000
        }, {
          "name": "Rahul Chahar (R)",
          "role": "All-Rounder",
          "label": "MI",
          "price": 19000000
        }, {
          "name": "Priyam Garg",
          "role": "Batsman",
          "label": "SRH",
          "price": 19000000
        }, {
          "name": "Virat Singh",
          "role": "Batsman",
          "label": "SRH",
          "price": 19000000
        }, {
          "name": "Shubham Gill (R)",
          "role": "Batsman",
          "label": "KKR",
          "price": 18000000
        }, {
          "name": "Pathiv Patel (R)",
          "role": "Wicket Keeper",
          "label": "RCB",
          "price": 17000000
        }, {
          "name": "Moeen Ali (R)",
          "role": "All-Rounder",
          "label": "RCB",
          "price": 17000000
        }, {
          "name": "Faf du Plessis (R)",
          "role": "All-Rounder",
          "label": "CSK",
          "price": 16000000
        }, {
          "name": "Lockie Ferguson (R)",
          "role": "Batsman",
          "label": "KKR",
          "price": 16000000
        }, {
          "name": "Jason Roy",
          "role": "Batsman",
          "label": "DC",
          "price": 15000000
        }, {
          "name": "Chris Woakes",
          "role": "All-Rounder",
          "label": "DC",
          "price": 15000000
        }, {
          "name": "Mandeep Singh (R)",
          "role": "All-Rounder",
          "label": "KXIP",
          "price": 14000000
        }, {
          "name": "Kartik Tyagi",
          "role": "Bowler",
          "label": "RR",
          "price": 13000000
        }, {
          "name": "Prithvi Shaw (R)",
          "role": "Batsman",
          "label": "DC",
          "price": 12000000
        }, {
          "name": "Wridhhiman Saha (R)",
          "role": "Wicket Keeper",
          "label": "SRH",
          "price": 12000000
        }, {
          "name": "Ishant Sharma (R)",
          "role": "Bowler",
          "label": "DC",
          "price": 11000000
        }, {
          "name": "Pawan Negi (R)",
          "role": "All-Rounder",
          "label": "RCB",
          "price": 10000000
        }, {
          "name": "Mitchell McClenaghan (R)",
          "role": "Bowler",
          "label": "MI",
          "price": 10000000
        }, {
          "name": "Imran Tahir (R)",
          "role": "Bowler",
          "label": "CSK",
          "price": 10000000
        }, {
          "name": "Tom Curran",
          "role": "All-Rounder",
          "label": "RR",
          "price": 10000000
        }, {
          "name": "Andrew Tye",
          "role": "Bowler",
          "label": "RR",
          "price": 10000000
        }, {
          "name": "Tom Banton",
          "role": "Batsman",
          "label": "KKR",
          "price": 10000000
        }, {
          "name": "Shreevats Goswami (R)",
          "role": "Wicket Keeper",
          "label": "SRH",
          "price": 10000000
        }, {
          "name": "Mohammad Nabi (R)",
          "role": "All-Rounder",
          "label": "SRH",
          "price": 10000000
        }, {
          "name": "Mayank Agarwal (R)",
          "role": "Batsman",
          "label": "KXIP",
          "price": 10000000
        }, {
          "name": "Basil Thampi (R)",
          "role": "Bowler",
          "label": "SRH",
          "price": 9500000
        }, {
          "name": "Anmolpreet Singh (R)",
          "role": "Batsman",
          "label": "MI",
          "price": 8000000
        }, {
          "name": "Deepak Chahar (R)",
          "role": "Bowler",
          "label": "CSK",
          "price": 8000000
        }, {
          "name": "Anuj Rawat",
          "role": "Wicket Keeper",
          "label": "RR",
          "price": 8000000
        }, {
          "name": "Rinku Singh (R)",
          "role": "Batsman",
          "label": "KKR",
          "price": 8000000
        }, {
          "name": "Dhawal Kulkarni (R)",
          "role": "Bowler",
          "label": "MI",
          "price": 7500000
        }, {
          "name": "David Miller",
          "role": "Batsman",
          "label": "RR",
          "price": 7500000
        }, {
          "name": "Harry Gurney (R)",
          "role": "Batsman",
          "label": "KKR",
          "price": 7500000
        }, {
          "name": "Hardus Viljoen (R)",
          "role": "Batsman",
          "label": "KXIP",
          "price": 7500000
        }, {
          "name": "Avesh Khan (R)",
          "role": "Batsman",
          "label": "DC",
          "price": 7000000
        }, {
          "name": "Rahul Tripathi",
          "role": "Batsman",
          "label": "KKR",
          "price": 6000000
        }, {
          "name": "Abhishek Sharma (R)",
          "role": "Batsman",
          "label": "SRH",
          "price": 5500000
        }, {
          "name": "Prabhsimran Singh",
          "role": "Wicket Keeper",
          "label": "KXIP",
          "price": 5500000
        }, {
          "name": "Keemo Paul (R)",
          "role": "Batsman",
          "label": "DC",
          "price": 5000000
        }, {
          "name": "Mohit Sharma",
          "role": "Bowler",
          "label": "DC",
          "price": 5000000
        }, {
          "name": "Gurkeerat Singh (R)",
          "role": "Batsman",
          "label": "RCB",
          "price": 5000000
        }, {
          "name": "Isuru Udana",
          "role": "All-Rounder",
          "label": "RCB",
          "price": 5000000
        }, {
          "name": "Saurabh Tiwary",
          "role": "Batsman",
          "label": "MI",
          "price": 5000000
        }, {
          "name": "Jayant Yadav (R)",
          "role": "Bowler",
          "label": "MI",
          "price": 5000000
        }, {
          "name": "Lungisani Ngidi (R)",
          "role": "Bowler",
          "label": "CSK",
          "price": 5000000
        }, {
          "name": "Mitchell Santner (R)",
          "role": "Bowler",
          "label": "CSK",
          "price": 5000000
        }, {
          "name": "Oshane Thomas",
          "role": "Bowler",
          "label": "RR",
          "price": 5000000
        }, {
          "name": "Fabian Allen",
          "role": "All-Rounder",
          "label": "SRH",
          "price": 5000000
        }, {
          "name": "Billy Stanlake (R)",
          "role": "Bowler",
          "label": "SRH",
          "price": 5000000
        }, {
          "name": "Deepak Hooda",
          "role": "All-Rounder",
          "label": "KXIP",
          "price": 5000000
        }, {
          "name": "James Neesham",
          "role": "All-Rounder",
          "label": "KXIP",
          "price": 5000000
        }, {
          "name": "Asif K M (R)",
          "role": "All-Rounder",
          "label": "CSK",
          "price": 4000000
        }, {
          "name": "T Natarajan (R)",
          "role": "Bowler",
          "label": "SRH",
          "price": 4000000
        }, {
          "name": "Shashank Singh (R)",
          "role": "Batsman",
          "label": "RR",
          "price": 3000000
        }, {
          "name": "Darshan Nalkande (R)",
          "role": "Batsman",
          "label": "KXIP",
          "price": 3000000
        }, {
          "name": "Sarfaraz Khan (R)",
          "role": "Batsman",
          "label": "KXIP",
          "price": 2500000
        }, {
          "name": "Lalit Yadav",
          "role": "All-Rounder",
          "label": "DC",
          "price": 2000000
        }, {
          "name": "Sandeep Lamichhane (R)",
          "role": "Bowler",
          "label": "DC",
          "price": 2000000
        }, {
          "name": "Harshal Patel (R)",
          "role": "Bowler",
          "label": "DC",
          "price": 2000000
        }, {
          "name": "Tushar Deshpande",
          "role": "Bowler",
          "label": "DC",
          "price": 2000000
        }, {
          "name": "Devdutt Padikkal (R)",
          "role": "Batsman",
          "label": "RCB",
          "price": 2000000
        }, {
          "name": "Shahbaz Ahamad",
          "role": "Wicket Keeper",
          "label": "RCB",
          "price": 2000000
        }, {
          "name": "Joshua Philippe",
          "role": "Wicket Keeper",
          "label": "RCB",
          "price": 2000000
        }, {
          "name": "Pavan Deshpande",
          "role": "All-Rounder",
          "label": "RCB",
          "price": 2000000
        }, {
          "name": "Ankul Roy (R)",
          "role": "Batsman",
          "label": "MI",
          "price": 2000000
        }, {
          "name": "Aditya Tare (R)",
          "role": "Wicket Keeper",
          "label": "MI",
          "price": 2000000
        }, {
          "name": "Digvijay Deshmukh",
          "role": "All-Rounder",
          "label": "MI",
          "price": 2000000
        }, {
          "name": "Prince Balwant Rai Singh",
          "role": "All-Rounder",
          "label": "MI",
          "price": 2000000
        }, {
          "name": "Mohsin Khan",
          "role": "Bowler",
          "label": "MI",
          "price": 2000000
        }, {
          "name": "Monu Singh (R)",
          "role": "Batsman",
          "label": "CSK",
          "price": 2000000
        }, {
          "name": "Ruturaj Gaikwad (R)",
          "role": "Batsman",
          "label": "CSK",
          "price": 2000000
        }, {
          "name": "Jagadeesan Narayan (R)",
          "role": "Wicket Keeper",
          "label": "CSK",
          "price": 2000000
        }, {
          "name": "R. Sai Kishore",
          "role": "Bowler",
          "label": "CSK",
          "price": 2000000
        }, {
          "name": "Riyan Parag (R)",
          "role": "Batsman",
          "label": "RR",
          "price": 2000000
        }, {
          "name": "Manan Vohra (R)",
          "role": "Batsman",
          "label": "RR",
          "price": 2000000
        }, {
          "name": "Mahipal Lmoror (R)",
          "role": "All-Rounder",
          "label": "RR",
          "price": 2000000
        }, {
          "name": "Shreyas Gopal (R)",
          "role": "All-Rounder",
          "label": "RR",
          "price": 2000000
        }, {
          "name": "Anirudha Ashok Joshi",
          "role": "All-Rounder",
          "label": "RR",
          "price": 2000000
        }, {
          "name": "Akash Singh",
          "role": "Bowler",
          "label": "RR",
          "price": 2000000
        }, {
          "name": "Prasidh Krishna (R)",
          "role": "Batsman",
          "label": "KKR",
          "price": 2000000
        }, {
          "name": "Siddhesh Lad (R)",
          "role": "Batsman",
          "label": "KKR",
          "price": 2000000
        }, {
          "name": "Nikhil Shankar Naik",
          "role": "Wicket Keeper",
          "label": "KKR",
          "price": 2000000
        }, {
          "name": "Chris Green",
          "role": "All-Rounder",
          "label": "KKR",
          "price": 2000000
        }, {
          "name": "Sandeep Warrier (R)",
          "role": "Bowler",
          "label": "KKR",
          "price": 2000000
        }, {
          "name": "Pravin Tambe",
          "role": "Bowler",
          "label": "KKR",
          "price": 2000000
        }, {
          "name": "M Siddharth",
          "role": "Bowler",
          "label": "KKR",
          "price": 2000000
        }, {
          "name": "Sandeep Bavanaka",
          "role": "All-Rounder",
          "label": "SRH",
          "price": 2000000
        }, {
          "name": "Sanjay Yadav",
          "role": "All-Rounder",
          "label": "SRH",
          "price": 2000000
        }, {
          "name": "Abdul Samad",
          "role": "All-Rounder",
          "label": "SRH",
          "price": 2000000
        }, {
          "name": "Arshdeep Singh (R)",
          "role": "Batsman",
          "label": "KXIP",
          "price": 2000000
        }, {
          "name": "Harpreet Brar (R)",
          "role": "Batsman",
          "label": "KXIP",
          "price": 2000000
        }, {
          "name": "Tajinder Dhillon",
          "role": "All-Rounder",
          "label": "KXIP",
          "price": 2000000
        }, {
          "name": "Ishan Patel",
          "role": "Bowler",
          "label": "KXIP",
          "price": 2000000
        }, {
          "name": "Jagadeesha Suchith (R)",
          "role": "Bowler",
          "label": "KXIP",
          "price": 2000000
        }, {
          "name": "Murugan Ashwin (R)",
          "role": "Bowler",
          "label": "KXIP",
          "price": 2000000
        }];
      }

      _createClass(PlayerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "valueSelected",
        value: function valueSelected(event) {
          this.teamName = event.target.value;
        }
      }, {
        key: "filtered",
        value: function filtered() {
          var _this2 = this;

          this.players = this.players.filter(function (players) {
            return players.label === _this2.teamName;
          });
        }
      }, {
        key: "getTeamName",
        value: function getTeamName() {
          return this.teamName;
        }
      }]);

      return PlayerComponent;
    }();

    PlayerComponent.ɵfac = function PlayerComponent_Factory(t) {
      return new (t || PlayerComponent)();
    };

    PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlayerComponent,
      selectors: [["app-player"]],
      decls: 19,
      vars: 2,
      consts: [[1, "row", "mt-2"], [1, "col-md-8", "offset-2"], ["aria-placeholder", "Select Team", 1, "dd", 3, "change"], ["class", "dd", "style", "width: 20rem;height: 2rem;", 3, "value", 4, "ngFor", "ngForOf"], [1, "table", "table-hover"], [1, "col-md-1"], [2, "min-width", "12rem"], [4, "ngFor", "ngForOf"], [1, "dd", 2, "width", "20rem", "height", "2rem", 3, "value"], ["class", "col-md-10", 4, "ngIf"], [1, "col-md-10"]],
      template: function PlayerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PlayerComponent_Template_select_change_3_listener($event) {
            return ctx.valueSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlayerComponent_option_4_Template, 2, 2, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PlayerComponent_tr_18_Template, 2, 1, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.teams);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.players);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".dd[_ngcontent-%COMP%] {\r\n    width: 20rem;\r\n    color: black;\r\n    background-color: white;\r\n    display: block;\r\n    border: 1px solid grey;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    margin-bottom: 0.67rem;\r\n    font-size: medium;\r\n  }\r\n\r\n  .dd[_ngcontent-%COMP%]:hover{\r\n    color: black;\r\n    background-color: rgb(209, 200, 200);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXBsL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4QkFBOEI7O0VBRTVCLGtFQUFrRTs7RUFDbEU7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixvQ0FBb0M7RUFDdEMiLCJmaWxlIjoic3JjL2FwcC9pcGwvcGxheWVyL3BsYXllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3R5bGUgVGhlIERyb3Bkb3duIEJ1dHRvbiAqL1xyXG5cclxuICAvKiBUaGUgY29udGFpbmVyIDxkaXY+IC0gbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBkcm9wZG93biBjb250ZW50ICovXHJcbiAgLmRkIHtcclxuICAgIHdpZHRoOiAyMHJlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNjdyZW07XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICB9XHJcbiAgXHJcbiAgLmRkOmhvdmVye1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMjAwLCAyMDApO1xyXG4gIH1cclxuICBcclxuICBcclxuICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-player',
          templateUrl: './player.component.html',
          styleUrls: ['./player.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ipl/team/team.component.ts":
  /*!********************************************!*\
    !*** ./src/app/ipl/team/team.component.ts ***!
    \********************************************/

  /*! exports provided: TeamComponent */

  /***/
  function srcAppIplTeamTeamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamComponent", function () {
      return TeamComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TeamComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var team_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](team_r1.team);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](team_r1.home);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](team_r1.coach);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](team_r1.city);
      }
    }

    var TeamComponent = /*#__PURE__*/function () {
      function TeamComponent(http) {
        _classCallCheck(this, TeamComponent);

        this.http = http;
        this.teams = [];
      }

      _createClass(TeamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.http.get("https://ipl2020-stat.herokuapp.com/ipl2020/team/all").subscribe(function (data) {
            _this3.teams = data;
          });
        }
      }]);

      return TeamComponent;
    }();

    TeamComponent.ɵfac = function TeamComponent_Factory(t) {
      return new (t || TeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TeamComponent,
      selectors: [["app-team"]],
      decls: 2,
      vars: 1,
      consts: [[1, "row"], ["class", "col-md-3 mb-2", 4, "ngFor", "ngForOf"], [1, "col-md-3", "mb-2"], [1, "card", 2, "min-height", "16rem"], [1, "card-body"], [1, "card-title"], [1, "card-text"]],
      template: function TeamComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeamComponent_div_1_Template, 12, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.teams);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".card[_ngcontent-%COMP%]:hover{\r\n    color: honeydew;\r\n    background-color: grey;\r\n    box-shadow: 0 5px 15px rgba(0,0,0,0.9);\r\n    transition: box-shadow 0s ease-in-out;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXBsL3RlYW0vdGVhbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixzQ0FBc0M7SUFDdEMscUNBQXFDOztBQUV6QyIsImZpbGUiOiJzcmMvYXBwL2lwbC90ZWFtL3RlYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkOmhvdmVye1xyXG4gICAgY29sb3I6IGhvbmV5ZGV3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLDAsMCwwLjkpO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwcyBlYXNlLWluLW91dDtcclxuICBcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-team',
          templateUrl: './team.component.html',
          styleUrls: ['./team.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);

        this.data = {};
      }

      _createClass(LoginComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.data);
        }
      }, {
        key: "loginUser",
        value: function loginUser(event) {
          event.prentDefault();
          console.log(event);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)();
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 12,
      vars: 0,
      consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], [1, "wrapper", "fadeInDown"], ["id", "formContent"], [1, "fadeIn", "first"], ["src", "http://danielzawadzki.com/codepen/01/icon.svg", "id", "icon", "alt", "User Icon"], ["type", "text", "id", "login", "name", "login", "placeholder", "login", 1, "fadeIn", "second"], ["type", "text", "id", "password", "name", "login", "placeholder", "password", 1, "fadeIn", "third"], ["routerLink", "home", "type", "submit", "value", "Log In", 1, "fadeIn", "fourth"], ["id", "formFooter"], ["roterLink", "forgot", 1, "underlineHover"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Forgot Password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["html[_ngcontent-%COMP%] {\r\n    background-color: #56baed;\r\n  }\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    font-family: \"Poppins\", sans-serif;\r\n    height: 100vh;\r\n  }\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #92badd;\r\n    display:inline-block;\r\n    text-decoration: none;\r\n    font-weight: 400;\r\n  }\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    display:inline-block;\r\n    margin: 40px 8px 10px 8px; \r\n    color: #cccccc;\r\n  }\r\n\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    padding: 20px;\r\n  }\r\n\r\n#formContent[_ngcontent-%COMP%] {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #fff;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n    text-align: center;\r\n  }\r\n\r\n#formFooter[_ngcontent-%COMP%] {\r\n    background-color: #f6f6f6;\r\n    border-top: 1px solid #dce8f1;\r\n    padding: 25px;\r\n    text-align: center;\r\n    border-radius: 0 0 10px 10px;\r\n  }\r\n\r\n\r\n\r\nh2.inactive[_ngcontent-%COMP%] {\r\n    color: #cccccc;\r\n  }\r\n\r\nh2.active[_ngcontent-%COMP%] {\r\n    color: #0d0d0d;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\n\r\n\r\ninput[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]  {\r\n    background-color: #56baed;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 80px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n    border-radius: 5px 5px 5px 5px;\r\n    margin: 5px 20px 40px 20px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n\r\ninput[type=button][_ngcontent-%COMP%]:hover, input[type=submit][_ngcontent-%COMP%]:hover, input[type=reset][_ngcontent-%COMP%]:hover  {\r\n    background-color: #39ace7;\r\n  }\r\n\r\ninput[type=button][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:active, input[type=reset][_ngcontent-%COMP%]:active  {\r\n    transform: scale(0.95);\r\n  }\r\n\r\ninput[type=text][_ngcontent-%COMP%] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n\r\ninput[type=text][_ngcontent-%COMP%]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\ninput[type=text][_ngcontent-%COMP%]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n.fadeInDown[_ngcontent-%COMP%] {\r\n    -webkit-animation-name: fadeInDown;\r\n    animation-name: fadeInDown;\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n  }\r\n\r\n@-webkit-keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n\r\n@keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n\r\n\r\n\r\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n.fadeIn[_ngcontent-%COMP%] {\r\n    opacity:0;\r\n    -webkit-animation:fadeIn ease-in 1;\r\n    animation:fadeIn ease-in 1;\r\n  \r\n    -webkit-animation-fill-mode:forwards;\r\n    animation-fill-mode:forwards;\r\n  \r\n    -webkit-animation-duration:1s;\r\n    animation-duration:1s;\r\n  }\r\n\r\n.fadeIn.first[_ngcontent-%COMP%] {\r\n    -webkit-animation-delay: 0.4s;\r\n    animation-delay: 0.4s;\r\n  }\r\n\r\n.fadeIn.second[_ngcontent-%COMP%] {\r\n    -webkit-animation-delay: 0.6s;\r\n    animation-delay: 0.6s;\r\n  }\r\n\r\n.fadeIn.third[_ngcontent-%COMP%] {\r\n    -webkit-animation-delay: 0.8s;\r\n    animation-delay: 0.8s;\r\n  }\r\n\r\n.fadeIn.fourth[_ngcontent-%COMP%] {\r\n    -webkit-animation-delay: 1s;\r\n    animation-delay: 1s;\r\n  }\r\n\r\n\r\n\r\n.underlineHover[_ngcontent-%COMP%]:after {\r\n    display: block;\r\n    left: 0;\r\n    bottom: -10px;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: #56baed;\r\n    content: \"\";\r\n    transition: width 0.2s;\r\n  }\r\n\r\n.underlineHover[_ngcontent-%COMP%]:hover {\r\n    color: #0d0d0d;\r\n  }\r\n\r\n.underlineHover[_ngcontent-%COMP%]:hover:after{\r\n    width: 100%;\r\n  }\r\n\r\n\r\n\r\n*[_ngcontent-%COMP%]:focus {\r\n      outline: none;\r\n  }\r\n\r\n#icon[_ngcontent-%COMP%] {\r\n    width:60%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsVUFBVTs7QUFFVjtJQUNJLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLGtDQUFrQztJQUNsQyxhQUFhO0VBQ2Y7O0FBRUE7SUFDRSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixjQUFjO0VBQ2hCOztBQUlBLGNBQWM7O0FBRWQ7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7O0FBRUE7SUFFRSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBRVoseUNBQXlDO0lBQ3pDLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGtCQUFrQjtJQUVsQiw0QkFBNEI7RUFDOUI7O0FBSUEsU0FBUzs7QUFFVDtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsZ0NBQWdDO0VBQ2xDOztBQUlBLG1CQUFtQjs7QUFFbkI7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGVBQWU7SUFFZiw4Q0FBOEM7SUFFOUMsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUsxQixnQ0FBZ0M7RUFDbEM7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFLRSxzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBS3pCLGdDQUFnQztJQUVoQyw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFJQSxlQUFlOztBQUVmLHVDQUF1Qzs7QUFDdkM7SUFDRSxrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFO01BQ0UsVUFBVTtNQUVWLG1DQUFtQztJQUNyQztJQUNBO01BQ0UsVUFBVTtNQUVWLGVBQWU7SUFDakI7RUFDRjs7QUFFQTtJQUNFO01BQ0UsVUFBVTtNQUVWLG1DQUFtQztJQUNyQztJQUNBO01BQ0UsVUFBVTtNQUVWLGVBQWU7SUFDakI7RUFDRjs7QUFFQSxrQ0FBa0M7O0FBQ2xDLDRCQUE0QixPQUFPLFNBQVMsRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUU7O0FBRWxFLG9CQUFvQixPQUFPLFNBQVMsRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUU7O0FBRTFEO0lBQ0UsU0FBUztJQUNULGtDQUFrQztJQUVsQywwQkFBMEI7O0lBRTFCLG9DQUFvQztJQUVwQyw0QkFBNEI7O0lBRTVCLDZCQUE2QjtJQUU3QixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsNkJBQTZCO0lBRTdCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDZCQUE2QjtJQUU3QixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSwyQkFBMkI7SUFFM0IsbUJBQW1CO0VBQ3JCOztBQUVBLGtDQUFrQzs7QUFDbEM7SUFDRSxjQUFjO0lBQ2QsT0FBTztJQUNQLGFBQWE7SUFDYixRQUFRO0lBQ1IsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFJQSxXQUFXOztBQUVYO01BQ0ksYUFBYTtFQUNqQjs7QUFFQTtJQUNFLFNBQVM7RUFDWCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogQkFTSUMgKi9cclxuXHJcbmh0bWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICBcclxuICBhIHtcclxuICAgIGNvbG9yOiAjOTJiYWRkO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICBcclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDsgXHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogU1RSVUNUVVJFICovXHJcbiAgXHJcbiAgLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgI2Zvcm1Db250ZW50IHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAjZm9ybUZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogVEFCUyAqL1xyXG4gIFxyXG4gIGgyLmluYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuICBcclxuICBoMi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogRk9STSBUWVBPR1JBUEhZKi9cclxuICBcclxuICBpbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgbWFyZ2luOiA1cHggMjBweCA0MHB4IDIwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLCBpbnB1dFt0eXBlPXJlc2V0XTpob3ZlciAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5YWNlNztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSwgaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSwgaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlICB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIEFOSU1BVElPTlMgKi9cclxuICBcclxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluLWRvd24gQW5pbWF0aW9uICovXHJcbiAgLmZhZGVJbkRvd24ge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbiAgQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG4gIEBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbiAgXHJcbiAgLmZhZGVJbiB7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gICAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICAgIGFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWRlSW4uZmlyc3Qge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi5zZWNvbmQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi50aGlyZCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gIH1cclxuICBcclxuICAuZmFkZUluLmZvdXJ0aCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIH1cclxuICBcclxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG4gIC51bmRlcmxpbmVIb3ZlcjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcclxuICB9XHJcbiAgXHJcbiAgLnVuZGVybGluZUhvdmVyOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gIH1cclxuICBcclxuICAudW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogT1RIRVJTICovXHJcbiAgXHJcbiAgKjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfSBcclxuICBcclxuICAjaWNvbiB7XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgfVxyXG4gICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\APOORV\angular-app2\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map