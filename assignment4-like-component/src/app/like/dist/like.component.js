"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LikeComponent = void 0;
var core_1 = require("@angular/core");
var LikeComponent = /** @class */ (function () {
    function LikeComponent() {
        this.isActive = false;
        this.likesCount = 0;
    }
    LikeComponent.prototype.onClick = function () {
        this.isActive = !this.isActive;
        this.likesCount += (this.isActive) ? 1 : -1;
    };
    LikeComponent = __decorate([
        core_1.Component({
            selector: 'like',
            templateUrl: './like.component.html',
            styleUrls: ['./like.component.css']
        })
    ], LikeComponent);
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
