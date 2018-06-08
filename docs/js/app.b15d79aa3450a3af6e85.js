webpackJsonp([1],{NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Dd8w"),r=e.n(a),i=e("/5sW"),n={name:"ProgressBar",props:{value:{type:Number,default:0},barClass:{type:String,default:""},origin:{type:String,default:"left"},scale:{type:String,default:"X",validator:function(t){return["X","Y"].includes(t)}}},data:function(){return{ready:!1}},computed:{barStyle:function(){return this.ready?{transform:"scale"+this.scale+"("+.01*this.value+")",transformOrigin:""+this.origin}:{transform:"scale"+this.scale+"(0)"}}},mounted:function(){var t=this;setTimeout(function(){t.ready=!0},0)}},o={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"progressbar"},[s("div",{staticClass:"progressbar-bar",class:this.barClass,style:this.barStyle},[this._t("default")],2)])},staticRenderFns:[]},l={name:"App",components:{ProgressBar:e("VU/8")(n,o,!1,null,null,null).exports}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"my-5 container"},[t._m(0),t._v(" "),e("main",{staticClass:"my-5",attrs:{role:"main"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 my-3"},[e("h4",[t._v("Simple progressbar to 77%")]),t._v(" "),t._m(1),t._v(" "),e("progress-bar",{attrs:{value:77}}),t._v(" "),e("h4",{staticClass:"my-3"},[t._v("\n            Change scale to Y\n          ")]),t._v(" "),t._m(2),t._v(" "),e("progress-bar",{staticStyle:{height:"250px"},attrs:{value:88,scale:"Y",origin:"bottom"}})],1),t._v(" "),e("div",{staticClass:"col-md-6 my-3"},[e("h4",[t._v("Bar class")]),t._v(" "),t._m(3),t._v(" "),e("progress-bar",{attrs:{value:65,"bar-class":"bg-success"}}),t._v(" "),e("h4",{staticClass:"my-3"},[t._v("\n            Transform Origin\n          ")]),t._v(" "),t._m(4),t._v(" "),e("progress-bar",{attrs:{value:95,origin:"right"}}),t._v(" "),t._m(5),t._v(" "),e("progress-bar",{attrs:{value:90,origin:"center"}})],1)])])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",{staticClass:"pb-3 clearfix border-bottom"},[e("ul",{staticClass:"nav float-right"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"https://github.com/EvodiaAut/vue-progressbar-component",target:"_blank"}},[t._v("\n            Github\n          ")])])]),t._v(" "),e("h1",{staticClass:"text-muted"},[t._v("vue-progressbar-component")]),t._v(" "),e("p",{staticClass:"lead"},[t._v("\n        ["),e("a",{attrs:{href:"https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/",target:"_blank"}},[t._v("CSS GPU Animation")]),t._v("] Simple progressbar for vuejs\n      ")]),t._v(" "),e("div",{staticClass:"d-flex flex-wrap"},[e("a",{attrs:{href:"https://www.npmjs.com/package/vue-progressbar-component",target:"_blank"}},[e("img",{staticClass:"m-1",attrs:{src:"https://img.shields.io/npm/v/vue-progressbar-component.svg?style=for-the-badge",alt:"vue-progressbar-component npm"}})]),t._v(" "),e("a",{attrs:{href:"https://github.com/EvodiaAut/vue-progressbar-component/blob/master/LICENSE.md",target:"_blank"}},[e("img",{staticClass:"m-1",attrs:{src:"https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge",alt:"vue-progressbar-component license"}})]),t._v(" "),e("a",{attrs:{href:"https://www.npmjs.com/package/vue-progressbar-component",target:"_blank"}},[e("img",{staticClass:"m-1",attrs:{src:"https://img.shields.io/npm/dt/vue-progressbar-component.svg?style=for-the-badge",alt:"vue-progressbar-component npm"}})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Set a value "),s("code",[this._v(':value="77"')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Set "),s("code",[this._v(':value="88" scale="Y" origin="bottom"')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Set "),s("code",[this._v(':value="65" bar-class="bg-info"')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Use "),s("code",[this._v(':value="95" origin="right"')]),this._v(" for change transform origin")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"my-3"},[s("code",[this._v(':value="90" origin="center"')])])}]};var v=e("VU/8")(l,c,!1,function(t){e("e2xT")},null,null).exports;i.a.config.productionTip=!1,new i.a(r()({el:"#app"},v))},e2xT:function(t,s){}},["NHnr"]);