"use strict";
(self["webpackChunkportfolio_angular"] = self["webpackChunkportfolio_angular"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _shared_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/page-not-found/page-not-found.component */ 9004);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/guards/auth.guard */ 7574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);





const routes = [{
  path: '',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_modules_landing-page_landing-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/landing-page/landing-page.module */ 1436)).then(m => m.LandingPageModule)
}, {
  path: 'dashboard',
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_modules_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/admin/admin.module */ 7442)).then(m => m.AdminModule)
}, {
  path: 'auth',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_modules_auth_auth_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/auth.module */ 3970)).then(m => m.AuthModule)
}, {
  path: '**',
  component: _shared_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _store_operations_auth_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/operations/auth/auth.actions */ 4415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 4307);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);




class AppComponent {
  constructor(store) {
    this.store = store;
  }
  ngOnInit() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      this.store.dispatch(_store_operations_auth_auth_actions__WEBPACK_IMPORTED_MODULE_0__.autoLogin());
    }
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ 4307);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/effects */ 2847);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9240);
/* harmony import */ var _core_interceptors_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/interceptors/auth-interceptor.service */ 7151);
/* harmony import */ var _core_interceptors_http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/interceptors/http-error-handler.interceptor */ 4639);
/* harmony import */ var _store_operations_projects_projects_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/operations/projects/projects.effects */ 4907);
/* harmony import */ var _store_app_reduce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/app.reduce */ 713);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store-devtools */ 203);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _store_operations_auth_auth_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/operations/auth/auth.effects */ 1834);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/components/button/button.component */ 42);
/* harmony import */ var _core_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/interceptors/loading.interceptor */ 1295);
/* harmony import */ var _core_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/interceptors/token-interceptor */ 5756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 6839);






















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
    useClass: _core_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_10__.LoadingInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
    useClass: _core_interceptors_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_3__.HeaderInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
    useClass: _core_interceptors_http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_4__.HttpErrorHandlerInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
    useClass: _core_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_11__.TokenInterceptor,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__.StoreModule.forRoot(_store_app_reduce__WEBPACK_IMPORTED_MODULE_6__.appReducer), _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__.EffectsModule.forRoot([_store_operations_auth_auth_effects__WEBPACK_IMPORTED_MODULE_8__.AuthEffects, _store_operations_projects_projects_effects__WEBPACK_IMPORTED_MODULE_5__.ProjectsEffects]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__.StoreDevtoolsModule.instrument({
    logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.production
  }), _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__.ButtonComponent]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__.StoreDevtoolsModule, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__.ButtonComponent]
  });
})();

/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _services_skills_skills_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/skills/skills.service */ 5798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);



class CoreModule {}
CoreModule.ɵfac = function CoreModule_Factory(t) {
  return new (t || CoreModule)();
};
CoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: CoreModule
});
CoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [_services_skills_skills_service__WEBPACK_IMPORTED_MODULE_0__.SkillsService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
})();

/***/ }),

/***/ 7574:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 4307);




class AuthGuard {
  constructor(router, store) {
    this.router = router;
    this.store = store;
    this.isAuthenticated = false;
  }
  canActivate() {
    return this.store.select('auth').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(authState => authState.user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(user => {
      const isAuth = !!user;
      if (isAuth) {
        return true;
      }
      return this.router.createUrlTree(['/', 'auth']);
    }));
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
};
AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 7151:
/*!***************************************************************!*\
  !*** ./src/app/core/interceptors/auth-interceptor.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderInterceptor": () => (/* binding */ HeaderInterceptor),
/* harmony export */   "checkAuthToken": () => (/* binding */ checkAuthToken)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 4307);




const CHECK_AUTH_TOKEN = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpContextToken(() => false);
const checkAuthToken = () => new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpContext().set(CHECK_AUTH_TOKEN, true);
class HeaderInterceptor {
  constructor(store) {
    this.store = store;
  }
  intercept(req, next) {
    if (req.context.get(CHECK_AUTH_TOKEN)) {
      return this.store.select('auth').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(authState => authState.user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.exhaustMap)(user => {
        if (!user) {
          return next.handle(req);
        }
        const authReq = req.clone({
          params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('auth', user.token)
        });
        return next.handle(authReq);
      }));
    }
    return next.handle(req);
  }
}
HeaderInterceptor.ɵfac = function HeaderInterceptor_Factory(t) {
  return new (t || HeaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
};
HeaderInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HeaderInterceptor,
  factory: HeaderInterceptor.ɵfac
});


/***/ }),

/***/ 4639:
/*!*********************************************************************!*\
  !*** ./src/app/core/interceptors/http-error-handler.interceptor.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpErrorHandlerInterceptor": () => (/* binding */ HttpErrorHandlerInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _core_models_dialog_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/models/dialog.enum */ 5319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _core_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/dialog.service */ 6797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 4307);







