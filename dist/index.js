!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("tyr-map",[],t):"object"==typeof exports?exports["tyr-map"]=t():e["tyr-map"]=t()}(global,(function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=require("axios")},function(e,t,r){"use strict";function o(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0});var n=r(2);t.AxiosApi=n,o(r(5)),o(r(6)),o(r(7)),o(r(8)),o(r(9)),o(r(10)),o(r(11)),o(r(12)),o(r(13)),o(r(14)),o(r(15)),o(r(16)),o(r(17)),o(r(18)),o(r(19))},function(e,t,r){"use strict";var o,n=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var u=r(3),a=r(0),p=r(4);t.DefaultApiAxiosParamCreator=function(e){return{getGroupsPaged:function(t){void 0===t&&(t={});var r,o=u.parse("/group/page",!0);e&&(r=e.baseOptions);var n=i(i({method:"GET"},r),t);return o.query=i(i(i({},o.query),{}),t.query),delete o.search,n.headers=i(i({},{}),t.headers),{url:u.format(o),options:n}}}},t.DefaultApiFp=function(e){return{getGroupsPaged:function(r){var o=t.DefaultApiAxiosParamCreator(e).getGroupsPaged(r);return function(e,t){void 0===e&&(e=a.default),void 0===t&&(t=p.BASE_PATH);var r=i(i({},o.options),{url:t+o.url});return e.request(r)}}}},t.DefaultApiFactory=function(e,r,o){return{getGroupsPaged:function(n){return t.DefaultApiFp(e).getGroupsPaged(n)(o,r)}}};var s=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),r.prototype.getGroupsPaged=function(e){return t.DefaultApiFp(this.configuration).getGroupsPaged(e)(this.axios,this.basePath)},r}(p.BaseAPI);t.DefaultApi=s,t.GroupApiAxiosParamCreator=function(e){return{createGroup:function(t,r){void 0===r&&(r={});var o,n=u.parse("/group",!0);e&&(o=e.baseOptions);var a=i(i({method:"POST"},o),r),p={};p["Content-Type"]="application/json",n.query=i(i(i({},n.query),{}),r.query),delete n.search,a.headers=i(i({},p),r.headers);var s="string"!=typeof t||"application/json"===a.headers["Content-Type"];return a.data=s?JSON.stringify(void 0!==t?t:{}):t||"",{url:u.format(n),options:a}},findById:function(t,r){if(void 0===r&&(r={}),null==t)throw new p.RequiredError("groupId","Required parameter groupId was null or undefined when calling findById.");var o,n="/group/{groupId}".replace("{groupId}",encodeURIComponent(String(t))),a=u.parse(n,!0);e&&(o=e.baseOptions);var s=i(i({method:"GET"},o),r);return a.query=i(i(i({},a.query),{}),r.query),delete a.search,s.headers=i(i({},{}),r.headers),{url:u.format(a),options:s}},groupGroupIdDelete:function(t,r){if(void 0===r&&(r={}),null==t)throw new p.RequiredError("groupId","Required parameter groupId was null or undefined when calling groupGroupIdDelete.");var o,n="/group/{groupId}".replace("{groupId}",encodeURIComponent(String(t))),a=u.parse(n,!0);e&&(o=e.baseOptions);var s=i(i({method:"DELETE"},o),r);return a.query=i(i(i({},a.query),{}),r.query),delete a.search,s.headers=i(i({},{}),r.headers),{url:u.format(a),options:s}},joinGroup:function(t,r){if(void 0===r&&(r={}),null==t)throw new p.RequiredError("groupId","Required parameter groupId was null or undefined when calling joinGroup.");var o,n="/group/{groupId}/join".replace("{groupId}",encodeURIComponent(String(t))),a=u.parse(n,!0);e&&(o=e.baseOptions);var s=i(i({method:"POST"},o),r);return a.query=i(i(i({},a.query),{}),r.query),delete a.search,s.headers=i(i({},{}),r.headers),{url:u.format(a),options:s}},leaveGroup:function(t,r){if(void 0===r&&(r={}),null==t)throw new p.RequiredError("groupId","Required parameter groupId was null or undefined when calling leaveGroup.");var o,n="/group/{groupId}/leave".replace("{groupId}",encodeURIComponent(String(t))),a=u.parse(n,!0);e&&(o=e.baseOptions);var s=i(i({method:"POST"},o),r);return a.query=i(i(i({},a.query),{}),r.query),delete a.search,s.headers=i(i({},{}),r.headers),{url:u.format(a),options:s}},updateGroup:function(t,r,o){if(void 0===o&&(o={}),null==t)throw new p.RequiredError("groupId","Required parameter groupId was null or undefined when calling updateGroup.");var n,a="/group/{groupId}".replace("{groupId}",encodeURIComponent(String(t))),s=u.parse(a,!0);e&&(n=e.baseOptions);var d=i(i({method:"PUT"},n),o),c={};c["Content-Type"]="application/json",s.query=i(i(i({},s.query),{}),o.query),delete s.search,d.headers=i(i({},c),o.headers);var f="string"!=typeof r||"application/json"===d.headers["Content-Type"];return d.data=f?JSON.stringify(void 0!==r?r:{}):r||"",{url:u.format(s),options:d}}}},t.GroupApiFp=function(e){return{createGroup:function(r,o){var n=t.GroupApiAxiosParamCreator(e).createGroup(r,o);return function(e,t){void 0===e&&(e=a.default),void 0===t&&(t=p.BASE_PATH);var r=i(i({},n.options),{url:t+n.url});return e.request(r)}},findById:function(r,o){var n=t.GroupApiAxiosParamCreator(e).findById(r,o);return function(e,t){void 0===e&&(e=a.default),void 0===t&&(t=p.BASE_PATH);var r=i(i({},n.options),{url:t+n.url});return e.request(r)}},groupGroupIdDelete:function(r,o){var n=t.GroupApiAxiosParamCreator(e).groupGroupIdDelete(r,o);return function(e,t){void 0===e&&(e=a.default),void 0===t&&(t=p.BASE_PATH);var r=i(i({},n.options),{url:t+n.url});return e.request(r)}},joinGroup:function(r,o){var n=t.GroupApiAxiosParamCreator(e).joinGroup(r,o);return function(e,t){void 0===e&&(e=a.default),void 0===t&&(t=p.BASE_PATH);var r=i(i({},n.options),{url:t+n.url});return e.request(r)}},leaveGroup:function(r,o){var n=t.GroupApiAxiosParamCreator(e).leaveGroup(r,o);return function(e,t){void 0===e&&(e=a.default),void 0===t&&(t=p.BASE_PATH);var r=i(i({},n.options),{url:t+n.url});return e.request(r)}},updateGroup:function(r,o,n){var u=t.GroupApiAxiosParamCreator(e).updateGroup(r,o,n);return function(e,t){void 0===e&&(e=a.default),void 0===t&&(t=p.BASE_PATH);var r=i(i({},u.options),{url:t+u.url});return e.request(r)}}}},t.GroupApiFactory=function(e,r,o){return{createGroup:function(n,i){return t.GroupApiFp(e).createGroup(n,i)(o,r)},findById:function(n,i){return t.GroupApiFp(e).findById(n,i)(o,r)},groupGroupIdDelete:function(n,i){return t.GroupApiFp(e).groupGroupIdDelete(n,i)(o,r)},joinGroup:function(n,i){return t.GroupApiFp(e).joinGroup(n,i)(o,r)},leaveGroup:function(n,i){return t.GroupApiFp(e).leaveGroup(n,i)(o,r)},updateGroup:function(n,i,u){return t.GroupApiFp(e).updateGroup(n,i,u)(o,r)}}};var d=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),r.prototype.createGroup=function(e,r){return t.GroupApiFp(this.configuration).createGroup(e,r)(this.axios,this.basePath)},r.prototype.findById=function(e,r){return t.GroupApiFp(this.configuration).findById(e,r)(this.axios,this.basePath)},r.prototype.groupGroupIdDelete=function(e,r){return t.GroupApiFp(this.configuration).groupGroupIdDelete(e,r)(this.axios,this.basePath)},r.prototype.joinGroup=function(e,r){return t.GroupApiFp(this.configuration).joinGroup(e,r)(this.axios,this.basePath)},r.prototype.leaveGroup=function(e,r){return t.GroupApiFp(this.configuration).leaveGroup(e,r)(this.axios,this.basePath)},r.prototype.updateGroup=function(e,r,o){return t.GroupApiFp(this.configuration).updateGroup(e,r,o)(this.axios,this.basePath)},r}(p.BaseAPI);t.GroupApi=d,t.OauthApiAxiosParamCreator=function(e){return{authorize:function(t,r,o,n){void 0===n&&(n={});var a,p=u.parse("/oauth/authorize",!0);e&&(a=e.baseOptions);var s=i(i({method:"POST"},a),n),d={};return void 0!==t&&(d.response_type=t),void 0!==r&&(d.client_id=r),void 0!==o&&(d.redirect_uri=o),p.query=i(i(i({},p.query),d),n.query),delete p.search,s.headers=i(i({},{}),n.headers),{url:u.format(p),options:s}},login:function(t,r){void 0===r&&(r={});var o,n=u.parse("/oauth/login",!0);e&&(o=e.baseOptions);var a=i(i({method:"POST"},o),r),p={};p["Content-Type"]="application/json",n.query=i(i(i({},n.query),{}),r.query),delete n.search,a.headers=i(i({},p),r.headers);var s="string"!=typeof t||"application/json"===a.headers["Content-Type"];return a.data=s?JSON.stringify(void 0!==t?t:{}):t||"",{url:u.format(n),options:a}},logout:function(t,r){void 0===r&&(r={});var o,n=u.parse("/oauth/logout",!0);e&&(o=e.baseOptions);var a=i(i({method:"POST"},o),r),p={};return null!=t&&(p.Authorization=String(t)),n.query=i(i(i({},n.query),{}),r.query),delete n.search,a.headers=i(i({},p),r.headers),{url:u.format(n),options:a}},register:function(t,r){void 0===r&&(r={});var o,n=u.parse("/oauth/register",!0);e&&(o=e.baseOptions);var a=i(i({method:"POST"},o),r),p={};p["Content-Type"]="application/json",n.query=i(i(i({},n.query),{}),r.query),delete n.search,a.headers=i(i({},p),r.headers);var s="string"!=typeof t||"application/json"===a.headers["Content-Type"];return a.data=s?JSON.stringify(void 0!==t?t:{}):t||"",{url:u.format(n),options:a}},token:function(t,r,o,n,a,p){void 0===p&&(p={});var s,d=u.parse("/oauth/token",!0);e&&(s=e.baseOptions);var c=i(i({method:"POST"},s),p),f={};return void 0!==t&&(f.grant_type=t),void 0!==r&&(f.code=r),void 0!==o&&(f.redirect_uri=o),void 0!==n&&(f.client_id=n),void 0!==a&&(f.refresh_token=a),d.query=i(i(i({},d.query),f),p.query),delete d.search,c.headers=i(i({},{}),p.headers),{url:u.format(d),options:c}}}},t.OauthApiFp=function(e){return{authorize:function(r,o,n,u){var s=t.OauthApiAxiosParamCreator(e).authorize(r,o,n,u);return function(e,t){void 0===e&&(e=a.default),void 0===t&&(t=p.BASE_PATH);var r=i(i({},s.options),{url:t+s.url});return e.request(r)}},login:function(r,o){var n=t.OauthApiAxiosParamCreator(e).login(r,o);return function(e,t){void 0===e&&(e=a.default),void 0===t&&(t=p.BASE_PATH);var r=i(i({},n.options),{url:t+n.url});return e.request(r)}},logout:function(r,o){var n=t.OauthApiAxiosParamCreator(e).logout(r,o);return function(e,t){void 0===e&&(e=a.default),void 0===t&&(t=p.BASE_PATH);var r=i(i({},n.options),{url:t+n.url});return e.request(r)}},register:function(r,o){var n=t.OauthApiAxiosParamCreator(e).register(r,o);return function(e,t){void 0===e&&(e=a.default),void 0===t&&(t=p.BASE_PATH);var r=i(i({},n.options),{url:t+n.url});return e.request(r)}},token:function(r,o,n,u,s,d){var c=t.OauthApiAxiosParamCreator(e).token(r,o,n,u,s,d);return function(e,t){void 0===e&&(e=a.default),void 0===t&&(t=p.BASE_PATH);var r=i(i({},c.options),{url:t+c.url});return e.request(r)}}}},t.OauthApiFactory=function(e,r,o){return{authorize:function(n,i,u,a){return t.OauthApiFp(e).authorize(n,i,u,a)(o,r)},login:function(n,i){return t.OauthApiFp(e).login(n,i)(o,r)},logout:function(n,i){return t.OauthApiFp(e).logout(n,i)(o,r)},register:function(n,i){return t.OauthApiFp(e).register(n,i)(o,r)},token:function(n,i,u,a,p,s){return t.OauthApiFp(e).token(n,i,u,a,p,s)(o,r)}}};var c=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),r.prototype.authorize=function(e,r,o,n){return t.OauthApiFp(this.configuration).authorize(e,r,o,n)(this.axios,this.basePath)},r.prototype.login=function(e,r){return t.OauthApiFp(this.configuration).login(e,r)(this.axios,this.basePath)},r.prototype.logout=function(e,r){return t.OauthApiFp(this.configuration).logout(e,r)(this.axios,this.basePath)},r.prototype.register=function(e,r){return t.OauthApiFp(this.configuration).register(e,r)(this.axios,this.basePath)},r.prototype.token=function(e,r,o,n,i,u){return t.OauthApiFp(this.configuration).token(e,r,o,n,i,u)(this.axios,this.basePath)},r}(p.BaseAPI);t.OauthApi=c,t.RouteApiAxiosParamCreator=function(e){return{createRoute:function(t,r){void 0===r&&(r={});var o,n=u.parse("/route",!0);e&&(o=e.baseOptions);var a=i(i({method:"POST"},o),r),p={};p["Content-Type"]="application/json",n.query=i(i(i({},n.query),{}),r.query),delete n.search,a.headers=i(i({},p),r.headers);var s="string"!=typeof t||"application/json"===a.headers["Content-Type"];return a.data=s?JSON.stringify(void 0!==t?t:{}):t||"",{url:u.format(n),options:a}},deleteRouteById:function(t,r){if(void 0===r&&(r={}),null==t)throw new p.RequiredError("id","Required parameter id was null or undefined when calling deleteRouteById.");var o,n="/route/{id}".replace("{id}",encodeURIComponent(String(t))),a=u.parse(n,!0);e&&(o=e.baseOptions);var s=i(i({method:"DELETE"},o),r);return a.query=i(i(i({},a.query),{}),r.query),delete a.search,s.headers=i(i({},{}),r.headers),{url:u.format(a),options:s}},getRouteById:function(t,r){if(void 0===r&&(r={}),null==t)throw new p.RequiredError("id","Required parameter id was null or undefined when calling getRouteById.");var o,n="/route/{id}".replace("{id}",encodeURIComponent(String(t))),a=u.parse(n,!0);e&&(o=e.baseOptions);var s=i(i({method:"GET"},o),r);return a.query=i(i(i({},a.query),{}),r.query),delete a.search,s.headers=i(i({},{}),r.headers),{url:u.format(a),options:s}},shareInGroup:function(t,r,o){if(void 0===o&&(o={}),null==t)throw new p.RequiredError("routeId","Required parameter routeId was null or undefined when calling shareInGroup.");if(null==r)throw new p.RequiredError("groupId","Required parameter groupId was null or undefined when calling shareInGroup.");var n,a="/route/{routeId}/share-in-group/{groupId}".replace("{routeId}",encodeURIComponent(String(t))).replace("{groupId}",encodeURIComponent(String(r))),s=u.parse(a,!0);e&&(n=e.baseOptions);var d=i(i({method:"POST"},n),o);return s.query=i(i(i({},s.query),{}),o.query),delete s.search,d.headers=i(i({},{}),o.headers),{url:u.format(s),options:d}},updateRouteById:function(t,r,o){if(void 0===o&&(o={}),null==t)throw new p.RequiredError("id","Required parameter id was null or undefined when calling updateRouteById.");var n,a="/route/{id}".replace("{id}",encodeURIComponent(String(t))),s=u.parse(a,!0);e&&(n=e.baseOptions);var d=i(i({method:"PUT"},n),o),c={};c["Content-Type"]="application/json",s.query=i(i(i({},s.query),{}),o.query),delete s.search,d.headers=i(i({},c),o.headers);var f="string"!=typeof r||"application/json"===d.headers["Content-Type"];return d.data=f?JSON.stringify(void 0!==r?r:{}):r||"",{url:u.format(s),options:d}}}},t.RouteApiFp=function(e){return{createRoute:function(r,o){var n=t.RouteApiAxiosParamCreator(e).createRoute(r,o);return function(e,t){void 0===e&&(e=a.default),void 0===t&&(t=p.BASE_PATH);var r=i(i({},n.options),{url:t+n.url});return e.request(r)}},deleteRouteById:function(r,o){var n=t.RouteApiAxiosParamCreator(e).deleteRouteById(r,o);return function(e,t){void 0===e&&(e=a.default),void 0===t&&(t=p.BASE_PATH);var r=i(i({},n.options),{url:t+n.url});return e.request(r)}},getRouteById:function(r,o){var n=t.RouteApiAxiosParamCreator(e).getRouteById(r,o);return function(e,t){void 0===e&&(e=a.default),void 0===t&&(t=p.BASE_PATH);var r=i(i({},n.options),{url:t+n.url});return e.request(r)}},shareInGroup:function(r,o,n){var u=t.RouteApiAxiosParamCreator(e).shareInGroup(r,o,n);return function(e,t){void 0===e&&(e=a.default),void 0===t&&(t=p.BASE_PATH);var r=i(i({},u.options),{url:t+u.url});return e.request(r)}},updateRouteById:function(r,o,n){var u=t.RouteApiAxiosParamCreator(e).updateRouteById(r,o,n);return function(e,t){void 0===e&&(e=a.default),void 0===t&&(t=p.BASE_PATH);var r=i(i({},u.options),{url:t+u.url});return e.request(r)}}}},t.RouteApiFactory=function(e,r,o){return{createRoute:function(n,i){return t.RouteApiFp(e).createRoute(n,i)(o,r)},deleteRouteById:function(n,i){return t.RouteApiFp(e).deleteRouteById(n,i)(o,r)},getRouteById:function(n,i){return t.RouteApiFp(e).getRouteById(n,i)(o,r)},shareInGroup:function(n,i,u){return t.RouteApiFp(e).shareInGroup(n,i,u)(o,r)},updateRouteById:function(n,i,u){return t.RouteApiFp(e).updateRouteById(n,i,u)(o,r)}}};var f=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),r.prototype.createRoute=function(e,r){return t.RouteApiFp(this.configuration).createRoute(e,r)(this.axios,this.basePath)},r.prototype.deleteRouteById=function(e,r){return t.RouteApiFp(this.configuration).deleteRouteById(e,r)(this.axios,this.basePath)},r.prototype.getRouteById=function(e,r){return t.RouteApiFp(this.configuration).getRouteById(e,r)(this.axios,this.basePath)},r.prototype.shareInGroup=function(e,r,o){return t.RouteApiFp(this.configuration).shareInGroup(e,r,o)(this.axios,this.basePath)},r.prototype.updateRouteById=function(e,r,o){return t.RouteApiFp(this.configuration).updateRouteById(e,r,o)(this.axios,this.basePath)},r}(p.BaseAPI);t.RouteApi=f},function(e,t){e.exports=require("url")},function(e,t,r){"use strict";var o,n=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var i=r(0);t.BASE_PATH="http://localhost:3000".replace(/\/+$/,""),t.COLLECTION_FORMATS={csv:",",ssv:" ",tsv:"\t",pipes:"|"};var u=function(e,r,o){void 0===r&&(r=t.BASE_PATH),void 0===o&&(o=i.default),this.basePath=r,this.axios=o,e&&(this.configuration=e,this.basePath=e.basePath||this.basePath)};t.BaseAPI=u;var a=function(e){function t(t,r){var o=e.call(this,r)||this;return o.field=t,o.name="RequiredError",o}return n(t,e),t}(Error);t.RequiredError=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"createdBy",baseName:"createdBy",type:"string"},{name:"createdAt",baseName:"createdAt",type:"string"},{name:"modifiedBy",baseName:"modifiedBy",type:"string"},{name:"modifiedAt",baseName:"modifiedAt",type:"string"}],e}();t.AuditDto=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"name",baseName:"name",type:"string"},{name:"description",baseName:"description",type:"string"},{name:"access",baseName:"access",type:"string"}],e}();t.CreateGroupRequest=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"title",baseName:"title",type:"string"},{name:"description",baseName:"description",type:"string"},{name:"path",baseName:"path",type:"LineStringDto"}],e}();t.CreateRouteRequest=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"cause",baseName:"cause",type:"string"},{name:"message",baseName:"message",type:"string"}],e}();t.ErrorResponse=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"name",baseName:"name",type:"string"},{name:"description",baseName:"description",type:"string"},{name:"access",baseName:"access",type:"string"},{name:"owner",baseName:"owner",type:"string"}],e}();t.GroupResponse=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"type",baseName:"type",type:"string"},{name:"coordinates",baseName:"coordinates",type:"Array<Array<number>>"}],e}();t.LineStringDto=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"email",baseName:"email",type:"string"},{name:"password",baseName:"password",type:"string"},{name:"clientId",baseName:"clientId",type:"string"},{name:"redirectUri",baseName:"redirectUri",type:"string"}],e}();t.LoginRequest=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"code",baseName:"code",type:"string"},{name:"redirectUri",baseName:"redirectUri",type:"string"}],e}();t.LoginResponse=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"page",baseName:"page",type:"number"},{name:"size",baseName:"size",type:"number"},{name:"items",baseName:"items",type:"Array<object>"}],e}();t.PageResponse=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"email",baseName:"email",type:"string"},{name:"password",baseName:"password",type:"string"}],e}();t.RegistrationRequest=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"userId",baseName:"userId",type:"string"}],e}();t.RegistrationResponse=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"title",baseName:"title",type:"string"},{name:"description",baseName:"description",type:"string"},{name:"path",baseName:"path",type:"LineStringDto"},{name:"audit",baseName:"audit",type:"AuditDto"}],e}();t.RouteResponse=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"accessToken",baseName:"accessToken",type:"string"},{name:"accessTokenExpiration",baseName:"accessTokenExpiration",type:"string"},{name:"refreshToken",baseName:"refreshToken",type:"string"},{name:"refreshTokenExpiration",baseName:"refreshTokenExpiration",type:"string"}],e}();t.TokenResponse=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"name",baseName:"name",type:"string"},{name:"description",baseName:"description",type:"string"},{name:"access",baseName:"access",type:"string"}],e}();t.UpdateGroupRequest=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.getAttributeTypeMap=function(){return e.attributeTypeMap},e.discriminator=void 0,e.attributeTypeMap=[{name:"title",baseName:"title",type:"string"},{name:"description",baseName:"description",type:"string"},{name:"path",baseName:"path",type:"LineStringDto"}],e}();t.UpdateRouteRequest=o}])}));
//# sourceMappingURL=index.js.map