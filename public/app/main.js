(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-top:5%;\n}\n.wrapper {\n    margin: 0 auto;\n    width: 160px;\n}\n.card {\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n          <div class=\"row card-group text-center\">\n              <div class=\"wrapper py-2\" >\n                <h4>Inventory App</h4>\n              </div>\n          </div>\n          <div class=\"row card-group text-center\">\n              <div class=\"wrapper py-2\" >\n                  <div class=\"card text-center\" (click)=\"buy()\">\n                      <div class=\"card-header\">\n                        Buy\n                      </div>\n\n                  </div>\n              </div>\n          </div>\n\n          <div class=\"row card-group text-center\">\n              <div class=\"wrapper py-2\" >\n                  <div class=\"card text-center\" (click)=\"sell()\">\n                      <div class=\"card-header\">\n                        Sell\n                      </div>\n\n                  </div>\n              </div>\n          </div>\n\n          <div class=\"row card-group text-center\">\n              <div class=\"wrapper py-2\" >\n                  <div class=\"card text-center\" (click)=\"overview()\">\n                      <div class=\"card-header\">\n                        Get overview\n                      </div>\n\n                  </div>\n              </div>\n          </div>\n  \n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/inventory.service */ "./src/app/services/inventory.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _buy_buy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buy/buy.component */ "./src/app/buy/buy.component.ts");
/* harmony import */ var _sell_sell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sell/sell.component */ "./src/app/sell/sell.component.ts");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overview/overview.component */ "./src/app/overview/overview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(_InventoryService, _modalService) {
        this._InventoryService = _InventoryService;
        this._modalService = _modalService;
        this.mainTitle = 'All Projects';
        this.validTitle = true;
        this.inputFocused = false;
        this.index = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.buy = function () {
        var modal = this._modalService.open(_buy_buy_component__WEBPACK_IMPORTED_MODULE_3__["BuyComponent"]);
    };
    AppComponent.prototype.sell = function () {
        var modal = this._modalService.open(_sell_sell_component__WEBPACK_IMPORTED_MODULE_4__["SellComponent"]);
    };
    AppComponent.prototype.overview = function () {
        var modal = this._modalService.open(_overview_overview_component__WEBPACK_IMPORTED_MODULE_5__["OverviewComponent"]);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_services_inventory_service__WEBPACK_IMPORTED_MODULE_1__["InventoryService"]],
        }),
        __metadata("design:paramtypes", [_services_inventory_service__WEBPACK_IMPORTED_MODULE_1__["InventoryService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _buy_buy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buy/buy.component */ "./src/app/buy/buy.component.ts");
/* harmony import */ var _sell_sell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sell/sell.component */ "./src/app/sell/sell.component.ts");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./overview/overview.component */ "./src/app/overview/overview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _buy_buy_component__WEBPACK_IMPORTED_MODULE_6__["BuyComponent"],
                _sell_sell_component__WEBPACK_IMPORTED_MODULE_7__["SellComponent"],
                _overview_overview_component__WEBPACK_IMPORTED_MODULE_8__["OverviewComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            entryComponents: [_buy_buy_component__WEBPACK_IMPORTED_MODULE_6__["BuyComponent"], _sell_sell_component__WEBPACK_IMPORTED_MODULE_7__["SellComponent"], _overview_overview_component__WEBPACK_IMPORTED_MODULE_8__["OverviewComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/buy/buy.component.css":
/*!***************************************!*\
  !*** ./src/app/buy/buy.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateAdd {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    border-left: 0;\n}\n.addButton {\n    margin-top:62px;\n}"

/***/ }),

/***/ "./src/app/buy/buy.component.html":
/*!****************************************!*\
  !*** ./src/app/buy/buy.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Buy</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeBuyModal()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n\n  <form [formGroup]=\"formdata\" (ngSubmit)=\"addEntry(formdata.value)\">\n    <div class=\"input-group py-2\">\n      <input class=\"form-control\" placeholder=\"Purchase date\" name=\"purchaseDate\" formControlName=\"purchaseDate\" ngbDatepicker #d=\"ngbDatepicker\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-secondary dateAdd\" (click)=\"d.toggle()\" type=\"button\"><i class=\"fa fa-calendar-o\"></i></button>\n      </div>\n    </div>\n    <div class=\"input-group py-2\">\n      <input class=\"form-control\" type=\"text\" name=\"quantity\" placeholder=\"Quantity (number)\" formControlName=\"quantity\" />\n    </div>\n    <div class=\"input-group py-2\">\n      <input class=\"form-control\" type=\"text\" name=\"price\" placeholder=\"Unit price (number)\" formControlName=\"unitPrice\" />\n    </div>\n    <input class=\"btn btn-primary py-2\" type=\"submit\" [disabled]=\"!formdata.valid\" value=\"Add\" />\n\n  </form>\n\n  <div *ngIf=\"successMessage\" class=\"py-4\">\n    <ngb-alert type=\"success\" [dismissible]=\"false\">{{ successMessageText }}</ngb-alert>\n  </div>\n  <div *ngIf=\"errorMessage\" class=\"py-4\">\n    <ngb-alert type=\"warning\" [dismissible]=\"false\">{{ errorMessageText.message }}</ngb-alert>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/buy/buy.component.ts":
/*!**************************************!*\
  !*** ./src/app/buy/buy.component.ts ***!
  \**************************************/
/*! exports provided: BuyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyComponent", function() { return BuyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/inventory.service */ "./src/app/services/inventory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuyComponent = /** @class */ (function () {
    function BuyComponent(_InventoryService, activeModal, calendar) {
        this._InventoryService = _InventoryService;
        this.activeModal = activeModal;
        this.calendar = calendar;
    }
    BuyComponent.prototype.ngOnInit = function () {
        this.formdata = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            purchaseDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            unitPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
        });
        this.successMessage = false;
        this.errorMessage = false;
    };
    /**
     * Add a new buy entry
     * @param Entry
     */
    BuyComponent.prototype.addEntry = function (Entry) {
        var _this = this;
        this.successMessage = false;
        this.errorMessage = false;
        var formattedDate = Entry.purchaseDate.year + '-' + this.pad(Entry.purchaseDate.month) + '-' + this.pad(Entry.purchaseDate.day);
        var result;
        var entryData = {
            action: "buy",
            date: formattedDate,
            quantity: Entry.quantity,
            unitPrice: Entry.unitPrice
        };
        result = this._InventoryService.addEntry(entryData);
        result.subscribe(function (data) {
            if (data.success) {
                _this.successMessage = true;
                _this.successMessageText = "Entry has been added!";
            }
            else {
                _this.errorMessage = true;
                _this.errorMessageText = "An error occurred, make sure you have entered data correctly";
            }
        }, function (err) {
            //if response code is other than 200
            _this.errorMessage = true;
            _this.errorMessageText = JSON.parse(err.text());
        });
    };
    BuyComponent.prototype.pad = function (i) {
        return i < 10 ? "0" + i : "" + i;
    };
    BuyComponent.prototype.closeBuyModal = function () {
        this.activeModal.close();
    };
    BuyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buy',
            template: __webpack_require__(/*! ./buy.component.html */ "./src/app/buy/buy.component.html"),
            styles: [__webpack_require__(/*! ./buy.component.css */ "./src/app/buy/buy.component.css")],
            providers: [_services_inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"]]
        }),
        __metadata("design:paramtypes", [_services_inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]])
    ], BuyComponent);
    return BuyComponent;
}());



