(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{281:function(e,t,n){e.exports=n(403)},374:function(e,t,n){e.exports=n.p+"static/media/imgur_logo_trans.2f7790ea.png"},403:function(e,t,n){"use strict";n.r(t);var r=n(426),o=n(8),a=n.n(o),i=n(9),c=n.n(i),s=n(12),u=n.n(s),l=n(14),f=n.n(l),d=n(5),h=n.n(d),p=(n(209),n(0)),g=n(211),m=n(425),v=n(22),b=n(4),j=n(76),y=n(32),x=n(273),O=n(2),C=n(6),R=n(170),S=O.a.create({imageCircleContainer:{aspectRatio:1,borderRadius:50,width:50,height:50},container:{flex:1,margin:5,backgroundColor:"seagreen",color:"dodgerblue",paddingTop:"android"===C.a.OS?R.a.currentHeight:0},containerUploader:{flex:1,margin:5,backgroundColor:"seagreen",color:"dodgerblue",paddingTop:"android"===C.a.OS?R.a.currentHeight:0,justifyContent:"center"},containerConnect:{alignItems:"center",width:"100%",height:"100%",paddingTop:50,backgroundColor:"seagreen"},tinyLogo:{width:300,height:70,resizeMode:"stretch"},appButtonContainer:{elevation:8,borderRadius:10,paddingVertical:10,paddingHorizontal:12},appButtonText:{fontSize:18,color:"#fff",fontWeight:"bold",alignSelf:"center",textTransform:"uppercase",paddingTop:20,paddingBottom:20},containerHeader:{paddingTop:20,backgroundColor:"orange"},containerBottomImage:{flex:1,margin:10}}),w=n(1);function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var o=h()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f()(this,n)}}var B=function(e){u()(r,e);var t=k(r);function r(e){return a()(this,r),t.call(this,e)}return c()(r,[{key:"onSubmitCredentials",value:function(e){e("WebAuth")}},{key:"render",value:function(){var e=this,t=this.props.navigation.navigate;return Object(w.jsx)(j.a,{style:S.container,children:Object(w.jsxs)(b.a,{style:S.containerConnect,children:[Object(w.jsx)(y.a,{source:n(374),style:S.tinyLogo}),Object(w.jsx)(x.a,{onPress:function(){return e.onSubmitCredentials(t)},children:Object(w.jsx)(v.a,{style:S.appButtonText,children:"Connect"})})]})})}}]),r}(p.Component),T=n(17),_=n.n(T),I=n(274),P=n(72),H=n(111);function z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var o=h()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f()(this,n)}}var E=function(e){u()(n,e);var t=z(n);function n(e){var r;return a()(this,n),(r=t.call(this,e)).state={modalVisible:!0,authentificated:!1},r}return c()(n,[{key:"hide",value:function(){this.setState({modalVisible:!1})}},{key:"onNavigationStateChange",value:function(e){var t,n,r,o;return _.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!0!==this.state.authentificated){a.next=4;break}return this.hide(),t("Home"),a.abrupt("return");case 4:if(t=this.props.navigation.navigate,void 0===e.url){a.next=20;break}for(console.log(e.url),url=e.url.replace("#","&"),n={},r=/([^&=]+)=([^&]*)/g;o=r.exec(url);)n[decodeURIComponent(o[1])]=decodeURIComponent(o[2]);if(void 0===n.access_token||void 0===n.account_username){a.next=20;break}return console.log(n.account_username),this.setState({authentificated:!0}),a.next=16,_.a.awrap(H.b("bearer_token",n.access_token));case 16:return a.next=18,_.a.awrap(H.b("user_name",n.account_username));case 18:this.hide(),t("Home");case 20:case"end":return a.stop()}}),null,this,null,Promise)}},{key:"render",value:function(){return Object(w.jsx)(P.a,{animationType:"slide",visible:this.state.modalVisible,onRequestClose:this.hide.bind(this),transparent:!0,children:Object(w.jsx)(I.a,{ref:"webview",source:{uri:"https://api.imgur.com/oauth2/authorize?client_id=80cb7ed8b865a48&response_type=token"},onNavigationStateChange:this.onNavigationStateChange.bind(this),javaScriptEnabled:!0,domStorageEnabled:!0,startInLoadingState:!1})})}}]),n}(p.Component),M=n(79),D=n(29);function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var o=h()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f()(this,n)}}var N=function(e){u()(n,e);var t=L(n);function n(e){return a()(this,n),t.call(this,e)}return c()(n,[{key:"render",value:function(){return Object(w.jsx)(D.a,{style:S.imageCircleContainer,children:Object(w.jsx)(y.a,{source:{uri:this.props.url},style:[S.imageCircleContainer,{width:this.props.width,height:this.props.height}],resizeMode:"cover"})})}}]),n}(p.Component),V=function(e){var t=e.image;return Object(w.jsxs)(b.a,{style:S.container,children:[Object(w.jsx)(b.a,{style:{height:400,padding:15},children:Object(w.jsx)(y.a,{source:{uri:t.image},resizeMode:"stretch",style:{flex:1}})}),Object(w.jsxs)(b.a,{style:S.containerImageBottom,children:[Object(w.jsxs)(b.a,{style:{flexDirection:"row",marginBottom:5},children:[Object(w.jsx)(b.a,{style:{width:60,padding:5},children:Object(w.jsx)(N,{size:60,url:"https://i.imgur.com/mCHMpLT.png?3"})}),Object(w.jsx)(b.a,{style:{flex:1,height:"100%",padding:5}})]}),Object(w.jsxs)(v.a,{numberOfLines:2,style:{color:"grey",fontWeight:"bold"},children:[t.username,Object(w.jsxs)(v.a,{style:{fontWeight:"200"},children:[" \n",t.description?t.description:"No description"]})]})]})]})},W=function(e,t,n,r){var o,a;return _.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,_.a.awrap(fetch("https://api.imgur.com/3/gallery/search/"+e+"/"+t+"/"+n+"?q="+r,{method:"GET",headers:{Authorization:"Client-ID 80cb7ed8b865a48"},mode:""}));case 3:return o=i.sent,i.next=6,_.a.awrap(o.json());case 6:return a=i.sent,i.abrupt("return",a);case 10:i.prev=10,i.t0=i.catch(0),console.error(i.t0);case 13:case"end":return i.stop()}}),null,null,[[0,10]],Promise)};function A(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var o=h()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f()(this,n)}}var G=function(e){u()(n,e);var t=A(n);function n(e){var r;return a()(this,n),(r=t.call(this,e)).getGalleryItems=function(){(function(){var e,t,n,r,o,a,i,c,s,u,l=arguments;return _.a.async((function(f){for(;;)switch(f.prev=f.next){case 0:return e=l.length>0&&void 0!==l[0]?l[0]:"hot",t=l.length>1&&void 0!==l[1]?l[1]:"viral",n=l.length>2&&void 0!==l[2]?l[2]:"day",r=l.length>3&&void 0!==l[3]?l[3]:"0",o=l.length>4&&void 0!==l[4]?l[4]:"true",a=l.length>5&&void 0!==l[5]?l[5]:"true",i=l.length>6&&void 0!==l[6]?l[6]:"true",(c=new Headers).append("Authorization","Client-ID 80cb7ed8b865a48"),f.prev=9,f.next=12,_.a.awrap(fetch("https://api.imgur.com/3/gallery/"+e+"/"+t+"/"+n+"/"+r+"?showViral="+o+"&showMature="+a+"&album_preview="+i,{method:"GET",headers:c,mode:""}));case 12:return s=f.sent,f.next=15,_.a.awrap(s.json());case 15:return u=f.sent,f.abrupt("return",u);case 19:f.prev=19,f.t0=f.catch(9),console.error(f.t0);case 22:case"end":return f.stop()}}),null,null,[[9,19]],Promise)})().then((function(e){var t=e.data.map((function(e){if(e.images&&("image/jpeg"===e.images[0].type||"image/png"===e.images[0].type))return{id:e.id,image:e.images[0].link,favorite:e.favorite,ups:e.ups,downs:e.downs,title:e.title,vote:e.vote,username:e.account_url,description:e.images[0].description}})).filter((function(e){return void 0!==e}));r.setState({gallery:t})})).catch((function(e){console.debug(e)}))},r.state={gallery:[],search:" ",sort:"viral",name:""},r}return c()(n,[{key:"componentDidMount",value:function(){return _.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.getGalleryItems();case 1:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"render",value:function(){return Object(w.jsx)(j.a,{style:S.container,children:Object(w.jsx)(M.a,{data:this.state.gallery,keyExtractor:function(e){return e.id.toString()},renderItem:function(e){var t=e.item;return Object(w.jsx)(V,{image:t})}})})}}]),n}(p.Component),U=n(16),q=n.n(U),J=n(272);function F(){var e=Object(p.useState)(""),t=q()(e,2),n=t[0],r=t[1],o=Object(p.useState)([]),a=q()(o,2),i=a[0],c=a[1],s=Object(p.useState)("all"),u=q()(s,2),l=u[0],f=(u[1],Object(p.useState)("time")),d=q()(f,2),h=d[0],g=(d[1],Object(p.useState)(!1)),m=q()(g,2),b=(m[0],m[1],Object(p.useState)("")),y=q()(b,2),x=y[0];y[1];function O(e){!function(e){_.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:W(h,l,0,e).then((function(e){var t=e.data.map((function(e){if(e.images&&("image/jpeg"===e.images[0].type||"image/png"===e.images[0].type))return{id:e.id,image:e.images[0].link,favorite:e.favorite,ups:e.ups,downs:e.downs,title:e.title,vote:e.vote,username:e.account_url,description:e.images[0].description}})).filter((function(e){return void 0!==e}));c(t)})).catch((function(e){console.debug(e)}));case 1:case"end":return t.stop()}}),null,null,null,Promise)}(e)}return Object(w.jsxs)(j.a,{style:S.container,children:[Object(w.jsx)(J.a,{placeholder:"Search Here...",value:n,onChangeText:function(e){return r(e)},onSubmitEditing:function(){return O(n)},autoCorrect:!1}),Object(w.jsx)(v.a,{children:x}),Object(w.jsx)(M.a,{maxToRenderPerBatch:50,data:i,keyExtractor:function(e){return e.id.toString()},renderItem:function(e){var t=e.item;return Object(w.jsx)(V,{image:t})}})]})}var K=n(247);function Q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var o=h()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f()(this,n)}}var X=Object(m.a)(),Y=function(e){u()(n,e);var t=Q(n);function n(e){return a()(this,n),t.call(this,e)}return c()(n,[{key:"render",value:function(){return Object(w.jsx)(g.a,{children:Object(w.jsxs)(X.Navigator,{screenOptions:function(e){var t=e.route;return{tabBarIcon:function(e){var n,r=e.focused,o=e.color,a=e.size;return"Home"===t.name?n=r?"ios-home-sharp":"ios-home":"Connect"===t.name?n=r?"ios-list-sharp":"ios-list":"Search"===t.name&&(n=r?"ios-search-sharp":"ios-search"),Object(w.jsx)(K.a,{name:n,size:a,color:o})}}},tabBarOptions:{activeTintColor:"seagreen",inactiveTintColor:"gray"},children:[Object(w.jsx)(X.Screen,{name:"Connect",component:B,options:{title:"Connect"}}),Object(w.jsx)(X.Screen,{name:"Home",component:G,optionts:{title:"Home"}}),Object(w.jsx)(X.Screen,{name:"Search",component:F,options:{title:"Search"}}),Object(w.jsx)(X.Screen,{name:"WebAuth",component:E,options:{title:""},listeners:{tabPress:function(e){e.preventDefault()}}})]})})}}]),n}(p.Component);Object(r.a)(Y)}},[[281,1,2]]]);
//# sourceMappingURL=app.148f4802.chunk.js.map