/**
 * skylark-domx-geom - The skylark geom library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(t,e){var i=e.define,o=e.require,n="function"==typeof i&&i.amd,r=!n&&"undefined"!=typeof exports;if(!n&&!i){var l={};i=e.define=function(t,e,i){"function"==typeof i?(l[t]={factory:i,deps:e.map(function(e){return function(t,e){if("."!==t[0])return t;var i=e.split("/"),o=t.split("/");i.pop();for(var n=0;n<o.length;n++)"."!=o[n]&&(".."==o[n]?i.pop():i.push(o[n]));return i.join("/")}(e,t)}),resolved:!1,exports:null},o(t)):l[t]={factory:null,resolved:!0,exports:i}},o=e.require=function(t){if(!l.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var i=l[t];if(!i.resolved){var n=[];i.deps.forEach(function(t){n.push(o(t))}),i.exports=i.factory.apply(e,n)||null,i.resolved=!0}return i.exports}}if(!i)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(t,e){t("skylark-domx-geom/geom",["skylark-langx/skylark","skylark-langx/langx","skylark-domx-noder","skylark-domx-styler"],function(t,e,i,o){var n,r=/^(?:body|html)$/i,l=e.toPixel,h=i.offsetParent;function f(){if(void 0!==n)return n;var t,e,r=i.createFragment("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")[0],l=r.childNodes[0];return i.append(document.body,r),t=l.offsetWidth,o.css(r,"overflow","scroll"),e=l.offsetWidth,t===e&&(e=r[0].clientWidth),i.remove(r),n=t-e}function s(t){if(i.isWindow(t))return{left:0,top:0,right:0,bottom:0};var e=getComputedStyle(t);return{left:l(e.borderLeftWidth,t),top:l(e.borderTopWidth,t),right:l(e.borderRightWidth,t),bottom:l(e.borderBottomWidth,t)}}function a(t,e){if(void 0===e)return r.test(t.nodeName)?{top:0,left:0}:t.getBoundingClientRect();var i=h(t),o=a(i),n=g(t),l=s(i);return v(t,{top:e.top-o.top-n.top-l.top,left:e.left-o.left-n.left-l.left}),this}function d(t,e){return void 0===e?t.getBoundingClientRect():(a(t,e),b(t,e),this)}function p(t,e){if(void 0==e)return{width:t.clientWidth,height:t.clientHeight};var i="border-box"===o.css(t,"box-sizing"),n={width:e.width,height:e.height};if(i){var r=s(t);void 0!==n.width&&(n.width=n.width+r.left+r.right),void 0!==n.height&&(n.height=n.height+r.top+r.bottom)}else{var l=w(t);void 0!==n.width&&(n.width=n.width-l.left-l.right),void 0!==n.height&&(n.height=n.height-l.top-l.bottom)}return o.css(t,n),this}function c(t){var e=t.documentElement,i=t.body,o=Math.max,n=o(e.scrollWidth,i.scrollWidth),r=o(e.clientWidth,i.clientWidth),l=o(e.offsetWidth,i.offsetWidth),h=o(e.scrollHeight,i.scrollHeight),f=o(e.clientHeight,i.clientHeight),s=o(e.offsetHeight,i.offsetHeight);return{width:n<l?r:n,height:h<s?f:h}}function g(t){if(i.isWindow(t))return{left:0,top:0,right:0,bottom:0};var e=getComputedStyle(t);return{left:l(e.marginLeft),top:l(e.marginTop),right:l(e.marginRight),bottom:l(e.marginBottom)}}function u(t){var e=b(t),i=g(t);return{width:e.width+i.left+i.right,height:e.height+i.top+i.bottom}}function w(t){if(i.isWindow(t))return{left:0,top:0,right:0,bottom:0};var e=getComputedStyle(t);return{left:l(e.paddingLeft),top:l(e.paddingTop),right:l(e.paddingRight),bottom:l(e.paddingBottom)}}function m(t,e){if(void 0===e){var i=t.getBoundingClientRect();return{left:i.left+window.pageXOffset,top:i.top+window.pageYOffset}}var o=h(t),n=m(o),r=g(t),l=s(o);return v(t,{top:e.top-n.top-r.top-l.top,left:e.left-n.left-r.left-l.left}),this}function v(t,e){if(void 0==e){var i=h(t),n=a(t),r=a(i),l=(g(t),s(i));return{top:n.top-r.top-l.top,left:n.left-r.left-l.left}}var f={top:e.top,left:e.left};return"static"==o.css(t,"position")&&(f.position="relative"),o.css(t,f),this}function y(t,e){if(void 0===e){var i=h(t),o=d(t),n=a(i),r=(g(t),s(i));return{top:o.top-n.top-r.top,left:o.left-n.left-r.left,width:o.width,height:o.height}}return v(t,e),b(t,e),this}function x(t,e){9===t.nodeType&&(t=t.defaultView);var i="scrollLeft"in t;return void 0===e?i?t.scrollLeft:t.pageXOffset:(i?t.scrollLeft=e:t.scrollTo(e,t.scrollY),this)}function W(t,e){9===t.nodeType&&(t=t.defaultView);var i="scrollTop"in t;return void 0===e?i?t.scrollTop:t.pageYOffset:(i?t.scrollTop=e:t.scrollTo(t.scrollX,e),this)}function b(t,i){if(void 0==i)return e.isWindow(t)?{width:t.innerWidth,height:t.innerHeight}:e.isDocument(t)?c(document):{width:t.offsetWidth,height:t.offsetHeight};var n="border-box"===o.css(t,"box-sizing"),r={width:i.width,height:i.height};if(!n){var l=w(t),h=s(t);void 0!==r.width&&""!==r.width&&null!==r.width&&(r.width=r.width-l.left-l.right-h.left-h.right),void 0!==r.height&&""!==r.height&&null!==r.height&&(r.height=r.height-l.top-l.bottom-h.top-h.bottom)}return o.css(t,r),this}function k(){return k}return e.mixin(k,{borderExtents:s,boundingPosition:a,boundingRect:d,clientHeight:function(t,e){return void 0==e?p(t).height:p(t,{height:e})},clientSize:p,clientWidth:function(t,e){return void 0==e?p(t).width:(p(t,{width:e}),this)},contentRect:function(t){var e=p(t),i=w(t);return{left:i.left,top:i.top,width:e.width-i.left-i.right,height:e.height-i.top-i.bottom}},getDocumentSize:c,height:function(t,e){return void 0==e?b(t).height:(b(t,{height:e}),this)},marginExtents:g,marginRect:function(t){var e=y(t),i=g(t);return{left:e.left,top:e.top,width:e.width+i.left+i.right,height:e.height+i.top+i.bottom}},marginSize:u,offsetParent:h,paddingExtents:w,pagePosition:m,pageRect:function(t,e){if(void 0===e){var i=t.getBoundingClientRect();return{left:i.left+window.pageXOffset,top:i.top+window.pageYOffset,width:Math.round(i.width),height:Math.round(i.height)}}return m(t,e),b(t,e),this},relativePosition:v,relativeRect:y,scrollbarWidth:f,scrollIntoView:function(t,e){var i,o,n,r,l,h,f=t.parentNode,s=function(t,e){var i,o,n=t;i=o=0;for(;n&&n!=e&&n.nodeType;)i+=n.offsetLeft||0,o+=n.offsetTop||0,n=n.offsetParent;return{x:i,y:o}}(t,f);i=s.x,o=s.y,n=t.offsetWidth,r=t.offsetHeight,l=f.clientWidth,h=f.clientHeight,"end"==e?(i-=l-n,o-=h-r):"center"==e&&(i-=l/2-n/2,o-=h/2-r/2);return f.scrollLeft=i,f.scrollTop=o,this},scrollLeft:x,scrollTop:W,size:b,width:function(t,e){return void 0==e?b(t).width:(b(t,{width:e}),this)}}),function(){var t=Math.max,n=Math.abs,r=/left|center|right/,l=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,s=/^\w+/,a=/%$/;function d(t,e,i){return[parseFloat(t[0])*(a.test(t[0])?e/100:1),parseFloat(t[1])*(a.test(t[1])?i/100:1)]}function p(t,e){return parseInt(o.css(t,e),10)||0}var c={fit:{left:function(e,i){var o,n=i.within,r=n.isWindow?n.scrollLeft:n.offset.left,l=n.width,h=e.left-i.collisionPosition.marginLeft,f=r-h,s=h+i.collisionWidth-l-r;i.collisionWidth>l?f>0&&s<=0?(o=e.left+f+i.collisionWidth-l-r,e.left+=f-o):e.left=s>0&&f<=0?r:f>s?r+l-i.collisionWidth:r:f>0?e.left+=f:s>0?e.left-=s:e.left=t(e.left-h,e.left)},top:function(e,i){var o,n=i.within,r=n.isWindow?n.scrollTop:n.offset.top,l=i.within.height,h=e.top-i.collisionPosition.marginTop,f=r-h,s=h+i.collisionHeight-l-r;i.collisionHeight>l?f>0&&s<=0?(o=e.top+f+i.collisionHeight-l-r,e.top+=f-o):e.top=s>0&&f<=0?r:f>s?r+l-i.collisionHeight:r:f>0?e.top+=f:s>0?e.top-=s:e.top=t(e.top-h,e.top)}},flip:{left:function(t,e){var i,o,r=e.within,l=r.offset.left+r.scrollLeft,h=r.width,f=r.isWindow?r.scrollLeft:r.offset.left,s=t.left-e.collisionPosition.marginLeft,a=s-f,d=s+e.collisionWidth-h-f,p="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,c="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,g=-2*e.offset[0];a<0?((i=t.left+p+c+g+e.collisionWidth-h-l)<0||i<n(a))&&(t.left+=p+c+g):d>0&&((o=t.left-e.collisionPosition.marginLeft+p+c+g-f)>0||n(o)<d)&&(t.left+=p+c+g)},top:function(t,e){var i,o,r=e.within,l=r.offset.top+r.scrollTop,h=r.height,f=r.isWindow?r.scrollTop:r.offset.top,s=t.top-e.collisionPosition.marginTop,a=s-f,d=s+e.collisionHeight-h-f,p="top"===e.my[1],c=p?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,g="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,u=-2*e.offset[1];a<0?((o=t.top+c+g+u+e.collisionHeight-h-l)<0||o<n(a))&&(t.top+=c+g+u):d>0&&((i=t.top-e.collisionPosition.marginTop+c+g+u-f)>0||n(i)<d)&&(t.top+=c+g+u)}},flipfit:{left:function(){c.flip.left.apply(this,arguments),c.fit.left.apply(this,arguments)},top:function(){c.flip.top.apply(this,arguments),c.fit.top.apply(this,arguments)}}};k.posit=function(a,g){var w,v,y,k,H,T,z=(g=e.extend({},g)).of,P=(S=g.within,_=S||window,B=i.isWindow(_),C=!!_&&9===_.nodeType,D=!B&&!C,O=u(_),{element:_,isWindow:B,isDocument:C,offset:D?m(S):{left:0,top:0},scrollLeft:x(_),scrollTop:W(_),width:O.width,height:O.height}),L=function(t){var e=t.isWindow||t.isDocument?"":o.css(t.element,"overflow-x"),i=t.isWindow||t.isDocument?"":o.css(t.element,"overflow-y"),n="scroll"===e||"auto"===e&&t.width<scrollWidth(t.element);return{width:"scroll"===i||"auto"===i&&t.height<scrollHeight(t.element)?f():0,height:n?f():0}}(P),R=(g.collision||"flip").split(" "),E={};var S,_,B,C,D,O;M=z,T=9===M.nodeType?{size:b(M),offset:{top:0,left:0}}:i.isWindow(M)?{size:b(M),offset:{top:W(M),left:x(M)}}:M.preventDefault?{size:{width:0,height:0},offset:{top:M.pageY,left:M.pageX}}:{size:b(M),offset:m(M)},z.preventDefault&&(g.at="left top");var M;v=T.size.width,y=T.size.height,k=T.offset,H=e.extend({},k),e.each(["my","at"],function(){var t,e,i=(g[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):l.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=l.test(i[1])?i[1]:"center",t=h.exec(i[0]),e=h.exec(i[1]),E[this]=[t?t[0]:0,e?e[0]:0],g[this]=[s.exec(i[0])[0],s.exec(i[1])[0]]}),1===R.length&&(R[1]=R[0]);"right"===g.at[0]?H.left+=v:"center"===g.at[0]&&(H.left+=v/2);"bottom"===g.at[1]?H.top+=y:"center"===g.at[1]&&(H.top+=y/2);return w=d(E.at,v,y),H.left+=w[0],H.top+=w[1],function(i){var o,r,l=u(i),h=l.width,f=l.height,s=p(i,"marginLeft"),a=p(i,"marginTop"),x=h+s+p(i,"marginRight")+L.width,W=f+a+p(i,"marginBottom")+L.height,b=e.extend({},H),T=d(E.my,l.width,l.height);"right"===g.my[0]?b.left-=h:"center"===g.my[0]&&(b.left-=h/2),"bottom"===g.my[1]?b.top-=f:"center"===g.my[1]&&(b.top-=f/2),b.left+=T[0],b.top+=T[1],o={marginLeft:s,marginTop:a},e.each(["left","top"],function(t,e){c[R[t]]&&c[R[t]][e](b,{targetWidth:v,targetHeight:y,elemWidth:h,elemHeight:f,collisionPosition:o,collisionWidth:x,collisionHeight:W,offset:[w[0]+T[0],w[1]+T[1]],my:g.my,at:g.at,within:P,elem:i})}),g.using&&(r=function(e){var o=k.left-b.left,r=o+v-h,l=k.top-b.top,s=l+y-f,a={target:{element:z,left:k.left,top:k.top,width:v,height:y},element:{element:i,left:b.left,top:b.top,width:h,height:f},horizontal:r<0?"left":o>0?"right":"center",vertical:s<0?"top":l>0?"bottom":"middle"};v<h&&n(o+r)<v&&(a.horizontal="center"),y<f&&n(l+s)<y&&(a.vertical="middle"),t(n(o),n(r))>t(n(l),n(s))?a.important="horizontal":a.important="vertical",g.using.call(this,e,a)}),m(i,e.extend(b,{using:r}))}(a)}}(),t.attach("domx.geom",k)}),t("skylark-domx-geom/main",["./geom","skylark-domx-velm","skylark-domx-query"],function(t,e,i){return e.delegate(["borderExtents","boundingPosition","boundingRect","clientHeight","clientSize","clientWidth","contentRect","height","marginExtents","offsetParent","paddingExtents","pagePosition","pageRect","relativePosition","relativeRect","scrollIntoView","scrollLeft","scrollTop","size","width"],t),i.fn.offset=i.wraps.wrapper_value(t.pagePosition,t,t.pagePosition),i.fn.scrollTop=i.wraps.wrapper_value(t.scrollTop,t),i.fn.scrollLeft=i.wraps.wrapper_value(t.scrollLeft,t),i.fn.position=function(e){if(this.length){if(e)return e.of&&e.of.length&&((e=langx.clone(e)).of=e.of[0]),this.each(function(){t.posit(this,e)});var i=this[0];return t.relativePosition(i)}},i.fn.offsetParent=i.wraps.wrapper_map(t.offsetParent,t),i.fn.size=i.wraps.wrapper_value(t.size,t),i.fn.width=i.wraps.wrapper_value(t.width,t,t.width),i.fn.height=i.wraps.wrapper_value(t.height,t,t.height),i.fn.clientSize=i.wraps.wrapper_value(t.clientSize,t.clientSize),["width","height"].forEach(function(e){var o=e.replace(/./,function(t){return t[0].toUpperCase()});i.fn["outer"+o]=function(i,o){if(arguments.length?"boolean"!=typeof i&&(o=i,i=!1):(i=!1,o=void 0),void 0===o){var n=this[0];if(!n)return;var r=t.size(n);if(i){var l=t.marginExtents(n);r.width=r.width+l.left+l.right,r.height=r.height+l.top+l.bottom}return"width"===e?r.width:r.height}return this.each(function(n,r){var l={},h=t.marginExtents(r);"width"===e?(l.width=o,i&&(l.width=l.width-h.left-h.right)):(l.height=o,i&&(l.height=l.height-h.top-h.bottom)),t.size(r,l)})}}),i.fn.innerWidth=i.wraps.wrapper_value(t.clientWidth,t,t.clientWidth),i.fn.innerHeight=i.wraps.wrapper_value(t.clientHeight,t,t.clientHeight),t}),t("skylark-domx-geom",["skylark-domx-geom/main"],function(t){return t})}(i),!n){var h=o("skylark-langx/skylark");r?module.exports=h:e.skylarkjs=h}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-geom.js.map