/***/ }),

/***/ "./src/app/index.ts":
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
/*! exports provided: AppComponent, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]; });

/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]; });





/***/ }),

/***/ "./src/app/overview/overview.component.css":
/*!*************************************************!*\
  !*** ./src/app/overview/overview.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateAdd {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    border-left: 0;\n}\n.addButton {\n    margin-top:62px;\n}"

/***/ }),

/***/ "./src/app/overview/overview.component.html":
/*!**************************************************!*\
  !*** ./src/app/overview/overview.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">overview</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeOverviewModal()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n\n  <form [formGroup]=\"formdata\" (ngSubmit)=\"getOverview(formdata.value)\" class=\"py-2\">\n    <div class=\"input-group py-2\">\n      <input class=\"form-control\" placeholder=\"Date\" name=\"date\" formControlName=\"date\" ngbDatepicker #d=\"ngbDatepicker\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-secondary dateAdd\" (click)=\"d.toggle()\" type=\"button\"><i class=\"fa fa-calendar-o\"></i></button>\n      </div>\n    </div>\n    <input class=\"btn btn-primary py-2\" type=\"submit\" [disabled]=\"!formdata.valid\" value=\"Get overview\" />\n\n  </form>\n\n       <ul class=\"list-group py-2\" *ngFor=\"let values of processedValues;let i = index;\">\n          <li class=\"list-group-item\"  *ngIf=\"i === 0\">\n            Inventory items: {{values.inventoryItems}}\n          </li>\n          <li class=\"list-group-item\"  *ngIf=\"i === 1\">\n            Inventory value: {{values.inventoryValue}}\n          </li>\n          <li class=\"list-group-item\"  *ngIf=\"i === 2\">\n            Costs of items sold: {{values.stockPrice}}\n          </li>\n      </ul>\n\n     \n\n\n  <div *ngIf=\"successMessage\" class=\"py-4\">\n    <ngb-alert type=\"success\" [dismissible]=\"false\">{{ successMessageText }}</ngb-alert>\n  </div>\n  <div *ngIf=\"errorMessage\" class=\"py-4\">\n    <ngb-alert type=\"warning\" [dismissible]=\"false\">{{ errorMessageText.message }}</ngb-alert>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/overview/overview.component.ts":
/*!************************************************!*\
  !*** ./src/app/overview/overview.component.ts ***!
  \************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/inventory.service */ "./src/app/services/inventory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(_InventoryService, activeModal, calendar) {
        this._InventoryService = _InventoryService;
        this.activeModal = activeModal;
        this.calendar = calendar;
    }
    OverviewComponent.prototype.ngOnInit = function () {
        this.formdata = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]))
        });
        this.successMessage = false;
        this.errorMessage = false;
    };
    /**
     * Add a new overview entry
     * @param Entry
     */
    OverviewComponent.prototype.getOverview = function (Data) {
        var _this = this;
        this.successMessage = false;
        this.errorMessage = false;
        var formattedDate = Data.date.year + '-' + this.pad(Data.date.month) + '-' + this.pad(Data.date.day);
        var result;
        result = this._InventoryService.getOverview(formattedDate);
        result.subscribe(function (data) {
            if (data.success) {
                _this.processedValues = _this.processData(data.data);
            }
            else {
                _this.errorMessage = true;
                _this.errorMessageText = "An error occurred, make sure you have entered data correctly";
            }
        }, function (err) {
            //if response code is other than 200
            _this.errorMessage = true;
            _this.errorMessageText = JSON.parse(err.text());
        });
    };
    /**
     * Process data returned from API
     * @param data
     */
    OverviewComponent.prototype.processData = function (data) {
        var buyStock = [];
        var sellStock = [];
        var templateData = [];
        var inventoryItems = 0;
        //iterate transaction data
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var entry = data_1[_i];
            var action = entry.action;
            var quantity = entry.quantity;
            var unitPrice = entry.unit_price;
            //build FIFO stack for buying action
            if (action === "buy") {
                buyStock.push([{ quantity: quantity }, { unitPrice: unitPrice }]);
            }
            if (action === "sell") {
                sellStock.push(quantity);
            }
        }
        var stockPrice = 0;
        var itemRemains = [];
        var finalStockPrice = 0;
        //calculate costs of pen sold til ultimo, based on FIFO pri
        for (var _a = 0, sellStock_1 = sellStock; _a < sellStock_1.length; _a++) {
            var soldItem = sellStock_1[_a];
            var itemsNeeded = 0;
            var stockItem = buyStock[0];
            var stockItemQty = stockItem[0].quantity;
            var stockItemPrice = stockItem[1].unitPrice;
            var newStock = stockItemQty - soldItem;
            stockPrice += soldItem * stockItemPrice;
            if (newStock < 0) {
                buyStock.shift(); //remove first item as it is consumed
                itemsNeeded = soldItem - stockItemQty;
                var stockItem_1 = buyStock[0];
                var stockItemQtyTmp = stockItem_1[0].quantity - itemsNeeded;
                var stockItemPrice_1 = stockItem_1[1].unitPrice;
                buyStock[0] = [{ 'quantity': stockItemQtyTmp }, { 'unitPrice': stockItemPrice_1 }];
                stockPrice += itemsNeeded * stockItemPrice_1;
                finalStockPrice = stockPrice;
            }
            else if (newStock > 0) {
                buyStock[0] = [{ 'quantity': newStock }, { 'unitPrice': stockItemPrice }];
            }
        }
        //calculate inventory value get final items remaining
        var inventoryValue = 0;
        var itemsRemaing = 0;
        for (var _b = 0, buyStock_1 = buyStock; _b < buyStock_1.length; _b++) {
            var item = buyStock_1[_b];
            var qty = item[0].quantity;
            var unitPrice = item[1].unitPrice;
            inventoryValue += qty * unitPrice;
            itemsRemaing += qty;
        }
        templateData.push({ 'inventoryItems': itemsRemaing });
        templateData.push({ 'inventoryValue': inventoryValue });
        templateData.push({ 'stockPrice': finalStockPrice });
        return templateData;
    };
    OverviewComponent.prototype.pad = function (i) {
        return i < 10 ? "0" + i : "" + i;
    };
    OverviewComponent.prototype.closeOverviewModal = function () {
        this.activeModal.close();
    };
    OverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.css */ "./src/app/overview/overview.component.css")],
            providers: [_services_inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"]]
        }),
        __metadata("design:paramtypes", [_services_inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/sell/sell.component.css":
/*!*****************************************!*\
  !*** ./src/app/sell/sell.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateAdd {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    border-left: 0;\n}\n.addButton {\n    margin-top:62px;\n}"

/***/ }),

