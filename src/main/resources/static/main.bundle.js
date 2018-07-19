webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/ErrorHandler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);


var ErrorHandler = (function () {
    function ErrorHandler() {
    }
    ErrorHandler.handlerError = function (error) {
        var errorMessage;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* Response */]) {
            errorMessage = "Erro " + error.status + " ao acessar a URL " + error.url + " - " + error.statusText + ".";
        }
        else {
            errorMessage = error.toString();
        }
        console.log(errorMessage);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(errorMessage);
    };
    return ErrorHandler;
}());

//# sourceMappingURL=ErrorHandler.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-background-color=\"white\" data-active-color=\"danger\">\r\n        <sidebar-cmp></sidebar-cmp>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <navbar-cmp></navbar-cmp>\r\n        <div class=\"content\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <footer-cmp></footer-cmp>\r\n    </div>\r\n</div>\r\n<!-- <fixedplugin-cmp></fixedplugin-cmp> -->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_footer_footer_module__ = __webpack_require__("./src/app/shared/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_module__ = __webpack_require__("./src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_fixedplugin_fixedplugin_module__ = __webpack_require__("./src/app/shared/fixedplugin/fixedplugin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngui_map__ = __webpack_require__("./node_modules/@ngui/map/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngui_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__ngui_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_template_user_user_component__ = __webpack_require__("./src/app/util-template/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util_template_table_table_component__ = __webpack_require__("./src/app/util-template/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util_template_typography_typography_component__ = __webpack_require__("./src/app/util-template/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util_template_icons_icons_component__ = __webpack_require__("./src/app/util-template/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__util_template_maps_maps_component__ = __webpack_require__("./src/app/util-template/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__util_template_notifications_notifications_component__ = __webpack_require__("./src/app/util-template/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__util_template_upgrade_upgrade_component__ = __webpack_require__("./src/app/util-template/upgrade/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__util_template_sidebar_sidebar_module__ = __webpack_require__("./src/app/util-template/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__resumo_diario_resumo_diario_module__ = __webpack_require__("./src/app/resumo-diario/resumo-diario.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__login_login_module__ = __webpack_require__("./src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__dashboard_dashboard_module__ = __webpack_require__("./src/app/dashboard/dashboard.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__util_template_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_10__util_template_table_table_component__["a" /* TableComponent */],
            __WEBPACK_IMPORTED_MODULE_11__util_template_typography_typography_component__["a" /* TypographyComponent */],
            __WEBPACK_IMPORTED_MODULE_12__util_template_icons_icons_component__["a" /* IconsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__util_template_maps_maps_component__["a" /* MapsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__util_template_notifications_notifications_component__["a" /* NotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__util_template_upgrade_upgrade_component__["a" /* UpgradeComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* AppRoutes */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_16__util_template_sidebar_sidebar_module__["a" /* SidebarModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_module__["a" /* NavbarModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_footer_footer_module__["a" /* FooterModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_fixedplugin_fixedplugin_module__["a" /* FixedPluginModule */],
            __WEBPACK_IMPORTED_MODULE_7__ngui_map__["NguiMapModule"].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE' }),
            __WEBPACK_IMPORTED_MODULE_20__resumo_diario_resumo_diario_module__["a" /* ResumoDiarioModule */],
            __WEBPACK_IMPORTED_MODULE_22__dashboard_dashboard_module__["a" /* DashboardModule */],
            __WEBPACK_IMPORTED_MODULE_21__login_login_module__["a" /* LoginModule */],
            __WEBPACK_IMPORTED_MODULE_17__shared_shared_module__["a" /* SharedModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_do_dia_resumo_do_dia_component__ = __webpack_require__("./src/app/resumo-diario/resumo-do-dia/resumo-do-dia.component.ts");


var routes = [
    {
        path: '',
        redirectTo: 'resumo-do-dia',
        pathMatch: 'full',
    },
    {
        path: 'resumo-do-dia',
        component: __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_do_dia_resumo_do_dia_component__["a" /* ResumoDoDiaComponent */]
    },
];
var AppRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "./src/app/dashboard/agua-coco/agua-coco.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\r\n    <div class=\"card \">\r\n        <div class=\"header\">\r\n            <h4 class=\"title\">Produção Diária de Água de Coco Sococo e Água de Coco Verde (L). </h4>\r\n            <p class=\"category\">Abril de 2018</p>\r\n        </div>\r\n        <div class=\"content\">\r\n            <div class=\"row\">\r\n                <!-- <div class=\"col-md-12\">\r\n                    <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                        <button type=\"button\" class=\"btn btn-default\">ANO</button>\r\n                        <button type=\"button\" class=\"btn btn-default\">MÊS</button>\r\n                        <button type=\"button\" class=\"btn btn-default\">DIA</button>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"btn-group\" data-toggle=\"buttons\">\r\n                        <label class=\"btn btn-default active\" (click)=\"selectYear()\">\r\n                        <input type=\"radio\" name=\"options\" id=\"ano\"  autocomplete=\"off\" checked> ANO\r\n                      </label>\r\n                        <label class=\"btn btn-default\" (click)=\"selectMonth()\">\r\n                        <input type=\"radio\" name=\"options\" id=\"mes\"  autocomplete=\"off\"> MÊS\r\n                      </label>\r\n                        <!-- <label class=\"btn btn-default\" (click)=\"selectDay()\">\r\n                        <input type=\"radio\" name=\"options\" id=\"dia\" autocomplete=\"off\"> DIA\r\n                      </label> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div id=\"aguaCocoChart\" class=\"ct-chart\"></div>\r\n            <div class=\"footer\">\r\n                <div class=\"chart-legend\">\r\n                    <i class=\"fa fa-circle text-info\"></i> Água de Coco Sococo\r\n                    <i class=\"fa fa-circle text-warning\"></i> Água de Coco Verde\r\n                </div>\r\n                <hr>\r\n                <div class=\"stats\">\r\n                    <i class=\"ti-check\"></i> 22/04/2018\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/agua-coco/agua-coco.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AguaCocoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__ = __webpack_require__("./src/app/resumo-diario/resumo-diario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__ = __webpack_require__("./node_modules/chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AguaCocoComponent = (function () {
    function AguaCocoComponent(resumoDiarioService) {
        this.resumoDiarioService = resumoDiarioService;
    }
    AguaCocoComponent.prototype.ngOnInit = function () {
        this.selectYear();
    };
    AguaCocoComponent.prototype.selectYear = function () {
        var labels = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
        var series = [];
        var listaAguaCocoSococo = [];
        var listaAguaCocoVerde = [];
        // const producaoMes: any[] = [];
        var ano = 2018;
        this.resumoDiarioService.getAguaCocoPorAno(ano).subscribe(function (resp) {
            var lista = JSON.parse(resp._body);
            /* lista.mesLancamentoWrappers.forEach(mes => {
                 labels.push(mes.mesAnoLancamento);
             });*/
            lista.aguaCocoSococoWrappers.forEach(function (aguaSococo) {
                listaAguaCocoSococo.push(parseInt(aguaSococo.producaoDiariaAguaCocoSococo));
            });
            lista.aguaCocoVerdeWrappers.forEach(function (aguaCocoVerde) {
                listaAguaCocoVerde.push(parseInt(aguaCocoVerde.producaoDiariaAguaCocoVerde));
            });
            series.push(listaAguaCocoSococo);
            series.push(listaAguaCocoVerde);
        });
        var dataMonth = {
            labels: labels,
            series: series
        };
        var options = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? +value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value, index) {
                            return index % 4 === 0 ? +value : null;
                            // return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_2_chartist__["Line"]('#aguaCocoChart', dataMonth, options, responsiveOptions);
    };
    AguaCocoComponent.prototype.selectMonth = function () {
        var labels = [];
        var series = [];
        var listaAguaCocoSococo = [];
        var listaAguaCocoVerde = [];
        // const producaoMes: any[] = [];
        var ano = 2018;
        var mes = 4;
        this.resumoDiarioService.getAguaCocoPorMes(ano, mes).subscribe(function (resp) {
            var lista = JSON.parse(resp._body);
            lista.mesLancamentoWrappers.forEach(function (mes) {
                labels.push(mes.mesAnoLancamento);
            });
            lista.aguaCocoSococoWrappers.forEach(function (aguaSococo) {
                listaAguaCocoSococo.push(parseInt(aguaSococo.producaoDiariaAguaCocoSococo));
            });
            lista.aguaCocoVerdeWrappers.forEach(function (aguaCocoVerde) {
                listaAguaCocoVerde.push(parseInt(aguaCocoVerde.producaoDiariaAguaCocoVerde));
            });
            series.push(listaAguaCocoSococo);
            series.push(listaAguaCocoVerde);
        });
        var dataMonth = {
            labels: labels,
            series: series
        };
        var options = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? +value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value, index) {
                            return index % 4 === 0 ? +value : null;
                            // return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_2_chartist__["Line"]('#aguaCocoChart', dataMonth, options, responsiveOptions);
    };
    return AguaCocoComponent;
}());
AguaCocoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chart-agua-coco',
        template: __webpack_require__("./src/app/dashboard/agua-coco/agua-coco.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__["a" /* ResumoDiarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__["a" /* ResumoDiarioService */]) === "function" && _a || Object])
], AguaCocoComponent);

var _a;
//# sourceMappingURL=agua-coco.component.js.map

/***/ }),

/***/ "./src/app/dashboard/cacamba/cacamba.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\r\n    <div class=\"card \">\r\n        <div class=\"header\">\r\n            <h4 class=\"title\">Total de Caçambas. </h4>\r\n            <p class=\"category\">Abril de 2018</p>\r\n        </div>\r\n        <div class=\"content\">\r\n            <div class=\"row\">\r\n                <!-- <div class=\"col-md-12\">\r\n                    <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                        <button type=\"button\" class=\"btn btn-default\">ANO</button>\r\n                        <button type=\"button\" class=\"btn btn-default\">MÊS</button>\r\n                        <button type=\"button\" class=\"btn btn-default\">DIA</button>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"btn-group\" data-toggle=\"buttons\">\r\n                        <label class=\"btn btn-default active\" (click)=\"selectYear()\">\r\n                        <input type=\"radio\" name=\"options\" id=\"ano\"  autocomplete=\"off\" checked> ANO\r\n                      </label>\r\n                        <label class=\"btn btn-default\" (click)=\"selectMonth()\">\r\n                        <input type=\"radio\" name=\"options\" id=\"mes\"  autocomplete=\"off\"> MÊS\r\n                      </label>\r\n                        <!-- <label class=\"btn btn-default\" (click)=\"selectDay()\">\r\n                        <input type=\"radio\" name=\"options\" id=\"dia\" autocomplete=\"off\"> DIA\r\n                      </label> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div id=\"totalDeCacambasChart\" class=\"ct-chart\"></div>\r\n            <div class=\"footer\">\r\n                <div class=\"chart-legend\">\r\n                    <i class=\"fa fa-circle text-info\"></i> Total de Caçambas\r\n                    <!-- <i class=\"fa fa-circle text-warning\"></i> x -->\r\n                </div>\r\n                <hr>\r\n                <div class=\"stats\">\r\n                    <i class=\"ti-check\"></i> 22/04/2018\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/cacamba/cacamba.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacambaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__ = __webpack_require__("./src/app/resumo-diario/resumo-diario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__ = __webpack_require__("./node_modules/chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CacambaComponent = (function () {
    function CacambaComponent(resumoDiarioService) {
        this.resumoDiarioService = resumoDiarioService;
    }
    CacambaComponent.prototype.ngOnInit = function () {
        this.selectYear();
    };
    CacambaComponent.prototype.selectYear = function () {
        var labels = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
        var series = [];
        var listaTotalCacamba = [];
        var ano = 2018;
        this.resumoDiarioService.getCacambaPorAno(ano).subscribe(function (resp) {
            var lista = JSON.parse(resp._body);
            /*lista.mesLancamentoWrappers.forEach(mes => {
                labels.push(mes.mesAnoLancamento);
            });*/
            lista.totalCacambaWrapper.forEach(function (totalCacamba) {
                listaTotalCacamba.push(parseInt(totalCacamba.producaoDiariaTotalCacamba));
            });
            series.push(listaTotalCacamba);
        });
        var dataMonth = {
            labels: labels,
            series: series
        };
        var options = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? +value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value, index) {
                            return index % 4 === 0 ? +value : null;
                            // return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_2_chartist__["Line"]('#totalDeCacambasChart', dataMonth, options, responsiveOptions);
    };
    CacambaComponent.prototype.selectMonth = function () {
        var labels = [];
        var series = [];
        var listaTotalCacamba = [];
        var ano = 2018;
        var mes = 4;
        this.resumoDiarioService.getCacambaPorMes(ano, mes).subscribe(function (resp) {
            var lista = JSON.parse(resp._body);
            lista.mesLancamentoWrappers.forEach(function (mes) {
                labels.push(mes.mesAnoLancamento);
            });
            lista.totalCacambaWrapper.forEach(function (totalCacamba) {
                listaTotalCacamba.push(parseInt(totalCacamba.producaoDiariaTotalCacamba));
            });
            series.push(listaTotalCacamba);
        });
        var dataMonth = {
            labels: labels,
            series: series
        };
        var options = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? +value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value, index) {
                            return index % 4 === 0 ? +value : null;
                            // return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_2_chartist__["Line"]('#totalDeCacambasChart', dataMonth, options, responsiveOptions);
    };
    return CacambaComponent;
}());
CacambaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chart-cacamba',
        template: __webpack_require__("./src/app/dashboard/cacamba/cacamba.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__["a" /* ResumoDiarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__["a" /* ResumoDiarioService */]) === "function" && _a || Object])
], CacambaComponent);

var _a;
//# sourceMappingURL=cacamba.component.js.map

/***/ }),

/***/ "./src/app/dashboard/caixa-padrao/caixa-padrao.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\r\n    <div class=\"card \">\r\n        <div class=\"header\">\r\n            <h4 class=\"title\">Produção Diária de Caixa Padrão (Und)</h4>\r\n            <p class=\"category\">Abril de 2018</p>\r\n        </div>\r\n        <div class=\"content\">\r\n            <div class=\"row\">\r\n                <!-- <div class=\"col-md-12\">\r\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                            <button type=\"button\" class=\"btn btn-default\">ANO</button>\r\n                            <button type=\"button\" class=\"btn btn-default\">MÊS</button>\r\n                            <button type=\"button\" class=\"btn btn-default\">DIA</button>\r\n                        </div>\r\n                    </div> -->\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"btn-group\" data-toggle=\"buttons\">\r\n                        <label class=\"btn btn-default active\" (click)=\"selectYear()\">\r\n                            <input type=\"radio\" name=\"options\" id=\"ano\"  autocomplete=\"off\" checked> ANO\r\n                          </label>\r\n                        <label class=\"btn btn-default\" (click)=\"selectMonth()\">\r\n                            <input type=\"radio\" name=\"options\" id=\"mes\"  autocomplete=\"off\"> MÊS\r\n                          </label>\r\n                        <!-- <label class=\"btn btn-default\" (click)=\"selectDay()\">\r\n                            <input type=\"radio\" name=\"options\" id=\"dia\" autocomplete=\"off\"> DIA\r\n                          </label> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div id=\"caixaPadraoChart\" class=\"ct-chart\"></div>\r\n\r\n            <div class=\"footer\">\r\n                <div class=\"chart-legend\">\r\n                    <i class=\"fa fa-circle text-info\"></i> Caixa Padrão\r\n                    <!-- <i class=\"fa fa-circle text-warning\"></i> x -->\r\n                </div>\r\n                <hr>\r\n                <div class=\"stats\">\r\n                    <i class=\"ti-check\"></i> 22/04/2018\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/caixa-padrao/caixa-padrao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaixaPadraoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__ = __webpack_require__("./src/app/resumo-diario/resumo-diario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__ = __webpack_require__("./node_modules/chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CaixaPadraoComponent = (function () {
    function CaixaPadraoComponent(resumoDiarioService) {
        this.resumoDiarioService = resumoDiarioService;
    }
    CaixaPadraoComponent.prototype.ngOnInit = function () {
        this.selectYear();
    };
    CaixaPadraoComponent.prototype.selectYear = function () {
        var labels = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
        var series = [];
        var listaCaixaPadrao = [];
        var ano = 2018;
        this.resumoDiarioService.getCaixaPadraoPorAno(ano).subscribe(function (resp) {
            var lista = JSON.parse(resp._body);
            /*lista.mesLancamentoWrappers.forEach(mes => {
                labels.push(mes.mesAnoLancamento);
            });*/
            lista.caixaPadraoWrapper.forEach(function (caixa) {
                listaCaixaPadrao.push(parseInt(caixa.producaoDiariaCaixaPadrao));
            });
            series.push(listaCaixaPadrao);
        });
        var dataMonth = {
            labels: labels,
            series: series
        };
        var options = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? +value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value, index) {
                            return index % 4 === 0 ? +value : null;
                            // return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_2_chartist__["Line"]('#caixaPadraoChart', dataMonth, options, responsiveOptions);
    };
    CaixaPadraoComponent.prototype.selectMonth = function () {
        var labels = [];
        var series = [];
        var listaCaixaPadrao = [];
        var ano = 2018;
        var mes = 4;
        this.resumoDiarioService.getCaixaPadraoPorMes(ano, mes).subscribe(function (resp) {
            var lista = JSON.parse(resp._body);
            lista.mesLancamentoWrappers.forEach(function (mes) {
                labels.push(mes.mesAnoLancamento);
            });
            lista.caixaPadraoWrapper.forEach(function (caixa) {
                listaCaixaPadrao.push(parseInt(caixa.producaoDiariaCaixaPadrao));
            });
            series.push(listaCaixaPadrao);
        });
        var dataMonth = {
            labels: labels,
            series: series
        };
        var options = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? +value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value, index) {
                            return index % 4 === 0 ? +value : null;
                            // return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_2_chartist__["Line"]('#caixaPadraoChart', dataMonth, options, responsiveOptions);
    };
    return CaixaPadraoComponent;
}());
CaixaPadraoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chart-caixa-padrao',
        template: __webpack_require__("./src/app/dashboard/caixa-padrao/caixa-padrao.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__["a" /* ResumoDiarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__["a" /* ResumoDiarioService */]) === "function" && _a || Object])
], CaixaPadraoComponent);

