webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Games/games.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GamesComponent = /** @class */ (function () {
    function GamesComponent() {
        this.projects = [];
        this.projects.push({ name: 'dungeon game', src: 'assets/dungeonVidTest.mp4',
            desc: "A procedurally generated dungeon exploring game that I made with unity game engin.",
            url: 'assets/pixel3dtest/index.html' });
        this.projects.push({ name: 'plaform game', src: 'assets/platformVid.m4v',
            desc: 'A 2d platforming game that I made with unity game engine', url: 'assets/2dplatform/index.html' });
        this.projects.push({ name: 'tower defence game', src: 'assets/villagesVid.m4v',
            desc: 'A simple tower defence game that I made with unity game engine', url: 'assets/villages/index.html' });
        this.projects.push({ name: 'tornado escape game', src: 'assets/tornadoVid.m4v',
            desc: "A game, where you try to avoid a tornado in an island by running around fast.\n                         The game was made with unity game engine", url: 'assets/tornado/index.html' });
        this.projects.push({ name: 'Vapriball', src: 'assets/vapriball.mp4',
            desc: "Android topdown gyroscope controlled puzzle/adventure game.\n                        It was a first year school project in TAMK, where I was the primary programmer. It was commisioned by\n                        a local museum and it was made using java and libgdx.",
            url: 'https://play.google.com/store/apps/details?id=fi.tamk.tiko.contego&hl=en' });
    }
    GamesComponent.prototype.ngOnInit = function () {
    };
    GamesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-games',
            template: "\n  <div id=\"gameBlock\">\n    <p id=\"blockHeader\">Games</p>\n    <app-video-project *ngFor=\"let project of projects\" [curProject]=\"project\"></app-video-project>\n  </div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], GamesComponent);
    return GamesComponent;
}());



/***/ }),

/***/ "./src/app/Games/games.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__games_component__ = __webpack_require__("./src/app/Games/games.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Project_project_module__ = __webpack_require__("./src/app/Project/project.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Project_VideoProject_video_project_dialog_component__ = __webpack_require__("./src/app/Project/VideoProject/video-project-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GamesModule = /** @class */ (function () {
    function GamesModule() {
    }
    GamesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__games_component__["a" /* GamesComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__Project_project_module__["a" /* ProjectModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__games_component__["a" /* GamesComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__Project_VideoProject_video_project_dialog_component__["a" /* VideoProjectDialogComponent */]]
        })
    ], GamesModule);
    return GamesModule;
}());



/***/ }),

/***/ "./src/app/Programming/programming.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgrammingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgrammingComponent = /** @class */ (function () {
    function ProgrammingComponent() {
        this.projects = [];
        this.projects.push({ name: 'Java Game Engine', src: 'assets/gameEngine.mp4',
            desc: "A game engine / framework that I made using Java, JavaFX and dyn4j physics library\n                                    ", url: 'https://github.com/Penjami/Pelimoottori' });
    }
    ProgrammingComponent.prototype.ngOnInit = function () {
    };
    ProgrammingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-programming',
            template: "\n  <div id=\"programmingBlock\">\n    <p id=\"blockHeader\">Programming Projects</p>\n    <app-programming-project *ngFor=\"let project of projects\" [curProject]=\"project\"></app-programming-project>\n  </div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ProgrammingComponent);
    return ProgrammingComponent;
}());



/***/ }),

/***/ "./src/app/Programming/programming.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgrammingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__programming_component__ = __webpack_require__("./src/app/Programming/programming.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Project_project_module__ = __webpack_require__("./src/app/Project/project.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Project_ProgrammingProject_programming_project_dialog_component__ = __webpack_require__("./src/app/Project/ProgrammingProject/programming-project-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProgrammingModule = /** @class */ (function () {
    function ProgrammingModule() {
    }
    ProgrammingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__programming_component__["a" /* ProgrammingComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__Project_project_module__["a" /* ProjectModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__programming_component__["a" /* ProgrammingComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__Project_ProgrammingProject_programming_project_dialog_component__["a" /* ProgrammingProjectDialogComponent */]]
        })
    ], ProgrammingModule);
    return ProgrammingModule;
}());



/***/ }),

