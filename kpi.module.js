"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var KpiTabelComponent = /** @class */ (function () {
    function KpiTabelComponent() {
    }
    KpiTabelComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.setTabel();
        }, 0);
    };
    KpiTabelComponent.prototype.setTabel = function () {
    };
    __decorate([
        core_1.Input()
    ], KpiTabelComponent.prototype, "index");
    KpiTabelComponent = __decorate([
        core_1.Component({
            selector: 'kpi-tabe',
            template: "       \n  <div class=\"row\">\n  <div class=\"col-md-12\"> \n\n\n<table class=\"table table-striped w-auto\">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>KPI </th>\n      <th>Value</th>     \n    </tr>\n  </thead>\n  <tbody>\n    <tr class=\"table-info\">\n      <th scope=\"row\">1</th>\n      <td>Average Schedule Time</td>\n      <td>2d</td>\n    \n    </tr>\n    <tr>\n      <th scope=\"row\">2</th>\n      <td>\u200BAverage Queue Time</td>\n      <td>2d</td>\n    </tr>   \n  </tbody>\n  </table>\n</div>\n</div>\n    ",
            styles: ["\n    .table-info, .table-info>td, .table-info>th {\n      background-color: #bee5eb;\n  }\n    "]
        })
    ], KpiTabelComponent);
    return KpiTabelComponent;
}());
exports.KpiTabelComponent = KpiTabelComponent;
var KpiTableModule = /** @class */ (function () {
    function KpiTableModule() {
    }
    KpiTableModule = __decorate([
        core_1.NgModule({
            declarations: [KpiTabelComponent],
            imports: [
                common_1.CommonModule
            ],
            providers: []
        })
    ], KpiTableModule);
    return KpiTableModule;
}());
exports["default"] = KpiTableModule;