/***/ "./src/app/sell/sell.component.html":
/*!******************************************!*\
  !*** ./src/app/sell/sell.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Sell</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeSellModal()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n\n  <form [formGroup]=\"formdata\" (ngSubmit)=\"addEntry(formdata.value)\">\n    <div class=\"input-group py-2\">\n      <input class=\"form-control\" placeholder=\"Sell date\" name=\"sellDate\" formControlName=\"sellDate\" ngbDatepicker #d=\"ngbDatepicker\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-secondary dateAdd\" (click)=\"d.toggle()\" type=\"button\"><i class=\"fa fa-calendar-o\"></i></button>\n      </div>\n    </div>\n    <div class=\"input-group py-2\">\n      <input class=\"form-control\" type=\"text\" name=\"quantity\" placeholder=\"Quantity (number)\" formControlName=\"quantity\" />\n    </div>\n    <input class=\"btn btn-primary py-2\" type=\"submit\" [disabled]=\"!formdata.valid\" value=\"Add\" />\n  </form>\n  <div *ngIf=\"successMessage\" class=\"py-4\">\n    <ngb-alert type=\"success\" [dismissible]=\"false\">{{ successMessageText }}</ngb-alert>\n  </div>\n  <div *ngIf=\"errorMessage\" class=\"py-4\">\n    <ngb-alert type=\"warning\" [dismissible]=\"false\">{{ errorMessageText.message }}</ngb-alert>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/sell/sell.component.ts":
/*!****************************************!*\
  !*** ./src/app/sell/sell.component.ts ***!
  \****************************************/
