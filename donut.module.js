"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
var ng_select_1 = require("@ng-select/ng-select");
var forms_1 = require("@angular/forms");
var ngx_pagination_1 = require("ngx-pagination");
var DonutComponent = /** @class */ (function () {
    function DonutComponent(http) {
        this.http = http;
        this.close = new core_1.EventEmitter();
    }
    DonutComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.generate();
        }, 0);
    };
    DonutComponent.prototype.generate = function () {
        var chart = c3.generate({
            bindto: '#donut_' + this.index,
            data: {
                columns: [
                    ['Hill-Rom', 30],
                    ['Welch Allyn', 60],
                    ['Allen Medical', 80],
                    ['Advanced Respiratory, Inc.', 95],
                    ['Medicraft', 120],
                    ['	MEDIQ', 45],
                ],
                type: 'donut'
            },
            donut: {
                title: "Utilization by Account"
            }
        });
        /*         chart.load({
                    columns: [
                        ["Allen Medical", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                        ["Advanced Respiratory, Inc.", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                        ["Medicraft", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
                    ]
                }); */
    };
    __decorate([
        core_1.Input()
    ], DonutComponent.prototype, "index");
    __decorate([
        core_1.Output()
    ], DonutComponent.prototype, "close");
    DonutComponent = __decorate([
        core_1.Component({
            selector: 'donut-chart',
            template: " \n    <div id=\"donut_{{index}}\"></div>\n    "
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return http_1.HttpClient; })))
    ], DonutComponent);
    return DonutComponent;
}());
exports.DonutComponent = DonutComponent;
var DonutModule = /** @class */ (function () {
    function DonutModule() {
    }
    DonutModule = __decorate([
        core_1.NgModule({
            declarations: [DonutComponent],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                ng_select_1.NgSelectModule,
                ngx_pagination_1.NgxPaginationModule
            ]
        })
    ], DonutModule);
    return DonutModule;
}());
exports["default"] = DonutModule;
