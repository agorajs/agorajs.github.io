(this.webpackJsonpagora=this.webpackJsonpagora||[]).push([[25],{539:function(r,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.criteriaWrap=function(r){var e=r.name,n=r.criteria,o=r.short;return{name:e,short:o,criteria:function(r,i){if(r.nodes.length!==i.nodes.length)throw Error("Criteria "+(o||e)+" abording : not same number of nodes");return n(r,i)}}}},800:function(r,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(539);e.numberOfInversions=function(r,e){for(var n=r.nodes,o=e.nodes,i=0,t=0;t<n.length;t++)for(var a=n[t],s=o[t],u=0;u<n.length;u++){var c=n[u],f=o[u];a.x>c.x&&s.x<f.x&&i++,a.y>c.y&&s.y<f.y&&i++}return{value:i}},e.OrthogonalOrderingNumberInversionsCriteria=o.criteriaWrap({criteria:e.numberOfInversions,name:"orthogonal-ordering/number-of-inversions",short:"oo_ni"}),e.default=e.OrthogonalOrderingNumberInversionsCriteria}}]);
//# sourceMappingURL=25.1cea9ac3.chunk.js.map