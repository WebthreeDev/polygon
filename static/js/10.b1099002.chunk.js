(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[10],{1005:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return H}));var c,r,a=n(2),i=n.n(a),s=n(15),o=n(39),l=n(72),d=n(0),b=n(7),j=n(32),u=n(719),h=n(220),p=n(674),O=n(673),x=n(82),m=n(731),g=n(17),f=n(681),v=n(687),w=n(10),y=n.n(w),S=n(26),k=n(158),T=n(111),E=n(139),D=function(e){var t=Object(d.useState)([]),n=Object(o.a)(t,2),c=n[0],r=n[1],a=Object(E.a)().slowRefresh,l=Object(x.c)().account;return Object(d.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t,n,c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[{address:Object(g.h)(),name:"rateBTC"},{address:Object(g.h)(),name:"rateETH"},{address:Object(g.h)(),name:"rateNATIVE"},{address:Object(g.h)(),name:"rateUSDC"},{address:Object(g.h)(),name:"rateUSDT"},{address:Object(g.h)(),name:"rateUSDX"},{address:Object(g.h)(),name:"startTime"},{address:Object(g.h)(),name:"endTime"},{address:Object(g.h)(),name:"raisedBTC"},{address:Object(g.h)(),name:"raisedETH"},{address:Object(g.h)(),name:"raisedNATIVE"},{address:Object(g.h)(),name:"raisedUSDC"},{address:Object(g.h)(),name:"raisedUSDT"},{address:Object(g.h)(),name:"raisedUSDX"}],e.next=3,Object(S.a)(k,t);case 3:if(n=e.sent,n={rates:{BTC:new y.a(n[0]).toString(),ETH:new y.a(n[1]).toString(),NATIVE:new y.a(n[2]).toString(),USDC:new y.a(n[3]).toString(),USDT:new y.a(n[4]).toString(),USDX:new y.a(n[5]).toString()},timestamps:{start:"1631534400",end:"1631966400"},raised:{BTC:new y.a(n[8]).toString(),ETH:new y.a(n[9]).toString(),NATIVE:new y.a(n[10]).toString(),USDC:new y.a(n[11]).toString(),USDT:new y.a(n[12]).toString(),USDX:new y.a(n[13]).toString()},wallet:0},!l){e.next=11;break}return c=[{address:Object(g.c)(),name:"balanceOf",params:[l]}],e.next=9,Object(S.a)(T,c);case 9:a=e.sent,n.wallet=new y.a(a[0]).toString();case 11:r(n);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,l,e]),c},C=n(686),B=n(218),N=n(25),F=n(138),A=n(684),I=n(142),U=n(11),L=(n(845),n(13)),R=Object(b.e)(j.g)(c||(c=Object(l.a)(["\n  grid-template-columns: repeat(12,1fr);\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 0;\n  grid-gap: 0;\n  &.upperRow {\n    border-bottom: 1px solid #dedede;\n    padding-bottom: .8em;\n    margin-top: 0;\n    position: relative;\n    top: -20px;\n    margin-bottom: -20px;\n    & > div {\n        grid-column: span 6;\n    }\n  }\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n    text-align: center;\n    border-right: 1px solid none;\n    "," {\n        grid-column: span 4;\n    }\n    "," {\n        border-right: 1px solid #dedede;\n        grid-column: span 2;\n    }\n    &:last-child {\n        border-right: none;\n    }\n    h2 {\n        font-size: 23px;\n    }\n    p {\n        color: ","};\n        font-weight: bold;\n        font-size: 23px;\n        margin-top: 0.5em;\n        margin-bottom: 0;\n        span {\n            color: ","};\n            font-weight: normal;\n        }\n    }\n\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg}),(function(e){return e.theme.colors.warning}),(function(e){return e.theme.colors.text})),z=Object(b.e)(j.g)(r||(r=Object(l.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 24px;\n  grid-gap: 24px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    margin-bottom: 32px;\n    grid-gap: 32px;\n\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),H=function(){for(var e=Object.assign({},["128","137","250","56","43114"].indexOf("137")>-1?{binance:{label:"Binance Smart Chain",value:"56",icon:"BscIcon"},avalanche:{label:"Avalanche",value:"43114",icon:"AvalancheIcon"},heco:{label:"Heco",value:"128",icon:"HecoIcon"},polygon:{label:"Polygon",value:"137",icon:"PolygonIcon"},fantom:{label:"Fantom",value:"250",icon:"FantomIcon"}}:{binance:{label:"Binance Smart Chain",value:"97",icon:"BscIcon"},avalanche:{label:"Avalanche",value:"43113",icon:"AvalancheIcon"},heco:{label:"Heco",value:"256",icon:"HecoIcon"},polygon:{label:"Polygon",value:"80001",icon:"PolygonIcon"},fantom:{label:"Fantom",value:"4002",icon:"FantomIcon"}}),t="",n=Object.keys(e),c=0;c<n.length;c++)if("137"===e[n[c]].value){t=n[c];break}var r;"binance"===t&&(r=[{label:"BNB",icon:"images/tokens/bnb.png"},{label:"BTCB",icon:"images/tokens/btcb.png"},{label:"ETH",icon:"images/tokens/eth.png"},{label:"BUSD",icon:"images/tokens/busd.png"},{label:"USDT",icon:"images/tokens/usdt.png"},{label:"USDC",icon:"images/tokens/usdc.png"}]),"avalanche"===t&&(r=[{label:"AVAX",icon:"images/tokens/avax.png"},{label:"WBTCe",icon:"images/tokens/wbtce.png"},{label:"WETHe",icon:"images/tokens/wethe.png"},{label:"USDTe",icon:"images/tokens/usdte.png"},{label:"USDCe",icon:"images/tokens/usdce.png"},{label:"DAIe",icon:"images/tokens/daie.png"}]),"heco"===t&&(r=[{label:"HT",icon:"images/tokens/ht.png"},{label:"HBTC",icon:"images/tokens/hbtc.png"},{label:"ETH",icon:"images/tokens/eth.png"},{label:"HUSD",value:"8",icon:"images/tokens/husd.png"},{label:"USDT",icon:"images/tokens/usdt.png"},{label:"USDC",icon:"images/tokens/usdc.png"}]),"polygon"===t&&(r=[{label:"MATIC",icon:"images/tokens/matic.png"},{label:"WBTC",icon:"images/tokens/wbtc.png"},{label:"WETH",icon:"images/tokens/weth.png"},{label:"USDC",icon:"images/tokens/usdc.png"},{label:"USDT",icon:"images/tokens/usdt.png"},{label:"DAI",icon:"images/tokens/dai.png"}]),"fantom"===t&&(r=[{label:"FTM",icon:"images/tokens/ftm.png"},{label:"WBTC",icon:"images/tokens/wbtc.png"},{label:"WETH",icon:"images/tokens/weth.png"},{label:"USDC",icon:"images/tokens/usdc.png"},{label:"fUSDT",icon:"images/tokens/fusdt.png"},{label:"DAI",icon:"images/tokens/dai.png"}]);var a=Object(d.useState)(r[0].label),l=Object(o.a)(a,2),b=l[0],w=l[1],S=Object(g.a)(U.a.orbitrium.address);S=b===r[0].label?Object(g.j)():Object(g.a)(U.a[b].address);var k=new URLSearchParams(window.location.search),T=Object(x.c)().account,E=Object(d.useState)(!1),H=Object(o.a)(E,2),K=H[0],P=H[1],M=Object(f.c)(S),W=T&&M&&M.isGreaterThan(0),q=Object(m.b)().onTransfer,Q=Object(v.e)(S).onApprove,X=Object(F.a)(),V=X.toastSuccess,Y=X.toastError,G=Object(d.useState)(""),J=Object(o.a)(G,2),$=J[0],Z=J[1],_=Object(d.useState)(k.get("ref")||"0x000000000000000000000000000000000000dEaD"),ee=Object(o.a)(_,2),te=ee[0],ne=ee[1],ce=Object(d.useState)(!1),re=Object(o.a)(ce,2),ae=re[0],ie=re[1],se=Object(C.a)(S),oe=Object(C.b)().balance,le=b===r[0].label?oe:se,de=window.location.origin.concat("/presale?ref=").concat(T||"0x000000000000000000000000000000000000dEaD"),be=(Math.floor(1e3*Object(B.c)(le,U.a[b].decimals))/1e3).toString();"0"===be&&(be="0.0");var je=new y.a($).multipliedBy(N.a.pow(b===r[0].label?18:U.a[b].decimals)).toJSON(),ue=D(ae),he={},pe={},Oe=0,xe="",me="0",ge=parseFloat(Object(B.e)(new y.a(ue.wallet),18,2));if(void 0!==ue.rates)for(var fe=0;fe<Object.keys(ue.rates).length;fe++)if(xe=Object.keys(ue.rates)[fe],me=ue.rates[xe].toString(),"NATIVE"===xe){var ve=r[0].label;he[ve]=U.a[ve].decimals&&18!==U.a[ve].decimals?me.slice(0,-(18-U.a[ve].decimals)):me,pe[ve]=Object(B.c)(ue.raised[xe],18),Oe+=pe[ve]*he[ve]}else if("USDX"===xe){var we=r.filter((function(e,t){return-1===e.label.indexOf("BTC")&&-1===e.label.indexOf("ETH")&&-1===e.label.indexOf("USDC")&&-1===e.label.indexOf("USDT")&&t>0}))[0].label;he[we]=U.a[we].decimals&&18!==U.a[we].decimals?me.slice(0,-(18-U.a[we].decimals)):me,pe[we]=Object(B.c)(ue.raised[xe],U.a[we].decimals),Oe+=pe[we]*he[we]}else{var ye=Object.keys(U.a).filter((function(e){return e.indexOf(xe)>-1}))[0];pe[ye]=Object(B.c)(ue.raised[xe],U.a[ye].decimals),U.a[xe]||(xe=Object.keys(U.a).filter((function(e){return e.indexOf(xe)>-1})).pop()),he[xe]=U.a[xe].decimals&&18!==U.a[xe].decimals?me.slice(0,-(18-U.a[xe].decimals)):me,Oe+=pe[ye]*he[xe]}var Se=Object(d.useCallback)(Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.prev=1,e.next=4,Q();case 4:e.sent?V("Contract Approved","You can now buy!"):Y("Error","Please try again. Confirm the transaction and make sure you are paying enough gas!"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),P(!1),Y("Error",null===e.t0||void 0===e.t0?void 0:e.t0.message);case 12:return e.prev=12,P(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])}))),[Q,P,V,Y]),ke=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ie(!0),""===te||/^(0x)?[0-9a-f]{40}$/i.test(te)){e.next=5;break}Y("Invalid referrer address"),e.next=14;break;case 5:return e.prev=5,e.next=8,q(Object(g.a)(U.a[b].address),je,""===te?"0x000000000000000000000000000000000000dEaD":te,b===r[0].label);case 8:V("You have successfully purchased orbitrium!"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),Y("Canceled","Please try again and confirm the transaction.");case 14:ie(!1);case 15:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(){return e.apply(this,arguments)}}(),Te=Math.floor(+new Date/1e3),Ee=Object(d.useCallback)((function(e){e.currentTarget.validity.valid&&Z(e.currentTarget.value.replace(/,/g,"."))}),[Z]),De=Object(d.useCallback)((function(e){ne(e.currentTarget.value)}),[ne]),Ce=Object(d.useCallback)((function(){Z(be)}),[be,Z]),Be=Object(I.a)().theme,Ne=parseFloat($)*(Object.keys(he).length?parseFloat(he[b]):1),Fe=(Number.isNaN($)||""===$?0:parseFloat($)*(Object.keys(he).length?parseFloat(he[b]):1)*.03).toLocaleString(void 0,{maximumFractionDigits:1}),Ae=parseFloat($)>0,Ie=void 0!==ue.timestamps?(Te<ue.timestamps.start?ue.timestamps.start:ue.timestamps.end)-Te:0;Ie<0&&(Ie=0);var Ue=1;return he[b]>1e6?Ue=1e3:he[b]>1e5&&(Ue=100),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(p.a,{children:Object(L.jsx)(j.z,{scale:"lg",color:"text",style:{textAlign:"center"},children:"orbitrium Presale"})}),Object(L.jsxs)(h.a,{children:[Object(L.jsxs)(z,{children:[Object(L.jsxs)(j.n,{children:[Object(L.jsx)(j.q,{children:Object(L.jsx)(j.z,{children:"Buy orbitrium"})}),Object(L.jsxs)(j.o,{className:"styledCardBodyPresale".concat(Be.isDark?" styledCardBodyPresaleDarkMode":""),children:[Object(L.jsxs)("div",{children:[Object(L.jsx)(u.a,{options:r,className:"styledSelect-presale",onChange:function(e){w(e.label)}}),Object(L.jsxs)("div",{className:"presaleNote presaleNoteMultiLine",style:{textAlign:"center"},children:["Rate: ",Object(L.jsxs)("strong",{style:{color:Be.colors.warning},children:[1/Ue," ",b," = ",Object.keys(he).length&&(parseFloat(he[b])/Ue).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})||0," orbitrium"]})]})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("span",{children:"Enter referrer address:"}),Object(L.jsx)(j.E,{type:"text",value:te,onChange:De,scale:"lg",autoComplete:"off",autoCorrect:"off",spellCheck:"false",pattern:"0|0[xX]|0[xX][0-9a-fA-F]{0,40}"})]}),Object(L.jsxs)("div",{className:"presaleNote presaleNoteMultiLine",style:{padding:"0 0 0 8px",margin:"-8px 0",whiteSpace:"normal",lineHeight:1},children:["if you enter a referrer address, it will receive from us ",Object(L.jsx)("strong",{style:{color:Be.colors.warning},children:"3%"})," of the amount of ",Object(L.jsx)("strong",{style:{color:Be.colors.warning},children:"orbitrium"})," you purchase. If you don't specify a referrer address, an amount equivalent to ",Object(L.jsx)("strong",{style:{color:Be.colors.warning},children:"3%"})," of your purchase will be burned."]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("span",{children:"Enter amount:"}),Object(L.jsx)(A.a,{value:$,onSelectMax:Ce,onChange:Ee,max:be,symbol:"",addLiquidityUrl:"",inputTitle:""})]}),Object(L.jsxs)(j.R,{children:["Amount to receive:",Object(L.jsxs)("strong",{style:{color:Be.colors.warning,fontSize:"31px",display:"block",margin:"0",borderBottom:Be.isDark?"1px solid #444":"1px solid #E9EAEB",paddingBottom:"0.5em"},children:[Number.isNaN(Ne)?"0.00":Ne.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:Ne<.1?4:2})," ","orbitrium",Object(L.jsxs)("small",{style:{display:"block",color:Be.colors.text,fontSize:"50%",fontWeight:"normal"},children:["refferer address receives ",Object(L.jsxs)("strong",{style:{border:"1px solid #dedede",borderRadius:"5px",padding:"0 5px"},children:[Fe," orbitrium"]})]})]})]}),T?void 0!==ue.timestamps&&Te>=ue.timestamps.start&&Te<=ue.timestamps.end?W||b===r[0].label?Object(L.jsx)(j.j,{isLoading:ae,endIcon:ae?Object(L.jsx)(j.d,{spin:!0,color:"currentColor"}):null,onClick:ke,disabled:!Ae,width:"100%",children:"Buy orbitrium"}):Object(L.jsx)(j.j,{isLoading:K,endIcon:K?Object(L.jsx)(j.d,{spin:!0,color:"currentColor"}):null,disabled:K,onClick:Se,width:"100%",children:"Approve Contract"}):void 0!==ue.timestamps?Object(L.jsx)("div",{style:{textAlign:"center",fontSize:"31px"},children:Object(L.jsx)("strong",{children:ue.timestamps.start===ue.timestamps.end||Te<=ue.timestamps.start?"PRESALE HAS NOT YET STARTED!":"PRESALE HAS ENDED!"})}):"":Object(L.jsx)(O.a,{mt:"8px",width:"100%"})]})]}),Object(L.jsxs)(j.n,{children:[Object(L.jsx)(j.q,{children:Object(L.jsx)(j.z,{children:"Presale information"})}),Object(L.jsx)(j.o,{children:Object(L.jsxs)("p",{style:{textAlign:"center",fontSize:"21px"},children:[Object(L.jsxs)("small",{style:{fontSize:"50%",display:"block",marginBottom:"-13px",marginTop:"-5px"},children:["Presale ",void 0===ue.timestamps||Te<ue.timestamps.start?"starts":"ends"," in"]}),Object(L.jsx)("br",{}),Object(L.jsxs)("span",{className:"TimerCountdown TimerShowsDays","data-remaining":Ie,children:[Object(L.jsx)("strong",{style:{color:Be.colors.warning},children:"0"}),"\xa0days ",Object(L.jsx)("strong",{style:{color:Be.colors.warning},children:"0"}),"\xa0hours ",Object(L.jsx)("strong",{style:{color:Be.colors.warning},children:"0"}),"\xa0minutes ",Object(L.jsx)("strong",{style:{color:Be.colors.warning},children:"0"}),"\xa0seconds"]})]})}),Object(L.jsx)(j.p,{children:Object(L.jsx)("table",{className:"presaleInfoTable",children:Object(L.jsxs)("tbody",{children:[Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{children:"\ud83d\ude80"}),Object(L.jsx)("td",{children:"\xa0"}),Object(L.jsxs)("td",{children:[Object(L.jsx)("strong",{style:{color:Be.colors.warning},children:"500,000,000"})," orbitrium tokens available for presale"]})]}),Object(L.jsx)("tr",{children:Object(L.jsx)("td",{colSpan:3,style:{height:"30px"}})}),Object(L.jsx)("tr",{children:Object(L.jsx)("td",{colSpan:3,style:{position:"relative"},children:Object(L.jsxs)("div",{style:{boxShadow:"0 0 10px #7645d9",borderRadius:"15px",padding:"1em"},children:["invite your friends and earn ",Object(L.jsx)("strong",{children:"3%"})," each time they buy:",Object(L.jsx)("a",{href:de,style:{display:"block",color:Be.colors.secondary},children:de})]})})}),Object(L.jsx)("tr",{children:Object(L.jsx)("td",{colSpan:3,style:{height:"25px"}})}),Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{children:"\u26a1\ufe0f"}),Object(L.jsx)("td",{children:"\xa0"}),Object(L.jsx)("td",{children:'tokens can be bought with any of the tokens listed in the "Buy orbitrium" box at fixed rates as shown below the name of the chosen token'})]}),Object(L.jsx)("tr",{children:Object(L.jsx)("td",{colSpan:3,style:{height:"10px"}})}),Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{children:"\u26a1\ufe0f"}),Object(L.jsx)("td",{children:"\xa0"}),Object(L.jsxs)("td",{children:["collected funds are automatically paired with orbitrium tokens and go automatically in the appropriate liquidity pools (e.g. if you bought orbitrium using BTC, that BTC will be paired with an amount of orbitrium equivalent in value and deposited as ",Object(L.jsx)("strong",{style:{color:Be.colors.warning},children:"locked liquidity"})," in the BTC-orbitrium pool"]})]}),Object(L.jsx)("tr",{children:Object(L.jsx)("td",{colSpan:3,style:{height:"10px"}})}),Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{children:"\u26a1\ufe0f"}),Object(L.jsx)("td",{children:"\xa0"}),Object(L.jsx)("td",{children:"unsold orbitrium will be \ud83d\udd25burned\ud83d\udd25  automatically once the presale ends"})]}),Object(L.jsx)("tr",{children:Object(L.jsx)("td",{colSpan:3,style:{height:"10px"}})}),Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{children:"\u26a1\ufe0f"}),Object(L.jsx)("td",{children:"\xa0"}),Object(L.jsx)("td",{children:"trading starts when the presale ends"})]}),Object(L.jsx)("tr",{children:Object(L.jsx)("td",{colSpan:3,style:{height:"10px"}})}),Object(L.jsx)("tr",{children:Object(L.jsx)("td",{colSpan:3,style:{height:"10px"}})}),Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{children:"\u26a1\ufe0f"}),Object(L.jsx)("td",{children:"\xa0"}),Object(L.jsxs)("td",{children:["if you interacted with any of the contracts of the ",Object(L.jsx)("strong",{style:{color:Be.colors.warning},children:"TRITON"})," project (approving a contract, buying/selling TRITON), prior to ",Object(L.jsx)("strong",{style:{color:Be.colors.warning},children:"August 19th, 12:00 GMT"}),", you are eligible to claim ",Object(L.jsx)("strong",{style:{color:Be.colors.warning},children:"orbitrium"})," tokens - see the ",Object(L.jsx)("a",{href:"/giveaway",style:{color:Be.colors.secondary},children:"giveaway\xa0page"})," and follow the instructions"]})]})]})})})]})]}),Object(L.jsx)(j.n,{children:Object(L.jsxs)(j.o,{children:[Object(L.jsxs)(R,{className:"upperRow",children:[Object(L.jsxs)("div",{children:[Object(L.jsx)("h2",{children:"TOTAL SOLD"}),Object(L.jsxs)("p",{children:[Oe.toLocaleString(void 0,{maximumFractionDigits:0})," ",Object(L.jsx)("span",{children:"orbitrium"})]})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("h2",{children:"IN WALLET"}),Object(L.jsxs)("p",{children:[ge.toLocaleString(void 0,{maximumFractionDigits:0})," ",Object(L.jsx)("span",{children:"orbitrium"})]})]})]}),Object(L.jsx)("div",{style:{textAlign:"center",marginTop:"0.5em"},children:"TOTAL RAISED"}),Object(L.jsx)(R,{children:function(){if(void 0!==ue.raised){var e=Object.keys(pe);return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)("div",{children:[Object(L.jsx)("h2",{children:e[0]}),Object(L.jsx)("p",{children:pe[e[0]].toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:6})})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("h2",{children:e[1]}),Object(L.jsx)("p",{children:pe[e[1]].toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:6})})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("h2",{children:e[2]}),Object(L.jsx)("p",{children:pe[e[2]].toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:6})})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("h2",{children:e[3]}),Object(L.jsx)("p",{children:pe[e[3]].toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:6})})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("h2",{children:e[4]}),Object(L.jsx)("p",{children:pe[e[4]].toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:6})})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("h2",{children:e[5]}),Object(L.jsx)("p",{children:pe[e[5]].toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:6})})]})]})}return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)("div",{children:[Object(L.jsx)("h2",{children:"?"}),Object(L.jsx)("p",{children:"0"})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("h2",{children:"?"}),Object(L.jsx)("p",{children:"0"})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("h2",{children:"?"}),Object(L.jsx)("p",{children:"0"})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("h2",{children:"?"}),Object(L.jsx)("p",{children:"0"})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("h2",{children:"?"}),Object(L.jsx)("p",{children:"0"})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("h2",{children:"?"}),Object(L.jsx)("p",{children:"0"})]})]})}()})]})})]})]})}},673:function(e,t,n){"use strict";var c=n(12),r=(n(0),n(32)),a=n(143),i=n(98),s=n(13);t.a=function(e){var t=Object(i.b)().t,n=Object(a.a)(),o=n.login,l=n.logout,d=Object(r.db)(o,l).onPresentConnectModal;return Object(s.jsx)(r.j,Object(c.a)(Object(c.a)({onClick:d},e),{},{children:t("Unlock Wallet")}))}},674:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var c,r,a=n(12),i=n(140),s=n(72),o=(n(0),n(7)),l=n(32),d=n(223),b=n(13),j=Object(o.e)(l.h)(c||(c=Object(s.a)(["\n  background: ",";\n"])),(function(e){var t=e.theme;return e.background||t.colors.gradients.bubblegum})),u=Object(o.e)(d.a)(r||(r=Object(s.a)(["\n  padding-top: 32px;\n  padding-bottom: 32px;\n"]))),h=function(e){var t=e.background,n=e.children,c=Object(i.a)(e,["background","children"]);return Object(b.jsx)(j,Object(a.a)(Object(a.a)({background:t},c),{},{children:Object(b.jsx)(u,{children:n})}))}},681:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return O})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return m}));var c=n(2),r=n.n(c),a=n(15),i=n(39),s=n(0),o=n(10),l=n.n(o),d=n(82),b=n(17),j=n(25),u=n(670),h=n(139),p=function(){var e=Object(s.useState)(j.b),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(d.c)().account,p=Object(u.h)(),O=Object(h.a)().fastRefresh;return Object(s.useEffect)((function(){o&&function(){var e=Object(a.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.methods.allowance(o,Object(b.e)()).call();case 2:t=e.sent,c(new l.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[o,p,O]),n},O=function(e){var t=Object(s.useState)(j.b),n=Object(i.a)(t,2),c=n[0],o=n[1],p=Object(d.c)().account,O=Object(u.i)(e),x=Object(h.a)().fastRefresh;return Object(s.useEffect)((function(){p&&function(){var e=Object(a.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.methods.allowance(p,Object(b.b)()).call();case 2:t=e.sent,o(new l.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[p,O,x]),c},x=function(e){var t=Object(s.useState)(j.b),n=Object(i.a)(t,2),c=n[0],o=n[1],p=Object(d.c)().account,O=Object(u.i)(e),x=Object(h.a)().fastRefresh;return Object(s.useEffect)((function(){p&&function(){var e=Object(a.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.methods.allowance(p,Object(b.h)()).call();case 2:t=e.sent,o(new l.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[p,O,x]),c},m=function(){var e=Object(s.useState)(j.b),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(d.c)().account,p=Object(u.h)(),O=Object(h.a)().fastRefresh;return Object(s.useEffect)((function(){o&&function(){var e=Object(a.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.methods.allowance(o,Object(b.d)()).call();case 2:t=e.sent,c(new l.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[o,p,O]),n}},684:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var c,r,a,i=n(72),s=(n(0),n(7)),o=n(32),l=n(98),d=n(13),b=s.e.div(c||(c=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  border-radius: 16px;\n  box-shadow: ",";\n  color: ",";\n  padding: 8px 16px 8px 0;\n  width: 100%;\n"])),(function(e){return e.theme.colors.input}),(function(e){var t=e.isWarning,n=void 0!==t&&t,c=e.theme;return n?c.shadows.warning:c.shadows.inset}),(function(e){return e.theme.colors.text})),j=Object(s.e)(o.E)(r||(r=Object(i.a)(["\n  box-shadow: none;\n  width: 60px;\n  margin: 0 8px;\n  padding: 0 8px;\n\n  "," {\n    width: 80px;\n  }\n\n  "," {\n    width: auto;\n  }\n"])),(function(e){return e.theme.mediaQueries.xs}),(function(e){return e.theme.mediaQueries.sm})),u=Object(s.e)(o.R)(a||(a=Object(i.a)(["\n  position: absolute;\n  bottom: -10px;\n  right: 0;\n  a {\n    display: inline;\n  }\n"]))),h=function(e){var t=e.max,n=e.symbol,c=e.onChange,r=e.onSelectMax,a=e.value,i=e.addLiquidityUrl,s=e.inputTitle,h=e.depositFee,p=Object(l.b)().t,O="0"===t||!t;return Object(d.jsxs)("div",{style:{position:"relative"},children:[Object(d.jsxs)(b,{isWarning:O,children:[Object(d.jsxs)(o.y,{justifyContent:"space-between",pl:"16px",children:[Object(d.jsx)(o.R,{fontSize:"14px",children:s}),Object(d.jsx)(o.R,{fontSize:"14px",children:p("Balance: %balance%",{balance:function(e){if(O)return"0";var t=Number(e);return t>0&&t<1e-4?t.toLocaleString(void 0,{maximumFractionDigits:20}):t.toLocaleString()}(t)})})]}),Object(d.jsxs)(o.y,{alignItems:"flex-end",justifyContent:"space-around",children:[Object(d.jsx)(j,{pattern:"^[0-9]*[.,]?[0-9]*$",inputMode:"decimal",step:"any",min:"0",onChange:c,placeholder:"0",value:a}),Object(d.jsx)(o.j,{scale:"sm",onClick:r,mr:"8px",children:p("Max")}),Object(d.jsx)(o.R,{fontSize:"16px",style:{position:"relative",top:"-5px"},children:n})]})]}),h>0&&Object(d.jsxs)(o.R,{fontSize:"14px",style:{marginTop:"12px",marginBottom:"-10px",marginLeft:"10px"},children:["Fee: ",Object(d.jsx)("span",{style:{color:"#1fc7d4"},id:"depositFee",children:"0"})]}),0===h&&Object(d.jsx)(o.R,{fontSize:"14px",style:{marginTop:"12px",marginBottom:"-10px",marginLeft:"10px"},children:"No Fee"}),O&&Object(d.jsxs)(u,{fontSize:"14px",color:"failure",children:[p("No tokens to stake")," - "," ",Object(d.jsx)(o.F,{fontSize:"14px",bold:!1,href:i,external:!0,color:"failure",children:p("Get %symbol%",{symbol:n})})]})]})}},686:function(e,t,n){"use strict";n.d(t,"b",(function(){return O}));var c=n(2),r=n.n(c),a=n(15),i=n(39),s=n(0),o=n(10),l=n.n(o),d=n(82),b=n(101),j=n(25),u=n(680),h=n(139),p=n(694),O=function(){var e=Object(s.useState)(j.b),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(d.c)().account,b=Object(p.a)(),O=b.lastUpdated,x=b.setLastUpdated,m=Object(u.a)(),g=Object(h.a)().fastRefresh;return Object(s.useEffect)((function(){o&&function(){var e=Object(a.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.eth.getBalance(o);case 2:t=e.sent,c(new l.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[o,m,O,c,g]),{balance:n,refresh:x}};t.a=function(e){var t=Object(s.useState)(j.b),n=Object(i.a)(t,2),c=n[0],o=n[1],p=Object(d.c)().account,O=Object(u.a)(),x=Object(h.a)().fastRefresh;return Object(s.useEffect)((function(){p&&function(){var t=Object(a.a)(r.a.mark((function t(){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(b.a)(e,O),t.next=3,n.methods.balanceOf(p).call();case 3:c=t.sent,o(new l.a(c));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[p,e,O,x]),c}},694:function(e,t,n){"use strict";var c=n(39),r=n(0),a=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){t.current=e})),t.current};t.a=function(){var e=Object(r.useState)(Date.now()),t=Object(c.a)(e,2),n=t[0],i=t[1];return{lastUpdated:n,previousLastUpdated:a(n),setLastUpdated:Object(r.useCallback)((function(){i(Date.now())}),[i])}}},719:function(e,t,n){"use strict";var c,r,a,i,s,o,l=n(12),d=n(39),b=n(72),j=n(0),u=n(7),h=n(32),p=n(13),O=u.e.div(c||(c=Object(b.a)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 16px;\n  box-shadow: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n  background: ",";\n  transition: border-radius 0.15s;\n"])),(function(e){return e.theme.shadows.inset}),(function(e){return e.theme.colors.inputSecondary}),(function(e){return e.theme.colors.input})),x=u.e.div(r||(r=Object(b.a)(["\n  min-width: 136px;\n  height: 0;\n  position: absolute;\n  overflow: hidden;\n  background: ",";\n  z-index: ",";\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  opacity: 0;\n\n  "," {\n    min-width: 168px;\n  }\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.zIndices.dropdown}),(function(e){return e.theme.mediaQueries.sm})),m=u.e.div(a||(a=Object(b.a)(["\n  cursor: pointer;\n  width: ","px;\n  position: relative;\n  background: ",";\n  border-radius: 16px;\n  height: 40px;\n  min-width: 136px;\n  user-select: none;\n\n  "," {\n    min-width: 168px;\n  }\n\n  ","\n\n  svg {\n    position: absolute;\n    right: 16px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n"])),(function(e){return e.width}),(function(e){return e.theme.colors.input}),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.isOpen&&Object(u.d)(i||(i=Object(b.a)(["\n      "," {\n        border-bottom: 1px solid ",";\n        box-shadow: ",";\n        border-radius: 16px 16px 0 0;\n      }\n\n      "," {\n        height: auto;\n        transform: scaleY(1);\n        opacity: 1;\n        border: 1px solid ",";\n        border-top-width: 0;\n        border-radius: 0 0 16px 16px;\n        box-shadow: ",";\n      }\n    "])),O,(function(e){return e.theme.colors.inputSecondary}),(function(e){return e.theme.tooltip.boxShadow}),x,(function(e){return e.theme.colors.inputSecondary}),(function(e){return e.theme.tooltip.boxShadow}))})),g=u.e.ul(s||(s=Object(b.a)(["\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  z-index: ",";\n"])),(function(e){return e.theme.zIndices.dropdown})),f=u.e.li(o||(o=Object(b.a)(["\n  list-style: none;\n  padding: 8px 16px;\n  &:hover {\n    background: ",";\n  }\n"])),(function(e){return e.theme.colors.inputSecondary})),v={BscIcon:h.i,HecoIcon:h.A,PolygonIcon:h.N,FantomIcon:h.x,AvalancheIcon:h.e};t.a=function(e){var t,n=e.options,c=e.className,r=e.onChange,a=Object(j.useRef)(null),i=Object(j.useRef)(null),s=Object(j.useState)(!1),o=Object(d.a)(s,2),b=o[0],u=o[1],w=Object(j.useState)(n[0]),y=Object(d.a)(w,2),S=y[0],k=y[1],T=Object(j.useState)({width:0,height:0}),E=Object(d.a)(T,2),D=E[0],C=E[1],B=void 0!==S.icon&&-1===S.icon.indexOf(".")?v[S.icon]:"";t=void 0!==S.icon?-1===S.icon.indexOf(".")?Object(p.jsx)(B,{width:"32px"}):Object(p.jsx)("img",{src:S.icon,alt:S.label,width:"32"}):"";var N=function(){return u(!b)},F=function(e){return function(){k(e),u(!1),r&&r(e)}};return Object(j.useEffect)((function(){C({width:i.current.offsetWidth,height:i.current.offsetHeight})}),[]),Object(p.jsxs)(m,Object(l.a)(Object(l.a)({className:void 0!==c?c:"",isOpen:b,ref:a},D),{},{children:[0!==D.width&&Object(p.jsxs)(O,{onClick:N,children:[t,Object(p.jsx)(h.R,{children:S.label})]}),Object(p.jsx)(h.b,{color:"text",onClick:N}),Object(p.jsx)(x,{children:Object(p.jsx)(g,{ref:i,children:n.map((function(e){var t,n=void 0!==e.icon&&-1===e.icon.indexOf(".")?v[e.icon]:"";return t=void 0!==e.icon?-1===e.icon.indexOf(".")?Object(p.jsx)(n,{width:"32px"}):Object(p.jsx)("img",{src:e.icon,alt:e.label,width:"32"}):"",e.label!==S.label?Object(p.jsxs)(f,{onClick:F(e),children:[t,Object(p.jsx)(h.R,{children:e.label})]},e.label):null}))})})]}))}},731:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return b}));var c=n(2),r=n.n(c),a=n(15),i=n(0),s=n(82),o=n(676),l=n(670),d=function(){var e=Object(s.c)().account,t=Object(l.g)();return{onTransfer:Object(i.useCallback)(function(){var n=Object(a.a)(r.a.mark((function n(c,a,i,s){var l;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(o.b)(t,e,c,a,i,s);case 2:return l=n.sent,n.abrupt("return",l);case 4:case"end":return n.stop()}}),n)})));return function(e,t,c,r){return n.apply(this,arguments)}}(),[e,t])}},b=function(){var e=Object(s.c)().account,t=Object(l.g)();return{onTransfer:Object(i.useCallback)(Object(a.a)(r.a.mark((function n(){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(o.c)(t,e);case 2:return c=n.sent,n.abrupt("return",c);case 4:case"end":return n.stop()}}),n)}))),[e,t])}}},845:function(e,t,n){}}]);