/**
 * skylark-domx-geom - The skylark geom library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","./geom","skylark-domx-velm","skylark-domx-query"],function(e,t,i,n){return i.delegate(["borderExtents","boundingPosition","boundingRect","clientHeight","clientSize","clientWidth","contentRect","height","marginExtents","marginRect","marginSize","offsetParent","paddingExtents","pagePosition","pageRect","relativePosition","relativeRect","scrollIntoView","scrollLeft","scrollTop","size","width"],t),n.fn.offset=n.wraps.wrapper_value(t.pagePosition,t,t.pagePosition),n.fn.scrollTop=n.wraps.wrapper_value(t.scrollTop,t),n.fn.scrollLeft=n.wraps.wrapper_value(t.scrollLeft,t),n.fn.position=function(i){if(!this.length)return this;if(i)return i.of&&i.of.length&&((i=e.clone(i)).of=i.of[0]),this.each(function(){t.posit(this,i)});var n=this[0];return t.relativePosition(n)},n.fn.offsetParent=n.wraps.wrapper_map(t.offsetParent,t),n.fn.size=n.wraps.wrapper_value(t.size,t),n.fn.width=n.wraps.wrapper_value(t.width,t,t.width),n.fn.height=n.wraps.wrapper_value(t.height,t,t.height),n.fn.clientSize=n.wraps.wrapper_value(t.clientSize,t.clientSize),["width","height"].forEach(function(e){var i=e.replace(/./,function(e){return e[0].toUpperCase()});n.fn["outer"+i]=function(i,n){if(arguments.length?"boolean"!=typeof i&&(n=i,i=!1):(i=!1,n=void 0),void 0===n){var r=this[0];if(!r)return;var a=t.size(r);if(i){var o=t.marginExtents(r);a.width=a.width+o.left+o.right,a.height=a.height+o.top+o.bottom}return"width"===e?a.width:a.height}return this.each(function(r,a){var o={},h=t.marginExtents(a);"width"===e?(o.width=n,i&&(o.width=o.width-h.left-h.right)):(o.height=n,i&&(o.height=o.height-h.top-h.bottom)),t.size(a,o)})}}),n.fn.innerWidth=n.wraps.wrapper_value(t.clientWidth,t,t.clientWidth),n.fn.innerHeight=n.wraps.wrapper_value(t.clientHeight,t,t.clientHeight),t});
//# sourceMappingURL=sourcemaps/main.js.map
