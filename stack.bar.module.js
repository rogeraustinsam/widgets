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
var StackedBarComponent = /** @class */ (function () {
    function StackedBarComponent() {
    }
    StackedBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.setChart();
        }, 0);
    };
    StackedBarComponent.prototype.setChart = function () {
        var bindValue = '#stacked_bar_chart_' + this.index;
        var chart = c3.generate({
            bindto: bindValue,
            data: {
                columns: [
                    ['Hill-Rom', 30, 20, 28, 40, 50, 100],
                    ['Welch Allyn', 10, 20, 38, 60, 80, 90]
                ],
                type: 'bar',
                groups: [
                    ['Hill-Rom', 'Welch Allyn']
                ]
            },
            grid: {
                y: {
                    lines: [{ value: 0 }]
                }
            }
        });
    };
    __decorate([
        core_1.Input()
    ], StackedBarComponent.prototype, "index");
    StackedBarComponent = __decorate([
        core_1.Component({
            selector: 'stacked-bar-chart',
            template: "    \n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div id=\"stacked_bar_chart_{{index}}\"></div>\n        </div>\n    <div>\n    "
        })
    ], StackedBarComponent);
    return StackedBarComponent;
}());
exports.StackedBarComponent = StackedBarComponent;
var StackedBarChartUtilizatonModule = /** @class */ (function () {
    function StackedBarChartUtilizatonModule() {
    }
    StackedBarChartUtilizatonModule = __decorate([
        core_1.NgModule({
            declarations: [StackedBarComponent],
            imports: [
                common_1.CommonModule
            ],
            providers: []
        })
    ], StackedBarChartUtilizatonModule);
    return StackedBarChartUtilizatonModule;
}());
exports["default"] = StackedBarChartUtilizatonModule;
