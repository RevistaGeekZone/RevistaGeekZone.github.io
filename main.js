(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n<!-- SIDEBAR NAV  -->\n<!-- ============================================================== -->\n\n<app-nav></app-nav>\n\n<!-- ============================================================== -->\n<!-- FIN SIDEBAR NAV  -->\n<!-- ============================================================== -->\n\n<!--CONTENEDOR GLOBAL-->\n<div class=\"container-fluid p-0\">\n\n    <!-- ============================================================== -->\n    <!-- HOME  -->\n    <!-- ============================================================== -->\n\n    <div data-aos=\"fade-right\" data-aos-duration=\"1500\">\n        <app-home id=\"home\"></app-home>\n    </div>\n\n    <!-- ============================================================== -->\n    <!-- FIN HOME  -->\n    <!-- ============================================================== -->\n\n    <!-- ============================================================== -->\n    <!-- PRIMER CUATRIMESTRE  -->\n    <!-- ============================================================== -->\n\n    <div data-aos=\"fade-right\" data-aos-duration=\"1500\">\n        <app-primercuatrimestre id=\"first\"></app-primercuatrimestre>\n    </div>\n\n    <!-- ============================================================== -->\n    <!-- FIN PRIMER CUATRIMESTRE  -->\n    <!-- ============================================================== -->\n\n    <!-- ============================================================== -->\n    <!-- SEGUNDO CUATRIMESTRE  -->\n    <!-- ============================================================== -->\n\n    <div data-aos=\"fade-right\" data-aos-duration=\"1500\">\n        <app-segundocuatrimestre id=\"second\"></app-segundocuatrimestre>\n    </div>\n\n    <!-- ============================================================== -->\n    <!-- FIN SEGUNDO CUATRIMESTRE  -->\n    <!-- ============================================================== -->\n\n    <!-- ============================================================== -->\n    <!-- TERCER CUATRIMESTRE  -->\n    <!-- ============================================================== -->\n\n    <div data-aos=\"fade-right\" data-aos-duration=\"1500\">\n        <app-tercercuatrimestre id=\"third\"></app-tercercuatrimestre>\n    </div>\n\n    <!-- ============================================================== -->\n    <!-- FIN TERCER CUATRIMESTRE  -->\n    <!-- ============================================================== -->\n\n    <!-- ============================================================== -->\n    <!-- CUARTO CUATRIMESTRE  -->\n    <!-- ============================================================== -->\n\n    <div data-aos=\"fade-right\" data-aos-duration=\"1500\">\n        <app-cuartocuatrimestre id=\"fourth\"></app-cuartocuatrimestre>\n    </div>\n\n    <!-- ============================================================== -->\n    <!-- FIN CUARTO CUATRIMESTRE  -->\n    <!-- ============================================================== -->\n\n</div>\n<!--FIN DEL CONTENEDOR GLOBAL-->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_scrollanimate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/scrollanimate.service */ "./src/app/services/scrollanimate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(animationScroll) {
        this.animationScroll = animationScroll;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_scrollanimate_service__WEBPACK_IMPORTED_MODULE_1__["ScrollanimateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/nav/nav.component */ "./src/app/shared/nav/nav.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_primercuatrimestre_primercuatrimestre_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/primercuatrimestre/primercuatrimestre.component */ "./src/app/pages/primercuatrimestre/primercuatrimestre.component.ts");
/* harmony import */ var _pages_segundocuatrimestre_segundocuatrimestre_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/segundocuatrimestre/segundocuatrimestre.component */ "./src/app/pages/segundocuatrimestre/segundocuatrimestre.component.ts");
/* harmony import */ var _pages_tercercuatrimestre_tercercuatrimestre_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/tercercuatrimestre/tercercuatrimestre.component */ "./src/app/pages/tercercuatrimestre/tercercuatrimestre.component.ts");
/* harmony import */ var _pages_cuartocuatrimestre_cuartocuatrimestre_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/cuartocuatrimestre/cuartocuatrimestre.component */ "./src/app/pages/cuartocuatrimestre/cuartocuatrimestre.component.ts");
/* harmony import */ var _services_scrollanimate_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/scrollanimate.service */ "./src/app/services/scrollanimate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//SERVICIOS

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _pages_primercuatrimestre_primercuatrimestre_component__WEBPACK_IMPORTED_MODULE_5__["PrimercuatrimestreComponent"],
                _pages_segundocuatrimestre_segundocuatrimestre_component__WEBPACK_IMPORTED_MODULE_6__["SegundocuatrimestreComponent"],
                _pages_tercercuatrimestre_tercercuatrimestre_component__WEBPACK_IMPORTED_MODULE_7__["TercercuatrimestreComponent"],
                _pages_cuartocuatrimestre_cuartocuatrimestre_component__WEBPACK_IMPORTED_MODULE_8__["CuartocuatrimestreComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [
                _services_scrollanimate_service__WEBPACK_IMPORTED_MODULE_9__["ScrollanimateService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/cuartocuatrimestre/cuartocuatrimestre.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/cuartocuatrimestre/cuartocuatrimestre.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/cuartocuatrimestre/cuartocuatrimestre.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/cuartocuatrimestre/cuartocuatrimestre.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"experience\">\r\n    <div class=\"my-auto\">\r\n        <h2 class=\"mb-5\">Information about the recent hacking of our servers.</h2>\r\n        <div class=\"resume-item d-flex flex-column flex-md-row\">\r\n            <div class=\"resume-content mr-auto\">\r\n                <h3 class=\"mb-0\"></h3>\r\n                <div class=\"subheading mb-3\">Autor: Dwigth Astacio Hernández</div>\r\n                <img src=\"https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2018/whathollywoo.jpg\" class=\"img-fluid\" alt=\"Responsive image\">\r\n                <p>\r\n                    It is well known to everyone whose follow our news that in recent days our servers have been attacked with malicious software injected through the mail services, the director of our security department has written a letter to communicate the status of\r\n                    the situation:\r\n                </p>\r\n                <em>\r\n                    December 01, 2018\r\n                    <br>\r\n                    Mr. Osvaldo Biticuará\r\n                    <br>\r\n                    Managing Director\r\n                    <br>\r\n                    GeekZone\r\n                    <br>\r\n                    508 Ficus\r\n                    <br>\r\n                    San Francisco, CA 33102\r\n                    <br>\r\n                    <p class=\"mt-3\"></p>\r\n                    Dear Mr Biticuará\r\n\r\n                    Thank you very much for letting us know about the hack happened last Tuesday, your notice helped us\r\n                    to effectively work the problem.\r\n                    <br >\r\n                    <p class=\"mt-2\"></p>\r\n                    I am very grateful to the community that supports us, giving us feedback on the errors, this was of\r\n                    vital importance due to the multiple instances of the same error. In the same way we communicate\r\n                    that the situation of the company is safe and that the error has been patched completely.\r\n                    <p class=\"mt-2\"></p>\r\n\r\n                    Thank you very much again.\r\n                    <p class=\"mt-3\"></p>\r\n                    <br>\r\n                    Sincerely Yours,\r\n                    <p class=\"mt-2\"></p>\r\n\r\n                    <br>\r\n                    Christian Vega\r\n                    <br>\r\n                    Head of computer security\r\n\r\n                </em>\r\n            </div>\r\n            <div class=\"resume-date text-md-right\">\r\n                <span class=\"text-primary\">Published: November 2018</span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"subheading\">Categorias</div>\r\n        <ul class=\"list-inline dev-icons\">\r\n            <li class=\"list-inline-item\">\r\n                <i class=\"fab fa-html5\"></i>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n                <i class=\"fab fa-css3-alt\"></i>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n                <i class=\"fab fa-js-square\"></i>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n                <i class=\"fab fa-angular\"></i>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n</section>\r\n<hr class=\"m-0\">\r\n<section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"experience\">\r\n    <div class=\"my-auto\">\r\n        <h2 class=\"mb-5\">BioWare's Anthem Having Alpha Test Very Soon!</h2>\r\n\r\n        <div class=\"resume-item d-flex flex-column flex-md-row\">\r\n            <div class=\"resume-content mr-auto\">\r\n                <h3 class=\"mb-0\">Anthem releases next year, but you might be able to play it in December.</h3>\r\n                <div class=\"subheading mb-3\">Autor: Dwigth Astacio Hernández</div>\r\n                <hr>\r\n                <div class=\"embed-responsive embed-responsive-16by9\">\r\n                    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/ZFwylDNpgFc\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n                </div>\r\n                <p>\r\n                    You may soon have the chance to try out the new Destiny-esque action game from BioWare, Anthem. EA has announced an upcoming closed alpha test, and sign-ups for it are now live. As outlined on EA's website, the test will be quite brief--it'll run from\r\n                    December 8-9, though it'll be available on all three of the game's platforms: PS4, Xbox One, and PC. The test will not be available for the entirety of the two days, as there will instead by \"multiple sessions\" spread across the weekend.\r\n                    <br> In terms of the alpha's purpose, EA explains, \"It's an opportunity for you to check out Anthem but we'll also be adjusting things like matchmaking and server load on the fly. These Community Playtests are more limited than what\r\n                    we want to share in the pre-launch demos. All of these factors combined mean that we're making access to our Playtests limited, which is where the 'closed' part of the name comes from.\" Sign-ups are now live, and you can register your\r\n                    interest here. You aren't guaranteed access just by signing up, and you'll need a PlayStation Plus or Xbox Live Gold membership on PS4 and Xbox One, respectively. When registering your interest, you'll need to pick the specific platforms\r\n                    and time windows you're hoping to participate in. Participants will be bound by a non-disclosure agreement. That means, barring any leaks, you shouldn't expect to see players sharing any thoughts, screenshots, or videos from the alpha\r\n                    test. If you don't get in, this won't mark your only chance to try the game before launch. EA and BioWare have plans to offer an Anthem demo next year, and EA/Origin Access members will presumably get their usual limited early access\r\n                    to the game as well. Its full release is set for February 22. Outside of Anthem, BioWare is at work on the future of Mass Effect. It also just recently teased that Dragon Age news is coming very soon.\r\n                </p>\r\n            </div>\r\n            <div class=\"resume-date text-md-right\">\r\n                <span class=\"text-primary\">Published: November 2018</span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"subheading\">Categorias</div>\r\n        <ul class=\"list-inline dev-icons\">\r\n            <li class=\"list-inline-item\">\r\n                <i class=\"fab fa-html5\"></i>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n                <i class=\"fab fa-css3-alt\"></i>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n                <i class=\"fab fa-js-square\"></i>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n                <i class=\"fab fa-angular\"></i>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n</section>\r\n<hr class=\"m-0\">"

/***/ }),