var _a;
//# sourceMappingURL=caixa-padrao.component.js.map

/***/ }),

/***/ "./src/app/dashboard/coco-germinado/coco-germinado.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\r\n    <div class=\"card \">\r\n        <div class=\"header\">\r\n            <h4 class=\"title\">Produção Diária de Coco Germinado (%)</h4>\r\n            <p class=\"category\">Abril de 2018</p>\r\n        </div>\r\n        <div class=\"content\">\r\n            <div class=\"row\">\r\n                <!-- <div class=\"col-md-12\">\r\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                            <button type=\"button\" class=\"btn btn-default\">ANO</button>\r\n                            <button type=\"button\" class=\"btn btn-default\">MÊS</button>\r\n                            <button type=\"button\" class=\"btn btn-default\">DIA</button>\r\n                        </div>\r\n                    </div> -->\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"btn-group\" data-toggle=\"buttons\">\r\n                        <label class=\"btn btn-default active\" (click)=\"selectYear()\">\r\n                            <input type=\"radio\" name=\"options\" id=\"ano\"  autocomplete=\"off\" checked> ANO\r\n                          </label>\r\n                        <label class=\"btn btn-default\" (click)=\"selectMonth()\">\r\n                            <input type=\"radio\" name=\"options\" id=\"mes\"  autocomplete=\"off\"> MÊS\r\n                          </label>\r\n                        <!-- <label class=\"btn btn-default\" (click)=\"selectDay()\">\r\n                            <input type=\"radio\" name=\"options\" id=\"dia\" autocomplete=\"off\"> DIA\r\n                          </label> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div id=\"cocoGerminadoChart\" class=\"ct-chart\"></div>\r\n\r\n            <div class=\"footer\">\r\n                <div class=\"chart-legend\">\r\n                    <i class=\"fa fa-circle text-info\"></i> Coco Germinado\r\n                    <!-- <i class=\"fa fa-circle text-warning\"></i> x -->\r\n                </div>\r\n                <hr>\r\n                <div class=\"stats\">\r\n                    <i class=\"ti-check\"></i> 22/04/2018\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/coco-germinado/coco-germinado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CocoGerminadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__ = __webpack_require__("./src/app/resumo-diario/resumo-diario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__ = __webpack_require__("./node_modules/chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CocoGerminadoComponent = (function () {
    function CocoGerminadoComponent(resumoDiarioService) {
        this.resumoDiarioService = resumoDiarioService;
    }
    CocoGerminadoComponent.prototype.ngOnInit = function () {
        this.selectYear();
    };
    CocoGerminadoComponent.prototype.selectYear = function () {
        var labels = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
        var series = [];
        var listaCocoGerminado = [];
        var ano = 2018;
        this.resumoDiarioService.getCocoGerminadoPorAno(ano).subscribe(function (resp) {
            var lista = JSON.parse(resp._body);
            /*lista.mesLancamentoWrappers.forEach(mes => {
                labels.push(mes.mesAnoLancamento);
            });*/
            lista.cocoGerminadoWrapper.forEach(function (cocoGerminado) {
                listaCocoGerminado.push(parseInt(cocoGerminado.producaoDiariaCocoGerminado));
            });
            series.push(listaCocoGerminado);
        });
        var dataMonth = {
            labels: labels,
            series: series
        };
        var options = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? +value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value, index) {
                            return index % 4 === 0 ? +value : null;
                            // return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_2_chartist__["Line"]('#cocoGerminadoChart', dataMonth, options, responsiveOptions);
    };
    CocoGerminadoComponent.prototype.selectMonth = function () {
        var labels = [];
        var series = [];
        var listaCocoGerminado = [];
        var ano = 2018;
        var mes = 4;
        this.resumoDiarioService.getCocoGerminadoPorMes(ano, mes).subscribe(function (resp) {
            var lista = JSON.parse(resp._body);
            lista.mesLancamentoWrappers.forEach(function (mes) {
                labels.push(mes.mesAnoLancamento);
            });
            lista.cocoGerminadoWrapper.forEach(function (cocoGerminado) {
                listaCocoGerminado.push(parseInt(cocoGerminado.producaoDiariaCocoGerminado));
            });
            series.push(listaCocoGerminado);
        });
        var dataMonth = {
            labels: labels,
            series: series
        };
        var options = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? +value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value, index) {
                            return index % 4 === 0 ? +value : null;
                            // return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_2_chartist__["Line"]('#cocoGerminadoChart', dataMonth, options, responsiveOptions);
    };
    return CocoGerminadoComponent;
}());
CocoGerminadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chart-coco-germinado',
        template: __webpack_require__("./src/app/dashboard/coco-germinado/coco-germinado.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__["a" /* ResumoDiarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__["a" /* ResumoDiarioService */]) === "function" && _a || Object])
], CocoGerminadoComponent);

var _a;
//# sourceMappingURL=coco-germinado.component.js.map

/***/ }),

/***/ "./src/app/dashboard/coco/coco.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\r\n    <div class=\"card \">\r\n        <div class=\"header\">\r\n            <h4 class=\"title\">Produção Diária de Cocos (Und)</h4>\r\n            <p class=\"category\">Maio de 2018</p>\r\n        </div>\r\n        <div class=\"content\">\r\n            <div class=\"row\">\r\n                <!-- <div class=\"col-md-12\">\r\n                    <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                        <button type=\"button\" class=\"btn btn-default\">ANO</button>\r\n                        <button type=\"button\" class=\"btn btn-default\">MÊS</button>\r\n                        <button type=\"button\" class=\"btn btn-default\">DIA</button>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"btn-group\" data-toggle=\"buttons\">\r\n                        <label class=\"btn btn-default active\" (click)=\"selectYear()\">\r\n                        <input type=\"radio\" name=\"options\" id=\"ano\"  autocomplete=\"off\" checked> ANO\r\n                      </label>\r\n                        <label class=\"btn btn-default\" (click)=\"selectMonth()\">\r\n                        <input type=\"radio\" name=\"options\" id=\"mes\"  autocomplete=\"off\"> MÊS\r\n                      </label>\r\n                        <!-- <label class=\"btn btn-default\" (click)=\"selectDay()\">\r\n                        <input type=\"radio\" name=\"options\" id=\"dia\" autocomplete=\"off\"> DIA\r\n                      </label> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div id=\"cocoChart\" class=\"ct-chart\"></div>\r\n\r\n            <div class=\"footer\">\r\n                <div class=\"chart-legend\">\r\n                    <i class=\"fa fa-circle text-info\"></i> Cocos Processados\r\n                    <i class=\"fa fa-circle text-warning\"></i> Cocos Desfibrados\r\n                </div>\r\n                <hr>\r\n                <div class=\"stats\">\r\n                    <i class=\"ti-check\"></i> 22/04/2018\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/coco/coco.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CocoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__ = __webpack_require__("./src/app/resumo-diario/resumo-diario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__ = __webpack_require__("./node_modules/chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CocoComponent = (function () {
    function CocoComponent(resumoDiarioService) {
        this.resumoDiarioService = resumoDiarioService;
    }
    CocoComponent.prototype.ngOnInit = function () {
        this.selectYear();
    };
    CocoComponent.prototype.selectYear = function () {
        var labels = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
        var series = [];
        var listaCocoDesfibrado = [];
        var listaCocoProcessado = [];
        // const producaoMes: any[] = [];
        var ano = 2018;
        this.resumoDiarioService.getCocoPorAno(ano).then(function (resp) {
            var lista = JSON.parse(resp._body);
            /*lista.mesLancamentoWrappers.forEach(mes => {
                labels.push(mes.mesAnoLancamento);
            });*/
            lista.cocoDesfibradoWrappers.forEach(function (cocoDesfibrado) {
                listaCocoDesfibrado.push(parseInt(cocoDesfibrado.producaoDiariaCocoDesfibrado));
            });
            lista.cocoProcessadoWrappers.forEach(function (cocoProcessado) {
                listaCocoProcessado.push(parseInt(cocoProcessado.producaoDiariaCocoProcessado));
            });
            series.push(listaCocoDesfibrado);
            series.push(listaCocoProcessado);
        });
        var dataMonth = {
            labels: labels,
            series: series
        };
        var options = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? +value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value, index) {
                            return index % 4 === 0 ? +value : null;
                            // return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_2_chartist__["Line"]('#cocoChart', dataMonth, options, responsiveOptions);
    };
    CocoComponent.prototype.selectMonth = function () {
        var labels = [];
        var series = [];
        var listaCocoDesfibrado = [];
        var listaCocoProcessado = [];
        // const producaoMes: any[] = [];
        var ano = 2018;
        var mes = 5;
        this.resumoDiarioService.getCocoPorMes(ano, mes).then(function (resp) {
            var lista = JSON.parse(resp._body);
            lista.mesLancamentoWrappers.forEach(function (mes) {
                labels.push(mes.mesAnoLancamento);
            });
            lista.cocoDesfibradoWrappers.forEach(function (cocoDesfibrado) {
                listaCocoDesfibrado.push(parseInt(cocoDesfibrado.producaoDiariaCocoDesfibrado));
            });
            lista.cocoProcessadoWrappers.forEach(function (cocoProcessado) {
                listaCocoProcessado.push(parseInt(cocoProcessado.producaoDiariaCocoProcessado));
            });
            series.push(listaCocoDesfibrado);
            series.push(listaCocoProcessado);
        });
        var dataMonth = {
            labels: labels,
            series: series
        };
        var options = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? +value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value, index) {
                            return index % 4 === 0 ? +value : null;
                            // return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_2_chartist__["Line"]('#cocoChart', dataMonth, options, responsiveOptions);
    };
    return CocoComponent;
}());
CocoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chart-coco',
        template: __webpack_require__("./src/app/dashboard/coco/coco.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__["a" /* ResumoDiarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__["a" /* ResumoDiarioService */]) === "function" && _a || Object])
], CocoComponent);

var _a;
//# sourceMappingURL=coco.component.js.map

/***/ }),

/***/ "./src/app/dashboard/cri-flococo/cri-flococo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/cri-flococo/cri-flococo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\r\n    <div class=\"card \">\r\n        <div class=\"header\">\r\n            <h4 class=\"title\">Produção Diária de C.R.I & Flococo (KG) </h4>\r\n            <p class=\"category\">Abril de 2018</p>\r\n        </div>\r\n        <div class=\"content\">\r\n            <div class=\"row\">\r\n                <!-- <div class=\"col-md-12\">\r\n                    <div class=\"btn-group active\" role=\"group\" aria-label=\"...\">\r\n                        <button type=\"button\" checked (click)=\"selectYear()\" class=\"btn btn-default\">ANO</button>\r\n                        <button type=\"button\" (click)=\"selectMonth()\" class=\"btn btn-default\">MÊS</button>\r\n                        <button type=\"button\" class=\"btn btn-default\">DIA</button>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"btn-group\" data-toggle=\"buttons\">\r\n                        <label class=\"btn btn-default active\" (click)=\"selectYear()\">\r\n                        <input type=\"radio\" name=\"options\" id=\"ano\"  autocomplete=\"off\" checked> ANO\r\n                      </label>\r\n                        <label class=\"btn btn-default\" (click)=\"selectMonth()\">\r\n                        <input type=\"radio\" name=\"options\" id=\"mes\"  autocomplete=\"off\"> MÊS\r\n                      </label>\r\n                        <!-- <label class=\"btn btn-default\" (click)=\"selectDay()\">\r\n                        <input type=\"radio\" name=\"options\" id=\"dia\" autocomplete=\"off\"> DIA\r\n                      </label> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div id=\"CRIFlococoChart\" class=\"ct-chart\"></div>\r\n            <div class=\"footer\">\r\n                <div class=\"chart-legend\">\r\n                    <i class=\"fa fa-circle text-info\"></i> C.R.I\r\n                    <i class=\"fa fa-circle text-warning\"></i> Flococo\r\n                </div>\r\n                <hr>\r\n                <div class=\"stats\">\r\n                    <i class=\"ti-check\"></i> 22/04/2018\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/cri-flococo/cri-flococo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriFlococoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__ = __webpack_require__("./src/app/resumo-diario/resumo-diario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__ = __webpack_require__("./node_modules/chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CriFlococoComponent = (function () {
    function CriFlococoComponent(resumoDiarioService) {
        this.resumoDiarioService = resumoDiarioService;
    }
    CriFlococoComponent.prototype.ngOnInit = function () {
        this.selectYear();
    };
    // Quando seleciona o ano
    CriFlococoComponent.prototype.selectYear = function () {
        var labels = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
        var series = [];
        var listaCri = [];
        var listaFlococo = [];
        // const producaoMesCoco: any[] = [];
        var ano = 2018;
        this.resumoDiarioService.getCriFlococoPorAno(ano).subscribe(function (resp) {
            var lista = JSON.parse(resp._body);
            /*lista.mesLancamentoWrappers.forEach(mes => {
               labels.push(mes.mesAnoLancamento);
            }); */
            lista.criWrappers.forEach(function (cri) {
                listaCri.push(parseInt(cri.producaoDiariaCRI));
            });
            lista.flococoWrappers.forEach(function (flococo) {
                listaFlococo.push(parseInt(flococo.producaoDiariaFlococo));
            });
            series.push(listaCri);
            series.push(listaFlococo);
        });
        var dataMonth = {
            labels: labels,
            series: series
        };
        var options = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? +value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value, index) {
                            return index % 4 === 0 ? +value : null;
                            // return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_2_chartist__["Line"]('#CRIFlococoChart', dataMonth, options, responsiveOptions);
    };
    // Quando seleciona o mês
    CriFlococoComponent.prototype.selectMonth = function () {
        var labels = [];
        var series = [];
        var listaCri = [];
        var listaFlococo = [];
        // const producaoMesCoco: any[] = [];
        var ano = 2018;
        var mes = 5;
        this.resumoDiarioService.getCriFlococoPorMes(ano, mes).subscribe(function (resp) {
            var lista = JSON.parse(resp._body);
            lista.mesLancamentoWrappers.forEach(function (mes) {
                labels.push(mes.mesAnoLancamento);
            });
            lista.criWrappers.forEach(function (cri) {
                listaCri.push(parseInt(cri.producaoDiariaCRI));
            });
            lista.flococoWrappers.forEach(function (flococo) {
                listaFlococo.push(parseInt(flococo.producaoDiariaFlococo));
            });
            series.push(listaCri);
            series.push(listaFlococo);
        });
        var dataMonth = {
            labels: labels,
            series: series
        };
        var options = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? +value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value, index) {
                            return index % 4 === 0 ? +value : null;
                            // return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_2_chartist__["Line"]('#CRIFlococoChart', dataMonth, options, responsiveOptions);
    };
    return CriFlococoComponent;
}());
CriFlococoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chart-cri-flococo',
        template: __webpack_require__("./src/app/dashboard/cri-flococo/cri-flococo.component.html"),
        styles: [__webpack_require__("./src/app/dashboard/cri-flococo/cri-flococo.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__["a" /* ResumoDiarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__["a" /* ResumoDiarioService */]) === "function" && _a || Object])
], CriFlococoComponent);

