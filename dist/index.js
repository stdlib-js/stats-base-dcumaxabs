"use strict";var c=function(i,v){return function(){return v||i((v={exports:{}}).exports,v),v.exports}};var j=c(function(H,p){
var x=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-abs/dist');function h(i,v,o,n,u){var e,s,r,f,a;if(i<=0)return n;if(o<0?s=(1-i)*o:s=0,u<0?r=(1-i)*u:r=0,e=l(v[s]),n[r]=e,r+=u,a=1,x(e)===!1)for(a;a<i;a++){if(s+=o,f=l(v[s]),x(f)){e=f;break}f>e&&(e=f),n[r]=e,r+=u}if(x(e))for(a;a<i;a++)n[r]=e,r+=u;return n}p.exports=h
});var _=c(function(I,R){
var m=require('@stdlib/math-base-assert-is-nan/dist'),k=require('@stdlib/math-base-special-abs/dist');function w(i,v,o,n,u,e,s){var r,f,a,q,t;if(i<=0)return u;if(f=n,a=s,r=k(v[f]),u[a]=r,a+=e,t=1,m(r)===!1)for(t;t<i;t++){if(f+=o,q=k(v[f]),m(q)){r=q;break}q>r&&(r=q),u[a]=r,a+=e}if(m(r))for(t;t<i;t++)u[a]=r,a+=e;return u}R.exports=w
});var d=c(function(J,O){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=j(),A=_();z(E,"ndarray",A);O.exports=E
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=d(),b,g=C(B(__dirname,"./native.js"));D(g)?b=F:b=g;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
