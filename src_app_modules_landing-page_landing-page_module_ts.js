"use strict";
(self["webpackChunkportfolio_angular"] = self["webpackChunkportfolio_angular"] || []).push([["src_app_modules_landing-page_landing-page_module_ts"],{

/***/ 2122:
/*!************************************************!*\
  !*** ./src/app/core/services/about.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutService": () => (/* binding */ AboutService)
/* harmony export */ });
/* harmony import */ var _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/models/tech-category.enum */ 363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);


class AboutService {
  constructor() {
    this.techStack = [{
      categoryTitle: 'Frontend Developer',
      techCategoryEnum: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.Frontend,
      imgUrl: 'assets/img/typescript.png',
      description: 'As a Frontend Senior Developer with expertise in Angular and React, I bring a wealth of knowledge and hands-on experience in developing modern and intuitive web applications. I am committed to delivering high-quality code, following industry best practices, and creating exceptional user interfaces that leave a lasting impact.',
      rtl: false
    }, {
      categoryTitle: 'Backend Developer',
      techCategoryEnum: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.Backend,
      imgUrl: 'assets/img/node.png',
      description: 'As a Backend Senior Developer, I bring a wealth of knowledge and hands-on experience in designing and building scalable, performant, and secure server-side applications. I am dedicated to delivering high-quality code, following best practices, and leveraging the latest technologies to create reliable and efficient backend systems.',
      rtl: true
    }, {
      categoryTitle: 'Databases',
      techCategoryEnum: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.Database,
      imgUrl: 'assets/img/sql.png',
      description: 'I am proficient in working with a variety of database technologies, including both SQL-based (such as  MySQL, PostgreSQL) and NoSQL-based (such as MongoDB) systems. I have a solid understanding of data modeling principles, normalization, and denormalization techniques, enabling me to design efficient and well-structured database schemas.',
      rtl: false
    }, {
      categoryTitle: 'Testing Developer',
      techCategoryEnum: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.TestingFramework,
      imgUrl: 'assets/img/testing.png',
      description: 'I have a strong understanding of different testing types, including functional testing, regression testing, integration testing, and user acceptance testing. I am skilled in identifying and prioritizing test cases based on risk analysis and requirements, ensuring maximum test coverage.',
      rtl: true
    }, {
      categoryTitle: 'Cloud Developer',
      techCategoryEnum: _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory.Cloud,
      imgUrl: 'assets/img/aws.png',
      description: 'I am proficient in working with major cloud platforms such as AWS. I have a solid understanding of cloud services, including compute, storage, networking, databases, and serverless architectures. I am skilled in leveraging cloud infrastructure-as-a-service (IaaS), platform-as-a-service (PaaS), and software-as-a-service (SaaS) offerings to build scalable and resilient applications.',
      rtl: false
    }];
  }
  getTechStack() {
    return this.techStack;
  }
}
AboutService.ɵfac = function AboutService_Factory(t) {
  return new (t || AboutService)();
};
AboutService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AboutService,
  factory: AboutService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 5300:
/*!*********************************************************!*\
  !*** ./src/app/core/services/file-downloads.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileDownloadsService": () => (/* binding */ FileDownloadsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);



class FileDownloadsService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
  }
  download(url) {
    return this.http.get(url, {
      responseType: 'blob'
    });
  }
}
FileDownloadsService.ɵfac = function FileDownloadsService_Factory(t) {
  return new (t || FileDownloadsService)();
};
FileDownloadsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: FileDownloadsService,
  factory: FileDownloadsService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 7960:
/*!**************************************************************************!*\
  !*** ./src/app/modules/landing-page/components/about/about.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/models/tech-category.enum */ 363);
/* harmony import */ var _core_services_about_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/about.service */ 2122);
/* harmony import */ var _core_services_file_downloads_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/file-downloads.service */ 5300);
/* harmony import */ var _core_services_skills_skills_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/skills/skills.service */ 5798);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/button/button.component */ 42);
/* harmony import */ var _shared_components_category_tech_skill_category_tech_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/category-tech-skill/category-tech-skill.component */ 3535);
/* harmony import */ var _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/banner/banner.component */ 3228);










function AboutComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "portfolio-category-tech-skill", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const tech_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("skills", ctx_r0.skills)("cateroryTitle", tech_r1.categoryTitle)("techCategoryEnum", tech_r1.techCategoryEnum)("imgUrl", tech_r1.imgUrl)("rtl", tech_r1.rtl);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", tech_r1.description, " ");
  }
}
class AboutComponent {
  constructor() {
    this.downloadsServices = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_core_services_file_downloads_service__WEBPACK_IMPORTED_MODULE_2__.FileDownloadsService);
    this.skillServices = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_core_services_skills_skills_service__WEBPACK_IMPORTED_MODULE_3__.SkillsService);
    this.aboutService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_core_services_about_service__WEBPACK_IMPORTED_MODULE_1__.AboutService);
    this.techCategoryEnum = _core_models_tech_category_enum__WEBPACK_IMPORTED_MODULE_0__.TechCategory;
  }
  ngOnInit() {
    this.skills = this.skillServices.getAllSkills();
    this.techStack = this.aboutService.getTechStack();
  }
  downloadResumen() {
    this.downloadsServices.download('/assets/doc/davidResumen.pdf').subscribe(blob => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = 'JesusDuarteResumen.pdf';
      a.click();
      URL.revokeObjectURL(objectUrl);
    });
  }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) {
  return new (t || AboutComponent)();
};
AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: AboutComponent,
  selectors: [["portfolio-about"]],
  decls: 14,
  vars: 1,
  consts: [[1, "rounded-2xl", "py-10"], ["src", "assets/img/david_profile.jpg", "alt", "Profile picture", 1, "mx-auto", "h-48", "w-48", "rounded-full", "md:h-56", "md:w-56"], [1, "mx-auto", "text-center"], [1, "mt-10", "flex", "items-center", "justify-center", "gap-x-6"], ["color", "primary", 3, "clickEvent"], [4, "ngFor", "ngForOf"], [3, "skills", "cateroryTitle", "techCategoryEnum", "imgUrl", "rtl"]],
  template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "portfolio-banner")(1, "figure", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2)(4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Jesus David Duarte");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Highly skilled and innovative Software Engineer with a strong background in developing and implementing cutting-edge software solutions.");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 3)(11, "portfolio-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("clickEvent", function AboutComponent_Template_portfolio_button_clickEvent_11_listener() {
        return ctx.downloadResumen();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Get Resume Here");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, AboutComponent_ng_container_13_Template, 3, 6, "ng-container", 5);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.techStack);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__.ButtonComponent, _shared_components_category_tech_skill_category_tech_skill_component__WEBPACK_IMPORTED_MODULE_5__.CategoryTechSkillComponent, _shared_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__.BannerComponent],
  styles: [".about-section[_ngcontent-%COMP%] {\n  padding-top: 5rem;\n  background: linear-gradient(to bottom, #000 0%, rgba(0, 0, 0, 0.9) 75%, rgba(0, 0, 0, 0.8) 100%);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9sYW5kaW5nLXBhZ2UvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0dBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1zZWN0aW9uIHtcbiAgcGFkZGluZy10b3A6IDVyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byBib3R0b20sXG4gICAgIzAwMCAwJSxcbiAgICByZ2JhKDAsIDAsIDAsIDAuOSkgNzUlLFxuICAgIHJnYmEoMCwgMCwgMCwgMC44KSAxMDAlXG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 4773:
/*!******************************************************************************!*\
  !*** ./src/app/modules/landing-page/components/contact/contact.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/button/button.component */ 42);


class ContactComponent {
  constructor() {}
  ngOnInit() {}
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) {
  return new (t || ContactComponent)();
};
ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ContactComponent,
  selectors: [["portfolio-contact"]],
  decls: 71,
  vars: 0,
  consts: [[1, "relative", "isolate", "bg-gray-950"], [1, "mx-auto", "grid", "max-w-7xl", "grid-cols-1", "lg:grid-cols-2"], [1, "relative", "px-6", "pb-20", "pt-24", "sm:pt-32", "lg:static", "lg:px-8", "lg:py-48"], [1, "mx-auto", "max-w-xl", "lg:mx-0", "lg:max-w-lg"], [1, "absolute", "inset-y-0", "left-0", "-z-10", "w-full", "overflow-hidden", "ring-1", "ring-white/5", "lg:w-1/2"], ["aria-hidden", "true", 1, "absolute", "inset-0", "h-full", "w-full", "stroke-gray-700", "[mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"], ["id", "54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2", "width", "200", "height", "200", "x", "100%", "y", "-1", "patternUnits", "userSpaceOnUse"], ["d", "M130 200V.5M.5 .5H200", "fill", "none"], ["x", "100%", "y", "-1", 1, "overflow-visible", "fill-gray-800/20"], ["d", "M-470.5 0h201v201h-201Z", "stroke-width", "0"], ["width", "100%", "height", "100%", "stroke-width", "0", "fill", "url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"], ["aria-hidden", "true", 1, "absolute", "-left-56", "top-[calc(100%-13rem)]", "transform-gpu", "blur-3xl", "lg:left-[max(-14rem,calc(100%-59rem))]", "lg:top-[calc(50%-7rem)]"], [1, "aspect-[1155/678]", "w-[72.1875rem]", "bg-gradient-to-br", "from-[#ff80b5]", "to-[#9089fc]", "opacity-20", 2, "clip-path", "polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)"], [1, "text-3xl", "font-bold", "tracking-tight", "text-white"], [1, "mt-6", "text-lg", "leading-8", "text-gray-300"], [1, "mt-10", "space-y-4", "text-base", "leading-7", "text-gray-300"], [1, "flex", "gap-x-4"], [1, "flex-none"], [1, "sr-only"], ["fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", "aria-hidden", "true", 1, "h-7", "w-6", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"], ["href", "tel:+1 (555) 234-5678", 1, "hover:text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"], ["href", "mailto:hello@example.com", 1, "hover:text-white"], [1, "px-6", "pb-24", "pt-20", "sm:pb-32", "lg:px-8", "lg:py-48"], [1, "mx-auto", "max-w-xl", "lg:mr-0", "lg:max-w-lg"], [1, "grid", "grid-cols-1", "gap-x-8", "gap-y-6", "sm:grid-cols-2"], ["for", "first-name"], ["type", "text", "name", "first-name", "id", "first-name"], ["for", "last-name"], ["type", "text", "name", "last-name", "id", "last-name"], [1, "sm:col-span-2"], ["for", "email"], ["type", "email", "name", "email", "id", "email"], ["for", "phone-number"], ["type", "tel", "name", "phone-number", "id", "phone-number"], ["for", "message"], ["name", "message", "id", "message", "rows", "4"], [1, "mt-8", "flex", "justify-end"], ["color", "primary"]],
  template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "svg", 5)(6, "defs")(7, "pattern", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "path", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "svg", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "path", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "rect", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h2", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Get in touch");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Please reach me out to work with oyu or your organization");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "dl", 15)(19, "div", 16)(20, "dt", 17)(21, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "svg", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "path", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "dd");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "3760 Metro Parkway Fort Myers, FL 33916");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 16)(28, "dt", 17)(29, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Telephone");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "svg", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "path", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "dd")(34, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "+1 (239) 628-9725");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 16)(37, "dt", 17)(38, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "svg", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "path", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "dd")(43, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "jduartedsp@gmail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "form", 25)(46, "div", 26)(47, "div", 27)(48, "div")(49, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "First name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div")(53, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Last name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 32)(57, "label", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 32)(61, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Phone number");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 32)(65, "label", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "textarea", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 39)(69, "portfolio-button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Send message");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
  },
  dependencies: [_shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 4301:
/*!************************************************************************!*\
  !*** ./src/app/modules/landing-page/components/hero/hero.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroComponent": () => (/* binding */ HeroComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/button/button.component */ 42);




