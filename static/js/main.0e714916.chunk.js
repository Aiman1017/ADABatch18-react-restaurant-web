(this["webpackJsonprestaurant-web"]=this["webpackJsonprestaurant-web"]||[]).push([[0],{21:function(e,t,a){e.exports=a(32)},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l);a(26);var u=function(){return r.a.createElement("header",null,r.a.createElement("h3",null,"This is a header"))},i=a(8),s=a(9),o=a(6),h=a(11),m=a(10),p=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={value:""},n.handleClick=n.handleClick.bind(Object(o.a)(n)),n.handleChange=n.handleChange.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleClick",value:function(e){e.preventDefault(),this.props.handleClick(this.state.value)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"Enter Your Restaurant",value:this.state.value,onChange:this.handleChange}),r.a.createElement("button",{onClick:this.handleClick},"Search")))}}]),a}(r.a.Component),d=a(12);var E=function(e){return r.a.createElement("div",null,r.a.createElement("ul",null,e.restaurant.map((function(e){return r.a.createElement(d.b,{to:"/detail/".concat(e._id),key:e._id},r.a.createElement("div",null,r.a.createElement("h3",null,e.name),r.a.createElement("p",null,e.address),r.a.createElement("p",null,e.opening_time)))}))))},v=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={restaurant:[]},e.getSearch=e.getSearch.bind(Object(o.a)(e)),e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("h2",null,"This is main part"),r.a.createElement(p,{handleClick:this.getSearch}),r.a.createElement(E,{restaurant:this.state.restaurant}))}},{key:"getSearch",value:function(e){var t=this,a="http://restaurant-api-module-2.herokuapp.com/api/restaurants";fetch("https://cors-anywhere.herokuapp.com/"+a).then((function(e){return e.json()})).then((function(e){t.setState({restaurant:e.data.name})})).catch((function(e){console.log("Can't access"+a)})),console.log(this.state.restaurant)}}]),a}(r.a.Component),f=a(1),k=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={restaurant:null},n.handleClick=n.handleClick.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params._id,a="http://restaurant-api-module-2.herokuapp.com/api/restaurants/".concat(t);fetch("https://cors-anywhere.herokuapp.com/"+a).then((function(e){return e.json()})).then((function(t){e.setState({restaurant:t.data})}))}},{key:"handleClick",value:function(){this.props.history.goBack()}},{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("button",{onClick:this.handleClick},"Go Back"),r.a.createElement("div",null,this.state.restaurant?r.a.createElement("div",null,r.a.createElement("h3",null,this.state.restaurant.name),r.a.createElement("p",null,this.state.restaurant.address),r.a.createElement("p",null,this.state.restaurant.opening_time),r.a.createElement("ul",null,r.a.createElement("li",null,this.state.restaurant.types[0]),r.a.createElement("li",null,this.state.restaurant.types[1]),r.a.createElement("li",null,this.state.restaurant.types[2]),r.a.createElement("li",null,this.state.restaurant.types[3])),r.a.createElement("p",null,this.state.restaurant.email),r.a.createElement("p",null,this.state.restaurant.phone),r.a.createElement("div",null,r.a.createElement("p",null,this.restaurant.menu[1]),r.a.createElement("p",null,this.restaurant.menu[2])),r.a.createElement("div",null,r.a.createElement("h5",null,this.state.restaurant.review.star),r.a.createElement("p",null,this.state.restaurant.review.name),r.a.createElement("p",null,this.state.restaurant.review.review))):r.a.createElement("div",null,r.a.createElement("p",null,"Loading....."))))}}]),a}(r.a.Component),b=Object(f.f)(k);var g=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"This is a footer"))};var C=function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/detail/:_id"},r.a.createElement(b,null)),r.a.createElement(f.a,{path:"/"},r.a.createElement(v,null))),r.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.0e714916.chunk.js.map