(this.webpackJsonpagora=this.webpackJsonpagora||[]).push([[17],{539:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.criteriaWrap=function(e){var r=e.name,n=e.criteria,t=e.short;return{name:r,short:t,criteria:function(e,i){if(e.nodes.length!==i.nodes.length)throw Error("Criteria "+(t||r)+" abording : not same number of nodes");return n(e,i)}}}},814:function(e,r,n){"use strict";var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=t(n(3)),a=n(84),o=n(539),d=function(e,r){return r/e};function u(e,r){var n=i.default.minBy(e,r),t=i.default.maxBy(e,r);if(!n||!t)throw Error("Criteria nm_dm_imse getCenter error either: "+n+" or "+t);return t[r]/2+n[r]/2}function s(e,r){var n=i.default.minBy(e,r),t=i.default.maxBy(e,r);if(!n||!t)throw Error("Criteria nm_dm_imse getSpan error either: "+n+" or "+t);return t[r]-n[r]}function m(e,r){var n=e.nodes.length,t=d(s(e.nodes,"x"),s(r.nodes,"x")),o=d(s(e.nodes,"y"),s(r.nodes,"y")),u=i.default.sortBy(c(e.nodes),"index"),m=i.default.sortBy(c(r.nodes),"index");return i.default.reduce(u,(function(e,r){var d=e.value,u=e.displacement,s=r.x,c=r.y,f=r.index,l={x:a.round(s*t,-9),y:a.round(c*o,-9)},v=i.default.find(m,["index",f]);if(!v)throw Error("Criteria nm_dm_imse : index "+f+" does not exist in updated");var p=a.norm(l,v);return d+=p*p/n,u.push(p),{value:d,displacement:u}}),{value:0,displacement:[]})}function c(e){var r=u(e,"x"),n=u(e,"y");return i.default.map(e,(function(e){var t=e.index,i=e.x,a=e.y;return{index:t,x:i-r,y:a-n}}))}r.scaleChange=m,r.NodeMovementDistanceMovedImprovedMeanSquaredEuclideanCriteria=o.criteriaWrap({criteria:m,name:"node-movement/distance-moved/improved-mean-squared-euclidean",short:"nm_dm_imse"}),r.default=r.NodeMovementDistanceMovedImprovedMeanSquaredEuclideanCriteria}}]);
//# sourceMappingURL=17.11d0dd20.chunk.js.map