var _a;
//# sourceMappingURL=cri-flococo.component.js.map

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "#chart4 {\r\n    background-color: slategrey;\r\n    border-radius: 10px;\r\n    padding-top: 10px;\r\n}\r\n\r\n#title {\r\n    color: slategrey;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.line-separator {\r\n    border: 1px solid #e6e6e6;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.header-sococo span {\r\n    color: rgb(240, 6, 6);\r\n    font-style: bold;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-size: 35px;\r\n}\r\n\r\n.header-acqua span {\r\n    color: rgb(6, 240, 123);\r\n    font-style: bold;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-size: 35px;\r\n}\r\n\r\n.header-amafibra span {\r\n    color: rgb(189, 154, 0);\r\n    font-style: bold;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-size: 35px;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <!--Inicio dos KPI-->\r\n        <div style=\"padding-bottom: 10px;\" class=\"col-md-12\">\r\n            <div class=\"btn-group\" data-toggle=\"buttons\">\r\n                <label style=\"height: 25px; width: 42px; font-size: 12px\" class=\"btn btn-sm btn-default active\">\r\n                    <input type=\"radio\" name=\"options\" id=\"ano\"  autocomplete=\"off\" checked> Ano\r\n                </label>\r\n                <label style=\"height: 25px; width: 42px; font-size: 12px\" class=\"btn btn-sm btn-default\">\r\n                    <input type=\"radio\" name=\"options\" id=\"mes\"  autocomplete=\"off\"> Mês\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6\">\r\n            <div class=\"card\">\r\n                <div class=\"content\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-4\">\r\n                            <div class=\"icon-big icon-warning text-center\">\r\n                                <!-- <i class=\"ti-server\"></i> -->\r\n                                <img style=\"width: 100%\" src=\"../../assets/img/logo_sococo2.jpg\" alt=\"\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-8\">\r\n                            <div class=\"numbers\">\r\n                                <p>C.R.I & Flococo (Kg)</p>\r\n                                41.055\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"footer\">\r\n                        <hr />\r\n                        <div class=\"stats\">\r\n                            <i class=\"ti-reload\"></i> 22/04/2018\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6\">\r\n            <div class=\"card\">\r\n                <div class=\"content\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-4\">\r\n                            <div class=\"icon-big icon-success text-center\">\r\n                                <!-- <i class=\"ti-wallet\"></i> -->\r\n                                <img style=\"width: 100%\" src=\"../../assets/img/logo_acqua2.png\" alt=\"\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-8\">\r\n                            <div class=\"numbers\">\r\n                                <p>Água de Coco (L)</p>\r\n                                93.213\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"footer\">\r\n                        <hr />\r\n                        <div class=\"stats\">\r\n                            <!-- <i class=\"ti-calendar\"></i> 22/04/2018 -->\r\n                            <i class=\"ti-reload\"></i> 22/04/2018\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6\">\r\n            <div class=\"card\">\r\n                <div class=\"content\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-4\">\r\n                            <div class=\"icon-big icon-danger text-center\">\r\n                                <!-- <i class=\"ti-pulse\"></i> -->\r\n                                <img style=\"width: 100%\" src=\"../../assets/img/logo_amafibra.jpg\" alt=\"\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-8\">\r\n                            <div class=\"numbers\">\r\n                                <p>Número de Fardos</p>\r\n                                2.866\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"footer\">\r\n                        <hr />\r\n                        <div class=\"stats\">\r\n                            <!-- <i class=\"ti-timer\"></i> 22/04/2018 -->\r\n                            <i class=\"ti-reload\"></i> 22/04/2018\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"header-sococo\">\r\n        <span>SOCOCO</span>\r\n    </div>\r\n    <div class=\"line-separator\"></div>\r\n    <div class=\"row\">\r\n        <app-chart-coco></app-chart-coco>\r\n        <app-chart-cri-flococo></app-chart-cri-flococo>\r\n        <app-chart-oleo></app-chart-oleo>\r\n        <app-chart-torta></app-chart-torta>\r\n    </div>\r\n\r\n    <div class=\"header-acqua\">\r\n        <span>ACQUA</span>\r\n    </div>\r\n    <div class=\"line-separator\"></div>\r\n    <div class=\"row\">\r\n        <app-chart-agua-coco></app-chart-agua-coco>\r\n        <app-chart-cacamba></app-chart-cacamba>\r\n    </div>\r\n    <div class=\"row\">\r\n        <app-chart-caixa-padrao></app-chart-caixa-padrao>\r\n        <app-chart-coco-germinado></app-chart-coco-germinado>\r\n    </div>\r\n\r\n    <div class=\"header-amafibra\">\r\n        <span>AMAFIBRA</span>\r\n    </div>\r\n    <div class=\"line-separator\"></div>\r\n    <div class=\"row\">\r\n        <app-chart-fardo></app-chart-fardo>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__ = __webpack_require__("./node_modules/chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resumo_diario_resumo_diario_service__ = __webpack_require__("./src/app/resumo-diario/resumo-diario.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as Chartist from '../../../node_modules/chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js';


var DashboardComponent = (function () {
    function DashboardComponent(resumoDiarioService) {
        this.resumoDiarioService = resumoDiarioService;
        this.data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
                [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
            ]
        };
        this.dataDay = {
            labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15',
                '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
            series: [
                [542, 434, 568, 610, 756, 895, 543, 520, 680, 653, 753, 326, 230, 293, 380, 480, 503, 553, 600, 664, 698, 710],
                [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795, 553, 600, 664, 698, 610, 756, 895, 543, 322, 442]
            ]
        };
        this.dataSales = {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
                [287, 385, 490, 562, 594, 626, 698, 895, 952],
                [67, 152, 193, 240, 387, 435, 535, 642, 744],
                [23, 113, 67, 108, 190, 239, 307, 410, 410]
            ]
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.criFlococoChart();
        // this.cocoChart();
        // this.oleoChart();
        // this.cocoSococoCocoVerdeChart();
        this.caixaPadraoChart();
        this.cocoGerminadorChart();
        // this.totalDeCacambasChart();
        // this.numeroFardosChart();
        // this.examplePizza();
        // this.exempleLineHours();
        // this.exempleLinesMonth();
    };
    DashboardComponent.prototype.exempleLinesMonth = function () {
        var options = {
            seriesDistance: 10,
            axisX: {
                showGrid: false
            },
            height: '245px'
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value, index) {
                            return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartActivity', this.data, options, responsiveOptions);
    };
    DashboardComponent.prototype.cocoSococoCocoVerdeChart = function () {
        var oleoOption = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                __WEBPACK_IMPORTED_MODULE_2_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? +value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };
        var responsiveOption = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#cocoSococoCocoVerdeChart', this.dataDay, oleoOption, responsiveOption);
    };
    DashboardComponent.prototype.caixaPadraoChart = function () {
        var options = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                __WEBPACK_IMPORTED_MODULE_2_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? +value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value, index) {
                            return index % 4 === 0 ? +value : null;
                            // return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#caixaPadraoChart', this.dataDay, options, responsiveOptions);
    };
    DashboardComponent.prototype.cocoGerminadorChart = function () {
        var oleoOption = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                __WEBPACK_IMPORTED_MODULE_2_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? +value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };
        var responsiveOption = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#cocoGerminadorChart', this.dataDay, oleoOption, responsiveOption);
    };
    DashboardComponent.prototype.totalDeCacambasChart = function () {
        var oleoOption = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                __WEBPACK_IMPORTED_MODULE_2_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? +value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };
        var responsiveOption = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#totalDeCacambasChart', this.dataDay, oleoOption, responsiveOption);
    };
    DashboardComponent.prototype.numeroFardosChart = function () {
        var oleoOption = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                __WEBPACK_IMPORTED_MODULE_2_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? +value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };
        var responsiveOption = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#numeroFardosChart', this.dataDay, oleoOption, responsiveOption);
    };
    DashboardComponent.prototype.examplePizza = function () {
        var dataPreferences = {
            series: [
                [25, 30, 20, 25]
            ]
        };
        var optionsPreferences = {
            donut: true,
            donutWidth: 40,
            startAngle: 0,
            total: 100,
            showLabel: false,
            axisX: {
                showGrid: false
            }
        };
        new __WEBPACK_IMPORTED_MODULE_1_chartist__["Pie"]('#chartPreferences', dataPreferences, optionsPreferences);
        new __WEBPACK_IMPORTED_MODULE_1_chartist__["Pie"]('#chartPreferences', {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
        });
    };
    DashboardComponent.prototype.exempleLineHours = function () {
        var optionsSales = {
            low: 0,
            high: 1000,
            showArea: true,
            height: '245px',
            axisX: {
                showGrid: false,
            },
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].simple({
                divisor: 3
            }),
            showLine: true,
            showPoint: false,
        };
        var responsiveSales = [
            ['screen and (max-width: 640px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartHours', this.dataSales, optionsSales, responsiveSales);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard-cmp',
        template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__resumo_diario_resumo_diario_service__["a" /* ResumoDiarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__resumo_diario_resumo_diario_service__["a" /* ResumoDiarioService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_routing__ = __webpack_require__("./src/app/dashboard/dashboard.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resumo_diario_resumo_diario_service__ = __webpack_require__("./src/app/resumo-diario/resumo-diario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__coco_coco_component__ = __webpack_require__("./src/app/dashboard/coco/coco.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cri_flococo_cri_flococo_component__ = __webpack_require__("./src/app/dashboard/cri-flococo/cri-flococo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__oleo_oleo_component__ = __webpack_require__("./src/app/dashboard/oleo/oleo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agua_coco_agua_coco_component__ = __webpack_require__("./src/app/dashboard/agua-coco/agua-coco.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fardo_fardo_component__ = __webpack_require__("./src/app/dashboard/fardo/fardo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cacamba_cacamba_component__ = __webpack_require__("./src/app/dashboard/cacamba/cacamba.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__torta_torta_component__ = __webpack_require__("./src/app/dashboard/torta/torta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__coco_germinado_coco_germinado_component__ = __webpack_require__("./src/app/dashboard/coco-germinado/coco-germinado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__caixa_padrao_caixa_padrao_component__ = __webpack_require__("./src/app/dashboard/caixa-padrao/caixa-padrao.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__dashboard_routing__["a" /* DashboardRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__coco_coco_component__["a" /* CocoComponent */],
            __WEBPACK_IMPORTED_MODULE_6__cri_flococo_cri_flococo_component__["a" /* CriFlococoComponent */],
            __WEBPACK_IMPORTED_MODULE_7__oleo_oleo_component__["a" /* OleoComponent */],
            __WEBPACK_IMPORTED_MODULE_8__agua_coco_agua_coco_component__["a" /* AguaCocoComponent */],
            __WEBPACK_IMPORTED_MODULE_9__fardo_fardo_component__["a" /* FardoComponent */],
            __WEBPACK_IMPORTED_MODULE_10__cacamba_cacamba_component__["a" /* CacambaComponent */],
            __WEBPACK_IMPORTED_MODULE_11__torta_torta_component__["a" /* TortaComponent */],
            __WEBPACK_IMPORTED_MODULE_12__coco_germinado_coco_germinado_component__["a" /* CocoGerminadoComponent */],
            __WEBPACK_IMPORTED_MODULE_13__caixa_padrao_caixa_padrao_component__["a" /* CaixaPadraoComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__resumo_diario_resumo_diario_service__["a" /* ResumoDiarioService */]
        ]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// rotas para ações Resumo diario
var routes = [
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]
    },
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], DashboardRoutingModule);

//# sourceMappingURL=dashboard.routing.js.map

/***/ }),

/***/ "./src/app/dashboard/fardo/fardo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n    <div class=\"card \">\r\n        <div class=\"header\">\r\n            <h4 class=\"title\">Produção Diária de Número de Fardos</h4>\r\n            <p class=\"category\">Abril de 2018</p>\r\n        </div>\r\n        <div class=\"content\">\r\n            <div class=\"row\">\r\n                <!-- <div class=\"col-md-12\">\r\n                    <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                        <button type=\"button\" class=\"btn btn-default\">ANO</button>\r\n                        <button type=\"button\" class=\"btn btn-default\">MÊS</button>\r\n                        <button type=\"button\" class=\"btn btn-default\">DIA</button>\r\n                    </div>\r\n                </div> -->\r\n\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"btn-group\" data-toggle=\"buttons\">\r\n                        <label class=\"btn btn-default active\" (click)=\"selectYear()\">\r\n                        <input type=\"radio\" name=\"options\" id=\"ano\"  autocomplete=\"off\" checked> ANO\r\n                      </label>\r\n                        <label class=\"btn btn-default\" (click)=\"selectMonth()\">\r\n                        <input type=\"radio\" name=\"options\" id=\"mes\"  autocomplete=\"off\"> MÊS\r\n                      </label>\r\n                        <!-- <label class=\"btn btn-default\" (click)=\"selectDay()\">\r\n                        <input type=\"radio\" name=\"options\" id=\"dia\" autocomplete=\"off\"> DIA\r\n                      </label> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div id=\"numeroFardosChart\" class=\"ct-chart\"></div>\r\n\r\n            <div class=\"footer\">\r\n                <div class=\"chart-legend\">\r\n                    <i class=\"fa fa-circle text-info\"></i> Número de Fardos\r\n                    <!-- <i class=\"fa fa-circle text-warning\"></i> x  -->\r\n                </div>\r\n                <hr>\r\n                <div class=\"stats\">\r\n                    <i class=\"ti-check\"></i> 22/04/2018\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/fardo/fardo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FardoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__ = __webpack_require__("./src/app/resumo-diario/resumo-diario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__ = __webpack_require__("./node_modules/chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FardoComponent = (function () {
    function FardoComponent(resumoDiarioService) {
        this.resumoDiarioService = resumoDiarioService;
    }
    FardoComponent.prototype.ngOnInit = function () {
        this.selectYear();
    };
    FardoComponent.prototype.selectYear = function () {
        var labels = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
        var series = [];
        var listaFardos = [];
        // const producaoMes: any[] = [];
        var ano = 2018;
        this.resumoDiarioService.getFardoPorAno(ano).subscribe(function (resp) {
            var lista = JSON.parse(resp._body);
            /* lista.mesLancamentoWrappers.forEach(mes => {
                 labels.push(mes.mesAnoLancamento);
             });*/
            lista.totalFardosWrapper.forEach(function (fardos) {
                listaFardos.push(parseInt(fardos.producaoDiariaTotalFardos));
            });
            series.push(listaFardos);
        });
        var dataMonth = {
            labels: labels,
            series: series
        };
        var options = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? +value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value, index) {
                            return index % 4 === 0 ? +value : null;
                            // return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_2_chartist__["Line"]('#numeroFardosChart', dataMonth, options, responsiveOptions);
    };
    FardoComponent.prototype.selectMonth = function () {
        var labels = [];
        var series = [];
        var listaFardos = [];
        // const producaoMes: any[] = [];
        var ano = 2018;
        var mes = 4;
        this.resumoDiarioService.getFardoPorMes(ano, mes).subscribe(function (resp) {
            var lista = JSON.parse(resp._body);
            lista.mesLancamentoWrappers.forEach(function (mes) {
                labels.push(mes.mesAnoLancamento);
            });
            lista.totalFardosWrapper.forEach(function (fardos) {
                listaFardos.push(parseInt(fardos.producaoDiariaTotalFardos));
            });
            series.push(listaFardos);
        });
        var dataMonth = {
            labels: labels,
            series: series
        };
        var options = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? +value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value, index) {
                            return index % 4 === 0 ? +value : null;
                            // return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_2_chartist__["Line"]('#numeroFardosChart', dataMonth, options, responsiveOptions);
    };
    return FardoComponent;
}());
FardoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chart-fardo',
        template: __webpack_require__("./src/app/dashboard/fardo/fardo.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__["a" /* ResumoDiarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__["a" /* ResumoDiarioService */]) === "function" && _a || Object])
], FardoComponent);

var _a;
//# sourceMappingURL=fardo.component.js.map

/***/ }),

/***/ "./src/app/dashboard/oleo/oleo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\r\n    <div class=\"card \">\r\n        <div class=\"header\">\r\n            <h4 class=\"title\">Produção Diária de Óleo Insdustrial (L)</h4>\r\n            <p class=\"category\">Abril de 2018</p>\r\n        </div>\r\n        <div class=\"content\">\r\n            <div class=\"row\">\r\n                <!-- <div class=\"col-md-12\">\r\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                            <button type=\"button\" class=\"btn btn-default\">ANO</button>\r\n                            <button type=\"button\" class=\"btn btn-default\">MÊS</button>\r\n                            <button type=\"button\" class=\"btn btn-default\">DIA</button>\r\n                        </div>\r\n                    </div> -->\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"btn-group\" data-toggle=\"buttons\">\r\n                        <label class=\"btn btn-default active\" (click)=\"selectYear()\">\r\n                            <input type=\"radio\" name=\"options\" id=\"ano\"  autocomplete=\"off\" checked> ANO\r\n                          </label>\r\n                        <label class=\"btn btn-default\" (click)=\"selectMonth()\">\r\n                            <input type=\"radio\" name=\"options\" id=\"mes\"  autocomplete=\"off\"> MÊS\r\n                          </label>\r\n                        <!-- <label class=\"btn btn-default\" (click)=\"selectDay()\">\r\n                            <input type=\"radio\" name=\"options\" id=\"dia\" autocomplete=\"off\"> DIA\r\n                          </label> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div id=\"oleoChart\" class=\"ct-chart\"></div>\r\n\r\n            <div class=\"footer\">\r\n                <div class=\"chart-legend\">\r\n                    <i class=\"fa fa-circle text-info\"></i> Óleo Insdustrial Tipo A\r\n                    <i class=\"fa fa-circle text-warning\"></i> Óleo Insdustrial E.T.E\r\n                </div>\r\n                <hr>\r\n                <div class=\"stats\">\r\n                    <i class=\"ti-check\"></i> 22/04/2018\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/oleo/oleo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OleoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__ = __webpack_require__("./src/app/resumo-diario/resumo-diario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__ = __webpack_require__("./node_modules/chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OleoComponent = (function () {
    function OleoComponent(resumoDiarioService) {
        this.resumoDiarioService = resumoDiarioService;
    }
    OleoComponent.prototype.ngOnInit = function () {
        this.selectYear();
    };
    OleoComponent.prototype.selectYear = function () {
        var labels = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
        var series = [];
        var listaOleoIndustrialETE = [];
        var listaOleoIndustrialTipoA = [];
        // const producaoMes: any[] = [];
        var ano = 2018;
        this.resumoDiarioService.getOleoPorAno(ano).subscribe(function (resp) {
            var lista = JSON.parse(resp._body);
            /*lista.mesLancamentoWrappers.forEach(mes => {
                labels.push(mes.mesAnoLancamento);
            });*/
            lista.oleoIndustrialETEWrappers.forEach(function (oleoETE) {
                listaOleoIndustrialETE.push(parseInt(oleoETE.producaoDiariaOleoIndustrialETE));
            });
            lista.oleoIndustrialTipoAWrapper.forEach(function (oleoTipoA) {
                listaOleoIndustrialTipoA.push(parseInt(oleoTipoA.producaoDiariaOleoIndustrialTipoA));
            });
            series.push(listaOleoIndustrialETE);
            series.push(listaOleoIndustrialTipoA);
        });
        var dataMonth = {
            labels: labels,
            series: series
        };
        var options = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? +value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value, index) {
                            return index % 4 === 0 ? +value : null;
                            // return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_2_chartist__["Line"]('#oleoChart', dataMonth, options, responsiveOptions);
    };
    OleoComponent.prototype.selectMonth = function () {
        var labels = [];
        var series = [];
        var listaOleoIndustrialETE = [];
        var listaOleoIndustrialTipoA = [];
        // const producaoMes: any[] = [];
        var ano = 2018;
        var mes = 4;
        this.resumoDiarioService.getOleoPorMes(ano, mes).subscribe(function (resp) {
            var lista = JSON.parse(resp._body);
            lista.mesLancamentoWrappers.forEach(function (mes) {
                labels.push(mes.mesAnoLancamento);
            });
            lista.oleoIndustrialETEWrappers.forEach(function (oleoETE) {
                listaOleoIndustrialETE.push(parseInt(oleoETE.producaoDiariaOleoIndustrialETE));
            });
            lista.oleoIndustrialTipoAWrapper.forEach(function (oleoTipoA) {
                listaOleoIndustrialTipoA.push(parseInt(oleoTipoA.producaoDiariaOleoIndustrialTipoA));
            });
            series.push(listaOleoIndustrialETE);
            series.push(listaOleoIndustrialTipoA);
        });
        var dataMonth = {
            labels: labels,
            series: series
        };
        var options = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? +value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value, index) {
                            return index % 4 === 0 ? +value : null;
                            // return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_2_chartist__["Line"]('#oleoChart', dataMonth, options, responsiveOptions);
    };
    return OleoComponent;
}());
OleoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chart-oleo',
        template: __webpack_require__("./src/app/dashboard/oleo/oleo.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__["a" /* ResumoDiarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__["a" /* ResumoDiarioService */]) === "function" && _a || Object])
], OleoComponent);

var _a;
//# sourceMappingURL=oleo.component.js.map

/***/ }),

