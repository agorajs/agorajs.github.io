(window.webpackJsonpagora=window.webpackJsonpagora||[]).push([[20],{179:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.criteriaWrap=function(e){var r=e.name,n=e.criteria,a=e.short;return{name:r,short:a,criteria:function(e,o){if(e.nodes.length!==o.nodes.length)throw Error("Criteria "+(a||r)+" abording : not same number of nodes");return n(e,o)}}}},453:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=n(22),o=n(179);r.phiChange=function(e,r){for(var n=e.nodes,o=r.nodes,t=0,i=0;i<n.length;i++){var d=n[i],u=o[i];t+=Math.pow(a.normX(u,d),2)+Math.pow(a.normY(u,d),2)}return{value:t}},r.NodeMovementDistanceMovedEuclideanSquareCriteria=o.criteriaWrap({criteria:r.phiChange,name:"node-movement/distance-moved/squared-euclidean",short:"nm_dm_se"}),r.default=r.NodeMovementDistanceMovedEuclideanSquareCriteria}}]);
//# sourceMappingURL=20.668eed6a.chunk.js.map