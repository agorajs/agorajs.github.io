(this.webpackJsonpagora=this.webpackJsonpagora||[]).push([[7],{534:function(e,r){e.exports=function(e,r){var a=0,t={};e.addEventListener("message",(function(r){var a=r.data;if("RPC"===a.type)if(a.id){var n=t[a.id];n&&(delete t[a.id],a.error?n[1](Object.assign(Error(a.error.message),a.error)):n[0](a.result))}else{var o=document.createEvent("Event");o.initEvent(a.method,!1,!1),o.data=a.params,e.dispatchEvent(o)}})),r.forEach((function(r){e[r]=function(){var n=arguments;return new Promise((function(o,s){var i=++a;t[i]=[o,s],e.postMessage({type:"RPC",id:i,method:r,params:[].slice.call(n)})}))}}))}},733:function(e,r,a){var t=a(534),n=["algorithm"];e.exports=function(){var e=new Worker(a.p+"da6624f4faf57c82e9e8.worker.js",{name:"[hash].worker.js"});return t(e,n),e}}}]);
//# sourceMappingURL=7.44b8e5f7.chunk.js.map