class HeroComponent {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  }
  ngOnInit() {}
  getStarted() {
    this.router.navigate(['/about']);
  }
}
HeroComponent.ɵfac = function HeroComponent_Factory(t) {
  return new (t || HeroComponent)();
};
HeroComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HeroComponent,
  selectors: [["portfolio-hero"]],
  decls: 12,
  vars: 0,
  consts: [[1, "hero"], [1, "container", "px-4", "px-lg-5", "d-flex", "h-100", "align-items-center", "justify-content-center"], [1, "d-flex", "justify-content-center"], [1, "text-center"], [1, "fs-3", "mx-auto", "my-0", "text-uppercase", "animate__animated", "animate__fadeInUp", "animate__slow"], [1, "text-white-50", "mx-auto", "mt-2", "mb-5", "animate__animated", "animate__fadeIn", "animate__delay-2s"], ["color", "warn", 3, "clickEvent"]],
  template: function HeroComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Jesus David Duarte ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Software Engineer ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Professional fullstack Web Developer ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "portfolio-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clickEvent", function HeroComponent_Template_portfolio_button_clickEvent_10_listener() {
        return ctx.getStarted();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Get Started");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent],
  styles: [".hero[_ngcontent-%COMP%] {\n  height: 100vh;\n  padding: 0;\n  position: relative;\n  width: 100%;\n  height: auto;\n  min-height: 35rem;\n  padding: 10rem 0;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url('bg-masthead.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  background-size: cover;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Varela Round\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  line-height: 2.5rem;\n  letter-spacing: 0.8rem;\n  background: linear-gradient(rgba(201, 14, 14, 0.9), rgba(34, 3, 3, 0.13));\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9sYW5kaW5nLXBhZ2UvY29tcG9uZW50cy9oZXJvL2hlcm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0hBQUE7RUFLQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQUhGO0FBS0U7RUFDRSxxTUFBQTtFQUdBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5RUFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQUxKIiwic291cmNlc0NvbnRlbnQiOlsiLmhlcm8ge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDM1cmVtO1xuICBwYWRkaW5nOiAxMHJlbSAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjMpIDAlLFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjcpIDc1JSxcbiAgICAgICMwMDAgMTAwJSksXG4gICAgdXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmctbWFzdGhlYWQuanBnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICBoMSB7XG4gICAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsXG4gICAgICBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLFxuICAgICAgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcbiAgICBsaW5lLWhlaWdodDogMi41cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjhyZW07XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYigyMDEgMTQgMTQgLyA5MCUpLCByZ2IoMzQgMyAzIC8gMTMlKSk7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 5270:
/*!****************************************************************************!*\
  !*** ./src/app/modules/landing-page/components/layout/layout.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/navbar/navbar.component */ 3502);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/footer/footer.component */ 6526);




