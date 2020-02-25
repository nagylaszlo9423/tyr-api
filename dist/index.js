!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("tyr-map",[],t):"object"==typeof exports?exports["tyr-map"]=t():e["tyr-map"]=t()}(global,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var u=r(4),i=r(5),a=r(6);t.BASE_PATH="http://localhost:3001".replace(/\/+$/,"");var p=function(){function e(e){void 0===e&&(e={}),this.configuration=e}return Object.defineProperty(e.prototype,"basePath",{get:function(){return this.configuration.basePath||t.BASE_PATH},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"middleware",{get:function(){return this.configuration.middleware||[]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"username",{get:function(){return this.configuration.username},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"password",{get:function(){return this.configuration.password},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"apiKey",{get:function(){var e=this.configuration.apiKey;return e&&("function"==typeof e?e:function(){return e})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"accessToken",{get:function(){var e=this.configuration.accessToken;return e&&("function"==typeof e?e:function(){return e})},enumerable:!0,configurable:!0}),e}();t.Configuration=p;var c=function(e){var t=this;void 0===e&&(e=new p),this.configuration=e,this.middleware=[],this.withMiddleware=function(e){var r=t.clone();return r.middleware=r.middleware.concat(e),r},this.withPreMiddleware=function(e){return t.withMiddleware(e.map((function(e){return{pre:e}})))},this.withPostMiddleware=function(e){return t.withMiddleware(e.map((function(e){return{post:e}})))},this.request=function(e){return t.rxjsRequest(t.createRequestArgs(e)).pipe(a.map((function(e){if(e.status>=200&&e.status<300)return e.response;throw e})))},this.createRequestArgs=function(e){var r=t.configuration.basePath+e.path;return void 0!==e.query&&0!==Object.keys(e.query).length&&(r+="?"+d(e.query)),{url:r,method:e.method,headers:e.headers,body:e.body instanceof FormData?e.body:JSON.stringify(e.body),responseType:e.responseType||"json"}},this.rxjsRequest=function(e){return u.of(e).pipe(a.map((function(e){return t.middleware.filter((function(e){return e.pre})).forEach((function(t){return e=t.pre(e)})),e})),a.concatMap((function(e){return i.ajax(e).pipe(a.map((function(e){return t.middleware.filter((function(e){return e.post})).forEach((function(t){return e=t.post(e)})),e})))})))},this.clone=function(){return Object.assign(Object.create(Object.getPrototypeOf(t)),t)},this.middleware=e.middleware};t.BaseAPI=c;var s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.name="RequiredError",t}return o(t,e),t}(Error);t.RequiredError=s,t.COLLECTION_FORMATS={csv:",",ssv:" ",tsv:"\t",pipes:"|"},t.encodeURI=function(e){return encodeURIComponent(String(e))};var d=function(e){return Object.keys(e).map((function(r){var n=e[r];return n instanceof Array?n.map((function(e){return t.encodeURI(r)+"="+t.encodeURI(e)})).join("&"):t.encodeURI(r)+"="+t.encodeURI(n)})).join("&")};t.querystring=d,t.throwIfRequired=function(e,t,r){if(!e||null==e[t])throw new s("Required parameter "+t+" was null or undefined when calling "+r+".")},t.throwIfNullOrUndefined=function(e,t){if(null==e)throw new Error('Parameter "'+e+'" was null or undefined when calling "'+t+'".')}},function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(3)),n(r(7)),n(r(1)),n(r(8)),n(r(9))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default=n},function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.postOauthLogoutAll=function(e){var r=e.logoutRequest;return t.request({path:"/oauth/logout/all",method:"POST",headers:{"Content-Type":"application/json"},body:r})},t}return o(t,e),t}(r(0).BaseAPI);t.DefaultApi=u},function(e,t){e.exports=require("rxjs")},function(e,t){e.exports=require("rxjs/ajax")},function(e,t){e.exports=require("rxjs/operators")},function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var u=r(0),i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.createGroupOp=function(e){var r=e.groupRequest;return t.request({path:"/group",method:"POST",headers:{"Content-Type":"application/json"},body:r})},t.findByIdOp=function(e){var r=e.groupId;return u.throwIfNullOrUndefined(r,"findByIdOp"),t.request({path:"/group/{groupId}".replace("{groupId}",u.encodeURI(r)),method:"GET"})},t.getGroupsPagedOp=function(e){var r=e.page,n=e.size,o={};return null!=r&&(o.page=r),null!=n&&(o.size=n),t.request({path:"/group/page",method:"GET",query:o})},t.groupGroupIdDelete=function(e){var r=e.groupId;return u.throwIfNullOrUndefined(r,"groupGroupIdDelete"),t.request({path:"/group/{groupId}".replace("{groupId}",u.encodeURI(r)),method:"DELETE"})},t.joinGroupOp=function(e){var r=e.groupId;return u.throwIfNullOrUndefined(r,"joinGroupOp"),t.request({path:"/group/{groupId}/join".replace("{groupId}",u.encodeURI(r)),method:"POST"})},t.leaveGroupOp=function(e){var r=e.groupId;return u.throwIfNullOrUndefined(r,"leaveGroupOp"),t.request({path:"/group/{groupId}/leave".replace("{groupId}",u.encodeURI(r)),method:"POST"})},t.updateGroupOp=function(e){var r=e.groupId,n=e.groupRequest;u.throwIfNullOrUndefined(r,"updateGroupOp");return t.request({path:"/group/{groupId}".replace("{groupId}",u.encodeURI(r)),method:"PUT",headers:{"Content-Type":"application/json"},body:n})},t}return o(t,e),t}(u.BaseAPI);t.GroupApi=i},function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),u=this&&this.__assign||function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.authorizeOp=function(e){var r=e.responseType,n=e.clientId,o=e.redirectUri,u={};return null!=r&&(u.response_type=r),null!=n&&(u.client_id=n),null!=o&&(u.redirect_uri=o),t.request({path:"/oauth/authorize",method:"POST",query:u})},t.loginOp=function(e){var r=e.loginRequest;return t.request({path:"/oauth/login",method:"POST",headers:{"Content-Type":"application/json"},body:r})},t.logoutOp=function(e){var r=e.authorization,n=u({},null!=r?{Authorization:String(r)}:void 0);return t.request({path:"/oauth/logout",method:"POST",headers:n})},t.registerOp=function(e){var r=e.registrationRequest;return t.request({path:"/oauth/register",method:"POST",headers:{"Content-Type":"application/json"},body:r})},t.tokenOp=function(e){var r=e.grantType,n=e.code,o=e.redirectUri,u=e.clientId,i=e.refreshToken,a={};return null!=r&&(a.grant_type=r),null!=n&&(a.code=n),null!=o&&(a.redirect_uri=o),null!=u&&(a.client_id=u),null!=i&&(a.refresh_token=i),t.request({path:"/oauth/token",method:"POST",query:a})},t}return o(t,e),t}(r(0).BaseAPI);t.OauthApi=i},function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var u=r(0),i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.createRouteOp=function(e){var r=e.createRouteRequest;return t.request({path:"/route",method:"POST",headers:{"Content-Type":"application/json"},body:r})},t.deleteRouteById=function(e){var r=e.id;return u.throwIfNullOrUndefined(r,"deleteRouteById"),t.request({path:"/route/{id}".replace("{id}",u.encodeURI(r)),method:"DELETE"})},t.getMostPopularRoutesOp=function(){return t.request({path:"/route/most-popular",method:"GET"})},t.getRouteByIdOp=function(e){var r=e.id;return u.throwIfNullOrUndefined(r,"getRouteByIdOp"),t.request({path:"/route/{id}".replace("{id}",u.encodeURI(r)),method:"GET"})},t.shareInGroupOp=function(e){var r=e.routeId,n=e.groupId;return u.throwIfNullOrUndefined(r,"shareInGroupOp"),u.throwIfNullOrUndefined(n,"shareInGroupOp"),t.request({path:"/route/{routeId}/share-in-group/{groupId}".replace("{routeId}",u.encodeURI(r)).replace("{groupId}",u.encodeURI(n)),method:"POST"})},t.updateRouteByIdOp=function(e){var r=e.id,n=e.updateRouteRequest;u.throwIfNullOrUndefined(r,"updateRouteByIdOp");return t.request({path:"/route/{id}".replace("{id}",u.encodeURI(r)),method:"PUT",headers:{"Content-Type":"application/json"},body:n})},t}return o(t,e),t}(u.BaseAPI);t.RouteApi=i}])}));
//# sourceMappingURL=index.js.map