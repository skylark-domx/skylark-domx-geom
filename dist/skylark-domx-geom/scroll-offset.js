/**
 * skylark-domx-geom - The skylark geom library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","skylark-domx-noder","./geom"],function(e,o,r){return r.scrollOffset=function(e){var o=0,r=0,f=noder.scrollingElement();if(e)for(;o+=e.scrollLeft,r+=e.scrollTop,e!==f&&(e=e.parentNode););return{offsetLeft:o,offsetTop:r}}});
//# sourceMappingURL=sourcemaps/scroll-offset.js.map
