/**
 * skylark-domx-geom - The skylark geom library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
(function(factory,globals,define,require) {
  var isAmd = (typeof define === 'function' && define.amd),
      isCmd = (!isAmd && typeof exports !== 'undefined');

  if (!isAmd && !define) {
    var map = {};
    function absolute(relative, base) {
        if (relative[0]!==".") {
          return relative;
        }
        var stack = base.split("/"),
            parts = relative.split("/");
        stack.pop(); 
        for (var i=0; i<parts.length; i++) {
            if (parts[i] == ".")
                continue;
            if (parts[i] == "..")
                stack.pop();
            else
                stack.push(parts[i]);
        }
        return stack.join("/");
    }
    define = globals.define = function(id, deps, factory) {
        if (typeof factory == 'function') {
            map[id] = {
                factory: factory,
                deps: deps.map(function(dep){
                  return absolute(dep,id);
                }),
                resolved: false,
                exports: null
            };
            require(id);
        } else {
            map[id] = {
                factory : null,
                resolved : true,
                exports : factory
            };
        }
    };
    require = globals.require = function(id) {
        if (!map.hasOwnProperty(id)) {
            throw new Error('Module ' + id + ' has not been defined');
        }
        var module = map[id];
        if (!module.resolved) {
            var args = [];

            module.deps.forEach(function(dep){
                args.push(require(dep));
            })

            module.exports = module.factory.apply(globals, args) || null;
            module.resolved = true;
        }
        return module.exports;
    };
  }
  
  if (!define) {
     throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");
  }

  factory(define,require);

  if (!isAmd) {
    var skylarkjs = require("skylark-langx-ns");

    if (isCmd) {
      module.exports = skylarkjs;
    } else {
      globals.skylarkjs  = skylarkjs;
    }
  }

})(function(define,require) {

define("skylark-domx-geom/geom",["skylark-langx/skylark","skylark-langx/langx","skylark-domx-noder","skylark-domx-styler"],function(t,n,o,r){"use strict";var l,h=/^(?:body|html)$/i,i=n.toPixel,f=o.offsetParent;function s(t){var e;return o.isWindow(t)?{left:0,top:0,right:0,bottom:0}:(e=getComputedStyle(t),{left:i(e.borderLeftWidth,t),top:i(e.borderTopWidth,t),right:i(e.borderRightWidth,t),bottom:i(e.borderBottomWidth,t)})}function d(t,e){var i,o,n,l;return void 0===e?h.test(t.nodeName)?{top:0,left:0}:t.getBoundingClientRect():(o=d(i=f(t)),n=m(t),l=s(i),y(t,{top:e.top-o.top-n.top-l.top+(H(i)||0),left:e.left-o.left-n.left-l.left+(x(i)||0)}),this)}function g(t,e){return void 0===e?t==window||t==document.documentElement||t==document.body?{top:0,left:0,bottom:window.innerHeight,right:window.innerWidth,height:window.innerHeight,width:window.innerWidth}:t.getBoundingClientRect?t.getBoundingClientRect():void 0:(d(t,e),c(t,e),this)}function c(t,e){var i,o;return null==e?n.isWindow(t)?{width:t.innerWidth,height:t.innerHeight}:n.isDocument(t)?w(document):{width:t.offsetWidth,height:t.offsetHeight}:(i="border-box"===r.css(t,"box-sizing"),e={width:e.width,height:e.height},i||(i=v(t),o=s(t),void 0!==e.width&&""!==e.width&&null!==e.width&&(e.width=e.width-i.left-i.right-o.left-o.right),void 0!==e.height&&""!==e.height&&null!==e.height&&(e.height=e.height-i.top-i.bottom-o.top-o.bottom)),r.css(t,e),this)}function a(t,e){var i;return null==e?{width:t.clientWidth||t.innerWidth,height:t.clientHeight||t.innerHeight}:(i="border-box"===r.css(t,"box-sizing"),e={width:e.width,height:e.height},i?(i=s(t),void 0!==e.width&&(e.width=e.width+i.left+i.right),void 0!==e.height&&(e.height=e.height+i.top+i.bottom)):(i=v(t),void 0!==e.width&&(e.width=e.width-i.left-i.right),void 0!==e.height&&(e.height=e.height-i.top-i.bottom)),r.css(t,e),this)}function e(t,e){return null==e?p(t).height:(p(t,{height:e}),this)}function p(t,e){var i=a(t),o=v(t);return void 0===e?{width:i.width-o.left-o.right,height:i.height-o.top-o.bottom}:(i="border-box"===r.css(t,"box-sizing"),e={width:e.width,height:e.height},i&&(i=s(t),void 0!==e.width&&""!==e.width&&null!==e.width&&(e.width=e.width+o.left+o.right+i.left+i.right),void 0!==e.height)&&""!==e.height&&null!==e.height&&(e.height=e.height+o.top+o.bottom+i.top+i.bottom),r.css(t,e),this)}function u(t,e){return null==e?p(t).width:(p(t,{width:e}),this)}function w(t){var e=t.documentElement,t=t.body,i=Math.max,o=i(e.scrollWidth,t.scrollWidth),n=i(e.clientWidth,t.clientWidth),l=i(e.offsetWidth,t.offsetWidth),h=i(e.scrollHeight,t.scrollHeight),r=i(e.clientHeight,t.clientHeight);return{width:o<l?n:o,height:h<i(e.offsetHeight,t.offsetHeight)?r:h}}function m(t){return o.isWindow(t)?{left:0,top:0,right:0,bottom:0}:(t=getComputedStyle(t),{left:i(t.marginLeft),top:i(t.marginTop),right:i(t.marginRight),bottom:i(t.marginBottom)})}function v(t){return o.isWindow(t)||o.isDoc(t)?{left:0,top:0,right:0,bottom:0}:(t=getComputedStyle(t),{left:i(t.paddingLeft),top:i(t.paddingTop),right:i(t.paddingRight),bottom:i(t.paddingBottom)})}function b(t,e){var i,o,n;return void 0===e?(n=t.getBoundingClientRect(),i=t.ownerDocument.defaultView,{left:n.left+i.pageXOffset,top:n.top+i.pageYOffset}):(i=b(n=f(t)),o=m(t),n=s(n),y(t,{top:e.top-i.top-o.top-n.top,left:e.left-i.left-o.left-n.left}),this)}function y(t,e){var i,o,n,l,h;return null==e?(l=f(t),h=d(t),i=d(l),o=m(t),n=s(l),{top:h.top-i.top-n.top-o.top,left:h.left-i.left-n.left-o.left}):(l=f(t),h={top:e.top,left:e.left},"static"==r.css(t,"position")&&(h.position="relative"),r.css(t,h),this)}function W(t,e){var i,o,n;return void 0===e?(n=f(t),i=g(t),o=d(n),m(t),n=s(n),{top:i.top-o.top-n.top,left:i.left-o.left-n.left,width:i.width,height:i.height}):(y(t,e),c(t,e),this)}function x(t,e){9===t.nodeType?t=t.defaultView:t==document.body&&(t=document.scrollingElement||document.documentElement);var i="scrollLeft"in t;return void 0===e?i?t.scrollLeft:t.pageXOffset:(i?t.scrollLeft=e:t.scrollTo(e,t.scrollY),this)}function H(t,e){9===t.nodeType?t=t.defaultView:t==document.body&&(t=document.scrollingElement||document.documentElement);var i="scrollTop"in t;return void 0===e?i?t.scrollTop:t.pageYOffset:(i?t.scrollTop=e:t.scrollTo(t.scrollX,e),this)}function k(t){return g(t=t||window)}function T(){return T}return n.mixin(T,{borderExtents:s,boundingHeight:function(t,e){return null==e?c(t).height:(c(t,{height:e}),this)},boundingPosition:d,boundingRect:g,boundingSize:c,boundingWidth:function(t,e){return null==e?c(t).width:(c(t,{width:e}),this)},clientHeight:function(t,e){return null==e?a(t).height:a(t,{height:e})},clientSize:a,clientWidth:function(t,e){return null==e?a(t).width:(a(t,{width:e}),this)},contentHeight:e,contentRect:function(t){var e=a(t);return{left:(t=v(t)).left,top:t.top,width:e.width-t.left-t.right,height:e.height-t.top-t.bottom}},contentSize:p,contentWidth:u,getDocumentSize:w,hasScrollbar:function(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)},height:e,inview:function(t,e){t=g(t),e=e,(i={}).width=(i.right=t.right+(e=+e||0))-(i.left=t.left-e),i.height=(i.bottom=t.bottom+e)-(i.top=t.top-e);var i,t=i,e=k();return!!t&&0<=t.bottom&&0<=t.right&&t.top<=e.height&&t.left<=e.width},isScrolledIntoView:function(t,e){var i,o,n;return"none"!==t.style.display&&(o=(i=container.scrollTop)+container.clientHeight,t=(n=t.offsetTop)+t.clientHeight,i<=n&&n<o||i<=t&&t<o||n<i&&o<=t)},marginExtents:m,marginRect:function(t){var e=W(t),t=m(t);return{left:e.left,top:e.top,width:e.width+t.left+t.right,height:e.height+t.top+t.bottom}},marginSize:function(t){var e=c(t),t=m(t);return{width:e.width+t.left+t.right,height:e.height+t.top+t.bottom}},offsetParent:f,paddingExtents:v,pagePosition:b,pageRect:function(t,e){var i,o;return void 0===e?(i=t.getBoundingClientRect(),o=t.ownerDocument.defaultView,{left:i.left+o.pageXOffset,top:i.top+o.pageYOffset,width:Math.round(i.width),height:Math.round(i.height)}):(b(t,e),c(t,e),this)},relativePosition:y,relativeRect:W,scrollbarWidth:function(){var t,e,i;return void 0!==l?l:(i=(e=o.createFragment("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")[0]).childNodes[0],o.append(document.body,e),t=i.offsetWidth,r.css(e,"overflow","scroll"),t===(i=i.offsetWidth)&&(i=e[0].clientWidth),o.remove(e),l=t-i)},scrollIntoView:function(t,e){var i=t.parentNode,o=(n=function(t,e){for(var i,o=t,n=i=0;o&&o!=e&&o.nodeType;)n+=o.offsetLeft||0,i+=o.offsetTop||0,o=o.offsetParent;return{x:n,y:i}}(t,i)).x,n=n.y,l=t.offsetWidth,t=t.offsetHeight,h=i.clientWidth,r=i.clientHeight;return"end"==e?(o-=h-l,n-=r-t):"center"==e&&(o-=h/2-l/2,n-=r/2-t/2),i.scrollLeft=o,i.scrollTop=n,this},scrollLeft:x,scrollTop:H,scrollBy:function(t,e,i){t.scrollLeft+=e,t.scrollTop+=i},size:p,testAxis:function(t){for(var e=t.offsetTop,i=t.offsetLeft,o=t.offsetWidth,n=t.offsetHeight;t.offsetParent;)e+=(t=t.offsetParent).offsetTop,i+=t.offsetLeft;var l={x:0,y:0};return e<window.pageYOffset?l.y=e-window.pageYOffset:e+n>window.pageYOffset+window.innerHeight&&(l.y=e+n-(window.pageYOffset+window.innerHeight)),i<window.pageXOffset?l.x=i-window.pageXOffset:i+o>window.pageXOffset+window.innerWidth&&(l.x=i+o-(window.pageXOffset+window.innerWidth)),l},viewportSize:k,width:u}),t.attach("domx.geom",T)}),define("skylark-domx-geom/posit",["skylark-langx/langx","skylark-domx-noder","skylark-domx-styler","./geom"],function(T,z,P,L){"use strict";var S=Math.max,R=Math.abs,E=/left|center|right/,O=/top|center|bottom/,B=/[\+\-]\d+(\.[\d]+)?%?/,D=/^\w+/,o=/%$/;function _(t,e,i){return[parseFloat(t[0])*(o.test(t[0])?e/100:1),parseFloat(t[1])*(o.test(t[1])?i/100:1)]}function C(t,e){return parseInt(P.css(t,e),10)||0}var X={fit:{left:function(t,e){var i,o=e.within,n=o.isWindow?o.scrollLeft:o.offset.left,o=o.width,l=t.left-e.collisionPosition.marginLeft,h=n-l,r=l+e.collisionWidth-o-n;e.collisionWidth>o?0<h&&r<=0?(i=t.left+h+e.collisionWidth-o-n,t.left+=h-i):t.left=!(0<r&&h<=0)&&r<h?n+o-e.collisionWidth:n:0<h?t.left+=h:0<r?t.left-=r:t.left=S(t.left-l,t.left)},top:function(t,e){var i,o=e.within,o=o.isWindow?o.scrollTop:o.offset.top,n=e.within.height,l=t.top-e.collisionPosition.marginTop,h=o-l,r=l+e.collisionHeight-n-o;e.collisionHeight>n?0<h&&r<=0?(i=t.top+h+e.collisionHeight-n-o,t.top+=h-i):t.top=!(0<r&&h<=0)&&r<h?o+n-e.collisionHeight:o:0<h?t.top+=h:0<r?t.top-=r:t.top=S(t.top-l,t.top)}},flip:{left:function(t,e){var i=e.within,o=i.offset.left+i.scrollLeft,n=i.width,i=i.isWindow?i.scrollLeft:i.offset.left,l=t.left-e.collisionPosition.marginLeft,h=l-i,l=l+e.collisionWidth-n-i,r="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,f="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,s=-2*e.offset[0];h<0?((n=t.left+r+f+s+e.collisionWidth-n-o)<0||n<R(h))&&(t.left+=r+f+s):0<l&&(0<(o=t.left-e.collisionPosition.marginLeft+r+f+s-i)||R(o)<l)&&(t.left+=r+f+s)},top:function(t,e){var i=e.within,o=i.offset.top+i.scrollTop,n=i.height,i=i.isWindow?i.scrollTop:i.offset.top,l=t.top-e.collisionPosition.marginTop,h=l-i,l=l+e.collisionHeight-n-i,r="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,s=-2*e.offset[1];h<0?((n=t.top+r+f+s+e.collisionHeight-n-o)<0||n<R(h))&&(t.top+=r+f+s):0<l&&(0<(o=t.top-e.collisionPosition.marginTop+r+f+s-i)||R(o)<l)&&(t.top+=r+f+s)}},flipfit:{left:function(){X.flip.left.apply(this,arguments),X.fit.left.apply(this,arguments)},top:function(){X.flip.top.apply(this,arguments),X.fit.top.apply(this,arguments)}}};return L.posit=function(t,h){var i,r,f,s,e,d,o,n,l,g,c,a,p,u,w,m,v,b=(h=T.extend({},h)).of,y=(W=h.within,p=W||window,l=z.isWindow(p),a=!!p&&9===p.nodeType,e=!l&&!a,k=L.marginSize(p),{element:p,isWindow:l,isDocument:a,offset:e?L.pagePosition(W):{left:0,top:0},scrollLeft:L.scrollLeft(p),scrollTop:L.scrollTop(p),width:k.width,height:k.height}),W=(a=(l=y).isWindow||l.isDocument?"":P.css(l.element,"overflow-x"),e=l.isWindow||l.isDocument?"":P.css(l.element,"overflow-y"),a="scroll"===a||"auto"===a&&l.width<L.scrollWidth(l.element),{width:"scroll"===e||"auto"===e&&l.height<L.scrollHeight(l.element)?L.scrollbarWidth():0,height:a?L.scrollbarWidth():0}),x=(h.collision||"flip").split(" "),H={},k=9===(p=b).nodeType?{size:size(p),offset:{top:0,left:0}}:z.isWindow(p)?{size:L.size(p),offset:{top:L.scrollTop(p),left:L.scrollLeft(p)}}:p.preventDefault?{size:{width:0,height:0},offset:{top:p.pageY,left:p.pageX}}:{size:L.size(p),offset:L.pagePosition(p)};b.preventDefault&&(h.at="left top"),r=k.size.width,f=k.size.height,s=k.offset,e=T.extend({},s),T.each(["my","at"],function(){var t,e,i=(h[this]||"").split(" ");(i=1===i.length?E.test(i[0])?i.concat(["center"]):O.test(i[0])?["center"].concat(i):["center","center"]:i)[0]=E.test(i[0])?i[0]:"center",i[1]=O.test(i[1])?i[1]:"center",t=B.exec(i[0]),e=B.exec(i[1]),H[this]=[t?t[0]:0,e?e[0]:0],h[this]=[D.exec(i[0])[0],D.exec(i[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===h.at[0]?e.left+=r:"center"===h.at[0]&&(e.left+=r/2),"bottom"===h.at[1]?e.top+=f:"center"===h.at[1]&&(e.top+=f/2),i=_(H.at,r,f),e.left+=i[0],e.top+=i[1],d=t,l=L.marginSize(d),g=l.width,c=l.height,a=C(d,"marginLeft"),p=C(d,"marginTop"),u=g+a+C(d,"marginRight")+W.width,w=c+p+C(d,"marginBottom")+W.height,m=T.extend({},e),v=_(H.my,l.width,l.height),"right"===h.my[0]?m.left-=g:"center"===h.my[0]&&(m.left-=g/2),"bottom"===h.my[1]?m.top-=c:"center"===h.my[1]&&(m.top-=c/2),m.left+=v[0],m.top+=v[1],o={marginLeft:a,marginTop:p},T.each(["left","top"],function(t,e){X[x[t]]&&X[x[t]][e](m,{targetWidth:r,targetHeight:f,elemWidth:g,elemHeight:c,collisionPosition:o,collisionWidth:u,collisionHeight:w,offset:[i[0]+v[0],i[1]+v[1]],my:h.my,at:h.at,within:y,elem:d})}),h.using&&(n=function(t){var e=s.left-m.left,i=e+r-g,o=s.top-m.top,n=o+f-c,l={target:{element:b,left:s.left,top:s.top,width:r,height:f},element:{element:d,left:m.left,top:m.top,width:g,height:c},horizontal:i<0?"left":0<e?"right":"center",vertical:n<0?"top":0<o?"bottom":"middle"};r<g&&R(e+i)<r&&(l.horizontal="center"),f<c&&R(o+n)<f&&(l.vertical="middle"),S(R(e),R(i))>S(R(o),R(n))?l.important="horizontal":l.important="vertical",h.using.call(this,t,l)}),L.pagePosition(d,T.extend(m,{using:n}))}}),define("skylark-domx-geom/scroll-to-top",["skylark-langx","skylark-domx-styler","./geom"],function(s,t,e){return e.scrollToTop=function(t,e,i,o){var n=parseInt(t.scrollTop),l=0,h=1e3*i/5,r=parseInt(e),f=setInterval(function(){++l<=h&&(t.scrollTop=(r-n)/h*l+n),1+h<=l&&(clearInterval(f),o)&&s.debounce(o,1e3)()},5);return this}}),define("skylark-domx-geom/main",["skylark-langx/langx","./geom","skylark-domx-velm","skylark-domx-query","./posit","./scroll-to-top"],function(i,r,t,e){return t.delegate(["borderExtents","boundingPosition","boundingHeight","boundingRect","boundingSize","boundingWidth","clientHeight","clientSize","clientWidth","contentHeight","contentRect","contentSize","contentWidth","marginExtents","marginRect","marginSize","offsetParent","paddingExtents","pagePosition","pageRect","relativePosition","relativeRect","scrollIntoView","scrollLeft","scrollTop"],r,{}),e.fn.offset=e.wraps.wrapper_value(r.pagePosition,r,r.pagePosition),e.fn.scrollTop=e.wraps.wrapper_value(r.scrollTop,r),e.fn.scrollLeft=e.wraps.wrapper_value(r.scrollLeft,r),e.fn.position=function(t){var e;return this.length?t?(t.of&&t.of.length&&((t=i.clone(t)).of=t.of[0]),this.each(function(){r.posit(this,t)})):(e=this[0],r.relativePosition(e)):this},e.fn.offsetParent=e.wraps.wrapper_map(r.offsetParent,r),e.fn.boundingSize=e.wraps.wrapper_value(r.boundingSize,r),e.fn.width=e.wraps.wrapper_value(r.width,r,r.width),e.fn.height=e.wraps.wrapper_value(r.height,r,r.height),e.fn.clientSize=e.wraps.wrapper_value(r.clientSize,r),["width","height"].forEach(function(h){var t=h.replace(/./,function(t){return t[0].toUpperCase()});e.fn["outer"+t]=function(n,l){var t,e;return arguments.length?"boolean"!=typeof n&&(l=n,n=!1):(n=!1,l=void 0),void 0!==l?this.each(function(t,e){var i={},o=r.marginExtents(e);"width"===h?(i.width=l,n&&(i.width=i.width-o.left-o.right)):(i.height=l,n&&(i.height=i.height-o.top-o.bottom)),r.boundingSize(e,i)}):(e=this[0])?(t=r.boundingSize(e),n&&(e=r.marginExtents(e),t.width=t.width+e.left+e.right,t.height=t.height+e.top+e.bottom),"width"===h?t.width:t.height):void 0}}),e.fn.innerWidth=e.wraps.wrapper_value(r.clientWidth,r,r.clientWidth),e.fn.innerHeight=e.wraps.wrapper_value(r.clientHeight,r,r.clientHeight),r}),define("skylark-domx-geom",["skylark-domx-geom/main"],function(t){return t});
},this,define,require);
//# sourceMappingURL=sourcemaps/skylark-domx-geom.js.map