class HttpErrorHandlerInterceptor {
  constructor(dialogService, router, store) {
    this.dialogService = dialogService;
    this.router = router;
    this.store = store;
    this.dialogTypeEnum = _core_models_dialog_enum__WEBPACK_IMPORTED_MODULE_0__.DialogType;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => {
      const modalRef = this.dialogService.openDialog(this.dialogTypeEnum.Error, {
        message: `${err.statusText}: ${err?.error?.message || 'Error'}`,
        code: err.status
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({
        err,
        modalRef
      });
    }));
  }
}
HttpErrorHandlerInterceptor.ɵfac = function HttpErrorHandlerInterceptor_Factory(t) {
  return new (t || HttpErrorHandlerInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
};
HttpErrorHandlerInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HttpErrorHandlerInterceptor,
  factory: HttpErrorHandlerInterceptor.ɵfac
});


/***/ }),

/***/ 1295:
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/loading.interceptor.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingInterceptor": () => (/* binding */ LoadingInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/loading.service */ 2569);



class LoadingInterceptor {
  constructor(loadingScreenService) {
    this.loadingScreenService = loadingScreenService;
    this.activeRequests = 0;
  }
  intercept(request, next) {
    if (this.activeRequests === 0) {
      this.loadingScreenService.startLoading();
    }
    this.activeRequests++;
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => {
      this.activeRequests--;
      if (this.activeRequests === 0) {
        this.loadingScreenService.stopLoading();
      }
    }));
  }
}
LoadingInterceptor.ɵfac = function LoadingInterceptor_Factory(t) {
  return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService));
};
LoadingInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: LoadingInterceptor,
  factory: LoadingInterceptor.ɵfac
});


/***/ }),

/***/ 5756:
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/token-interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenInterceptor": () => (/* binding */ TokenInterceptor),
/* harmony export */   "checkBearerToken": () => (/* binding */ checkBearerToken)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _core_services_token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/token.service */ 6616);



const CHECK_BEARER_TOKEN = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpContextToken(() => false);
const checkBearerToken = () => new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpContext().set(CHECK_BEARER_TOKEN, true);
class TokenInterceptor {
  constructor(tokenService) {
    this.tokenService = tokenService;
  }
  intercept(req, next) {
    if (req.context.get(CHECK_BEARER_TOKEN)) {
      return this.addToken(req, next);
    }
    return next.handle(req);
  }
  addToken(req, next) {
    const accessToken = this.tokenService.getToken();
    if (accessToken) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
  return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_services_token_service__WEBPACK_IMPORTED_MODULE_0__.TokenService));
};
TokenInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: TokenInterceptor,
  factory: TokenInterceptor.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 5319:
/*!********************************************!*\
  !*** ./src/app/core/models/dialog.enum.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogType": () => (/* binding */ DialogType)
/* harmony export */ });
var DialogType;
(function (DialogType) {
  DialogType[DialogType["Success"] = 1] = "Success";
  DialogType[DialogType["Error"] = 2] = "Error";
  DialogType[DialogType["Info"] = 3] = "Info";
  DialogType[DialogType["Warning"] = 4] = "Warning";
})(DialogType || (DialogType = {}));

/***/ }),

/***/ 363:
/*!***************************************************!*\
  !*** ./src/app/core/models/tech-category.enum.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechCategory": () => (/* binding */ TechCategory)
/* harmony export */ });
var TechCategory;
(function (TechCategory) {
  TechCategory[TechCategory["Frontend"] = 1] = "Frontend";
  TechCategory[TechCategory["Backend"] = 2] = "Backend";
  TechCategory[TechCategory["Cloud"] = 3] = "Cloud";
  TechCategory[TechCategory["Database"] = 4] = "Database";
  TechCategory[TechCategory["TestingFramework"] = 5] = "TestingFramework";
})(TechCategory || (TechCategory = {}));

/***/ }),

/***/ 7990:
/*!****************************************************!*\
  !*** ./src/app/core/services/auth/auth.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _store_operations_auth_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/operations/auth/auth.actions */ 4415);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 4307);