/*! exports provided: SellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellComponent", function() { return SellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/inventory.service */ "./src/app/services/inventory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SellComponent = /** @class */ (function () {
    function SellComponent(_InventoryService, activeModal, calendar) {
        this._InventoryService = _InventoryService;
        this.activeModal = activeModal;
        this.calendar = calendar;
    }
    SellComponent.prototype.ngOnInit = function () {
        this.formdata = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            sellDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]))
        });
        this.successMessage = false;
        this.errorMessage = false;
    };
    /**
     * Add a new sell entry
     * @param Entry
     */
    SellComponent.prototype.addEntry = function (Entry) {
        var _this = this;
        this.successMessage = false;
        this.errorMessage = false;
        var formattedDate = Entry.sellDate.year + '-' + this.pad(Entry.sellDate.month) + '-' + this.pad(Entry.sellDate.day);
        var result;
        var entryData = {
            action: "sell",
            date: formattedDate,
            quantity: Entry.quantity,
        };
        result = this._InventoryService.addEntry(entryData);
        result.subscribe(function (data) {
            if (data.success) {
                _this.successMessage = true;
                _this.successMessageText = "Entry has been added!";
            }
            else {
                _this.errorMessage = true;
                _this.errorMessageText = "An error occurred, make sure you have entered data correctly";
            }
        }, function (err) {
            //if response code is other than 200
            _this.errorMessage = true;
            _this.errorMessageText = JSON.parse(err.text());
        });
    };
    SellComponent.prototype.pad = function (i) {
        return i < 10 ? "0" + i : "" + i;
    };
    SellComponent.prototype.closeSellModal = function () {
        this.activeModal.close();
    };
    SellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sell',
            template: __webpack_require__(/*! ./sell.component.html */ "./src/app/sell/sell.component.html"),
            styles: [__webpack_require__(/*! ./sell.component.css */ "./src/app/sell/sell.component.css")],
            providers: [_services_inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"]]
        }),
        __metadata("design:paramtypes", [_services_inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]])
    ], SellComponent);
    return SellComponent;
}());