/***/ "./src/app/pages/cuartocuatrimestre/cuartocuatrimestre.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/cuartocuatrimestre/cuartocuatrimestre.component.ts ***!
  \**************************************************************************/
/*! exports provided: CuartocuatrimestreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuartocuatrimestreComponent", function() { return CuartocuatrimestreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CuartocuatrimestreComponent = /** @class */ (function () {
    function CuartocuatrimestreComponent() {
    }
    CuartocuatrimestreComponent.prototype.ngOnInit = function () {
    };
    CuartocuatrimestreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cuartocuatrimestre',
            template: __webpack_require__(/*! ./cuartocuatrimestre.component.html */ "./src/app/pages/cuartocuatrimestre/cuartocuatrimestre.component.html"),
            styles: [__webpack_require__(/*! ./cuartocuatrimestre.component.css */ "./src/app/pages/cuartocuatrimestre/cuartocuatrimestre.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CuartocuatrimestreComponent);
    return CuartocuatrimestreComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-img {\r\n    width: 100%;\r\n    margin: auto;\r\n    display: block;\r\n    border-radius: 10%;\r\n    margin-top: -0.5rem !important;\r\n}"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"resume-section p-3 p-lg-5 d-flex d-column\" id=\"about\">\n    <div class=\"my-auto\">\n        <div class=\"row justify-content-center\">\n\n            <div class=\"col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4\">\n                <h1 class=\"mb-0 tittleMagazine\">\n                    GeekZone\n                </h1>\n            </div>\n            <div class=\"col-8 col-sm-8 col-md-7 col-lg-7 col-xl-4\">\n                <img class=\"home-img img-fluid\" src=\"../../../assets/img/transparent.png\" alt=\"\">\n            </div>\n            <div class=\"col-12 col-sm-12  col-md-6 col-lg-6 col-xl-4\">\n                <h1 class=\"mb-0 tittleMagazine\">\n                    <span class=\"text-primary\">Magazine</span>\n                </h1>\n            </div>\n\n        </div>\n\n        <div class=\"subheading pt-3 mb-5\">Universidad Tecnologica de Tabasco · Villahermosa, Carretara vhsa-teapa ·\n            <a href=\"mailto:name@email.com\">geekzone-revista@hotmail.com</a>\n        </div>\n        <p class=\"lead mb-5\">\n            The number one state magazine in technology, science, video games and more.\n        </p>\n        <div class=\"my-auto\">\n            <h2 class=\"mb-3\">Students <small>(4to SP)</small>:</h2>\n            <ul class=\"fa-ul mb-0\">\n                <li>\n                    <i class=\"fa-li fa fa-trophy text-warning\"></i> CARLOS ADRIAN GARCÍA REYES - 421510121_i\n                </li>\n                <hr>\n                <li>\n                    <i class=\"fa-li fa fa-trophy text-warning\"></i> DWIGTH ASTACIO HERNANDEZ - 421510099_i\n                </li>\n                <hr>\n                <li>\n                    <i class=\"fa-li fa fa-trophy text-warning\"></i> ROBERTO GONZALEZ VARGAS - 421510170_i\n                </li>\n                <hr>\n                <li>\n                    <i class=\"fa-li fa fa-trophy text-warning\"></i> DAVID MONTORES ESCALANTE - 421510021_i\n                </li>\n\n\n            </ul>\n        </div>\n    </div>\n</section>\n\n<hr class=\"m-0\">"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/primercuatrimestre/primercuatrimestre.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/primercuatrimestre/primercuatrimestre.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/primercuatrimestre/primercuatrimestre.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/primercuatrimestre/primercuatrimestre.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"\">\r\n    <div class=\"my-auto\">\r\n        <h2 class=\"mb-5\">The developing web was updated, nowadays everybody works with this new Framework </h2>\r\n\r\n        <div class=\"resume-item d-flex flex-column flex-md-row\">\r\n            <div class=\"resume-content mr-auto\">\r\n                <h3 class=\"mb-0\">The programmer's corner</h3>\r\n                <div class=\"subheading mb-3\">Autor: Roberto Gonzalez Vargas</div>\r\n                <p>\r\n                    Today we will talk about new technologies for developing web, \r\n                    I work some projects with this technologies, We see clients \r\n                    and his needs and is important, but some technologies see \r\n                    also our needs like developers, my recommendation is \r\n                    according my point of view in the workflow that each \r\n                    and the tools that those offers.\r\n                </p>\r\n                <p>\r\n                    It mixes the backend and the frontend and you will be a good programmer,\r\n                    separate the frontend and the backend and you will be the best programmer,\r\n                    how is possible? We haven’t passed to hacks attacks in vain, the web \r\n                    security every day improves and if they haven’t learned this, maybe\r\n                    they should change your career. I can see programmers in the \r\n                    comments \"everybody can develop your application as they want\"\r\n                    but there are rules, guides and good practices that improve \r\n                    the way to develop and the security of user and all environment.\r\n                </p>\r\n                <div class=\"w-100 \">\r\n                    <img src=\"https://angular.io/generated/images/guide/router/component-tree.png\" alt=\"\" class=\"img-fluid\">\r\n                </div>\r\n                <br>\r\n                <p>\r\n\r\n                    I was programming yesterday and I can feel all power that MVC \r\n                    and programming modular with Angular, I wanted to dance with \r\n                    emotion, we believed in Google when it bought Angular and \r\n                    change his structure, the learning curve is more but the \r\n                    advantages are formidable, I was doubting with the change \r\n                    but my team convinced me to use, and wow! The modularity, \r\n                    the components, the tools, and compatibilities are awesome.\r\n\r\n                </p>\r\n                <div class=\"w-100\">\r\n                    <img src=\"https://cms-assets.tutsplus.com/uploads/users/1795/posts/29044/preview_image/AngularvsReact-Preview.jpg\" alt=\"\" class=\"img-fluid\">\r\n                </div>\r\n                <br>\r\n                <p>\r\n                    PHP, I will not use you tonight, develop with angular is more \r\n                    awesome, Will you use too? You should but not all, also we use \r\n                    React-js and those two technologies they are revolutionizing \r\n                    the world how programming in the web, the components natives \r\n                    or reactives be the future of the web. I am going to learn more \r\n                    about React-js because didn't see to full and Redux is another \r\n                    thing quite interesting that talk after. See you later.\r\n                </p>\r\n            </div>\r\n            <div class=\"resume-date text-md-right\">\r\n                <span class=\"text-primary\">Published November 2018</span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"subheading\">Categories</div>\r\n        <ul class=\"list-inline dev-icons\">\r\n            <li class=\"list-inline-item\">\r\n                <i class=\"fab fa-html5\"></i>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n                <i class=\"fab fa-js-square\"></i>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n                <i class=\"fab fa-react\"></i>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n                <i class=\"fab fa-angular\"></i>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n</section>\r\n<hr class=\"m-0\">\r\n\r\n<section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"\">\r\n    <div class=\"my-auto\">\r\n        <h2 class=\"mb-5\">The spiderman has come back!</h2>\r\n\r\n        <div class=\"resume-item d-flex flex-column flex-md-row\">\r\n            <div class=\"resume-content mr-auto\">\r\n                <h3 class=\"mb-0\">Game Review</h3>\r\n                <div class=\"subheading mb-3\">Autor: Roberto Gonzalez Vargas</div>\r\n                <p>\r\n                    The year was shocked by spiderman, the Sony release \"Spiderman\" \r\n                    for the PS4, It has been a news that shocked all the fans of \r\n                    the arachnid, the memories of childhood come to our mind to \r\n                    play the amazing title with the spectacular graphic section \r\n                    that accompanies the generation. But it is not the first \r\n                    time that Sony uses the arachnid this is working, isn't it? \r\n                    Swinging through the streets of New York as the amazing climbs \r\n                    walls will always be amazing. \r\n                </p>\r\n                <div class=\"w-100 \">\r\n                    <img src=\"https://static.gamespot.com/uploads/original/1587/15875866/3400004-spiderman-e3.jpg\" alt=\"\" class=\"img-fluid\">\r\n                </div>\r\n                <br>\r\n                <p>\r\n                    He was received after by fans, the sales of the game \r\n                    increased much later, before and during the launch of the\r\n                     video game, the mechanics so polished, the graphics and well, \r\n                     spiderman! Made this one of the best games of 2018, selling \r\n                     millions of copies in a few weeks, you bought the game, \r\n                     didn't you? Undoubtedly this is one of the games that can’t \r\n                     miss in your repertoire. \r\n                </p>\r\n              \r\n                \r\n            </div>\r\n            <div class=\"resume-date text-md-right\">\r\n                <span class=\"text-primary\">Published November 2018</span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"subheading\">Categories</div>\r\n        <ul class=\"list-inline dev-icons\">\r\n            <li class=\"list-inline-item\">\r\n                <i class=\"fas fa-newspaper\"></i>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n                <i class=\"fas fa-gamepad\"></i>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n                <i class=\"fas fa-spider\"></i>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/pages/primercuatrimestre/primercuatrimestre.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/primercuatrimestre/primercuatrimestre.component.ts ***!
  \**************************************************************************/
/*! exports provided: PrimercuatrimestreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimercuatrimestreComponent", function() { return PrimercuatrimestreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrimercuatrimestreComponent = /** @class */ (function () {
    function PrimercuatrimestreComponent() {
    }
    PrimercuatrimestreComponent.prototype.ngOnInit = function () {
    };
    PrimercuatrimestreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-primercuatrimestre',
            template: __webpack_require__(/*! ./primercuatrimestre.component.html */ "./src/app/pages/primercuatrimestre/primercuatrimestre.component.html"),
            styles: [__webpack_require__(/*! ./primercuatrimestre.component.css */ "./src/app/pages/primercuatrimestre/primercuatrimestre.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrimercuatrimestreComponent);
    return PrimercuatrimestreComponent;
}());



/***/ }),

/***/ "./src/app/pages/segundocuatrimestre/segundocuatrimestre.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/segundocuatrimestre/segundocuatrimestre.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-articulo {\r\n    width: 30rem;\r\n}"

/***/ }),

/***/ "./src/app/pages/segundocuatrimestre/segundocuatrimestre.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/segundocuatrimestre/segundocuatrimestre.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n<!-- 1 ARITUCLO  -->\n<!-- ============================================================== -->\n\n\n<section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"experience\">\n    <div class=\"my-auto\">\n        <h2 class=\"mb-5\">Superhero of Marvel Comics Stan Lee Is Dead </h2>\n\n        <div class=\"resume-item d-flex flex-column flex-md-row\">\n            <div class=\"resume-content mr-auto\">\n                <h3 class=\"mb-0\">Marvel Comics visionary, dead at 95</h3>\n                <div class=\"subheading mb-3\">Author: Carlos Adrián García Reyes</div>\n                <p>\n                    <strong>Do you know a Stan Lee?</strong>\n                    <br> When we used to young, all we saw the movies of marvel or read comics as spiderman, iron-man, x-mens etc.\n                    <br>The colorful Marvel Comics patriarch who helped usher in a new era of superhero storytelling and saw his creations become a giant influence in the movie business has died.\n                </p>\n                <img class=\"img-articulo img-fluid m-auto\" src=\"../../../assets/img/carlos/stanlee.jpg\">\n                <p class=\"pt-4\">\n                    <strong>Can you tell how he die?</strong>\n                    <br> Kirk Schneck, an attorney for Lee's daughter, tells CNN the comic giant was taken by ambulance from his Los Angeles home on Monday morning to Cedar's Sinai Medical Center, where he later died. The cause of death is not yet known,\n                    according to Schneck.\n                </p>\n                <p>\n                    <strong>Can you tell me more about Stan?</strong>\n                    <br>Lee began his career at what was then Timely Comics in 1939. Over the years he was a writer, editor and occasional illustrator. But, bored with the output, he was preparing to leave the company when history took a sudden turn.\n                    Lee could write comics when she was 24 years.\n                </p>\n                <p>\n                    \"The comic should be written as a single word, so from now on, I want you to remember it,\" he said in a YouTube video of 2012. \"They're not funny books, they're not comic books, they're comic books! Remember that or incur my anger.\"\n                    <br>\n                    <strong>-Stan Lee</strong>\n                </p>\n            </div>\n            <div class=\"resume-date text-md-right\">\n                <span class=\"text-primary\">Published: November 2018</span>\n            </div>\n\n        </div>\n\n        <div class=\"subheading\">Categories</div>\n        <ul class=\"list-inline dev-icons\">\n            <li class=\"list-inline-item mr-4\">\n                <i class=\"fas fa-glasses\"></i>\n            </li>\n            <li class=\"list-inline-item mr-4\">\n                <i class=\"fas fa-book-reader\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"fas fa-cross\"></i>\n            </li>\n\n        </ul>\n    </div>\n\n</section>\n<hr class=\"m-0\">\n\n<!-- ============================================================== -->\n<!-- FIN 1 ARITULO  -->\n<!-- ============================================================== -->\n\n\n<!-- ============================================================== -->\n<!-- 2 ARTICULO  -->\n<!-- ============================================================== -->\n\n<section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"experience\">\n    <div class=\"my-auto\">\n        <h2 class=\"mb-5\">If you are a Queen fan, the movie you will love.</h2>\n\n        <div class=\"resume-item d-flex flex-column flex-md-row\">\n            <div class=\"resume-content mr-auto\">\n                <h3 class=\"mb-0\">Bohemian Rhapsody Review</h3>\n                <div class=\"subheading mb-3\">Author: Carlos Adrián García Reyes</div>\n                <p>\n                    <strong>Do you are a Band Queen fan? I didn't use to like biographical movies about bands, but now I do.</strong>\n                    <br>I had only low expectations before view the movie, because if you are freddy mercuri fan, you will not see a more perfect and imperfect rock and roll biopic than Bohemian Rhapsody, which does many things extremely well, other things\n                    sort of average, and one thing flawlessly: capturing the immense charisma and panache of Queen singer Freddie Mercury.\n                </p>\n                <img class=\"img-articulo img-fluid m-auto\" src=\"../../../assets/img/carlos/queen.jpg\">\n                <p class=\"pt-4\">\n                    <strong>Personally, I'd read the books of the band before I saw the movie.</strong>\n                    <br> The scenes bookending the above-mentioned are much, much better. Bohemiam Rhapsody, buoyed as it is by a fantastic soundtrack (duh), soars on universally spot-on casting: May, played by Gwilym Lee, is nailed right down to his\n                    clogs, bassist John Deacon (Joseph Mazzello) down to his ill-advised perm.\n                </p>\n                <p>\n                    The performance scenes, particularly the showpiece Live Aid concert, broadcast the excitement — and inherent fashion crimes — of eighties-era Wembley Stadium at full blast. (In subsequent interviews, Malek has confirmed this iconic scene of that iconic\n                    performance was the first thing that was shot with the surviving members of Queen watching, further underscoring just how much he nailed it).\n                </p>\n            </div>\n            <div class=\"resume-date text-md-right\">\n                <span class=\"text-primary\">Published: November 2018</span>\n            </div>\n\n        </div>\n\n        <div class=\"subheading\">Categories</div>\n        <ul class=\"list-inline dev-icons\">\n            <li class=\"list-inline-item mr-4\">\n                <i class=\"fas fa-video\"></i>\n            </li>\n            <li class=\"list-inline-item mr-4\">\n                <i class=\"fas fa-glasses\"></i>\n            </li>\n            <li class=\"list-inline-item mr-4\">\n                <i class=\"fas fa-book-reader\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"fas fa-music\"></i>\n            </li>\n\n        </ul>\n    </div>\n\n</section>\n<hr class=\"m-0\">\n\n<!-- ============================================================== -->\n<!-- FIN 2 ARTICULO  -->\n<!-- ============================================================== -->"

/***/ }),

