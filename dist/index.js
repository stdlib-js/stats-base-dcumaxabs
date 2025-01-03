"use strict";var c=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var m=c(function(G,p){
var x=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-abs/dist');function O(r,a,n,f,i,s,q){var e,o,u,t,v;if(r<=0)return i;if(o=f,u=q,e=d(a[o]),i[u]=e,u+=s,v=1,x(e)===!1)for(v;v<r;v++){if(o+=n,t=d(a[o]),x(t)){e=t;break}t>e&&(e=t),i[u]=e,u+=s}if(x(e))for(v;v<r;v++)i[u]=e,u+=s;return i}p.exports=O
});var y=c(function(H,l){
var j=require('@stdlib/strided-base-stride2offset/dist'),g=m();function h(r,a,n,f,i){var s=j(r,n),q=j(r,i);return g(r,a,n,s,f,i,q)}l.exports=h
});var k=c(function(I,_){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=y(),z=m();w(R,"ndarray",z);_.exports=R
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=k(),b,E=B(A(__dirname,"./native.js"));C(E)?b=D:b=E;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
