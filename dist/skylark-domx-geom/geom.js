/**
 * skylark-domx-geom - The skylark geom library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","skylark-domx-noder","skylark-domx-styler"],function(t,e,i,o){var n,l=/^(?:body|html)$/i,f=e.toPixel,h=i.offsetParent;function r(){if(void 0!==n)return n;var t,e,l=i.createFragment("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")[0],f=l.childNodes[0];return i.append(document.body,l),t=f.offsetWidth,o.css(l,"overflow","scroll"),t===(e=f.offsetWidth)&&(e=l[0].clientWidth),i.remove(l),n=t-e}function s(t){if(i.isWindow(t))return{left:0,top:0,right:0,bottom:0};var e=getComputedStyle(t);return{left:f(e.borderLeftWidth,t),top:f(e.borderTopWidth,t),right:f(e.borderRightWidth,t),bottom:f(e.borderBottomWidth,t)}}function d(t,e){if(void 0===e)return l.test(t.nodeName)?{top:0,left:0}:t.getBoundingClientRect();var i=h(t),o=d(i),n=a(t),f=s(i);return v(t,{top:e.top-o.top-n.top-f.top,left:e.left-o.left-n.left-f.left}),this}function g(t,e){return void 0!==e?(d(t,e),x(t,e),this):t.getBoundingClientRect?t.getBoundingClientRect():t==window?{top:0,left:0,bottom:window.innerHeight,right:window.innerWidth,height:window.innerHeight,width:window.innerWidth}:void 0}function c(t,e){if(void 0==e)return{width:t.clientWidth,height:t.clientHeight};var i="border-box"===o.css(t,"box-sizing"),n={width:e.width,height:e.height};if(i){var l=s(t);void 0!==n.width&&(n.width=n.width+l.left+l.right),void 0!==n.height&&(n.height=n.height+l.top+l.bottom)}else{var f=w(t);void 0!==n.width&&(n.width=n.width-f.left-f.right),void 0!==n.height&&(n.height=n.height-f.top-f.bottom)}return o.css(t,n),this}function p(t){var e=t.documentElement,i=t.body,o=Math.max,n=o(e.scrollWidth,i.scrollWidth),l=o(e.clientWidth,i.clientWidth),f=o(e.offsetWidth,i.offsetWidth),h=o(e.scrollHeight,i.scrollHeight),r=o(e.clientHeight,i.clientHeight),s=o(e.offsetHeight,i.offsetHeight);return{width:n<f?l:n,height:h<s?r:h}}function a(t){if(i.isWindow(t))return{left:0,top:0,right:0,bottom:0};var e=getComputedStyle(t);return{left:f(e.marginLeft),top:f(e.marginTop),right:f(e.marginRight),bottom:f(e.marginBottom)}}function u(t){var e=x(t),i=a(t);return{width:e.width+i.left+i.right,height:e.height+i.top+i.bottom}}function w(t){if(i.isWindow(t))return{left:0,top:0,right:0,bottom:0};var e=getComputedStyle(t);return{left:f(e.paddingLeft),top:f(e.paddingTop),right:f(e.paddingRight),bottom:f(e.paddingBottom)}}function m(t,e){if(void 0===e){var i=t.getBoundingClientRect(),o=t.ownerDocument.defaultView;return{left:i.left+o.pageXOffset,top:i.top+o.pageYOffset}}var n=h(t),l=m(n),f=a(t),r=s(n);return v(t,{top:e.top-l.top-f.top-r.top,left:e.left-l.left-f.left-r.left}),this}function v(t,e){if(void 0==e){var i=h(t),n=d(t),l=d(i),f=(a(t),s(i));return{top:n.top-l.top-f.top,left:n.left-l.left-f.left}}var r={top:e.top,left:e.left};return"static"==o.css(t,"position")&&(r.position="relative"),o.css(t,r),this}function W(t,e){if(void 0===e){var i=h(t),o=g(t),n=d(i),l=(a(t),s(i));return{top:o.top-n.top-l.top,left:o.left-n.left-l.left,width:o.width,height:o.height}}return v(t,e),x(t,e),this}function y(t,e){9===t.nodeType&&(t=t.defaultView);var i="scrollLeft"in t;return void 0===e?i?t.scrollLeft:t.pageXOffset:(i?t.scrollLeft=e:t.scrollTo(e,t.scrollY),this)}function b(t,e){9===t.nodeType&&(t=t.defaultView);var i="scrollTop"in t;return void 0===e?i?t.scrollTop:t.pageYOffset:(i?t.scrollTop=e:t.scrollTo(t.scrollX,e),this)}function x(t,i){if(void 0==i)return e.isWindow(t)?{width:t.innerWidth,height:t.innerHeight}:e.isDocument(t)?p(document):{width:t.offsetWidth,height:t.offsetHeight};var n="border-box"===o.css(t,"box-sizing"),l={width:i.width,height:i.height};if(!n){var f=w(t),h=s(t);void 0!==l.width&&""!==l.width&&null!==l.width&&(l.width=l.width-f.left-f.right-h.left-h.right),void 0!==l.height&&""!==l.height&&null!==l.height&&(l.height=l.height-f.top-f.bottom-h.top-h.bottom)}return o.css(t,l),this}function H(){return H}return e.mixin(H,{borderExtents:s,boundingPosition:d,boundingRect:g,clientHeight:function(t,e){return void 0==e?c(t).height:c(t,{height:e})},clientSize:c,clientWidth:function(t,e){return void 0==e?c(t).width:(c(t,{width:e}),this)},contentRect:function(t){var e=c(t),i=w(t);return{left:i.left,top:i.top,width:e.width-i.left-i.right,height:e.height-i.top-i.bottom}},getDocumentSize:p,height:function(t,e){return void 0==e?x(t).height:(x(t,{height:e}),this)},marginExtents:a,marginRect:function(t){var e=W(t),i=a(t);return{left:e.left,top:e.top,width:e.width+i.left+i.right,height:e.height+i.top+i.bottom}},marginSize:u,offsetParent:h,paddingExtents:w,pagePosition:m,pageRect:function(t,e){if(void 0===e){var i=t.getBoundingClientRect(),o=t.ownerDocument.defaultView;return{left:i.left+o.pageXOffset,top:i.top+o.pageYOffset,width:Math.round(i.width),height:Math.round(i.height)}}return m(t,e),x(t,e),this},relativePosition:v,relativeRect:W,scrollbarWidth:r,scrollIntoView:function(t,e){var i,o,n,l,f,h,r=t.parentNode,s=function(t,e){var i,o,n=t;for(i=o=0;n&&n!=e&&n.nodeType;)i+=n.offsetLeft||0,o+=n.offsetTop||0,n=n.offsetParent;return{x:i,y:o}}(t,r);return i=s.x,o=s.y,n=t.offsetWidth,l=t.offsetHeight,f=r.clientWidth,h=r.clientHeight,"end"==e?(i-=f-n,o-=h-l):"center"==e&&(i-=f/2-n/2,o-=h/2-l/2),r.scrollLeft=i,r.scrollTop=o,this},scrollLeft:y,scrollTop:b,scrollBy:function(t,e,i){t.scrollLeft+=e,t.scrollTop+=i},size:x,testAxis:function(t){for(var e=t.offsetTop,i=t.offsetLeft,o=t.offsetWidth,n=t.offsetHeight;t.offsetParent;)e+=(t=t.offsetParent).offsetTop,i+=t.offsetLeft;var l={x:0,y:0};return e<window.pageYOffset?l.y=e-window.pageYOffset:e+n>window.pageYOffset+window.innerHeight&&(l.y=e+n-(window.pageYOffset+window.innerHeight)),i<window.pageXOffset?l.x=i-window.pageXOffset:i+o>window.pageXOffset+window.innerWidth&&(l.x=i+o-(window.pageXOffset+window.innerWidth)),l},width:function(t,e){return void 0==e?x(t).width:(x(t,{width:e}),this)}}),function(){var t=Math.max,n=Math.abs,l=/left|center|right/,f=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,s=/^\w+/,d=/%$/;function g(t,e,i){return[parseFloat(t[0])*(d.test(t[0])?e/100:1),parseFloat(t[1])*(d.test(t[1])?i/100:1)]}function c(t,e){return parseInt(o.css(t,e),10)||0}var p={fit:{left:function(e,i){var o,n=i.within,l=n.isWindow?n.scrollLeft:n.offset.left,f=n.width,h=e.left-i.collisionPosition.marginLeft,r=l-h,s=h+i.collisionWidth-f-l;i.collisionWidth>f?r>0&&s<=0?(o=e.left+r+i.collisionWidth-f-l,e.left+=r-o):e.left=s>0&&r<=0?l:r>s?l+f-i.collisionWidth:l:r>0?e.left+=r:s>0?e.left-=s:e.left=t(e.left-h,e.left)},top:function(e,i){var o,n=i.within,l=n.isWindow?n.scrollTop:n.offset.top,f=i.within.height,h=e.top-i.collisionPosition.marginTop,r=l-h,s=h+i.collisionHeight-f-l;i.collisionHeight>f?r>0&&s<=0?(o=e.top+r+i.collisionHeight-f-l,e.top+=r-o):e.top=s>0&&r<=0?l:r>s?l+f-i.collisionHeight:l:r>0?e.top+=r:s>0?e.top-=s:e.top=t(e.top-h,e.top)}},flip:{left:function(t,e){var i,o,l=e.within,f=l.offset.left+l.scrollLeft,h=l.width,r=l.isWindow?l.scrollLeft:l.offset.left,s=t.left-e.collisionPosition.marginLeft,d=s-r,g=s+e.collisionWidth-h-r,c="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,a=-2*e.offset[0];d<0?((i=t.left+c+p+a+e.collisionWidth-h-f)<0||i<n(d))&&(t.left+=c+p+a):g>0&&((o=t.left-e.collisionPosition.marginLeft+c+p+a-r)>0||n(o)<g)&&(t.left+=c+p+a)},top:function(t,e){var i,o,l=e.within,f=l.offset.top+l.scrollTop,h=l.height,r=l.isWindow?l.scrollTop:l.offset.top,s=t.top-e.collisionPosition.marginTop,d=s-r,g=s+e.collisionHeight-h-r,c="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,p="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,a=-2*e.offset[1];d<0?((o=t.top+c+p+a+e.collisionHeight-h-f)<0||o<n(d))&&(t.top+=c+p+a):g>0&&((i=t.top-e.collisionPosition.marginTop+c+p+a-r)>0||n(i)<g)&&(t.top+=c+p+a)}},flipfit:{left:function(){p.flip.left.apply(this,arguments),p.fit.left.apply(this,arguments)},top:function(){p.flip.top.apply(this,arguments),p.fit.top.apply(this,arguments)}}};H.posit=function(d,a){var w,v,W,H,T,L,P,z,O,R,k,B,D,X=(a=e.extend({},a)).of,Y=(P=a.within,z=P||window,O=i.isWindow(z),R=!!z&&9===z.nodeType,k=!O&&!R,B=u(z),{element:z,isWindow:O,isDocument:R,offset:k?m(P):{left:0,top:0},scrollLeft:y(z),scrollTop:b(z),width:B.width,height:B.height}),C=function(t){var e=t.isWindow||t.isDocument?"":o.css(t.element,"overflow-x"),i=t.isWindow||t.isDocument?"":o.css(t.element,"overflow-y"),n="scroll"===e||"auto"===e&&t.width<scrollWidth(t.element);return{width:"scroll"===i||"auto"===i&&t.height<scrollHeight(t.element)?r():0,height:n?r():0}}(Y),S=(a.collision||"flip").split(" "),M={};return L=9===(D=X).nodeType?{size:x(D),offset:{top:0,left:0}}:i.isWindow(D)?{size:x(D),offset:{top:b(D),left:y(D)}}:D.preventDefault?{size:{width:0,height:0},offset:{top:D.pageY,left:D.pageX}}:{size:x(D),offset:m(D)},X.preventDefault&&(a.at="left top"),v=L.size.width,W=L.size.height,H=L.offset,T=e.extend({},H),e.each(["my","at"],function(){var t,e,i=(a[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):f.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=f.test(i[1])?i[1]:"center",t=h.exec(i[0]),e=h.exec(i[1]),M[this]=[t?t[0]:0,e?e[0]:0],a[this]=[s.exec(i[0])[0],s.exec(i[1])[0]]}),1===S.length&&(S[1]=S[0]),"right"===a.at[0]?T.left+=v:"center"===a.at[0]&&(T.left+=v/2),"bottom"===a.at[1]?T.top+=W:"center"===a.at[1]&&(T.top+=W/2),w=g(M.at,v,W),T.left+=w[0],T.top+=w[1],function(i){var o,l,f=u(i),h=f.width,r=f.height,s=c(i,"marginLeft"),d=c(i,"marginTop"),y=h+s+c(i,"marginRight")+C.width,b=r+d+c(i,"marginBottom")+C.height,x=e.extend({},T),L=g(M.my,f.width,f.height);"right"===a.my[0]?x.left-=h:"center"===a.my[0]&&(x.left-=h/2),"bottom"===a.my[1]?x.top-=r:"center"===a.my[1]&&(x.top-=r/2),x.left+=L[0],x.top+=L[1],o={marginLeft:s,marginTop:d},e.each(["left","top"],function(t,e){p[S[t]]&&p[S[t]][e](x,{targetWidth:v,targetHeight:W,elemWidth:h,elemHeight:r,collisionPosition:o,collisionWidth:y,collisionHeight:b,offset:[w[0]+L[0],w[1]+L[1]],my:a.my,at:a.at,within:Y,elem:i})}),a.using&&(l=function(e){var o=H.left-x.left,l=o+v-h,f=H.top-x.top,s=f+W-r,d={target:{element:X,left:H.left,top:H.top,width:v,height:W},element:{element:i,left:x.left,top:x.top,width:h,height:r},horizontal:l<0?"left":o>0?"right":"center",vertical:s<0?"top":f>0?"bottom":"middle"};v<h&&n(o+l)<v&&(d.horizontal="center"),W<r&&n(f+s)<W&&(d.vertical="middle"),t(n(o),n(l))>t(n(f),n(s))?d.important="horizontal":d.important="vertical",a.using.call(this,e,d)}),m(i,e.extend(x,{using:l}))}(d)}}(),t.attach("domx.geom",H)});
//# sourceMappingURL=sourcemaps/geom.js.map