/***/ "./src/app/Project/ImageProject/image-project-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageProjectDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ImageProjectDialogComponent = /** @class */ (function () {
    function ImageProjectDialogComponent(project, domSanitizer) {
        this.project = project;
        this.domSanitizer = domSanitizer;
        this.objectKeys = Object.keys;
    }
    ImageProjectDialogComponent.prototype.ngOnInit = function () {
        this.imgHTML = this.domSanitizer.bypassSecurityTrustHtml("<a href=\"" + this.project.url + "\" >\n      <img width=\"200\" height=\"150\" src=\"{{curProject.src}}\">\n      </a>");
    };
    ImageProjectDialogComponent.prototype.getVideoTag = function () {
    };
    ImageProjectDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-image-project-dialog',
            template: "\n  <div id=\"dialog\">\n    <h1 mat-dialog-title id=\"dialogHeader\">{{project.name}}</h1>\n    <div mat-dialog-content>\n      <div id=\"dialogText\"> {{project.desc}} </div>\n      <div [innerHTML]=\"imgHTML\"></div>\n    </div>\n    <div mat-dialog-actions><button mat-button [mat-dialog-close]=\"\">Ok</button></div>\n  </div>\n  ",
            styles: []
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ImageProjectDialogComponent);
    return ImageProjectDialogComponent;
}());



/***/ }),

/***/ "./src/app/Project/ImageProject/image-project-tile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageProjectTileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_project_dialog_component__ = __webpack_require__("./src/app/Project/ImageProject/image-project-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageProjectTileComponent = /** @class */ (function () {
    function ImageProjectTileComponent(matDialog) {
        this.trigger = 'inactive';
        this.matDialog = matDialog;
    }
    ImageProjectTileComponent.prototype.ngOnInit = function () { };
    ImageProjectTileComponent.prototype.openDialog = function () {
        this.matDialog.open(__WEBPACK_IMPORTED_MODULE_2__image_project_dialog_component__["a" /* ImageProjectDialogComponent */], {
            width: '500px',
            data: this.curProject,
            autoFocus: false
        });
    };
    ImageProjectTileComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageProjectTileComponent.prototype, "curProject", void 0);
    ImageProjectTileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-image-project',
            template: "\n  <div id=\"project\" (click)=\"openDialog()\">\n    <img id=\"thumbnail\" width=\"200\" height=\"150\" src=\"{{curProject.src}}\">\n    <div>{{curProject.name}}</div>\n    <img id=\"foreground\" src=\"assets/tileBackground.png\">\n  </div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialog */]])
    ], ImageProjectTileComponent);
    return ImageProjectTileComponent;
}());



/***/ }),

/***/ "./src/app/Project/ProgrammingProject/programming-project-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgrammingProjectDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ProgrammingProjectDialogComponent = /** @class */ (function () {
    function ProgrammingProjectDialogComponent(project, domSanitizer) {
        this.project = project;
        this.domSanitizer = domSanitizer;
        this.objectKeys = Object.keys;
    }
    ProgrammingProjectDialogComponent.prototype.ngOnInit = function () {
        this.videoHTML = this.domSanitizer.bypassSecurityTrustHtml("\n        <video autoplay muted loop id=\"video1\" width=\"400\" height=\"300\">\n          <source src=\"" + this.project.src + "\" type=\"video/mp4\">No HTML5 supported.\n       </video>");
    };
    ProgrammingProjectDialogComponent.prototype.getVideoTag = function () {
    };
    ProgrammingProjectDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-programming-project-dialog',
            template: "\n  <div id=\"dialog\">\n    <h1 mat-dialog-title id=\"dialogHeader\">{{project.name}}</h1>\n    <div mat-dialog-content id=\"dialog\">\n      <div id=\"dialogText\"> {{project.desc}} </div>\n      <div [innerHTML]=\"videoHTML\"></div>\n    </div>\n    <div mat-dialog-actions>\n      <button mat-button [mat-dialog-close]=\"\">Ok</button>\n      <a mat-button href=\"{{project.url}}\">Github</a>\n    </div>\n  </div>\n  ",
            styles: []
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ProgrammingProjectDialogComponent);
    return ProgrammingProjectDialogComponent;
}());



/***/ }),

