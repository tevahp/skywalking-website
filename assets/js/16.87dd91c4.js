(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{193:function(t,e,n){t.exports=n.p+"assets/img/skywalking-UI-alarm.323e5def.png"},194:function(t,e,n){t.exports=n.p+"assets/img/skywalking-dingding-notify.4a7352d6.png"},321:function(t,e,n){"use strict";n.r(e);var a=[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:n(193),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:n(194),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("install")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("go get -u github.com/weiqiang333/infra-skywalking-webhook\ncd $GOPATH/src/github.com/weiqiang333/infra-skywalking-webhook/\nbash build/build.sh\n./bin/infra-skywalking-webhook help\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Configuration")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("main configs file: configs/production.yml\ndingtalk:\n  p3: token...\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Example")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("./bin/infra-skywalking-webhook --config configs/production.yml --address 0.0.0.0:8000\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("SkyWalking backend alarm settings")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("webhooks:\n  - http://127.0.0.1:8000/dingtalk\n")])])])}],i=n(0),r=Object(i.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"skywalking-alarm-webhook-sharing"}},[t._v("Skywalking alarm webhook sharing")]),t._v(" "),n("ul",[n("li",[t._v("Author: Wei Qiang")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/weiqiang333",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("Sep. 25st, 2019")]),t._v(" "),n("h1",{attrs:{id:"background"}},[t._v("Background")]),t._v(" "),n("p",[t._v("SkyWalking backend provides the alarm function, we can define some Alarm rules, call webhook after the rule is triggered. I share my implementation")]),t._v(" "),n("h1",{attrs:{id:"demonstration"}},[t._v("Demonstration")]),t._v(" "),t._m(0),n("p",{attrs:{align:"center"}},[t._v("-SkyWalking alarm UI-")]),n("p"),t._v(" "),t._m(1),n("p",{attrs:{align:"center"}},[t._v("-dingtalk message body-")]),n("p"),t._v(" "),n("h1",{attrs:{id:"introduction"}},[t._v("Introduction")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),n("h1",{attrs:{id:"collaboration"}},[t._v("Collaboration")]),t._v(" "),n("p",[t._v("Hope that we can improve together "),n("a",{attrs:{href:"https://github.com/weiqiang333/infra-skywalking-webhook",target:"_blank",rel:"noopener noreferrer"}},[t._v("webhook"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("SkyWalking alarm rules may add more metric names (eg priority name), we can send different channels by locating different levels of alerts (dingtalk / SMS / phone)")]),t._v(" "),n("p",[t._v("Thank")])])},a,!1,null,null,null);e.default=r.exports}}]);