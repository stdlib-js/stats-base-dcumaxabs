// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;function f(e){return e!=e}function c(e){return Math.abs(e)}function _(e,r,t,n,o){var a,i,u,l,_;if(e<=0)return n;if(u=o<0?(1-e)*o:0,a=c(r[i=t<0?(1-e)*t:0]),n[u]=a,u+=o,_=1,!1===f(a))for(;_<e;_++){if(f(l=c(r[i+=t]))){a=l;break}l>a&&(a=l),n[u]=a,u+=o}if(f(a))for(;_<e;_++)n[u]=a,u+=o;return n}function p(e,r,t,n,o,a,i){var u,l,_,p,b;if(e<=0)return o;if(_=i,u=c(r[l=n]),o[_]=u,_+=a,b=1,!1===f(u))for(;b<e;b++){if(f(p=c(r[l+=t]))){u=p;break}p>u&&(u=p),o[_]=u,_+=a}if(f(u))for(;b<e;b++)o[_]=u,_+=a;return o}r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||l.call(e,r)?(f=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),p&&i&&i.call(e,r,t.set),e},r(_,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:p});export{_ as default,p as ndarray};
//# sourceMappingURL=mod.js.map
