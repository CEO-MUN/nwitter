(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(33),s=a.n(r),i=a(5),o=a(13),l=a(10),u=a(6),j=a.n(u),b=a(8),d=a(9),O=a(26),h=a(24),x=(a(44),a(54),a(55),{apiKey:"AIzaSyC23IjhEYKt2XZV_jXdDrqWEqueh6T60jg",authDomain:"nwitter-96a10.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/nwitter",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyC23IjhEYKt2XZV_jXdDrqWEqueh6T60jg",REACT_APP_AUTH_DOMAIN:"nwitter-96a10.firebaseapp.com",REACT_APP_PROJECT_ID:"nwitter-96a10",REACT_APP_STORAGE_BUCKET:"nwitter-96a10.appspot.com",REACT_APP_MESSAGIN_ID:"883553406449",REACT_APP_APP_ID:"1:883553406449:web:a8a5551d25179fdbca0850"}).REACT_APP_DATABASE_URL,projectId:"nwitter-96a10",storageBucket:"nwitter-96a10.appspot.com",messagingSenderId:"883553406449",appId:"1:883553406449:web:a8a5551d25179fdbca0850"});h.a.initializeApp(x);var p=h.a,f=h.a.auth(),m=h.a.firestore(),g=h.a.storage(),v=a(1),y=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),o=s[0],l=s[1],u=Object(n.useState)(!0),d=Object(i.a)(u,2),O=d[0],h=d[1],x=Object(n.useState)(""),p=Object(i.a)(x,2),m=p[0],g=p[1],y=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&l(n)},w=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!O){e.next=8;break}return e.next=5,f.createUserWithEmailAndPassword(a,o);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,f.signInWithEmailAndPassword(a,o);case 10:n=e.sent;case 11:console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:w,className:"container",children:[Object(v.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:y,className:"authInput"}),Object(v.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,className:"authInput",onChange:y}),Object(v.jsx)("input",{type:"submit",className:"authInput authSubmit",value:O?"Create Account":"Sign In"}),m&&Object(v.jsx)("span",{className:"authError",children:m})]}),Object(v.jsx)("span",{onClick:function(){return h((function(e){return!e}))},className:"authSwitch",children:O?"Sign In":"Create Account"})]})},w=a.p+"static/media/logo.6c6eb363.jpg",_=function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new p.auth.GoogleAuthProvider:"github"===a&&(n=new p.auth.GithubAuthProvider),e.next=4,f.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"authContainer",children:[Object(v.jsx)("img",{name:"logo",src:w,width:"300",height:"100",border:"3",alt:""}),Object(v.jsx)(y,{}),Object(v.jsxs)("div",{className:"authBtns",children:[Object(v.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(v.jsx)(d.a,{icon:O.b})]}),Object(v.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(v.jsx)(d.a,{icon:O.a})]})]})]})},S=a(20),N=function(e){e.userObj;var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=(a[0],a[1]),r=Object(l.f)();return Object(n.useEffect)((function(){m.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(S.a)({id:e.id},e.data())}));c(t)}))}),[]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"eatTogetherClick",children:Object(v.jsx)("span",{onClick:function(){r.push("/eatTogether")},children:"\ubc30\ub2ec \uac19\uc774"})}),Object(v.jsx)("div",{className:"goodsTogetherClick",children:Object(v.jsx)("span",{onClick:function(){r.push("/goodsTogether")},children:"\ubb3c\uac74 \uac19\uc774"})}),Object(v.jsx)("div",{className:"taxiTogetherClick",children:Object(v.jsx)("span",{onClick:function(){r.push("/taxiTogether")},children:"\ud0dd\uc2dc \uac19\uc774"})})]})},C=function(e){var t=e.refreshUser,a=e.userObj,c=Object(l.f)(),r=Object(n.useState)(a.displayName),s=Object(i.a)(r,2),o=s[0],u=s[1],d=function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===o){e.next=5;break}return e.next=4,a.updateProfile({displayName:o});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("form",{onSubmit:d,className:"profileForm",children:[Object(v.jsx)("input",{onChange:function(e){var t=e.target.value;u(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:o,className:"formInput"}),Object(v.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(v.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){f.signOut(),c.push("/")},children:"Log Out"})]})},T=a(11),I=function(e){var t=e.userObj;return Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(v.jsx)("li",{children:Object(v.jsx)(o.b,{to:"/",style:{marginRight:10},children:Object(v.jsx)(d.a,{icon:O.c,color:"#04AAFF",size:"2x"})})}),Object(v.jsx)("li",{children:Object(v.jsxs)(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(v.jsx)(d.a,{icon:T.d,color:"#04AAFF",size:"2x"}),Object(v.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},A=function(e){var t=e.nweetObj,a=e.isOwner,n=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,m.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,g.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"nweet",children:[Object(v.jsx)("form",{className:"container nweetEdit",children:Object(v.jsx)(o.b,{to:"/eatTogether/detailEat/".concat(t.id),children:Object(v.jsx)("button",{value:t.location,onClick:function(e){var t=e.target.value;console.log(t)},children:t.location+"  |  "+t.title})})}),t.attachmentUrl&&Object(v.jsx)("img",{src:t.attachmentUrl}),a&&Object(v.jsx)("div",{class:"nweet__actions",children:Object(v.jsx)("span",{onClick:n,children:Object(v.jsx)(d.a,{icon:T.c})})})]})},k=a(56),E=function(e){var t=e.userObj;console.log(t);var a=Object(n.useState)(""),c=Object(i.a)(a,2),r=(c[0],c[1],Object(n.useState)("")),s=Object(i.a)(r,2);s[0],s[1];return Object(v.jsx)("nav",{children:Object(v.jsx)("ul",{style:{display:"flex",justifyContent:"center",marginTop:10},children:Object(v.jsx)(o.b,{to:"eatTogether/writeeat",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:90},children:Object(v.jsx)("button",{children:"\uae00 \uc791\uc131"})})})})},U=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(i.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){m.collection("eatTogether").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(S.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(E,{userObj:t}),Object(v.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(v.jsx)(A,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},P=function(e){var t=e.userObj,a=Object(n.useState)(0),c=Object(i.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),u=l[0],O=l[1],h=Object(n.useState)(""),x=Object(i.a)(h,2),p=x[0],f=x[1],y=Object(n.useState)(""),w=Object(i.a)(y,2),_=w[0],S=w[1],N=Object(n.useState)(""),C=Object(i.a)(N,2),I=C[0],A=C[1],E=Object(n.useState)(""),U=Object(i.a)(E,2),P=U[0],D=U[1],L=function(){var e=Object(b.a)(j.a.mark((function e(a){var n,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),""!==u){e.next=3;break}return e.abrupt("return");case 3:if(n="",""===P){e.next=12;break}return c=g.ref().child("".concat(t.uid,"/").concat(Object(k.a)())),e.next=8,c.putString(P,"data_url");case 8:return s=e.sent,e.next=11,s.ref.getDownloadURL();case 11:n=e.sent;case 12:return{id:r,location:u,title:p,content:_,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n},e.next=15,m.collection("eatTogether").doc("".concat(r)).set({location:u,title:p,content:_,phone:I,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n});case 15:O(""),f(""),S(""),A(""),D("");case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("form",{onSubmit:L,className:"factoryForm",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("input",{className:"factoryInput__input",value:u,onChange:function(e){var t=e.target.value;O(t),s(r+1)},type:"text",placeholder:"\uac70\ub798\uc7a5\uc18c",maxLength:120}),Object(v.jsx)("input",{className:"factoryInput__input",value:p,onChange:function(e){var t=e.target.value;f(t)},type:"text",placeholder:"\uc81c\ubaa9",maxLength:10})]}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{className:"factoryInput__input",value:_,onChange:function(e){var t=e.target.value;S(t)},type:"text",placeholder:"\uc0c1\uc138 \ub0b4\uc6a9",maxLength:120})}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{className:"factoryInput__input",value:I,onChange:function(e){var t=e.target.value;A(t)},type:"text",placeholder:"\uc5f0\ub77d\ucc98",maxLength:120})}),Object(v.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(v.jsx)("span",{children:"\uc0ac\uc9c4 \ucd94\uac00"}),Object(v.jsx)(d.a,{icon:T.a})]}),Object(v.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;D(t)},Boolean(t)&&a.readAsDataURL(t)},style:{opacity:0}}),P&&Object(v.jsxs)("div",{className:"factoryForm__attachment",children:[Object(v.jsx)("img",{src:P,style:{backgroundImage:P}}),Object(v.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return D("")},children:[Object(v.jsx)("span",{children:"\uc9c0\uc6b0\uae30"}),Object(v.jsx)(d.a,{icon:T.b})]})]}),Object(v.jsx)("input",{type:"submit",value:"\uac8c\uc2dc",className:"factoryInput__arrow"})]})},D=function(e){var t,a,c,r,s,o=e.match.params.no,l=Object(n.useState)([]),u=Object(i.a)(l,2),j=u[0],b=u[1];Object(n.useEffect)((function(){m.collection("eatTogether").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(S.a)({id:e.id},e.data())}));b(t)}))}),[]),j.map((function(e){e.id=="".concat(o)&&(t=e.location,a=e.title,c=e.content,r=e.attachmentUrl,s=e.phone)}));return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"post-view-wrapper",children:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{align:"center",children:"\uac8c\uc2dc\uae00 \uc0c1\uc138\uc815\ubcf4"}),Object(v.jsxs)("div",{className:"post-view-row",children:[Object(v.jsx)("label",{children:"\uc7a5\uc18c"}),Object(v.jsx)("label",{children:t})]}),Object(v.jsxs)("div",{className:"post-view-row",children:[Object(v.jsx)("label",{children:"\uc81c\ubaa9"}),Object(v.jsx)("label",{children:a})]}),Object(v.jsxs)("div",{className:"post-view-row",children:[Object(v.jsx)("label",{children:"\ub0b4\uc6a9"}),Object(v.jsx)("label",{children:c})]}),""!=r&&Object(v.jsx)("img",{src:r,width:"200",height:"200"}),Object(v.jsx)("button",{onClick:function(){alert(s)},name:"github",className:"authBtn",children:"\uc5f0\ub77d\ud558\uae30"})]})})})},L=function(e){var t=e.nweetObj,a=e.isOwner,n=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,m.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,g.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"nweet",children:[Object(v.jsx)("form",{className:"container nweetEdit",children:Object(v.jsx)(o.b,{to:"/goodsTogether/detailGoods/".concat(t.id),children:Object(v.jsx)("button",{value:t.location,onClick:function(e){var t=e.target.value;console.log(t)},children:t.location+"  |  "+t.title})})}),t.attachmentUrl&&Object(v.jsx)("img",{src:t.attachmentUrl}),a&&Object(v.jsx)("div",{class:"nweet__actions",children:Object(v.jsx)("span",{onClick:n,children:Object(v.jsx)(d.a,{icon:T.c})})})]})},F=function(e){var t=e.userObj;console.log(t);var a=Object(n.useState)(""),c=Object(i.a)(a,2),r=(c[0],c[1],Object(n.useState)("")),s=Object(i.a)(r,2);s[0],s[1];return Object(v.jsx)("nav",{children:Object(v.jsx)("ul",{style:{display:"flex",justifyContent:"center",marginTop:10},children:Object(v.jsx)(o.b,{to:"GoodsTogether/writegoods",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:90},children:Object(v.jsx)("button",{children:"\uae00 \uc791\uc131"})})})})},R=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(i.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){m.collection("goodsTogether").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(S.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(F,{userObj:t}),Object(v.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(v.jsx)(L,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},B=function(e){var t=e.userObj,a=Object(n.useState)(0),c=Object(i.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),u=l[0],O=l[1],h=Object(n.useState)(""),x=Object(i.a)(h,2),p=x[0],f=x[1],y=Object(n.useState)(""),w=Object(i.a)(y,2),_=w[0],S=w[1],N=Object(n.useState)(""),C=Object(i.a)(N,2),I=C[0],A=C[1],E=Object(n.useState)(""),U=Object(i.a)(E,2),P=U[0],D=U[1],L=function(){var e=Object(b.a)(j.a.mark((function e(a){var n,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),""!==u){e.next=3;break}return e.abrupt("return");case 3:if(n="",""===P){e.next=12;break}return c=g.ref().child("".concat(t.uid,"/").concat(Object(k.a)())),e.next=8,c.putString(P,"data_url");case 8:return s=e.sent,e.next=11,s.ref.getDownloadURL();case 11:n=e.sent;case 12:return e.next=14,m.collection("goodsTogether").doc("".concat(r)).set({location:u,title:p,content:_,phone:I,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n});case 14:O(""),f(""),S(""),A(""),D("");case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("form",{onSubmit:L,className:"factoryForm",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("input",{className:"factoryInput__input",value:u,onChange:function(e){var t=e.target.value;O(t),s(r+1)},type:"text",placeholder:"\uac70\ub798\uc7a5\uc18c",maxLength:120}),Object(v.jsx)("input",{className:"factoryInput__input",value:p,onChange:function(e){var t=e.target.value;f(t)},type:"text",placeholder:"\uc81c\ubaa9",maxLength:10})]}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{className:"factoryInput__input",value:_,onChange:function(e){var t=e.target.value;S(t)},type:"text",placeholder:"\uc0c1\uc138 \ub0b4\uc6a9",maxLength:120})}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{className:"factoryInput__input",value:I,onChange:function(e){var t=e.target.value;A(t)},type:"text",placeholder:"\uc5f0\ub77d\ucc98",maxLength:120})}),Object(v.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(v.jsx)("span",{children:"\uc0ac\uc9c4 \ucd94\uac00"}),Object(v.jsx)(d.a,{icon:T.a})]}),Object(v.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;D(t)},Boolean(t)&&a.readAsDataURL(t)},style:{opacity:0}}),P&&Object(v.jsxs)("div",{className:"factoryForm__attachment",children:[Object(v.jsx)("img",{src:P,style:{backgroundImage:P}}),Object(v.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return D("")},children:[Object(v.jsx)("span",{children:"\uc9c0\uc6b0\uae30"}),Object(v.jsx)(d.a,{icon:T.b})]})]}),Object(v.jsx)("input",{type:"submit",value:"\uac8c\uc2dc",className:"factoryInput__arrow"})]})},z=function(e){var t=e.nweetObj,a=e.isOwner,n=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,m.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,g.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"nweet",children:[Object(v.jsx)("form",{className:"container nweetEdit",children:Object(v.jsx)(o.b,{to:"/taxiTogether/detailTaxi/".concat(t.id),children:Object(v.jsx)("button",{value:t.location,onClick:function(e){var t=e.target.value;console.log(t)},children:t.location+"  |  "+t.title})})}),t.attachmentUrl&&Object(v.jsx)("img",{src:t.attachmentUrl}),a&&Object(v.jsx)("div",{class:"nweet__actions",children:Object(v.jsx)("span",{onClick:n,children:Object(v.jsx)(d.a,{icon:T.c})})})]})},G=function(e){var t=e.userObj;console.log(t);var a=Object(n.useState)(""),c=Object(i.a)(a,2),r=(c[0],c[1],Object(n.useState)("")),s=Object(i.a)(r,2);s[0],s[1];return Object(v.jsx)("nav",{children:Object(v.jsx)("ul",{style:{display:"flex",justifyContent:"center",marginTop:10},children:Object(v.jsx)(o.b,{to:"TaxiTogether/writetaxi",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:90},children:Object(v.jsx)("button",{children:"\uae00 \uc791\uc131"})})})})},W=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(i.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){m.collection("taxiTogether").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(S.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(G,{userObj:t}),Object(v.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(v.jsx)(z,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},K=function(e){var t=e.userObj,a=Object(n.useState)(0),c=Object(i.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),u=l[0],O=l[1],h=Object(n.useState)(""),x=Object(i.a)(h,2),p=x[0],f=x[1],y=Object(n.useState)(""),w=Object(i.a)(y,2),_=w[0],S=w[1],N=Object(n.useState)(""),C=Object(i.a)(N,2),I=C[0],A=C[1],E=Object(n.useState)(""),U=Object(i.a)(E,2),P=U[0],D=U[1],L=function(){var e=Object(b.a)(j.a.mark((function e(a){var n,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),""!==u){e.next=3;break}return e.abrupt("return");case 3:if(n="",""===P){e.next=12;break}return c=g.ref().child("".concat(t.uid,"/").concat(Object(k.a)())),e.next=8,c.putString(P,"data_url");case 8:return s=e.sent,e.next=11,s.ref.getDownloadURL();case 11:n=e.sent;case 12:return e.next=14,m.collection("taxiTogether").doc("".concat(r)).set({location:u,title:p,content:_,phone:I,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n});case 14:O(""),f(""),S(""),A(""),D("");case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("form",{onSubmit:L,className:"factoryForm",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("input",{className:"factoryInput__input",value:u,onChange:function(e){var t=e.target.value;O(t),s(r+1)},type:"text",placeholder:"\uac70\ub798\uc7a5\uc18c",maxLength:120}),Object(v.jsx)("input",{className:"factoryInput__input",value:p,onChange:function(e){var t=e.target.value;f(t)},type:"text",placeholder:"\uc81c\ubaa9",maxLength:10})]}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{className:"factoryInput__input",value:_,onChange:function(e){var t=e.target.value;S(t)},type:"text",placeholder:"\uc0c1\uc138 \ub0b4\uc6a9",maxLength:120})}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{className:"factoryInput__input",value:I,onChange:function(e){var t=e.target.value;A(t)},type:"text",placeholder:"\uc5f0\ub77d\ucc98",maxLength:120})}),Object(v.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(v.jsx)("span",{children:"\uc0ac\uc9c4 \ucd94\uac00"}),Object(v.jsx)(d.a,{icon:T.a})]}),Object(v.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;D(t)},Boolean(t)&&a.readAsDataURL(t)},style:{opacity:0}}),P&&Object(v.jsxs)("div",{className:"factoryForm__attachment",children:[Object(v.jsx)("img",{src:P,style:{backgroundImage:P}}),Object(v.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return D("")},children:[Object(v.jsx)("span",{children:"\uc9c0\uc6b0\uae30"}),Object(v.jsx)(d.a,{icon:T.b})]})]}),Object(v.jsx)("input",{type:"submit",value:"\uac8c\uc2dc",className:"factoryInput__arrow"})]})},q=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userObj;return Object(v.jsxs)(o.a,{children:[a&&Object(v.jsx)(I,{userObj:n}),Object(v.jsx)(l.c,{children:a?Object(v.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(v.jsx)(l.a,{exact:!0,path:"/",children:Object(v.jsx)(N,{userObj:n})}),Object(v.jsx)(l.a,{exact:!0,path:"/profile",children:Object(v.jsx)(C,{userObj:n,refreshUser:t})}),Object(v.jsx)(l.a,{exact:!0,path:"/eatTogether",children:Object(v.jsx)(U,{userObj:n})}),Object(v.jsx)(l.a,{exact:!0,path:"/eatTogether/writeeat",children:Object(v.jsx)(P,{userObj:n})}),Object(v.jsx)(l.a,{exact:!0,path:"/eatTogether/detailEat/:no",component:D,userObj:n}),Object(v.jsx)(l.a,{exact:!0,path:"/goodsTogether",children:Object(v.jsx)(R,{userObj:n})}),Object(v.jsx)(l.a,{exact:!0,path:"/goodsTogether/writegoods",children:Object(v.jsx)(B,{userObj:n})}),Object(v.jsx)(l.a,{exact:!0,path:"/goodsTogether/detailGoods/:no",component:D,userObj:n}),Object(v.jsx)(l.a,{exact:!0,path:"/taxiTogether",children:Object(v.jsx)(W,{userObj:n})}),Object(v.jsx)(l.a,{exact:!0,path:"/taxiTogether/writetaxi",children:Object(v.jsx)(K,{userObj:n})}),Object(v.jsx)(l.a,{exact:!0,path:"/taxiTogether/detailtaxi/:no",component:D,userObj:n})]}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(l.a,{exact:!0,path:"/",children:Object(v.jsx)(_,{})})})})]})};var H=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),s=Object(i.a)(r,2),o=s[0],l=s[1];return Object(n.useEffect)((function(){f.onAuthStateChanged((function(e){l(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),Object(v.jsx)(v.Fragment,{children:a?Object(v.jsx)(q,{refreshUser:function(){var e=f.currentUser;l({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(o),userObj:o}):"Initializing..."})};a(52);s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(H,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.16789c98.chunk.js.map