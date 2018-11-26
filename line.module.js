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
        this.var1 = 'input';
        this.close = new core_1.EventEmitter();
        this.selectedContacts = {
            id: 1,
            name: 'test 1'
        };
        this.items = [{
                id: 1,
                name: 'test 1'
            }, {
                id: 2,
                name: 'test 2'
            }];
        this.pageInfo = {
            pageSize: 5,
            pageNumber: 1
        };
        this.docs = [
            { id: '1121s2ew', text: 'name 1' },
            { id: '22d21s2ew', text: 'name 2' },
            { id: '3321s2ew', text: 'name 3' },
            { id: '4121s2ew', text: 'name 4' },
            { id: '5121s2ew', text: 'name 5' },
            { id: '6121s2ew', text: 'name 5' },
            { id: '7121s2ew', text: 'name 6' },
            { id: '8121s2ew', text: 'name 7' },
            { id: '8121s2ew', text: 'name 8' },
            { id: '9121s2ew', text: 'name 9' },
            { id: '10121s2ew', text: 'name 10' },
            { id: '11121s2ew', text: 'name 11' },
            { id: '12121s2ew', text: 'name 12' },
        ];
    }
    LineComponent.prototype.ngOnInit = function () {
        this.one([
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ]);
        //  this.HttpClient.get('tesr.html');
    };
    LineComponent.prototype.closed = function () {
        this.close.emit(this.selectedContacts);
    };
    LineComponent.prototype.changeOptions = function (event) {
        this.one(event);
    };
    LineComponent.prototype.generate = function () {
        var data = [
            ['data1', 30, 200, 100, 400, 150, 250]
        ];
        this.one(data);
    };
    LineComponent.prototype.one = function (event) {
        var _this = this;
        var chart = c3.generate({
            bindto: '#chart',
            data: {
                columns: event
            }
        });
        this.http.get('https://reqres.in/api/users?page=2').subscribe(function (re) {
            _this.data = re;
        });
        var ser = new ConfigService();
        ser.getData(this.http);
        // console.log(ser.getData())
    };
    __decorate([
        core_1.Input()
    ], LineComponent.prototype, "var1");
    __decorate([
        core_1.Output()
    ], LineComponent.prototype, "close");
    LineComponent = __decorate([
        core_1.Component({
            selector: 'line-chart',
            template: " \n    <ng-select name=\"contacts\" [items]=\"items\"  placeholder=\"Select One or More\" appendTo=\"body\"\n    bindLabel=\"name\" [(ngModel)]=\"selectedContacts\" (change)=changeOptions($event)>\n  </ng-select>\n\n    <button class=\"btn btn-default\" (click)=\"generate()\">GET DATA</button> \n    <button class=\"btn btn-default\" (click)=\"closed()\">CLOSE</button>  \n    <div id=\"chart\"></div>\n\n\n<div>\n\n<table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th class=\"text-center\">Id</th>\n        <th class=\"text-center\">Name</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let doc of docs | paginate: { itemsPerPage: pageInfo.pageSize, \n        currentPage: pageInfo.pageNumber,\n        id: 'project-update-page'}; let $i = index\">\n        <td>{{doc.id}}</td>\n        <td>{{doc.text}}</td>\n      </tr>     \n    </tbody>\n  </table>\n</div>\n\n<div class=\"text-center\"  style=\"margin-top: 10px;\">\n    <pagination-controls (pageChange)=\"pageInfo.pageNumber = $event\" id=\"project-update-page\"></pagination-controls>\n</div>\n\n\n    "
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return http_1.HttpClient; })))
    ], LineComponent);
    return LineComponent;
}());
exports.LineComponent = LineComponent;
//let _httpHandler = new HttpHandler();
var ConfigService = /** @class */ (function () {
    function ConfigService() {
    }
    ConfigService.prototype.getData = function (http) {
        http.get('https://reqres.in/api/users?page=1').subscribe(function (re) {
        });
        console.log("one 123");
        return 'test';
        // this.http.get('tesr.html');
    };
    ConfigService = __decorate([
        core_1.Injectable()
    ], ConfigService);
    return ConfigService;
}());
exports.ConfigService = ConfigService;
var MyModule = /** @class */ (function () {
    function MyModule() {
    }
    MyModule = __decorate([
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
    ], MyModule);
    return MyModule;
}());
exports["default"] = MyModule;