/***/ "./src/app/Project/ProgrammingProject/programming-project-tile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgrammmingProjectTileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__programming_project_dialog_component__ = __webpack_require__("./src/app/Project/ProgrammingProject/programming-project-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProgrammmingProjectTileComponent = /** @class */ (function () {
    function ProgrammmingProjectTileComponent(matDialog) {
        this.matDialog = matDialog;
    }
    ProgrammmingProjectTileComponent.prototype.ngOnInit = function () { };
    ProgrammmingProjectTileComponent.prototype.openDialog = function () {
        this.matDialog.open(__WEBPACK_IMPORTED_MODULE_2__programming_project_dialog_component__["a" /* ProgrammingProjectDialogComponent */], {
            width: '800px',
            data: this.curProject,
            autoFocus: false
        });
    };
    ProgrammmingProjectTileComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], ProgrammmingProjectTileComponent.prototype, "curProject", void 0);
    ProgrammmingProjectTileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-programming-project',
            template: "\n  <div id=\"project\" (click)=\"openDialog()\">\n    <video muted loop id=\"video1\" width=\"200\" height=\"150\">\n      <source src=\"{{curProject.src}}\" type=\"video/mp4\">No HTML5 supported.\n    </video>\n    <div>{{curProject.name}}</div>\n    <img id=\"foreground\" src=\"assets/tileBackground.png\">\n  </div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialog */]])
    ], ProgrammmingProjectTileComponent);
    return ProgrammmingProjectTileComponent;
}());



/***/ }),

/***/ "./src/app/Project/ThreeDProject/threed-project-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreeDProjectDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ThreeDProjectDialogComponent = /** @class */ (function () {
    function ThreeDProjectDialogComponent(project, domSanitizer) {
        this.project = project;
        this.domSanitizer = domSanitizer;
        this.objectKeys = Object.keys;
    }
    ThreeDProjectDialogComponent.prototype.ngOnInit = function () {
        this.modelHTML = this.domSanitizer.bypassSecurityTrustHtml("" + this.project.url);
    };
    ThreeDProjectDialogComponent.prototype.getVideoTag = function () {
    };
    ThreeDProjectDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-threed-project-dialog',
            template: "\n  <div id=\"dialog\">\n    <h1 mat-dialog-title id=\"dialogHeader\">{{project.name}}</h1>\n    <div mat-dialog-content id=\"dialog\">\n      <div id=\"dialogText\"> {{project.desc}} </div>\n      <div id=\"dialogContent\" [innerHTML]=\"modelHTML\"></div>\n    </div>\n    <div mat-dialog-actions><button mat-button [mat-dialog-close]=\"\">Ok</button></div>\n  </div>\n  ",
            styles: []
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ThreeDProjectDialogComponent);
    return ThreeDProjectDialogComponent;
}());



/***/ }),

/***/ "./src/app/Project/ThreeDProject/threed-project-tile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreeDProjectTileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__threed_project_dialog_component__ = __webpack_require__("./src/app/Project/ThreeDProject/threed-project-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThreeDProjectTileComponent = /** @class */ (function () {
    function ThreeDProjectTileComponent(matDialog) {
        this.trigger = 'inactive';
        this.matDialog = matDialog;
    }
    ThreeDProjectTileComponent.prototype.ngOnInit = function () { };
    ThreeDProjectTileComponent.prototype.openDialog = function () {
        this.matDialog.open(__WEBPACK_IMPORTED_MODULE_2__threed_project_dialog_component__["a" /* ThreeDProjectDialogComponent */], {
            width: '800px',
            data: this.curProject,
            autoFocus: false
        });
    };
    ThreeDProjectTileComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], ThreeDProjectTileComponent.prototype, "curProject", void 0);
    ThreeDProjectTileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-threed-project',
            template: "\n  <div id=\"project\" (click)=\"openDialog()\">\n    <img id=\"thumbnail\" width=\"200\" height=\"150\" src=\"{{curProject.src}}\">\n    <div>{{curProject.name}}</div>\n    <img id=\"foreground\" src=\"assets/tileBackground.png\">\n  </div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialog */]])
    ], ThreeDProjectTileComponent);
    return ThreeDProjectTileComponent;
}());



/***/ }),

