/**
 * skylark-domx-geom - The skylark geom library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(t,e){var i=e.define,require=e.require,o="function"==typeof i&&i.amd,n=!o&&"undefined"!=typeof exports;if(!o&&!i){var r={};i=e.define=function(t,e,i){"function"==typeof i?(r[t]={factory:i,deps:e.map(function(e){return function(t,e){if("."!==t[0])return t;var i=e.split("/"),o=t.split("/");i.pop();for(var n=0;n<o.length;n++)"."!=o[n]&&(".."==o[n]?i.pop():i.push(o[n]));return i.join("/")}(e,t)}),resolved:!1,exports:null},require(t)):r[t]={factory:null,resolved:!0,exports:i}},require=e.require=function(t){if(!r.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var module=r[t];if(!module.resolved){var i=[];module.deps.forEach(function(t){i.push(require(t))}),module.exports=module.factory.apply(e,i)||null,module.resolved=!0}return module.exports}}if(!i)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(t,require){t("skylark-domx-geom/geom",["skylark-langx/skylark","skylark-langx/langx","skylark-domx-noder","skylark-domx-styler"],function(t,e,i,o){"use strict";var n,r=/^(?:body|html)$/i,l=e.toPixel,f=i.offsetParent;function h(t){if(i.isWindow(t))return{left:0,top:0,right:0,bottom:0};var e=getComputedStyle(t);return{left:l(e.borderLeftWidth,t),top:l(e.borderTopWidth,t),right:l(e.borderRightWidth,t),bottom:l(e.borderBottomWidth,t)}}function s(t,e){if(void 0===e)return r.test(t.nodeName)?{top:0,left:0}:t.getBoundingClientRect();var i=f(t),o=s(i),n=p(t),l=h(i);return w(t,{top:e.top-o.top-n.top-l.top,left:e.left-o.left-n.left-l.left}),this}function d(t,e){return void 0!==e?(s(t,e),x(t,e),this):t==window||t==document.documentElement||t==document.body?{top:0,left:0,bottom:window.innerHeight,right:window.innerWidth,height:window.innerHeight,width:window.innerWidth}:t.getBoundingClientRect?t.getBoundingClientRect():void 0}function a(t,e){if(void 0==e)return{width:t.clientWidth,height:t.clientHeight};var i="border-box"===o.css(t,"box-sizing"),n={width:e.width,height:e.height};if(i){var r=h(t);void 0!==n.width&&(n.width=n.width+r.left+r.right),void 0!==n.height&&(n.height=n.height+r.top+r.bottom)}else{var l=g(t);void 0!==n.width&&(n.width=n.width-l.left-l.right),void 0!==n.height&&(n.height=n.height-l.top-l.bottom)}return o.css(t,n),this}function c(t){var e=t.documentElement,i=t.body,o=Math.max,n=o(e.scrollWidth,i.scrollWidth),r=o(e.clientWidth,i.clientWidth),l=o(e.offsetWidth,i.offsetWidth),f=o(e.scrollHeight,i.scrollHeight),h=o(e.clientHeight,i.clientHeight),s=o(e.offsetHeight,i.offsetHeight);return{width:n<l?r:n,height:f<s?h:f}}function p(t){if(i.isWindow(t))return{left:0,top:0,right:0,bottom:0};var e=getComputedStyle(t);return{left:l(e.marginLeft),top:l(e.marginTop),right:l(e.marginRight),bottom:l(e.marginBottom)}}function g(t){if(i.isWindow(t))return{left:0,top:0,right:0,bottom:0};var e=getComputedStyle(t);return{left:l(e.paddingLeft),top:l(e.paddingTop),right:l(e.paddingRight),bottom:l(e.paddingBottom)}}function u(t,e){if(void 0===e){var i=t.getBoundingClientRect(),o=t.ownerDocument.defaultView;return{left:i.left+o.pageXOffset,top:i.top+o.pageYOffset}}var n=f(t),r=u(n),l=p(t),s=h(n);return w(t,{top:e.top-r.top-l.top-s.top,left:e.left-r.left-l.left-s.left}),this}function w(t,i){if(void 0==i){var n=f(t),r=s(t),l=s(n),d=p(t),a=h(n);return{top:r.top-l.top-a.top-d.top,left:r.left-l.left-a.left-d.left}}var n=f(t),c={top:i.top,left:i.left};return e.isDefined(c.top)&&(c.top=c.top+(y(n)||0)),e.isDefined(c.left)&&(c.left=c.left+(v(n)||0)),"static"==o.css(t,"position")&&(c.position="relative"),o.css(t,c),this}function m(t,e){if(void 0===e){var i=f(t),o=d(t),n=s(i),r=(p(t),h(i));return{top:o.top-n.top-r.top,left:o.left-n.left-r.left,width:o.width,height:o.height}}return w(t,e),x(t,e),this}function v(t,e){9===t.nodeType?t=t.defaultView:t==document.body&&(t=document.scrollingElement||document.documentElement);var i="scrollLeft"in t;return void 0===e?i?t.scrollLeft:t.pageXOffset:(i?t.scrollLeft=e:t.scrollTo(e,t.scrollY),this)}function y(t,e){9===t.nodeType?t=t.defaultView:t==document.body&&(t=document.scrollingElement||document.documentElement);var i="scrollTop"in t;return void 0===e?i?t.scrollTop:t.pageYOffset:(i?t.scrollTop=e:t.scrollTo(t.scrollX,e),this)}function x(t,i){if(void 0==i)return e.isWindow(t)?{width:t.innerWidth,height:t.innerHeight}:e.isDocument(t)?c(document):{width:t.offsetWidth,height:t.offsetHeight};var n="border-box"===o.css(t,"box-sizing"),r={width:i.width,height:i.height};if(!n){var l=g(t),f=h(t);void 0!==r.width&&""!==r.width&&null!==r.width&&(r.width=r.width-l.left-l.right-f.left-f.right),void 0!==r.height&&""!==r.height&&null!==r.height&&(r.height=r.height-l.top-l.bottom-f.top-f.bottom)}return o.css(t,r),this}function b(t){return d(t=t||window)}function W(){return W}return e.mixin(W,{borderExtents:h,boundingPosition:s,boundingRect:d,clientHeight:function(t,e){return void 0==e?a(t).height:a(t,{height:e})},clientSize:a,clientWidth:function(t,e){return void 0==e?a(t).width:(a(t,{width:e}),this)},contentRect:function(t){var e=a(t),i=g(t);return{left:i.left,top:i.top,width:e.width-i.left-i.right,height:e.height-i.top-i.bottom}},getDocumentSize:c,hasScrollbar:function(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)},height:function(t,e){return void 0==e?x(t).height:(x(t,{height:e}),this)},inview:function(t,e){var i=function(t,e){var i={};return e=+e||0,i.width=(i.right=t.right+e)-(i.left=t.left-e),i.height=(i.bottom=t.bottom+e)-(i.top=t.top-e),i}(d(t),e),o=b();return!!i&&i.bottom>=0&&i.right>=0&&i.top<=o.height&&i.left<=o.width},marginExtents:p,marginRect:function(t){var e=m(t),i=p(t);return{left:e.left,top:e.top,width:e.width+i.left+i.right,height:e.height+i.top+i.bottom}},marginSize:function(t){var e=x(t),i=p(t);return{width:e.width+i.left+i.right,height:e.height+i.top+i.bottom}},offsetParent:f,paddingExtents:g,pagePosition:u,pageRect:function(t,e){if(void 0===e){var i=t.getBoundingClientRect(),o=t.ownerDocument.defaultView;return{left:i.left+o.pageXOffset,top:i.top+o.pageYOffset,width:Math.round(i.width),height:Math.round(i.height)}}return u(t,e),x(t,e),this},relativePosition:w,relativeRect:m,scrollbarWidth:function(){if(void 0!==n)return n;var t,e,r=i.createFragment("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")[0],l=r.childNodes[0];i.append(document.body,r),t=l.offsetWidth,o.css(r,"overflow","scroll"),e=l.offsetWidth,t===e&&(e=r[0].clientWidth);return i.remove(r),n=t-e},scrollIntoView:function(t,e){var i,o,n,r,l,f,h=t.parentNode,s=function(t,e){var i,o,n=t;i=o=0;for(;n&&n!=e&&n.nodeType;)i+=n.offsetLeft||0,o+=n.offsetTop||0,n=n.offsetParent;return{x:i,y:o}}(t,h);i=s.x,o=s.y,n=t.offsetWidth,r=t.offsetHeight,l=h.clientWidth,f=h.clientHeight,"end"==e?(i-=l-n,o-=f-r):"center"==e&&(i-=l/2-n/2,o-=f/2-r/2);return h.scrollLeft=i,h.scrollTop=o,this},scrollLeft:v,scrollTop:y,scrollBy:function(t,e,i){t.scrollLeft+=e,t.scrollTop+=i},size:x,testAxis:function(t){var e=t.offsetTop,i=t.offsetLeft,o=t.offsetWidth,n=t.offsetHeight;for(;t.offsetParent;)t=t.offsetParent,e+=t.offsetTop,i+=t.offsetLeft;var r={x:0,y:0};e<window.pageYOffset?r.y=e-window.pageYOffset:e+n>window.pageYOffset+window.innerHeight&&(r.y=e+n-(window.pageYOffset+window.innerHeight));i<window.pageXOffset?r.x=i-window.pageXOffset:i+o>window.pageXOffset+window.innerWidth&&(r.x=i+o-(window.pageXOffset+window.innerWidth));return r},viewportSize:b,width:function(t,e){return void 0==e?x(t).width:(x(t,{width:e}),this)}}),t.attach("domx.geom",W)}),t("skylark-domx-geom/posit",["skylark-langx/langx","skylark-domx-noder","skylark-domx-styler","./geom"],function(t,e,i,o){"use strict";var n=Math.max,r=Math.abs,l=/left|center|right/,f=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,s=/^\w+/,d=/%$/;function a(t,e,i){return[parseFloat(t[0])*(d.test(t[0])?e/100:1),parseFloat(t[1])*(d.test(t[1])?i/100:1)]}function c(t,e){return parseInt(i.css(t,e),10)||0}var p={fit:{left:function(t,e){var i,o=e.within,r=o.isWindow?o.scrollLeft:o.offset.left,l=o.width,f=t.left-e.collisionPosition.marginLeft,h=r-f,s=f+e.collisionWidth-l-r;e.collisionWidth>l?h>0&&s<=0?(i=t.left+h+e.collisionWidth-l-r,t.left+=h-i):t.left=s>0&&h<=0?r:h>s?r+l-e.collisionWidth:r:h>0?t.left+=h:s>0?t.left-=s:t.left=n(t.left-f,t.left)},top:function(t,e){var i,o=e.within,r=o.isWindow?o.scrollTop:o.offset.top,l=e.within.height,f=t.top-e.collisionPosition.marginTop,h=r-f,s=f+e.collisionHeight-l-r;e.collisionHeight>l?h>0&&s<=0?(i=t.top+h+e.collisionHeight-l-r,t.top+=h-i):t.top=s>0&&h<=0?r:h>s?r+l-e.collisionHeight:r:h>0?t.top+=h:s>0?t.top-=s:t.top=n(t.top-f,t.top)}},flip:{left:function(t,e){var i,o,n=e.within,l=n.offset.left+n.scrollLeft,f=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,s=t.left-e.collisionPosition.marginLeft,d=s-h,a=s+e.collisionWidth-f-h,c="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,g=-2*e.offset[0];d<0?((i=t.left+c+p+g+e.collisionWidth-f-l)<0||i<r(d))&&(t.left+=c+p+g):a>0&&((o=t.left-e.collisionPosition.marginLeft+c+p+g-h)>0||r(o)<a)&&(t.left+=c+p+g)},top:function(t,e){var i,o,n=e.within,l=n.offset.top+n.scrollTop,f=n.height,h=n.isWindow?n.scrollTop:n.offset.top,s=t.top-e.collisionPosition.marginTop,d=s-h,a=s+e.collisionHeight-f-h,c="top"===e.my[1],p=c?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,g="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,u=-2*e.offset[1];d<0?((o=t.top+p+g+u+e.collisionHeight-f-l)<0||o<r(d))&&(t.top+=p+g+u):a>0&&((i=t.top-e.collisionPosition.marginTop+p+g+u-h)>0||r(i)<a)&&(t.top+=p+g+u)}},flipfit:{left:function(){p.flip.left.apply(this,arguments),p.fit.left.apply(this,arguments)},top:function(){p.flip.top.apply(this,arguments),p.fit.top.apply(this,arguments)}}};return o.posit=function(d,g){var u,w,m,v,y,x,b=(g=t.extend({},g)).of,W=(z=g.within,P=z||window,L=e.isWindow(P),E=!!P&&9===P.nodeType,R=!L&&!E,S=marginSize(P),{element:P,isWindow:L,isDocument:E,offset:R?o.pagePosition(z):{left:0,top:0},scrollLeft:o.scrollLeft(P),scrollTop:o.scrollTop(P),width:S.width,height:S.height}),k=function(t){var e=t.isWindow||t.isDocument?"":i.css(t.element,"overflow-x"),n=t.isWindow||t.isDocument?"":i.css(t.element,"overflow-y"),r="scroll"===e||"auto"===e&&t.width<o.scrollWidth(t.element);return{width:"scroll"===n||"auto"===n&&t.height<o.scrollHeight(t.element)?o.scrollbarWidth():0,height:r?o.scrollbarWidth():0}}(W),T=(g.collision||"flip").split(" "),H={};var z,P,L,E,R,S;O=b,x=9===O.nodeType?{size:size(O),offset:{top:0,left:0}}:e.isWindow(O)?{size:o.size(O),offset:{top:o.scrollTop(O),left:o.scrollLeft(O)}}:O.preventDefault?{size:{width:0,height:0},offset:{top:O.pageY,left:O.pageX}}:{size:o.size(O),offset:o.pagePosition(O)},b.preventDefault&&(g.at="left top");var O;w=x.size.width,m=x.size.height,v=x.offset,y=t.extend({},v),t.each(["my","at"],function(){var t,e,i=(g[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):f.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=f.test(i[1])?i[1]:"center",t=h.exec(i[0]),e=h.exec(i[1]),H[this]=[t?t[0]:0,e?e[0]:0],g[this]=[s.exec(i[0])[0],s.exec(i[1])[0]]}),1===T.length&&(T[1]=T[0]);"right"===g.at[0]?y.left+=w:"center"===g.at[0]&&(y.left+=w/2);"bottom"===g.at[1]?y.top+=m:"center"===g.at[1]&&(y.top+=m/2);return u=a(H.at,w,m),y.left+=u[0],y.top+=u[1],function(e){var i,l,f=o.marginSize(e),h=f.width,s=f.height,d=c(e,"marginLeft"),x=c(e,"marginTop"),z=h+d+c(e,"marginRight")+k.width,P=s+x+c(e,"marginBottom")+k.height,L=t.extend({},y),E=a(H.my,f.width,f.height);"right"===g.my[0]?L.left-=h:"center"===g.my[0]&&(L.left-=h/2),"bottom"===g.my[1]?L.top-=s:"center"===g.my[1]&&(L.top-=s/2),L.left+=E[0],L.top+=E[1],i={marginLeft:d,marginTop:x},t.each(["left","top"],function(t,o){p[T[t]]&&p[T[t]][o](L,{targetWidth:w,targetHeight:m,elemWidth:h,elemHeight:s,collisionPosition:i,collisionWidth:z,collisionHeight:P,offset:[u[0]+E[0],u[1]+E[1]],my:g.my,at:g.at,within:W,elem:e})}),g.using&&(l=function(t){var i=v.left-L.left,o=i+w-h,l=v.top-L.top,f=l+m-s,d={target:{element:b,left:v.left,top:v.top,width:w,height:m},element:{element:e,left:L.left,top:L.top,width:h,height:s},horizontal:o<0?"left":i>0?"right":"center",vertical:f<0?"top":l>0?"bottom":"middle"};w<h&&r(i+o)<w&&(d.horizontal="center"),m<s&&r(l+f)<m&&(d.vertical="middle"),n(r(i),r(o))>n(r(l),r(f))?d.important="horizontal":d.important="vertical",g.using.call(this,t,d)}),o.pagePosition(e,t.extend(L,{using:l}))}(d)}}),t("skylark-domx-geom/scrollToTop",["skylark-langx/langx","skylark-domx-styler","./geom"],function(t,e,i){return i.scrollToTop=function(e,i,o,n){var r=parseInt(e.scrollTop),l=0,f=1e3*o/5,h=parseInt(i),s=setInterval(function(){++l<=f&&(e.scrollTop=(h-r)/f*l+r),l>=f+1&&(clearInterval(s),n&&t.debounce(n,1e3)())},5);return this}}),t("skylark-domx-geom/main",["skylark-langx/langx","./geom","skylark-domx-velm","skylark-domx-query","./posit","./scrollToTop"],function(t,e,i,o){return i.delegate(["borderExtents","boundingPosition","boundingRect","clientHeight","clientSize","clientWidth","contentRect","height","marginExtents","marginRect","marginSize","offsetParent","paddingExtents","pagePosition","pageRect","relativePosition","relativeRect","scrollIntoView","scrollLeft","scrollTop","pageSize","width"],e,{pageSize:"size"}),o.fn.offset=o.wraps.wrapper_value(e.pagePosition,e,e.pagePosition),o.fn.scrollTop=o.wraps.wrapper_value(e.scrollTop,e),o.fn.scrollLeft=o.wraps.wrapper_value(e.scrollLeft,e),o.fn.position=function(i){if(!this.length)return this;if(i)return i.of&&i.of.length&&((i=t.clone(i)).of=i.of[0]),this.each(function(){e.posit(this,i)});var o=this[0];return e.relativePosition(o)},o.fn.offsetParent=o.wraps.wrapper_map(e.offsetParent,e),o.fn.pageSize=o.wraps.wrapper_value(e.size,e),o.fn.width=o.wraps.wrapper_value(e.width,e,e.width),o.fn.height=o.wraps.wrapper_value(e.height,e,e.height),o.fn.clientSize=o.wraps.wrapper_value(e.clientSize,e.clientSize),["width","height"].forEach(function(t){var i=t.replace(/./,function(t){return t[0].toUpperCase()});o.fn["outer"+i]=function(i,o){if(arguments.length?"boolean"!=typeof i&&(o=i,i=!1):(i=!1,o=void 0),void 0===o){var n=this[0];if(!n)return;var r=e.size(n);if(i){var l=e.marginExtents(n);r.width=r.width+l.left+l.right,r.height=r.height+l.top+l.bottom}return"width"===t?r.width:r.height}return this.each(function(n,r){var l={},f=e.marginExtents(r);"width"===t?(l.width=o,i&&(l.width=l.width-f.left-f.right)):(l.height=o,i&&(l.height=l.height-f.top-f.bottom)),e.size(r,l)})}}),o.fn.innerWidth=o.wraps.wrapper_value(e.clientWidth,e,e.clientWidth),o.fn.innerHeight=o.wraps.wrapper_value(e.clientHeight,e,e.clientHeight),e}),t("skylark-domx-geom",["skylark-domx-geom/main"],function(t){return t})}(i),!o){var l=require("skylark-langx-ns");n?module.exports=l:e.skylarkjs=l}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-geom.js.map