class LayoutComponent {
  constructor() {}
  ngOnInit() {}
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
  return new (t || LayoutComponent)();
};
LayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LayoutComponent,
  selectors: [["portfolio-layout"]],
  decls: 4,
  vars: 0,
  template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "portfolio-navbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "main");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "portfolio-footer");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 4367:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/landing-page/components/projects/card/card.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardComponent": () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class CardComponent {
  constructor() {
    this.image = 'https://media-porfolio.s3.us-east-2.amazonaws.com/images/hazpan.gif';
  }
  ngOnInit() {}
}
CardComponent.ɵfac = function CardComponent_Factory(t) {
  return new (t || CardComponent)();
};
CardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CardComponent,
  selectors: [["portfolio-card"]],
  inputs: {
    project: "project"
  },
  decls: 14,
  vars: 7,
  consts: [[1, "h-24", "flex", "items-center", "justify-center"], [1, "text-center"], [1, "flip"], [1, "front"], [1, "back"], [1, "text-center", 3, "href"]],
  template: function CardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Click here to see the project");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.projectName);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", "url(" + ctx.project.imageUrl + ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.project.description, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.project.technologies, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.project.projectUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    }
  },
  styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto+Mono);.flip[_ngcontent-%COMP%] {\n  position: relative;\n}\n.flip[_ngcontent-%COMP%]    > .front[_ngcontent-%COMP%], .flip[_ngcontent-%COMP%]    > .back[_ngcontent-%COMP%] {\n  display: block;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  transition-duration: 1.5s;\n  transition-property: transform, opacity;\n}\n.flip[_ngcontent-%COMP%]    > .front[_ngcontent-%COMP%] {\n  transform: rotateY(0deg);\n}\n.flip[_ngcontent-%COMP%]    > .back[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  transform: rotateY(-180deg);\n}\n.flip[_ngcontent-%COMP%]:hover    > .front[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.flip[_ngcontent-%COMP%]:hover    > .front[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: none;\n}\n.flip[_ngcontent-%COMP%]:hover    > .back[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: rotateY(0deg);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.flip.flip-vertical[_ngcontent-%COMP%]    > .back[_ngcontent-%COMP%] {\n  transform: rotateX(-180deg);\n}\n.flip.flip-vertical[_ngcontent-%COMP%]:hover    > .front[_ngcontent-%COMP%] {\n  transform: rotateX(180deg);\n}\n.flip.flip-vertical[_ngcontent-%COMP%]:hover    > .back[_ngcontent-%COMP%] {\n  transform: rotateX(0deg);\n}\n\n.flip[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin-right: 2px;\n  margin-bottom: 1em;\n  width: 100%;\n}\n.flip[_ngcontent-%COMP%]    > .front[_ngcontent-%COMP%], .flip[_ngcontent-%COMP%]    > .back[_ngcontent-%COMP%] {\n  display: block;\n  color: white;\n  width: inherit;\n  background-size: cover !important;\n  background-position: center !important;\n  height: 320px;\n  padding: 1em 2em;\n  background: #313131;\n  border-radius: 10px;\n}\n.flip[_ngcontent-%COMP%]    > .front[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .flip[_ngcontent-%COMP%]    > .back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9125rem;\n  line-height: 160%;\n  color: #999;\n}\n\n.text-shadow[_ngcontent-%COMP%] {\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.04), 2px 2px rgba(0, 0, 0, 0.04), 3px 3px rgba(0, 0, 0, 0.04), 4px 4px rgba(0, 0, 0, 0.04), 0.125rem 0.125rem rgba(0, 0, 0, 0.04), 6px 6px rgba(0, 0, 0, 0.04), 7px 7px rgba(0, 0, 0, 0.04), 8px 8px rgba(0, 0, 0, 0.04), 9px 9px rgba(0, 0, 0, 0.04), 0.3125rem 0.3125rem rgba(0, 0, 0, 0.04), 11px 11px rgba(0, 0, 0, 0.04), 12px 12px rgba(0, 0, 0, 0.04), 13px 13px rgba(0, 0, 0, 0.04), 14px 14px rgba(0, 0, 0, 0.04), 0.625rem 0.625rem rgba(0, 0, 0, 0.04), 16px 16px rgba(0, 0, 0, 0.04), 17px 17px rgba(0, 0, 0, 0.04), 18px 18px rgba(0, 0, 0, 0.04), 19px 19px rgba(0, 0, 0, 0.04), 1.25rem 1.25rem rgba(0, 0, 0, 0.04);\n  position: relative;\n  bottom: 90px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9sYW5kaW5nLXBhZ2UvY29tcG9uZW50cy9wcm9qZWN0cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxrQkFBQTtBQURGO0FBR0U7O0VBRUUsY0FBQTtFQUNBLG1FQUFBO0VBQ0EseUJBQUE7RUFDQSx1Q0FBQTtBQURKO0FBSUU7RUFDRSx3QkFBQTtBQUZKO0FBS0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUFISjtBQU9JO0VBQ0UsMEJBQUE7QUFMTjtBQU9NO0VBQ0UsYUFBQTtBQUxSO0FBU0k7RUFDRSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQVBOO0FBYUk7RUFDRSwyQkFBQTtBQVhOO0FBZU07RUFDRSwwQkFBQTtBQWJSO0FBZ0JNO0VBQ0Usd0JBQUE7QUFkUjs7QUFxQkE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFsQkY7QUFvQkU7O0VBRUUsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFsQko7QUFvQkk7O0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFqQk47O0FBc0JBO0VBQ0UsdW9CQUFBO0VBVUEsa0JBQUE7RUFDQSxZQUFBO0FBNUJGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rTW9ubycpO1xuXG4vLyBiYXNlXG4uZmxpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICA+LmZyb250LFxuICA+LmJhY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gIH1cblxuICA+LmZyb250IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIH1cblxuICA+LmJhY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgPi5mcm9udCB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcblxuICAgICAgaDEge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgID4uYmFjayB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIH1cbiAgfVxuXG4gICYuZmxpcC12ZXJ0aWNhbCB7XG4gICAgPi5iYWNrIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTgwZGVnKTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgID4uZnJvbnQge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbiAgICAgIH1cblxuICAgICAgPi5iYWNrIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBjdXN0b21cbi5mbGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIHdpZHRoOiAxMDAlO1xuXG4gID4uZnJvbnQsXG4gID4uYmFjayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuICAgIHBhZGRpbmc6IDFlbSAyZW07XG4gICAgYmFja2dyb3VuZDogIzMxMzEzMTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDAuOTEyNXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNjAlO1xuICAgICAgY29sb3I6ICM5OTk7XG4gICAgfVxuICB9XG59XG5cbi50ZXh0LXNoYWRvdyB7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjA0KSxcbiAgICAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA0KSxcbiAgICAwLjEyNXJlbSAwLjEyNXJlbSByZ2JhKDAsIDAsIDAsIDAuMDQpLCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNCksXG4gICAgN3B4IDdweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCA4cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNCksXG4gICAgOXB4IDlweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwLjMxMjVyZW0gMC4zMTI1cmVtIHJnYmEoMCwgMCwgMCwgMC4wNCksXG4gICAgMTFweCAxMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDEycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDQpLFxuICAgIDEzcHggMTNweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAxNHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjA0KSxcbiAgICAwLjYyNXJlbSAwLjYyNXJlbSByZ2JhKDAsIDAsIDAsIDAuMDQpLCAxNnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjA0KSxcbiAgICAxN3B4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMThweCAxOHB4IHJnYmEoMCwgMCwgMCwgMC4wNCksXG4gICAgMTlweCAxOXB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDEuMjVyZW0gMS4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogOTBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 8545:
/*!********************************************************************************!*\
  !*** ./src/app/modules/landing-page/components/projects/projects.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _store_operations_projects_projects_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../store/operations/projects/projects.actions */ 2376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 4307);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ 5312);
/* harmony import */ var _shared_components_wrapper_container_wrapper_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/wrapper-container/wrapper-container.component */ 5078);
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card/card.component */ 4367);