/***/ "./src/app/pages/segundocuatrimestre/segundocuatrimestre.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/segundocuatrimestre/segundocuatrimestre.component.ts ***!
  \****************************************************************************/
/*! exports provided: SegundocuatrimestreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegundocuatrimestreComponent", function() { return SegundocuatrimestreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SegundocuatrimestreComponent = /** @class */ (function () {
    function SegundocuatrimestreComponent() {
    }
    SegundocuatrimestreComponent.prototype.ngOnInit = function () {
    };
    SegundocuatrimestreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-segundocuatrimestre',
            template: __webpack_require__(/*! ./segundocuatrimestre.component.html */ "./src/app/pages/segundocuatrimestre/segundocuatrimestre.component.html"),
            styles: [__webpack_require__(/*! ./segundocuatrimestre.component.css */ "./src/app/pages/segundocuatrimestre/segundocuatrimestre.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SegundocuatrimestreComponent);
    return SegundocuatrimestreComponent;
}());



/***/ }),

/***/ "./src/app/pages/tercercuatrimestre/tercercuatrimestre.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tercercuatrimestre/tercercuatrimestre.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/tercercuatrimestre/tercercuatrimestre.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/tercercuatrimestre/tercercuatrimestre.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"experience\">\n    <div class=\"my-auto\">\n        <h2 class=\"mb-5\">Titulo del arituclo </h2>\n\n        <div class=\"resume-item d-flex flex-column flex-md-row\">\n            <div class=\"resume-content mr-auto\">\n                <h3 class=\"mb-0\">Subtitulo</h3>\n                <div class=\"subheading mb-3\">Autor: Carlos Adrian García Reyes</div>\n                <p>\n                    Este es un ejemplo de descripcion de un articulo sobre web Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, excepturi aut. Autem saepe nobis dolores ducimus nihil eos nisi suscipit commodi adipisci explicabo, recusandae officiis accusantium\n                    repudiandae dicta sint aperiam!\n                </p>\n            </div>\n            <div class=\"resume-date text-md-right\">\n                <span class=\"text-primary\">Publicado en: Noviembre 2018</span>\n            </div>\n        </div>\n\n        <div class=\"subheading\">Categorias</div>\n        <ul class=\"list-inline dev-icons\">\n            <li class=\"list-inline-item\">\n                <i class=\"fab fa-html5\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"fab fa-css3-alt\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"fab fa-js-square\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"fab fa-angular\"></i>\n            </li>\n        </ul>\n    </div>\n\n</section>\n<hr class=\"m-0\">"