/***/ "./src/app/dashboard/torta/torta.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\r\n    <div class=\"card \">\r\n        <div class=\"header\">\r\n            <h4 class=\"title\">Produção Diária de Torta (Kg) </h4>\r\n            <p class=\"category\">Abril de 2018</p>\r\n        </div>\r\n        <div class=\"content\">\r\n            <div class=\"row\">\r\n                <!-- <div class=\"col-md-12\">\r\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                            <button type=\"button\" class=\"btn btn-default\">ANO</button>\r\n                            <button type=\"button\" class=\"btn btn-default\">MÊS</button>\r\n                            <button type=\"button\" class=\"btn btn-default\">DIA</button>\r\n                        </div>\r\n                    </div> -->\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"btn-group\" data-toggle=\"buttons\">\r\n                        <label class=\"btn btn-default active\" (click)=\"selectYear()\">\r\n                            <input type=\"radio\" name=\"options\" id=\"ano\"  autocomplete=\"off\" checked> ANO\r\n                          </label>\r\n                        <label class=\"btn btn-default\" (click)=\"selectMonth()\">\r\n                            <input type=\"radio\" name=\"options\" id=\"mes\"  autocomplete=\"off\"> MÊS\r\n                          </label>\r\n                        <!-- <label class=\"btn btn-default\" (click)=\"selectDay()\">\r\n                            <input type=\"radio\" name=\"options\" id=\"dia\" autocomplete=\"off\"> DIA\r\n                          </label> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div id=\"tortaChart\" class=\"ct-chart\"></div>\r\n\r\n            <div class=\"footer\">\r\n                <div class=\"chart-legend\">\r\n                    <i class=\"fa fa-circle text-info\"></i> Torta\r\n                    <!-- <i class=\"fa fa-circle text-warning\"></i> x  -->\r\n                </div>\r\n                <hr>\r\n                <div class=\"stats\">\r\n                    <i class=\"ti-check\"></i> 22/04/2018\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/torta/torta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TortaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__ = __webpack_require__("./src/app/resumo-diario/resumo-diario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__ = __webpack_require__("./node_modules/chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TortaComponent = (function () {
    function TortaComponent(resumoDiarioService) {
        this.resumoDiarioService = resumoDiarioService;
    }
    TortaComponent.prototype.ngOnInit = function () {
        this.selectYear();
    };
    TortaComponent.prototype.selectYear = function () {
        var labels = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
        var series = [];
        var listaTorta = [];
        var ano = 2018;
        this.resumoDiarioService.getTortaPorAno(ano).subscribe(function (resp) {
            var lista = JSON.parse(resp._body);
            /*lista.mesLancamentoWrappers.forEach(mes => {
                labels.push(mes.mesAnoLancamento);
            });*/
            lista.tortaWrapper.forEach(function (torta) {
                listaTorta.push(parseInt(torta.producaoDiariaTorta));
            });
            series.push(listaTorta);
        });
        var dataMonth = {
            labels: labels,
            series: series
        };
        var options = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? +value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value, index) {
                            return index % 4 === 0 ? +value : null;
                            // return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_2_chartist__["Line"]('#tortaChart', dataMonth, options, responsiveOptions);
    };
    TortaComponent.prototype.selectMonth = function () {
        var labels = [];
        var series = [];
        var listaTorta = [];
        var ano = 2018;
        var mes = 4;
        this.resumoDiarioService.getTortaPorMes(ano, mes).subscribe(function (resp) {
            var lista = JSON.parse(resp._body);
            lista.mesLancamentoWrappers.forEach(function (mes) {
                labels.push(mes.mesAnoLancamento);
            });
            lista.tortaWrapper.forEach(function (torta) {
                listaTorta.push(parseInt(torta.producaoDiariaTorta));
            });
            series.push(listaTorta);
        });
        var dataMonth = {
            labels: labels,
            series: series
        };
        var options = {
            seriesDistance: 10,
            showPoint: true,
            axisX: {
                showGrid: false
            },
            height: '245px',
            plugins: [
                __WEBPACK_IMPORTED_MODULE_3_chartist_plugin_pointlabels_dist_chartist_plugin_pointlabels_js__({
                    textAnchor: 'middle',
                    labelInterpolationFnc: function (value) {
                        return value % 4 === 0 ? +value : '';
                        // labelInterpolationFnc: function (value) { return '$' + value.toFixed(2)}
                    }
                })
            ]
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value, index) {
                            return index % 4 === 0 ? +value : null;
                            // return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_2_chartist__["Line"]('#tortaChart', dataMonth, options, responsiveOptions);
    };
    return TortaComponent;
}());
TortaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chart-torta',
        template: __webpack_require__("./src/app/dashboard/torta/torta.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__["a" /* ResumoDiarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resumo_diario_resumo_diario_service__["a" /* ResumoDiarioService */]) === "function" && _a || Object])
], TortaComponent);

var _a;
//# sourceMappingURL=torta.component.js.map

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("./src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */]
    }
];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    return LoginRoutingModule;
}());
LoginRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], LoginRoutingModule);

//# sourceMappingURL=login-routing.module.js.map

/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login-box{\r\n    width: 320px;\r\n    height: 420px;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    color: #fff;\r\n    top: 50%;\r\n    left: 50%;\r\n    position: absolute;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    padding: 70px 30px;\r\n}\r\n.avatar{\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: -50px;\r\n    left: calc(50% - 50px);\r\n}\r\nh1{\r\n    margin: 0;\r\n    padding: 0 0 20px;\r\n    text-align: center;\r\n    font-size: 22px;\r\n}\r\n.login-box p{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-weight: bold;\r\n}\r\n.login-box input{\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n.login-box input[type=\"text\"], input[type=\"password\"]\r\n{\r\n    border: none;\r\n    border-bottom: 1px solid #fff;\r\n    background: transparent;\r\n    outline: none;\r\n    height: 40px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n}\r\n.login-box input[type=\"submit\"]\r\n{\r\n    border: none;\r\n    outline: none;\r\n    height: 40px;\r\n    background: #1c8adb;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    border-radius: 20px;\r\n}\r\n.login-box input[type=\"submit\"]:hover\r\n{\r\n    cursor: pointer;\r\n    background: #39dc79;\r\n    color: #000;\r\n}\r\n.login-box a{\r\n    text-decoration: none;\r\n    font-size: 14px;\r\n    color: #fff;\r\n}\r\n.login-box a:hover\r\n{\r\n    color: #39dc79;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <!-- <img src=\"assets/img.jpg\" class=\"fundo\"> -->\r\n\r\n  <div class=\"login-box\">\r\n\r\n    <img src=\"assets/img/logo.png\" class=\"avatar\">\r\n    <h1>Login </h1>\r\n    <form>\r\n      <p>Usuário</p>\r\n      <input type=\"text\" name=\"username\" placeholder=\"Digite seu usuário aqui\">\r\n      <p>Senha</p>\r\n      <input type=\"password\" name=\"password\" placeholder=\"Digite sua senha aqui\">\r\n      <input type=\"submit\" name=\"submit\" value=\"Login\" [routerLink]=\"['/dashboard']\" (click)=\"onLoggedin()\">\r\n      <a href=\"#\">Esqueceu senha</a>\r\n      <br>\r\n      <a href=\"#\">Novo Cadastro</a>\r\n    </form>\r\n\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoggedin = function () {
        localStorage.setItem('isLoggedin', 'true');
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/login/login.component.html"),
        styles: [__webpack_require__("./src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_routing_module__ = __webpack_require__("./src/app/login/login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__("./src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__login_routing_module__["a" /* LoginRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ "./src/app/resumo-diario/formulario/resumo-diario.component.css":
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 599px) {\r\n    .header h3 {\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 600px) {\r\n    .header h3 {\r\n        font-size: 24px;\r\n    }\r\n}\r\n\r\n.card label {\r\n    color: black;\r\n    font-size: 16px;\r\n}\r\n\r\n.row-painel,\r\n.card {\r\n    margin-top: 40px;\r\n    margin-bottom: 50px;\r\n    /* margin-left: 5px;\r\n    margin-right: 5px; */\r\n}\r\n\r\n.form-control {\r\n    /* background-color: #e7e7e7 */\r\n    background-color: #f4f3ef\r\n    /*background-color: #cccccc;*/\r\n}\r\n\r\n.content input{\r\n    font-size: 16px;\r\n    border: #cccccc solid 1px;\r\n}\r\n\r\n.painel-container {\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.card label {\r\n    color: black;\r\n}\r\n\r\n.text-on-pannel-sococo {\r\n    background: #f00 none repeat scroll 0 0;\r\n    height: auto;\r\n    margin-left: 20px;\r\n    padding: 3px 5px;\r\n    position: absolute;\r\n    margin-top: -47px;\r\n    /* border: 1px solid #337ab7; */\r\n    border-radius: 8px;\r\n}\r\n\r\n.title-sococo {\r\n    color: #fff\r\n}\r\n\r\n.row-sococo,\r\n.card {\r\n    margin-top: 10px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n/* CSS ACQUA */\r\n\r\n.title-acqua {\r\n    color: #fff\r\n}\r\n\r\n.text-on-pannel-acqua {\r\n    background: rgb(21, 199, 110) none repeat scroll 0 0;\r\n    height: auto;\r\n    margin-left: 20px;\r\n    padding: 3px 5px;\r\n    position: absolute;\r\n    margin-top: -47px;\r\n    /* border: 1px solid #337ab7; */\r\n    border-radius: 8px;\r\n}\r\n\r\n.row-acqua {\r\n    margin-top: 20px;\r\n}\r\n\r\n/* CSS AMAFIBRA */\r\n\r\n.row-amafibra {\r\n    margin-top: 20px;\r\n}\r\n\r\n.title-amafibra {\r\n    color: #fff\r\n}\r\n\r\n.text-on-pannel-amafibra {\r\n    background: rgb(189, 154, 0) none repeat scroll 0 0;\r\n    height: auto;\r\n    margin-left: 20px;\r\n    padding: 3px 5px;\r\n    position: absolute;\r\n    margin-top: -47px;\r\n    /* border: 1px solid #337ab7; */\r\n    border-radius: 8px;\r\n}"

/***/ }),

/***/ "./src/app/resumo-diario/formulario/resumo-diario.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n    <div class=\"row row-sococo\">\r\n        <div class=\"col-lg-12 col-md-12\">\r\n            <form #formulario=\"ngForm\" (ngSubmit)=\"confirmarCadastro()\" novalidate>\r\n                <!-- PRODUCAO SOCOCO -->\r\n                <div class=\"card row\">\r\n                    <div class=\"header\">\r\n                        <h3 class=\"text-on-pannel-sococo text-primary\"><strong class=\"text-uppercase title-sococo\"> Produção Diária Sococo </strong></h3>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <!-- <app-input errorMessage=\"Campo Obrigatório\" label=\"Data\">\r\n                            <input class=\"form-control\" type=\"date\" id=\"dataLancamento\" name=\"dataLancamento\" ngModel required>\r\n                        </app-input> -->\r\n\r\n                        <app-input errorMessage=\"Campo Obrigatório\" label=\"Cocos Desfribrados (und)\">\r\n                            <input class=\"form-control\" type=\"number\" placeholder=\"Cocos Desfibrados\" name=\"cocosDesfibrados\" ngModel required autocomplete=\"off\">\r\n                        </app-input>\r\n\r\n                        <app-input errorMessage=\"Campo Obrigatório\" label=\"Cocos Processados (und)\">\r\n                            <input class=\"form-control\" type=\"number\" placeholder=\"Cocos Processados\" name=\"cocosProcessados\" ngModel required autocomplete=\"off\">\r\n                        </app-input>\r\n\r\n                        <app-input errorMessage=\"Campo Obrigatório\" label=\"CRI (Kg)\">\r\n                            <input class=\"form-control\" type=\"text\" placeholder=\"CRI\" name=\"cri\" ngModel required autocomplete=\"off\">\r\n                        </app-input>\r\n\r\n                        <app-input errorMessage=\"Campo Obrigatório\" label=\"Flococo (Kg)\">\r\n                            <input class=\"form-control\" type=\"number\" placeholder=\"Flococo\" name=\"flococo\" ngModel required autocomplete=\"off\">\r\n                        </app-input>\r\n\r\n                        <app-input errorMessage=\"Campo Obrigatório\" label=\"Óleo Industrial ETE (L)\">\r\n                            <input class=\"form-control\" type=\"number\" placeholder=\"Óleo Industrial ETE\" name=\"oleoIndustrialETE\" ngModel required autocomplete=\"off\">\r\n                        </app-input>\r\n\r\n                        <app-input errorMessage=\"Campo Obrigatório\" label=\"Óleo Industrial Tipo A (L)\">\r\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Óleo Industrial Tipo A\" name=\"oleoIndustrialTipoA\" ngModel required autocomplete=\"off\">\r\n                        </app-input>\r\n\r\n                        <app-input errorMessage=\"Campo Obrigatório\" label=\"Torta - ração (Kg)\">\r\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Torta\" name=\"torta\" ngModel required autocomplete=\"off\">\r\n                        </app-input>\r\n\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- PRODUCAO ACGUA -->\r\n                <div class=\"card row\">\r\n                    <div class=\"header\">\r\n                        <h3 class=\"text-on-pannel-acqua text-primary\"><strong class=\"text-uppercase title-acqua\"> Produção Diária Acqua </strong></h3>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <!-- <app-input errorMessage=\"Campo Obrigatório\" label=\"Data\">\r\n                            <input class=\"form-control\" type=\"date\" id=\"dataLancamento\" name=\"dataLancamento\" ngModel required>\r\n                        </app-input> -->\r\n\r\n                        <app-input errorMessage=\"Campo Obrigatório\" label=\"Água de Coco Sococo\">\r\n                            <input class=\"form-control\" type=\"number\" placeholder=\"Água de Coco Sococo\" name=\"aguaDeCocoSococo\" ngModel required autocomplete=\"off\">\r\n                        </app-input>\r\n\r\n                        <app-input errorMessage=\"Campo Obrigatório\" label=\"Água de Coco Verde\">\r\n                            <input class=\"form-control\" type=\"number\" placeholder=\"Água de Coco Verde\" name=\"aguaDeCocoVerde\" ngModel required autocomplete=\"off\">\r\n                        </app-input>\r\n\r\n                        <app-input errorMessage=\"Campo Obrigatório\" label=\"Porcentagem de Coco Germinado\">\r\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Porcentagem de Coco Germinado\" name=\"porcentagemCocoGerminado\" ngModel required autocomplete=\"off\">\r\n                        </app-input>\r\n\r\n                        <app-input errorMessage=\"Campo Obrigatório\" label=\"Total de Cacambas\">\r\n                            <input class=\"form-control\" type=\"number\" placeholder=\"Total de Cacambas\" name=\"totalDeCacambas\" ngModel required autocomplete=\"off\">\r\n                        </app-input>\r\n\r\n                        <app-input errorMessage=\"Campo Obrigatório\" label=\"Caixa Padrão\">\r\n                            <input class=\"form-control\" type=\"number\" placeholder=\"Caixa Padrão\" name=\"caixaPadrao\" ngModel required autocomplete=\"off\">\r\n                        </app-input>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- PRODUCAO AMAFIBRA -->\r\n                <div class=\"card row\">\r\n                    <div class=\"header\">\r\n                        <h3 class=\"text-on-pannel-amafibra text-primary\"><strong class=\"text-uppercase title-amafibra\"> Produção Diária Amafibra </strong></h3>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <!-- <app-input errorMessage=\"Campo Obrigatório\" label=\"Data\">\r\n                            <input class=\"form-control\" type=\"date\" id=\"dataLancamento\" name=\"dataLancamento\" ngModel required>\r\n                        </app-input> -->\r\n                        <app-input errorMessage=\"Campo Obrigatório\" label=\"Número de Fardos\">\r\n                            <input class=\"form-control\" type=\"number\" placeholder=\"Número de Fardos\" id=\"numeroDeFardos\" name=\"numeroDeFardos\" ngModel required autocomplete=\"off\">\r\n                        </app-input>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <!-- <label class=\"col-lg-2 col-form-label form-control-label\"></label> -->\r\n                    <div class=\"col-lg-10\">\r\n                        <input type=\"submit\" class=\"btn btn-primary\" value=\"Salvar\" [disabled]=\"!formulario.valid\">\r\n                        <input type=\"reset\" class=\"btn btn-secondary\" value=\"Cancelar\">\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/resumo-diario/formulario/resumo-diario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumoDiarioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resumo_diario_service__ = __webpack_require__("./src/app/resumo-diario/resumo-diario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resumo_diario_model__ = __webpack_require__("./src/app/resumo-diario/resumo-diario.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResumoDiarioComponent = (function () {
    function ResumoDiarioComponent(resumoDiarioService, router) {
        this.resumoDiarioService = resumoDiarioService;
        this.router = router;
    }
    ResumoDiarioComponent.prototype.ngOnInit = function () {
    };
    ResumoDiarioComponent.prototype.confirmarCadastro = function () {
        var _this = this;
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"]('en-US');
        var resumoDiario = new __WEBPACK_IMPORTED_MODULE_4__resumo_diario_model__["a" /* ResumoDiario */](this.formulario.value.dataLancamento = this.datePipe.transform(new Date(), 'yyyy-MM-dd'), this.formulario.value.cocosDesfibrados, this.formulario.value.cocosProcessados, this.formulario.value.cri, this.formulario.value.flococo, this.formulario.value.oleoIndustrialETE, this.formulario.value.oleoIndustrialTipoA, this.formulario.value.torta, this.formulario.value.aguaDeCocoSococo, this.formulario.value.aguaDeCocoVerde, this.formulario.value.porcentagemCocoGerminado, this.formulario.value.totalDeCacambas, this.formulario.value.caixaPadrao, this.formulario.value.numeroDeFardos);
        console.log(resumoDiario);
        console.log(this.formulario);
        this.resumoDiarioService.adicionar(resumoDiario)
            .subscribe(function (response) {
            _this.router.navigate(['/resumo-diario-lista']);
        });
    };
    return ResumoDiarioComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('formulario'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], ResumoDiarioComponent.prototype, "formulario", void 0);
ResumoDiarioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-resumo-diario',
        template: __webpack_require__("./src/app/resumo-diario/formulario/resumo-diario.component.html"),
        styles: [__webpack_require__("./src/app/resumo-diario/formulario/resumo-diario.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__resumo_diario_service__["a" /* ResumoDiarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__resumo_diario_service__["a" /* ResumoDiarioService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ResumoDiarioComponent);

var _a, _b, _c;
//# sourceMappingURL=resumo-diario.component.js.map

/***/ }),

/***/ "./src/app/resumo-diario/lista/resumo-diario-lista.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/resumo-diario/lista/resumo-diario-lista.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"header\">\r\n                    <h4 class=\"title\">Lista Cadastro</h4>\r\n                    <p class=\"category\">Sococo | Acqua | Amafibra</p>\r\n                    <a [routerLink]=\"['/lancamento-do-dia']\" class=\"btn btn-link scc-link-panel\">Novo cadastro</a>\r\n                </div>\r\n                <div class=\"content table-responsive table-full-width\">\r\n                    <table class=\"table table-striped\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th *ngFor=\"let cell of headerRow\">{{ cell }}</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let row of dataRows\">\r\n                                <td>{{row.id}}</td>\r\n                                <td>{{row.dataLancamento | date:'dd/MM/yyyy'}}</td>\r\n                                <td>{{row.cocosDesfibrados}}</td>\r\n                                <td>{{row.cocosProcessados}}</td>\r\n                                <td>{{row.cri}}</td>\r\n                                <td>{{row.flococo}}</td>\r\n                                <td>{{row.oleoIndustrialETE}}</td>\r\n                                <td>{{row.oleoIndustrialTipoA}}</td>\r\n                                <td>{{row.torta}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/resumo-diario/lista/resumo-diario-lista.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumoDiarioListaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resumo_diario_service__ = __webpack_require__("./src/app/resumo-diario/resumo-diario.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResumoDiarioListaComponent = (function () {
    function ResumoDiarioListaComponent(sococoService) {
        this.sococoService = sococoService;
    }
    ResumoDiarioListaComponent.prototype.ngOnInit = function () {
        this.listaHeaderRow();
        this.getLista();
    };
    ResumoDiarioListaComponent.prototype.getLista = function () {
        var _this = this;
        this.sococoService.getLista()
            .subscribe(function (resumoDiario) {
            _this.dataRows = resumoDiario;
            console.log(_this.dataRows);
        });
    };
    ResumoDiarioListaComponent.prototype.listaHeaderRow = function () {
        this.headerRow = ['ID', 'Data', 'Cocos Desfibrados', 'Cocos Processados', 'CRI', 'Flococo', 'O.I. ETE', 'O. I. Tipo A', 'Torta'];
    };
    return ResumoDiarioListaComponent;
}());
ResumoDiarioListaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-resumo-diario-lista',
        template: __webpack_require__("./src/app/resumo-diario/lista/resumo-diario-lista.component.html"),
        styles: [__webpack_require__("./src/app/resumo-diario/lista/resumo-diario-lista.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__resumo_diario_service__["a" /* ResumoDiarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resumo_diario_service__["a" /* ResumoDiarioService */]) === "function" && _a || Object])
], ResumoDiarioListaComponent);

var _a;
//# sourceMappingURL=resumo-diario-lista.component.js.map

/***/ }),

/***/ "./src/app/resumo-diario/resumo-diario.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumoDiario; });
var ResumoDiario = (function () {
    function ResumoDiario(dataLancamento, cocosDesfibrados, cocosProcessados, cri, flococo, oleoIndustrialETE, oleoIndustrialTipoA, torta, aguaDeCocoSococo, aguaDeCocoVerde, numeroDeFardos, porcentagemCocoGerminado, caixaPadrao, totalDeCacambas) {
        this.dataLancamento = dataLancamento;
        this.cocosDesfibrados = cocosDesfibrados;
        this.cocosProcessados = cocosProcessados;
        this.cri = cri;
        this.flococo = flococo;
        this.oleoIndustrialETE = oleoIndustrialETE;
        this.oleoIndustrialTipoA = oleoIndustrialTipoA;
        this.torta = torta;
        this.aguaDeCocoSococo = aguaDeCocoSococo;
        this.aguaDeCocoVerde = aguaDeCocoVerde;
        this.numeroDeFardos = numeroDeFardos;
        this.porcentagemCocoGerminado = porcentagemCocoGerminado;
        this.caixaPadrao = caixaPadrao;
        this.totalDeCacambas = totalDeCacambas;
    }
    return ResumoDiario;
}());

//# sourceMappingURL=resumo-diario.model.js.map

/***/ }),

