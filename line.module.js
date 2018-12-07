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
var LineComponent = /** @class */ (function () {
    function LineComponent(http) {
        this.http = http;
        this.close = new core_1.EventEmitter();
        this.selectedContacts = {};
        this.items = [{
                id: 1,
                name: 'Hill-Rom',
                data: ['Hill-Rom', 20, 35, 30, 40, 100],
                list: [
                    { id: '1121s2ew', allocation: 20, Period: '2018-01-12' },
                    { id: '22d21s2ew', allocation: 35, Period: '2019-02-01' },
                    { id: '3321s2ew', allocation: 30, Period: '2019-03-01' },
                    { id: '4121s2ew', allocation: 40, Period: '2019-04-01' },
                    { id: '5121s2ew', allocation: 100, Period: '2019-05-01' }
                ]
            }, {
                id: 2,
                name: 'Welch Allyn',
                data: ['Welch Allyn', 10, 35, 30, 40, 55],
                list: [
                    { id: '1121s2ew', allocation: 10, Period: '2018-01-12' },
                    { id: '22d21s2ew', allocation: 30, Period: '2019-02-01' },
                    { id: '3321s2ew', allocation: 35, Period: '2019-03-01' },
                    { id: '4121s2ew', allocation: 40, Period: '2019-04-01' },
                    { id: '5121s2ew', allocation: 55, Period: '2019-05-01' }
                ]
            }];
        this.pageInfo = {
            pageSize: 4,
            pageNumber: 1,
            pagingId: ''
        };
        this.utilizations = [];
    }
    LineComponent.prototype.ngOnInit = function () {
        this.pageInfo.pagingId = this.index;
        this.selectedContacts = this.items[0];
        this.utilizations = this.selectedContacts.list;
        this.generateData(this.selectedContacts);
    };
    LineComponent.prototype.generateData = function (obj) {
        var _this = this;
        var bindValue = '#chart_' + this.index;
        var chartValue = {
            bindto: bindValue,
            data: {
                x: 'x',
                columns: [
                    ['x', '2019-01-12', '2019-02-01', '2019-03-01', '2019-04-01', '2019-05-01'],
                    obj.data
                ]
            },
            legend: {
                position: 'right'
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
                    }, height: 80
                }
            }
        };
        setTimeout(function () {
            _this.setChart(chartValue);
        }, 0);
    };
    LineComponent.prototype.changeOptions = function (event) {
        this.generateData(event);
        this.utilizations = event.list;
    };
    LineComponent.prototype.setChart = function (event) {
        var bindValue = '#chart_' + this.index;
        var chart = c3.generate(event);
        /*
                this.http.get('https://reqres.in/api/users?page=2').subscribe(re => {
                    this.data = re;
                }) */
    };
    __decorate([
        core_1.Input()
    ], LineComponent.prototype, "index");
    __decorate([
        core_1.Output()
    ], LineComponent.prototype, "close");
    LineComponent = __decorate([
        core_1.Component({
            selector: 'line-chart',
            template: " \n   \n    <div class=\"row\">\n    <div class=\"col-md-11\">\n    <ng-select name=\"contacts\" [items]=\"items\"  placeholder=\"Select One or More\" appendTo=\"body\"\n    bindLabel=\"name\" [(ngModel)]=\"selectedContacts\" (change)=changeOptions($event)>\n  </ng-select>\n    </div>\n    <div class=\"col-md-1\" style=\"margin-top: 4px;margin-left: -30px;\">\n    <span class=\"widget-icon fa fa-refresh fa-2x cursorme\" (click)=\"generateData(selectedContacts)\"></span>\n    </div>\n    </div>\n\n   \n    <div id=\"chart_{{index}}\"></div>\n\n\n<div>\n\n<table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th class=\"text-center\">Period</th>\n        <th class=\"text-center\">% Allocation</th>\n      </tr>\n    </thead>\n    <tbody class=\"text-center\">\n      <tr *ngFor=\"let utilization of utilizations | paginate: { itemsPerPage: pageInfo.pageSize, \n        currentPage: pageInfo.pageNumber,\n        id: pageInfo.pagingId}; let $i = index\">\n        <td>{{utilization.Period}}</td>\n        <td>{{utilization.allocation}}</td>\n      </tr>     \n    </tbody>\n  </table>\n</div>\n\n<div class=\"text-center\"  style=\"margin-top: 10px;\">\n    <pagination-controls (pageChange)=\"pageInfo.pageNumber = $event\" id=\"{{index}}\"></pagination-controls>\n</div>\n\n\n    "
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return http_1.HttpClient; })))
    ], LineComponent);
    return LineComponent;
}());
exports.LineComponent = LineComponent;
var ConfigService = /** @class */ (function () {
    function ConfigService() {
    }
    ConfigService.prototype.getData = function (http) {
        http.get('https://reqres.in/api/users?page=1').subscribe(function (re) {
        });
        return 'test';
    };
    ConfigService = __decorate([
        core_1.Injectable()
    ], ConfigService);
    return ConfigService;
}());
exports.ConfigService = ConfigService;
var LineChartUtilizatonModule = /** @class */ (function () {
    function LineChartUtilizatonModule() {
    }
    LineChartUtilizatonModule = __decorate([
        core_1.NgModule({
            declarations: [LineComponent],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                ng_select_1.NgSelectModule,
                ngx_pagination_1.NgxPaginationModule
            ],
            providers: [
                //   HttpClient,
                ConfigService
            ]
        })
    ], LineChartUtilizatonModule);
    return LineChartUtilizatonModule;
}());
exports["default"] = LineChartUtilizatonModule;
