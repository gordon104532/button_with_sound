"use strict";(self["webpackChunkbutton_with_sound"]=self["webpackChunkbutton_with_sound"]||[]).push([[996],{8996:function(e,t,i){i.r(t),i.d(t,{default:function(){return Y}});var n=i(3396),a=i(5080);const r={id:"easter-ai-view",class:"container mt-3"},o=(0,n._)("h1",null,"認識了波普貓，再來是建造波普貓",-1),l=(0,n._)("br",null,null,-1),s=(0,n._)("br",null,null,-1),u=(0,n._)("br",null,null,-1),c={key:0},d=(0,n._)("h3",null,"以下有些瑕疵，但還是可以聽一下",-1),h=(0,n._)("br",null,null,-1),m=(0,n._)("br",null,null,-1),v={key:1},p=(0,n._)("h3",null,"以下有些的太鬧了，拿來笑一下用",-1);function g(e,t,i,g,y,_){const f=(0,n.up)("BackToQuiz"),w=(0,n.up)("PlayList");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(f),(0,n._)("img",{style:{padding:"5px"},width:"15%",height:"15%",alt:"logo",src:a,onClick:t[0]||(t[0]=(...e)=>_.clickIcon&&_.clickIcon(...e))}),(0,n._)("div",r,[o,(0,n.Uk)(" *請注意: 以下都不是波普貓唱的 "),l,(0,n.Wm)(w,{links:y.soundList.slice(0,8)},null,8,["links"]),s,u,y.esterEggCount>4?((0,n.wg)(),(0,n.iD)("div",c,[d,(0,n.Wm)(w,{links:y.soundList.slice(8,22)},null,8,["links"])])):(0,n.kq)("",!0),h,m,y.esterEggCount>13?((0,n.wg)(),(0,n.iD)("div",v,[p,(0,n.Wm)(w,{links:y.soundList.slice(22,34)},null,8,["links"])])):(0,n.kq)("",!0)])],64)}var y=i(7139),_=i(9242);const f={class:"container col-8 mt-3"},w=["onClick"];function x(e,t,i,a,r,o){const l=(0,n.up)("Vue3Marquee");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.wy)((0,n._)("div",null,[(0,n.Wm)(l,{class:"marquee"},{default:(0,n.w5)((()=>[(0,n._)("h3",null,(0,y.zw)(r.nowPlaying),1)])),_:1})],512),[[_.F8,r.isPlaying]]),(0,n._)("audio",{ref:"audio",controls:"controls",onEnded:t[0]||(t[0]=(...e)=>o.skip&&o.skip(...e))}," HTML5 MP3 audio required (Chrome, Safari, IE 9?) ",544),(0,n._)("div",null,[(0,n._)("div",f,[(0,n._)("ul",{style:(0,y.j5)(o.getListStyle)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.links,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{key:t},[(0,n._)("a",{onClick:(0,_.iM)((t=>o.playAudio(e)),["prevent"])},(0,y.zw)(e.text),9,w)])))),128))],4)])])])}var k=i(4870);(function(){try{if("undefined"!=typeof document){var e=document.createElement("style");e.appendChild(document.createTextNode('.vue3-marquee{display:flex!important;position:relative}.vue3-marquee.horizontal{overflow-x:hidden!important;flex-direction:row!important;width:100%;height:max-content}.vue3-marquee.vertical{overflow-y:hidden!important;flex-direction:column!important;height:100%;width:max-content}.vue3-marquee:hover div{animation-play-state:var(--pauseOnHover)}.vue3-marquee:active div{animation-play-state:var(--pauseOnClick)}.vue3-marquee>.marquee{flex:0 0 auto;min-width:var(--min-width);min-height:var(--min-height);z-index:1;animation:var(--orientation) var(--duration) linear var(--delay) var(--loops);animation-play-state:var(--pauseAnimation);animation-direction:var(--direction)}.vue3-marquee.horizontal>.marquee{display:flex;flex-direction:row;align-items:center}.vue3-marquee.vertical>.marquee{display:flex;flex-direction:column;align-items:center}@keyframes scrollX{0%{transform:translate(0)}to{transform:translate(-100%)}}@keyframes scrollY{0%{transform:translateY(0)}to{transform:translateY(-100%)}}.vue3-marquee>.overlay{position:absolute;width:100%;height:100%}.vue3-marquee>.transparent-overlay{position:absolute;width:100%;height:100%}.vue3-marquee>.overlay:before,.vue3-marquee>.overlay:after{content:"";position:absolute;z-index:2}.vue3-marquee.horizontal>.overlay:before,.vue3-marquee.horizontal>.overlay:after{background:linear-gradient(to right,var(--gradient-color));height:100%;width:var(--gradient-length)}.vue3-marquee.vertical>.overlay:before,.vue3-marquee.vertical>.overlay:after{background:linear-gradient(to bottom,var(--gradient-color));height:var(--gradient-length);width:100%}.vue3-marquee.horizontal>.overlay:after{transform:rotate(180deg)}.vue3-marquee.vertical>.overlay:after{transform:rotate(-180deg)}.vue3-marquee>.overlay:before{left:0;top:0}.vue3-marquee.horizontal>.overlay:after{right:0;top:0}.vue3-marquee.vertical>.overlay:after{left:0;bottom:0}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();var C=Object.defineProperty,D=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,q=(e,t,i)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,H=(e,t)=>{for(var i in t||(t={}))b.call(t,i)&&q(e,i,t[i]);if(D)for(var i of D(t))P.call(t,i)&&q(e,i,t[i]);return e},I=(e,t)=>{const i=e.__vccOpts||e;for(const[n,a]of t)i[n]=a;return i};const S=(0,n.aZ)({props:{vertical:{type:Boolean,default:!1},direction:{type:String,default:"normal"},duration:{type:Number,default:20},delay:{type:Number,default:0},loop:{type:Number,default:0},clone:{type:Boolean,default:!1},gradient:{type:Boolean,default:!1},gradientColor:{type:Array,default:[255,255,255]},gradientWidth:{type:String},gradientLength:{type:String},pauseOnHover:{type:Boolean,default:!1},pauseOnClick:{type:Boolean,default:!1},pause:{type:Boolean,default:!1}},emits:["onComplete","onLoopComplete","onPause","onResume"],setup(e,{emit:t}){const i=(0,k.iH)(0),a=(0,k.iH)("100%"),r=(0,k.iH)("100%"),o=(0,k.iH)(0),l=(0,k.iH)(!1),s=(0,k.iH)(0),u=(0,k.iH)(0),c=(0,k.iH)(0),d=(0,k.iH)(0),h=(0,k.iH)(0),m=(0,k.iH)(null),v=(0,k.iH)("200px"),p=(0,k.iH)(!1),g=(0,k.iH)(null),y=(0,k.iH)(null),_=async()=>{await f(),o.value++},f=async()=>{e.vertical&&(l.value=!0),setInterval((()=>{if(a.value="0%",r.value="0%",null!==g.value&&null!==y.value){if(g.value&&y.value){if(e.vertical&&"clientHeight"in g.value&&"clientHeight"in y.value){d.value=g.value.clientHeight,c.value=y.value.clientHeight;const e=Math.ceil(c.value/d.value);return i.value=isFinite(e)?e:0,l.value=!1,i.value}if(!e.vertical&&"clientWidth"in g.value&&"clientWidth"in y.value){u.value=g.value.clientWidth,s.value=y.value.clientWidth;const e=Math.ceil(s.value/u.value);return i.value=isFinite(e)?e:0,i.value}return a.value="100%",r.value="100%",0}return a.value="100%",r.value="100%",0}return a.value="100%",r.value="100%",0}),100)};(0,n.YP)(u,(async()=>{e.clone&&_()})),(0,n.YP)(s,(async()=>{e.clone&&_()})),(0,n.YP)((()=>e.pause),((e,i)=>{e!==i&&t(e?"onResume":"onPause")}));const w=()=>{e.pauseOnHover&&t("onPause")},x=()=>{e.pauseOnHover&&t("onResume")},C=()=>{e.pauseOnClick&&t("onPause")},D=()=>{e.pauseOnClick&&t("onResume")},b=(0,n.Fl)((()=>{const t={"--duration":`${e.duration}s`,"--delay":`${e.delay}s`,"--direction":`${e.direction}`,"--pauseOnHover":""+(e.pauseOnHover?"paused":"running"),"--pauseOnClick":""+(e.pauseOnClick?"paused":"running"),"--pauseAnimation":""+(e.vertical&&l.value||e.pause?"paused":"running"),"--loops":`${0===e.loop?"infinite":e.loop}`,"--gradient-color":`rgba(${e.gradientColor[0]}, ${e.gradientColor[1]}, ${e.gradientColor[2]}, 1), rgba(${e.gradientColor[0]}, ${e.gradientColor[1]}, ${e.gradientColor[2]}, 0)`,"--gradient-length":`${v.value}`,"--min-width":`${a.value}`,"--min-height":`${r.value}`},i={"--orientation":"scrollX",orientation:"horizontal"};e.vertical&&(i["--orientation"]="scrollY");const n=H(H({},t),i);return n})),P=(0,n.Fl)((()=>!!e.gradient)),q=async()=>{e.vertical?(r.value="100%",a.value="auto"):(r.value="auto",a.value="100%"),e.gradient&&(e.gradientWidth?(console.warn("The `gradientWidth` prop has been deprecated and will be removed in a future release. Please use `gradientLength` instead."),v.value=e.gradientWidth):e.gradientLength&&(v.value=e.gradientLength)),e.clone?(await f(),_(),p.value=!0):p.value=!0};return(0,n.bv)((async()=>{q(),m.value=setInterval((()=>{h.value++,0!==e.loop&&h.value===e.loop&&(t("onComplete"),clearInterval(m.value)),t("onLoopComplete")}),1e3*e.duration)})),(0,n.Jd)((()=>{clearInterval(m.value)})),{ready:p,contentWidth:u,containerWidth:s,contentHeight:d,containerHeight:c,loopCounter:h,loopInterval:m,minWidth:a,minHeight:r,marqueeContent:g,marqueeOverlayContainer:y,componentKey:o,showGradient:P,cloneAmount:i,ForcesUpdate:_,checkForClone:f,setupMarquee:q,getCurrentStyle:b,hoverStarted:w,hoverEnded:x,mouseDown:C,mouseUp:D}}}),A={class:"transparent-overlay",ref:"marqueeOverlayContainer","aria-hidden":!0},L={class:"marquee",ref:"marqueeContent"},$={class:"marquee","aria-hidden":!0};function O(e,t,i,a,r,o){return e.ready?((0,n.wg)(),(0,n.iD)("div",{class:(0,y.C_)(["vue3-marquee",{vertical:e.vertical,horizontal:!e.vertical}]),style:(0,y.j5)(e.getCurrentStyle),key:e.componentKey,onMouseenter:t[0]||(t[0]=(...t)=>e.hoverStarted&&e.hoverStarted(...t)),onMouseleave:t[1]||(t[1]=(...t)=>e.hoverEnded&&e.hoverEnded(...t)),onMousedown:t[2]||(t[2]=(...t)=>e.mouseDown&&e.mouseDown(...t)),onMouseup:t[3]||(t[3]=(...t)=>e.mouseUp&&e.mouseUp(...t))},[(0,n._)("div",A,null,512),e.showGradient?((0,n.wg)(),(0,n.iD)("div",{key:0,"aria-hidden":!0,class:(0,y.C_)(["overlay",{vertical:e.vertical,horizontal:!e.vertical}])},null,2)):(0,n.kq)("",!0),(0,n._)("div",L,[(0,n.WI)(e.$slots,"default")],512),(0,n._)("div",$,[(0,n.WI)(e.$slots,"default")]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.cloneAmount,(t=>((0,n.wg)(),(0,n.iD)("div",{"aria-hidden":!0,class:"marquee cloned",key:t},[(0,n.WI)(e.$slots,"default")])))),128))],38)):(0,n.kq)("",!0)}var z=I(S,[["render",O]]),W={data(){return{nowPlaying:"",nowPlayingUrl:"",isPlaying:!1,currentPlayingIndex:-1,showPlayListCount:0,isSinglePlay:!1,columnCount:2}},props:{links:{type:Array,required:!0}},computed:{isMobile(){return window.innerWidth<=768},getListStyle(){return{fontSize:"large",textAlign:"left","-webkit-column-count":this.columnCount,"-moz-column-count":this.columnCount,"column-count":this.columnCount}}},methods:{playAudio(e){this.$nextTick((()=>{const t=this.$refs.audio;t&&(t.src=e.url,t.play(),this.currentPlayingIndex=this.links.indexOf(e),this.nowPlaying=e.text,this.nowPlayingUrl=e.url,this.isPlaying=!0,this.isSinglePlay=!1)}))},singlePlayAudio(e){this.$nextTick((()=>{const t=this.$refs.audio;t&&(t.src=e.url,t.play(),this.currentPlayingIndex=this.links.indexOf(e),this.nowPlaying=e.text,this.isPlaying=!0)}))},skip(){this.isSinglePlay||(this.nowPlaying="",this.currentPlayingIndex++,this.currentPlayingIndex<this.links.length||(this.currentPlayingIndex=0),this.playAudio(this.links[this.currentPlayingIndex]))},clickIcon(){this.showPlayListCount+=1},handleResize(){window.innerWidth<=768?this.columnCount=1:window.innerWidth>1280?this.columnCount=3:this.columnCount=2},generateClipboardText(){const e=this.nowPlayingUrl.split("/"),t=`https://gordon104532.github.io/button_with_sound/#/?channel=${e[1]}&msg=${e[2]}&file=${e[3]}`;return t},async copyToClipboard(){if(!this.nowPlayingUrl)return void console.error("nowPlayingUrl不存在");const e=document.createElement("textarea");e.value=this.generateClipboardText(),e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),e.setSelectionRange(0,99999);try{const e=document.execCommand("copy"),t=e?"已成功複製到剪貼簿":"複製失敗";console.log(t)}catch(t){console.error("複製失敗",t)}document.body.removeChild(e)}},components:{Vue3Marquee:z},mounted(){window.addEventListener("resize",this.handleResize),this.handleResize();const e=(e,t)=>{t||(t=window.location.href),e=e.replace(/[[\]]/g,"\\$&");const i=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),n=i.exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},t=e("channel"),i=e("msg"),n=e("file");if(t&&i&&n){const e=`/${t}/${i}/${n}`;for(let t=0;t<this.links.length;t++)if(e===this.links[t].url){this.nowPlaying=this.links[t].text,this.nowPlayingUrl=this.links[t].url,this.singlePlayAudio(this.links[t]),this.isSinglePlay=!0;break}}},beforeUnmount(){window.removeEventListener("resize",this.handleResize)}},M=i(89);const E=(0,M.Z)(W,[["render",x],["__scopeId","data-v-2734e78c"]]);var B=E,U=i(9587),R={name:"EasterAiView",components:{PlayList:B,BackToQuiz:U.Z},created(){this.staticDomain="https://gordon-the-owl.tw/media/ai",this.soundList=[{text:"So This Is Love",url:this.staticDomain+"/tier1/0430_so_this_is_love.mp3"},{text:"Paper Hearts",url:this.staticDomain+"/tier1/0430_paper_heart.mp3"},{text:"Paramore Decode",url:this.staticDomain+"/tier1/0505_Paramore_Decode.mp3"},{text:"Such A Boy",url:this.staticDomain+"/tier1/0418_Such_A_Boy.mp3"},{text:"Cupid",url:this.staticDomain+"/tier1/0430_Cupid.mp3"},{text:"Melt Bitter",url:this.staticDomain+"/tier1/0430_melt_bitter.mp3"},{text:"Sunshine Girl",url:this.staticDomain+"/tier1/0505_Sunshine_Girl.mp3"},{text:"Stellar Stellar",url:this.staticDomain+"/tier1/0430_stellar_stellar.mp3"},{text:"Past Lives",url:this.staticDomain+"/tier2/0418_past_lives.mp3"},{text:"大器晚成",url:this.staticDomain+"/tier2/0418_大器晚成.mp3"},{text:"悲傷的五個步驟",url:this.staticDomain+"/tier2/0418_悲傷的五個步驟.mp3"},{text:"LOST IN PARADISE",url:this.staticDomain+"/tier2/0419_LOST_IN_PARADISE_short_ver.mp3"},{text:"My Love Mine All Mine",url:this.staticDomain+"/tier2/0430_My_Love_Mine_All_Mine.mp3"},{text:"Paper Hearts short ver.",url:this.staticDomain+"/tier2/0430_paper_heart_short.mp3"},{text:"Vampire",url:this.staticDomain+"/tier2/0430_vampire_Serafina.mp3"},{text:"白日 short ver.",url:this.staticDomain+"/tier2/0430_白日_short.mp3"},{text:"沒空理你",url:this.staticDomain+"/tier2/0430_沒空理你.mp3"},{text:"花になって",url:this.staticDomain+"/tier2/0430_花になって.mp3"},{text:"Lover Boy",url:this.staticDomain+"/tier2/0505_Lover_Boy.mp3"},{text:"你要的愛 short ver.",url:this.staticDomain+"/tier2/0505_你要的愛_short.mp3"},{text:"怪獣の花唄",url:this.staticDomain+"/tier2/0505_怪獣の花唄.mp3"},{text:"現在想要見你",url:this.staticDomain+"/tier2/0505_現在想要見你.mp3"},{text:"也不是第一次死了",url:this.staticDomain+"/tier3/0412_也不是第一次死了.mp3"},{text:"Apollo short ver.",url:this.staticDomain+"/tier3/0417_Apollo_short_ver.mp3"},{text:"蘑菇蘑菇",url:this.staticDomain+"/tier3/0417_mushroom.mp3"},{text:"與浪之間",url:this.staticDomain+"/tier3/0417_與浪之間.mp3"},{text:"Bécane",url:this.staticDomain+"/tier3/0430_Bécane_ng.mp3"},{text:"Until I Found You",url:this.staticDomain+"/tier3/0430_Until_I_Found_You_ng.mp3"},{text:"Vampire-Olivia",url:this.staticDomain+"/tier3/0430_vampire_Olivia.mp3"},{text:"少女A",url:this.staticDomain+"/tier3/0430_少女A_初音感.mp3"},{text:"Amorfoda",url:this.staticDomain+"/tier3/0505_Amorfoda_ng.mp3"},{text:"不敢哭",url:this.staticDomain+"/tier3/0505_不敢哭_ng.mp3"},{text:"你要的愛",url:this.staticDomain+"/tier3/0505_你要的愛_ng.mp3"},{text:"罪と罰",url:this.staticDomain+"/tier3/0512_罪と罰_ng.mp3"}]},data(){return{esterEggCount:0,staticDomain:"",soundList:[]}},methods:{clickIcon(){this.esterEggCount+=1}}};const T=(0,M.Z)(R,[["render",g]]);var Y=T}}]);
//# sourceMappingURL=996.6d8d1b09.js.map