/***/ "./src/app/resumo-diario/resumo-diario.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumoDiarioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resumo_diario_routing__ = __webpack_require__("./src/app/resumo-diario/resumo-diario.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resumo_diario_service__ = __webpack_require__("./src/app/resumo-diario/resumo-diario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formulario_resumo_diario_component__ = __webpack_require__("./src/app/resumo-diario/formulario/resumo-diario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lista_resumo_diario_lista_component__ = __webpack_require__("./src/app/resumo-diario/lista/resumo-diario-lista.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resumo_do_dia_resumo_do_dia_component__ = __webpack_require__("./src/app/resumo-diario/resumo-do-dia/resumo-do-dia.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ResumoDiarioModule = (function () {
    function ResumoDiarioModule() {
    }
    return ResumoDiarioModule;
}());
ResumoDiarioModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__resumo_diario_routing__["a" /* ResumoDiarioRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__formulario_resumo_diario_component__["a" /* ResumoDiarioComponent */],
            __WEBPACK_IMPORTED_MODULE_5__lista_resumo_diario_lista_component__["a" /* ResumoDiarioListaComponent */],
            __WEBPACK_IMPORTED_MODULE_6__resumo_do_dia_resumo_do_dia_component__["a" /* ResumoDoDiaComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__resumo_diario_service__["a" /* ResumoDiarioService */]
        ]
    })
], ResumoDiarioModule);

//# sourceMappingURL=resumo-diario.module.js.map

/***/ }),

/***/ "./src/app/resumo-diario/resumo-diario.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumoDiarioRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formulario_resumo_diario_component__ = __webpack_require__("./src/app/resumo-diario/formulario/resumo-diario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lista_resumo_diario_lista_component__ = __webpack_require__("./src/app/resumo-diario/lista/resumo-diario-lista.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resumo_do_dia_resumo_do_dia_component__ = __webpack_require__("./src/app/resumo-diario/resumo-do-dia/resumo-do-dia.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// rotas para ações Resumo diario
var routes = [
    {
        path: 'lancamento-do-dia',
        component: __WEBPACK_IMPORTED_MODULE_2__formulario_resumo_diario_component__["a" /* ResumoDiarioComponent */]
    },
    {
        path: 'lancamentos',
        component: __WEBPACK_IMPORTED_MODULE_3__lista_resumo_diario_lista_component__["a" /* ResumoDiarioListaComponent */]
    },
    {
        path: 'resumo-do-dia',
        component: __WEBPACK_IMPORTED_MODULE_4__resumo_do_dia_resumo_do_dia_component__["a" /* ResumoDoDiaComponent */]
    }
];
var ResumoDiarioRoutingModule = (function () {
    function ResumoDiarioRoutingModule() {
    }
    return ResumoDiarioRoutingModule;
}());
ResumoDiarioRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], ResumoDiarioRoutingModule);

//# sourceMappingURL=resumo-diario.routing.js.map

/***/ }),

/***/ "./src/app/resumo-diario/resumo-diario.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumoDiarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retry__ = __webpack_require__("./node_modules/rxjs/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ErrorHandler__ = __webpack_require__("./src/app/ErrorHandler.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ResumoDiarioService = (function () {
    function ResumoDiarioService(http) {
        this.http = http;
        this.resumoDiarioUrl = "" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].base_url;
    }
    ResumoDiarioService.prototype.adicionar = function (resumoDiario) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.resumoDiarioUrl + "/lancamento-do-dia", JSON.stringify(resumoDiario), new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers }))
            .map(function (response) { return response.json(); });
    };
    ResumoDiarioService.prototype.getLista = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].base_url + "/lancamentos")
            .map(function (resposta) { return resposta.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_7__ErrorHandler__["a" /* ErrorHandler */].handlerError);
    };
    ResumoDiarioService.prototype.getResumoDiario = function () {
        return this.http.get(this.resumoDiarioUrl + "/resumo-do-dia")
            .map(function (resposta) { return resposta.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_7__ErrorHandler__["a" /* ErrorHandler */].handlerError);
    };
    /*public getCocoPorAno(ano: number): Observable<any> {
        return this.http.get(`${environment.base_url}/dashboard/resumo-coco-por-ano/${ano}`)
            .map((response: Response) => {
                return response;
            })
            .catch(ErrorHandler.handlerError);
    }*/
    ResumoDiarioService.prototype.getCocoPorAno = function (ano) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].base_url + "/dashboard/resumo-coco-por-ano/" + ano)
            .toPromise()
            .then(function (response) { return response; })
            .catch(__WEBPACK_IMPORTED_MODULE_7__ErrorHandler__["a" /* ErrorHandler */].handlerError);
    };
    ResumoDiarioService.prototype.getCocoPorMes = function (ano, mes) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].base_url + "/dashboard/resumo-diario-coco/" + ano + "/" + mes)
            .toPromise()
            .then(function (response) { return response; });
    };
    ResumoDiarioService.prototype.getCriFlococoPorAno = function (ano) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].base_url + "/dashboard/resumo-cri-flococo-por-ano/" + ano)
            .map(function (response) {
            return response;
        })
            .catch(__WEBPACK_IMPORTED_MODULE_7__ErrorHandler__["a" /* ErrorHandler */].handlerError);
    };
    ResumoDiarioService.prototype.getCriFlococoPorMes = function (ano, mes) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].base_url + "/dashboard/resumo-diario-cri-flococo/" + ano + "/" + mes)
            .map(function (response) {
            return response;
        })
            .catch(__WEBPACK_IMPORTED_MODULE_7__ErrorHandler__["a" /* ErrorHandler */].handlerError);
    };
    ResumoDiarioService.prototype.getOleoPorAno = function (ano) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].base_url + "/dashboard/resumo-oleo-por-ano/" + ano)
            .map(function (response) {
            return response;
        })
            .catch(__WEBPACK_IMPORTED_MODULE_7__ErrorHandler__["a" /* ErrorHandler */].handlerError);
    };
    ResumoDiarioService.prototype.getOleoPorMes = function (ano, mes) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].base_url + "/dashboard/resumo-diario-oleo/" + ano + "/" + mes)
            .map(function (response) {
            return response;
        })
            .catch(__WEBPACK_IMPORTED_MODULE_7__ErrorHandler__["a" /* ErrorHandler */].handlerError);
    };
    ResumoDiarioService.prototype.getTortaPorAno = function (ano) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].base_url + "/dashboard/resumo-torta-por-ano/" + ano)
            .map(function (response) {
            return response;
        })
            .catch(__WEBPACK_IMPORTED_MODULE_7__ErrorHandler__["a" /* ErrorHandler */].handlerError);
    };
    ResumoDiarioService.prototype.getTortaPorMes = function (ano, mes) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].base_url + "/dashboard/resumo-diario-torta/" + ano + "/" + mes)
            .map(function (response) {
            return response;
        })
            .catch(__WEBPACK_IMPORTED_MODULE_7__ErrorHandler__["a" /* ErrorHandler */].handlerError);
    };
    ResumoDiarioService.prototype.getCocoGerminadoPorAno = function (ano) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].base_url + "/dashboard/resumo-coco-germinado-por-ano/" + ano)
            .map(function (response) {
            return response;
        })
            .catch(__WEBPACK_IMPORTED_MODULE_7__ErrorHandler__["a" /* ErrorHandler */].handlerError);
    };
    ResumoDiarioService.prototype.getCocoGerminadoPorMes = function (ano, mes) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].base_url + "/dashboard/resumo-diario-coco-germinado/" + ano + "/" + mes)
            .map(function (response) {
            return response;
        })
            .catch(__WEBPACK_IMPORTED_MODULE_7__ErrorHandler__["a" /* ErrorHandler */].handlerError);
    };
    ResumoDiarioService.prototype.getCaixaPadraoPorAno = function (ano) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].base_url + "/dashboard/resumo-caixa-padrao-por-ano/" + ano)
            .map(function (response) {
            return response;
        })
            .catch(__WEBPACK_IMPORTED_MODULE_7__ErrorHandler__["a" /* ErrorHandler */].handlerError);
    };
    ResumoDiarioService.prototype.getCaixaPadraoPorMes = function (ano, mes) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].base_url + "/dashboard/resumo-diario-caixa-padrao/" + ano + "/" + mes)
            .map(function (response) {
            return response;
        })
            .catch(__WEBPACK_IMPORTED_MODULE_7__ErrorHandler__["a" /* ErrorHandler */].handlerError);
    };
    ResumoDiarioService.prototype.getAguaCocoPorAno = function (ano) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].base_url + "/dashboard/resumo-agua-coco-por-ano/" + ano)
            .map(function (response) {
            return response;
        })
            .catch(__WEBPACK_IMPORTED_MODULE_7__ErrorHandler__["a" /* ErrorHandler */].handlerError);
    };
    ResumoDiarioService.prototype.getAguaCocoPorMes = function (ano, mes) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].base_url + "/dashboard/resumo-diario-agua-coco/" + ano + "/" + mes)
            .map(function (response) {
            return response;
        })
            .catch(__WEBPACK_IMPORTED_MODULE_7__ErrorHandler__["a" /* ErrorHandler */].handlerError);
    };
    ResumoDiarioService.prototype.getFardoPorAno = function (ano) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].base_url + "/dashboard/resumo-fardo-por-ano/" + ano)
            .map(function (response) {
            return response;
        })
            .catch(__WEBPACK_IMPORTED_MODULE_7__ErrorHandler__["a" /* ErrorHandler */].handlerError);
    };
    ResumoDiarioService.prototype.getFardoPorMes = function (ano, mes) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].base_url + "/dashboard/resumo-diario-fardo/" + ano + "/" + mes)
            .map(function (response) {
            return response;
        })
            .catch(__WEBPACK_IMPORTED_MODULE_7__ErrorHandler__["a" /* ErrorHandler */].handlerError);
    };
    ResumoDiarioService.prototype.getCacambaPorAno = function (ano) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].base_url + "/dashboard/resumo-cacamba-por-ano/" + ano)
            .map(function (response) {
            return response;
        })
            .catch(__WEBPACK_IMPORTED_MODULE_7__ErrorHandler__["a" /* ErrorHandler */].handlerError);
    };
    ResumoDiarioService.prototype.getCacambaPorMes = function (ano, mes) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].base_url + "/dashboard/resumo-diario-cacamba/" + ano + "/" + mes)
            .map(function (response) {
            return response;
        })
            .catch(__WEBPACK_IMPORTED_MODULE_7__ErrorHandler__["a" /* ErrorHandler */].handlerError);
    };
    return ResumoDiarioService;
}());
ResumoDiarioService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ResumoDiarioService);

var _a;
//# sourceMappingURL=resumo-diario.service.js.map

/***/ }),

/***/ "./src/app/resumo-diario/resumo-do-dia/resumo-do-dia.component.css":
/***/ (function(module, exports) {

module.exports = "/* .form-control {\r\n    background-color: #000;\r\n    color: #ffffff;\r\n} */\r\n\r\n@media screen and (max-width: 599px) {\r\n    .header h3 {\r\n        font-size: 18px;\r\n    }\r\n    .data-lancamento h5 {\r\n        float: right;\r\n        margin-top: -50px;\r\n        font-weight: bold;\r\n        background-color: #e7e7e7;\r\n        padding: 3px 5px;\r\n        border-radius: 8px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 600px) {\r\n    .header h3 {\r\n        font-size: 24px;\r\n    }\r\n    .data-lancamento h5 {\r\n        float: right;\r\n        margin-top: -50px;\r\n        background-color: #e7e7e7;\r\n        font-weight: bold;\r\n    }\r\n}\r\n\r\n.card label {\r\n    color: black;\r\n    font-size: 16px;\r\n}\r\n\r\n.row-painel,\r\n.card {\r\n    margin-top: 40px;\r\n    margin-bottom: 50px;\r\n    /* margin-left: 5px;\r\n    margin-right: 5px; */\r\n}\r\n\r\n.form-control {\r\n    /* background-color: #e7e7e7 */\r\n    background-color: #f4f3ef\r\n}\r\n\r\n.content span {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    border: #cccccc solid 1px;\r\n}\r\n\r\n.painel-container {\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n/* CSS SOCOCO */\r\n\r\n.text-on-pannel-sococo {\r\n    background: #f00 none repeat scroll 0 0;\r\n    height: auto;\r\n    margin-left: 20px;\r\n    padding: 3px 5px;\r\n    position: absolute;\r\n    margin-top: -47px;\r\n    /* border: 1px solid #337ab7; */\r\n    border-radius: 8px;\r\n}\r\n\r\n.title-sococo {\r\n    color: #fff\r\n}\r\n\r\n/* CSS ACQUA */\r\n\r\n.title-acqua {\r\n    color: #fff\r\n}\r\n\r\n.text-on-pannel-acqua {\r\n    background: rgb(21, 199, 110) none repeat scroll 0 0;\r\n    height: auto;\r\n    margin-left: 20px;\r\n    padding: 3px 5px;\r\n    position: absolute;\r\n    margin-top: -47px;\r\n    /* border: 1px solid #337ab7; */\r\n    border-radius: 8px;\r\n}\r\n\r\n/* CSS AMAFIBRA */\r\n\r\n.title-amafibra {\r\n    color: #fff\r\n}\r\n\r\n.text-on-pannel-amafibra {\r\n    background: rgb(189, 154, 0) none repeat scroll 0 0;\r\n    height: auto;\r\n    margin-left: 20px;\r\n    padding: 3px 5px;\r\n    position: absolute;\r\n    margin-top: -47px;\r\n    /* border: 1px solid #337ab7; */\r\n    border-radius: 8px;\r\n}"

/***/ }),

