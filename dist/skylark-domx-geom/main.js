/**
 * skylark-domx-geom - The skylark geom library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./geom","skylark-domx-velm","skylark-domx-query"],function(e,t,i){return t.delegate(["borderExtents","boundingPosition","boundingRect","clientHeight","clientSize","clientWidth","contentRect","height","marginExtents","offsetParent","paddingExtents","pagePosition","pageRect","relativePosition","relativeRect","scrollIntoView","scrollLeft","scrollTop","size","width"],e),i.fn.offset=i.wraps.wrapper_value(e.pagePosition,e,e.pagePosition),i.fn.scrollTop=i.wraps.wrapper_value(e.scrollTop,e),i.fn.scrollLeft=i.wraps.wrapper_value(e.scrollLeft,e),i.fn.position=function(t){if(this.length){if(t)return t.of&&t.of.length&&((t=langx.clone(t)).of=t.of[0]),this.each(function(){e.posit(this,t)});var i=this[0];return e.relativePosition(i)}},i.fn.offsetParent=i.wraps.wrapper_map(e.offsetParent,e),i.fn.size=i.wraps.wrapper_value(e.size,e),i.fn.width=i.wraps.wrapper_value(e.width,e,e.width),i.fn.height=i.wraps.wrapper_value(e.height,e,e.height),i.fn.clientSize=i.wraps.wrapper_value(e.clientSize,e.clientSize),["width","height"].forEach(function(t){var n=t.replace(/./,function(e){return e[0].toUpperCase()});i.fn["outer"+n]=function(i,n){if(arguments.length?"boolean"!=typeof i&&(n=i,i=!1):(i=!1,n=void 0),void 0===n){var r=this[0];if(!r)return;var o=e.size(r);if(i){var a=e.marginExtents(r);o.width=o.width+a.left+a.right,o.height=o.height+a.top+a.bottom}return"width"===t?o.width:o.height}return this.each(function(r,o){var a={},h=e.marginExtents(o);"width"===t?(a.width=n,i&&(a.width=a.width-h.left-h.right)):(a.height=n,i&&(a.height=a.height-h.top-h.bottom)),e.size(o,a)})}}),i.fn.innerWidth=i.wraps.wrapper_value(e.clientWidth,e,e.clientWidth),i.fn.innerHeight=i.wraps.wrapper_value(e.clientHeight,e,e.clientHeight),e});
//# sourceMappingURL=sourcemaps/main.js.map
