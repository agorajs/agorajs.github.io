(window.webpackJsonpagora=window.webpackJsonpagora||[]).push([[0],{149:function(e,t,a){},168:function(e,t,a){},176:function(e,t,a){"use strict";a.r(t);a(74),a(75),a(76);var n=a(0),r=a.n(n),i=a(26),c=a.n(i),o=a(3);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(15),s=(a(90),a(91),a(92),a(68)),u=a(5),m=a.n(u),d=a(1),p=a.n(d),f=function(e){var t=e.parent,a=void 0===t?"div":t,n=e.auto,i=e.column,c=e.className,o=e.children;return r.a.createElement(a,{className:m()(c,"flex",{"flex-auto":n,"flex-column":i})},o)},h=f,g=(r.a.memo(f),function(e){var t=e.name,a=e.checked,n=e.onChange,i=e.children;return r.a.createElement("label",null,r.a.createElement("input",{name:t,type:"checkbox",className:"nes-checkbox",checked:a,onChange:n}),r.a.createElement("span",null,i||t))}),b=g,v=(r.a.memo(g),function(e){var t=e.title,a=e.centered,n=e.rounded,i=e.className,c=e.children;return r.a.createElement("div",{className:m()("nes-container",i,{"with-title":t,"is-centered":a,"is-rounded":n})},t&&r.a.createElement("p",{className:"title"},t),c)}),O=v,E=(r.a.memo(v),function(e){var t=e.disc,a=e.circle,n=e.className,i=e.children;return r.a.createElement("ul",{className:m()("nes-list",n,{"is-disc":t,"is-circle":a})},i)}),j=E,y=(r.a.memo(E),function(e){var t=e.right,a=e.left,n=e.children,i=e.className;return r.a.createElement("div",{className:m()(i,"nes-balloon",{"from-right":t,"from-left":a})},n)}),w=(r.a.memo(y),function(e){var t=e.primary,a=e.success,n=e.warning,i=e.error,c=e.disabled,o=e.children,l=e.onClick;return r.a.createElement("button",{type:"button",className:m()("nes-btn",{"is-primary":t,"is-success":a,"is-warning":n,"is-error":i,"is-disabled":c}),onClick:l},o)}),N=w,S=(r.a.memo(w),a(2)),x=Object(S.createStandardAction)("file/ADD")(),k=Object(S.createStandardAction)("file/ADD_MANY")(),C=Object(S.createStandardAction)("file/REMOVE")(),A=Object(S.createStandardAction)("file/CLEAR")(),_=Object(S.createStandardAction)("is-upload/TRUE")(),M=Object(S.createStandardAction)("is-upload/FALSE")(),P=a(12),D=function(e){return p()(e).pickBy((function(e){return e})).map((function(e,t){return t})).value()},R=function(e){return p.a.every(e,(function(e){return!0===e}))},L=a(6),F=function(e){return e.isUpload};function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(a,!0).forEach((function(t){Object(P.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var B=function(e){return e.algorithmSelection},T=Object(L.a)((function(e){return e.algorithms}),B,(function(e,t){return p.a.map(e,(function(e){return G({},e,{selected:t[e.id]||!1})}))})),H=Object(L.a)(T,(function(e){return e.filter((function(e){return e.selected}))})),U=Object(L.a)(B,R),z=(Object(L.a)(B,D),function(e){return e.criteriaSelection}),K=Object(L.a)((function(e){return e.criteria}),z,(function(e,t){return p.a.map(e,(function(e){return G({},e,{selected:t[e.id]||!1})}))})),V=Object(L.a)(K,(function(e){return e.filter((function(e){return e.selected}))})),W=Object(L.a)(K,(function(e){return p.a.groupBy(e,"group")})),J=Object(L.a)(z,R),q=(Object(L.a)(z,D),function(e){return e.files}),X=function(e){return e.exampleFiles},Y=function(e){return e.examples},Z=Object(L.a)(Y,(function(e){return p.a.filter(e,"selected")})),$=Object(L.a)(q,X,F,(function(e,t,a){return a?e:t})),Q=Object(L.a)(q,X,F,(function(e,t,a){return a?e.length>0:t.length>0})),ee=a(7);var te=a(13),ae=a.n(te);var ne=Object(S.createStandardAction)("algorithm-selection/TOGGLE")(),re=Object(S.createStandardAction)("algorithm-selection/SET_ALL")(),ie=Object(S.createStandardAction)("algorithm-selection/SET")(),ce=Object(S.createStandardAction)("algorithm-selection/SELECT_MANY")();var oe=function(e){var t=Object(o.b)();return Object(n.useCallback)((function(a){t(e(a.target.checked))}),[t,e])};var le=function(e){var t=Object(o.b)();return Object(n.useCallback)((function(a){t(e(a.target.name))}),[t,e])};function se(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var ue=function(e){return e.references},me=Object(L.a)(ue,(function(e){return p.a.map(e,(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?se(a,!0).forEach((function(t){Object(P.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):se(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{index:t+1})}))})),de=Object(L.a)(me,(function(e){return p.a.keyBy(e,"id")})),pe=function(e){var t=e.cite,a=Object(o.c)(de);return r.a.createElement(r.a.Fragment,null,"[",t.map((function(e){return r.a.createElement("a",{key:e,href:"#ref:"+e},a[e].index)})).reduce((function(e,t){return[e,",",t]})),"]")},fe=pe,he=(r.a.memo(pe),function(e){var t=e.className,a=Object(o.c)(U),i=oe(re),c=Object(o.c)(T),l=le(ne),s=r.a.createElement(b,{name:"Algorithms",checked:a,onChange:i}),u=Object(n.useMemo)((function(){return p.a.map(c,(function(e){var t=e.selected,a=e.id,n=e.name,i=e.reference;return r.a.createElement(b,{key:a,name:a,checked:t,onChange:l},n," ",i&&r.a.createElement(fe,{cite:i}))}))}),[c,l]);return r.a.createElement(O,{centered:!0,className:t,title:s},r.a.createElement(h,{column:!0,className:"items-start"},u))}),ge=function(e){var t=e.className;return r.a.createElement("section",{id:"authors",className:t},r.a.createElement(O,{rounded:!0},r.a.createElement("p",null,"Automatic Graph Overlap Removal Algorithms",r.a.createElement("br",null),r.a.createElement("span",{className:"code"},"Fati Chen, Arnaud Sallaberry, Laurent Piccinini, Pascal Poncelet."),r.a.createElement("br",null),r.a.createElement("a",{href:"https://arxiv.org/abs/1908.07363",target:"_blank",rel:"noopener noreferrer"},"[arXiv: 1908.07363]"))))},be=ge,ve=(r.a.memo(ge),Object(S.createStandardAction)("criteria-selection/TOGGLE")()),Oe=Object(S.createStandardAction)("criteria-selection/SET")(),Ee=Object(S.createStandardAction)("criteria-selection/SET_ALL")(),je=Object(S.createStandardAction)("criteria-selection/SELECT_MANY")(),ye=function(e){var t=e.className,a=Object(o.c)(J),n=oe(Ee),i=Object(o.c)(W),c=le(ve),l=r.a.createElement(b,{name:"Criterias",checked:a,onChange:n});return r.a.createElement(O,{centered:!0,className:t,title:l},r.a.createElement(h,{column:!0,className:"items-start tl"},r.a.createElement("div",{className:"overflow-auto w-100",style:{height:"300px"}},p.a.map(i,(function(e,t){return r.a.createElement("div",{key:t,className:"group mb1"},r.a.createElement("p",{className:"nes-text is-primary"},t),r.a.createElement(h,{column:!0,className:"childrens ml4 code"},p.a.map(e,(function(e){var t=e.id,a=e.name,n=e.selected,i=e.reference;return r.a.createElement(b,{key:t,name:t,checked:n,onChange:c},a+" ",i&&r.a.createElement(fe,{cite:i}))}))))})))))},we=(a(149),function(e){var t=e.id,a=e.number,n=e.authors,i=e.title,c=e.additional,o=e.hasIn,l=e.journal,s=e.children;return r.a.createElement("p",{id:"ref:"+t,className:"code"},r.a.createElement("b",null,"[",a,"]")," ",n,"."," ",r.a.createElement("span",{className:"nes-text is-primary"},i,".")," ",o&&"In ",r.a.createElement("i",null,l),c&&", "+c,".",s)}),Ne=(r.a.memo(we),function(e){var t=e.className,a=Object(o.c)(ue);return r.a.createElement("section",{id:"references",className:t},r.a.createElement("h3",null,"References"),r.a.createElement("div",{className:"tl"},a.map((function(e,t){return r.a.createElement(we,Object.assign({key:e.id},e,{number:t+1}))}))))}),Se=(r.a.memo(Ne),a(14)),xe=a.n(Se),ke=a(21),Ce=a(69),Ae=a.n(Ce),_e=Object(S.createStandardAction)("examples-selection/TOGGLE")(),Me=Object(S.createStandardAction)("example-file/ADD")(),Pe=Object(S.createStandardAction)("example-file/REMOVE")();var De=function(){var e=Object(o.b)(),t=function(e,t){var a=Object(n.useState)((function(){return ae()(e)})),r=Object(ee.a)(a,1)[0];return Object(n.useEffect)((function(){return p.a.forEach(t,(function(e,t){return r.on(t,e)})),function(){return r.close()}}),[t,r]),r}({restrictions:{allowedFileTypes:[".gml"]}},function(e){var t=Object(n.useState)(e);return Object(ee.a)(t,1)[0]}((function(){return{"file-added":function(t){console.log(t);var a,n=t.id,r=t.data;(a=r,new Promise((function(e,t){var n=new FileReader;n.onload=function(){return e(n.result)},n.onerror=t,n.readAsText(a)}))).then((function(t){return e(x({id:n,data:t,name:r.name}))}))},"restriction-failed":function(e,t){console.log(t)}}}))),a=Object(o.c)(q),i=Object(n.useCallback)((function(t){e(C(t.currentTarget.id))}),[e]),c=Object(n.useCallback)((function(t){var a;e((a=t.currentTarget.id,function(){var e=Object(ke.a)(xe.a.mark((function e(t,n){var r;return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n().exampleFiles.filter((function(e){return e.id===a})).length>0)){e.next=4;break}t(Pe(a)),e.next=8;break;case 4:return e.next=6,Ae.a.get("dataset/"+a);case 6:r=e.sent,t(Me({id:a,name:a,data:r.data}));case 8:t(_e(a));case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()))}),[e]),u=Object(o.c)(Y),d=Object(o.c)(Z),f=Object(o.c)(F),g=Object(n.useCallback)((function(){return e(_())}),[e]),b=Object(n.useCallback)((function(){return e(M())}),[e]),v=Object(o.c)(Q),O=Object(n.useCallback)((function(e){v&&Object(l.d)("result")}),[v]);return r.a.createElement("div",{className:"w-100"},r.a.createElement(be,{className:"center mw7 mv3"}),r.a.createElement(h,{parent:"section",className:"mv3"},r.a.createElement(h,{column:!0,className:"item-stretch pa3 justify-around w5"},r.a.createElement(N,{primary:f,onClick:g},r.a.createElement("div",{className:"pv2"},"Upload Files")),r.a.createElement(N,{primary:!f,onClick:b},r.a.createElement("div",{className:"pv2"},"Examples"))),r.a.createElement(h,{className:"w-100"},f?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"w-100"},r.a.createElement("h3",{className:"tc"},"Upload"),r.a.createElement(s.a,{uppy:t,height:"256px"})),a.length>0&&r.a.createElement("div",{className:"tl"},r.a.createElement("h3",{className:"tc"},"\xa0"),r.a.createElement(j,{disc:!0,className:"overflow-y-scroll h5 mb0 w5 hover-success code"},p.a.map(a,(function(e){var t=e.id,a=(e.data,e.name);return r.a.createElement("li",{key:t,id:t,className:"f6 mr1 hover-error color-inherit",onClick:i},r.a.createElement("div",{className:"mr1 truncate"},a))}))))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"w-50"},r.a.createElement("h3",null,"Select Files"),r.a.createElement(j,{disc:!0,className:"overflow-y-scroll h5 mb0 tl w-100 code"},p.a.map(u,(function(e){var t=e.selected,a=e.file;return r.a.createElement("li",{key:a,id:a,className:m()("f6","mr1","color-inherit",{"hover-success ":!t,"is-success":t,"nes-text":t}),onClick:c},r.a.createElement("div",{className:"mr1 truncate"},a))})))),r.a.createElement("div",{className:"w-50"},r.a.createElement("h3",null,"Selected"),r.a.createElement(j,{disc:!0,className:"overflow-y-scroll h5 mb0 tl w-100 code"},p()(d).map((function(e){var t=e.selected,a=e.file;return r.a.createElement("li",{key:a,id:a,className:m()("f6","mr1","color-inherit","hover-error ",{"is-success":t,"nes-text":t}),onClick:c},r.a.createElement("div",{className:"mr1 truncate"},a))})).value()))))),r.a.createElement("div",{className:"mv3"},r.a.createElement(N,{primary:v,disabled:!v,onClick:O},r.a.createElement("div",{className:"pa3"},"Generate Overlap Free Embeddings"))),r.a.createElement(h,null,r.a.createElement(he,{className:"w-50 ma2"}),r.a.createElement(ye,{className:"pr0 w-50 ma2 "})),r.a.createElement(Ne,{className:"mv3"}))},Re=a(22),Le=a(9),Fe=function(e){var t=e.content,a=e.name,i=e.children,c=Object(n.useState)(),o=Object(ee.a)(c,2),l=o[0],s=o[1];return Object(n.useEffect)((function(){var e=new File([t],a,{type:"plain/text"}),n=URL.createObjectURL(e);return s(n),function(){return URL.revokeObjectURL(n)}}),[a,t]),l?r.a.createElement("a",{href:l,download:a,className:"bw1 ba mr1 no-underline"},i||a):null},Ie=function(e){var t=e.name,a=e.gml,n=e.json,i=e.svg;return r.a.createElement("div",{className:"f7"},a?r.a.createElement(Fe,{content:a,name:t+".gml"},"GML"):null,r.a.createElement(Fe,{content:n,name:t+".json"},"JSON"),i?r.a.createElement(Fe,{content:i,name:t+".svg"},"SVG"):null)},Ge=a(178),Be=function(e){var t=e.source,a=e.target;return r.a.createElement("line",{className:"link",x1:t.x,y1:t.y,x2:a.x,y2:a.y})},Te=function(e){var t=e.node,a=t.x,n=t.y,i=t.height,c=t.width,o=t.index,l=t.label,s=l||o;return"undefined"===s&&(s=o),r.a.createElement("g",{className:"node",transform:"translate(".concat(a,",").concat(n,")")},r.a.createElement("rect",{className:"rect",width:c,height:i,transform:"translate(".concat(-c/2,",").concat(-i/2,")")}),r.a.createElement("text",{className:"label",transform:"translate(-5,6)"},"undefined"!==l&&l||o))};function He(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Ue=function(e){var t=e.graph,a=e.over,n=void 0!==a&&a,i=e.width,c=e.height,o=e.svgRef,l=Object(Re.a)(e,["graph","over","width","height","svgRef"]),s=function(e,t){var a=function e(t){return e.ratio*t};return a.ratio=Math.min(t.width/e.width,t.height/e.height),a}({width:Object(Ge.a)(t.nodes,(function(e){return e.x+e.width/2}))||0,height:Object(Ge.a)(t.nodes,(function(e){return e.y+e.height/2}))||0},{width:i,height:c}),u=p()(t.nodes).map((function(e){var t=e.width,a=e.height,n=e.x,r=e.y;return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?He(a,!0).forEach((function(t){Object(P.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):He(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},Object(Re.a)(e,["width","height","x","y"]),{width:s(t),height:s(a),x:s(n),y:s(r)})})).sortBy("index").value(),m=t.edges.map((function(e){var t=e.source,a=e.target;return[p.a.find(u,{index:t}),p.a.find(u,{index:a})]}));return r.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:i,height:c,viewBox:"-5,-5,".concat(i+10,",").concat(c+10)},l,{ref:o}),r.a.createElement("style",null,"\n      .edges { \n        stroke: #878fff;\n        stroke-width: 2px;\n      }\n\n      .rect {\n        stroke: #000;\n        fill: #eee;\n      }\n      "),n?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ke,{nodes:u}),r.a.createElement(ze,{edges:m})):r.a.createElement(r.a.Fragment,null,r.a.createElement(ze,{edges:m}),r.a.createElement(Ke,{nodes:u})))},ze=function(e){var t=e.edges;return r.a.createElement("g",{className:"edges"},t.map((function(e){var t=Object(ee.a)(e,2),a=t[0],n=t[1];return r.a.createElement(Be,{key:a.index+":"+n.index,source:a,target:n})})))},Ke=function(e){var t=e.nodes;return r.a.createElement("g",{className:"nodes"},t.map((function(e){return r.a.createElement(Te,{key:e.index,node:e})})))};a(168);var Ve=a(23),We=a(34);function Je(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function qe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Je(a,!0).forEach((function(t){Object(P.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Je(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function Xe(e,t){switch(t.type){case"incrementFileCounter":return qe({},e,{fileCounter:e.fileCounter+1});case"addDisplayableFile":return qe({},e,{displayable:[].concat(Object(Le.a)(e.displayable),[t.payload])});case"addAlgorithm":return qe({},e,{algorithms:[].concat(Object(Le.a)(e.algorithms),[t.payload])});case"addCriterion":return qe({},e,{criteria:[].concat(Object(Le.a)(e.criteria),[t.payload])});case"algFinished":return qe({},e,{algFinished:!0});case"criFinished":return qe({},e,{criFinished:!0});case"incrementAlgCounter":return qe({},e,{algCounter:e.algCounter+1});case"incrementCriCounter":return qe({},e,{criCounter:e.criCounter+1});case"resetAlgCounter":return qe({},e,{algCounter:-1});case"addResult":var a=Object(Le.a)(e.graphResults);a[e.fileCounter]=a[e.fileCounter]||[];var n=Object(Le.a)(a[e.fileCounter]);return n[e.algCounter]=t.payload,a[e.fileCounter]=n,qe({},e,{graphResults:a});case"addCriResult":var r=Object(Le.a)(e.criteriaResults);r[e.fileCounter]=r[e.fileCounter]||[];for(var i=0;i<t.payload.length;i++){var c=t.payload[i];r[e.fileCounter][i]=r[e.fileCounter][i]||[],r[e.fileCounter][i][e.algCounter]=c}return qe({},e,{criteriaResults:r});case"addInitial":return qe({},e,{initials:[].concat(Object(Le.a)(e.initials),[t.payload])});default:throw Error("error localreducer")}}function Ye(e){return{type:"addAlgorithm",payload:e}}var Ze=r.a.memo((function(e){var t=e.name,a=e.graph,i=e.gml,c=Object(n.useState)(null),o=Object(ee.a)(c,2),l=o[0],s=o[1],u=Object(n.useCallback)((function(e){if(e){var t=new XMLSerializer;s(t.serializeToString(e))}}),[]);return r.a.createElement("div",{className:"mh1 fixed-width",style:{height:"150px"}},r.a.createElement(h,{column:!0,className:"flex-wrap items-stretch"},r.a.createElement("h3",null,t),r.a.createElement("div",{className:"graph mv1"},r.a.createElement(Ue,{graph:a,svgRef:u,width:100,height:88})),r.a.createElement(Ie,{name:t,json:JSON.stringify(a),gml:i,svg:l})))})),$e=function(){var e=Object(o.c)($),t=Object(o.c)(H),i=Object(o.c)(V),c=Object(n.useReducer)(Xe,{fileCounter:-1,algCounter:-1,criCounter:-1,graphResults:[],initials:[],algFinished:!1,criFinished:!1,algorithms:[],criteria:[],displayable:[],criteriaResults:[]}),s=Object(ee.a)(c,2),u=s[0],m=s[1];return Object(n.useEffect)((function(){(function(){var e=Object(ke.a)(xe.a.mark((function e(t){var n,r,i,c,o,l,s,u,d,p,f,h,g;return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=!0,r=!1,i=void 0,e.prev=3,c=t[Symbol.iterator]();case 5:if(n=(o=c.next()).done){e.next=52;break}l=o.value,e.t0=l.id,e.next="scale"===e.t0?10:"pfs"===e.t0?15:"pfsp"===e.t0?20:"fta"===e.t0?25:"vpsc"===e.t0?30:"prism"===e.t0?35:"gtree"===e.t0?37:"rwordle_l"===e.t0?39:"diamond"===e.t0?44:49;break;case 10:return e.next=12,a.e(10).then(a.t.bind(null,457,7));case 12:return s=e.sent,m(Ye(qe({},l,{algorithm:s.default.algorithm}))),e.abrupt("break",49);case 15:return e.next=17,a.e(7).then(a.t.bind(null,458,7));case 17:return u=e.sent,m(Ye(qe({},l,{algorithm:u.default.algorithm}))),e.abrupt("break",49);case 20:return e.next=22,a.e(8).then(a.t.bind(null,459,7));case 22:return d=e.sent,m(Ye(qe({},l,{algorithm:d.default.algorithm}))),e.abrupt("break",49);case 25:return e.next=27,a.e(3).then(a.t.bind(null,460,7));case 27:return p=e.sent,m(Ye(qe({},l,{algorithm:p.default.algorithm}))),e.abrupt("break",49);case 30:return e.next=32,a.e(4).then(a.t.bind(null,461,7));case 32:return f=e.sent,m(Ye(qe({},l,{algorithm:f.default.algorithm}))),e.abrupt("break",49);case 35:return m(Ye(qe({},l,{algorithm:function(e){var t=window.prism(e.nodes);console.log(t);for(var a=0;a<e.nodes.length;a++){var n=e.nodes[a],r=Object(ee.a)(t[a],2),i=r[0];if(r[1]!==n.index)throw Error("not matching id exception");n.x=i.m_X,n.y=i.m_Y}return console.log(e),{graph:e}}}))),e.abrupt("break",49);case 37:return m(Ye(qe({},l,{algorithm:function(e){var t=window.prism(e.nodes);console.log(t);for(var a=0;a<e.nodes.length;a++){var n=e.nodes[a],r=Object(ee.a)(t[a],2),i=r[0];if(r[1]!==n.index)throw Error("not matching id exception");n.x=i.m_X,n.y=i.m_Y}return{graph:e}}}))),e.abrupt("break",49);case 39:return e.next=41,a.e(9).then(a.t.bind(null,462,7));case 41:return h=e.sent,m(Ye(qe({},l,{algorithm:h.RWordleLAlgorithm.algorithm}))),e.abrupt("break",49);case 44:return e.next=46,a.e(5).then(a.t.bind(null,463,7));case 46:return g=e.sent,m(Ye(qe({},l,{algorithm:g.diamondGraphRotation}))),e.abrupt("break",49);case 49:n=!0,e.next=5;break;case 52:e.next=58;break;case 54:e.prev=54,e.t1=e.catch(3),r=!0,i=e.t1;case 58:e.prev=58,e.prev=59,n||null==c.return||c.return();case 61:if(e.prev=61,!r){e.next=64;break}throw i;case 64:return e.finish(61);case 65:return e.finish(58);case 66:m({type:"algFinished"});case 67:case"end":return e.stop()}}),e,null,[[3,54,58,66],[59,,61,65]])})));return function(t){return e.apply(this,arguments)}})()(t)}),[]),Object(n.useEffect)((function(){u.algFinished&&function(){var e=Object(ke.a)(xe.a.mark((function e(t){var n,r,i,c,o,l,s,u,d,f,h,g;return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(6).then(a.t.bind(null,464,7));case 2:for(n=e.sent,n.default,n.manager,r=Object(Re.a)(n,["default","manager"]),i=!0,c=!1,o=void 0,e.prev=9,l=t[Symbol.iterator]();!(i=(s=l.next()).done);i=!0)u=s.value,d=u.id,f=u.name,h=u.group,g=u.path,m({type:"addCriterion",payload:{id:d,name:f,group:h,criterion:p.a.get(r,g).criteria}});e.next=17;break;case 13:e.prev=13,e.t0=e.catch(9),c=!0,o=e.t0;case 17:e.prev=17,e.prev=18,i||null==l.return||l.return();case 20:if(e.prev=20,!c){e.next=23;break}throw o;case 23:return e.finish(20);case 24:return e.finish(17);case 25:m({type:"incrementFileCounter"});case 26:case"end":return e.stop()}}),e,null,[[9,13,17,25],[18,,20,24]])})));return function(t){return e.apply(this,arguments)}}()(i)}),[u.algFinished]),Object(n.useEffect)((function(){u.fileCounter>-1&&(m({type:"resetAlgCounter"}),m({type:"addDisplayableFile",payload:e[u.fileCounter]}))}),[u.fileCounter]),Object(n.useEffect)((function(){if(u.displayable.length>0){var t=e[u.fileCounter],a=Object(Ve.crop)(Object(We.toGraph)(Object(We.parseGML)(t.data)));m({type:"addInitial",payload:{graph:a,gml:t.data}}),m({type:"incrementAlgCounter"})}}),[u.displayable]),Object(n.useEffect)((function(){if(u.algCounter>-1){var e=u.algorithms[u.algCounter],t=u.initials[u.fileCounter].graph,a={nodes:t.nodes.map((function(e){return qe({},e)})),edges:t.edges.map((function(e){return qe({},e)}))},n=e.algorithm(a);n.graph=Object(Ve.crop)(n.graph),m({type:"addResult",payload:n}),m({type:"incrementCriCounter"})}}),[u.algCounter]),Object(n.useEffect)((function(){if(u.criCounter>-1){var t=u.initials[u.fileCounter],a=u.graphResults[u.fileCounter][u.algCounter],n=p.a.map(u.criteria,(function(e){return(0,e.criterion)(t.graph,a.graph).value}));m({type:"addCriResult",payload:n}),u.algCounter!==u.algorithms.length-1?m({type:"incrementAlgCounter"}):u.fileCounter!==e.length-1&&m({type:"incrementFileCounter"})}}),[u.criCounter]),0===e.length?r.a.createElement(l.b,{from:"",to:"/",noThrow:!0}):r.a.createElement("div",{className:"tl mh3 code"},p.a.map(u.displayable,(function(e,t){var a=e.id,n=e.name,i=u.graphResults[t],c=u.initials[t],o=u.criteriaResults[t];return r.a.createElement("section",{key:a,className:"mv3"},r.a.createElement("article",null,r.a.createElement("h2",null,n),r.a.createElement(h,{className:"flex-wrap ml6-l"},c&&r.a.createElement(Ze,{name:"Initial",graph:c.graph,gml:c.gml}),i&&p.a.map(i,(function(e,t){var a=u.algorithms[t];return r.a.createElement(Ze,{key:a.id,name:a.name,graph:e.graph,gml:c.gml})})))),r.a.createElement("article",{className:"criteria"},r.a.createElement("div",{className:"relative"},r.a.createElement("div",{className:"inner overflow-x-auto"},r.a.createElement("table",{className:"table-fixed"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"tc"},"Criterias"),p.a.map(u.algorithms,(function(e){var t=e.id,a=e.name;return r.a.createElement("th",{key:t},a)})))),r.a.createElement("tbody",null,p.a.map(u.criteria,(function(e,t){var a=e.id,n=e.name;return r.a.createElement("tr",{key:a,className:"striped--near-white"},r.a.createElement("th",null,n),o&&p.a.map(o[t],(function(e,t){return r.a.createElement("td",{key:t},Object(Ve.round)(e,-4))})))}))))))))})))},Qe=function(e){var t=e.link,a=e.imageurl,n=e.alt;return r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{height:"64px",src:a,alt:n}))},et=Qe,tt=(r.a.memo(Qe),function(){return r.a.createElement("div",{className:"mw9 center mt4 tc"},r.a.createElement("header",null,r.a.createElement(l.a,{to:"/",style:{textDecoration:"none",color:"inherit"}},r.a.createElement("h1",{className:"lh-title tc"},"AGORA"))),r.a.createElement(l.c,{className:"mh3-l"},r.a.createElement(De,{path:"/"}),r.a.createElement($e,{path:"/result"})),r.a.createElement(h,{parent:"footer",className:"justify-around pv3"},r.a.createElement(et,{link:"https://www.lirmm.fr/",imageurl:"lirmm.png",alt:"LIRMM"}),r.a.createElement(et,{link:"https://www.univ-montp3.fr/",imageurl:"um3.png",alt:"UM3"}),r.a.createElement(et,{link:"https://www.umontpellier.fr/",imageurl:"um.png",alt:"UM"}),r.a.createElement(et,{link:"https://www.cnrs.fr/",imageurl:"cnrs.png",alt:"CNRS"})))}),at=a(18),nt=a(70),rt=[{id:"scale",name:"SCALE"},{id:"pfs",name:"PFS",reference:["misue1995"]},{id:"pfsp",name:"PFS'",reference:["hayashi1998"]},{id:"fta",name:"FTA",reference:["huang2007"]},{id:"vpsc",name:"VPSC",reference:["dwyer2005"]},{id:"prism",name:"PRISM",reference:["gansner2010"]},{id:"gtree",name:"GTREE",reference:["nachmanson2016"]},{id:"rwordle_l",name:"RWordle-L",reference:["strobelt2012"]},{id:"diamond",name:"Diamond",reference:["meulemans2019"]}],it=[{id:"oo_o",name:"Original",group:"Orthogonal Ordering",path:"OrthogonalOrdering.Original",reference:["misue1995"]},{id:"oo_ktd",name:"Kendall's Tau Distance",path:"OrthogonalOrdering.KendallTauDistance",group:"Orthogonal Ordering",reference:["huang2007"]},{id:"oo_ni",name:"Number of Inversions",group:"Orthogonal Ordering",path:"OrthogonalOrdering.NumberInversions",reference:["strobelt2012"]},{id:"oo_nni",name:"Normalised Number of Inversions",group:"Orthogonal Ordering",path:"OrthogonalOrdering.NormalizedNumberInversions",reference:["chen2019"]},{id:"sp_bb_l1ml",name:"L1 Length",group:"Spread Minimisation",fullname:"Spread Minimisation/Bounding Box/L1 Metric Length",path:"Spread.BoundingBox.L1MetricLength",reference:["li2005"]},{id:"sp_bb_a",name:"Bounding Box Area",group:"Spread Minimisation",path:"Spread.BoundingBox.Area",reference:["misue1995"]},{id:"sp_bb_na",name:"Bounding Box Normalized Area",group:"Spread Minimisation",path:"Spread.BoundingBox.NormalizedArea",reference:["huang2007"]},{id:"sp_ch_a",name:"Convex Hull Area",group:"Spread Minimisation",path:"Spread.ConvexHull.Area",reference:["strobelt2012"]},{id:"gs_bb_ar",name:"Aspect Ratio",group:"Global Shape Preservation",fullname:"Global Shape Preservation/Bounding Box/Aspect Ratio",path:"GlobalShape.BoundingBox.AspectRatio",reference:["li2005"]},{id:"gs_bb_iar",name:"Improved Aspect Ratio",fullname:"Global Shape Preservation/Bounding Box/Improved Aspect Ratio",group:"Global Shape Preservation",path:"GlobalShape.BoundingBox.ImprovedAspectRatio",reference:["chen2019"]},{id:"gs_ch_sd",name:"Standard Deviation",fullname:"Global Shape Preservation/Convex Hull/Standard Deviation",group:"Global Shape Preservation",path:"GlobalShape.ConvexHull.StandardDeviation",reference:["strobelt2012"]},{id:"nm_mn",name:"Moved Nodes",group:"Node Movement Minimisation",path:"NodeMovement.MovedNodes",reference:["huang2007"]},{id:"nm_dm_me",name:"Mean Euclidean",fullname:"Node Movement Minimisation/Distance Moved/Mean Euclidean",group:"Node Movement Minimisation",path:"NodeMovement.DistanceMoved.MeanEuclidean",reference:["strobelt2012"]},{id:"nm_dm_ne",name:"Normalised Euclidean",fullname:"Node Movement Minimisation/Distance Moved/Normalised Euclidean",group:"Node Movement Minimisation",path:"NodeMovement.DistanceMoved.NormalizedEuclidean",reference:["lyons1998"]},{id:"nm_dm_h",name:"Hamiltonian",fullname:"Node Movement Minimisation/Distance Moved/Hamiltonian",group:"Node Movement Minimisation",path:"NodeMovement.DistanceMoved.Hamiltonian",reference:["huang2003","huang2007"]},{id:"nm_dm_se",name:"Squared Euclidean",fullname:"Node Movement Minimisation/Distance Moved/Squared Euclidean",group:"Node Movement Minimisation",path:"NodeMovement.DistanceMoved.SquaredEuclidean",reference:["marriot2003"]},{id:"nm_dm_imse",name:"Improved Mean Squared Euclidean",fullname:"Node Movement Minimisation/Distance Moved/Improved Mean Squared Euclidean",group:"Node Movement Minimisation",path:"NodeMovement.DistanceMoved.ImprovedMeanSquaredEuclidean",reference:["chen2019"]},{id:"nm_knn",name:"K-Nearest Neighbours",group:"Node Movement Minimisation",path:"NodeMovement.KNearestNeighbors.default",reference:["nachmanson2016"]},{id:"eb_r",name:"Ratio",group:"Edge Length Preservation",path:"EdgeBased.Ratio",reference:["li2005"]},{id:"e_rsdd",name:"Relative Standard Deviation",group:"Edge Length Preservation",path:"EdgeBased.RelativeStandardDeviation",reference:["gansner2010"]}],ct=[{selected:!1,file:"b124.gml"},{selected:!1,file:"dpd.gml"},{selected:!1,file:"NaN.gml"},{selected:!1,file:"ngk10_4.gml"},{selected:!1,file:"random_50_16.gml"},{selected:!1,file:"random_100_25.gml"},{selected:!1,file:"random_200_15.gml"},{selected:!1,file:"rowe.gml"},{selected:!1,file:"size.gml"},{selected:!1,file:"unix.gml"}];function ot(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function lt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ot(a,!0).forEach((function(t){Object(P.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ot(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var st=function(e,t){var a=t.payload;return void 0!==e[a]?(e[a]=!e[a],lt({},e)):e},ut=function(e,t){var a=Object(ee.a)(t.payload,2),n=a[0],r=a[1];return void 0!==e[n]?(e[n]=r,lt({},e)):e},mt=function(e,t){var a=t.payload;return p.a.forEach(a,(function(t,a){!1===e[a]&&(e[a]=!0)})),lt({},e)},dt=function(e,t){var a=t.payload,n={};return p.a.forEach(e,(function(e,t){n[t]=a})),n},pt=Object(S.createReducer)({}).handleAction(ne,st).handleAction(ie,ut).handleAction(ce,mt).handleAction(re,dt),ft=Object(S.createReducer)(rt),ht=Object(S.createReducer)(it),gt=Object(S.createReducer)({}).handleAction(ve,st).handleAction(Oe,ut).handleAction(je,mt).handleAction(Ee,dt),bt=Object(S.createReducer)(ct).handleAction(_e,(function(e,t){return e.map((function(e){return e.file===t.payload&&(e.selected=!e.selected),e}))})),vt=Object(S.createReducer)([]).handleAction(x,(function(e,t){return p.a.find(e,["id",t.payload.id])?e:[].concat(Object(Le.a)(e),[t.payload])})).handleAction(k,(function(e,t){return[].concat(Object(Le.a)(e),Object(Le.a)(t.payload))})).handleAction(C,(function(e,t){return p.a.filter(e,(function(e){return e.id!==t.payload}))})).handleAction(A,(function(){return[]})),Ot=Object(S.createReducer)(!0).handleAction(_,(function(){return!0})).handleAction(M,(function(){return!1})),Et=Object(S.createReducer)([]),jt=Object(S.createReducer)([]).handleAction(Me,(function(e,t){return p.a.find(e,["id",t.payload.id])?e:[].concat(Object(Le.a)(e),[t.payload])})).handleAction(Pe,(function(e,t){return p.a.filter(e,(function(e){return e.id!==t.payload}))})),yt=Object(at.c)({algorithms:ft,algorithmSelection:pt,criteria:ht,criteriaSelection:gt,files:vt,isUpload:Ot,references:Et,examples:bt,exampleFiles:jt}),wt=Object(at.d)(yt,{algorithms:rt,algorithmSelection:{scale:!0,pfs:!0,pfsp:!0,fta:!0,vpsc:!0,prism:!0,gtree:!0,rwordle_l:!0,diamond:!0},criteria:it,criteriaSelection:{oo_o:!1,oo_ktd:!1,oo_ni:!1,oo_nni:!0,sp_bb_l1ml:!1,sp_bb_a:!1,sp_bb_na:!1,sp_ch_a:!0,gs_bb_ar:!1,gs_bb_iar:!0,gs_ch_sd:!1,nm_mn:!1,nm_dm_me:!1,nm_dm_ne:!1,nm_dm_h:!1,nm_dm_se:!1,nm_dm_imse:!0,nm_knn:!1,eb_r:!1,e_rsdd:!0},files:[],isUpload:!0,references:[{id:"misue1995",authors:"K. Misue, P. Eades, W. Lai, and K. Sugiyama",title:"Layout adjustment and the mental map",hasIn:!1,journal:"Journal of Visual Languages & Computing",additional:"6(2): 83\u2013210, 1995"},{id:"lyons1998",authors:"K. A. Lyons, H. Meijer, and D. Rappaport",title:"Algorithms for cluster busting in anchored graph drawing",hasIn:!1,journal:"Journal of Graph Algorithms and Applications",additional:"2(1): 1\u201324, 1998"},{id:"hayashi1998",authors:"K. Hayashi, M. Inoue, T. Masuzawa, and H. Fujiwara",title:"A layout adjustment problem for disjoint rectangles preserving orthogonal order",hasIn:!0,journal:"Proceedings of the International Symposium on Graph Drawing (GD)",additional:"pages 183\u2013197. Springer, 1998"},{id:"huang2003",authors:"X. Huang and W. Lai",title:"Force-transfer: a new approach to removing overlapping nodes in graph layout",hasIn:!0,journal:"Proceedings of the Australasian computer science conference - Volume 16",additional:"pages 349\u2013358. Australian Computer Society, Inc., 2003"},{id:"marriot2003",authors:"K. Marriott, P. Stuckey, V. Tam, and W. He",title:"Removing node overlapping in graph layout using constrained optimization",hasIn:!1,journal:"Constraints",additional:"8(2): 43\u2013171, 2003"},{id:"li2005",authors:"W. Li, P. Eades, and N. Nikolov",title:"Using spring algorithms to remove node overlapping",hasIn:!0,journal:"Proceedings of the Asia-Pacific Symposium on Information Visualisation (APVis\u201905)",additional:"pages 131\u2013140. Australian Computer Society, Inc., 2005"},{id:"dwyer2005",authors:"T. Dwyer, K. Marriott, and P. J. Stuckey",title:"Fast node overlap removal",hasIn:!0,journal:"Proceedings of the International Symposium on Graph Drawing (GD)",additional:"pages 153\u2013164. Springer, 2005"},{id:"huang2007",authors:"X. Huang, W. Lai, A. Sajeev, and J. Gao",title:"A new algorithm for removing node overlapping in graph visualization",hasIn:!1,journal:"Information Sciences",additional:"177(14): 2821\u20132844, 2007"},{id:"gansner2010",authors:"E. Gansner and Y. Hu",title:"Efficient, proximity-preserving node overlap removal",hasIn:!1,journal:"Journal of Graph Algorithms and Applications",additional:"14(1): 53\u201374, 2010"},{id:"strobelt2012",authors:"H. Strobelt, M. Spicker, A. Stoffel, D. Keim, and O. Deussen",title:"Rolled-out wordles: A heuristic method for overlap removal of 2d data representatives",hasIn:!1,journal:"Computer Graphics Forum",additional:"31(3): 1135\u20131144, 2012"},{id:"nachmanson2016",authors:"L. Nachmanson, A. Nocaj, S. Bereg, L. Zhang, and A. Holroyd",title:"Node overlap removal by growing a tree",hasIn:!0,journal:"Proceedings of the International Symposium on Graph Drawing and Network Visualization (GD)",additional:"pages 33\u201343. Springer, 2016"},{id:"meulemans2019",authors:"W. Meulemans",title:"Efficient optimal overlap removal",hasIn:!1,journal:"Computer Graphics Forum",additional:"38(3): 713\u2013723, 2019"},{id:"chen2019",authors:"F. Chen, L. Piccinini, P. Poncelet, and A. Sallaberry",title:"Node overlap removal algorithms: A comparative study",hasIn:!0,journal:"Proceedings of the International Symposium on Graph Drawing and Network Visualization (GD)",additional:"page to appear. Springer, 2019"}],examples:ct,exampleFiles:[]},Object(at.a)(nt.a));c.a.render(r.a.createElement(o.a,{store:wt},r.a.createElement(tt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},73:function(e,t,a){e.exports=a(176)},76:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.6d87f84f.chunk.js.map