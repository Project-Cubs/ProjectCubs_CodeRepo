(this.webpackJsonpcubslogin=this.webpackJsonpcubslogin||[]).push([[0],{107:function(e,t){},109:function(e,t){},118:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var i=n(6),c=n(79),a=n.n(c),o=(n(89),n(21)),l=n(9),s=(n(90),n(0)),r=n(2),u=n(12),j=n(22),m=n(80),b=(n(118),n(7)),d=function(){var e,t=null===(e=Object(l.m)().state)||void 0===e?void 0:e.song,n=Object(j.a)({},t),c=n.music_url,a=n.title,o=n.artist,d=n.album_url,O=n.lyrics,h=Object(i.useState)(0),f=Object(u.a)(h,2),x=f[0],p=f[1],v=Object(i.useRef)(null),w=Object(i.useRef)(null),g=function(){var e=document.querySelector(".highlighted");if(e&&v.current){var t=e.offsetHeight,n=v.current.offsetHeight,i=e.offsetTop-(n-t)/2;v.current.scrollTop=i}};function k(){return(k=Object(r.a)(Object(s.a)().mark((function e(t){var n,i,c,a,o,l,r,u,j;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://krdict.korean.go.kr/api/search","313D5A71F45A553EE6F384880AD5CB9C",a=t,"y","1",e.next=7,fetch("".concat("https://krdict.korean.go.kr/api/search","?key=").concat("313D5A71F45A553EE6F384880AD5CB9C","&q=").concat(a,"&translated=").concat("y","&trans_lang=").concat("1"),{mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*"}});case 7:return o=e.sent,(l=new Headers(o.headers)).set("Access-Control-Allow-Origin","*"),l.set("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept"),e.next=13,o.clone({headers:l}).text();case 13:return r=e.sent,console.log(r),e.next=17,Object(m.parseStringPromise)(r);case 17:u=e.sent,console.log(u),(j=null===(n=u.channel.item)||void 0===n||null===(i=n[0].sense)||void 0===i||null===(c=i[0].translation)||void 0===c?void 0:c[0].trans_dfn)?alert("Definition: ".concat(j)):alert("No definition found");case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){if(""===e)return"\u2022";var t=e.split(/\s+/),n=function(e){return e.match(/[\uAC00-\uD7AF]+/g)}(e),i=t.map((function(e){return null!==n&&void 0!==n&&n.includes(e)?Object(b.jsxs)("a",{onClick:function(){return function(e){return k.apply(this,arguments)}(e)},children:[" "," ".concat(e," ")," \xa0"]}):" ".concat(e," ")}));return i}return Object(i.useEffect)((function(){return window.addEventListener("resize",g),function(){window.removeEventListener("resize",g)}}),[]),Object(b.jsxs)("div",{className:"pbody",children:[Object(b.jsx)("div",{className:"content",ref:v,children:Object(b.jsx)("div",{className:"lyrics",children:O.map((function(e,t){return Object(b.jsx)("div",{className:x===t?"highlighted":"",note:e.note,children:y(e.line)},t)}))})}),Object(b.jsxs)("div",{className:"player",children:[Object(b.jsx)("div",{className:"left",style:{backgroundImage:"url(".concat(d,")")}}),Object(b.jsxs)("div",{className:"right",children:[Object(b.jsxs)("div",{className:"top",children:[Object(b.jsx)("a",{className:"song",children:a}),Object(b.jsx)("a",{className:"artist",children:o})]}),Object(b.jsx)("div",{className:"bottom",children:Object(b.jsx)("video",{ref:w,controls:!0,autoPlay:!0,name:"media",loop:!0,onTimeUpdate:function(){var e=1e3*w.current.currentTime,t=O.filter((function(t){return t.time<e}));t.length!==x&&(p(t.length-1),g()),console.log(w.current.currentTime+"/"+w.current.duration),w.current.currentTime>w.current.duration-.2&&alert("Your Score is: "+Math.floor(100*Math.random()))},children:Object(b.jsx)("source",{src:c,type:"audio/mpeg"})})})]})]})]})},O=function(){var e=JSON.parse(localStorage.getItem("user"));return e?Object(b.jsx)(l.b,{context:[e]}):Object(b.jsx)(l.a,{to:"/login"})},h=[{title:"What is Love?",artist:"Twice",music_url:"https://audio.jukehost.co.uk/IGYozUMdodb9Q45YWlILUjxFvJ8gsZ6g",album_url:"https://www.kpopusaonline.com/wp-content/uploads/2019/11/232.1.jpg",lyrics:[{line:"",time:-1},{line:"What is love?",time:7220},{line:"",time:8430},{line:"\ub9e4\uc77c\uac19\uc774 \uc601\ud654 \uc18d\uc5d0\uc11c\ub098",time:11220},{line:"\ucc45 \uc18d\uc5d0\uc11c\ub098 \ub4dc\ub77c\ub9c8 \uc18d\uc5d0\uc11c \uc0ac\ub791\uc744 \ub290\uaef4",time:13440},{line:"Mmm, \uc0ac\ub791\uc744 \ubc30\uc6cc",time:17880},{line:"\ub0b4 \uc77c\ucc98\ub7fc \uc790\uafb8 \uac00\uc2b4\uc774 \ub6f0\uc5b4",time:22380},{line:"\ub450\uadfc\ub450\uadfc\uac70\ub824 \uc124\ub808\uc784\uc5d0 \ubd80\ud480\uc5b4 \uc62c\ub77c",time:24670},{line:"Mmm, \uad81\uae08\ud574\uc11c \ubbf8\uce60 \uac83\ub9cc \uac19\uc544",time:29740},{line:"",time:33800},{line:"Ooh, \uc5b8\uc820\uac04 \ub0b4\uac8c\ub3c4",time:34310},{line:"\uc774\ub7f0 \uc77c\uc774 \uc2e4\uc81c\ub85c \uc77c\uc5b4\ub0a0\uae4c",time:36090},{line:"\uadf8\uac8c \uc5b8\uc81c\ucbe4\uc77c\uae4c? \uc5b4\ub5a4 \uc0ac\ub78c\uc77c\uae4c?",time:40150},{line:"",time:44080},{line:"I wanna know",time:44590},{line:"\uc0ac\ud0d5\ucc98\ub7fc \ub2ec\ucf64\ud558\ub2e4\ub294\ub370",time:45030},{line:"I wanna know",time:47310},{line:"\ud558\ub298\uc744 \ub098\ub294 \uac83 \uac19\ub2e4\ub294\ub370",time:48010},{line:"I wanna know know know know",time:50360},{line:"What is love?",time:52140},{line:"\uc0ac\ub791\uc774 \uc5b4\ub5a4 \ub290\ub08c\uc778\uc9c0?",time:53020},{line:"I wanna know",time:55630},{line:"\ud558\ub8e8 \uc885\uc77c \uc6c3\uace0 \uc788\ub2e4\ub294\ub370",time:56390},{line:"I wanna know",time:58730},{line:"\uc138\uc0c1\uc774 \ub2e4 \uc544\ub984\ub2f5\ub2e4\ub294\ub370",time:59560},{line:"I wanna know know know know",time:61720},{line:"What is love?",time:63490},{line:"\uc5b8\uc820\uac04 \ub098\uc5d0\uac8c\ub3c4 \uc0ac\ub791\uc774 \uc62c\uae4c?",time:64450},{line:"",time:67300},{line:"\uc9c0\uae08 \uc774\ub7f0 \uc0c1\uc0c1\ub9cc\uc73c\ub85c\ub3c4",time:67680},{line:"\ub5a0\uc62c\ub824\ub9cc \ubd10\ub3c4 \uac00\uc2b4\uc774 \ud130\uc9c8 \uac83 \uac19\uc740\ub370",time:70600},{line:"Mmm, \uc774\ub807\uac8c \uc88b\uc740\ub370",time:74340},{line:"\ub9cc\uc77c \uc5b8\uc820\uac00 \uc9c4\uc9dc\ub85c \ub0b4\uac8c",time:78780},{line:"\uc0ac\ub791\uc774 \uc62c \ub54c \ub09c \uc6b8\uc5b4\ubc84\ub9b4\uc9c0\ub3c4 \ubab0\ub77c",time:81320},{line:"Mmm, \uc815\ub9d0 \uad81\uae08\ud574 \ubbf8\uce60 \uac83\ub9cc \uac19\uc544",time:85820},{line:"",time:89950},{line:"Ooh, \uc5b8\uc820\uac04 \ub0b4\uac8c\ub3c4",time:90650},{line:"\uc774\ub7f0 \uc77c\uc774 \uc2e4\uc81c\ub85c \uc77c\uc5b4\ub0a0\uae4c",time:92550},{line:"\uadf8\uac8c \uc5b8\uc81c\ucbe4\uc77c\uae4c? \uc5b4\ub5a4 \uc0ac\ub78c\uc77c\uae4c?",time:96920},{line:"",time:100480},{line:"I wanna know",time:100990},{line:"\uc0ac\ud0d5\ucc98\ub7fc \ub2ec\ucf64\ud558\ub2e4\ub294\ub370",time:101750},{line:"I wanna know",time:103910},{line:"\ud558\ub298\uc744 \ub098\ub294 \uac83 \uac19\ub2e4\ub294\ub370",time:104480},{line:"I wanna know know know know",time:106760},{line:"What is love?",time:108530},{line:"\uc0ac\ub791\uc774 \uc5b4\ub5a4 \ub290\ub08c\uc778\uc9c0?",time:109680},{line:"I wanna know",time:112090},{line:"\ud558\ub8e8 \uc885\uc77c \uc6c3\uace0 \uc788\ub2e4\ub294\ub370",time:112910},{line:"I wanna know",time:115010},{line:"\uc138\uc0c1\uc774 \ub2e4 \uc544\ub984\ub2f5\ub2e4\ub294\ub370",time:115580},{line:"{All} I wanna know know know know",time:118180},{line:"What is love?",time:119890},{line:"\uc5b8\uc820\uac04 \ub098\uc5d0\uac8c\ub3c4 \uc0ac\ub791\uc774 \uc62c\uae4c?",time:120910},{line:"",time:123890},{line:"\uc9c0\uae08 \uc138\uc0c1 \uc5b4\ub290 \uacf3\uc5d0 \uc0b4\uace0 \uc788\ub294\uc9c0",time:124330},{line:"\ub3c4\ub300\uccb4 \uc5b8\uc81c\ucbe4 \ub098\uc640 \ub9cc\ub098\uac8c \ub420\ub294\uc9c0",time:126680},{line:"\uc5b8\uc81c \uc5b4\ub5bb\uac8c \uc6b0\ub9ac\uc758 \uc778\uc5f0\uc740",time:129340},{line:"\uc2dc\uc791\ub420\ub294\uc9c0 \ubaa8\ub974\uc9c0\ub9cc \ub290\ub08c\uc774 \uc5b4\uca50\uc9c0",time:131550},{line:"\uc9c4\uc9dc \uc88b\uc744 \uac83 \uac19\uc544 \uc660\uc9c0",time:135100},{line:"\uc601\ud654 \ub4dc\ub77c\ub9c8\ubcf4\ub2e4\ub3c4 \ub354 \uba4b\uc9c4 (\uba4b\uc9c4)",time:137830},{line:"\uc0ac\ub791\uc774 \uc62c \uac70\uc57c \ub0b4 \uc608\uac10 \uc5b8\uc81c\ub098 \ub9de\uc9c0 (Ooh-ooh)",time:140620},{line:"\uc5b4\uc11c \ub098\ud0c0\ub098\ubd10 \ub098\ub294 \ub2e4 \uc900\ube44\uac00 \ub410\uc9c0 ready",time:143290},{line:"",time:146330},{line:"\uc5b4\ub514 \uc788\uc744\uae4c?",time:146840},{line:"\ucc3e\uc544\ub0bc \uac70\uc57c",time:148170},{line:"\uc5b4\ub514 \uc788\uc744\uae4c?",time:149380},{line:"\ubcf4\uace0 \uc2f6\uc5b4 \uc8fd\uaca0\uc5b4",time:151090},{line:"\ub354 \uc774\uc0c1 \ucc38\uc744 \uc218 \uc5c6\uc744 \uac83\ub9cc \uac19\uc544",time:153060},{line:"",time:156990},{line:"\uc0ac\ud0d5\ucc98\ub7fc \ub2ec\ucf64\ud558\ub2e4\ub294\ub370",time:157500},{line:"\ud558\ub298\uc744 \ub098\ub294 \uac83 \uac19\ub2e4\ub294\ub370",time:160040},{line:"I wanna know know know know",time:163080},{line:"What is love?",time:164980},{line:"\uc0ac\ub791\uc774 \uc5b4\ub5a4 \ub290\ub08c\uc778\uc9c0?",time:165930},{line:"\ud558\ub8e8 \uc885\uc77c \uc6c3\uace0 \uc788\ub2e4\ub294\ub370",time:168470},{line:"\uc138\uc0c1\uc774 \ub2e4 \uc544\ub984\ub2f5\ub2e4\ub294\ub370",time:171710},{line:"I wanna know know know know",time:174630},{line:"What is love?",time:176150},{line:"\uc5b8\uc820\uac04 \ub098\uc5d0\uac8c\ub3c4 \uc0ac\ub791\uc774 \uc62c\uae4c?",time:177350},{line:"",time:180460},{line:"I wanna know, I wanna know",time:180840},{line:"I wanna know know know know",time:185730},{line:"What is love?",time:187630},{line:"I wanna know, I wanna know",time:188580},{line:"I wanna know know know know",time:197280},{line:"What is love?",time:199110},{line:"I wanna know",time:202600},{line:"",time:203940}]}],f=(n(120),function(){var e=Object(l.o)();return Object(b.jsxs)("div",{children:[Object(b.jsxs)("nav",{children:[Object(b.jsx)("h1",{children:"My K Star"}),Object(b.jsxs)(o.b,{to:"/",className:"Links",children:[" ","Home"," "]}),Object(b.jsxs)(o.b,{to:"/dashboard",className:"Links",children:[" ","Dashboard"," "]}),Object(b.jsxs)(o.b,{to:"/dictionary",className:"Links",children:[" ","Dictionary"," "]}),Object(b.jsxs)(o.b,{to:"/learn",className:"Links",children:[" ","Learn"," "]}),Object(b.jsx)("button",{onClick:function(){localStorage.removeItem("user"),e("/login")},children:"Logout"})]}),Object(b.jsx)("hr",{className:"navbar-divider"})]})}),x=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{}),Object(b.jsxs)("main",{children:[Object(b.jsx)("h1",{children:"Dashboard"}),Object(b.jsx)("p",{children:"Adipisicing cupidatat labore non fugiat labore aute in deserunt magna velit ea eiusmod. Anim cupidatat laborum pariatur incididunt ad ut eiusmod. Ullamco sit fugiat occaecat pariatur eiusmod minim dolore pariatur ea ullamco. Qui eiusmod qui cillum aliqua labore ea. Duis adipisicing tempor cupidatat ut sunt aute consequat do anim in cupidatat."})]})]})},p=n(17),v=n(81),w=n(35),g=n(82),k=Object(j.a)({},g.a),y=Object(v.a)(k),I=Object(w.b)(y),C=Object(p.b)(y),A=(n(121),function(){var e=Object(i.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)([]),o=Object(u.a)(a,2),l=o[0],s=o[1],r=Object(i.useState)(""),m=Object(u.a)(r,2),d=m[0],O=m[1];return Object(i.useEffect)((function(){var e=Object(p.e)(C,"/words");Object(p.c)(e,(function(e){for(var t in console.log("value",e.val()),e.val()){console.log(e.val());var n=e.val();console.log("value",e.val()[t]);var i=[];for(var c in n)i.push(Object(j.a)({id:c},n[c]));console.log("wordArray",i),s(i)}}))}),[]),Object(b.jsx)("section",{children:Object(b.jsxs)("form",{className:"bookmark-form",children:[Object(b.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)},defaultValue:n}),Object(b.jsx)("button",{onClick:function(e){e.preventDefault();var t=Object(p.e)(C,"/words");Object(p.d)(t,{title:n})},type:"submit",children:"Bookmark"}),Object(b.jsx)("ul",{children:l.map((function(e){return Object(b.jsxs)("li",{children:[e.title,d===e.id?Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"text",defaultValue:"...",onChange:function(t){!function(e,t){var n=Object(p.e)(C,"/words/".concat(e));Object(p.g)(n,{title:t}),O("")}(e.id,t.target.value)}}),Object(b.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),O("")},children:"Cancel"})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{type:"submit",onClick:function(t){var n;t.preventDefault(),n=e.id,O(n)},children:"Edit"}),Object(b.jsx)("button",{onClick:function(t){!function(e,t){var n=Object(p.e)(C,"/words/".concat(e));Object(p.f)(n)}(e.id)},type:"submit",children:"Delete"})]})]},e.id)}))})]})})}),N=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(f,{}),Object(b.jsxs)("header",{children:[Object(b.jsxs)("blockquote",{children:[Object(b.jsx)("h1",{children:"My K Star Dictionary"}),Object(b.jsx)("footer",{children:Object(b.jsx)("h2",{children:"Find meanings and save for quick reference"})})]}),Object(b.jsx)(A,{})]})]})},S=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{}),Object(b.jsxs)("main",{children:[Object(b.jsx)("h1",{children:"Home"}),Object(b.jsx)("p",{children:"Adipisicing cupidatat labore non fugiat labore aute in deserunt magna velit ea eiusmod. Anim cupidatat laborum pariatur incididunt ad ut eiusmod. Ullamco sit fugiat occaecat pariatur eiusmod minim dolore pariatur ea ullamco. Qui eiusmod qui cillum aliqua labore ea. Duis adipisicing tempor cupidatat ut sunt aute consequat do anim in cupidatat."})]})]})};function D(e){var t=e.song,n=Object(j.a)({},t),i=n.album_url,c=n.artist,a=n.title,o=Object(l.o)();return Object(b.jsxs)("aside",{children:[Object(b.jsxs)("h3",{children:[" ",a," "]}),Object(b.jsxs)("figure",{children:[Object(b.jsx)("img",{src:i}),Object(b.jsx)("figcaption",{children:Object(b.jsxs)("i",{children:[" Artist: ",c," "]})})]}),Object(b.jsx)("button",{onClick:function(){o("/lyric-player",{state:{song:t}})},children:"Sing!"})]})}var E=function(e,t){var n=Object(p.e)(C,e);Object(p.g)(n,t)},W=function(){var e=Object(i.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){(function(e){var t=Object(p.e)(C,e);return Object(p.a)(t).then((function(e){return e.val()}))})("songs").then((function(e){c(e)}))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{}),Object(b.jsxs)("main",{children:[Object(b.jsx)("h1",{children:" Learn "}),Object(b.jsx)("section",{children:n.map((function(e,t){return Object(b.jsx)(D,{song:e},t)}))})]})]})};function L(){var e=Object(i.useState)("test@gmail.com"),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)("password"),o=Object(u.a)(a,2),j=o[0],m=o[1],d=Object(i.useState)(""),O=Object(u.a)(d,2),h=O[0],f=O[1],x=Object(l.o)();function p(){return(p=Object(r.a)(Object(s.a)().mark((function e(t){var i,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("handleSingUp"),e.prev=2,e.next=5,Object(w.a)(I,n,j);case 5:i=e.sent,c=i.user.email,console.log(i),console.log("signed up with email: "+c),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),f(e.t0.message),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}return Object(b.jsxs)("div",{children:[Object(b.jsxs)("form",{children:[Object(b.jsxs)("label",{children:["Email:",Object(b.jsx)("input",{type:"email",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:["Password:",Object(b.jsx)("input",{type:"password",value:j,onChange:function(e){return m(e.target.value)}})]}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),Object(w.c)(I,n,j).then((function(e){var t=e.user;localStorage.setItem("user",JSON.stringify(t)),console.log("Signed in as user:",t),x("/")})).catch((function(e){var t=e.code,n=e.message;console.error("Error signing in: ".concat(t," - ").concat(n)),f("Error signing in: ".concat(t," - ").concat(n))}))},children:"Login"}),Object(b.jsx)("button",{type:"submit",onClick:function(e){return p.apply(this,arguments)},children:"Sign Up"})]}),h&&Object(b.jsx)("code",{children:h})]})}function q(){return Object(b.jsxs)("main",{children:[Object(b.jsx)("h1",{children:"Welcome! "}),Object(b.jsx)("hr",{}),Object(b.jsx)(L,{})]})}var M=function(){return E("songs",h),Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(o.a,{basename:"/ProjectCubs_CodeRepo",children:Object(b.jsxs)(l.e,{children:[Object(b.jsxs)(l.c,{element:Object(b.jsx)(O,{}),children:[Object(b.jsx)(l.c,{path:"/",element:Object(b.jsx)(S,{})}),Object(b.jsx)(l.c,{path:"/learn",element:Object(b.jsx)(W,{})}),Object(b.jsx)(l.c,{path:"/dictionary",element:Object(b.jsx)(N,{})}),Object(b.jsx)(l.c,{path:"/dashboard",element:Object(b.jsx)(x,{})}),Object(b.jsx)(l.c,{path:"/lyric-player",element:Object(b.jsx)(d,{})})]}),Object(b.jsx)(l.c,{path:"/login",element:Object(b.jsx)(q,{})})]})})})};a.a.createRoot(document.getElementById("root")).render(Object(b.jsx)(M,{}))},89:function(e,t,n){},90:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.bf54c8dd.chunk.js.map