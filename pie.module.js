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
var PieComponent = /** @class */ (function () {
    function PieComponent() {
    }
    PieComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.setChart();
        }, 0);
    };
    PieComponent.prototype.setChart = function () {
        var bindValue = '#pie_chart_' + this.index;
        var chart = c3.generate({
            bindto: bindValue,
            data: {
                // iris data from R
                columns: [
                    ['Certification', 60],
                    ['Testing', 20],
                    ['Lab Use Only​', 120]
                ],
                type: 'pie'
            },
            legend: {
                position: 'right'
            }
        });
    };
    __decorate([
        core_1.Input()
    ], PieComponent.prototype, "index");
    PieComponent = __decorate([
        core_1.Component({
            selector: 'pie-chart',
            template: "    \n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div id=\"pie_chart_{{index}}\"></div>\n        </div>\n    <div>\n    "
        })
    ], PieComponent);
    return PieComponent;
}());
exports.PieComponent = PieComponent;
var PieChartUtilizatonModule = /** @class */ (function () {
    function PieChartUtilizatonModule() {
    }
    PieChartUtilizatonModule = __decorate([
        core_1.NgModule({
            declarations: [PieComponent],
            imports: [
                common_1.CommonModule
            ],
            providers: []
        })
    ], PieChartUtilizatonModule);
    return PieChartUtilizatonModule;
}());
exports["default"] = PieChartUtilizatonModule;
