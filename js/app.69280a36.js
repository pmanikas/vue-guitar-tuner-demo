(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],f=0,l=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&l.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(l.length)l.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/guitar-tuner/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"419a":function(e,t,n){},"4eff":function(e,t,n){"use strict";n("da31")},"4f5e":function(e,t,n){"use strict";n("dc6e")},"53ff":function(e,t,n){"use strict";n("a2d2")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=Object(r["k"])("data-v-0f46f44d");Object(r["g"])("data-v-0f46f44d");var o={class:"container"},c=Object(r["d"])("h1",{class:"title"},"GUITAR TUNER",-1),i={class:"githubCard"};Object(r["f"])();var u=a((function(e,t,n,a,u,s){var d=Object(r["h"])("Nav"),f=Object(r["h"])("Tuner"),l=Object(r["h"])("github-card"),b=Object(r["h"])("Footer");return Object(r["e"])(),Object(r["b"])("div",o,[Object(r["d"])("header",null,[Object(r["d"])(d,{onToggleInput:s.toggleInputHandler,isTunerActive:u.isTunerActive},null,8,["onToggleInput","isTunerActive"])]),Object(r["d"])("main",null,[c,Object(r["d"])(f,{pitch:u.pitch,note:u.note,detune:u.detune,isTunerActive:u.isTunerActive},null,8,["pitch","note","detune","isTunerActive"]),Object(r["d"])("div",i,[Object(r["d"])(l,{"data-user":"pmanikas","data-theme":"dark"})])]),Object(r["d"])(b)])})),s=n("1da1"),d=(n("96cf"),n("cfc3"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("d3b7"),n("159b"),n("7297")),f=n.n(d),l=(n("fb6a"),n("cb29"),function(e,t){for(var n=e.length,r=0,a=0;a<n;a++){var o=e[a];r+=o*o}if(r=Math.sqrt(r/n),r<.01)return-1;for(var c=0,i=n-1,u=.2,s=0;s<n/2;s++)if(Math.abs(e[s])<u){c=s;break}for(var d=1;d<n/2;d++)if(Math.abs(e[n-d])<u){i=n-d;break}e=e.slice(c,i),n=e.length;for(var f=new Array(n).fill(0),l=0;l<n;l++)for(var b=0;b<n-l;b++)f[l]+=e[b]*e[b+l];var v=0;while(f[v]>f[v+1])v++;for(var p=-1,h=-1,O=v;O<n;O++)f[O]>p&&(p=f[O],h=O);var g=h,j=f[g-1],m=f[g],w=f[g+1],y=(j+w-2*m)/2,A=(w-j)/2;return y&&(g-=A/(2*y)),t/g});n("6ef3");var b=function(){var e=f()({}),t=null,n=null,r=null,a=null,o=!1,c=function(t,n){e.on(t,n)},i=function(t){e.off(t)},u=function(t){e.emit("acUpdate",t)},d=function(t){e.emit("statusUpdate",t)},b=function(e){console.error(e)},v=2048,p=new Float32Array(v),h=function(e){var t=Math.log(e/440)/Math.log(2)*12;return Math.round(t)+69},O=function(e){return 440*Math.pow(2,(e-69)/12)},g=function(e,t){return Math.floor(Math.log(e/O(t))/Math.log(2)*1200)},j=function e(){n.getFloatTimeDomainData(p);var r=l(p,t.sampleRate);u(r),window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame),window.requestAnimationFrame(e)},m=function(){r=t.createMediaStreamSource(a),n=t.createAnalyser(),n.fftSize=2048,r.connect(n),j()},w=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!0});case 2:a=e.sent;try{m(a),o=!0,d(o)}catch(t){b("getUserMedia threw exception :".concat(t))}case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){a.getTracks().forEach((function(e){e.stop()})),a=null,o=!1,d(o)},A=function(){var e=window.AudioContext||window.webkitAudioContext;e?(t=new e,w()):b("Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox")};return{on:c,off:i,stop:y,start:A,noteFromPitch:h,centsOffFromPitch:g}},v=Object(r["k"])("data-v-28025f38");Object(r["g"])("data-v-28025f38");var p={class:"navContainer"};Object(r["f"])();var h=v((function(e,t,n,a,o,c){var i=Object(r["h"])("Logo"),u=Object(r["h"])("NavButton");return Object(r["e"])(),Object(r["b"])("nav",p,[Object(r["d"])(i),Object(r["d"])(u,{"is-active":n.isTunerActive,onPressButton:t[1]||(t[1]=function(t){return e.$emit("toggleInput")})},null,8,["is-active"])])})),O=Object(r["k"])("data-v-10720ff2");Object(r["g"])("data-v-10720ff2");var g={class:"logo neon"};Object(r["f"])();var j=O((function(e,t,n,a,o,c){return Object(r["e"])(),Object(r["b"])("div",g,"G")})),m={name:"Logo"};n("9a9f");m.render=j,m.__scopeId="data-v-10720ff2";var w=m,y=Object(r["k"])("data-v-0eb5eddf"),A=y((function(e,t,n,a,o,c){return Object(r["e"])(),Object(r["b"])("button",{class:["button",{isActive:n.isActive}],onClick:t[1]||(t[1]=Object(r["j"])((function(t){return e.$emit("press-button")}),["prevent"]))},Object(r["i"])(n.isActive?"Stop":"Start"),3)})),k={name:"NavButton",props:{isActive:{type:Boolean,default:!1}}};n("53ff");k.render=A,k.__scopeId="data-v-0eb5eddf";var T=k,M={name:"Nav",props:{isTunerActive:{type:Boolean,default:!1}},components:{Logo:w,NavButton:T}};n("4f5e");M.render=h,M.__scopeId="data-v-28025f38";var _=M,F=Object(r["k"])("data-v-6d2148ea");Object(r["g"])("data-v-6d2148ea");var x={class:"tuningArea"},P=Object(r["d"])("div",{class:"referenceLine"},null,-1),S={class:"detuneArea"},I={class:"note"};Object(r["f"])();var N=F((function(e,t,n,a,o,c){var i=Object(r["h"])("Detune");return Object(r["e"])(),Object(r["b"])("div",x,[Object(r["d"])("div",{class:["gridOverlay",{play:n.isTunerActive}]},null,2),P,Object(r["d"])("div",S,[Object(r["d"])("div",I,Object(r["i"])(n.note?o.notes[n.note%12]:"--"),1),Object(r["d"])(i,{detune:n.detune,class:"detuneArea"},null,8,["detune"])])])})),B=(n("a9e3"),Object(r["k"])("data-v-ca963e0e"));Object(r["g"])("data-v-ca963e0e");var C={class:"detune"},D=Object(r["d"])("div",null,"♭",-1),R={class:"detuneValue"},U=Object(r["d"])("div",null,"♯",-1);Object(r["f"])();var G=B((function(e,t,n,a,o,c){return Object(r["e"])(),Object(r["b"])("div",C,[D,Object(r["d"])("div",{class:["detuneTip",null!==n.detune&&(Math.abs(n.detune)<5?"tuned":"outOfTune")],style:{transform:"translateX(".concat(4*n.detune||0,"px)")}},[Object(r["d"])("span",R,Object(r["i"])(n.detune||"--"),1)],6),U])})),q={name:"Detune",props:{detune:{type:Number,default:null}}};n("9438");q.render=G,q.__scopeId="data-v-ca963e0e";var L=q,E=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],z={name:"Tunner",components:{Detune:L},data:function(){return{notes:E}},props:{pitch:{type:Number,default:null},note:{type:Number,default:null},detune:{type:Number,default:null},isTunerActive:{type:Boolean,default:!1}}};n("b2e9");z.render=N,z.__scopeId="data-v-6d2148ea";var H=z,J=Object(r["k"])("data-v-5ea20c02");Object(r["g"])("data-v-5ea20c02");var V={class:"footerContainer"},$=Object(r["d"])("div",{class:"textOverlay"},[Object(r["d"])("div",null,[Object(r["c"])("Online Guitar Tuner - a Vue Demo crafted by "),Object(r["d"])("a",{href:"https://pantelismanikas.eu",target:"window"},"Pantelis Manikas")]),Object(r["d"])("a",{href:"https://github.com/pmanikas/guitar-tuner"},"Github Code")],-1);Object(r["f"])();var W=J((function(e,t,n,a,o,c){return Object(r["e"])(),Object(r["b"])("footer",V,[Object(r["d"])("img",{class:"background",src:o.footerBg,alt:"anime girl with guitar watching the sunset"},null,8,["src"]),$])})),X=n("ce48"),K=n.n(X),Q={name:"Footer",data:function(){return{footerBg:K.a}},props:{isTunerActive:{type:Boolean,default:!1}},components:{Logo:w}};n("a5eb");Q.render=W,Q.__scopeId="data-v-5ea20c02";var Y=Q,Z=(n("2100"),b()),ee={name:"App",components:{Nav:_,Tuner:H,Footer:Y},data:function(){return{soundService:Z,pitch:null,note:null,detune:null,isTunerActive:!1}},mounted:function(){var e=this;Z.on("acUpdate",(function(t){e.setResults(t)})),Z.on("statusUpdate",(function(t){e.isTunerActive=t}))},methods:{toggleInputHandler:function(){this.isTunerActive?this.soundService.stop():this.soundService.start()},setResults:function(e){-1===e?(this.pitch=null,this.note=null,this.detune=null):(this.pitch=Math.round(e),this.note=Z.noteFromPitch(this.pitch),this.detune=Z.centsOffFromPitch(this.pitch,this.note))}}};n("4eff");ee.render=u,ee.__scopeId="data-v-0f46f44d";var te=ee,ne=n("9483");Object(ne["a"])("".concat("/guitar-tuner/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("fce9");Object(r["a"])(te).mount("#app")},9438:function(e,t,n){"use strict";n("ba2b")},"9a9f":function(e,t,n){"use strict";n("db02")},a2d2:function(e,t,n){},a5eb:function(e,t,n){"use strict";n("419a")},b2e9:function(e,t,n){"use strict";n("e417")},ba2b:function(e,t,n){},ce48:function(e,t,n){e.exports=n.p+"img/anime-girl-with-guitar-watching-the-sunset.786962a8.png"},da31:function(e,t,n){},db02:function(e,t,n){},dc6e:function(e,t,n){},e417:function(e,t,n){},fce9:function(e,t,n){}});
//# sourceMappingURL=app.69280a36.js.map