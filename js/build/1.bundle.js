webpackJsonp([1],{264:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var u=n(265),a=r(u),o={path:"monitor",component:a["default"]};e.exports=o},265:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function u(e){return e&&e.__esModule?e:{"default":e}}function a(e){return{cateData:e.app.negative.monitor.data.cateData,levelData:e.app.negative.monitor.data.levelData}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),l=u(o),i=n(160),c=n(154),d=n(261),f=r(d),s=l["default"].createClass({displayName:"Monitor",componentDidMount:function(){console.log("negative monitor mount"),setTimeout(this.props.actions.getMonitorData,500)},componentDidUpdate:function(){console.log("negative monitor update")},render:function(){return l["default"].createElement("div",{className:"negative-monitor"},l["default"].createElement("div",{style:{color:"#fff"}},"monitor content"))}}),p=function(e){var t=(0,i.bindActionCreators)(f,e);return{actions:t}};t["default"]=(0,c.connect)(a,p)(s)},266:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var u=n(267),a=r(u),o={path:"distribution",component:a["default"]};e.exports=o},267:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),a=r(u),o=a["default"].createClass({displayName:"Distribution",render:function(){return a["default"].createElement("div",{className:"negative-distribution"},a["default"].createElement("div",{style:{color:"#fff"}},"distribution content"))}});t["default"]=o},268:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var u=n(269),a=r(u),o={path:"trend",component:a["default"]};e.exports=o},269:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),a=r(u),o=a["default"].createClass({displayName:"Trend",render:function(){return a["default"].createElement("div",null,a["default"].createElement("div",{style:{color:"#fff"}},"trend content"))}});t["default"]=o},270:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var u=n(271),a=r(u),o={path:"rank",component:a["default"]};e.exports=o},271:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),a=r(u),o=a["default"].createClass({displayName:"Rank",render:function(){return a["default"].createElement("div",null,a["default"].createElement("div",{style:{color:"#fff"}},"rank content"))}});t["default"]=o},272:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var u=n(273),a=r(u),o={path:"list",component:a["default"]};e.exports=o},273:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),a=r(u),o=a["default"].createClass({displayName:"List",render:function(){return a["default"].createElement("div",null,a["default"].createElement("div",{style:{color:"#fff"}},"list content"))}});t["default"]=o},274:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var u=n(275),a=r(u),o={path:"history",component:a["default"]};e.exports=o},275:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),a=r(u),o=a["default"].createClass({displayName:"History",render:function(){return a["default"].createElement("div",null,a["default"].createElement("div",{style:{color:"#fff"}},"history content"))}});t["default"]=o}});
//# sourceMappingURL=1.bundle.js.map