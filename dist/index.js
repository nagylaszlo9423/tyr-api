!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("tyr-map",[],t):"object"==typeof exports?exports["tyr-map"]=t():e["tyr-map"]=t()}(global,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=require("axios")},function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0});var o=r(2);t.AxiosApi=o,n(r(5)),n(r(6)),n(r(7)),n(r(8)),n(r(9)),n(r(10)),n(r(11)),n(r(12)),n(r(13)),n(r(14))},function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),u=r(0),s=r(4);t.DefaultApiAxiosParamCreator=function(e){return{shareInGroup:function(t,r,n){if(void 0===n&&(n={}),null==t)throw new s.RequiredError("routeId","Required parameter routeId was null or undefined when calling shareInGroup.");if(null==r)throw new s.RequiredError("groupId","Required parameter groupId was null or undefined when calling shareInGroup.");var o,u="/{routeId}/share-in-group/{groupId}".replace("{routeId}",encodeURIComponent(String(t))).replace("{groupId}",encodeURIComponent(String(r))),p=a.parse(u,!0);e&&(o=e.baseOptions);var d=i(i({method:"POST"},o),n);return p.query=i(i(i({},p.query),{}),n.query),delete p.search,d.headers=i(i({},{}),n.headers),{url:a.format(p),options:d}},token:function(t,r,n,o,u,s){void 0===s&&(s={});var p,d=a.parse("/oauth/token",!0);e&&(p=e.baseOptions);var c=i(i({method:"POST"},p),s),f={};return void 0!==t&&(f.grant_type=t),void 0!==r&&(f.code=r),void 0!==n&&(f.redirect_uri=n),void 0!==o&&(f.client_id=o),void 0!==u&&(f.refresh_token=u),d.query=i(i(i({},d.query),f),s.query),delete d.search,c.headers=i(i({},{}),s.headers),{url:a.format(d),options:c}}}},t.DefaultApiFp=function(e){return{shareInGroup:function(r,n,o){var a=t.DefaultApiAxiosParamCreator(e).shareInGroup(r,n,o);return function(e,t){void 0===e&&(e=u.default),void 0===t&&(t=s.BASE_PATH);var r=i(i({},a.options),{url:t+a.url});return e.request(r)}},token:function(r,n,o,a,p,d){var c=t.DefaultApiAxiosParamCreator(e).token(r,n,o,a,p,d);return function(e,t){void 0===e&&(e=u.default),void 0===t&&(t=s.BASE_PATH);var r=i(i({},c.options),{url:t+c.url});return e.request(r)}}}},t.DefaultApiFactory=function(e,r,n){return{shareInGroup:function(o,i,a){return t.DefaultApiFp(e).shareInGroup(o,i,a)(n,r)},token:function(o,i,a,u,s,p){return t.DefaultApiFp(e).token(o,i,a,u,s,p)(n,r)}}};var p=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return o(r,e),r.prototype.shareInGroup=function(e,r,n){return t.DefaultApiFp(this.configuration).shareInGroup(e,r,n)(this.axios,this.basePath)},r.prototype.token=function(e,r,n,o,i,a){return t.DefaultApiFp(this.configuration).token(e,r,n,o,i,a)(this.axios,this.basePath)},r}(s.BaseAPI);t.DefaultApi=p,t.OauthApiAxiosParamCreator=function(e){return{authorize:function(t,r,n,o){void 0===o&&(o={});var u,s=a.parse("/oauth/authorize",!0);e&&(u=e.baseOptions);var p=i(i({method:"POST"},u),o),d={};return void 0!==t&&(d.response_type=t),void 0!==r&&(d.client_id=r),void 0!==n&&(d.redirect_uri=n),s.query=i(i(i({},s.query),d),o.query),delete s.search,p.headers=i(i({},{}),o.headers),{url:a.format(s),options:p}},login:function(t,r){void 0===r&&(r={});var n,o=a.parse("/oauth/login",!0);e&&(n=e.baseOptions);var u=i(i({method:"POST"},n),r),s={};s["Content-Type"]="application/json",o.query=i(i(i({},o.query),{}),r.query),delete o.search,u.headers=i(i({},s),r.headers);var p="string"!=typeof t||"application/json"===u.headers["Content-Type"];return u.data=p?JSON.stringify(void 0!==t?t:{}):t||"",{url:a.format(o),options:u}},logout:function(t,r){void 0===r&&(r={});var n,o=a.parse("/oauth/logout",!0);e&&(n=e.baseOptions);var u=i(i({method:"POST"},n),r),s={};return null!=t&&(s.Authorization=String(t)),o.query=i(i(i({},o.query),{}),r.query),delete o.search,u.headers=i(i({},s),r.headers),{url:a.format(o),options:u}},register:function(t,r){void 0===r&&(r={});var n,o=a.parse("/oauth/register",!0);e&&(n=e.baseOptions);var u=i(i({method:"POST"},n),r),s={};s["Content-Type"]="application/json",o.query=i(i(i({},o.query),{}),r.query),delete o.search,u.headers=i(i({},s),r.headers);var p="string"!=typeof t||"application/json"===u.headers["Content-Type"];return u.data=p?JSON.stringify(void 0!==t?t:{}):t||"",{url:a.format(o),options:u}}}},t.OauthApiFp=function(e){return{authorize:function(r,n,o,a){var p=t.OauthApiAxiosParamCreator(e).authorize(r,n,o,a);return function(e,t){void 0===e&&(e=u.default),void 0===t&&(t=s.BASE_PATH);var r=i(i({},p.options),{url:t+p.url});return e.request(r)}},login:function(r,n){var o=t.OauthApiAxiosParamCreator(e).login(r,n);return function(e,t){void 0===e&&(e=u.default),void 0===t&&(t=s.BASE_PATH);var r=i(i({},o.options),{url:t+o.url});return e.request(r)}},logout:function(r,n){var o=t.OauthApiAxiosParamCreator(e).logout(r,n);return function(e,t){void 0===e&&(e=u.default),void 0===t&&(t=s.BASE_PATH);var r=i(i({},o.options),{url:t+o.url});return e.request(r)}},register:function(r,n){var o=t.OauthApiAxiosParamCreator(e).register(r,n);return function(e,t){void 0===e&&(e=u.default),void 0===t&&(t=s.BASE_PATH);var r=i(i({},o.options),{url:t+o.url});return e.request(r)}}}},t.OauthApiFactory=function(e,r,n){return{authorize:function(o,i,a,u){return t.OauthApiFp(e).authorize(o,i,a,u)(n,r)},login:function(o,i){return t.OauthApiFp(e).login(o,i)(n,r)},logout:function(o,i){return t.OauthApiFp(e).logout(o,i)(n,r)},register:function(o,i){return t.OauthApiFp(e).register(o,i)(n,r)}}};var d=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return o(r,e),r.prototype.authorize=function(e,r,n,o){return t.OauthApiFp(this.configuration).authorize(e,r,n,o)(this.axios,this.basePath)},r.prototype.login=function(e,r){return t.OauthApiFp(this.configuration).login(e,r)(this.axios,this.basePath)},r.prototype.logout=function(e,r){return t.OauthApiFp(this.configuration).logout(e,r)(this.axios,this.basePath)},r.prototype.register=function(e,r){return t.OauthApiFp(this.configuration).register(e,r)(this.axios,this.basePath)},r}(s.BaseAPI);t.OauthApi=d,t.RouteApiAxiosParamCreator=function(e){return{createRoute:function(t,r){void 0===r&&(r={});var n,o=a.parse("/route",!0);e&&(n=e.baseOptions);var u=i(i({method:"POST"},n),r),s={};s["Content-Type"]="application/json",o.query=i(i(i({},o.query),{}),r.query),delete o.search,u.headers=i(i({},s),r.headers);var p="string"!=typeof t||"application/json"===u.headers["Content-Type"];return u.data=p?JSON.stringify(void 0!==t?t:{}):t||"",{url:a.format(o),options:u}},deleteRouteById:function(t,r){if(void 0===r&&(r={}),null==t)throw new s.RequiredError("id","Required parameter id was null or undefined when calling deleteRouteById.");var n,o="/route/{id}".replace("{id}",encodeURIComponent(String(t))),u=a.parse(o,!0);e&&(n=e.baseOptions);var p=i(i({method:"DELETE"},n),r);return u.query=i(i(i({},u.query),{}),r.query),delete u.search,p.headers=i(i({},{}),r.headers),{url:a.format(u),options:p}},getRouteById:function(t,r){if(void 0===r&&(r={}),null==t)throw new s.RequiredError("id","Required parameter id was null or undefined when calling getRouteById.");var n,o="/route/{id}".replace("{id}",encodeURIComponent(String(t))),u=a.parse(o,!0);e&&(n=e.baseOptions);var p=i(i({method:"GET"},n),r);return u.query=i(i(i({},u.query),{}),r.query),delete u.search,p.headers=i(i({},{}),r.headers),{url:a.format(u),options:p}},updateRouteById:function(t,r,n){if(void 0===n&&(n={}),null==t)throw new s.RequiredError("id","Required parameter id was null or undefined when calling updateRouteById.");var o,u="/route/{id}".replace("{id}",encodeURIComponent(String(t))),p=a.parse(u,!0);e&&(o=e.baseOptions);var d=i(i({method:"PUT"},o),n),c={};c["Content-Type"]="application/json",p.query=i(i(i({},p.query),{}),n.query),delete p.search,d.headers=i(i({},c),n.headers);var f="string"!=typeof r||"application/json"===d.headers["Content-Type"];return d.data=f?JSON.stringify(void 0!==r?r:{}):r||"",{url:a.format(p),options:d}}}},t.RouteApiFp=function(e){return{createRoute:function(r,n){var o=t.RouteApiAxiosParamCreator(e).createRoute(r,n);return function(e,t){void 0===e&&(e=u.default),void 0===t&&(t=s.BASE_PATH);var r=i(i({},o.options),{url:t+o.url});return e.request(r)}},deleteRouteById:function(r,n){var o=t.RouteApiAxiosParamCreator(e).deleteRouteById(r,n);return function(e,t){void 0===e&&(e=u.default),void 0===t&&(t=s.BASE_PATH);var r=i(i({},o.options),{url:t+o.url});return e.request(r)}},getRouteById:function(r,n){var o=t.RouteApiAxiosParamCreator(e).getRouteById(r,n);return function(e,t){void 0===e&&(e=u.default),void 0===t&&(t=s.BASE_PATH);var r=i(i({},o.options),{url:t+o.url});return e.request(r)}},updateRouteById:function(r,n,o){var a=t.RouteApiAxiosParamCreator(e).updateRouteById(r,n,o);return function(e,t){void 0===e&&(e=u.default),void 0===t&&(t=s.BASE_PATH);var r=i(i({},a.options),{url:t+a.url});return e.request(r)}}}},t.RouteApiFactory=function(e,r,n){return{createRoute:function(o,i){return t.RouteApiFp(e).createRoute(o,i)(n,r)},deleteRouteById:function(o,i){return t.RouteApiFp(e).deleteRouteById(o,i)(n,r)},getRouteById:function(o,i){return t.RouteApiFp(e).getRouteById(o,i)(n,r)},updateRouteById:function(o,i,a){return t.RouteApiFp(e).updateRouteById(o,i,a)(n,r)}}};var c=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return o(r,e),r.prototype.createRoute=function(e,r){return t.RouteApiFp(this.configuration).createRoute(e,r)(this.axios,this.basePath)},r.prototype.deleteRouteById=function(e,r){return t.RouteApiFp(this.configuration).deleteRouteById(e,r)(this.axios,this.basePath)},r.prototype.getRouteById=function(e,r){return t.RouteApiFp(this.configuration).getRouteById(e,r)(this.axios,this.basePath)},r.prototype.updateRouteById=function(e,r,n){return t.RouteApiFp(this.configuration).updateRouteById(e,r,n)(this.axios,this.basePath)},r}(s.BaseAPI);t.RouteApi=c},function(e,t){e.exports=require("url")},function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var i=r(0);t.BASE_PATH="http://localhost:3000".replace(/\/+$/,""),t.COLLECTION_FORMATS={csv:",",ssv:" ",tsv:"\t",pipes:"|"};var a=function(e,r,n){void 0===r&&(r=t.BASE_PATH),void 0===n&&(n=i.default),this.basePath=r,this.axios=n,e&&(this.configuration=e,this.basePath=e.basePath||this.basePath)};t.BaseAPI=a;var u=function(e){function t(t,r){var n=e.call(this,r)||this;return n.field=t,n.name="RequiredError",n}return o(t,e),t}(Error);t.RequiredError=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"createdBy",baseName:"createdBy",type:"string"},{name:"createdAt",baseName:"createdAt",type:"string"},{name:"modifiedBy",baseName:"modifiedBy",type:"string"},{name:"modifiedAt",baseName:"modifiedAt",type:"string"}],e}();t.Audit=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"title",baseName:"title",type:"string"},{name:"description",baseName:"description",type:"string"},{name:"path",baseName:"path",type:"LineString"}],e}();t.CreateRouteRequest=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"cause",baseName:"cause",type:"string"},{name:"message",baseName:"message",type:"string"}],e}();t.ErrorResponse=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"email",baseName:"email",type:"string"},{name:"password",baseName:"password",type:"string"}],e}();t.InlineObject=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"type",baseName:"type",type:"string"},{name:"coordinates",baseName:"coordinates",type:"Array<Array<number>>"}],e}();t.LineString=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"email",baseName:"email",type:"string"},{name:"password",baseName:"password",type:"string"},{name:"clientId",baseName:"clientId",type:"string"},{name:"redirectUri",baseName:"redirectUri",type:"string"}],e}();t.LoginRequest=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"code",baseName:"code",type:"string"},{name:"redirectUri",baseName:"redirectUri",type:"string"}],e}();t.LoginResponse=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"title",baseName:"title",type:"string"},{name:"description",baseName:"description",type:"string"},{name:"path",baseName:"path",type:"LineString"},{name:"audit",baseName:"audit",type:"Audit"}],e}();t.RouteResponse=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"accessToken",baseName:"accessToken",type:"string"},{name:"accessTokenExpiration",baseName:"accessTokenExpiration",type:"string"},{name:"refreshToken",baseName:"refreshToken",type:"string"},{name:"refreshTokenExpiration",baseName:"refreshTokenExpiration",type:"string"}],e}();t.TokenResponse=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"title",baseName:"title",type:"string"},{name:"description",baseName:"description",type:"string"},{name:"path",baseName:"path",type:"LineString"}],e}();t.UpdateRouteRequest=n}])}));
//# sourceMappingURL=index.js.map