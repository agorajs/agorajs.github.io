(window.webpackJsonpagora=window.webpackJsonpagora||[]).push([[24],{179:function(r,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.criteriaWrap=function(r){var e=r.name,n=r.criteria,o=r.short;return{name:e,short:o,criteria:function(r,i){if(r.nodes.length!==i.nodes.length)throw Error("Criteria "+(o||e)+" abording : not same number of nodes");return n(r,i)}}}},441:function(r,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(179);e.normalizedNumberOfInversions=function(r,e){for(var n=r.nodes,o=e.nodes,i=0,t=0;t<n.length;t++)for(var a=n[t],s=o[t],u=0;u<n.length;u++){var d=n[u],l=o[u];a.x>d.x&&s.x<l.x&&i++,a.y>d.y&&s.y<l.y&&i++}return{value:i/(n.length*(n.length-1))}},e.OrthogonalOrderingNormalizedNumberInversionsCriteria=o.criteriaWrap({criteria:e.normalizedNumberOfInversions,name:"orthogonal-ordering/normalized-number-of-inversions",short:"oo_nni"}),e.default=e.OrthogonalOrderingNormalizedNumberInversionsCriteria}}]);
//# sourceMappingURL=24.97b5f8c3.chunk.js.map