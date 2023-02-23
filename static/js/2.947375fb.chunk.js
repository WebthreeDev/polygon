(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[2],{678:function(e,t,n){"use strict";var r=n(12),c=n(140),a=n(0),i=n(685),s=n.n(i),o=n(32),u=n(13);t.a=function(e){var t=e.value,n=e.color,i=void 0===n?"text":n,b=e.decimals,l=void 0===b?3:b,j=e.isDisabled,d=void 0!==j&&j,p=e.unit,x=e.prefix,f=Object(c.a)(e,["value","color","decimals","isDisabled","unit","prefix"]),O=Object(a.useRef)(0);Object(a.useEffect)((function(){O.current=parseFloat(t)}),[t]);var m=Boolean(t&&x),h=Boolean(t&&p);return Object(u.jsxs)(o.R,Object(r.a)(Object(r.a)({color:d?"textDisabled":i},f),{},{children:[m&&Object(u.jsx)("span",{children:x}),null===t.toString().match(/[^0-9.]+/)&&Object(u.jsx)(s.a,{start:O.current,end:parseFloat(t),decimals:l,duration:1,separator:","}),null!==t.toString().match(/[^0-9.]+/)&&t,h&&Object(u.jsx)("span",{children:p})]}))}},684:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r,c,a,i=n(72),s=(n(0),n(7)),o=n(32),u=n(98),b=n(13),l=s.e.div(r||(r=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  border-radius: 16px;\n  box-shadow: ",";\n  color: ",";\n  padding: 8px 16px 8px 0;\n  width: 100%;\n"])),(function(e){return e.theme.colors.input}),(function(e){var t=e.isWarning,n=void 0!==t&&t,r=e.theme;return n?r.shadows.warning:r.shadows.inset}),(function(e){return e.theme.colors.text})),j=Object(s.e)(o.E)(c||(c=Object(i.a)(["\n  box-shadow: none;\n  width: 60px;\n  margin: 0 8px;\n  padding: 0 8px;\n\n  "," {\n    width: 80px;\n  }\n\n  "," {\n    width: auto;\n  }\n"])),(function(e){return e.theme.mediaQueries.xs}),(function(e){return e.theme.mediaQueries.sm})),d=Object(s.e)(o.R)(a||(a=Object(i.a)(["\n  position: absolute;\n  bottom: -10px;\n  right: 0;\n  a {\n    display: inline;\n  }\n"]))),p=function(e){var t=e.max,n=e.symbol,r=e.onChange,c=e.onSelectMax,a=e.value,i=e.addLiquidityUrl,s=e.inputTitle,p=e.depositFee,x=Object(u.b)().t,f="0"===t||!t;return Object(b.jsxs)("div",{style:{position:"relative"},children:[Object(b.jsxs)(l,{isWarning:f,children:[Object(b.jsxs)(o.y,{justifyContent:"space-between",pl:"16px",children:[Object(b.jsx)(o.R,{fontSize:"14px",children:s}),Object(b.jsx)(o.R,{fontSize:"14px",children:x("Balance: %balance%",{balance:function(e){if(f)return"0";var t=Number(e);return t>0&&t<1e-4?t.toLocaleString(void 0,{maximumFractionDigits:20}):t.toLocaleString()}(t)})})]}),Object(b.jsxs)(o.y,{alignItems:"flex-end",justifyContent:"space-around",children:[Object(b.jsx)(j,{pattern:"^[0-9]*[.,]?[0-9]*$",inputMode:"decimal",step:"any",min:"0",onChange:r,placeholder:"0",value:a}),Object(b.jsx)(o.j,{scale:"sm",onClick:c,mr:"8px",children:x("Max")}),Object(b.jsx)(o.R,{fontSize:"16px",style:{position:"relative",top:"-5px"},children:n})]})]}),p>0&&Object(b.jsxs)(o.R,{fontSize:"14px",style:{marginTop:"12px",marginBottom:"-10px",marginLeft:"10px"},children:["Fee: ",Object(b.jsx)("span",{style:{color:"#1fc7d4"},id:"depositFee",children:"0"})]}),0===p&&Object(b.jsx)(o.R,{fontSize:"14px",style:{marginTop:"12px",marginBottom:"-10px",marginLeft:"10px"},children:"No Fee"}),f&&Object(b.jsxs)(d,{fontSize:"14px",color:"failure",children:[x("No tokens to stake")," - "," ",Object(b.jsx)(o.F,{fontSize:"14px",bold:!1,href:i,external:!0,color:"failure",children:x("Get %symbol%",{symbol:n})})]})]})}},703:function(e,t,n){"use strict";var r,c=n(72),a=n(7).e.div(r||(r=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 320px;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"])));t.a=a},704:function(e,t,n){"use strict";var r=n(2),c=n.n(r),a=n(15),i=n(39),s=n(10),o=n.n(s),u=n(0),b=n(26),l=n(17),j=n(41),d=n(139);t.a=function(){var e=Object(u.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(d.a)().slowRefresh;return Object(u.useEffect)((function(){(function(){var e=Object(a.a)(c.a.mark((function e(){var t,n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[{address:Object(l.d)(),name:"orbitriumPerBlock"}],e.next=3,Object(b.a)(j,t);case 3:n=e.sent,a=n.map((function(e){return new o.a(e).toJSON()})),r(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),n}},705:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var r=n(10),c=n.n(r),a=n(73),i=n(25),s=n(219),o=function(e,t,n,r){var o=(void 0===r?i.b:new c.a(parseFloat(s.a.utils.formatEther(r)))).times(a.d).times(e).times(t).div(n).times(100);return o.isNaN()||!o.isFinite()?null:o.toNumber()},u=function(e,t,n,r){var o=(void 0===r?i.b:new c.a(parseFloat(s.a.utils.formatEther(r)))).times(a.d).times(e).times(t).div(n).times(100);return o.isNaN()||!o.isFinite()?null:o.toNumber()}},706:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return d}));var r=n(2),c=n.n(r),a=n(15),i=n(0),s=n(82),o=n(99),u=n(100),b=n(676),l=n(670),j=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(o.b)(),r=Object(s.c)(),j=r.account,d=Object(l.b)(),p=Object(l.f)(e),x=Object(i.useCallback)(function(){var r=Object(a.a)(c.a.mark((function r(a,i){var s;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s=0,!(e<100)){r.next=7;break}return r.next=4,Object(b.m)(d,e,a,j,i);case 4:s=r.sent,r.next=16;break;case 7:if(!t){r.next=13;break}return r.next=10,Object(b.h)(p,a,j);case 10:s=r.sent,r.next=16;break;case 13:return r.next=15,Object(b.g)(p,a,i,j);case 15:s=r.sent;case 16:return n(Object(u.l)(e,j)),n(Object(u.i)(e,j)),r.abrupt("return",s);case 19:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}(),[j,n,t,d,p,e]);return{onStake:x}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(o.b)(),r=Object(s.c)(),j=r.account,d=Object(l.j)(e),p=Object(i.useCallback)(function(){var e=Object(a.a)(c.a.mark((function e(r,a){var i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=0,!t){e.next=7;break}return e.next=4,Object(b.h)(d,r,j);case 4:i=e.sent,e.next=10;break;case 7:return e.next=9,Object(b.q)(d,r,j,a);case 9:i=e.sent;case 10:return n(Object(u.e)(j)),e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[j,n,t,d]);return{onStake:p}};t.a=function(e){var t=Object(o.b)(),n=Object(s.c)().account,r=Object(l.b)();return{onStake:Object(i.useCallback)(function(){var i=Object(a.a)(c.a.mark((function a(i){var s;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.m)(r,e,i,n);case 2:return s=c.sent,t(Object(u.a)(n)),c.abrupt("return",s);case 5:case"end":return c.stop()}}),a)})));return function(e){return i.apply(this,arguments)}}(),[n,t,r,e])}}},707:function(e,t,n){"use strict";n.d(t,"c",(function(){return j})),n.d(t,"b",(function(){return d}));var r=n(2),c=n.n(r),a=n(15),i=n(0),s=n(82),o=n(99),u=n(100),b=n(676),l=n(670),j=function(e,t,n){var r=Object(o.b)(),j=Object(s.c)().account,d=Object(l.j)(e);return{onUnstake:Object(i.useCallback)(function(){var e=Object(a.a)(c.a.mark((function e(a,i){var s,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=parseFloat(a)/t)>.99*n)){e.next=7;break}return e.next=4,Object(b.s)(d,j);case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,Object(b.r)(d,s,j,i);case 9:e.t0=e.sent;case 10:return o=e.t0,r(Object(u.e)(j)),e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[j,r,d,t,n])}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(o.b)(),r=Object(s.c)(),j=r.account,d=Object(l.b)(),p=Object(l.f)(e),x=Object(i.useCallback)(function(){var r=Object(a.a)(c.a.mark((function r(a,i,s){var o;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(e<100)){r.next=13;break}if(!(parseFloat(a)>.99*parseFloat(s)&&parseFloat(a)<=parseFloat(s)/.99)){r.next=7;break}return r.next=4,Object(b.o)(d,e,j);case 4:r.t0=r.sent,r.next=10;break;case 7:return r.next=9,Object(b.n)(d,e,a,j,i);case 9:r.t0=r.sent;case 10:o=r.t0,r.next=22;break;case 13:if(!t){r.next=19;break}return r.next=16,Object(b.f)(p,j);case 16:o=r.sent,r.next=22;break;case 19:return r.next=21,Object(b.i)(p,a,i,j);case 21:o=r.sent;case 22:return n(Object(u.l)(e,j)),n(Object(u.i)(e,j)),n(Object(u.k)(e,j)),n(Object(u.j)(e,j)),r.abrupt("return",o);case 27:case"end":return r.stop()}}),r)})));return function(e,t,n){return r.apply(this,arguments)}}(),[j,n,t,d,p,e]);return{onUnstake:x}};t.a=function(e){var t=Object(o.b)(),n=Object(s.c)().account,r=Object(l.b)();return{onUnstake:Object(i.useCallback)(function(){var i=Object(a.a)(c.a.mark((function a(i,s){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(!(parseFloat(i)>.99*parseFloat(s)&&parseFloat(i)<=parseFloat(s)/.99)){c.next=6;break}return c.next=3,Object(b.o)(r,e,n);case 3:c.t0=c.sent,c.next=9;break;case 6:return c.next=8,Object(b.n)(r,e,i,n);case 8:c.t0=c.sent;case 9:return o=c.t0,t(Object(u.a)(n)),c.abrupt("return",o);case 12:case"end":return c.stop()}}),a)})));return function(e,t){return i.apply(this,arguments)}}(),[n,t,r,e])}}},708:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return p}));n(67);var r=n(2),c=n.n(r),a=n(15),i=n(0),s=n(82),o=n(99),u=n(100),b=n(676),l=n(670),j=function(e){var t=Object(o.b)(),n=Object(s.c)().account,r=Object(l.b)();return{onReward:Object(i.useCallback)(Object(a.a)(c.a.mark((function a(){var i;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.e)(r,e,n);case 2:return i=c.sent,t(Object(u.a)(n)),c.abrupt("return",i);case 5:case"end":return c.stop()}}),a)}))),[n,t,e,r])}},d=function(e){var t=Object(o.b)(),n=Object(s.c)().account,r=Object(l.j)(e);return{onReward:Object(i.useCallback)(Object(a.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.p)(r,n);case 2:return a=e.sent,t(Object(u.e)(n)),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),[n,t,r])}},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(o.b)(),r=Object(s.c)(),j=r.account,d=Object(l.f)(e),p=Object(l.b)(),x=Object(i.useCallback)(Object(a.a)(c.a.mark((function r(){var a;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=0,!(e<100)){r.next=7;break}return r.next=4,Object(b.e)(p,e,j);case 4:a=r.sent,r.next=16;break;case 7:if(!t){r.next=13;break}return r.next=10,Object(b.k)(d,j);case 10:a=r.sent,r.next=16;break;case 13:return r.next=15,Object(b.j)(d,j);case 15:a=r.sent;case 16:return n(Object(u.k)(e,j)),n(Object(u.j)(e,j)),n(Object(u.i)(e,j)),r.abrupt("return",a);case 20:case"end":return r.stop()}}),r)}))),[j,n,t,p,d,e]);return{onReward:x}}},709:function(e,t,n){"use strict";var r,c,a=n(72),i=(n(0),n(7)),s=n(32),o=n(98),u=n(710),b=n(13),l=i.e.div(r||(r=Object(a.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),j=i.e.div(c||(c=Object(a.a)(["\n  margin-bottom: '10px';\n"])));t.a=function(e){var t=e.onDismiss,n=e.tokenPrice,r=e.apr,c=e.linkLabel,a=e.linkHref,i=e.earningTokenSymbol,d=void 0===i?"orbitrium":i,p=e.roundingDecimals,x=void 0===p?2:p,f=e.compoundFrequency,O=void 0===f?1:f,m=e.performanceFee,h=void 0===m?0:m,v=Object(o.b)().t,k=1e3/n,g=Object(u.b)({numberOfDays:1,farmApr:r,tokenPrice:n,roundingDecimals:x,compoundFrequency:O,performanceFee:h}),y=Object(u.b)({numberOfDays:7,farmApr:r,tokenPrice:n,roundingDecimals:x,compoundFrequency:O,performanceFee:h}),w=Object(u.b)({numberOfDays:30,farmApr:r,tokenPrice:n,roundingDecimals:x,compoundFrequency:O,performanceFee:h}),F=Object(u.b)({numberOfDays:365,farmApr:r,tokenPrice:n,roundingDecimals:x,compoundFrequency:O,performanceFee:h});return Object(b.jsxs)(s.J,{title:v("ROI"),onDismiss:t,children:[Object(b.jsxs)(l,{children:[Object(b.jsx)(j,{children:Object(b.jsx)(s.R,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:v("Timeframe")})}),Object(b.jsx)(j,{children:Object(b.jsx)(s.R,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",style:{textAlign:"right"},children:v("ROI")})}),Object(b.jsx)(j,{children:Object(b.jsx)(s.R,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",style:{textAlign:"right"},children:v("%symbol% per $1000",{symbol:d})})}),Object(b.jsx)(j,{children:Object(b.jsx)(s.R,{children:v("%num%d",{num:1})})}),Object(b.jsx)(j,{children:Object(b.jsxs)(s.R,{style:{textAlign:"right"},children:[parseFloat(Object(u.a)({amountEarned:g,amountInvested:k}).toFixed(x))," %"]})}),Object(b.jsx)(j,{children:Object(b.jsx)(s.R,{style:{textAlign:"right"},children:g})}),Object(b.jsx)(j,{children:Object(b.jsx)(s.R,{children:v("%num%d",{num:7})})}),Object(b.jsx)(j,{children:Object(b.jsxs)(s.R,{style:{textAlign:"right"},children:[parseFloat(Object(u.a)({amountEarned:y,amountInvested:k}).toFixed(x))," %"]})}),Object(b.jsx)(j,{children:Object(b.jsx)(s.R,{style:{textAlign:"right"},children:y})}),Object(b.jsx)(j,{children:Object(b.jsx)(s.R,{children:v("%num%d",{num:30})})}),Object(b.jsx)(j,{children:Object(b.jsxs)(s.R,{style:{textAlign:"right"},children:[parseFloat(Object(u.a)({amountEarned:w,amountInvested:k}).toFixed(x))," %"]})}),Object(b.jsx)(j,{children:Object(b.jsx)(s.R,{style:{textAlign:"right"},children:w})}),Object(b.jsx)(j,{children:Object(b.jsx)(s.R,{children:v("365d(APY)")})}),Object(b.jsx)(j,{children:Object(b.jsxs)(s.R,{style:{textAlign:"right"},children:[parseFloat(Object(u.a)({amountEarned:F,amountInvested:k}).toFixed(x))," %"]})}),Object(b.jsx)(j,{children:Object(b.jsx)(s.R,{style:{textAlign:"right"},children:F})})]}),Object(b.jsxs)(s.h,{mb:"28px",children:[Object(b.jsxs)(s.R,{fontSize:"12px",color:"textSubtle",style:{textAlign:"center"},children:["Calculated based on current rates. Compounding ",1===O?"once per day":O.toLocaleString().concat(" times per day"),".",Object(b.jsx)("br",{}),"Rates are estimates provided for your convenience only and by",Object(b.jsx)("br",{}),"no means do they represent guaranteed returns."]}),h>0&&Object(b.jsx)(s.R,{mt:"14px",fontSize:"12px",color:"textSubtle",style:{textAlign:"center"},children:v("All estimated rates take into account this pool\u2019s %fee%% performance fee",{fee:h})})]}),Object(b.jsx)(s.y,{justifyContent:"center",children:Object(b.jsx)(s.G,{href:a,children:c})})]})}},710:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){var t=e.numberOfDays,n=e.farmApr,r=e.tokenPrice,c=e.roundingDecimals,a=void 0===c?2:c,i=e.compoundFrequency,s=void 0===i?1:i,o=e.performanceFee,u=void 0===o?0:o,b=365*s,l=n/100;u&&(l=(n-n/100*u)/100);var j=t/365,d=1e3/r,p=d*Math.pow(1+l/b,b*j);return parseFloat((p-d).toFixed(a))},c=function(e){return e.amountEarned/e.amountInvested*100}},750:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r={latin_map:{"\u03c4":"t","\u03a4":"T"}},c=function(e){return e.replace(/[^A-Za-z0-9[\] ]/g,(function(e){return r.latin_map[e]||e}))}},751:function(e,t,n){"use strict";var r=n(720);n.d(t,"a",(function(){return r.a}))},752:function(e,t,n){"use strict";var r=n(17);t.a=function(e){var t=e.quoteTokenAddress,n=e.tokenAddress,c=Object(r.j)(),a=t?t[137]:null,i=n?n[137]:null,s=i&&i!==c?i:"BNB";return"".concat(a&&a!==c?a:"BNB","/").concat(s)}}}]);