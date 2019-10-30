(this.webpackJsonpagora=this.webpackJsonpagora||[]).push([[9],{550:function(t,e,n){"use strict";function r(t,e){return{x:u(t,e),y:i(t,e)}}function u(t,e){return e.x-t.x}function i(t,e){return e.y-t.y}Object.defineProperty(e,"__esModule",{value:!0}),e.delta=r,e.\u0394=r,e.deltaX=u,e.\u0394x=u,e.deltaY=i,e.\u0394y=i,e.normX=function(t,e){return Math.abs(u(t,e))},e.normY=function(t,e){return Math.abs(i(t,e))},e.norm=function(t,e){return Math.hypot(u(t,e),i(t,e))}},564:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=r(n(3));function i(t){return t instanceof Array?u.default.minBy(t,(function(t){return i(t)})):t.x-t.width/2}function o(t){return t instanceof Array?u.default.maxBy(t,(function(t){return o(t)})):t.x+t.width/2}function a(t){return t instanceof Array?u.default.minBy(t,(function(t){return a(t)})):t.y-t.height/2}function f(t){return t instanceof Array?u.default.maxBy(t,(function(t){return f(t)})):t.y+t.height/2}function c(t,e,n){return t.height=n-e,t}function l(t,e,n){return t.width=n-e,t}function d(t,e){return c(t,e,f(t)),t.y=t.height/2+e,t}function s(t,e){var n=a(t);return c(t,n,e),t.y=t.height/2+n,t}function h(t,e){return l(t,e,o(t)),t.x=t.width/2+e,t}function v(t,e){var n=i(t);return l(t,n,e),t.x=t.width/2+n,t}e.diagonal=function(t){return Math.hypot(t.width,t.height)},e.minX=i,e.left=i,e.maxX=o,e.right=o,e.minY=a,e.top=a,e.maxY=f,e.bottom=f,e.setHeight=c,e.setWidth=l,e.setMinY=d,e.setTop=d,e.setMaxY=s,e.setBottom=s,e.setMinX=h,e.setLeft=h,e.setMaxX=v,e.setRight=v},565:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(550);function u(t){return Math.hypot(t.x,t.y)}e.vector=r.delta,e.magnitude=u,e.length=u,e.sum=function(t,e){return{x:t.x+e.x,y:t.y+e.y}},e.diff=function(t,e){return{x:t.x-e.x,y:t.y-e.y}},e.mult=function(t,e){return t.x*=e,t.y*=e,t}},590:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=r(n(3)),i=n(564),o=n(550);function a(t,e,n){return void 0===n&&(n=0),f(t,e,n)&&c(t,e,n)}function f(t,e,n){return void 0===n&&(n=0),o.normX(t,e)<(t.width+e.width)/2+ +n}function c(t,e,n){return void 0===n&&(n=0),o.normY(t,e)<(t.height+e.height)/2+ +n}e.overlap=a,e.overlapX=f,e.overlapY=c,e.hasOverlap=function(t,e){void 0===e&&(e=0);var n=!1,r=u.default.sortBy(t,(function(t){return i.left(t)}));return u.default.forEach(r,(function(u,o){for(var f=o+1;f<t.length;f++){var c=r[f];if(a(u,c,e))return n=!0,!1;if(i.left(c)>i.right(u)+e)break}})),n},e.edgeOverlap=function(t,e,n){void 0===n&&(n=0);var r=!1;return u.default.forEach(e,(function(e){if(a(t[e.source],t[e.target],n))return r=!0,!1})),r},e.getAllOverlaps=function(t,e){void 0===e&&(e=0);var n=u.default.sortBy(t,(function(t){return i.left(t)})),r=[];return u.default.forEach(n,(function(u,o){for(var f=o+1;f<t.length;f++){var c=n[f];if(a(u,c,e))r.push([u,c]);else if(i.left(c)>i.right(u)+e)break}})),r}},623:function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),r(n(624)),r(n(564)),r(n(625)),r(n(626)),r(n(627)),r(n(628)),r(n(629)),r(n(590)),r(n(550)),r(n(630)),r(n(565))},624:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createFunction=function(t){return t}},625:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(565),u=-14;function i(t,e){void 0===e&&(e=0);var n=Math.pow(10,-e);return Math.round(t*n)/n}e.toCartesian=function(t,e){return void 0===e&&(e=u),{x:i(t.length*Math.cos(t.theta),e),y:i(t.length*Math.sin(t.theta),e)}},e.toPolar=function(t,e){void 0===e&&(e=u);var n=Math.atan2(t.y,t.x);return n<0&&(n+=2*Math.PI),{length:r.length(t),theta:n,angle:i(180*n/Math.PI,e)}},e.round=i},626:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=r(n(3)),i=n(564);e.crop=function(t){var e=i.left(i.left(t.nodes)),n=i.top(i.top(t.nodes));return u.default.forEach(t.nodes,(function(t){t.x-=e,t.y-=n})),t}},627:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=r(n(232)),i=r(n(3)),o=n(590);function a(t){var e=u.default.from(t,(function(t){return t.x}),(function(t){return t.y})),n=[],r=i.default.chunk(e.triangles,3),o=[];return i.default.forEach(r,(function(e){e.sort((function(t,e){return+t-+e}));var r=+e[0],u=+e[1],i=+e[2];f(n,r,u)&&o.push({source:t[r].index,target:t[u].index}),f(n,u,i)&&o.push({source:t[u].index,target:t[i].index}),f(n,r,i)&&o.push({source:t[r].index,target:t[i].index})})),i.default.sortBy(o,["source","target"])}function f(t,e,n){return(void 0===t[e]||!0!==t[e][n])&&(t[e]||(t[e]=[]),t[e][n]=!0,!0)}e.default=a,e.delaunay=a,e.augmented=function(t,e){return function(t,e){var n=t.length<=e.length?[t,e]:[e,t],r=n[0],u=n[1],o=[];return i.default.forEach(r,(function(t){var e=!0;i.default.forEach(u,(function(n){return t.source===n.source&&t.target===n.target?(e=!1,!1):t.source===n.source&&t.target<n.target||t.source<n.source?(o.push(t),e=!1,!1):void 0})),e&&o.push(t)})),i.default.concat(o,u)}(a(t),function(t,e){return i.default(o.getAllOverlaps(t,e)).map((function(t){return t.sort((function(t,e){return t.index-e.index})),{source:t[0].index,target:t[1].index}})).sortBy(["source","target"]).value()}(t,e))}},628:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(550),u=n(565);e.optimalVector=function(t,e,n){void 0===n&&(n=0);var i=+(t.width+e.width)/2+ +n,o=+(t.height+e.height)/2+ +n,a=r.\u0394(t,e);if(0===a.x&&0===a.y)return{x:0,y:0};var f=i/a.x,c=o/a.y,l=Math.min(Math.abs(f),Math.abs(c));return u.mult(a,l)},e.minimalVector=function(t,e,n){void 0===n&&(n=0);var u=r.\u0394x(t,e),i=r.\u0394y(t,e);return u<=i?{x:u+2*n,y:0}:{x:0,y:i+2*n}}},629:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=r(n(3));e.nodeMap=function(t){var e={};return u.default.forEach(t,(function(t){e[t.index]=t})),e}},630:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createScale=function(t,e){var n=function t(e){return t.ratio*e};return n.ratio=Math.min(e.width/t.width,e.height/t.height),n}},791:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=r(n(3)),i=n(623);e.scaling=i.createFunction((function(t,e){void 0===e&&(e={padding:0});var n=function(t,e){void 0===e&&(e=0);var n=1,r=i.getAllOverlaps(t);return u.default.forEach(r,(function(t){for(var r=0;r<t.length;r++)for(var u=t[r],o=r+1;o<t.length;o++){var a=t[o];if(i.overlap(u,a,e)){var f=i.norm(u,a);if(0!==f){var c=i.length(i.optimalVector(u,a,e))/f;n<c&&(n=c)}}}})),n}(t.nodes,e.padding);u.default.forEach(t.nodes,(function(t){t.x*=+n,t.y*=+n}));var r=i.minX(i.minX(t.nodes)),o=i.minY(i.minY(t.nodes));return u.default.forEach(t.nodes,(function(t){t.x-=r,t.y-=o})),{graph:t}})),e.ScalingAlgorithm={name:"Scaling",algorithm:e.scaling},e.default=e.ScalingAlgorithm}}]);
//# sourceMappingURL=9.d68cc77e.chunk.js.map