class AuthService {
  constructor(store) {
    this.store = store;
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient);
  }
  setAutoLogout(expirationDuration) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.store.dispatch(_store_operations_auth_auth_actions__WEBPACK_IMPORTED_MODULE_1__.logout());
    }, expirationDuration);
  }
  clearLogoutTimer() {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }
  signUp(data) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SYSTEM_API}/${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_VERSION}/users`, data);
  }
  singIn(email, password) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SYSTEM_API}/${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_VERSION}/auth/login`, {
      email: email,
      password: password
    });
  }
  isEmailAvailable(email) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SYSTEM_API}/${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_VERSION}/auth/is-email-available`, {
      email
    });
  }
  recoveryPassword(email) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SYSTEM_API}/${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_VERSION}/auth/recovery`, {
      email
    });
  }
  changePassword(token, password) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SYSTEM_API}/${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_VERSION}/auth/reset-password`, {
      token,
      password
    });
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 6797:
/*!*************************************************!*\
  !*** ./src/app/core/services/dialog.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogService": () => (/* binding */ DialogService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 7486);
/* harmony import */ var _core_models_dialog_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/models/dialog.enum */ 5319);
/* harmony import */ var _shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/dialog/dialog.component */ 2324);





class DialogService {
  constructor() {
    this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog);
  }
  openDialog(dialogType = _core_models_dialog_enum__WEBPACK_IMPORTED_MODULE_0__.DialogType.Info, data, component) {
    if (component) {
      this.dialogRef = this.dialog.open(component, {
        data: {
          type: dialogType,
          data
        }
      });
    } else {
      this.dialogRef = this.dialog.open(_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__.DialogComponent, {
        data: {
          type: dialogType,
          data
        }
      });
    }
    return this.dialogRef;
  }
  closeDialog() {
    this.dialogRef.close();
  }
  getDialogRef() {
    return this.dialogRef;
  }
}
DialogService.ɵfac = function DialogService_Factory(t) {
  return new (t || DialogService)();
};
DialogService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: DialogService,
  factory: DialogService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 2569:
/*!**************************************************!*\
  !*** ./src/app/core/services/loading.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);


class LoadingService {
  constructor() {
    this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  startLoading() {
    this.loading$.next(true);
  }
  stopLoading() {
    this.loading$.next(false);
  }
}
LoadingService.ɵfac = function LoadingService_Factory(t) {
  return new (t || LoadingService)();
};
LoadingService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LoadingService,
  factory: LoadingService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 2879:
/*!***********************************************************!*\
  !*** ./src/app/core/services/projects/project.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceProjects": () => (/* binding */ ServiceProjects)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _core_interceptors_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/interceptors/auth-interceptor.service */ 7151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3765);





class ServiceProjects {
  constructor(http) {
    this.http = http;
    this.projectsArray = [];
  }
  getAllProjects() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL_FIREBASE}.json`, {
      context: (0,_core_interceptors_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_1__.checkAuthToken)()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(responseData => {
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          this.projectsArray.push({
            ...responseData[key],
            id: key
          });
        }
      }
      return this.projectsArray;
    }));
  }
  getProject(id) {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL_FIREBASE}/${id}.json`);
  }
  createProjects(project) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL_FIREBASE}.json`, project);
  }
  updateProjects(id, changes) {
    return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL_FIREBASE}/${id}.json`, changes);
  }
  deleteProjects(id) {
    return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL_FIREBASE}/${id}.json`).subscribe();
  }
}
ServiceProjects.ɵfac = function ServiceProjects_Factory(t) {
  return new (t || ServiceProjects)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
ServiceProjects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ServiceProjects,
  factory: ServiceProjects.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 5798:
/*!********************************************************!*\
  !*** ./src/app/core/services/skills/skills.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsService": () => (/* binding */ SkillsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/models/tech-category.enum */ 363);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);