function ProjectsComponent_mat_spinner_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-spinner", 8);
  }
}
function ProjectsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProjectsComponent_div_11_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.onClearError());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.error, " ");
  }
}
function ProjectsComponent_div_12_portfolio_card_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "portfolio-card", 14);
  }
  if (rf & 2) {
    const project_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("project", project_r6);
  }
}
function ProjectsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ProjectsComponent_div_12_portfolio_card_2_Template, 1, 1, "portfolio-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.projects);
  }
}
class ProjectsComponent {
  constructor(store) {
    this.store = store;
    this.isLoading = false;
    this.error = null;
  }
  ngOnInit() {
    this.onSubscribeData();
    this.onDispatchAction();
  }
  onSubscribeData() {
    this.projectsSub = this.store.select('projects')
    // .pipe(take(1))
    .subscribe(respStateDataProjects => {
      this.projects = respStateDataProjects.projects;
      this.isLoading = respStateDataProjects.loading;
      this.error = respStateDataProjects.errorMessage;
    });
  }
  onDispatchAction() {
    this.store.dispatch(_store_operations_projects_projects_actions__WEBPACK_IMPORTED_MODULE_0__.fetchProjects());
  }
  onClearError() {
    this.store.dispatch(_store_operations_projects_projects_actions__WEBPACK_IMPORTED_MODULE_0__.clearError());
  }
  ngOnDestroy() {
    this.projectsSub.unsubscribe();
  }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
  return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
};
ProjectsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ProjectsComponent,
  selectors: [["portfolio-projects"]],
  decls: 13,
  vars: 3,
  consts: [[1, "py-10"], [1, "mx-auto", "max-w-7xl", "px-6", "lg:px-8"], [1, "mx-auto", "max-w-2xl", "sm:text-center"], [1, "text-base", "font-semibold", "leading-7", "text-indigo-700"], [1, "mt-2", "text-3xl", "font-bold", "tracking-tight", "text-white", "sm:text-4xl"], ["class", "m-auto mb-5", 4, "ngIf"], ["style", "z-index: 10", "class", "alert alert-warning", "role", "alert", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "m-auto", "mb-5"], ["role", "alert", 1, "alert", "alert-warning", 2, "z-index", "10"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "container"], [1, "row", "justify-content-center"], ["class", "py-3 col-12 col-md-5 col-lg-4", 3, "project", 4, "ngFor", "ngForOf"], [1, "py-3", "col-12", "col-md-5", "col-lg-4", 3, "project"]],
  template: function ProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "portfolio-wrapper-container")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Everything you need in terms of experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Projects portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Portfolio of personal projects and with companies, in this section I try to summarize all the hard work that I have used and the different concepts that I have implemented, as well as technological stacks, frameworks, preprocessor, databases, etc.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ProjectsComponent_mat_spinner_10_Template, 1, 0, "mat-spinner", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ProjectsComponent_div_11_Template, 4, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ProjectsComponent_div_12_Template, 3, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.error);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinner, _shared_components_wrapper_container_wrapper_container_component__WEBPACK_IMPORTED_MODULE_1__.WrapperContainerComponent, _card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent],
  styles: [".grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 500px);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9sYW5kaW5nLXBhZ2UvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1Q0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgNTAwcHgpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 5701:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/landing-page/components/skill-bar/skill-bar.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillBarComponent": () => (/* binding */ SkillBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _core_services_skills_skills_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/skills/skills.service */ 5798);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _shared_components_wrapper_container_wrapper_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/wrapper-container/wrapper-container.component */ 5078);