/***/ "./src/app/resumo-diario/resumo-do-dia/resumo-do-dia.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n    <div class=\"row row-painel\">\r\n        <div class=\"col-lg-12 col-md-12 painel-container\" *ngFor=\"let row of dataRows\">\r\n\r\n            <div class=\"data-lancamento col-lg-12\">\r\n                <h5>{{row.dataLancamento}}</h5>\r\n            </div>\r\n\r\n\r\n            <!-- PRODUCAO SOCOCO -->\r\n            <div class=\"card row\">\r\n                <div class=\"header\">\r\n                    <h3 class=\"text-on-pannel-sococo\"><strong class=\"text-uppeercas title-sococo\"> PRODUÇÃO SOCOCO </strong></h3>\r\n                </div>\r\n                <div class=\"content\">\r\n\r\n                    <div class=\"form-group col-lg-6\">\r\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Cocos Desfribrados (und)</label>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"form-control\">{{row.cocosDesfibrados}}</span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-lg-6\">\r\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Cocos Processados (und)</label>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"form-control\">{{row.cocosProcessados}}</span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-lg-6\">\r\n                        <label class=\"col-lg-4 col-form-label form-control-label\">CRI (Kg)</label>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"form-control\">{{row.cri}}</span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-lg-6\">\r\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Flococo (Kg)</label>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"form-control\">{{row.flococo}}</span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-lg-6\">\r\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Óleo Industrial ETE (L)</label>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"form-control\">{{row.oleoIndustrialETE}}</span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-lg-6\">\r\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Óleo Industrial Tipo A (L)</label>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"form-control\">{{row.oleoIndustrialTipoA}}</span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-lg-6\">\r\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Torta - ração (Kg)</label>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"form-control\">{{row.torta}}</span>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <!-- PRODUCAO ACGUA -->\r\n            <div class=\"card row\">\r\n                <div class=\"header\">\r\n                    <h3 class=\"text-on-pannel-acqua text-primary\"><strong class=\"text-uppercase title-acqua\"> PRODUÇÃO ACQUA </strong></h3>\r\n                </div>\r\n                <div class=\"content\">\r\n                    <div class=\"form-group col-lg-6\">\r\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Água de Coco Sococo</label>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"form-control\">{{row.aguaDeCocoSococo}}</span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-lg-6\">\r\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Água de Coco Verde</label>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"form-control\">{{row.aguaDeCocoVerde}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-lg-6\">\r\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Porcentagem de Coco Germinado</label>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"form-control\">{{row.porcentagemCocoGerminado}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-lg-6\">\r\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Total de Cacambas</label>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"form-control\">{{row.totalDeCacambas}}</span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-lg-6\">\r\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Caixa Padrão</label>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"form-control\">{{row.caixaPadrao}}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- PRODUCAO AMAFIBRA -->\r\n            <div class=\"card row\">\r\n                <div class=\"header\">\r\n                    <h3 class=\"text-on-pannel-amafibra text-primary\"><strong class=\"text-uppercase title-amafibra\"> PRODUÇÃO AMAFIBRA </strong></h3>\r\n                </div>\r\n                <div class=\"content\">\r\n                    <div class=\"form-group col-lg-6\">\r\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Número de Fardos</label>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"form-control\">{{row.numeroDeFardos}}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/resumo-diario/resumo-do-dia/resumo-do-dia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumoDoDiaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resumo_diario_service__ = __webpack_require__("./src/app/resumo-diario/resumo-diario.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResumoDoDiaComponent = (function () {
    function ResumoDoDiaComponent(sococoService) {
        this.sococoService = sococoService;
    }
    ResumoDoDiaComponent.prototype.ngOnInit = function () {
        this.listaHeaderRow();
        this.getResumoDiario();
    };
    ResumoDoDiaComponent.prototype.getResumoDiario = function () {
        var _this = this;
        this.sococoService.getResumoDiario()
            .subscribe(function (resumoDiario) {
            _this.dataRows = resumoDiario;
            console.log(_this.dataRows);
        });
    };
    ResumoDoDiaComponent.prototype.listaHeaderRow = function () {
        this.headerRow = ['ID', 'Data', 'Cocos Desfibrados', 'Cocos Processados', 'CRI', 'Flococo', 'O.I. ETE', 'O. I. Tipo A', 'Torta'];
    };
    return ResumoDoDiaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('formulario'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], ResumoDoDiaComponent.prototype, "formulario", void 0);
ResumoDoDiaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-resumo-diario',
        template: __webpack_require__("./src/app/resumo-diario/resumo-do-dia/resumo-do-dia.component.html"),
        styles: [__webpack_require__("./src/app/resumo-diario/resumo-do-dia/resumo-do-dia.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__resumo_diario_service__["a" /* ResumoDiarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resumo_diario_service__["a" /* ResumoDiarioService */]) === "function" && _b || Object])
], ResumoDoDiaComponent);

var _a, _b;
//# sourceMappingURL=resumo-do-dia.component.js.map

/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed-plugin\">\r\n    <div class=\"dropdown show-dropdown\">\r\n        <a href=\"#\" data-toggle=\"dropdown\">\r\n        <i class=\"fa fa-cog fa-2x\"> </i>\r\n        </a>\r\n        <ul class=\"dropdown-menu\">\r\n            <li class=\"header-title\">Sidebar Background</li>\r\n            <li class=\"adjustments-line text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\r\n                        <span class=\"badge filter badge-white active\" data-color=\"white\"></span>\r\n                        <span class=\"badge filter badge-black\" data-color=\"black\"></span>\r\n                </a>\r\n            </li>\r\n\r\n\t\t\t<li class=\"header-title\">Sidebar Active Color</li>\r\n            <li class=\"adjustments-line text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\r\n                        <span class=\"badge filter badge-primary\" data-color=\"primary\"></span>\r\n                        <span class=\"badge filter badge-info\" data-color=\"info\"></span>\r\n                        <span class=\"badge filter badge-success\" data-color=\"success\"></span>\r\n                        <span class=\"badge filter badge-warning\" data-color=\"warning\"></span>\r\n                        <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\r\n                </a>\r\n            </li>\r\n\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedPluginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FixedPluginComponent = (function () {
    function FixedPluginComponent() {
    }
    FixedPluginComponent.prototype.ngOnInit = function () {
        var $sidebar = $('.sidebar');
        var $off_canvas_sidebar = $('.off-canvas-sidebar');
        var window_width = $(window).width();
        if (window_width > 767) {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('.fixed-plugin a').click(function (event) {
            /* Alex if we click on switch, stop propagation of the event,
              so the dropdown will not be hide, otherwise we set the  section active */
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .background-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-background-color', new_color);
            }
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-background-color', new_color);
            }
        });
        $('.fixed-plugin .active-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-active-color', new_color);
            }
            if ($off_canvas_sidebar.length !== 0) {
                $off_canvas_sidebar.attr('data-active-color', new_color);
            }
        });
    };
    return FixedPluginComponent;
}());
FixedPluginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fixedplugin-cmp',
        template: __webpack_require__("./src/app/shared/fixedplugin/fixedplugin.component.html")
    })
], FixedPluginComponent);

//# sourceMappingURL=fixedplugin.component.js.map

/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedPluginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__ = __webpack_require__("./src/app/shared/fixedplugin/fixedplugin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FixedPluginModule = (function () {
    function FixedPluginModule() {
    }
    return FixedPluginModule;
}());
FixedPluginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__["a" /* FixedPluginComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__["a" /* FixedPluginComponent */]]
    })
], FixedPluginModule);

//# sourceMappingURL=fixedplugin.module.js.map

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <div class=\"container-fluid\">\r\n        <!-- <nav class=\"pull-left\">\r\n            <ul>\r\n\r\n                <li>\r\n                    <a href=\"https://www.creative-tim.com\">\r\n                        Creative Tim\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"http://blog.creative-tim.com\">\r\n                       Blog\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://www.creative-tim.com/license\">\r\n                        Licenses\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav> -->\r\n        <div class=\"copyright pull-right\">\r\n            &copy; {{test | date: 'yyyy'}}, desenvolvido por <a href=\"#\">Rayan Teixeira</a>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'footer-cmp',
        template: __webpack_require__("./src/app/shared/footer/footer.component.html")
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "./src/app/shared/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__("./src/app/shared/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
FooterModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]]
    })
], FooterModule);

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ "./src/app/shared/input/input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group col-lg-6\" [class.has-success]=\"hasSuccess()\" [class.has-error]=\"hasError()\">\r\n    <label class=\"col-lg-4 col-form-label form-control-label\">{{label}}</label>\r\n    <div class=\"col-lg-6\">\r\n        <ng-content></ng-content>\r\n        <span class=\"help-block\" *ngIf=\"hasError()\"> <i class=\"ti-alert\"></i> {{errorMessage}}</span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/input/input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputComponent = (function () {
    function InputComponent() {
    }
    InputComponent.prototype.ngOnInit = function () { };
    InputComponent.prototype.ngAfterContentInit = function () {
        this.input = this.model;
        if (this.input === undefined) {
            throw new Error('Esse component precisa ser usado com uma diretiva nhModel');
        }
    };
    InputComponent.prototype.hasSuccess = function () {
        return this.input.valid && (this.input.dirty || this.input.touched);
    };
    InputComponent.prototype.hasError = function () {
        return this.input.invalid && (this.input.dirty || this.input.touched);
    };
    return InputComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputComponent.prototype, "label", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputComponent.prototype, "errorMessage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgModel */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgModel */]) === "function" && _a || Object)
], InputComponent.prototype, "model", void 0);
InputComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input',
        template: __webpack_require__("./src/app/shared/input/input.component.html")
    }),
    __metadata("design:paramtypes", [])
], InputComponent);

var _a;
//# sourceMappingURL=input.component.js.map

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar bar1\"></span>\r\n                <span class=\"icon-bar bar2\"></span>\r\n                <span class=\"icon-bar bar3\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <!-- <li>\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"ti-panel\"></i>\r\n                        <p>Stats</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"ti-bell\"></i>\r\n                        <p class=\"notification\">5</p>\r\n                        <p>Notifications</p>\r\n                        <b class=\"caret\"></b>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\">Notification 1</a></li>\r\n                        <li><a href=\"#\">Notification 2</a></li>\r\n                        <li><a href=\"#\">Notification 3</a></li>\r\n                        <li><a href=\"#\">Notification 4</a></li>\r\n                        <li><a href=\"#\">Another notification</a></li>\r\n                    </ul>\r\n                </li> -->\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <i class=\"ti-settings\"></i>\r\n                        <p>Configurações</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_template_sidebar_sidebar_component__ = __webpack_require__("./src/app/util-template/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(location, renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_2__util_template_sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    return NavbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("navbar-cmp"),
    __metadata("design:type", Object)
], NavbarComponent.prototype, "button", void 0);
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navbar-cmp',
        template: __webpack_require__("./src/app/shared/navbar/navbar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "./src/app/shared/navbar/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__("./src/app/shared/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]]
    })
], NavbarModule);

//# sourceMappingURL=navbar.module.js.map

