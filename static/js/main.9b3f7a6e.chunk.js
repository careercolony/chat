(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),r=n.n(c),s=(n(16),n(1)),l=n(2),i=n(4),u=n(3),m=n(5),d=n(8),h=n.n(d),p=(n(17),n(9)),b=n.n(p),f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={count:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleData",value:function(e){var t=JSON.parse(e);this.setState({count:t}),console.log(t)}},{key:"render",value:function(){return o.a.createElement("div",null,"Count: ",o.a.createElement("strong",null,this.state.count),o.a.createElement(b.a,{url:"ws://localhost:8086/post/v2/notification/memberID/5cb356f10b0000560028135b/count",onMessage:this.handleData.bind(this)}))}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={actions:"ws://localhost:8086/post/v2/notification/memberID/5cb356f10b0000560028135b/count",message:"4"},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("p",null,this.state.message," "),o.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload.",o.a.createElement(f,null))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.9b3f7a6e.chunk.js.map