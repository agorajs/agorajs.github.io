(this.webpackJsonpagora=this.webpackJsonpagora||[]).push([[16],{720:function(t,n,o){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var e=r(o(3)),a=o(44);function u(t,n,o){for(var r=n;r<t.length-1;){if(!o(t[n],t[r+1]))return r;r++}return r}function i(t,n,o){return void 0===o&&(o=0),a.overlap(t,n,o)?a.diff(a.optimalVector(t,n,o),a.vector(t,n)):{x:0,y:0}}n.pfs=a.createFunction((function(t,n){return void 0===n&&(n={padding:0}),e.default.forEach(t.nodes,(function(t){t.up={x:t.x,y:t.y}})),t.nodes.sort((function(t,n){return t.x-n.x})),function(t,n){var o=0;for(;o<t.length-1;){for(var r=u(t,o,(function(t,n){return t.x===n.x})),e=0,a=o;a<=r;a++)for(var f=r+1;f<t.length;f++){var d=i(t[a],t[f],n).x;Math.abs(d)>Math.abs(e)&&(e=d)}for(f=r+1;f<t.length;f++){var p=t[f];if(void 0===p.up)throw"cannot update undefined updated position for"+p;p.up.x=p.up.x+e}o=r+1}}(t.nodes,n.padding),t.nodes.sort((function(t,n){return t.y-n.y})),function(t,n){var o=0;for(;o<t.length-1;){for(var r=u(t,o,(function(t,n){return t.y===n.y})),e=0,a=o;a<=r;a++)for(var f=r+1;f<t.length;f++){var d=i(t[a],t[f],n).y;Math.abs(d)>Math.abs(e)&&(e=d)}for(f=r+1;f<t.length;f++){var p=t[f];if(void 0===p.up)throw"cannot update undefined updated position for"+p;p.up.y=p.up.y+e}o=r+1}}(t.nodes,n.padding),e.default.forEach(t.nodes,(function(t){if(void 0===t.up)throw"cannot update undefined updated position for"+t;t.x=t.up.x,t.y=t.up.y,delete t.up})),{graph:t}})),n.PFSAlgorithm={name:"PFS",algorithm:n.pfs},n.default=n.PFSAlgorithm}}]);
//# sourceMappingURL=16.60d03353.chunk.js.map