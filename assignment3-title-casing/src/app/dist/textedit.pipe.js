"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TexteditPipe = void 0;
var core_1 = require("@angular/core");
var TexteditPipe = /** @class */ (function () {
    function TexteditPipe() {
    }
    TexteditPipe.prototype.transform = function (value, lastWord) {
        if (!value)
            return null;
        var words = value.split(" ");
        var prepositions = ["Of", "The", "Is"];
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
            if (prepositions.includes(words[i]) && i != 0) {
                words[i] = words[i].charAt(0).toLowerCase() + words[i].slice(1).toLowerCase();
            }
        }
        return words.join(" ");
    };
    TexteditPipe = __decorate([
        core_1.Pipe({
            name: 'textedit'
        })
    ], TexteditPipe);
    return TexteditPipe;
}());
exports.TexteditPipe = TexteditPipe;