/***/ "./src/app/Project/VideoProject/video-project-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoProjectDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var VideoProjectDialogComponent = /** @class */ (function () {
    function VideoProjectDialogComponent(project, domSanitizer) {
        this.project = project;
        this.domSanitizer = domSanitizer;
        this.objectKeys = Object.keys;
    }
    VideoProjectDialogComponent.prototype.ngOnInit = function () {
        this.videoHTML = this.domSanitizer.bypassSecurityTrustHtml("\n        <video autoplay muted loop id=\"video1\" width=\"400\" height=\"300\">\n          <source src=\"" + this.project.src + "\" type=\"video/mp4\">No HTML5 supported.\n       </video> ");
    };
    VideoProjectDialogComponent.prototype.getVideoTag = function () {
    };
    VideoProjectDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-video-project-dialog',
            template: "\n  <div id=\"dialog\">\n    <h1 mat-dialog-title id=\"dialogHeader\">{{project.name}}</h1>\n    <div mat-dialog-content id=\"dialog\">\n      <div id=\"dialogText\"> {{project.desc}} </div>\n      <div [innerHTML]=\"videoHTML\"></div>\n    </div>\n    <div mat-dialog-actions>\n      <button mat-button [mat-dialog-close]=\"\" >Ok</button>\n      <a mat-button href=\"{{project.url}}\" >Play</a>\n    </div>\n  </div>\n  ",
            styles: []
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], VideoProjectDialogComponent);
    return VideoProjectDialogComponent;
}());



/***/ }),

/***/ "./src/app/Project/VideoProject/video-project-tile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoProjectTileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video_project_dialog_component__ = __webpack_require__("./src/app/Project/VideoProject/video-project-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoProjectTileComponent = /** @class */ (function () {
    function VideoProjectTileComponent(matDialog) {
        this.matDialog = matDialog;
    }
    VideoProjectTileComponent.prototype.ngOnInit = function () { };
    VideoProjectTileComponent.prototype.openDialog = function () {
        this.matDialog.open(__WEBPACK_IMPORTED_MODULE_2__video_project_dialog_component__["a" /* VideoProjectDialogComponent */], {
            width: '800px',
            data: this.curProject,
            autoFocus: false
        });
    };
    VideoProjectTileComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], VideoProjectTileComponent.prototype, "curProject", void 0);
    VideoProjectTileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-video-project',
            template: "\n  <div id=\"project\" (click)=\"openDialog()\">\n    <video muted loop id=\"video1\" width=\"200\" height=\"150\">\n      <source src=\"{{curProject.src}}\" type=\"video/mp4\">No HTML5 supported.\n    </video>\n    <div>{{curProject.name}}</div>\n    <img id=\"foreground\" src=\"assets/tileBackground.png\">\n  </div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialog */]])
    ], VideoProjectTileComponent);
    return VideoProjectTileComponent;
}());



/***/ }),

/***/ "./src/app/Project/project.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ImageProject_image_project_dialog_component__ = __webpack_require__("./src/app/Project/ImageProject/image-project-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ImageProject_image_project_tile_component__ = __webpack_require__("./src/app/Project/ImageProject/image-project-tile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__VideoProject_video_project_dialog_component__ = __webpack_require__("./src/app/Project/VideoProject/video-project-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__VideoProject_video_project_tile_component__ = __webpack_require__("./src/app/Project/VideoProject/video-project-tile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ThreeDProject_threed_project_dialog_component__ = __webpack_require__("./src/app/Project/ThreeDProject/threed-project-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ThreeDProject_threed_project_tile_component__ = __webpack_require__("./src/app/Project/ThreeDProject/threed-project-tile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ProgrammingProject_programming_project_dialog_component__ = __webpack_require__("./src/app/Project/ProgrammingProject/programming-project-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ProgrammingProject_programming_project_tile_component__ = __webpack_require__("./src/app/Project/ProgrammingProject/programming-project-tile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__ImageProject_image_project_dialog_component__["a" /* ImageProjectDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_5__ImageProject_image_project_tile_component__["a" /* ImageProjectTileComponent */],
                __WEBPACK_IMPORTED_MODULE_6__VideoProject_video_project_dialog_component__["a" /* VideoProjectDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_7__VideoProject_video_project_tile_component__["a" /* VideoProjectTileComponent */],
                __WEBPACK_IMPORTED_MODULE_8__ThreeDProject_threed_project_dialog_component__["a" /* ThreeDProjectDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__ThreeDProject_threed_project_tile_component__["a" /* ThreeDProjectTileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__ProgrammingProject_programming_project_dialog_component__["a" /* ProgrammingProjectDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_11__ProgrammingProject_programming_project_tile_component__["a" /* ProgrammmingProjectTileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__ImageProject_image_project_dialog_component__["a" /* ImageProjectDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_5__ImageProject_image_project_tile_component__["a" /* ImageProjectTileComponent */],
                __WEBPACK_IMPORTED_MODULE_6__VideoProject_video_project_dialog_component__["a" /* VideoProjectDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_7__VideoProject_video_project_tile_component__["a" /* VideoProjectTileComponent */],
                __WEBPACK_IMPORTED_MODULE_8__ThreeDProject_threed_project_dialog_component__["a" /* ThreeDProjectDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__ThreeDProject_threed_project_tile_component__["a" /* ThreeDProjectTileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__ProgrammingProject_programming_project_dialog_component__["a" /* ProgrammingProjectDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_11__ProgrammingProject_programming_project_tile_component__["a" /* ProgrammmingProjectTileComponent */]
            ]
        })
    ], ProjectModule);
    return ProjectModule;
}());



