"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostService = void 0;
var core_1 = require("@angular/core");
var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.url = 'http://jsonplaceholder.typicode.com/posts';
    }
    Object.defineProperty(PostService.prototype, "posts", {
        get: function () {
            return this.http.get(this.url);
        },
        enumerable: false,
        configurable: true
    });
    PostService.prototype.createPost = function (post) {
        return this.http.post(this.url, JSON.stringify(post));
    };
    PostService.prototype.updatePost = function (post) {
        return this.http.patch(this.url + '/' + post['id'], JSON.stringify({ isRead: true }));
    };
    PostService.prototype.deletePost = function (post) {
        return this.http["delete"](this.url + '/' + post['id']);
    };
    PostService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
