/**
 * skylark-domx-geom - The skylark geom library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","./geom","skylark-domx-velm","skylark-domx-query"],function(t,e,i,n){return i.delegate(["borderExtents","boundingPosition","boundingRect","clientHeight","clientSize","clientWidth","contentRect","height","marginExtents","offsetParent","paddingExtents","pagePosition","pageRect","relativePosition","relativeRect","scrollIntoView","scrollLeft","scrollTop","size","width"],e),n.fn.offset=n.wraps.wrapper_value(e.pagePosition,e,e.pagePosition),n.fn.scrollTop=n.wraps.wrapper_value(e.scrollTop,e),n.fn.scrollLeft=n.wraps.wrapper_value(e.scrollLeft,e),n.fn.position=function(i){if(!this.length)return this;if(i)return i.of&&i.of.length&&((i=t.clone(i)).of=i.of[0]),this.each(function(){e.posit(this,i)});var n=this[0];return e.relativePosition(n)},n.fn.offsetParent=n.wraps.wrapper_map(e.offsetParent,e),n.fn.size=n.wraps.wrapper_value(e.size,e),n.fn.width=n.wraps.wrapper_value(e.width,e,e.width),n.fn.height=n.wraps.wrapper_value(e.height,e,e.height),n.fn.clientSize=n.wraps.wrapper_value(e.clientSize,e.clientSize),["width","height"].forEach(function(t){var i=t.replace(/./,function(t){return t[0].toUpperCase()});n.fn["outer"+i]=function(i,n){if(arguments.length?"boolean"!=typeof i&&(n=i,i=!1):(i=!1,n=void 0),void 0===n){var r=this[0];if(!r)return;var o=e.size(r);if(i){var a=e.marginExtents(r);o.width=o.width+a.left+a.right,o.height=o.height+a.top+a.bottom}return"width"===t?o.width:o.height}return this.each(function(r,o){var a={},h=e.marginExtents(o);"width"===t?(a.width=n,i&&(a.width=a.width-h.left-h.right)):(a.height=n,i&&(a.height=a.height-h.top-h.bottom)),e.size(o,a)})}}),n.fn.innerWidth=n.wraps.wrapper_value(e.clientWidth,e,e.clientWidth),n.fn.innerHeight=n.wraps.wrapper_value(e.clientHeight,e,e.clientHeight),e});
//# sourceMappingURL=sourcemaps/main.js.map
