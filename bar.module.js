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
var BarComponent = /** @class */ (function () {
    function BarComponent() {
    }
    BarComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.setChart();
        }, 0);
    };
    BarComponent.prototype.setChart = function () {
        var bindValue = '#bar_chart_' + this.index;
        /*      const chartValue = {
                bindto: bindValue,
                data: {
                    x: 'x',
                    columns: [
                        ['x', '2019-01-12', '2019-02-01', '2019-03-01', '2019-04-01', '2019-05-01'],
                        data:['Hill-Rom', 20, 35, 30, 40, 100],
                    ]
                },
                axis: {
                    x: {
                        type: 'timeseries',
                        tick: {
                            rotate: 85,
                            format: '%Y-%m-%d'
                        },height: 130
                    }
                }
            }; */
        var chart = c3.generate({
            bindto: bindValue,
            data: {
                x: 'x',
                columns: [
                    ['x', '2019-01-12', '2019-02-01', '2019-03-01', '2019-04-01', '2019-05-01'],
                    ['Utilization %', 10, 20, 30, 40, 100],
                    ['Capacity (100) %', 30, 48, 65, 78, 82]
                ],
                type: 'bar'
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: function (x) {
                            var date = new Date(x), locale = "en-us", year = x.getFullYear(), month = date.toLocaleString(locale, {
                                month: "short"
                            });
                            return month + ' ' + year;
                        }
                    }, height: 50
                }
            },
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                }
                // or
                //width: 100 // this makes bar width 100px
            }
        });
    };
    __decorate([
        core_1.Input()
    ], BarComponent.prototype, "index");
    BarComponent = __decorate([
        core_1.Component({
            selector: 'bar-chart',
            template: "    \n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div id=\"bar_chart_{{index}}\"></div>\n        </div>\n    <div>\n    "
        })
    ], BarComponent);
    return BarComponent;
}());
exports.BarComponent = BarComponent;
var BarChartUtilizatonModule = /** @class */ (function () {
    function BarChartUtilizatonModule() {
    }
    BarChartUtilizatonModule = __decorate([
        core_1.NgModule({
            declarations: [BarComponent],
            imports: [
                common_1.CommonModule
            ],
            providers: []
        })
    ], BarChartUtilizatonModule);
    return BarChartUtilizatonModule;
}());
exports["default"] = BarChartUtilizatonModule;
