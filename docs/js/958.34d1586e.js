"use strict";(self["webpackChunkbutton_with_sound"]=self["webpackChunkbutton_with_sound"]||[]).push([[958],{7498:function(t,n,a){a.d(n,{Z:function(){return p}});var s=a(3396),i=a(7139);const o={id:"instants_container",style:{display:"flex","flex-wrap":"wrap"}},e=["onClick"],r=(0,s._)("div",{class:"small-button-shadow"},null,-1),l={class:"instant-link link-secondary"};function u(t,n,a,u,c,d){return(0,s.wg)(),(0,s.iD)("div",o,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.files,(t=>((0,s.wg)(),(0,s.iD)("div",{class:"instant",key:t.name,style:{"margin-right":"10px","margin-bottom":"5px"}},[(0,s._)("div",{class:"circle small-button-background",style:(0,i.j5)({backgroundColor:a.buttonBgColor})},null,4),(0,s._)("button",{class:"small-button",onClick:n=>d.play(t.path),type:"button"},null,8,e),r,(0,s._)("a",l,(0,i.zw)(t.name),1)])))),128))])}var c={data(){return{canPause:!1,hasErrors:!1,lastUrl:"",audio:new Audio}},props:{files:{type:Array,required:!0},buttonBgColor:{type:String,required:!0}},methods:{play:function(t){this.playAudio(t)},playAudio(t){this.canPause&&(this.audio.pause(),this.audio.currentTime=0),(this.lastUrl!==t||this.hasErrors)&&(this.audio.src=t,this.lastUrl=t,this.hasErrors=!1,this.canPause=!1,this.audio.onerror=function(){this.hasErrors=!0});const n=this.audio.play();void 0!==n&&n.then((t=>{this.canPause=!0})).catch((t=>{this.hasErrors=!0,console.log(t)}))}}},d=a(89);const h=(0,d.Z)(c,[["render",u]]);var p=h},1958:function(t,n,a){a.r(n),a.d(n,{default:function(){return T}});var s=a(3396),i=a(7139);const o=t=>((0,s.dD)("data-v-bbe3631e"),t=t(),(0,s.Cn)(),t),e={class:"pope-hbd"},r={class:"container-fluid justify-content-between flex-row",style:{"user-select":"none"}},l={class:"my-1"},u={key:0},c=o((()=>(0,s._)("div",{style:{"font-size":"xx-large"}},[(0,s._)("img",{src:"https://media.discordapp.net/stickers/948615150016020480.png?size=160",alt:"popeCat rose",style:{width:"8%",height:"8%"}}),(0,s.Uk)(" 生日快樂歌 "),(0,s._)("img",{src:"https://media.discordapp.net/stickers/948615150016020480.png?size=160",alt:"popeCat rose",style:{width:"8%",height:"8%"}})],-1))),d={controls:""},h=["src"],p={key:1},m=o((()=>(0,s._)("br",null,null,-1))),g=o((()=>(0,s._)("div",{style:{"font-size":"xx-large"}},"小彩蛋",-1))),b={controls:""},_=["src"],v={key:2},y=o((()=>(0,s._)("br",null,null,-1))),D=o((()=>(0,s._)("div",null,"ﾚ(ﾟ∀ﾟ;)ﾍ 沒有了啦 ﾍ( ﾟ∀ﾟ;)ﾉ",-1))),k=[y,D],w={key:3},f=o((()=>(0,s._)("br",null,null,-1))),C=o((()=>(0,s._)("div",null,"(๑•ั็ω•็ั๑) 沒有了吧 (๑•ั็ω•็ั๑)",-1))),x=[f,C],q={key:4},E=o((()=>(0,s._)("br",null,null,-1))),P=o((()=>(0,s._)("div",null,"ლ(•ω •ლ) 沒有了 ლ(•ω •ლ)",-1))),B=[E,P],z={key:5},A=o((()=>(0,s._)("br",null,null,-1))),S=o((()=>(0,s._)("div",null,"好了啦 你已經按一百下了",-1))),U=o((()=>(0,s._)("div",null,"(*´▽`*)",-1))),Z=[A,S,U],j={class:"SoundPad"},L={id:"content",style:{"background-color":"inherit","max-width":"90%"}};function H(t,n,a,o,y,D){const f=(0,s.up)("SoundPad");return(0,s.wg)(),(0,s.iD)("div",e,[(0,s._)("nav",{class:"navbar sticky-top navbar-expand-lg navbar-dark bg-bar",style:(0,i.j5)({backgroundColor:y.navbarBgColor})},[(0,s._)("div",r,[(0,s._)("div",l,[(0,s._)("a",{id:"brand",class:"navbar-brand ms-3",onClick:n[0]||(n[0]=(...t)=>D.esterEgg&&D.esterEgg(...t))},"2023 ㄅㄅㄅㄕㄖㄎㄌ")])])],4),(0,s._)("div",null,[y.counter>4&&y.counter<49?((0,s.wg)(),(0,s.iD)("div",u,[c,(0,s._)("audio",d,[(0,s._)("source",{src:y.hbd_song,type:"audio/mpeg"},null,8,h)])])):(0,s.kq)("",!0),y.counter>18&&y.counter<49?((0,s.wg)(),(0,s.iD)("div",p,[m,g,(0,s._)("audio",b,[(0,s._)("source",{src:y.laugh_song,type:"audio/mpeg"},null,8,_)])])):(0,s.kq)("",!0),y.counter>23&&y.counter<34?((0,s.wg)(),(0,s.iD)("div",v,k)):(0,s.kq)("",!0),y.counter>33&&y.counter<49?((0,s.wg)(),(0,s.iD)("div",w,x)):(0,s.kq)("",!0),y.counter>68?((0,s.wg)(),(0,s.iD)("div",q,B)):(0,s.kq)("",!0),y.counter>99?((0,s.wg)(),(0,s.iD)("div",z,Z)):(0,s.kq)("",!0)]),(0,s._)("div",j,[(0,s._)("div",L,[(0,s.Wm)(f,{files:y.soundList,"button-bg-color":y.buttonBgColor},null,8,["files","button-bg-color"])])])])}var O=a(7498),V={name:"PopeHBD2023",components:{SoundPad:O.Z},data(){return{staticDomain:"",soundList:[],buttonBgColor:"#1582f0",navbarBgColor:"#1582f0",counter:0,hbd_song:"",laugh_song:""}},created(){this.staticDomain="https://gordon-the-owl.tw/media/soundpad",this.soundList=[{name:"好想",path:this.staticDomain+"/好想卯咪.mp3"},{name:"生日快熱",path:this.staticDomain+"/生日快熱.mp3"},{name:"喵喵喵",path:this.staticDomain+"/喵喵喵.mp3"},{name:"打狗狗巴掌",path:this.staticDomain+"/打狗狗巴掌.mp3"},{name:"汪汪",path:this.staticDomain+"/卯咪汪汪.mp3"},{name:"我沒看到",path:this.staticDomain+"/我沒看到.mp3"},{name:"駿ㄍ",path:this.staticDomain+"/駿我大哥.mp3"},{name:"哇塞",path:this.staticDomain+"/哇賽2.mp3"},{name:"亂念",path:this.staticDomain+"/亂念.mp3"},{name:"還有十分鐘",path:this.staticDomain+"/還有十分鐘.mp3"},{name:"看錯時間了",path:this.staticDomain+"/看錯時間了.mp3"},{name:"聊天室等我一下",path:this.staticDomain+"/聊天室等我一下.mp3"},{name:"現在是VOD嗎",path:this.staticDomain+"/現在是VOD嗎.mp3"},{name:"記得吃飯",path:this.staticDomain+"/邊哭邊提醒大家要記得吃飯.mp3"}],this.hbd_song=this.staticDomain+"/生日快樂歌.mp3",this.laugh_song=this.staticDomain+"/笑.mp3"},methods:{esterEgg(){this.counter+=1}}},I=a(89);const K=(0,I.Z)(V,[["render",H],["__scopeId","data-v-bbe3631e"]]);var T=K}}]);
//# sourceMappingURL=958.34d1586e.js.map