/***/ }),

/***/ "./src/app/pages/tercercuatrimestre/tercercuatrimestre.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/tercercuatrimestre/tercercuatrimestre.component.ts ***!
  \**************************************************************************/
/*! exports provided: TercercuatrimestreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TercercuatrimestreComponent", function() { return TercercuatrimestreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TercercuatrimestreComponent = /** @class */ (function () {
    function TercercuatrimestreComponent() {
    }
    TercercuatrimestreComponent.prototype.ngOnInit = function () {
    };
    TercercuatrimestreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tercercuatrimestre',
            template: __webpack_require__(/*! ./tercercuatrimestre.component.html */ "./src/app/pages/tercercuatrimestre/tercercuatrimestre.component.html"),
            styles: [__webpack_require__(/*! ./tercercuatrimestre.component.css */ "./src/app/pages/tercercuatrimestre/tercercuatrimestre.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TercercuatrimestreComponent);
    return TercercuatrimestreComponent;
}());



/***/ }),

/***/ "./src/app/services/scrollanimate.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/scrollanimate.service.ts ***!
  \***************************************************/
/*! exports provided: ScrollanimateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollanimateService", function() { return ScrollanimateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrollanimateService = /** @class */ (function () {
    function ScrollanimateService() {
        //LIBRERIA DE ANIMACIONES
        this.animations();
    }
    ScrollanimateService.prototype.animations = function () {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init({
            // Global settings:
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120,
            delay: 0,
            duration: 400,
            easing: 'ease',
            once: false,
            mirror: true,
            anchorPlacement: 'top-bottom',
        });
    };
    ScrollanimateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ScrollanimateService);
    return ScrollanimateService;
}());



/***/ }),

/***/ "./src/app/shared/nav/nav.component.css":
/*!**********************************************!*\
  !*** ./src/app/shared/nav/nav.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/nav/nav.component.html":
/*!***********************************************!*\
  !*** ./src/app/shared/nav/nav.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\" id=\"sideNav\">\n    <a class=\"navbar-brand js-scroll-trigger\" href=\"#home\">\n        <span class=\"d-block d-lg-none\">GeekZone</span>\n        <span class=\"d-none d-lg-block\">\n            <img class=\"img-fluid img-profile rounded-circle mx-auto mb-2\" src=\"../assets/img/logo-cuadrado.png\">\n        </span>\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n                <a href=\"#home\" class=\"nav-link js-scroll-trigger\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"#first\" class=\"nav-link js-scroll-trigger\">First Quarter</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"#second\" class=\"nav-link js-scroll-trigger\">Second Quarter</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"#third\" class=\"nav-link js-scroll-trigger\">Third Quarter</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"#fourth\" class=\"nav-link js-scroll-trigger\">Fourth Quarter</a>\n            </li>\n\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/shared/nav/nav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/shared/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/shared/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Angular\GeekZone\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map