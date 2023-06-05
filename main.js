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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _shared_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/page-not-found/page-not-found.component */ 9004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




const routes = [{
  path: '',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_modules_landing-page_landing-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/landing-page/landing-page.module */ 1436)).then(m => m.LandingPageModule)
}, {
  path: 'dashboard',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_modules_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/admin/admin.module */ 7442)).then(m => m.AdminModule)
}, {
  path: '**',
  component: _shared_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/auth/auth.service */ 7990);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 4307);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);





class AppComponent {
  constructor(auth, store) {
    this.auth = auth;
    this.store = store;
  }
  ngOnInit() {
    this.store.dispatch(_store_operations_auth_auth_actions__WEBPACK_IMPORTED_MODULE_0__.autoLogin());
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet],
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 4307);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/effects */ 2847);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9240);
/* harmony import */ var _core_services_auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/auth/auth-interceptor.service */ 2318);
/* harmony import */ var _store_operations_projects_projects_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/operations/projects/projects.effects */ 4907);
/* harmony import */ var _store_app_reduce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/app.reduce */ 713);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store-devtools */ 203);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _store_operations_auth_auth_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/operations/auth/auth.effects */ 1834);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components/button/button.component */ 42);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 6839);



















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
    useClass: _core_services_auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_3__.HeaderInterceptor,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_13__.StoreModule.forRoot(_store_app_reduce__WEBPACK_IMPORTED_MODULE_5__.appReducer), _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.EffectsModule.forRoot([_store_operations_auth_auth_effects__WEBPACK_IMPORTED_MODULE_7__.AuthEffects, _store_operations_projects_projects_effects__WEBPACK_IMPORTED_MODULE_4__.ProjectsEffects]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__.StoreDevtoolsModule.instrument({
    logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.production
  }), _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__.ButtonComponent]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_13__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__.StoreDevtoolsModule, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__.ButtonComponent]
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

/***/ 8443:
/*!*************************************!*\
  !*** ./src/app/core/models/user.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentUser": () => (/* binding */ CurrentUser)
/* harmony export */ });
class CurrentUser {
  constructor(email, id,
  // tslint:disable-next-line: variable-name
  _token,
  // tslint:disable-next-line: variable-name
  _tokenExpirationDate) {
    this.email = email;
    this.id = id;
    this._token = _token;
    this._tokenExpirationDate = _tokenExpirationDate;
  }
  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
;

/***/ }),

/***/ 2318:
/*!****************************************************************!*\
  !*** ./src/app/core/services/auth/auth-interceptor.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderInterceptor": () => (/* binding */ HeaderInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7990);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 4307);





class HeaderInterceptor {
  constructor(auth, store) {
    this.auth = auth;
    this.store = store;
  }
  intercept(req, next) {
    return this.store.select('auth').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(authState => authState.user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.exhaustMap)(user => {
      if (!user) {
        return next.handle(req);
      }
      const authReq = req.clone({
        params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().set('auth', user.token)
      });
      return next.handle(authReq);
    }));
  }
}
HeaderInterceptor.ɵfac = function HeaderInterceptor_Factory(t) {
  return new (t || HeaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
};
HeaderInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: HeaderInterceptor,
  factory: HeaderInterceptor.ɵfac
});


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
  signUp(email, password) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_AUTH_FIREBASE_SIGNUP}${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_KEY_FIREBASE}`, {
      email,
      password,
      returnSecureToken: true
    });
  }
  singIn(email, password) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_AUTH_FIREBASE_SIGNIN}${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_KEY_FIREBASE}`, {
      email: email,
      password: password,
      returnSecureToken: true
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

/***/ 5798:
/*!********************************************************!*\
  !*** ./src/app/core/services/skills/skills.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsService": () => (/* binding */ SkillsService)
/* harmony export */ });
/* harmony import */ var _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/models/tech-category.enum */ 363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);


class SkillsService {
  constructor() {
    this.startYear = new Date('01/01/2017');
    this.overAllYearsOfExperience = this.getOverAllYearsOfExperience();
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
      // proficient: true,
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
  getOverAllYearsOfExperience() {
    let diff = (new Date().getTime() - this.startYear.getTime()) / 1000;
    diff /= 60 * 60 * 24;
    return Math.abs(Math.round(diff / 365.25));
  }
}
SkillsService.ɵfac = function SkillsService_Factory(t) {
  return new (t || SkillsService)();
};
SkillsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SkillsService,
  factory: SkillsService.ɵfac,
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Error");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.data.data.error, " ", ctx_r0.data.data.code, "");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Dismiss");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Dismiss");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Attention needed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8)(9, "div", 31)(10, "ul", 10)(11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11)(14, "div", 19)(15, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Dismiss");
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
/* harmony export */   "signUpStart": () => (/* binding */ signUpStart)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 4307);

const authenticateSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Authenticate Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
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
/* harmony import */ var _core_models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/models/user */ 8443);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ 2847);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ 4415);
/* harmony import */ var _core_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/dialog.service */ 6797);
/* harmony import */ var _core_models_dialog_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/models/dialog.enum */ 5319);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/auth/auth.service */ 7990);












