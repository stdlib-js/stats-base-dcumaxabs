// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";function t(r,t,i,n,a){var f,d,o,m,l;if(r<=0)return n;if(o=a<0?(1-r)*a:0,f=s(t[d=i<0?(1-r)*i:0]),n[o]=f,o+=a,l=1,!1===e(f))for(;l<r;l++){if(m=s(t[d+=i]),e(m)){f=m;break}m>f&&(f=m),n[o]=f,o+=a}if(e(f))for(;l<r;l++)n[o]=f,o+=a;return n}function i(r,t,i,n,a,f,d){var o,m,l,p,b;if(r<=0)return a;if(l=d,o=s(t[m=n]),a[l]=o,l+=f,b=1,!1===e(o))for(;b<r;b++){if(p=s(t[m+=i]),e(p)){o=p;break}p>o&&(o=p),a[l]=o,l+=f}if(e(o))for(;b<r;b++)a[l]=o,l+=f;return a}r(t,"ndarray",i);export{t as default,i as ndarray};
//# sourceMappingURL=index.mjs.map
