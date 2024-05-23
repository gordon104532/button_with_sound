(function(){"use strict";var n={6303:function(n,e,t){var r=t(9242),o=t(3396);const i=(0,o._)("nav",null,null,-1);function u(n,e){const t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[i,(0,o.Wm)(t)],64)}var a=t(89);const c={},f=(0,a.Z)(c,[["render",u]]);var s=f,d=t(2483),l=t(5080);const p=(0,o._)("img",{style:{padding:"5px"},width:"15%",height:"15%",alt:"logo",src:l},null,-1),h=(0,o._)("div",{class:"empty mt-3"},[(0,o._)("h3",null,"你怎麼會跑到這裡來?，這裡暫時還沒有東西 (⊙_⊙;)")],-1);function m(n,e,t,r,i,u){const a=(0,o.up)("BackToQuiz");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(a),p,h],64)}var b=t(9587),v={name:"EmptyView",components:{BackToQuiz:b.Z}};const g=(0,a.Z)(v,[["render",m]]);var y=g;const _=[{path:"/",name:"empty",component:y},{path:"/quiz",name:"quiz",component:()=>t.e(557).then(t.bind(t,5126))},{path:"/share",name:"share",component:()=>t.e(557).then(t.bind(t,6293))},{path:"/sound_pad",name:"soundPad",component:()=>t.e(88).then(t.bind(t,9088))},{path:"/snow",name:"snow",component:()=>t.e(620).then(t.bind(t,7620))},{path:"/mole",name:"mole",component:()=>t.e(352).then(t.bind(t,4243))},{path:"/easter_egg",name:"easter_egg",component:()=>t.e(396).then(t.bind(t,4384))},{path:"/easter_ai",name:"easter_ai",component:()=>t.e(792).then(t.bind(t,4792))},{path:"/pope_hbd_2023",component:()=>t.e(958).then(t.bind(t,1958))}],k=(0,d.p7)({history:(0,d.r5)(),routes:_});var w=k;(0,r.ri)(s).use(w).mount("#app")},9587:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(3396);function o(n,e,t,o,i,u){return(0,r.wg)(),(0,r.iD)("a",{onClick:e[0]||(e[0]=(...n)=>u.backToQuiz&&u.backToQuiz(...n)),class:"btn btn-primary home",role:"button"},"⬅回問答")}t(560);var i={el:"#backToQuiz",props:{nickname:{type:String,required:!1}},methods:{backToQuiz(){this.nickname?this.$router.push("/quiz?username="+this.nickname):this.$router.push("/quiz")}}},u=t(89);const a=(0,u.Z)(i,[["render",o],["__scopeId","data-v-4e7efb6c"]]);var c=a},5080:function(n,e,t){n.exports=t.p+"img/logo.d792df5d.png"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return n[r].call(i.exports,i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(e,r,o,i){if(!r){var u=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],i=n[s][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(n){return t.O[n](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){n.splice(s--,1);var f=o();void 0!==f&&(e=f)}}return e}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[r,o,i]}}(),function(){t.F={},t.E=function(n){Object.keys(t.F).map((function(e){t.F[e](n)}))}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/"+(557===n?"share":n)+"."+{88:"7583223e",352:"144225b1",396:"10b93512",557:"5820c404",620:"4fbae6f1",792:"f3421a50",958:"252d5e52"}[n]+".js"}}(),function(){t.miniCssF=function(n){return"css/"+(557===n?"share":n)+"."+{352:"239b4efc",557:"09035dbc",620:"e4e594f0",792:"77b295b7",958:"4f753d32"}[n]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="button_with_sound:";t.l=function(r,o,i,u){if(n[r])n[r].push(o);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var d=f[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+i){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",e+i),a.src=r),n[r]=[o];var l=function(e,t){a.onerror=a.onload=null,clearTimeout(p);var o=n[r];if(delete n[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(n){return n(t)})),e)return e(t)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/button_with_sound/"}(),function(){if("undefined"!==typeof document){var n=function(n,e,t,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var u=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.href||e,c=new Error("Loading CSS chunk "+n+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=u,i.href=e,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},e=function(n,e){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===n||i===e))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===n||i===e)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(e(u,a))return o();n(r,a,null,o,i)}))},o={143:0};t.f.miniCss=function(n,e){var t={352:1,557:1,620:1,792:1,958:1};o[n]?e.push(o[n]):0!==o[n]&&t[n]&&e.push(o[n]=r(n).then((function(){o[n]=0}),(function(e){throw delete o[n],e})))}}}(),function(){var n={143:0};t.f.j=function(e,r){var o=t.o(n,e)?n[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=n[e]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(e),a=new Error,c=function(r){if(t.o(n,e)&&(o=n[e],0!==o&&(n[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+e,e)}},t.F.j=function(e){if(!t.o(n,e)||void 0===n[e]){n[e]=null;var r=document.createElement("link");t.nc&&r.setAttribute("nonce",t.nc),r.rel="prefetch",r.as="script",r.href=t.p+t.u(e),document.head.appendChild(r)}},t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,i,u=r[0],a=r[1],c=r[2],f=0;if(u.some((function(e){return 0!==n[e]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var s=c(t)}for(e&&e(r);f<u.length;f++)i=u[f],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(s)},r=self["webpackChunkbutton_with_sound"]=self["webpackChunkbutton_with_sound"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}(),function(){t.O(0,[143],(function(){[88,620,352,396,792,958].map(t.E)}),5)}();var r=t.O(void 0,[998],(function(){return t(6303)}));r=t.O(r)})();
//# sourceMappingURL=app.3fde65de.js.map