class AuthEffects {
  constructor(actions$, router, authService) {
    this.actions$ = actions$;
    this.router = router;
    this.authService = authService;
    this.dialogService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__.DialogService);
    this.dialogEnumType = _core_models_dialog_enum__WEBPACK_IMPORTED_MODULE_3__.DialogType;
    this.authSignUp$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.signUpStart), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(action => this.authService.signUp(action.email, action.password).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(respData => this.authService.setAutoLogout(+respData.expiresIn * 1000)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(resData => this.handleAuthentication(resData)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(this.handleError.bind(this))))));
    this.authLogout$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.logout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => localStorage.removeItem('userData')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.dialogService.openDialog(this.dialogEnumType.Success, {
      message: 'You were succesfully logout.'
    }))), {
      dispatch: false
    });
    this.authLogin$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.autoLogin), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(() => {
      const userData = JSON.parse(localStorage.getItem('userData'));
      if (!userData) {
        return {
          type: 'no user available'
        };
      }
      const loadedUser = new _core_models_user__WEBPACK_IMPORTED_MODULE_0__.CurrentUser(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
      if (loadedUser.token) {
        const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
        this.authService.setAutoLogout(expirationDuration);
        return _auth_actions__WEBPACK_IMPORTED_MODULE_1__.authenticateSuccess({
          email: loadedUser.email,
          userId: loadedUser.id,
          token: loadedUser.token,
          expirationDate: new Date(userData._tokenExpirationDate)
        });
      }
      return {
        type: 'no token available'
      };
    })));
    this.authSignIn$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.loginStart), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(action => this.authService.singIn(action.email, action.password).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(respData => {
      this.dialogService.openDialog(this.dialogEnumType.Success, {
        message: `login successfull welcome ${respData.email}`
      });
      this.authService.setAutoLogout(+respData.expiresIn * 1000);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(resData => this.handleAuthentication(resData)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(this.handleError.bind(this))))));
    this.authRedirect$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.authenticateSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.router.navigate(['/', 'dashboard']))), {
      dispatch: false
    });
    this.authRedirectLogout$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.logout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => {
      this.router.navigate(['/', 'dashboard', 'auth']);
      this.authService.clearLogoutTimer();
    })), {
      dispatch: false
    });
  }
  handleError(errorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorResponse.error || !errorResponse.error.error) {
      this.dialogService.openDialog(this.dialogEnumType.Error, {
        error: errorMessage,
        code: 400
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.authenticateFail({
        errorMessage
      }));
    }
    switch (errorResponse.error.error.message) {
      case 'INVALID_PASSWORD':
        errorMessage = 'Passwords is incorrect';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This Email is not register';
        break;
      case 'USER_DISABLED':
        errorMessage = 'This user as been disabled';
        break;
      case 'EMAIL_EXISTS':
        errorMessage = 'This user is already registered';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'Password sign-in is disabled for this project';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'Too many attempts try later';
        break;
      default:
        errorMessage = errorResponse.error.error.message;
        break;
    }
    this.dialogService.openDialog(this.dialogEnumType.Error, {
      error: errorMessage,
      code: 400
    });
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.authenticateFail({
      errorMessage
    }));
  }
  handleAuthentication(responseData) {
    const expirationDate = new Date(new Date().getTime() + +responseData.expiresIn * 1000);
    const user = new _core_models_user__WEBPACK_IMPORTED_MODULE_0__.CurrentUser(responseData.email, responseData.localId, responseData.idToken, expirationDate);
    localStorage.setItem('userData', JSON.stringify(user));
    return _auth_actions__WEBPACK_IMPORTED_MODULE_1__.authenticateSuccess({
      email: responseData.email,
      userId: responseData.localId,
      token: responseData.idToken,
      expirationDate
    });
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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 4307);
/* harmony import */ var _core_models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/models/user */ 8443);
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ 4415);



const initialState = {
  user: null,
  error: null,
  loading: false
};
const _authReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.loginStart, _auth_actions__WEBPACK_IMPORTED_MODULE_1__.signUpStart, (state, action) => ({
  ...state,
  user: null,
  error: null,
  loading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.logout, (state, action) => ({
  ...state,
  user: null,
  uthError: null,
  loading: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.authenticateSuccess, (state, action) => ({
  ...state,
  user: new _core_models_user__WEBPACK_IMPORTED_MODULE_0__.CurrentUser(action.email, action.userId, action.token, action.expirationDate),
  error: null,
  loading: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.authenticateFail, (state, action) => ({
  ...state,
  error: action.errorMessage,
  loading: false
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.clearError, (state, action) => ({
  ...state,
  error: null
})));
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
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 4307);








class ProjectsEffects {
  constructor(actions$, http, store) {
    this.actions$ = actions$;
    this.http = http;
    this.store = store;
    this.fetchProjects$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_projects_actions__WEBPACK_IMPORTED_MODULE_0__.fetchProjects), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => {
      return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_URL_FIREBASE}.json`);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(responseData => {
      const projectsArray = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          projectsArray.push({
            ...responseData[key],
            id: key
          });
        }
      }
      return projectsArray;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(projects => {
      return this.store.dispatch(_projects_actions__WEBPACK_IMPORTED_MODULE_0__.fetchProjectsSuccess({
        projects
      }));
    })), {
      dispatch: false
    });
  }
}
ProjectsEffects.ɵfac = function ProjectsEffects_Factory(t) {
  return new (t || ProjectsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store));
};
ProjectsEffects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
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
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_projects_actions__WEBPACK_IMPORTED_MODULE_0__.clearError, (state, action) => ({
  ...state,
  errorMessage: null,
  loading: false
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
  API_AUTH_DEV: 'http://localhost:3000'
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