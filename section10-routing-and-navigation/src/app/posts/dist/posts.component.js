"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostsComponent = void 0;
var core_1 = require("@angular/core");
var PostsComponent = /** @class */ (function () {
    function PostsComponent(service) {
        this.service = service;
        this.posts = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.posts.subscribe(function (response) {
            _this.posts = response; // response returns json objects.
        });
    };
    PostsComponent.prototype.createPost = function (input) {
        var _this = this;
        var post = { title: input.value };
        input.value = '';
        this.service.createPost(post).subscribe(function (response) {
            post['id'] = response['id'];
            _this.posts.splice(0, 0, post);
        });
    };
    PostsComponent.prototype.updatePost = function (post) {
        this.service.updatePost(post).subscribe(function (response) {
            console.log(response);
        });
    };
    PostsComponent.prototype.deletePost = function (post) {
        var _this = this;
        this.service.deletePost(post).subscribe(function (response) {
            var index = _this.posts.indexOf(post);
            _this.posts.splice(index, 1);
        });
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'posts',
            templateUrl: './posts.component.html',
            styleUrls: ['./posts.component.css']
        })
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