class SkillsService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient);
    this.overAllYearsOfExperience = new Date().getFullYear() - new Date('01/01/2017').getFullYear();
    this.skills = [{
      name: 'Angular',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'My expertise lies in leveraging Angular\'s powerful features such as component-based architecture, dependency injection, and reactive programming using RxJS. I have successfully built and maintained large-scale applications, utilizing Angular\'s comprehensive tooling and development ecosystem.',
      category: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.Frontend
    }, {
      name: 'React',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'I possess extensive expertise in React, a popular JavaScript library for building user interfaces. With several years of experience, I have developed a deep understanding of React\'s core concepts, component-based architecture, and its robust ecosystem.',
      category: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.Frontend
    }, {
      name: 'Node.js',
      knowledge: 100,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'in Node.js, I have established a strong foundation in server-side JavaScript development. I possess in-depth knowledge and expertise in leveraging Node.js to build scalable and high-performance web applications.',
      category: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.Backend
    }, {
      name: 'Css',
      knowledge: 100,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'With a strong command over CSS (Cascading Style Sheets), I possess the skills to create visually appealing and engaging user interfaces. I have developed expertise in leveraging CSS to style and layout web pages with precision and creativity.',
      category: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.Frontend
    }, {
      name: 'MondoDB',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'With expertise in MongoDB, I possess a strong understanding of this NoSQL database technology and its application in modern web development. I have successfully utilized MongoDB to build scalable and flexible data storage solutions.',
      category: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.Database
    }, {
      name: 'Typescript',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'I am skilled in leveraging TypeScript\'s powerful tooling and language features to facilitate efficient development workflows. I am proficient in utilizing TypeScript\'s transpilation process to convert TypeScript code into JavaScript that runs on different platforms and browsers.',
      category: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.Frontend
    }, {
      name: 'Tailwind',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'My proficiency in Tailwind CSS lies in its unique approach of using utility classes to style and design web interfaces. I am skilled in leveraging Tailwind CSS\'s extensive collection of utility classes to rapidly prototype and build user interfaces with minimal custom CSS.',
      category: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.Frontend
    }, {
      name: 'Nest.js',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'Nest.js combines the best practices of object-oriented programming, functional programming, and the modular architecture of frameworks like Angular. I am skilled in leveraging Nest.js\'s features, such as decorators, dependency injection, and decorators, to create highly organized and testable code.',
      category: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.Backend
    }, {
      name: 'AWS',
      knowledge: 100,
      // proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'I am proficient in utilizing AWS core services, including Amazon EC2 for virtual server provisioning, Amazon S3 for scalable object storage, and Amazon RDS for managed relational databases. I have experience in leveraging these services to build highly available and fault-tolerant architectures.',
      category: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.Cloud
    }, {
      name: 'Express',
      knowledge: 100,
      proficient: true,
      logo: 'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'I am skilled in building RESTful APIs using Express.js, adhering to best practices for resource naming, HTTP methods, and status codes. I can effectively handle data validation, input sanitization, and response formatting to ensure the integrity and security of the API.',
      category: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.Backend
    }, {
      name: 'Javascript',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'With expertise in JavaScript, I bring a strong understanding of this versatile programming language to my web development projects. With 8 years of experience, I have successfully utilized JavaScript to build dynamic and interactive web applications.',
      category: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.Frontend
    }, {
      name: 'MySql',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'With expertise in MySQL, I possess a strong understanding of this popular open-source relational database management system. With [X] years of experience, I have successfully utilized MySQL to design, develop, and maintain efficient and reliable databases for various web applications.',
      category: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.Database
    }, {
      name: 'PostgreSQL',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'I am proficient in creating and optimizing database schemas, tables, and indexes using PostgreSQL\'s SQL (Structured Query Language). I have a deep understanding of SQL syntax, enabling me to write complex queries, joins, and subqueries to retrieve and manipulate data effectively.',
      category: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.Database
    }, {
      name: 'C#',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-line.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'C# is a powerful and modern object-oriented language that is widely used in the development of desktop, web, and mobile applications. I am proficient in leveraging C#\'s features such as strong typing, automatic memory management, and extensive standard libraries to write clean, maintainable, and efficient code.',
      category: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.Backend
    }, {
      name: 'Git',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'With expertise in Git, I possess a strong understanding of this distributed version control system, which is widely used in software development projects.',
      category: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.Frontend
    }, {
      name: '.Net Core',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'With expertise in .NET Core, I possess a strong understanding of this powerful and cross-platform framework for building modern web, desktop, and cloud applications.  I have successfully utilized .NET Core to develop scalable, high-performance, and maintainable software solutions.',
      category: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.Backend
    }, {
      name: 'Jasmine',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-plain.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'With expertise in Jasmine, I possess a strong understanding of this popular JavaScript testing framework used for behavior-driven development (BDD) and unit testing.',
      category: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.TestingFramework
    }, {
      name: 'Jest',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'With expertise in Jest, I possess a strong understanding of this popular JavaScript testing framework used for unit testing, integration testing, and snapshot testing.',
      category: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.TestingFramework
    }, {
      name: 'Karma',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/karma/karma-original.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'By adopting the Karma Developer Unit Testing methodology, developers can gain confidence in the correctness of their karma-related code units. It helps uncover bugs, edge cases, and inconsistencies, allowing developers to fix issues early in the development cycle.',
      category: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.TestingFramework
    }, {
      name: 'HTML',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'I am well-versed in utilizing HTML best practices for accessibility, including providing alternative text for images, using semantic tags, and structuring content to be screen reader-friendly. ',
      category: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.Frontend
    }];
  }
  getAllSkills() {
    return this.skills;
  }
  getSkillAsync() {
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_BASE_URL}/${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_VERSION}/skills`);
  }
}
SkillsService.ɵfac = function SkillsService_Factory(t) {
  return new (t || SkillsService)();
};
SkillsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: SkillsService,
  factory: SkillsService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 6616:
/*!************************************************!*\
  !*** ./src/app/core/services/token.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenService": () => (/* binding */ TokenService)
/* harmony export */ });
/* harmony import */ var typescript_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript-cookie */ 937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);


class TokenService {
  constructor() {
    this.tokenStorageKey = 'token';
  }
  getToken() {
    return (0,typescript_cookie__WEBPACK_IMPORTED_MODULE_0__.getCookie)(this.tokenStorageKey);
  }
  setToken(token) {
    (0,typescript_cookie__WEBPACK_IMPORTED_MODULE_0__.setCookie)(this.tokenStorageKey, token, {
      expires: 365,
      path: '/'
    });
  }
  removeToken() {
    (0,typescript_cookie__WEBPACK_IMPORTED_MODULE_0__.removeCookie)(this.tokenStorageKey);
  }
}
TokenService.ɵfac = function TokenService_Factory(t) {
  return new (t || TokenService)();
};
TokenService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TokenService,
  factory: TokenService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 42:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/button/button.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonComponent": () => (/* binding */ ButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/material/material.module */ 793);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 3677);





const _c0 = ["*"];
class ButtonComponent {
  constructor() {
    this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  triggerEvent() {
    this.clickEvent.emit(new Event('click'));
  }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) {
  return new (t || ButtonComponent)();
};
ButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ButtonComponent,
  selectors: [["portfolio-button"]],
  inputs: {
    color: "color",
    type: "type",
    class: "class"
  },
  outputs: {
    clickEvent: "clickEvent"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 4,
  consts: [["mat-raised-button", "", 1, "animate__animated", "animate__fadeInUp", "animate__slow", 3, "type", "color", "click"]],
  template: function ButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_0_listener() {
        return ctx.triggerEvent();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.class);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.type)("color", ctx.color);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _shared_material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 2324:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/dialog/dialog.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogComponent": () => (/* binding */ DialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 7486);
/* harmony import */ var _core_models_dialog_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/models/dialog.enum */ 5319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 3677);






function DialogComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "ul", 10)(12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Error ", ctx_r0.data.data.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.data.data.message);
  }
}
function DialogComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14)(2, "div", 2)(3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Success!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "div", 18)(11, "ul", 10)(12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11)(15, "div", 19)(16, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Dismiss ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.data.data.message);
  }
}
function DialogComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6)(6, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8)(9, "div", 25)(10, "ul", 10)(11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11)(14, "div", 19)(15, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Dismiss ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.data.data.message);
  }
}
function DialogComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 27)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6)(6, "h4", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Attention needed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8)(9, "div", 31)(10, "ul", 10)(11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11)(14, "div", 19)(15, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Dismiss ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.data.data.message);
  }
}
class DialogComponent {
  constructor(data) {
    this.data = data;
    this.dialogType = _core_models_dialog_enum__WEBPACK_IMPORTED_MODULE_0__.DialogType;
  }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) {
  return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
};
DialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DialogComponent,
  selectors: [["portfolio-dialog"]],
  decls: 4,
  vars: 4,
  consts: [[4, "ngIf"], [1, "md:w-[500px]", "rounded-md", "bg-red-50", "p-2", "md:p-4"], [1, "flex", "items-center"], [1, "flex-shrink-0"], ["viewBox", "0 0 20 20", "fill", "currentColor", "aria-hidden", "true", 1, "h-5", "w-5", "text-red-400"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z", "clip-rule", "evenodd"], [1, "ml-3"], [1, "text-red-400", "text-sm", "font-medium"], ["mat-dialog-content", ""], [1, "text-sm", "text-red-700"], ["role", "list", 1, "space-y-1", "pl-5"], ["mat-dialog-actions", ""], [1, "flex", "w-full", "justify-end"], ["mat-raised-button", "", "color", "warn", "mat-dialog-close", ""], [1, "md:w-[500px]", "rounded-md", "bg-green-50", "p-2", "md:p-4"], ["viewBox", "0 0 20 20", "fill", "currentColor", "aria-hidden", "true", 1, "h-5", "w-5", "text-green-400"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", "clip-rule", "evenodd"], [1, "text-green-800", "text-sm", "font-medium"], [1, "text-sm", "text-green-700"], [1, "-mx-2", "-my-1.5", "flex", "justify-end", "w-full"], ["mat-dialog-close", "", "type", "button", 1, "ml-3", "rounded-md", "bg-green-50", "px-4", "py-1.5", "text-sm", "font-medium", "text-green-800", "hover:bg-green-100", "focus-visible:outline-none", "focus-within:outline-none", "focus:outline-none", "focus:bg-green-200", "focus:ring-green-600", "focus:ring-offset-green-50"], [1, "md:w-[500px]", "rounded-md", "bg-blue-50", "p-2", "md:p-4"], ["viewBox", "0 0 20 20", "fill", "currentColor", "aria-hidden", "true", 1, "h-5", "w-5", "text-blue-400"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", "clip-rule", "evenodd"], [1, "text-blue-400", "text-sm", "font-medium"], [1, "text-sm", "text-blue-700"], ["mat-dialog-close", "", "type", "button", 1, "ml-3", "rounded-md", "bg-blue-50", "px-4", "py-1.5", "text-sm", "font-medium", "text-blue-800", "hover:bg-blue-100", "focus-visible:outline-none", "focus-within:outline-none", "focus:outline-none", "focus:bg-blue-200", "focus:ring-blue-600", "focus:ring-offset-blue-50"], [1, "md:w-[500px]", "rounded-md", "bg-yellow-50", "p-2", "md:p-4"], ["viewBox", "0 0 20 20", "fill", "currentColor", "aria-hidden", "true", 1, "h-5", "w-5", "text-yellow-400"], ["fill-rule", "evenodd", "d", "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z", "clip-rule", "evenodd"], [1, "text-yellow-400", "text-sm", "font-medium"], [1, "text-sm", "text-yellow-700"], ["mat-dialog-close", "", "type", "button", 1, "ml-3", "rounded-md", "bg-yellow-50", "px-4", "py-1.5", "text-sm", "font-medium", "text-yellow-800", "hover:bg-yellow-100", "focus-visible:outline-none", "focus-within:outline-none", "focus:outline-none", "focus:bg-yellow-200", "focus:ring-yellow-600", "focus:ring-offset-yellow-50"]],
  template: function DialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DialogComponent_ng_container_0_Template, 18, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DialogComponent_ng_container_1_Template, 18, 1, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DialogComponent_ng_container_2_Template, 17, 1, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DialogComponent_ng_container_3_Template, 17, 1, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.type === ctx.dialogType.Error);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.type === ctx.dialogType.Success);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.type === ctx.dialogType.Info);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.type === ctx.dialogType.Warning);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 9004:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/page-not-found/page-not-found.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6679);


const _c0 = function () {
  return ["/"];
};
class PageNotFoundComponent {
  constructor() {}
  ngOnInit() {}
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
  return new (t || PageNotFoundComponent)();
};
PageNotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageNotFoundComponent,
  selectors: [["portfolio-page-not-found"]],
  decls: 8,
  vars: 2,
  consts: [[1, "notFound__hero"], ["src", "https://media-porfolio.s3.us-east-2.amazonaws.com/images/404_error.png", "alt", "astronaut"], [1, "container-astro"], [1, "img-astro"], [3, "routerLink"], ["src", "https://media-porfolio.s3.us-east-2.amazonaws.com/images/astronauta.png", "alt", "astro"]],
  template: function PageNotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Page not Found please click on the astronaut to return to homePage");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: [".notFound__hero[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  background-position: center;\n  position: relative;\n  bottom: 10px;\n  top: 0;\n  background: url(\"https://media-porfolio.s3.us-east-2.amazonaws.com/images/stars.svg\"), #1b1b25;\n  background-repeat: repeat;\n  color: #ffffff;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n.notFound__hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: relative;\n  top: -100px;\n}\n\n.notFound__hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: none;\n  width: 500px;\n  height: 500px;\n  margin: 0;\n}\n\n.container-astro[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.img-astro[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n}\n\n.img-astro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 80px;\n  will-change: width, transform;\n  transition: 1s;\n  transform-origin: center;\n  animation-name: _ngcontent-%COMP%_astronauta, _ngcontent-%COMP%_mov;\n  animation-duration: 100s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear, linear, ease-in;\n  animation-direction: alternate;\n  position: relative;\n}\n\n@keyframes _ngcontent-%COMP%_astronauta {\n  0% {\n    transform: rotate(0deg) scale(1);\n  }\n  25% {\n    transform: rotate(90deg) scale(1.5);\n  }\n  50% {\n    transform: rotate(180deg) scale(2);\n  }\n  75% {\n    transform: rotate(270deg) scale(1.5);\n  }\n  100% {\n    transform: rotate(360deg) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_mov {\n  0% {\n    left: 300px;\n    right: 0px;\n    top: 500px;\n    bottom: 550px;\n  }\n  25% {\n    left: 300px;\n    right: 0px;\n    top: 0px;\n    bottom: 500px;\n  }\n  50% {\n    left: 1000px;\n    right: 500px;\n    top: 0px;\n    bottom: 500px;\n  }\n  75% {\n    left: 0px;\n    right: 500px;\n    top: 500px;\n    bottom: 0;\n  }\n  100% {\n    left: 1000px;\n    top: 0px;\n    right: 500px;\n    bottom: 0px;\n  }\n}\n.img-astro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transition: 1s;\n  width: 100px;\n  height: 160px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLDhGQUFBO0VBRUEseUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUFGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFHRjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrREFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFGQTtFQUNFO0lBQ0UsZ0NBQUE7RUFLRjtFQUhBO0lBQ0UsbUNBQUE7RUFLRjtFQUhBO0lBQ0Usa0NBQUE7RUFLRjtFQUhBO0lBQ0Usb0NBQUE7RUFLRjtFQUhBO0lBQ0Usa0NBQUE7RUFLRjtBQUNGO0FBSEE7RUFDRTtJQUNFLFdBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7RUFLRjtFQUhBO0lBQ0UsV0FBQTtJQUNBLFVBQUE7SUFDQSxRQUFBO0lBQ0EsYUFBQTtFQUtGO0VBSEE7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLFFBQUE7SUFDQSxhQUFBO0VBS0Y7RUFIQTtJQUNFLFNBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUFLRjtFQUhBO0lBQ0UsWUFBQTtJQUNBLFFBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQUtGO0FBQ0Y7QUFIQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUtGIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdEZvdW5kX19oZXJvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDEwcHg7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL21lZGlhLXBvcmZvbGlvLnMzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2ltYWdlcy9zdGFycy5zdmcnKSxcbiAgICAjMWIxYjI1O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYgcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTEwMHB4O1xuICB9XG59XG4ubm90Rm91bmRfX2hlcm8gaW1nIHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIG1hcmdpbjogMDtcbn1cbi5jb250YWluZXItYXN0cm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbi5pbWctYXN0cm8ge1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG59XG4uaW1nLWFzdHJvIGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpbGwtY2hhbmdlOiB3aWR0aCwgdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uOiAxcztcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICBhbmltYXRpb24tbmFtZTogYXN0cm9uYXV0YSwgbW92O1xuICBhbmltYXRpb24tZHVyYXRpb246IDEwMHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXIsIGxpbmVhciwgZWFzZS1pbjtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5Aa2V5ZnJhbWVzIGFzdHJvbmF1dGEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMSk7XG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGUoMS41KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZykgc2NhbGUoMik7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpIHNjYWxlKDEuNSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBtb3Yge1xuICAwJSB7XG4gICAgbGVmdDogMzAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB0b3A6IDUwMHB4O1xuICAgIGJvdHRvbTogNTUwcHg7XG4gIH1cbiAgMjUlIHtcbiAgICBsZWZ0OiAzMDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIHRvcDogMHB4O1xuICAgIGJvdHRvbTogNTAwcHg7XG4gIH1cbiAgNTAlIHtcbiAgICBsZWZ0OiAxMDAwcHg7XG4gICAgcmlnaHQ6IDUwMHB4O1xuICAgIHRvcDogMHB4O1xuICAgIGJvdHRvbTogNTAwcHg7XG4gIH1cbiAgNzUlIHtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDUwMHB4O1xuICAgIHRvcDogNTAwcHg7XG4gICAgYm90dG9tOiAwO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDEwMDBweDtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogNTAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gIH1cbn1cbi5pbWctYXN0cm8gaW1nOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxNjBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 793:
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ 9101);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/slider */ 7824);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ 3574);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2193);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 9314);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ 919);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 6322);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ 6069);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 3348);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 8750);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 6907);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 6508);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/progress-spinner */ 5312);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 7486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 6839);



















const modules = [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_0__.MatProgressSpinnerModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__.MatSliderModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__.MatGridListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.LayoutModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule];
class MaterialModule {}
MaterialModule.ɵfac = function MaterialModule_Factory(t) {
  return new (t || MaterialModule)();
};
MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
  type: MaterialModule
});
MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
  imports: [modules, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_0__.MatProgressSpinnerModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__.MatSliderModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__.MatGridListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.LayoutModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](MaterialModule, {
    imports: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_0__.MatProgressSpinnerModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__.MatSliderModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__.MatGridListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.LayoutModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule],
    exports: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_0__.MatProgressSpinnerModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__.MatSliderModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__.MatGridListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.LayoutModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule]
  });
})();

/***/ }),

/***/ 713:
/*!*************************************!*\
  !*** ./src/app/store/app.reduce.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appReducer": () => (/* binding */ appReducer)
/* harmony export */ });
/* harmony import */ var _operations_projects_projects_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operations/projects/projects.reducer */ 1616);
/* harmony import */ var _operations_auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operations/auth/auth.reducer */ 2970);


const appReducer = {
  projects: _operations_projects_projects_reducer__WEBPACK_IMPORTED_MODULE_0__.projectReducer,
  auth: _operations_auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__.authReducer
};

/***/ }),

/***/ 4415:
/*!*******************************************************!*\
  !*** ./src/app/store/operations/auth/auth.actions.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authenticateFail": () => (/* binding */ authenticateFail),
/* harmony export */   "authenticateSuccess": () => (/* binding */ authenticateSuccess),
/* harmony export */   "autoLogin": () => (/* binding */ autoLogin),
/* harmony export */   "clearError": () => (/* binding */ clearError),
/* harmony export */   "loginStart": () => (/* binding */ loginStart),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "signUpStart": () => (/* binding */ signUpStart),
/* harmony export */   "signUpSuccess": () => (/* binding */ signUpSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 4307);

const authenticateSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Authenticate Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const signUpSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Signup Success');
const loginStart = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Login Start', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const signUpStart = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Signup Start', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const logout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Logout');
const authenticateFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Authenticate fail', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const clearError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Clear Error');
const autoLogin = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Auto Login');

/***/ }),

/***/ 1834:
/*!*******************************************************!*\
  !*** ./src/app/store/operations/auth/auth.effects.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthEffects": () => (/* binding */ AuthEffects)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ 2847);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ 4415);
/* harmony import */ var _core_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/dialog.service */ 6797);
/* harmony import */ var _core_models_dialog_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/models/dialog.enum */ 5319);
/* harmony import */ var _core_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/token.service */ 6616);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/auth/auth.service */ 7990);












class AuthEffects {
  constructor(actions$, router, authService) {
    this.actions$ = actions$;
    this.router = router;
    this.authService = authService;
    this.dialogService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__.DialogService);
    this.tokenService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_services_token_service__WEBPACK_IMPORTED_MODULE_3__.TokenService);
    this.dialogEnumType = _core_models_dialog_enum__WEBPACK_IMPORTED_MODULE_2__.DialogType;
    this.authSignUp$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_0__.signUpStart), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(action => this.authService.signUp({
      email: action.email,
      lastname: action.lastname,
      firstname: action.firstname,
      password: action.password
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => _auth_actions__WEBPACK_IMPORTED_MODULE_0__.loginStart({
      email: action.email,
      password: action.password
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError.bind(this))))));
    this.authLogout$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_0__.logout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => localStorage.removeItem('userData')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.dialogService.openDialog(this.dialogEnumType.Success, {
      message: 'You were succesfully logout.'
    }))), {
      dispatch: false
    });
    this.authSignIn$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_0__.loginStart), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(action => this.authService.singIn(action.email, action.password).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(respData => {
      this.dialogService.openDialog(this.dialogEnumType.Success, {
        message: `login successfull welcome ${respData.displayName}`
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(resData => this.handleAuthentication(resData)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.router.navigate(['/', 'dashboard'])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(_auth_actions__WEBPACK_IMPORTED_MODULE_0__.clearError()))))));
    this.authRedirect$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_0__.authenticateSuccess)), {
      dispatch: false
    });
    this.authRedirectLogout$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_0__.logout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => {
      this.router.navigate(['/', 'auth']);
      this.authService.clearLogoutTimer();
    })), {
      dispatch: false
    });
    this.authAutoLogin$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_0__.autoLogin), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => {
      const userData = JSON.parse(localStorage.getItem('userData'));
      return _auth_actions__WEBPACK_IMPORTED_MODULE_0__.authenticateSuccess(userData);
    })));
  }
  handleError(errorResponse) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(_auth_actions__WEBPACK_IMPORTED_MODULE_0__.authenticateFail({
      errorMessage: errorResponse.error.message
    }));
  }
  handleAuthentication(responseData) {
    localStorage.setItem('userData', JSON.stringify(responseData));
    this.tokenService.setToken(responseData.token);
    return _auth_actions__WEBPACK_IMPORTED_MODULE_0__.authenticateSuccess(responseData);
  }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) {
  return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService));
};
AuthEffects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: AuthEffects,
  factory: AuthEffects.ɵfac
});


/***/ }),

/***/ 2970:
/*!*******************************************************!*\
  !*** ./src/app/store/operations/auth/auth.reducer.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authReducer": () => (/* binding */ authReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 4307);
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ 4415);


const initialState = {
  user: null,
  error: null,
  loading: false
};
const _authReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_0__.loginStart, _auth_actions__WEBPACK_IMPORTED_MODULE_0__.signUpStart, state => ({
  ...state,
  user: null,
  error: null,
  loading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_0__.logout, state => ({
  ...state,
  user: null,
  uthError: null,
  loading: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_0__.authenticateSuccess, (state, action) => ({
  ...state,
  user: action,
  error: null,
  loading: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_0__.authenticateFail, (state, action) => ({
  ...state,
  error: action.errorMessage,
  loading: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_0__.clearError, state => ({
  ...state,
  loading: false,
  error: null
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_0__.signUpSuccess, () => initialState));
const authReducer = (state, action) => _authReducer(state, action);

/***/ }),

/***/ 2376:
/*!***************************************************************!*\
  !*** ./src/app/store/operations/projects/projects.actions.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearError": () => (/* binding */ clearError),
/* harmony export */   "fetchProjects": () => (/* binding */ fetchProjects),
/* harmony export */   "fetchProjectsFail": () => (/* binding */ fetchProjectsFail),
/* harmony export */   "fetchProjectsSuccess": () => (/* binding */ fetchProjectsSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 4307);

const fetchProjectsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Projects] Set Projects', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchProjects = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Projects] Fetch Projects');
const fetchProjectsFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Projects] Fail Fetch Projects', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const clearError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Projects] Clear Error');

/***/ }),

/***/ 4907:
/*!***************************************************************!*\
  !*** ./src/app/store/operations/projects/projects.effects.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsEffects": () => (/* binding */ ProjectsEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 2847);
/* harmony import */ var _projects_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.actions */ 2376);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 4307);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _core_services_projects_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/projects/project.service */ 2879);










class ProjectsEffects {
  constructor(actions$, http, store, router, serviceProjects) {
    this.actions$ = actions$;
    this.http = http;
    this.store = store;
    this.router = router;
    this.serviceProjects = serviceProjects;
    this.fetchProjects$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_projects_actions__WEBPACK_IMPORTED_MODULE_0__.fetchProjects), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => this.serviceProjects.getAllProjects().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(projects => _projects_actions__WEBPACK_IMPORTED_MODULE_0__.fetchProjectsSuccess({
      projects
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      error.modalRef.afterClosed().subscribe(() => {
        this.store.dispatch(_projects_actions__WEBPACK_IMPORTED_MODULE_0__.clearError());
        this.router.navigate(['/']);
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_projects_actions__WEBPACK_IMPORTED_MODULE_0__.fetchProjectsFail({
        errorMessage: error.err.statusText
      }));
    })))));
  }
}
ProjectsEffects.ɵfac = function ProjectsEffects_Factory(t) {
  return new (t || ProjectsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_services_projects_project_service__WEBPACK_IMPORTED_MODULE_1__.ServiceProjects));
};
ProjectsEffects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: ProjectsEffects,
  factory: ProjectsEffects.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 1616:
/*!***************************************************************!*\
  !*** ./src/app/store/operations/projects/projects.reducer.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectReducer": () => (/* binding */ projectReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 4307);
/* harmony import */ var _projects_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.actions */ 2376);


const initialState = {
  projects: [],
  errorMessage: null,
  loading: false
};
const _projectsReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_projects_actions__WEBPACK_IMPORTED_MODULE_0__.fetchProjectsSuccess, (state, action) => ({
  ...state,
  projects: [...action.projects],
  errorMessage: null,
  loading: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_projects_actions__WEBPACK_IMPORTED_MODULE_0__.fetchProjects, (state, action) => ({
  ...state,
  errorMessage: null,
  loading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_projects_actions__WEBPACK_IMPORTED_MODULE_0__.fetchProjectsFail, (state, action) => ({
  ...state,
  errorMessage: action.errorMessage,
  loading: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_projects_actions__WEBPACK_IMPORTED_MODULE_0__.clearError, state => ({
  ...state,
  loading: false,
  errorMessage: null
})));
function projectReducer(state, action) {
  return _projectsReducer(state, action);
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  API_URL_FIREBASE: 'https://porfolio-8433c-default-rtdb.firebaseio.com/projects',
  API_AUTH_FIREBASE_SIGNUP: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
  API_AUTH_FIREBASE_SIGNIN: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
  API_KEY_FIREBASE: 'AIzaSyB1i143xgUQYNvO9BOLHh9N-tLLbYicGDI',
  API_DEV: 'http://localhost:3000/api/projects/',
  API_AUTH_DEV: 'http://localhost:3000',
  API_BASE_URL: 'https://api.rebel-transport-gr75.com',
  API_VERSION: 'api/v1',
  SYSTEM_API: 'https://system.rebel-transport-gr75.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map