/***/ }),

/***/ "./src/app/ThreeD/threed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreeDComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThreeDComponent = /** @class */ (function () {
    function ThreeDComponent() {
        this.projects = [];
        this.projects.push({ name: 'Sword', src: 'assets/sword.jpeg',
            desc: "A sword model I made using Blender and Substance Painter\n                                    ", url: "\n                                    <div class=\"sketchfab-embed-wrapper\">\n                                    <iframe width=\"480\" height=\"480\"\n                                    src=\"https://sketchfab.com/models/1580576bc1a94658bd58feb8c744107e/embed?autospin=0&autostart=0&camera=0&ui_infos=0&ui_controls=0&ui_stop=0\" \n                                    frameborder=\"0\" allowvr allowfullscreen mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" onmousewheel=\"\"></iframe>\n                                    </div>\n                                    " });
    }
    ThreeDComponent.prototype.ngOnInit = function () {
    };
    ThreeDComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-threed',
            template: "\n  <div id=\"threeDBlock\">\n    <p id=\"blockHeader\">3D Models</p>\n    <app-threed-project *ngFor=\"let project of projects\" [curProject]=\"project\"></app-threed-project>\n  </div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ThreeDComponent);
    return ThreeDComponent;
}());



/***/ }),

/***/ "./src/app/ThreeD/threed.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreeDModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__threed_component__ = __webpack_require__("./src/app/ThreeD/threed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Project_project_module__ = __webpack_require__("./src/app/Project/project.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Project_ThreeDProject_threed_project_dialog_component__ = __webpack_require__("./src/app/Project/ThreeDProject/threed-project-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ThreeDModule = /** @class */ (function () {
    function ThreeDModule() {
    }
    ThreeDModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__threed_component__["a" /* ThreeDComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4__Project_project_module__["a" /* ProjectModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__threed_component__["a" /* ThreeDComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__Project_ThreeDProject_threed_project_dialog_component__["a" /* ThreeDProjectDialogComponent */]]
        })
    ], ThreeDModule);
    return ThreeDModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: "\n  <div id=\"top\">\n    <div id=\"page-container\">\n      <header id=\"page-header\">\n        <div id=\"name\">\n          <p id=\"name_first\">Penjami</p>\n          <p id=\"name_last\">Rantakangas</p>\n        </div>\n      </header>\n      <div id=\"page-content\">\n        <app-games></app-games>\n        <app-programming></app-programming>\n        <app-threed></app-threed>\n      </div>\n    </div>\n  </div>\n  ",
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notfound_component__ = __webpack_require__("./src/app/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Games_games_module__ = __webpack_require__("./src/app/Games/games.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Programming_programming_module__ = __webpack_require__("./src/app/Programming/programming.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ThreeD_threed_module__ = __webpack_require__("./src/app/ThreeD/threed.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Project_project_module__ = __webpack_require__("./src/app/Project/project.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__notfound_component__["a" /* NotfoundComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__Project_project_module__["a" /* ProjectModule */],
                __WEBPACK_IMPORTED_MODULE_5__Games_games_module__["a" /* GamesModule */],
                __WEBPACK_IMPORTED_MODULE_6__Programming_programming_module__["a" /* ProgrammingModule */],
                __WEBPACK_IMPORTED_MODULE_7__ThreeD_threed_module__["a" /* ThreeDModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__ThreeD_threed_module__["a" /* ThreeDModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/notfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: "\n    <h1>\n        Not Found!\n    </h1>\n  ",
            styles: []
        })
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map