function SkillBarComponent_div_7_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Proficient");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SkillBarComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "figure", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SkillBarComponent_div_7_span_6_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 12)(8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", skill_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", skill_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](skill_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", skill_r1.proficient && skill_r1.knowledge > 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", skill_r1.knowledge, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", skill_r1.knowledge, "% ");
  }
}
class SkillBarComponent {
  constructor(skillsService) {
    this.skillsService = skillsService;
  }
  ngOnInit() {
    this.skills = this.skillsService.getAllSkills();
  }
}
SkillBarComponent.ɵfac = function SkillBarComponent_Factory(t) {
  return new (t || SkillBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_skills_skills_service__WEBPACK_IMPORTED_MODULE_0__.SkillsService));
};
SkillBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SkillBarComponent,
  selectors: [["portfolio-skill-bar"]],
  decls: 8,
  vars: 1,
  consts: [[1, "container-fluid", "skill-section"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-6"], [1, "text-white-50", "text-center", "mb-4"], [1, "skill-bars", "mx-auto"], ["class", "bar mb-4", 4, "ngFor", "ngForOf"], [1, "bar", "mb-4"], [1, "info", "flex-col", "items-center"], [1, "w-20"], [3, "src", "alt"], [1, "mb-2"], [4, "ngIf"], [1, "progress"], ["role", "progressbar", 1, "progress-bar", "bg-danger", "progress-bar-striped", "progress-bar-animated"]],
  template: function SkillBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "portfolio-wrapper-container")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Skills");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SkillBarComponent_div_7_Template, 10, 7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.skills);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_components_wrapper_container_wrapper_container_component__WEBPACK_IMPORTED_MODULE_1__.WrapperContainerComponent],
  styles: [".skill-section[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n\n.skill-bars[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n\n.skill-bars[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:first-child {\n  margin-top: 0px;\n}\n\n.skill-bars[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.skill-bars[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 500;\n  font-size: 17px;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_showText 0.5s 1s linear forwards;\n}\n\n@keyframes _ngcontent-%COMP%_showText {\n  100% {\n    opacity: 1;\n  }\n}\n.skill-bars[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]   .progress-line[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 100%;\n  background: #f0f0f0;\n  position: relative;\n  transform: scaleX(0);\n  transform-origin: left;\n  border-radius: 10px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05), 0 1px rgba(255, 255, 255, 0.8);\n  animation: _ngcontent-%COMP%_animate 1s cubic-bezier(1, 0, 0.5, 1) forwards;\n}\n\n@keyframes _ngcontent-%COMP%_animate {\n  100% {\n    transform: scaleX(1);\n  }\n}\n.bar[_ngcontent-%COMP%]   .progress-line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 100%;\n  position: absolute;\n  border-radius: 10px;\n  transform: scaleX(0);\n  transform-origin: left;\n  background: #e00a0a;\n  animation: _ngcontent-%COMP%_animate 1s 1s cubic-bezier(1, 0, 0.5, 1) forwards;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9sYW5kaW5nLXBhZ2UvY29tcG9uZW50cy9za2lsbC1iYXIvc2tpbGwtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsMkNBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0UsVUFBQTtFQUFGO0FBQ0Y7QUFHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtFQUFBO0VBRUEseURBQUE7QUFGRjs7QUFLQTtFQUNFO0lBQ0Usb0JBQUE7RUFGRjtBQUNGO0FBS0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDREQUFBO0FBSEYiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XG4uc2tpbGwtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5za2lsbC1iYXJzIC5iYXIge1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLnNraWxsLWJhcnMgLmJhcjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLnNraWxsLWJhcnMgLmJhciAuaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5za2lsbC1iYXJzIC5iYXIgLmluZm8gc3BhbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2hvd1RleHQgMC41cyAxcyBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgc2hvd1RleHQge1xuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5za2lsbC1iYXJzIC5iYXIgLnByb2dyZXNzLWxpbmUge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KSxcbiAgICAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAxcyBjdWJpYy1iZXppZXIoMSwgMCwgMC41LCAxKSBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBhbmltYXRlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIH1cbn1cblxuLmJhciAucHJvZ3Jlc3MtbGluZSBzcGFuIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjZTAwYTBhO1xuICBhbmltYXRpb246IGFuaW1hdGUgMXMgMXMgY3ViaWMtYmV6aWVyKDEsIDAsIDAuNSwgMSkgZm9yd2FyZHM7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 716:
/*!*********************************************************************!*\
  !*** ./src/app/modules/landing-page/landing-page-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageRoutingModule": () => (/* binding */ LandingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/about/about.component */ 7960);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/contact/contact.component */ 4773);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout/layout.component */ 5270);
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/projects/projects.component */ 8545);
/* harmony import */ var _components_skill_bar_skill_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/skill-bar/skill-bar.component */ 5701);
/* harmony import */ var _landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-page.component */ 7454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);









