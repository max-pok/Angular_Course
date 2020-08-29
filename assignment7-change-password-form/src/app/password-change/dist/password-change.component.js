"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PasswordChangeComponent = void 0;
var password_validators_1 = require("./password.validators");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var PasswordChangeComponent = /** @class */ (function () {
    function PasswordChangeComponent() {
        this.form = new forms_1.FormGroup({
            oldPassword: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3)], password_validators_1.PasswordValidators.isCurrentPassword),
            newPassword: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3)]),
            confirmPassword: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3)])
        }, password_validators_1.PasswordValidators.arePasswordMatch);
    }
    Object.defineProperty(PasswordChangeComponent.prototype, "oldPassword", {
        get: function () {
            return this.form.get('oldPassword');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PasswordChangeComponent.prototype, "newPassword", {
        get: function () {
            return this.form.get('newPassword');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PasswordChangeComponent.prototype, "confirmPassword", {
        get: function () {
            return this.form.get('confirmPassword');
        },
        enumerable: false,
        configurable: true
    });
    PasswordChangeComponent.prototype.onChangePasswordClick = function () {
    };
    PasswordChangeComponent = __decorate([
        core_1.Component({
            selector: 'password-change',
            templateUrl: './password-change.component.html',
            styleUrls: ['./password-change.component.css']
        })
    ], PasswordChangeComponent);
    return PasswordChangeComponent;
}());
exports.PasswordChangeComponent = PasswordChangeComponent;