/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_input_component__ = __webpack_require__("./src/app/shared/input/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* ReactiveFormsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__input_input_component__["a" /* InputComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__input_input_component__["a" /* InputComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__input_input_component__["a" /* InputComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "./src/app/util-template/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"header\">\r\n                        <h4 class=\"title\">320+ Themify Icons</h4>\r\n                        <p class=\"category\">Handcrafted by our friends from <a target=\"_blank\" href=\"https://themify.me/\">Themify</a>.</p>\r\n                    </div>\r\n                    <div class=\"content all-icons\">\r\n\r\n                        <div class=\"icon-section\">\r\n                            <h3>Arrows &amp; Direction Icons </h3>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrow-up\"></span><span class=\"icon-name\"> ti-arrow-up</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrow-right\"></span><span class=\"icon-name\"> ti-arrow-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrow-left\"></span><span class=\"icon-name\"> ti-arrow-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrow-down\"></span><span class=\"icon-name\"> ti-arrow-down</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrows-vertical\"></span><span class=\"icon-name\"> ti-arrows-vertical</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrows-horizontal\"></span><span class=\"icon-name\"> ti-arrows-horizontal</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-angle-up\"></span><span class=\"icon-name\"> ti-angle-up</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-angle-right\"></span><span class=\"icon-name\"> ti-angle-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-angle-left\"></span><span class=\"icon-name\"> ti-angle-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-angle-down\"></span><span class=\"icon-name\"> ti-angle-down</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-angle-double-up\"></span><span class=\"icon-name\"> ti-angle-double-up</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-angle-double-right\"></span><span class=\"icon-name\"> ti-angle-double-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-angle-double-left\"></span><span class=\"icon-name\"> ti-angle-double-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-angle-double-down\"></span><span class=\"icon-name\"> ti-angle-double-down</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-move\"></span><span class=\"icon-name\"> ti-move</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-fullscreen\"></span><span class=\"icon-name\"> ti-fullscreen</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrow-top-right\"></span><span class=\"icon-name\"> ti-arrow-top-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrow-top-left\"></span><span class=\"icon-name\"> ti-arrow-top-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrow-circle-up\"></span><span class=\"icon-name\"> ti-arrow-circle-up</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrow-circle-right\"></span><span class=\"icon-name\"> ti-arrow-circle-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrow-circle-left\"></span><span class=\"icon-name\"> ti-arrow-circle-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrow-circle-down\"></span><span class=\"icon-name\"> ti-arrow-circle-down</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-arrows-corner\"></span><span class=\"icon-name\"> ti-arrows-corner</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-split-v\"></span><span class=\"icon-name\"> ti-split-v</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-split-v-alt\"></span><span class=\"icon-name\"> ti-split-v-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-split-h\"></span><span class=\"icon-name\"> ti-split-h</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-hand-point-up\"></span><span class=\"icon-name\"> ti-hand-point-up</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-hand-point-right\"></span><span class=\"icon-name\"> ti-hand-point-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-hand-point-left\"></span><span class=\"icon-name\"> ti-hand-point-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-hand-point-down\"></span><span class=\"icon-name\"> ti-hand-point-down</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-back-right\"></span><span class=\"icon-name\"> ti-back-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-back-left\"></span><span class=\"icon-name\"> ti-back-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-exchange-vertical\"></span><span class=\"icon-name\"> ti-exchange-vertical</span>\r\n                            </div>\r\n\r\n                        </div> <!-- Arrows Icons -->\r\n\r\n\r\n\r\n                        <h3>Web App Icons</h3>\r\n\r\n                        <div class=\"icon-section\">\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-wand\"></span><span class=\"icon-name\"> ti-wand</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-save\"></span><span class=\"icon-name\"> ti-save</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-save-alt\"></span><span class=\"icon-name\"> ti-save-alt</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-direction\"></span><span class=\"icon-name\"> ti-direction</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-direction-alt\"></span><span class=\"icon-name\"> ti-direction-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-user\"></span><span class=\"icon-name\"> ti-user</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-link\"></span><span class=\"icon-name\"> ti-link</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-unlink\"></span><span class=\"icon-name\"> ti-unlink</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-trash\"></span><span class=\"icon-name\"> ti-trash</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-target\"></span><span class=\"icon-name\"> ti-target</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-tag\"></span><span class=\"icon-name\"> ti-tag</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-desktop\"></span><span class=\"icon-name\"> ti-desktop</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-tablet\"></span><span class=\"icon-name\"> ti-tablet</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-mobile\"></span><span class=\"icon-name\"> ti-mobile</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-email\"></span><span class=\"icon-name\"> ti-email</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-star\"></span><span class=\"icon-name\"> ti-star</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-spray\"></span><span class=\"icon-name\"> ti-spray</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-signal\"></span><span class=\"icon-name\"> ti-signal</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-shopping-cart\"></span><span class=\"icon-name\"> ti-shopping-cart</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-shopping-cart-full\"></span><span class=\"icon-name\"> ti-shopping-cart-full</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-settings\"></span><span class=\"icon-name\"> ti-settings</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-search\"></span><span class=\"icon-name\"> ti-search</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-zoom-in\"></span><span class=\"icon-name\"> ti-zoom-in</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-zoom-out\"></span><span class=\"icon-name\"> ti-zoom-out</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-cut\"></span><span class=\"icon-name\"> ti-cut</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-ruler\"></span><span class=\"icon-name\"> ti-ruler</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-ruler-alt-2\"></span><span class=\"icon-name\"> ti-ruler-alt-2</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-ruler-pencil\"></span><span class=\"icon-name\"> ti-ruler-pencil</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-ruler-alt\"></span><span class=\"icon-name\"> ti-ruler-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-bookmark\"></span><span class=\"icon-name\"> ti-bookmark</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-bookmark-alt\"></span><span class=\"icon-name\"> ti-bookmark-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-reload\"></span><span class=\"icon-name\"> ti-reload</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-plus\"></span><span class=\"icon-name\"> ti-plus</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-minus\"></span><span class=\"icon-name\"> ti-minus</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-close\"></span><span class=\"icon-name\"> ti-close</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-pin\"></span><span class=\"icon-name\"> ti-pin</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-pencil\"></span><span class=\"icon-name\"> ti-pencil</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-pencil-alt\"></span><span class=\"icon-name\"> ti-pencil-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-paint-roller\"></span><span class=\"icon-name\"> ti-paint-roller</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-paint-bucket\"></span><span class=\"icon-name\"> ti-paint-bucket</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-na\"></span><span class=\"icon-name\"> ti-na</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-medall\"></span><span class=\"icon-name\"> ti-medall</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-medall-alt\"></span><span class=\"icon-name\"> ti-medall-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-marker\"></span><span class=\"icon-name\"> ti-marker</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-marker-alt\"></span><span class=\"icon-name\"> ti-marker-alt</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-lock\"></span><span class=\"icon-name\"> ti-lock</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-unlock\"></span><span class=\"icon-name\"> ti-unlock</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-location-arrow\"></span><span class=\"icon-name\"> ti-location-arrow</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout\"></span><span class=\"icon-name\"> ti-layout</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layers\"></span><span class=\"icon-name\"> ti-layers</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layers-alt\"></span><span class=\"icon-name\"> ti-layers-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-key\"></span><span class=\"icon-name\"> ti-key</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-image\"></span><span class=\"icon-name\"> ti-image</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-heart\"></span><span class=\"icon-name\"> ti-heart</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-heart-broken\"></span><span class=\"icon-name\"> ti-heart-broken</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-hand-stop\"></span><span class=\"icon-name\"> ti-hand-stop</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-hand-open\"></span><span class=\"icon-name\"> ti-hand-open</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-hand-drag\"></span><span class=\"icon-name\"> ti-hand-drag</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-flag\"></span><span class=\"icon-name\"> ti-flag</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-flag-alt\"></span><span class=\"icon-name\"> ti-flag-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-flag-alt-2\"></span><span class=\"icon-name\"> ti-flag-alt-2</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-eye\"></span><span class=\"icon-name\"> ti-eye</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-import\"></span><span class=\"icon-name\"> ti-import</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-export\"></span><span class=\"icon-name\"> ti-export</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-cup\"></span><span class=\"icon-name\"> ti-cup</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-crown\"></span><span class=\"icon-name\"> ti-crown</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-comments\"></span><span class=\"icon-name\"> ti-comments</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-comment\"></span><span class=\"icon-name\"> ti-comment</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-comment-alt\"></span><span class=\"icon-name\"> ti-comment-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-thought\"></span><span class=\"icon-name\"> ti-thought</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-clip\"></span><span class=\"icon-name\"> ti-clip</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-check\"></span><span class=\"icon-name\"> ti-check</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-check-box\"></span><span class=\"icon-name\"> ti-check-box</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-camera\"></span><span class=\"icon-name\"> ti-camera</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-announcement\"></span><span class=\"icon-name\"> ti-announcement</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-brush\"></span><span class=\"icon-name\"> ti-brush</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-brush-alt\"></span><span class=\"icon-name\"> ti-brush-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-palette\"></span><span class=\"icon-name\"> ti-palette</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-briefcase\"></span><span class=\"icon-name\"> ti-briefcase</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-bolt\"></span><span class=\"icon-name\"> ti-bolt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-bolt-alt\"></span><span class=\"icon-name\"> ti-bolt-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-blackboard\"></span><span class=\"icon-name\"> ti-blackboard</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-bag\"></span><span class=\"icon-name\"> ti-bag</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-world\"></span><span class=\"icon-name\"> ti-world</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-wheelchair\"></span><span class=\"icon-name\"> ti-wheelchair</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-car\"></span><span class=\"icon-name\"> ti-car</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-truck\"></span><span class=\"icon-name\"> ti-truck</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-timer\"></span><span class=\"icon-name\"> ti-timer</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-ticket\"></span><span class=\"icon-name\"> ti-ticket</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-thumb-up\"></span><span class=\"icon-name\"> ti-thumb-up</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-thumb-down\"></span><span class=\"icon-name\"> ti-thumb-down</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-stats-up\"></span><span class=\"icon-name\"> ti-stats-up</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-stats-down\"></span><span class=\"icon-name\"> ti-stats-down</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-shine\"></span><span class=\"icon-name\"> ti-shine</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-shift-right\"></span><span class=\"icon-name\"> ti-shift-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-shift-left\"></span><span class=\"icon-name\"> ti-shift-left</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-shift-right-alt\"></span><span class=\"icon-name\"> ti-shift-right-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-shift-left-alt\"></span><span class=\"icon-name\"> ti-shift-left-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-shield\"></span><span class=\"icon-name\"> ti-shield</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-notepad\"></span><span class=\"icon-name\"> ti-notepad</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-server\"></span><span class=\"icon-name\"> ti-server</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-pulse\"></span><span class=\"icon-name\"> ti-pulse</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-printer\"></span><span class=\"icon-name\"> ti-printer</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-power-off\"></span><span class=\"icon-name\"> ti-power-off</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-plug\"></span><span class=\"icon-name\"> ti-plug</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-pie-chart\"></span><span class=\"icon-name\"> ti-pie-chart</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-panel\"></span><span class=\"icon-name\"> ti-panel</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-package\"></span><span class=\"icon-name\"> ti-package</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-music\"></span><span class=\"icon-name\"> ti-music</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-music-alt\"></span><span class=\"icon-name\"> ti-music-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-mouse\"></span><span class=\"icon-name\"> ti-mouse</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-mouse-alt\"></span><span class=\"icon-name\"> ti-mouse-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-money\"></span><span class=\"icon-name\"> ti-money</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-microphone\"></span><span class=\"icon-name\"> ti-microphone</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-menu\"></span><span class=\"icon-name\"> ti-menu</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-menu-alt\"></span><span class=\"icon-name\"> ti-menu-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-map\"></span><span class=\"icon-name\"> ti-map</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-map-alt\"></span><span class=\"icon-name\"> ti-map-alt</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-location-pin\"></span><span class=\"icon-name\"> ti-location-pin</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-light-bulb\"></span><span class=\"icon-name\"> ti-light-bulb</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-info\"></span><span class=\"icon-name\"> ti-info</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-infinite\"></span><span class=\"icon-name\"> ti-infinite</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-id-badge\"></span><span class=\"icon-name\"> ti-id-badge</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-hummer\"></span><span class=\"icon-name\"> ti-hummer</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-home\"></span><span class=\"icon-name\"> ti-home</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-help\"></span><span class=\"icon-name\"> ti-help</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-headphone\"></span><span class=\"icon-name\"> ti-headphone</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-harddrives\"></span><span class=\"icon-name\"> ti-harddrives</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-harddrive\"></span><span class=\"icon-name\"> ti-harddrive</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-gift\"></span><span class=\"icon-name\"> ti-gift</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-game\"></span><span class=\"icon-name\"> ti-game</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-filter\"></span><span class=\"icon-name\"> ti-filter</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-files\"></span><span class=\"icon-name\"> ti-files</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-file\"></span><span class=\"icon-name\"> ti-file</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-zip\"></span><span class=\"icon-name\"> ti-zip</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-folder\"></span><span class=\"icon-name\"> ti-folder</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-envelope\"></span><span class=\"icon-name\"> ti-envelope</span>\r\n                            </div>\r\n\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-dashboard\"></span><span class=\"icon-name\"> ti-dashboard</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-cloud\"></span><span class=\"icon-name\"> ti-cloud</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-cloud-up\"></span><span class=\"icon-name\"> ti-cloud-up</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-cloud-down\"></span><span class=\"icon-name\"> ti-cloud-down</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-clipboard\"></span><span class=\"icon-name\"> ti-clipboard</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-calendar\"></span><span class=\"icon-name\"> ti-calendar</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-book\"></span><span class=\"icon-name\"> ti-book</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-bell\"></span><span class=\"icon-name\"> ti-bell</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-basketball\"></span><span class=\"icon-name\"> ti-basketball</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-bar-chart\"></span><span class=\"icon-name\"> ti-bar-chart</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-bar-chart-alt\"></span><span class=\"icon-name\"> ti-bar-chart-alt</span>\r\n                            </div>\r\n\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-archive\"></span><span class=\"icon-name\"> ti-archive</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-anchor\"></span><span class=\"icon-name\"> ti-anchor</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-alert\"></span><span class=\"icon-name\"> ti-alert</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-alarm-clock\"></span><span class=\"icon-name\"> ti-alarm-clock</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-agenda\"></span><span class=\"icon-name\"> ti-agenda</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-write\"></span><span class=\"icon-name\"> ti-write</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-wallet\"></span><span class=\"icon-name\"> ti-wallet</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-video-clapper\"></span><span class=\"icon-name\"> ti-video-clapper</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-video-camera\"></span><span class=\"icon-name\"> ti-video-camera</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-vector\"></span><span class=\"icon-name\"> ti-vector</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-support\"></span><span class=\"icon-name\"> ti-support</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-stamp\"></span><span class=\"icon-name\"> ti-stamp</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-slice\"></span><span class=\"icon-name\"> ti-slice</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-shortcode\"></span><span class=\"icon-name\"> ti-shortcode</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-receipt\"></span><span class=\"icon-name\"> ti-receipt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-pin2\"></span><span class=\"icon-name\"> ti-pin2</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-pin-alt\"></span><span class=\"icon-name\"> ti-pin-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-pencil-alt2\"></span><span class=\"icon-name\"> ti-pencil-alt2</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-eraser\"></span><span class=\"icon-name\"> ti-eraser</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-more\"></span><span class=\"icon-name\"> ti-more</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-more-alt\"></span><span class=\"icon-name\"> ti-more-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-microphone-alt\"></span><span class=\"icon-name\"> ti-microphone-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-magnet\"></span><span class=\"icon-name\"> ti-magnet</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-line-double\"></span><span class=\"icon-name\"> ti-line-double</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-line-dotted\"></span><span class=\"icon-name\"> ti-line-dotted</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-line-dashed\"></span><span class=\"icon-name\"> ti-line-dashed</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-ink-pen\"></span><span class=\"icon-name\"> ti-ink-pen</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-info-alt\"></span><span class=\"icon-name\"> ti-info-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-help-alt\"></span><span class=\"icon-name\"> ti-help-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-headphone-alt\"></span><span class=\"icon-name\"> ti-headphone-alt</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-gallery\"></span><span class=\"icon-name\"> ti-gallery</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-face-smile\"></span><span class=\"icon-name\"> ti-face-smile</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-face-sad\"></span><span class=\"icon-name\"> ti-face-sad</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-credit-card\"></span><span class=\"icon-name\"> ti-credit-card</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-comments-smiley\"></span><span class=\"icon-name\"> ti-comments-smiley</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-time\"></span><span class=\"icon-name\"> ti-time</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-share\"></span><span class=\"icon-name\"> ti-share</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-share-alt\"></span><span class=\"icon-name\"> ti-share-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-rocket\"></span><span class=\"icon-name\"> ti-rocket</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-new-window\"></span><span class=\"icon-name\"> ti-new-window</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-rss\"></span><span class=\"icon-name\"> ti-rss</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-rss-alt\"></span><span class=\"icon-name\"> ti-rss-alt</span>\r\n                            </div>\r\n\r\n                        </div><!-- Web App Icons -->\r\n\r\n\r\n                        <div class=\"icon-section\">\r\n                            <h3>Control Icons</h3>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-control-stop\"></span><span class=\"icon-name\"> ti-control-stop</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-control-shuffle\"></span><span class=\"icon-name\"> ti-control-shuffle</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-control-play\"></span><span class=\"icon-name\"> ti-control-play</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-control-pause\"></span><span class=\"icon-name\"> ti-control-pause</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-control-forward\"></span><span class=\"icon-name\"> ti-control-forward</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-control-backward\"></span><span class=\"icon-name\"> ti-control-backward</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-volume\"></span><span class=\"icon-name\"> ti-volume</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-control-skip-forward\"></span><span class=\"icon-name\"> ti-control-skip-forward</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-control-skip-backward\"></span><span class=\"icon-name\"> ti-control-skip-backward</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-control-record\"></span><span class=\"icon-name\"> ti-control-record</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-control-eject\"></span><span class=\"icon-name\"> ti-control-eject</span>\r\n                            </div>\r\n                        </div> <!-- Control Icons -->\r\n\r\n\r\n                        <div class=\"icon-section\">\r\n                            <h3>Text Editor</h3>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-paragraph\"></span><span class=\"icon-name\"> ti-paragraph</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-uppercase\"></span><span class=\"icon-name\"> ti-uppercase</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-underline\"></span><span class=\"icon-name\"> ti-underline</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-text\"></span><span class=\"icon-name\"> ti-text</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-Italic\"></span><span class=\"icon-name\"> ti-Italic</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-smallcap\"></span><span class=\"icon-name\"> ti-smallcap</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-list\"></span><span class=\"icon-name\"> ti-list</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-list-ol\"></span><span class=\"icon-name\"> ti-list-ol</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-align-right\"></span><span class=\"icon-name\"> ti-align-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-align-left\"></span><span class=\"icon-name\"> ti-align-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-align-justify\"></span><span class=\"icon-name\"> ti-align-justify</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-align-center\"></span><span class=\"icon-name\"> ti-align-center</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-quote-right\"></span><span class=\"icon-name\"> ti-quote-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-quote-left\"></span><span class=\"icon-name\"> ti-quote-left</span>\r\n                            </div>\r\n\r\n                        </div> <!-- Text Editor -->\r\n\r\n\r\n\r\n                        <div class=\"icon-section\">\r\n                            <h3>Layout Icons</h3>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-width-full\"></span><span class=\"icon-name\"> ti-layout-width-full</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-width-default\"></span><span class=\"icon-name\"> ti-layout-width-default</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-width-default-alt\"></span><span class=\"icon-name\"> ti-layout-width-default-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-tab\"></span><span class=\"icon-name\"> ti-layout-tab</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-tab-window\"></span><span class=\"icon-name\"> ti-layout-tab-window</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-tab-v\"></span><span class=\"icon-name\"> ti-layout-tab-v</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-tab-min\"></span><span class=\"icon-name\"> ti-layout-tab-min</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-slider\"></span><span class=\"icon-name\"> ti-layout-slider</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-slider-alt\"></span><span class=\"icon-name\"> ti-layout-slider-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-sidebar-right\"></span><span class=\"icon-name\"> ti-layout-sidebar-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-sidebar-none\"></span><span class=\"icon-name\"> ti-layout-sidebar-none</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-sidebar-left\"></span><span class=\"icon-name\"> ti-layout-sidebar-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-placeholder\"></span><span class=\"icon-name\"> ti-layout-placeholder</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-menu\"></span><span class=\"icon-name\"> ti-layout-menu</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-menu-v\"></span><span class=\"icon-name\"> ti-layout-menu-v</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-menu-separated\"></span><span class=\"icon-name\"> ti-layout-menu-separated</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-menu-full\"></span><span class=\"icon-name\"> ti-layout-menu-full</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-media-right\"></span><span class=\"icon-name\"> ti-layout-media-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-media-right-alt\"></span><span class=\"icon-name\"> ti-layout-media-right-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-media-overlay\"></span><span class=\"icon-name\"> ti-layout-media-overlay</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-media-overlay-alt\"></span><span class=\"icon-name\"> ti-layout-media-overlay-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-media-overlay-alt-2\"></span><span class=\"icon-name\"> ti-layout-media-overlay-alt-2</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-media-left\"></span><span class=\"icon-name\"> ti-layout-media-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-media-left-alt\"></span><span class=\"icon-name\"> ti-layout-media-left-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-media-center\"></span><span class=\"icon-name\"> ti-layout-media-center</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-media-center-alt\"></span><span class=\"icon-name\"> ti-layout-media-center-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-list-thumb\"></span><span class=\"icon-name\"> ti-layout-list-thumb</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-list-thumb-alt\"></span><span class=\"icon-name\"> ti-layout-list-thumb-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-list-post\"></span><span class=\"icon-name\"> ti-layout-list-post</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-list-large-image\"></span><span class=\"icon-name\"> ti-layout-list-large-image</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-line-solid\"></span><span class=\"icon-name\"> ti-layout-line-solid</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-grid4\"></span><span class=\"icon-name\"> ti-layout-grid4</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-grid3\"></span><span class=\"icon-name\"> ti-layout-grid3</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-grid2\"></span><span class=\"icon-name\"> ti-layout-grid2</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-grid2-thumb\"></span><span class=\"icon-name\"> ti-layout-grid2-thumb</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-cta-right\"></span><span class=\"icon-name\"> ti-layout-cta-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-cta-left\"></span><span class=\"icon-name\"> ti-layout-cta-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-cta-center\"></span><span class=\"icon-name\"> ti-layout-cta-center</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-cta-btn-right\"></span><span class=\"icon-name\"> ti-layout-cta-btn-right</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-cta-btn-left\"></span><span class=\"icon-name\"> ti-layout-cta-btn-left</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-column4\"></span><span class=\"icon-name\"> ti-layout-column4</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-column3\"></span><span class=\"icon-name\"> ti-layout-column3</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-column2\"></span><span class=\"icon-name\"> ti-layout-column2</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-accordion-separated\"></span><span class=\"icon-name\"> ti-layout-accordion-separated</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-accordion-merged\"></span><span class=\"icon-name\"> ti-layout-accordion-merged</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-accordion-list\"></span><span class=\"icon-name\"> ti-layout-accordion-list</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-widgetized\"></span><span class=\"icon-name\"> ti-widgetized</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-widget\"></span><span class=\"icon-name\"> ti-widget</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-widget-alt\"></span><span class=\"icon-name\"> ti-widget-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-view-list\"></span><span class=\"icon-name\"> ti-view-list</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-view-list-alt\"></span><span class=\"icon-name\"> ti-view-list-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-view-grid\"></span><span class=\"icon-name\"> ti-view-grid</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-upload\"></span><span class=\"icon-name\"> ti-upload</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-download\"></span><span class=\"icon-name\"> ti-download</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-loop\"></span><span class=\"icon-name\"> ti-loop</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-sidebar-2\"></span><span class=\"icon-name\"> ti-layout-sidebar-2</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-grid4-alt\"></span><span class=\"icon-name\"> ti-layout-grid4-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-grid3-alt\"></span><span class=\"icon-name\"> ti-layout-grid3-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-grid2-alt\"></span><span class=\"icon-name\"> ti-layout-grid2-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-column4-alt\"></span><span class=\"icon-name\"> ti-layout-column4-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-column3-alt\"></span><span class=\"icon-name\"> ti-layout-column3-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-layout-column2-alt\"></span><span class=\"icon-name\"> ti-layout-column2-alt</span>\r\n                            </div>\r\n\r\n\r\n                        </div> <!-- Layout Icons -->\r\n\r\n\r\n                        <div class=\"icon-section\">\r\n                            <h3>Brand Icons</h3>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-flickr\"></span><span class=\"icon-name\"> ti-flickr</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-flickr-alt\"></span><span class=\"icon-name\"> ti-flickr-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-instagram\"></span><span class=\"icon-name\"> ti-instagram</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-google\"></span><span class=\"icon-name\"> ti-google</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-github\"></span><span class=\"icon-name\"> ti-github</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-facebook\"></span><span class=\"icon-name\"> ti-facebook</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-dropbox\"></span><span class=\"icon-name\"> ti-dropbox</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-dropbox-alt\"></span><span class=\"icon-name\"> ti-dropbox-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-dribbble\"></span><span class=\"icon-name\"> ti-dribbble</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-apple\"></span><span class=\"icon-name\"> ti-apple</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-android\"></span><span class=\"icon-name\"> ti-android</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-yahoo\"></span><span class=\"icon-name\"> ti-yahoo</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-trello\"></span><span class=\"icon-name\"> ti-trello</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-stack-overflow\"></span><span class=\"icon-name\"> ti-stack-overflow</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-soundcloud\"></span><span class=\"icon-name\"> ti-soundcloud</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-sharethis\"></span><span class=\"icon-name\"> ti-sharethis</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-sharethis-alt\"></span><span class=\"icon-name\"> ti-sharethis-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-reddit\"></span><span class=\"icon-name\"> ti-reddit</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-microsoft\"></span><span class=\"icon-name\"> ti-microsoft</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-microsoft-alt\"></span><span class=\"icon-name\"> ti-microsoft-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-linux\"></span><span class=\"icon-name\"> ti-linux</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-jsfiddle\"></span><span class=\"icon-name\"> ti-jsfiddle</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-joomla\"></span><span class=\"icon-name\"> ti-joomla</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-html5\"></span><span class=\"icon-name\"> ti-html5</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-css3\"></span><span class=\"icon-name\"> ti-css3</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-drupal\"></span><span class=\"icon-name\"> ti-drupal</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-wordpress\"></span><span class=\"icon-name\"> ti-wordpress</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-tumblr\"></span><span class=\"icon-name\"> ti-tumblr</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-tumblr-alt\"></span><span class=\"icon-name\"> ti-tumblr-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-skype\"></span><span class=\"icon-name\"> ti-skype</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-youtube\"></span><span class=\"icon-name\"> ti-youtube</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-vimeo\"></span><span class=\"icon-name\"> ti-vimeo</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-vimeo-alt\"></span><span class=\"icon-name\"> ti-vimeo-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-twitter\"></span><span class=\"icon-name\"> ti-twitter</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-twitter-alt\"></span><span class=\"icon-name\"> ti-twitter-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-linkedin\"></span><span class=\"icon-name\"> ti-linkedin</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-pinterest\"></span><span class=\"icon-name\"> ti-pinterest</span>\r\n                            </div>\r\n\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-pinterest-alt\"></span><span class=\"icon-name\"> ti-pinterest-alt</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-themify-logo\"></span><span class=\"icon-name\"> ti-themify-logo</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-themify-favicon\"></span><span class=\"icon-name\"> ti-themify-favicon</span>\r\n                            </div>\r\n                            <div class=\"icon-container\">\r\n                                <span class=\"ti-themify-favicon-alt\"></span><span class=\"icon-name\"> ti-themify-favicon-alt</span>\r\n                            </div>\r\n\r\n                        </div> <!-- brand Icons -->\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/util-template/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconsComponent = (function () {
    function IconsComponent() {
    }
    return IconsComponent;
}());
IconsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'icons-cmp',
        template: __webpack_require__("./src/app/util-template/icons/icons.component.html")
    })
], IconsComponent);