const routes = [{
  path: '',
  component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent,
  children: [{
    path: '',
    component: _landing_page_component__WEBPACK_IMPORTED_MODULE_5__.LandingPageComponent
  }, {
    path: 'about',
    component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent
  }, {
    path: 'projects',
    component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsComponent
  }, {
    path: 'contact',
    component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent
  }, {
    path: 'skills',
    component: _components_skill_bar_skill_bar_component__WEBPACK_IMPORTED_MODULE_4__.SkillBarComponent
  }]
}];
class LandingPageRoutingModule {}
LandingPageRoutingModule.ɵfac = function LandingPageRoutingModule_Factory(t) {
  return new (t || LandingPageRoutingModule)();
};
LandingPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: LandingPageRoutingModule
});
LandingPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](LandingPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 7454:
/*!****************************************************************!*\
  !*** ./src/app/modules/landing-page/landing-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageComponent": () => (/* binding */ LandingPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/hero/hero.component */ 4301);


class LandingPageComponent {
  constructor() {}
  ngOnInit() {}
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) {
  return new (t || LandingPageComponent)();
};
LandingPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LandingPageComponent,
  selectors: [["portfolio-landing-page"]],
  decls: 1,
  vars: 0,
  template: function LandingPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "portfolio-hero");
    }
  },
  dependencies: [_components_hero_hero_component__WEBPACK_IMPORTED_MODULE_0__.HeroComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 1436:
/*!*************************************************************!*\
  !*** ./src/app/modules/landing-page/landing-page.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageModule": () => (/* binding */ LandingPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-page-routing.module */ 716);
