(function(e){function t(t){for(var r,u,l=t[0],i=t[1],s=t[2],c=0,g=[];c<l.length;c++)u=l[c],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&g.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(g.length)g.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var p=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("f9e3"),n("2dd8");var r=n("5f5b"),a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("a",{attrs:{href:"/"}},[n("b-img",{attrs:{height:"120px",src:"/ReaderWoodchuck.png"}})],1)]),n("router-view")],1)},u=[],l=(n("034f"),n("2877")),i={},s=Object(l["a"])(i,o,u,!1,null,null,null),p=s.exports,c=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",e._l(e.rows,(function(t){return n("b-row",{key:t[0].letter},e._l(t,(function(t){return n("b-card-group",{key:t.letter,staticClass:" pb-4 mx-auto",attrs:{deck:""}},[n("b-card",{staticStyle:{"max-width":"17rem"},attrs:{"img-top":"","img-src":t.image}},[n("b-card-title",[n("b-button",{attrs:{href:"#",variant:"success"},on:{click:function(n){return n.preventDefault(),e.playSound(t.sound)}}},[n("H2",[e._v(e._s(t.letter))])],1)],1)],1)],1)})),1)})),1)},m=[],d={name:"AlphabetCards",data:function(){return{rows:this.getAlphabetRows()}},methods:{playSound:function(e){var t=new Audio(e);t.play()},getAlphabet:function(){return[{letter:"A",image:"Apple.png",sound:"A.m4a"},{letter:"B",image:"Balloon.png",sound:"A.m4a"},{letter:"C",image:"Caterpillar.png",sound:"A.m4a"},{letter:"D",image:"Dog.png",sound:"A.m4a"},{letter:"E",image:"Egg.png",sound:"A.m4a"},{letter:"F",image:"Fish.png",sound:"A.m4a"},{letter:"G",image:"Guitar.png",sound:"A.m4a"},{letter:"H",image:"Hat.png",sound:"A.m4a"},{letter:"I",image:"Igloo.png",sound:"A.m4a"},{letter:"J",image:"Jar.png",sound:"A.m4a"},{letter:"K",image:"Key.png",sound:"A.m4a"},{letter:"L",image:"Lamp.png",sound:"A.m4a"},{letter:"M",image:"Monkey.png",sound:"A.m4a"},{letter:"N",image:"Nest.png",sound:"A.m4a"},{letter:"O",image:"Octopus.png",sound:"A.m4a"},{letter:"P",image:"Pencil.png",sound:"A.m4a"},{letter:"Q",image:"Queen.png",sound:"A.m4a"},{letter:"R",image:"Ring.png",sound:"A.m4a"},{letter:"S",image:"Snake.png",sound:"A.m4a"},{letter:"T",image:"Turtle.png",sound:"A.m4a"},{letter:"U",image:"Umbrella.png",sound:"A.m4a"},{letter:"V",image:"Vacuum.png",sound:"A.m4a"},{letter:"W",image:"Wagon.png",sound:"A.m4a"},{letter:"X",image:"Box.png",sound:"A.m4a"},{letter:"Y",image:"Yo-Yo.png",sound:"A.m4a"},{letter:"Z",image:"Zipper.png",sound:"A.m4a"}]},getAlphabetRows:function(){for(var e=[],t=3,n=this.getAlphabet(),r=0;r<n.length;r+=t){for(var a=[],o=0;o<t;o+=1)r+o<n.length&&a.push(n[r+o]);e.push(a)}return e}}},f=d,h=Object(l["a"])(f,g,m,!1,null,null,null),b=h.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-component",{staticClass:"text-center"},[n("h1",[e._v("Welcome, Virtual Woodchucks!")]),n("h3",[e._v("Let's get learning")]),n("a",{staticStyle:{color:"#28a745"},attrs:{href:"/AlphabetCards",target:"_self"}},[n("h4",[e._v("Alphabet Cards")])])])},v=[],y={name:"Home"},w=y,_=Object(l["a"])(w,A,v,!1,null,null,null),O=_.exports;a["default"].use(c["a"]);var x=[{path:"/",name:"Home",component:O},{path:"/AlphabetCards",name:"AlphabetCards",component:b}],j=new c["a"]({mode:"history",base:"/",routes:x}),k=j;a["default"].config.productionTip=!1,a["default"].use(r["a"]),new a["default"]({router:k,render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.6d319ea9.js.map