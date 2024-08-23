/**
 * skylark-domx-geom - The skylark geom library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","skylark-domx-styler","./geom"],function(u,e,r){return r.scrollToTop=function(e,r,n,l){var o=parseInt(e.scrollTop),t=0,s=1e3*n/5,a=parseInt(r),c=setInterval(function(){++t<=s&&(e.scrollTop=(a-o)/s*t+o),1+s<=t&&(clearInterval(c),l)&&u.debounce(l,1e3)()},5);return this}});
//# sourceMappingURL=sourcemaps/scroll-to-top.js.map