/* harmony import */ var _shared_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/page-not-found/page-not-found.component */ 9004);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about/about.component */ 7960);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact/contact.component */ 4773);
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/hero/hero.component */ 4301);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/layout.component */ 5270);
/* harmony import */ var _components_projects_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/projects/card/card.component */ 4367);
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/projects/projects.component */ 8545);
/* harmony import */ var _components_skill_bar_skill_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/skill-bar/skill-bar.component */ 5701);
/* harmony import */ var _landing_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./landing-page.component */ 7454);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 6839);













class LandingPageModule {}
LandingPageModule.ɵfac = function LandingPageModule_Factory(t) {
  return new (t || LandingPageModule)();
};
LandingPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: LandingPageModule
});
LandingPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__.SharedModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](LandingPageModule, {
    declarations: [_landing_page_component__WEBPACK_IMPORTED_MODULE_9__.LandingPageComponent, _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__.LayoutComponent, _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_4__.HeroComponent, _components_projects_card_card_component__WEBPACK_IMPORTED_MODULE_6__.CardComponent, _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__.ProjectsComponent, _components_skill_bar_skill_bar_component__WEBPACK_IMPORTED_MODULE_8__.SkillBarComponent, _shared_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__.PageNotFoundComponent, _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_landing-page_landing-page_module_ts.js.map