/***/ }),

/***/ "./src/app/services/inventory.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/inventory.service.ts ***!
  \***********************************************/
/*! exports provided: InventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryService", function() { return InventoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InventoryService = /** @class */ (function () {
    function InventoryService(_http) {
        this._http = _http;
        console.log("Service is ready!");
    }
    /**
     * Add new entry via api
     * @param entryData
     */
    InventoryService.prototype.addEntry = function (entryData) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this._http
            .post('http://34.219.70.13/inventory', JSON.stringify(entryData), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Get overview on particular date
     * @param entryData
     */
    InventoryService.prototype.getOverview = function (date) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        return this._http
            .get('http://34.219.70.13/inventory/' + date)
            .map(function (res) { return res.json(); });
    };
    InventoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], InventoryService);
    return InventoryService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills.ts */ "./src/polyfills.ts");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/ */ "./src/app/index.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app___WEBPACK_IMPORTED_MODULE_4__["AppModule"]);


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es6/symbol */ "./node_modules/core-js/es6/symbol.js");
/* harmony import */ var core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es6_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es6/object */ "./node_modules/core-js/es6/object.js");
/* harmony import */ var core_js_es6_object__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_object__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_es6_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/es6/function */ "./node_modules/core-js/es6/function.js");
/* harmony import */ var core_js_es6_function__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_function__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/es6/parse-int */ "./node_modules/core-js/es6/parse-int.js");
/* harmony import */ var core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/es6/parse-float */ "./node_modules/core-js/es6/parse-float.js");
/* harmony import */ var core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_es6_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/es6/number */ "./node_modules/core-js/es6/number.js");
/* harmony import */ var core_js_es6_number__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_number__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_es6_math__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/es6/math */ "./node_modules/core-js/es6/math.js");
/* harmony import */ var core_js_es6_math__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_math__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_es6_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/es6/string */ "./node_modules/core-js/es6/string.js");
/* harmony import */ var core_js_es6_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_es6_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/es6/date */ "./node_modules/core-js/es6/date.js");
/* harmony import */ var core_js_es6_date__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_date__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_es6_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/es6/array */ "./node_modules/core-js/es6/array.js");
/* harmony import */ var core_js_es6_array__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_array__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/es6/regexp */ "./node_modules/core-js/es6/regexp.js");
/* harmony import */ var core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/es6/map */ "./node_modules/core-js/es6/map.js");
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_map__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/es6/set */ "./node_modules/core-js/es6/set.js");
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_set__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/es6/reflect */ "./node_modules/core-js/es6/reflect.js");
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/es7/reflect */ "./node_modules/core-js/es7/reflect.js");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.


















/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/haishamsaeed/Documents/inventory_app/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map