(this.webpackJsonpagora=this.webpackJsonpagora||[]).push([[26],{539:function(r,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.criteriaWrap=function(r){var e=r.name,o=r.criteria,n=r.short;return{name:e,short:n,criteria:function(r,t){if(r.nodes.length!==t.nodes.length)throw Error("Criteria "+(n||e)+" abording : not same number of nodes");return o(r,t)}}}},798:function(r,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(539);e.orthogonalOrdering=function(r,e){for(var o=0;o<r.nodes.length;o++)for(var n=r.nodes[o],t=e.nodes[o],a=0;a<r.nodes.length;a++){var i=r.nodes[a],s=e.nodes[a];if(n.x<i.x!==t.x<s.x||n.y<i.y!==t.y<s.y||n.x===i.x!==(t.x===s.x)||n.y===i.y!==(t.y===s.y))return{value:0}}return{value:1}},e.OrthogonalOrderingCriteria=n.criteriaWrap({criteria:e.orthogonalOrdering,name:"orthogonal-ordering/original",short:"oo_o"}),e.default=e.OrthogonalOrderingCriteria}}]);
//# sourceMappingURL=26.9882a8ba.chunk.js.map