//# sourceMappingURL=icons.component.js.map

/***/ }),

/***/ "./src/app/util-template/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"card card-map\">\r\n        <div class=\"header\">\r\n            <h4 class=\"title\">Google Maps</h4>\r\n        </div>\r\n        <ngui-map zoom=\"13\" center=\"40.748817,-73.985428\" >\r\n         <marker [position]=\"[40.748817,-73.985428]\"></marker>\r\n           <map-circle\r\n               [center]=\"{lat: 40.748817, lng: -73.985428}\">\r\n           </map-circle>\r\n       </ngui-map>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/util-template/maps/maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapsComponent = (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        // var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        // var mapOptions = {
        //   zoom: 13,
        //   center: myLatlng,
        //   scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        //   styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]
        //
        // }
        // var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        //
        // var marker = new google.maps.Marker({
        //     position: myLatlng,
        //     title:"Hello World!"
        // });
        //
        // // To add the marker to the map, call setMap();
        // marker.setMap(map);
    };
    return MapsComponent;
}());
MapsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'maps-cmp',
        template: __webpack_require__("./src/app/util-template/maps/maps.component.html")
    })
], MapsComponent);

//# sourceMappingURL=maps.component.js.map

/***/ }),

/***/ "./src/app/util-template/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\r\n        <div class=\"card\">\r\n            <div class=\"header\">\r\n                <h4 class=\"title\">Notifications</h4>\r\n                <p class=\"category\">Handcrafted by our friend <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a></p>\r\n\r\n            </div>\r\n            <div class=\"content\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <h5>Notifications Style</h5>\r\n                        <div class=\"alert alert-info\">\r\n                            <span>This is a plain notification</span>\r\n                        </div>\r\n                        <div class=\"alert alert-info\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span>This is a notification with close button.</span>\r\n                        </div>\r\n                        <div class=\"alert alert-info\" data-notify=\"container\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span data-notify=\"icon\" class=\"ti-bell\"></span>\r\n                            <span data-notify=\"message\">This is a notification with close button and icon.</span>\r\n                        </div>\r\n                        <div class=\"alert alert-info\" data-notify=\"container\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span data-notify=\"icon\" class=\"ti-pie-chart\"></span>\r\n                            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <h5>Notification states</h5>\r\n                        <div class=\"alert alert-info\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Info - </b> This is a regular notification made with \".alert-info\"</span>\r\n                        </div>\r\n                        <div class=\"alert alert-success\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Success - </b> This is a regular notification made with \".alert-success\"</span>\r\n                        </div>\r\n                        <div class=\"alert alert-warning\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\r\n                        </div>\r\n                        <div class=\"alert alert-danger\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n                <br>\r\n                <div class=\"places-buttons\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-9\">\r\n                            <h5>Notifications Places\r\n                                <p class=\"category\">Click to view notifications</p>\r\n                            </h5>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\">\r\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\">\r\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/util-template/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationsComponent = (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "ti-gift",
            message: "Welcome to <b>Paper Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'notifications-cmp',
        template: __webpack_require__("./src/app/util-template/notifications/notifications.component.html")
    })
], NotificationsComponent);

//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ "./src/app/util-template/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-wrapper\">\r\n    <div class=\"logo\">\r\n        <a href=\"/dashboard\" class=\"simple-text\">\r\n            <!-- <div class=\"logo-img\">\r\n                <img src=\"../../assets/img/angular2-logo.png\" alt=\"\">\r\n            </div> -->\r\n            Relatórios de Produção\r\n        </a>\r\n    </div>\r\n    <ul class=\"nav\">\r\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\r\n            <a [routerLink]=\"[menuItem.path]\">\r\n                <i class=\"{{menuItem.icon}}\"></i>\r\n                <p>{{menuItem.title}}</p>\r\n            </a>\r\n        </li>\r\n        <li class=\"divider\" *ngIf=\"isNotMobileMenu()\"></li>\r\n        <!-- <li *ngIf=\"isNotMobileMenu()\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <i class=\"ti-panel\"></i>\r\n                <p>Stats</p>\r\n            </a>\r\n        </li>\r\n        <li class=\"dropdown\" *ngIf=\"isNotMobileMenu()\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <i class=\"ti-bell\"></i>\r\n                <p class=\"notification\">5</p>\r\n                <p>Notifications</p>\r\n                <b class=\"caret\"></b>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n                <li>\r\n                    <a href=\"#\">Notification 1</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Notification 2</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Notification 3</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Notification 4</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">Another notification</a>\r\n                </li>\r\n            </ul>\r\n        </li> -->\r\n        <li *ngIf=\"isNotMobileMenu()\">\r\n            <a href=\"#\">\r\n                <i class=\"ti-settings\"></i>\r\n                <p>Configurações</p>\r\n            </a>\r\n        </li>\r\n\r\n\r\n\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/util-template/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ROUTES = [
    { path: 'resumo-do-dia', title: 'Resumo Diário', icon: 'ti-view-list-alt', class: '' },
    { path: 'lancamento-do-dia', title: 'Lancamento', icon: 'ti-view-list-alt', class: '' },
    { path: 'dashboard', title: 'Dashboard (beta)', icon: 'ti-panel', class: '', },
];
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sidebar-cmp',
        template: __webpack_require__("./src/app/util-template/sidebar/sidebar.component.html"),
    })
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "./src/app/util-template/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__("./src/app/util-template/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
SidebarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]]
    })
], SidebarModule);

//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ "./src/app/util-template/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"header\">\r\n                    <h4 class=\"title\">Striped Table</h4>\r\n                    <p class=\"category\">Here is a subtitle for this table</p>\r\n                </div>\r\n                <div class=\"content table-responsive table-full-width\">\r\n                    <table class=\"table table-striped\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let row of tableData1.dataRows\">\r\n                                <td *ngFor=\"let cell of row\">{{cell}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card card-plain\">\r\n                <div class=\"header\">\r\n                    <h4 class=\"title\">Table on Plain Background</h4>\r\n                    <p class=\"category\">Here is a subtitle for this table</p>\r\n                </div>\r\n                <div class=\"content table-responsive table-full-width\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th *ngFor=\"let cell of tableData2.headerRow\">{{ cell }}</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let row of tableData2.dataRows\">\r\n                                <td *ngFor=\"let cell of row\">{{cell}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/util-template/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TableComponent = (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['ID', 'Name', 'Country', 'City', 'Salary'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };
        this.tableData2 = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten',],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester']
            ]
        };
    };
    return TableComponent;
}());
TableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'table-cmp',
        template: __webpack_require__("./src/app/util-template/table/table.component.html")
    })
], TableComponent);

//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ "./src/app/util-template/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"header\">\r\n                        <h4 class=\"title\">Paper Dashboard Headings</h4>\r\n                        <p class=\"category\">Created using <a href=\"https://www.google.com/fonts/specimen/Muli\">Muli</a> Font Family</p>\r\n                    </div>\r\n                    <div class=\"content\">\r\n\r\n                        <div class=\"typo-line\">\r\n                            <h1><p class=\"category\">Header 1</p>Paper Dashboard Heading </h1>\r\n                        </div>\r\n\r\n                            <div class=\"typo-line\">\r\n                            <h2><p class=\"category\">Header 2</p>Paper Dashboard Heading </h2>\r\n                        </div>\r\n                        <div class=\"typo-line\">\r\n                            <h3><p class=\"category\">Header 3</p>Paper Dashboard Heading </h3>\r\n                        </div>\r\n                        <div class=\"typo-line\">\r\n                            <h4><p class=\"category\">Header 4</p>Paper Dashboard Heading </h4>\r\n                        </div>\r\n                        <div class=\"typo-line\">\r\n                            <h5><p class=\"category\">Header 5</p>Paper Dashboard Heading </h5>\r\n                        </div>\r\n                         <div class=\"typo-line\">\r\n                            <h6><p class=\"category\">Header 6</p>Paper Dashboard Heading </h6>\r\n                        </div>\r\n                        <div class=\"typo-line\">\r\n                            <p><span class=\"category\">Paragraph</span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>\r\n                        </div>\r\n                        <div class=\"typo-line\">\r\n                            <p class=\"category\">Quote</p>\r\n                            <blockquote>\r\n                             <p>\r\n                             Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.\r\n                             </p>\r\n                             <small>\r\n                             Steve Jobs, CEO Apple\r\n                             </small>\r\n                            </blockquote>\r\n                        </div>\r\n\r\n                        <div class=\"typo-line\">\r\n                            <p class=\"category\">Muted Text</p>\r\n                            <p class=\"text-muted\">\r\n                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"typo-line\">\r\n                            <!--\r\n                             there are also \"text-info\", \"text-success\", \"text-warning\", \"text-danger\" clases for the text\r\n                             -->\r\n                            <p class=\"category\">Coloured Text</p>\r\n                            <p class=\"text-primary\">\r\n                                Text Primary - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\r\n                            </p>\r\n                            <p class=\"text-info\">\r\n                                Text Info - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\r\n                            </p>\r\n                            <p class=\"text-success\">\r\n                                Text Success - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\r\n                            </p>\r\n                            <p class=\"text-warning\">\r\n                                Text Warning - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\r\n                            </p>\r\n                            <p class=\"text-danger\">\r\n                                Text Danger - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\r\n                            </p>\r\n                        </div>\r\n\r\n                        <div class=\"typo-line\">\r\n                            <h2><p class=\"category\">Small Tag</p>Header with small subtitle <br><small>\".small\" is a tag for the headers</small> </h2>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/util-template/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TypographyComponent = (function () {
    function TypographyComponent() {
    }
    return TypographyComponent;
}());
TypographyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'typography-cmp',
        template: __webpack_require__("./src/app/util-template/typography/typography.component.html")
    })
], TypographyComponent);

//# sourceMappingURL=typography.component.js.map

/***/ }),

/***/ "./src/app/util-template/upgrade/upgrade.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 col-md-offset-2\">\r\n                <div class=\"card\">\r\n                    <div class=\"header text-center\">\r\n                        <h3 class=\"title\">Paper Dashboard</h3>\r\n                        <p class=\"category\">Are you looking for more components? Please check our Premium Version of Paper Dashboard Pro.</p>\r\n                        <br>\r\n                    </div>\r\n                    <div class=\"content table-responsive table-full-width table-upgrade\">\r\n                        <table class=\"table\">\r\n                            <thead>\r\n                                <th></th>\r\n                                <th class=\"text-center\">Free</th>\r\n                                <th class=\"text-center\">PRO</th>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>Components</td>\r\n                                    <td>16</td>\r\n                                    <td>160</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Plugins</td>\r\n                                    <td>4</td>\r\n                                    <td>15</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Example Pages</td>\r\n                                    <td>4</td>\r\n                                    <td>25</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Documentation</td>\r\n                                    <td><i class=\"fa fa-times text-danger\"></i></td>\r\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>SASS Files</td>\r\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\r\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Login/Register/Lock Pages</td>\r\n                                    <td><i class=\"fa fa-times text-danger\"></i></td>\r\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Premium Support</td>\r\n                                    <td><i class=\"fa fa-times text-danger\"></i></td>\r\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td>Free</td>\r\n                                    <td>Just $49</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td>\r\n                                        <a href=\"#\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\r\n                                    </td>\r\n                                    <td>\r\n                                        <a target=\"_blank\" href=\"https://www.creative-tim.com/product/paper-dashboard-pro-angular/?ref=pd-free-upgrade-live\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/util-template/upgrade/upgrade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UpgradeComponent = (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    return UpgradeComponent;
}());
UpgradeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'upgrade-cmp',
        template: __webpack_require__("./src/app/util-template/upgrade/upgrade.component.html")
    })
], UpgradeComponent);

//# sourceMappingURL=upgrade.component.js.map

/***/ }),

/***/ "./src/app/util-template/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-5\">\r\n                <div class=\"card card-user\">\r\n                    <div class=\"image\">\r\n                        <img src=\"assets/img/background.jpg\" alt=\"...\"/>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <div class=\"author\">\r\n                          <img class=\"avatar border-white\" src=\"assets/img/faces/face-2.jpg\" alt=\"...\"/>\r\n                          <h4 class=\"title\">Chet Faker<br />\r\n                             <a href=\"#\"><small>@chetfaker</small></a>\r\n                          </h4>\r\n                        </div>\r\n                        <p class=\"description text-center\">\r\n                            \"I like the way you work it <br>\r\n                            No diggity <br>\r\n                            I wanna bag it up\"\r\n                        </p>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"text-center\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3 col-md-offset-1\">\r\n                                <h5>12<br /><small>Files</small></h5>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <h5>2GB<br /><small>Used</small></h5>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <h5>24,6$<br /><small>Spent</small></h5>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"header\">\r\n                        <h4 class=\"title\">Team Members</h4>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <ul class=\"list-unstyled team-members\">\r\n                                    <li>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-3\">\r\n                                                <div class=\"avatar\">\r\n                                                    <img src=\"assets/img/faces/face-0.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                DJ Khaled\r\n                                                <br />\r\n                                                <span class=\"text-muted\"><small>Offline</small></span>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-xs-3 text-right\">\r\n                                                <button class=\"btn btn-sm btn-success btn-icon\"><i class=\"fa fa-envelope\"></i></button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li>\r\n                                    <li>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-3\">\r\n                                                <div class=\"avatar\">\r\n                                                    <img src=\"assets/img/faces/face-1.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                Creative Tim\r\n                                                <br />\r\n                                                <span class=\"text-success\"><small>Available</small></span>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-xs-3 text-right\">\r\n                                                <button class=\"btn btn-sm btn-success btn-icon\"><i class=\"fa fa-envelope\"></i></button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li>\r\n                                    <li>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-3\">\r\n                                                <div class=\"avatar\">\r\n                                                    <img src=\"assets/img/faces/face-3.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-6\">\r\n                                                Flume\r\n                                                <br />\r\n                                                <span class=\"text-danger\"><small>Busy</small></span>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-xs-3 text-right\">\r\n                                                <button class=\"btn btn-sm btn-success btn-icon\"><i class=\"fa fa-envelope\"></i></button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li>\r\n                                </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-8 col-md-7\">\r\n                <div class=\"card\">\r\n                    <div class=\"header\">\r\n                        <h4 class=\"title\">Edit Profile</h4>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <form>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-5\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Company</label>\r\n                                        <input type=\"text\" class=\"form-control border-input\" disabled placeholder=\"Company\" value=\"Creative Code Inc.\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Username</label>\r\n                                        <input type=\"text\" class=\"form-control border-input\" placeholder=\"Username\" value=\"michael23\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"exampleInputEmail1\">Email address</label>\r\n                                        <input type=\"email\" class=\"form-control border-input\" placeholder=\"Email\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>First Name</label>\r\n                                        <input type=\"text\" class=\"form-control border-input\" placeholder=\"Company\" value=\"Chet\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Last Name</label>\r\n                                        <input type=\"text\" class=\"form-control border-input\" placeholder=\"Last Name\" value=\"Faker\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Address</label>\r\n                                        <input type=\"text\" class=\"form-control border-input\" placeholder=\"Home Address\" value=\"Melbourne, Australia\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>City</label>\r\n                                        <input type=\"text\" class=\"form-control border-input\" placeholder=\"City\" value=\"Melbourne\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Country</label>\r\n                                        <input type=\"text\" class=\"form-control border-input\" placeholder=\"Country\" value=\"Australia\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Postal Code</label>\r\n                                        <input type=\"number\" class=\"form-control border-input\" placeholder=\"ZIP Code\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>About Me</label>\r\n                                        <textarea rows=\"5\" class=\"form-control border-input\" placeholder=\"Here can be your description\" value=\"Mike\">\r\nOh so, your weak rhyme\r\nYou doubt I'll bother, reading into it\r\nI'll probably won't, left to my own devices\r\nBut that's the difference in our opinions.</textarea>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"text-center\">\r\n                                <button type=\"submit\" class=\"btn btn-info btn-fill btn-wd\">Update Profile</button>\r\n                            </div>\r\n                            <div class=\"clearfix\"></div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/util-template/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-cmp',
        template: __webpack_require__("./src/app/util-template/user/user.component.html")
    })
], UserComponent);

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    base_url: 'http://198.58.111.70:8084/api'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map