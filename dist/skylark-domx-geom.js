/**
 * skylark-domx-geom - The skylark geom library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(t,e){var i=e.define,require=e.require,o="function"==typeof i&&i.amd,n=!o&&"undefined"!=typeof exports;if(!o&&!i){var r={};i=e.define=function(t,e,i){"function"==typeof i?(r[t]={factory:i,deps:e.map(function(e){return function(t,e){if("."!==t[0])return t;var i=e.split("/"),o=t.split("/");i.pop();for(var n=0;n<o.length;n++)"."!=o[n]&&(".."==o[n]?i.pop():i.push(o[n]));return i.join("/")}(e,t)}),resolved:!1,exports:null},require(t)):r[t]={factory:null,resolved:!0,exports:i}},require=e.require=function(t){if(!r.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var module=r[t];if(!module.resolved){var i=[];module.deps.forEach(function(t){i.push(require(t))}),module.exports=module.factory.apply(e,i)||null,module.resolved=!0}return module.exports}}if(!i)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(t,require){t("skylark-domx-geom/geom",["skylark-langx/skylark","skylark-langx/langx","skylark-domx-noder","skylark-domx-styler"],function(t,e,i,o){var n,r=/^(?:body|html)$/i,l=e.toPixel,f=i.offsetParent;function h(){if(void 0!==n)return n;var t,e,r=i.createFragment("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")[0],l=r.childNodes[0];return i.append(document.body,r),t=l.offsetWidth,o.css(r,"overflow","scroll"),e=l.offsetWidth,t===e&&(e=r[0].clientWidth),i.remove(r),n=t-e}function s(t){if(i.isWindow(t))return{left:0,top:0,right:0,bottom:0};var e=getComputedStyle(t);return{left:l(e.borderLeftWidth,t),top:l(e.borderTopWidth,t),right:l(e.borderRightWidth,t),bottom:l(e.borderBottomWidth,t)}}function d(t,e){if(void 0===e)return r.test(t.nodeName)?{top:0,left:0}:t.getBoundingClientRect();var i=f(t),o=d(i),n=g(t),l=s(i);return v(t,{top:e.top-o.top-n.top-l.top,left:e.left-o.left-n.left-l.left}),this}function a(t,e){return void 0!==e?(d(t,e),b(t,e),this):t.getBoundingClientRect?t.getBoundingClientRect():t==window?{top:0,left:0,bottom:window.innerHeight,right:window.innerWidth,height:window.innerHeight,width:window.innerWidth}:void 0}function p(t,e){if(void 0==e)return{width:t.clientWidth,height:t.clientHeight};var i="border-box"===o.css(t,"box-sizing"),n={width:e.width,height:e.height};if(i){var r=s(t);void 0!==n.width&&(n.width=n.width+r.left+r.right),void 0!==n.height&&(n.height=n.height+r.top+r.bottom)}else{var l=w(t);void 0!==n.width&&(n.width=n.width-l.left-l.right),void 0!==n.height&&(n.height=n.height-l.top-l.bottom)}return o.css(t,n),this}function c(t){var e=t.documentElement,i=t.body,o=Math.max,n=o(e.scrollWidth,i.scrollWidth),r=o(e.clientWidth,i.clientWidth),l=o(e.offsetWidth,i.offsetWidth),f=o(e.scrollHeight,i.scrollHeight),h=o(e.clientHeight,i.clientHeight),s=o(e.offsetHeight,i.offsetHeight);return{width:n<l?r:n,height:f<s?h:f}}function g(t){if(i.isWindow(t))return{left:0,top:0,right:0,bottom:0};var e=getComputedStyle(t);return{left:l(e.marginLeft),top:l(e.marginTop),right:l(e.marginRight),bottom:l(e.marginBottom)}}function u(t){var e=b(t),i=g(t);return{width:e.width+i.left+i.right,height:e.height+i.top+i.bottom}}function w(t){if(i.isWindow(t))return{left:0,top:0,right:0,bottom:0};var e=getComputedStyle(t);return{left:l(e.paddingLeft),top:l(e.paddingTop),right:l(e.paddingRight),bottom:l(e.paddingBottom)}}function m(t,e){if(void 0===e){var i=t.getBoundingClientRect(),o=t.ownerDocument.defaultView;return{left:i.left+o.pageXOffset,top:i.top+o.pageYOffset}}var n=f(t),r=m(n),l=g(t),h=s(n);return v(t,{top:e.top-r.top-l.top-h.top,left:e.left-r.left-l.left-h.left}),this}function v(t,e){if(void 0==e){var i=f(t),n=d(t),r=d(i),l=(g(t),s(i));return{top:n.top-r.top-l.top,left:n.left-r.left-l.left}}var h={top:e.top,left:e.left};return"static"==o.css(t,"position")&&(h.position="relative"),o.css(t,h),this}function y(t,e){if(void 0===e){var i=f(t),o=a(t),n=d(i),r=(g(t),s(i));return{top:o.top-n.top-r.top,left:o.left-n.left-r.left,width:o.width,height:o.height}}return v(t,e),b(t,e),this}function x(t,e){9===t.nodeType&&(t=t.defaultView);var i="scrollLeft"in t;return void 0===e?i?t.scrollLeft:t.pageXOffset:(i?t.scrollLeft=e:t.scrollTo(e,t.scrollY),this)}function W(t,e){9===t.nodeType&&(t=t.defaultView);var i="scrollTop"in t;return void 0===e?i?t.scrollTop:t.pageYOffset:(i?t.scrollTop=e:t.scrollTo(t.scrollX,e),this)}function b(t,i){if(void 0==i)return e.isWindow(t)?{width:t.innerWidth,height:t.innerHeight}:e.isDocument(t)?c(document):{width:t.offsetWidth,height:t.offsetHeight};var n="border-box"===o.css(t,"box-sizing"),r={width:i.width,height:i.height};if(!n){var l=w(t),f=s(t);void 0!==r.width&&""!==r.width&&null!==r.width&&(r.width=r.width-l.left-l.right-f.left-f.right),void 0!==r.height&&""!==r.height&&null!==r.height&&(r.height=r.height-l.top-l.bottom-f.top-f.bottom)}return o.css(t,r),this}function H(){return H}return e.mixin(H,{borderExtents:s,boundingPosition:d,boundingRect:a,clientHeight:function(t,e){return void 0==e?p(t).height:p(t,{height:e})},clientSize:p,clientWidth:function(t,e){return void 0==e?p(t).width:(p(t,{width:e}),this)},contentRect:function(t){var e=p(t),i=w(t);return{left:i.left,top:i.top,width:e.width-i.left-i.right,height:e.height-i.top-i.bottom}},getDocumentSize:c,height:function(t,e){return void 0==e?b(t).height:(b(t,{height:e}),this)},marginExtents:g,marginRect:function(t){var e=y(t),i=g(t);return{left:e.left,top:e.top,width:e.width+i.left+i.right,height:e.height+i.top+i.bottom}},marginSize:u,offsetParent:f,paddingExtents:w,pagePosition:m,pageRect:function(t,e){if(void 0===e){var i=t.getBoundingClientRect(),o=t.ownerDocument.defaultView;return{left:i.left+o.pageXOffset,top:i.top+o.pageYOffset,width:Math.round(i.width),height:Math.round(i.height)}}return m(t,e),b(t,e),this},relativePosition:v,relativeRect:y,scrollbarWidth:h,scrollIntoView:function(t,e){var i,o,n,r,l,f,h=t.parentNode,s=function(t,e){var i,o,n=t;i=o=0;for(;n&&n!=e&&n.nodeType;)i+=n.offsetLeft||0,o+=n.offsetTop||0,n=n.offsetParent;return{x:i,y:o}}(t,h);i=s.x,o=s.y,n=t.offsetWidth,r=t.offsetHeight,l=h.clientWidth,f=h.clientHeight,"end"==e?(i-=l-n,o-=f-r):"center"==e&&(i-=l/2-n/2,o-=f/2-r/2);return h.scrollLeft=i,h.scrollTop=o,this},scrollLeft:x,scrollTop:W,scrollBy:function(t,e,i){t.scrollLeft+=e,t.scrollTop+=i},size:b,testAxis:function(t){var e=t.offsetTop,i=t.offsetLeft,o=t.offsetWidth,n=t.offsetHeight;for(;t.offsetParent;)t=t.offsetParent,e+=t.offsetTop,i+=t.offsetLeft;var r={x:0,y:0};e<window.pageYOffset?r.y=e-window.pageYOffset:e+n>window.pageYOffset+window.innerHeight&&(r.y=e+n-(window.pageYOffset+window.innerHeight));i<window.pageXOffset?r.x=i-window.pageXOffset:i+o>window.pageXOffset+window.innerWidth&&(r.x=i+o-(window.pageXOffset+window.innerWidth));return r},width:function(t,e){return void 0==e?b(t).width:(b(t,{width:e}),this)}}),function(){var t=Math.max,n=Math.abs,r=/left|center|right/,l=/top|center|bottom/,f=/[\+\-]\d+(\.[\d]+)?%?/,s=/^\w+/,d=/%$/;function a(t,e,i){return[parseFloat(t[0])*(d.test(t[0])?e/100:1),parseFloat(t[1])*(d.test(t[1])?i/100:1)]}function p(t,e){return parseInt(o.css(t,e),10)||0}var c={fit:{left:function(e,i){var o,n=i.within,r=n.isWindow?n.scrollLeft:n.offset.left,l=n.width,f=e.left-i.collisionPosition.marginLeft,h=r-f,s=f+i.collisionWidth-l-r;i.collisionWidth>l?h>0&&s<=0?(o=e.left+h+i.collisionWidth-l-r,e.left+=h-o):e.left=s>0&&h<=0?r:h>s?r+l-i.collisionWidth:r:h>0?e.left+=h:s>0?e.left-=s:e.left=t(e.left-f,e.left)},top:function(e,i){var o,n=i.within,r=n.isWindow?n.scrollTop:n.offset.top,l=i.within.height,f=e.top-i.collisionPosition.marginTop,h=r-f,s=f+i.collisionHeight-l-r;i.collisionHeight>l?h>0&&s<=0?(o=e.top+h+i.collisionHeight-l-r,e.top+=h-o):e.top=s>0&&h<=0?r:h>s?r+l-i.collisionHeight:r:h>0?e.top+=h:s>0?e.top-=s:e.top=t(e.top-f,e.top)}},flip:{left:function(t,e){var i,o,r=e.within,l=r.offset.left+r.scrollLeft,f=r.width,h=r.isWindow?r.scrollLeft:r.offset.left,s=t.left-e.collisionPosition.marginLeft,d=s-h,a=s+e.collisionWidth-f-h,p="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,c="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,g=-2*e.offset[0];d<0?((i=t.left+p+c+g+e.collisionWidth-f-l)<0||i<n(d))&&(t.left+=p+c+g):a>0&&((o=t.left-e.collisionPosition.marginLeft+p+c+g-h)>0||n(o)<a)&&(t.left+=p+c+g)},top:function(t,e){var i,o,r=e.within,l=r.offset.top+r.scrollTop,f=r.height,h=r.isWindow?r.scrollTop:r.offset.top,s=t.top-e.collisionPosition.marginTop,d=s-h,a=s+e.collisionHeight-f-h,p="top"===e.my[1],c=p?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,g="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,u=-2*e.offset[1];d<0?((o=t.top+c+g+u+e.collisionHeight-f-l)<0||o<n(d))&&(t.top+=c+g+u):a>0&&((i=t.top-e.collisionPosition.marginTop+c+g+u-h)>0||n(i)<a)&&(t.top+=c+g+u)}},flipfit:{left:function(){c.flip.left.apply(this,arguments),c.fit.left.apply(this,arguments)},top:function(){c.flip.top.apply(this,arguments),c.fit.top.apply(this,arguments)}}};H.posit=function(d,g){var w,v,y,H,T,k,P=(g=e.extend({},g)).of,z=(E=g.within,B=E||window,S=i.isWindow(B),_=!!B&&9===B.nodeType,C=!S&&!_,D=u(B),{element:B,isWindow:S,isDocument:_,offset:C?m(E):{left:0,top:0},scrollLeft:x(B),scrollTop:W(B),width:D.width,height:D.height}),L=function(t){var e=t.isWindow||t.isDocument?"":o.css(t.element,"overflow-x"),i=t.isWindow||t.isDocument?"":o.css(t.element,"overflow-y"),n="scroll"===e||"auto"===e&&t.width<scrollWidth(t.element);return{width:"scroll"===i||"auto"===i&&t.height<scrollHeight(t.element)?h():0,height:n?h():0}}(z),R=(g.collision||"flip").split(" "),O={};var E,B,S,_,C,D;X=P,k=9===X.nodeType?{size:b(X),offset:{top:0,left:0}}:i.isWindow(X)?{size:b(X),offset:{top:W(X),left:x(X)}}:X.preventDefault?{size:{width:0,height:0},offset:{top:X.pageY,left:X.pageX}}:{size:b(X),offset:m(X)},P.preventDefault&&(g.at="left top");var X;v=k.size.width,y=k.size.height,H=k.offset,T=e.extend({},H),e.each(["my","at"],function(){var t,e,i=(g[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):l.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=l.test(i[1])?i[1]:"center",t=f.exec(i[0]),e=f.exec(i[1]),O[this]=[t?t[0]:0,e?e[0]:0],g[this]=[s.exec(i[0])[0],s.exec(i[1])[0]]}),1===R.length&&(R[1]=R[0]);"right"===g.at[0]?T.left+=v:"center"===g.at[0]&&(T.left+=v/2);"bottom"===g.at[1]?T.top+=y:"center"===g.at[1]&&(T.top+=y/2);return w=a(O.at,v,y),T.left+=w[0],T.top+=w[1],function(i){var o,r,l=u(i),f=l.width,h=l.height,s=p(i,"marginLeft"),d=p(i,"marginTop"),x=f+s+p(i,"marginRight")+L.width,W=h+d+p(i,"marginBottom")+L.height,b=e.extend({},T),k=a(O.my,l.width,l.height);"right"===g.my[0]?b.left-=f:"center"===g.my[0]&&(b.left-=f/2),"bottom"===g.my[1]?b.top-=h:"center"===g.my[1]&&(b.top-=h/2),b.left+=k[0],b.top+=k[1],o={marginLeft:s,marginTop:d},e.each(["left","top"],function(t,e){c[R[t]]&&c[R[t]][e](b,{targetWidth:v,targetHeight:y,elemWidth:f,elemHeight:h,collisionPosition:o,collisionWidth:x,collisionHeight:W,offset:[w[0]+k[0],w[1]+k[1]],my:g.my,at:g.at,within:z,elem:i})}),g.using&&(r=function(e){var o=H.left-b.left,r=o+v-f,l=H.top-b.top,s=l+y-h,d={target:{element:P,left:H.left,top:H.top,width:v,height:y},element:{element:i,left:b.left,top:b.top,width:f,height:h},horizontal:r<0?"left":o>0?"right":"center",vertical:s<0?"top":l>0?"bottom":"middle"};v<f&&n(o+r)<v&&(d.horizontal="center"),y<h&&n(l+s)<y&&(d.vertical="middle"),t(n(o),n(r))>t(n(l),n(s))?d.important="horizontal":d.important="vertical",g.using.call(this,e,d)}),m(i,e.extend(b,{using:r}))}(d)}}(),t.attach("domx.geom",H)}),t("skylark-domx-geom/main",["skylark-langx/langx","./geom","skylark-domx-velm","skylark-domx-query"],function(t,e,i,o){return i.delegate(["borderExtents","boundingPosition","boundingRect","clientHeight","clientSize","clientWidth","contentRect","height","marginExtents","offsetParent","paddingExtents","pagePosition","pageRect","relativePosition","relativeRect","scrollIntoView","scrollLeft","scrollTop","size","width"],e),o.fn.offset=o.wraps.wrapper_value(e.pagePosition,e,e.pagePosition),o.fn.scrollTop=o.wraps.wrapper_value(e.scrollTop,e),o.fn.scrollLeft=o.wraps.wrapper_value(e.scrollLeft,e),o.fn.position=function(i){if(!this.length)return this;if(i)return i.of&&i.of.length&&((i=t.clone(i)).of=i.of[0]),this.each(function(){e.posit(this,i)});var o=this[0];return e.relativePosition(o)},o.fn.offsetParent=o.wraps.wrapper_map(e.offsetParent,e),o.fn.size=o.wraps.wrapper_value(e.size,e),o.fn.width=o.wraps.wrapper_value(e.width,e,e.width),o.fn.height=o.wraps.wrapper_value(e.height,e,e.height),o.fn.clientSize=o.wraps.wrapper_value(e.clientSize,e.clientSize),["width","height"].forEach(function(t){var i=t.replace(/./,function(t){return t[0].toUpperCase()});o.fn["outer"+i]=function(i,o){if(arguments.length?"boolean"!=typeof i&&(o=i,i=!1):(i=!1,o=void 0),void 0===o){var n=this[0];if(!n)return;var r=e.size(n);if(i){var l=e.marginExtents(n);r.width=r.width+l.left+l.right,r.height=r.height+l.top+l.bottom}return"width"===t?r.width:r.height}return this.each(function(n,r){var l={},f=e.marginExtents(r);"width"===t?(l.width=o,i&&(l.width=l.width-f.left-f.right)):(l.height=o,i&&(l.height=l.height-f.top-f.bottom)),e.size(r,l)})}}),o.fn.innerWidth=o.wraps.wrapper_value(e.clientWidth,e,e.clientWidth),o.fn.innerHeight=o.wraps.wrapper_value(e.clientHeight,e,e.clientHeight),e}),t("skylark-domx-geom",["skylark-domx-geom/main"],function(t){return t})}(i),!o){var l=require("skylark-langx-ns");n?module.exports=l:e.skylarkjs=l}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-geom.js.map
