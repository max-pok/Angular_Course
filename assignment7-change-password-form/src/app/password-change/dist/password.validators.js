"use strict";
exports.__esModule = true;
exports.PasswordValidators = void 0;
var PasswordValidators = /** @class */ (function () {
    function PasswordValidators() {
    }
    PasswordValidators.isCurrentPassword = function (control) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value === 'mypassword')
                    resolve(null);
                else
                    resolve({ incorrect: true });
            }, 2000);
        });
    };
    PasswordValidators.arePasswordMatch = function (control) {
        if (control.get('newPassword').value === control.get('confirmPassword').value)
            return null;
        return { notMatch: true };
    };
    return PasswordValidators;
}());
exports.PasswordValidators = PasswordValidators;
