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
var UtilizationComponent = /** @class */ (function () {
    function UtilizationComponent() {
        this.totalCount = 10;
    }
    UtilizationComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            if (_this.totalCount == 100)
                _this.totalCount = 0;
            _this.totalCount += 10;
        }, 1000);
    };
    UtilizationComponent = __decorate([
        core_1.Component({
            selector: 'utilization',
            template: "\n      <div class=\"widget widget-stats bg-gradient-teal\" style=\"text-align:center\">\n    <div class=\"stats-icon stats-icon-lg\"><i class=\"fa fa-globe fa-fw\"></i></div>\n    <div class=\"stats-content\">\n        <div class=\"stats-title\">Resource Utilization %</div>\n        <div class=\"stats-number\">{{ totalCount}}%</div>\n        <div class=\"stats-progress progress\">\n            <div class=\"progress-bar\" [style.width.%]=\"totalCount\"></div>\n        </div>\n    </div>\n</div>\n  ",
            styles: ["\n    .widget.widget-stats {\n        position: relative;\n        color: #fff;\n        padding: 15px;\n        border-radius: 3px;\n    }\n    .bg-gradient-teal {\n        background: #34babb!important;\n        background: -moz-linear-gradient(-45deg,rgba(52,186,187,1) 0,rgba(0,172,172,1) 100%)!important;\n        background: -webkit-linear-gradient(-45deg,rgba(52,186,187,1) 0,rgba(0,172,172,1) 100%)!important;\n        background: linear-gradient(135deg,rgba(52,186,187,1) 0,rgba(0,172,172,1) 100%)!important;\n        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#34babb', endColorstr='#00acac', GradientType=1 )!important;\n    }\n    .widget {\n        overflow: hidden;\n        margin-bottom: 20px;\n        background: #fff;\n        color: inherit;\n        padding: 0;\n        border-radius: 0;\n    }\n    .widget-stats .stats-icon.stats-icon-lg {\n        font-size: 128px;\n        top: 15px;\n        right: 0;\n        color: #fff;\n        width: 128px;\n        height: 50px;\n        line-height: 50px;\n        text-shadow: 3px 7px rgba(0,0,0,.25);\n    }\n    .widget-stats .stats-icon {\n        font-size: 42px;\n        height: 56px;\n        width: 56px;\n        text-align: center;\n        line-height: 56px;\n        margin-left: 15px;\n        color: #000;\n        position: absolute;\n        right: 15px;\n        top: 15px;\n        opacity: .15;\n    }\n    .widget-stats .stats-content, .widget-stats .stats-icon.stats-icon-lg i {\n        position: relative;\n    }\n    .widget-stats .stats-desc, .widget-stats .stats-title {\n        color: #fff;\n        color: rgba(255,255,255,.7);\n    }\n    .widget-stats .stats-title {\n        position: relative;\n        margin: 0 0 2px;\n        font-size: 12px;\n    }\n    .widget-stats .stats-number {\n        font-size: 24px;\n        margin-bottom: 15px;\n        font-weight: 600;\n        letter-spacing: 1px;\n    }\n    .widget-stats .stats-progress {\n        background: rgba(0,0,0,.5);\n        height: 2px;\n        margin: 0 0 15px;\n        border-radius: 3px;\n    }\n    .progress {\n        box-shadow: none;\n        background: #e2e7eb;\n    }\n    .progress {\n        display: -ms-flexbox;\n        display: flex;\n        height: 1rem;\n        overflow: hidden;\n        font-size: .75rem;\n        background-color: #e9ecef;\n        border-radius: .25rem;\n    }\n    .widget-stats .stats-progress .progress-bar {\n        background: #fff;\n        border-radius: 0 3px 3px 0;\n    }\n    .progress-bar {\n        background-color: #348fe2;\n        box-shadow: none;\n    }\n    .progress-bar {\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-direction: column;\n        flex-direction: column;\n        -ms-flex-pack: center;\n        justify-content: center;\n        color: #fff;\n        text-align: center;\n        white-space: nowrap;\n        background-color: #007bff;\n        transition: width .6s ease;\n    }\n    .widget-stats .stats-desc {\n        margin: -5px 0 -3px;\n        font-weight: 300;\n    }\n    .widget-stats .stats-desc, .widget-stats .stats-title {\n        color: #fff;\n        color: rgba(255,255,255,.7);\n    }\n\n    "]
        })
    ], UtilizationComponent);
    return UtilizationComponent;
}());
exports.UtilizationComponent = UtilizationComponent;
var UtilizationModule = /** @class */ (function () {
    function UtilizationModule() {
    }
    UtilizationModule = __decorate([
        core_1.NgModule({
            declarations: [UtilizationComponent],
            imports: [
                common_1.CommonModule,
                FormsModule
            ]
        })
    ], UtilizationModule);
    return UtilizationModule;
}());
exports["default"] = UtilizationModule;
