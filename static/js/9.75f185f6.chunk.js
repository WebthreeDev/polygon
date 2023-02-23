(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[9],{1e3:function(e,t,n){"use strict";n.r(t);var c,r,a,i,o,s,l,b,j,u,d,x,p,O,m,h=n(39),f=n(72),g=n(0),k=n.n(g),v=n(36),y=n(10),w=n.n(y),S=n(82),F=n(32),C=n(794),T=n.n(C),R=n(841),B=n.n(R),D=n(11),I=function(e,t){var n=Object(g.useState)((function(){try{var n=localStorage.getItem(t);return n?JSON.parse(n):e}catch(c){return e}})),c=Object(h.a)(n,2),r=c[0],a=c[1];return Object(g.useEffect)((function(){localStorage.setItem(t,JSON.stringify(r))}),[r,t]),[r,a]},P=n(85),A=n(703),E=n(7),z=n(220),L=n(674),N=n(673),H=n(98),M=n(25),U=n(218),q=n(705),J=n(704),K=n(678),V=n(709),Y=n(73),G=n(13),Q=function(e){var t=e.pool,n=e.compoundFrequency,c=void 0===n?1:n,r=e.performanceFee,a=void 0===r?0:r,i=Object(H.b)().t,o=t.stakingToken,s=t.earningToken,l=t.totalStaked,b=t.isFinished,j=i("This pool\u2019s rewards aren\u2019t compounded automatically, so we show APR"),u=Object(F.cb)(j,{placement:"bottom-end"}),d=u.tooltip,x=u.tooltipVisible,p=Object(P.b)(s.symbol),O=p&&p.toNumber(),m=Object(P.b)(o.symbol),f=m&&m.toNumber(),g=Object(J.a)().toString(),k=Object(q.a)(new w.a(t.rewardPerBlock),new w.a(O),new w.a(Object(U.c)(l,o.decimals)).times(f),""!==g?g:void 0),v=Math.round(O/1e3)>0,y=k&&k.toLocaleString("en-US",{maximumFractionDigits:0});k&&k>9e5&&(y="GALACTIC ");var S=o.address&&"".concat(Y.c,"/#/swap?outputCurrency=").concat(o.address[137]),C=Object(F.bb)(Object(G.jsx)(V.a,{tokenPrice:O,apr:k,linkLabel:i("Get %symbol%",{symbol:o.symbol}),linkHref:S||Y.c,earningTokenSymbol:s.symbol,roundingDecimals:v?4:2,compoundFrequency:c,performanceFee:a})),T=Object(h.a)(C,1)[0];return Object(G.jsxs)(F.y,{alignItems:"center",justifyContent:"space-between",children:[x&&d,Object(G.jsx)(F.R,{children:"".concat(i("APR"),":")}),b||!k?Object(G.jsx)(F.P,{width:"82px",height:"32px"}):Object(G.jsxs)(F.y,{alignItems:"center",children:[Object(G.jsx)(F.C,{onClick:T,variant:"text",scale:"sm",children:Object(G.jsx)(F.m,{color:"textSubtle",width:"18px"})}),Object(G.jsx)(K.a,{fontSize:"16px",isDisabled:b,value:y,decimals:0,unit:"%",bold:!0})]})]})},W=Object(E.e)(F.n)(c||(c=Object(f.a)(["\n  max-width: 352px;\n  margin: 0 8px 24px;\n  display: flex;\n  flex-direction: column;\n  align-self: baseline;\n  position: relative;\n  color: ",";\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n\n  ","\n\n  "," {\n    margin: 0 12px 32px;\n  }\n"])),(function(e){var t=e.isFinished;return e.theme.colors[t?"textDisabled":"secondary"]}),(function(e){return e.isPromotedPool?Object(E.d)(r||(r=Object(f.a)(["\n          background: linear-gradient(45deg, rgb(255, 0, 0) 0%, rgb(255, 154, 0) 10%, rgb(208, 222, 33) 20%, rgb(79, 220, 74) 30%, rgb(63, 218, 216) 40%, rgb(47, 201, 226) 50%, rgb(28, 127, 238) 60%, rgb(95, 21, 242) 70%, rgb(186, 12, 248) 80%, rgb(251, 7, 217) 90%, rgb(255, 0, 0) 100%) 0% 0% / 300% 300%;\n          padding: 3px 3px 3px 3px;\n          background-size: 400% 400%;\n        "]))):"background: ".concat((function(e){return e.theme.card.background}),";")}),(function(e){return e.theme.mediaQueries.sm})),_=Object(E.e)(F.h)(a||(a=Object(f.a)(["\n  background: ",";\n  border-radius: ",";\n"])),(function(e){return e.theme.card.background}),(function(e){var t=e.isPromotedPool,n=e.theme;return t?"31px":n.radii.card})),$=n(17),X=Object(E.e)(F.y)(i||(i=Object(f.a)(["\n  svg {\n    height: 14px;\n    width: 14px;\n  }\n"]))),Z=function(e){var t=e.pool,n=Object(H.b)().t,c=Object(P.a)().currentBlock,r=t.stakingToken,a=t.totalStaked,i=t.startBlock,o=t.endBlock,s=t.isFinished,l=t.contractAddress,b=t.poolId,j=Object($.a)(l),u=0===b,d=Boolean(!s&&i&&o&&o<99999999),x=Math.max(i-c,0),p=Math.max(o-c,0),O=0===x&&p>0;return Object(G.jsxs)(X,{flexDirection:"column",children:[Object(G.jsxs)(F.y,{mb:"2px",justifyContent:"space-between",alignItems:"center",children:[Object(G.jsxs)(F.R,{small:!0,children:[n("Total Staked"),":"]}),Object(G.jsx)(F.y,{alignItems:"flex-start",children:a?Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(K.a,{fontSize:"14px",value:function(){if(u){var e=new w.a(a);return Object(U.c)(e,r.decimals)}return Object(U.c)(a,r.decimals)}()}),Object(G.jsx)(F.R,{ml:"4px",fontSize:"14px",children:r.symbol})]}):Object(G.jsx)(F.P,{width:"90px",height:"21px"})})]}),d&&Object(G.jsxs)(F.y,{mb:"2px",justifyContent:"space-between",alignItems:"center",children:[Object(G.jsxs)(F.R,{small:!0,children:[n(O?"End":"Start"),":"]}),Object(G.jsxs)(F.y,{alignItems:"center",children:[p||x?Object(G.jsx)(K.a,{color:"primary",fontSize:"14px",value:O?p:x,decimals:0}):Object(G.jsx)(F.P,{width:"54px",height:"21px"}),Object(G.jsx)(F.R,{ml:"4px",color:"primary",small:!0,textTransform:"lowercase",children:n("Blocks")}),Object(G.jsx)(F.T,{ml:"4px",color:"primary"})]})]}),j&&Object(G.jsx)(F.y,{mb:"2px",justifyContent:"flex-start",children:Object(G.jsx)(F.G,{bold:!1,small:!0,href:"".concat(Y.b,"/address/").concat(j),children:"View Contract"})})]})},ee=k.a.memo(Z),te=Object(E.e)(F.y)(o||(o=Object(f.a)(["\n  align-items: center;\n  justify-content: space-between;\n  button {\n    padding: 0;\n  }\n"]))),ne=function(e){var t=e.pool,n=e.account,c=Object(H.b)().t,r=Object(g.useState)(!1),a=Object(h.a)(r,2),i=a[0],o=a[1],s=c("You must harvest and compound your earnings from this pool manually."),l=Object(F.cb)(s,{placement:"bottom-end"}),b=l.tooltip,j=l.tooltipVisible;return Object(G.jsxs)(F.p,{style:{paddingTop:"15px",paddingBottom:"15px"},children:[Object(G.jsxs)(te,{style:{display:"block",textAlign:"center"},children:[Object(G.jsx)(F.y,{alignItems:"center",children:j&&b}),Object(G.jsx)(F.w,{expanded:i,onClick:function(){return o(!i)},children:c(i?"Hide":"Details")})]}),i&&Object(G.jsx)(ee,{pool:t,account:n})]})},ce=Object(E.e)(F.y)(s||(s=Object(f.a)(["\n  svg {\n    margin-right: 4px;\n  }\n  border-radius: 31px 31px 0 0;\n  margin: 25px 25px -10px 25px;\n"]))),re=Object(E.e)(F.Q)(l||(l=Object(f.a)(["\n  margin-left: 4px;\n"]))),ae=function(e){var t=e.stakingTokenSymbol,n=e.multiplier,c="".concat(t,".png").toLocaleLowerCase();return Object(G.jsxs)(ce,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(G.jsx)(F.D,{src:"/images/tokens/".concat(c),alt:t,width:64,height:64}),Object(G.jsxs)(F.y,{flexDirection:"column",alignItems:"flex-end",children:[Object(G.jsx)(F.z,{mb:"4px",children:t}),Object(G.jsx)(F.y,{justifyContent:"center",children:Object(G.jsx)(re,{variant:"secondary",children:n||Object(G.jsx)("span",{children:"\xa0"})})})]})]})},ie=n(81),oe=n(2),se=n.n(oe),le=n(15),be=n(687),je=n(670),ue=n(138),de=function(e){var t=e.pool,n=e.isLoading,c=void 0!==n&&n,r=t.poolId,a=t.stakingToken,i=Object(je.c)(a.address?Object($.a)(a.address):""),o=Object(g.useState)(!1),s=Object(h.a)(o,2),l=s[0],b=s[1],j=Object(be.d)(i,r).onApprove,u=Object(ue.a)(),d=u.toastSuccess,x=u.toastError,p=Object(g.useCallback)(Object(le.a)(se.a.mark((function e(){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,j();case 4:e.sent?d("Contract Enabled","You can now stake!"):x("Error","Please try again. Confirm the transaction and make sure you are paying enough gas!"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),b(!1),x("Error",null===e.t0||void 0===e.t0?void 0:e.t0.message);case 12:return e.prev=12,b(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])}))),[j,b,d,x]);return Object(G.jsx)(G.Fragment,{children:c?Object(G.jsx)(F.P,{width:"100%",height:"52px"}):Object(G.jsx)(F.j,{isLoading:l,endIcon:l?Object(G.jsx)(F.d,{spin:!0,color:"currentColor"}):null,disabled:l,onClick:p,width:"100%",style:{marginTop:"4px"},children:"Approve Contract"})})},xe=n(142),pe=function(e){var t=e.tokenSymbol,n=e.onDismiss,c=Object(H.b)().t,r=Object(xe.a)().theme;return Object(G.jsxs)(F.J,{title:c("%symbol% required",{symbol:t}),onDismiss:n,headerBackground:r.colors.gradients.cardHeader,children:[Object(G.jsx)(F.R,{color:"failure",bold:!0,children:c("Insufficient %symbol% balance",{symbol:t})}),Object(G.jsx)(F.R,{mt:"24px",children:c("You\u2019ll need %symbol% to stake in this pool!",{symbol:t})}),Object(G.jsx)(F.R,{children:c("Buy some %symbol%, or make sure your %symbol% isn\u2019t in another pool or LP.",{symbol:t})}),Object(G.jsxs)(F.j,{mt:"24px",as:"a",external:!0,href:Y.c,children:[c("Buy")," ",t]}),Object(G.jsx)(F.j,{variant:"text",onClick:n,children:c("Close Window")})]})},Oe=n(706),me=n(707),he=Object(E.e)(F.F)(b||(b=Object(f.a)(["\n  width: 100%;\n"]))),fe=Object(E.e)(F.D)(j||(j=Object(f.a)(["\n    img {\n        position: relative;\n    }\n"]))),ge=function(e){var t=e.isBnbPool,n=e.pool,c=e.stakingTokenBalance,r=e.stakingTokenPrice,a=e.isRemovingStake,i=void 0!==a&&a,o=e.onDismiss,s=n.poolId,l=n.stakingToken,b=n.userData,j=n.stakingLimit,u=n.earningToken,d=Object(H.b)().t,x=Object(xe.a)().theme,p=Object(Oe.b)(s,t).onStake,O=Object(me.b)(s,n.enableEmergencyWithdraw).onUnstake,m=Object(ue.a)(),f=m.toastSuccess,k=m.toastError,v=Object(g.useState)(!1),y=Object(h.a)(v,2),S=y[0],C=y[1],T=Object(g.useState)(""),R=Object(h.a)(T,2),B=R[0],D=R[1],I=Object(g.useState)(!1),P=Object(h.a)(I,2),A=P[0],E=P[1],z=function(){return i?b.stakedBalance:j.gt(0)&&c.gt(j)?j:c},L=B&&Object(U.a)(new w.a(B).times(r).toNumber());Object(g.useEffect)((function(){if(j.gt(0)&&!i){var e=Object(U.d)(new w.a(B),l.decimals);E(e.plus(b.stakedBalance).gt(j))}}),[B,j,b,l,i,E]);var N=function(){var e=Object(le.a)(se.a.mark((function e(){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C(!0),!i){e.next=16;break}return e.prev=2,e.next=5,O(B,l.decimals,(n.userData.canHarvest?"1":"").concat(Object(U.b)(b.stakedBalance,l.decimals).toJSON()));case 5:f("".concat(d("Unstaked"),"!"),d("Your %symbol% earnings have also been harvested to your wallet!",{symbol:u.symbol})),C(!1),o(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),k(d("Canceled"),d("Please try again and confirm the transaction.")),C(!1);case 14:e.next=28;break;case 16:return e.prev=16,e.next=19,p(B,l.decimals);case 19:f("".concat(d("Staked"),"!"),d("Your %symbol% funds have been staked in the pool!",{symbol:l.symbol})),C(!1),o(),e.next=28;break;case 24:e.prev=24,e.t1=e.catch(16),k(d("Canceled"),d("Please try again and confirm the transaction.")),C(!1);case 28:case"end":return e.stop()}}),e,null,[[2,10],[16,24]])})));return function(){return e.apply(this,arguments)}}();return Object(G.jsxs)(F.J,{title:d(i?"Unstake":"Stake in Pool"),onDismiss:o,headerBackground:x.colors.gradients.cardHeader,children:[j.gt(0)&&!i&&Object(G.jsx)(F.R,{color:"secondary",bold:!0,mb:"24px",style:{textAlign:"center"},fontSize:"16px",children:d("Max stake for this pool: %amount% %token%",{amount:Object(U.e)(j,l.decimals,0),token:l.symbol})}),Object(G.jsxs)(F.y,{alignItems:"center",justifyContent:"space-between",mb:"8px",children:[Object(G.jsxs)(F.R,{bold:!0,children:[d(i?"Unstake":"Stake"),":"]}),Object(G.jsxs)(F.y,{alignItems:"center",minWidth:"70px",children:[Object(G.jsx)(fe,{src:"/images/tokens/".concat(l.symbol.toLowerCase(),".png"),width:24,height:24,alt:l.symbol}),Object(G.jsx)(F.R,{ml:"4px",bold:!0,children:l.symbol})]})]}),Object(G.jsx)(F.f,{value:B,onUserInput:function(e){D(e)},currencyValue:"~".concat(L||0," USD"),isWarning:A}),A&&Object(G.jsx)(F.R,{color:"failure",fontSize:"12px",style:{textAlign:"right"},mt:"4px",children:d("Maximum total stake: %amount% %token%",{amount:Object(U.e)(new w.a(j),l.decimals,0),token:l.symbol})}),Object(G.jsx)(F.R,{ml:"auto",color:"textSubtle",fontSize:"12px",mb:"8px",children:d("Balance: %balance%",{balance:Object(U.e)(z(),l.decimals,3)})}),Object(G.jsx)("div",{style:{position:"relative"},children:Object(G.jsx)(F.j,{onClick:function(){return function(e){if(e>0){var t=z().dividedBy(100).multipliedBy(e),n=Object(U.e)(t,l.decimals,l.decimals);D(n)}else D("")}(100)},scale:"sm",style:{position:"absolute",left:"8px",top:"-90px"},mt:"24px",children:"Max"})}),i&&Object(G.jsxs)(F.R,{fontSize:"14px",style:{marginTop:"12px",marginBottom:"-10px",marginLeft:"10px",color:"#AAAAAA"},children:["The ",Object(G.jsx)("u",{children:"amount under lockup"})," will be lost if unstaking while",Object(G.jsx)("br",{}),"the Harvest Lockup is in effect!"]}),Object(G.jsx)(F.j,{isLoading:S,endIcon:S?Object(G.jsx)(F.d,{spin:!0,color:"currentColor"}):null,onClick:N,disabled:!B||0===parseFloat(B)||A,mt:"24px",children:d(S?"Confirming":"Confirm")}),!i&&Object(G.jsx)(he,{external:!0,href:Y.c.concat("/#/swap?inputCurrency=USDC&outputCurrency=orbitrium&exactAmount=1"),children:Object(G.jsx)(F.j,{width:"100%",mt:"8px",variant:"secondary",children:d("Buy %symbol%",{symbol:l.symbol})})})]})},ke=function(e){var t=e.pool,n=e.stakingTokenBalance,c=e.stakedBalance,r=e.isBnbPool,a=e.isStaked,i=e.isLoading,o=void 0!==i&&i,s=t.stakingToken,l=t.stakingLimit,b=t.isFinished,j=t.userData,u=Object(H.b)().t,d=Object(U.c)(c,s.decimals),x=Object(P.b)(s.symbol),p=x&&x.toNumber(),O=p&&Object(U.c)(c.multipliedBy(p),s.decimals).toFixed(2),m=2;d>0&&d<1&&(m=d.toFixed(18).match(/^[0.]+/)[0].length);var f=d.toFixed(m),g=Object(F.bb)(Object(G.jsx)(pe,{tokenSymbol:s.symbol})),k=Object(h.a)(g,1)[0],v=Object(F.bb)(Object(G.jsx)(ge,{isBnbPool:r,pool:t,stakingTokenBalance:n,stakingTokenPrice:p})),y=Object(h.a)(v,1)[0],w=Object(F.bb)(Object(G.jsx)(ge,{stakingTokenBalance:n,isBnbPool:r,pool:t,stakingTokenPrice:p,isRemovingStake:!0})),S=Object(h.a)(w,1)[0],C=Object(F.cb)(u("You\u2019ve already staked the maximum amount you can stake in this pool!"),{placement:"bottom"}),T=C.targetRef,R=C.tooltip,B=C.tooltipVisible,D=l.gt(0)&&j.stakedBalance.gte(l);return Object(G.jsx)(F.y,{flexDirection:"column",children:o?Object(G.jsx)(F.P,{width:"100%",height:"52px"}):a?Object(G.jsxs)(F.y,{justifyContent:"space-between",alignItems:"center",children:[Object(G.jsx)(F.y,{flexDirection:"column",children:Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(K.a,{bold:!0,fontSize:"20px",decimals:m,value:f}),Object(G.jsx)(F.R,{fontSize:"14px",color:"textSubtle",style:{marginTop:"-6px"},children:Object(G.jsx)(K.a,{fontSize:"14px",color:"textSubtle",decimals:2,value:O,prefix:"~",unit:" USD"})})]})}),Object(G.jsxs)(F.y,{children:[Object(G.jsx)(F.C,{variant:"secondary",onClick:S,mr:"6px",style:{marginTop:"4px"},children:Object(G.jsx)(F.I,{color:"primary",width:"24px"})}),D?Object(G.jsx)("span",{ref:T,children:Object(G.jsx)(F.C,{variant:"secondary",disabled:!0,style:{marginTop:"4px"},children:Object(G.jsx)(F.a,{color:"textDisabled",width:"24px",height:"24px"})})}):Object(G.jsx)(F.C,{variant:"secondary",onClick:n.gt(0)?y:k,disabled:b,style:{marginTop:"4px"},children:Object(G.jsx)(F.a,{color:"primary",width:"24px",height:"24px"})})]}),B&&R]}):Object(G.jsx)(F.j,{disabled:b,style:{marginTop:"4px",marginBottom:"-4px"},onClick:n.gt(0)?y:k,children:u("Stake")})})},ve=n(708),ye=function(e){var t=e.canHarvest,n=e.earnings,c=e.earningToken,r=e.poolId,a=e.isBnbPool,i=e.isLoading,o=void 0!==i&&i,s=Object(U.e)(n,c.decimals,3),l=Object(P.b)(c.symbol),b=l&&l.toNumber(),j=b&&Object(U.e)(n.multipliedBy(b),c.decimals,2),u=Object(ve.b)(r,a).onReward,d=Object(g.useState)(!1),x=Object(h.a)(d,2),p=x[0],O=x[1],m=n.toNumber()>0,f=Object(ue.a)(),k=f.toastSuccess,v=f.toastError;return Object(G.jsx)(F.y,{flexDirection:"column",mb:"16px",children:Object(G.jsxs)(F.y,{justifyContent:"space-between",alignItems:"center",children:[Object(G.jsx)(F.y,{flexDirection:"column",children:o?Object(G.jsx)(F.P,{width:"80px",height:"48px"}):Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(K.a,{bold:!0,fontSize:"20px",decimals:m?3:0,value:m?s:0}),Object(G.jsxs)(F.R,{fontSize:"14px",color:"textSubtle",style:{marginTop:"-6px"},children:["~$",m?Object(G.jsx)(K.a,{display:"inline",fontSize:"14px",color:"textSubtle",decimals:2,value:j}):"0"]})]})}),Object(G.jsx)(F.y,{children:Object(G.jsx)("div",{children:Object(G.jsx)(F.j,{disabled:"0"===s||!t||p,style:{display:"block",width:"100%",marginTop:"4px"},onClick:Object(le.a)(se.a.mark((function e(){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.prev=1,e.next=4,u();case 4:e.sent?k("Confirmed transaction"):v("Error","Please try again. Confirm the transaction and make sure you are paying enough gas!"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),O(!1),v("Error",null===e.t0||void 0===e.t0?void 0:e.t0.message);case 12:return e.prev=12,O(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])}))),children:"Harvest"})})})]})})},we=Object(E.e)(F.R)(u||(u=Object(f.a)(["\n  display: inline;\n"]))),Se=function(e){var t=e.pool,n=e.stakedBalance,c=t.poolId,r=t.stakingToken,a=t.earningToken,i=t.harvest,o=t.poolCategory,s=t.userData,l=o===ie.a.BINANCE,b=Object(H.b)().t,j=(null===s||void 0===s?void 0:s.allowance)?new w.a(s.allowance):M.b,u=(null===s||void 0===s?void 0:s.stakingTokenBalance)?new w.a(s.stakingTokenBalance):M.b,d=!!(null===s||void 0===s?void 0:s.canHarvest)&&s.canHarvest,x=(null===s||void 0===s?void 0:s.pendingReward)?new w.a(s.pendingReward):M.b,p=!j.gt(0)&&!l,O=n.gt(0),m=!s;return Object(G.jsx)(F.y,{flexDirection:"column",children:Object(G.jsxs)(F.y,{flexDirection:"column",children:[i&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(F.h,{display:"inline",children:[Object(G.jsx)(we,{color:"secondary",textTransform:"uppercase",bold:!0,fontSize:"12px",children:"".concat(a.symbol," ")}),Object(G.jsx)(we,{color:"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:d?"Earned":"Lockup"})]}),Object(G.jsx)(ye,{canHarvest:d,earnings:x,earningToken:a,poolId:c,isBnbPool:l,isLoading:m})]}),Object(G.jsxs)(F.h,{display:"inline",children:[Object(G.jsxs)(we,{color:O?"secondary":"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:[O?r.symbol:b("Stake")," "]}),Object(G.jsx)(we,{color:O?"textSubtle":"secondary",textTransform:"uppercase",bold:!0,fontSize:"12px",children:O?b("Staked"):"".concat(r.symbol)})]}),p?Object(G.jsx)(de,{pool:t,isLoading:m}):Object(G.jsx)(ke,{isLoading:m,pool:t,stakingTokenBalance:u,stakedBalance:n,isBnbPool:l,isStaked:O})]})})},Fe=function(e){var t=e.pool,n=e.account,c=t.poolId,r=t.stakingToken,a=t.earningToken,i=t.isFinished,o=t.userData,s=Object(H.b)().t,l=(null===o||void 0===o?void 0:o.stakedBalance)?new w.a(o.stakedBalance):M.b,b=((null===o||void 0===o?void 0:o.nextHarvestUntil)?new w.a(o.nextHarvestUntil):M.b).toString(),j=l.gt(0),u=!(!j||!(null===o||void 0===o?void 0:o.canHarvest))&&o.canHarvest,d="0h 00m";if(!j&&t.harvestInterval)d=(Math.round(t.harvestInterval/60/60*10)/10).toString().concat(" Hours");else if(void 0!==b){var x=parseInt(b)-Math.ceil(+new Date/1e3);x<0&&(x=0);var p=Math.floor(x/3600),O=Math.ceil((x-3600*p)/60);d=p.toString().concat("h ").concat(O.toString().padStart(2,"0")).concat("m")}var m=Object(F.cb)("Time left until you can harvest",{placement:"top",trigger:"click",tooltipOffset:[0,4]}),h=m.tooltipVisible,f=m.targetRef,g=m.tooltip;return Object(G.jsx)(W,{isFinished:i&&0!==c,ribbon:i&&Object(G.jsx)(F.r,{variantColor:"textDisabled",text:s("Finished")}),isPromotedPool:a.symbol===r.symbol,children:Object(G.jsxs)(_,{children:[Object(G.jsx)(ae,{isStaking:j,earningTokenSymbol:a.symbol,stakingTokenSymbol:r.symbol,multiplier:t.tokenPerBlock.concat("X"),isFinished:i&&0!==c}),Object(G.jsxs)(F.o,{children:[Object(G.jsx)(Q,{pool:t}),Object(G.jsxs)(F.y,{justifyContent:"space-between",children:[Object(G.jsxs)(F.R,{children:[s("Earn"),":"]}),Object(G.jsx)(F.R,{bold:!0,children:"orbitrium"})]}),Object(G.jsxs)(F.y,{justifyContent:"space-between",children:[Object(G.jsx)(F.R,{children:"Deposit Fee:"}),Object(G.jsxs)(F.R,{bold:!0,children:[t.depositFee,"%"]})]}),Object(G.jsxs)(F.y,{justifyContent:"space-between",children:[Object(G.jsxs)(F.R,{children:[Object(G.jsx)("span",{ref:f,children:Object(G.jsx)(F.B,{color:"textSubtle",style:{cursor:"pointer",position:"relative",top:"5px",marginRight:"3px"}})}),h&&g,"Harvest Lockup:"]}),void 0!==n&&Object(G.jsx)(F.R,{bold:!0,style:{position:"relative",top:"2px"},children:u?"0h 00m":d}),void 0===n&&Object(G.jsx)(F.R,{bold:!0,style:{position:"relative",top:"2px"},children:d}),!1]}),Object(G.jsx)(F.y,{mt:"24px",flexDirection:"column",children:n?Object(G.jsx)(Se,{pool:t,stakedBalance:l}):Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(F.R,{mb:"10px",textTransform:"uppercase",fontSize:"12px",color:"textSubtle",bold:!0,children:s("Start earning")}),Object(G.jsx)(N.a,{})]})})]}),Object(G.jsx)(ne,{pool:t,account:n})]})})},Ce=n(117),Te=E.e.div(d||(d=Object(f.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  position: relative;\n\n  justify-content: space-between;\n  flex-direction: column;\n  margin-bottom: 32px;\n\n  "," {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 16px 0;\n    margin-bottom: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.xs})),Re=E.e.div(x||(x=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n\n  "," {\n    margin-left: 8px;\n  }\n"])),F.R),Be=E.e.div(p||(p=Object(f.a)(["\n  flex-wrap: wrap;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  > div {\n    padding: 8px 0px;\n  }\n\n  "," {\n    justify-content: flex-start;\n    width: auto;\n\n    > div {\n      padding: 0;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),De=E.e.div(O||(O=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  a {\n    padding-left: 12px;\n    padding-right: 12px;\n  }\n\n  "," {\n    margin-left: 16px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Ie=function(e){var t=e.stakedOnly,n=e.setStakedOnly,c=e.hasStakeInFinishedPools,r=Object(v.h)(),a=r.url,i=r.isExact;return Object(G.jsx)(Te,{children:Object(G.jsxs)(Be,{style:{marginLeft:"auto",marginRight:"auto",marginBottom:"1em"},children:[Object(G.jsxs)(Re,{children:[Object(G.jsx)(F.V,{checked:t,onChange:function(){return n((function(e){return!e}))},scale:"sm"}),Object(G.jsx)(F.R,{children:" Staked only"})]}),Object(G.jsx)(De,{children:Object(G.jsxs)(F.k,{activeIndex:i?0:1,scale:"sm",variant:"subtle",children:[Object(G.jsx)(F.l,{as:Ce.a,to:"".concat(a),children:"Active"}),Object(G.jsx)(F.L,{show:c,children:Object(G.jsx)(F.l,{as:Ce.a,to:"".concat(a,"/history"),children:"Inactive"})})]})})]})})},Pe=E.e.div(m||(m=Object(f.a)(["\n    font-size: 20px;\n    text-align: center;\n    padding: 1em;\n    margin: 15px auto 30px;\n    background: ",";\n    color: ",";\n    border-radius: 35px;\n    a {\n        color: ","\n    }\n"])),(function(e){return e.theme.isDark?"linear-gradient(90deg, rgba(109,89,122,1) 80%, rgba(0,0,0,0) 100%)":"linear-gradient(90deg, rgba(31,199,212,1) 50%, rgba(255,255,255,0) 100%)"}),(function(e){return e.theme.isDark?e.theme.colors.text:"#FFF"}),(function(e){return e.theme.isDark?e.theme.colors.warning:e.theme.colors.text}));t.default=function(){var e=Object(v.h)().path,t=Object(S.c)().account,n=Object(P.f)(t),c=I(!1,"pancake_pool_staked"),r=Object(h.a)(c,2),a=r[0],i=r[1],o=Object(g.useState)(12),s=Object(h.a)(o,2),l=s[0],b=s[1],j=Object(g.useState)(!1),u=Object(h.a)(j,2),d=u[0],x=u[1],p=Object(g.useRef)(null),O=(new Date).getTime()/1e3>parseInt(D.a.orbitrium.projectLink),m=Object(g.useMemo)((function(){return B()(n,(function(e){return e.isFinished}))}),[n]),f=Object(h.a)(m,2),k=f[0],y=f[1],C=Object(g.useMemo)((function(){return k.filter((function(e){return e.userData&&new w.a(e.userData.stakedBalance).isGreaterThan(0)}))}),[k]),R=Object(g.useMemo)((function(){return y.filter((function(e){return e.userData&&new w.a(e.userData.stakedBalance).isGreaterThan(0)}))}),[y]),E=C.length>0;return Object(g.useEffect)((function(){d||(new IntersectionObserver((function(e){Object(h.a)(e,1)[0].isIntersecting&&b((function(e){return e+12}))}),{rootMargin:"0px",threshold:1}).observe(p.current),x(!0))}),[d]),Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(L.a,{children:Object(G.jsx)(F.z,{scale:"lg",color:"text",style:{textAlign:"center"},children:"Stake tokens to earn orbitrium"})}),Object(G.jsxs)(z.a,{style:{paddingTop:"1em"},children:[!O&&Object(G.jsxs)(Pe,{children:["Pools start ",Object(G.jsx)("a",{href:"https://www.timeanddate.com/countdown/generic?iso=".concat(new Date(1e3*parseInt(D.a.orbitrium.projectLink)).toISOString(),"&font=sanserif&p0=1440&csz=1&msg=orbitrium pools start"),target:"_blank",rel:"noreferrer",children:new Date(1e3*parseInt(D.a.orbitrium.projectLink)).toUTCString()})]}),Object(G.jsx)(Ie,{stakedOnly:a,setStakedOnly:i,hasStakeInFinishedPools:E}),Object(G.jsxs)(A.a,{children:[Object(G.jsx)(v.a,{exact:!0,path:"".concat(e),children:Object(G.jsx)(G.Fragment,{children:a?T()(R,["sortOrder"]).slice(0,l).map((function(e){return Object(G.jsx)(Fe,{pool:e,account:t},e.poolId)})):T()(y,["sortOrder"]).slice(0,l).map((function(e){return Object(G.jsx)(Fe,{pool:e,account:t},e.poolId)}))})}),Object(G.jsx)(v.a,{path:"".concat(e,"/history"),children:a?T()(C,["sortOrder"]).slice(0,l).map((function(e){return Object(G.jsx)(Fe,{pool:e,account:t},e.poolId)})):T()(k,["sortOrder"]).slice(0,l).map((function(e){return Object(G.jsx)(Fe,{pool:e,account:t},e.poolId)}))})]}),Object(G.jsx)("div",{ref:p})]})]})}},673:function(e,t,n){"use strict";var c=n(12),r=(n(0),n(32)),a=n(143),i=n(98),o=n(13);t.a=function(e){var t=Object(i.b)().t,n=Object(a.a)(),s=n.login,l=n.logout,b=Object(r.db)(s,l).onPresentConnectModal;return Object(o.jsx)(r.j,Object(c.a)(Object(c.a)({onClick:b},e),{},{children:t("Unlock Wallet")}))}},674:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var c,r,a=n(12),i=n(140),o=n(72),s=(n(0),n(7)),l=n(32),b=n(223),j=n(13),u=Object(s.e)(l.h)(c||(c=Object(o.a)(["\n  background: ",";\n"])),(function(e){var t=e.theme;return e.background||t.colors.gradients.bubblegum})),d=Object(s.e)(b.a)(r||(r=Object(o.a)(["\n  padding-top: 32px;\n  padding-bottom: 32px;\n"]))),x=function(e){var t=e.background,n=e.children,c=Object(i.a)(e,["background","children"]);return Object(j.jsx)(u,Object(a.a)(Object(a.a)({background:t},c),{},{children:Object(j.jsx)(d,{children:n})}))}},678:function(e,t,n){"use strict";var c=n(12),r=n(140),a=n(0),i=n(685),o=n.n(i),s=n(32),l=n(13);t.a=function(e){var t=e.value,n=e.color,i=void 0===n?"text":n,b=e.decimals,j=void 0===b?3:b,u=e.isDisabled,d=void 0!==u&&u,x=e.unit,p=e.prefix,O=Object(r.a)(e,["value","color","decimals","isDisabled","unit","prefix"]),m=Object(a.useRef)(0);Object(a.useEffect)((function(){m.current=parseFloat(t)}),[t]);var h=Boolean(t&&p),f=Boolean(t&&x);return Object(l.jsxs)(s.R,Object(c.a)(Object(c.a)({color:d?"textDisabled":i},O),{},{children:[h&&Object(l.jsx)("span",{children:p}),null===t.toString().match(/[^0-9.]+/)&&Object(l.jsx)(o.a,{start:m.current,end:parseFloat(t),decimals:j,duration:1,separator:","}),null!==t.toString().match(/[^0-9.]+/)&&t,f&&Object(l.jsx)("span",{children:x})]}))}},703:function(e,t,n){"use strict";var c,r=n(72),a=n(7).e.div(c||(c=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 320px;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"])));t.a=a},704:function(e,t,n){"use strict";var c=n(2),r=n.n(c),a=n(15),i=n(39),o=n(10),s=n.n(o),l=n(0),b=n(26),j=n(17),u=n(41),d=n(139);t.a=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(d.a)().slowRefresh;return Object(l.useEffect)((function(){(function(){var e=Object(a.a)(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[{address:Object(j.d)(),name:"orbitriumPerBlock"}],e.next=3,Object(b.a)(u,t);case 3:n=e.sent,a=n.map((function(e){return new s.a(e).toJSON()})),c(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),n}},705:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l}));var c=n(10),r=n.n(c),a=n(73),i=n(25),o=n(219),s=function(e,t,n,c){var s=(void 0===c?i.b:new r.a(parseFloat(o.a.utils.formatEther(c)))).times(a.d).times(e).times(t).div(n).times(100);return s.isNaN()||!s.isFinite()?null:s.toNumber()},l=function(e,t,n,c){var s=(void 0===c?i.b:new r.a(parseFloat(o.a.utils.formatEther(c)))).times(a.d).times(e).times(t).div(n).times(100);return s.isNaN()||!s.isFinite()?null:s.toNumber()}},706:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d}));var c=n(2),r=n.n(c),a=n(15),i=n(0),o=n(82),s=n(99),l=n(100),b=n(676),j=n(670),u=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(s.b)(),c=Object(o.c)(),u=c.account,d=Object(j.b)(),x=Object(j.f)(e),p=Object(i.useCallback)(function(){var c=Object(a.a)(r.a.mark((function c(a,i){var o;return r.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(o=0,!(e<100)){c.next=7;break}return c.next=4,Object(b.m)(d,e,a,u,i);case 4:o=c.sent,c.next=16;break;case 7:if(!t){c.next=13;break}return c.next=10,Object(b.h)(x,a,u);case 10:o=c.sent,c.next=16;break;case 13:return c.next=15,Object(b.g)(x,a,i,u);case 15:o=c.sent;case 16:return n(Object(l.l)(e,u)),n(Object(l.i)(e,u)),c.abrupt("return",o);case 19:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}(),[u,n,t,d,x,e]);return{onStake:p}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(s.b)(),c=Object(o.c)(),u=c.account,d=Object(j.j)(e),x=Object(i.useCallback)(function(){var e=Object(a.a)(r.a.mark((function e(c,a){var i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=0,!t){e.next=7;break}return e.next=4,Object(b.h)(d,c,u);case 4:i=e.sent,e.next=10;break;case 7:return e.next=9,Object(b.q)(d,c,u,a);case 9:i=e.sent;case 10:return n(Object(l.e)(u)),e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[u,n,t,d]);return{onStake:x}};t.a=function(e){var t=Object(s.b)(),n=Object(o.c)().account,c=Object(j.b)();return{onStake:Object(i.useCallback)(function(){var i=Object(a.a)(r.a.mark((function a(i){var o;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(b.m)(c,e,i,n);case 2:return o=r.sent,t(Object(l.a)(n)),r.abrupt("return",o);case 5:case"end":return r.stop()}}),a)})));return function(e){return i.apply(this,arguments)}}(),[n,t,c,e])}}},707:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return d}));var c=n(2),r=n.n(c),a=n(15),i=n(0),o=n(82),s=n(99),l=n(100),b=n(676),j=n(670),u=function(e,t,n){var c=Object(s.b)(),u=Object(o.c)().account,d=Object(j.j)(e);return{onUnstake:Object(i.useCallback)(function(){var e=Object(a.a)(r.a.mark((function e(a,i){var o,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((o=parseFloat(a)/t)>.99*n)){e.next=7;break}return e.next=4,Object(b.s)(d,u);case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,Object(b.r)(d,o,u,i);case 9:e.t0=e.sent;case 10:return s=e.t0,c(Object(l.e)(u)),e.abrupt("return",s);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[u,c,d,t,n])}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(s.b)(),c=Object(o.c)(),u=c.account,d=Object(j.b)(),x=Object(j.f)(e),p=Object(i.useCallback)(function(){var c=Object(a.a)(r.a.mark((function c(a,i,o){var s;return r.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(!(e<100)){c.next=13;break}if(!(parseFloat(a)>.99*parseFloat(o)&&parseFloat(a)<=parseFloat(o)/.99)){c.next=7;break}return c.next=4,Object(b.o)(d,e,u);case 4:c.t0=c.sent,c.next=10;break;case 7:return c.next=9,Object(b.n)(d,e,a,u,i);case 9:c.t0=c.sent;case 10:s=c.t0,c.next=22;break;case 13:if(!t){c.next=19;break}return c.next=16,Object(b.f)(x,u);case 16:s=c.sent,c.next=22;break;case 19:return c.next=21,Object(b.i)(x,a,i,u);case 21:s=c.sent;case 22:return n(Object(l.l)(e,u)),n(Object(l.i)(e,u)),n(Object(l.k)(e,u)),n(Object(l.j)(e,u)),c.abrupt("return",s);case 27:case"end":return c.stop()}}),c)})));return function(e,t,n){return c.apply(this,arguments)}}(),[u,n,t,d,x,e]);return{onUnstake:p}};t.a=function(e){var t=Object(s.b)(),n=Object(o.c)().account,c=Object(j.b)();return{onUnstake:Object(i.useCallback)(function(){var i=Object(a.a)(r.a.mark((function a(i,o){var s;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(parseFloat(i)>.99*parseFloat(o)&&parseFloat(i)<=parseFloat(o)/.99)){r.next=6;break}return r.next=3,Object(b.o)(c,e,n);case 3:r.t0=r.sent,r.next=9;break;case 6:return r.next=8,Object(b.n)(c,e,i,n);case 8:r.t0=r.sent;case 9:return s=r.t0,t(Object(l.a)(n)),r.abrupt("return",s);case 12:case"end":return r.stop()}}),a)})));return function(e,t){return i.apply(this,arguments)}}(),[n,t,c,e])}}},708:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return x}));n(67);var c=n(2),r=n.n(c),a=n(15),i=n(0),o=n(82),s=n(99),l=n(100),b=n(676),j=n(670),u=function(e){var t=Object(s.b)(),n=Object(o.c)().account,c=Object(j.b)();return{onReward:Object(i.useCallback)(Object(a.a)(r.a.mark((function a(){var i;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(b.e)(c,e,n);case 2:return i=r.sent,t(Object(l.a)(n)),r.abrupt("return",i);case 5:case"end":return r.stop()}}),a)}))),[n,t,e,c])}},d=function(e){var t=Object(s.b)(),n=Object(o.c)().account,c=Object(j.j)(e);return{onReward:Object(i.useCallback)(Object(a.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.p)(c,n);case 2:return a=e.sent,t(Object(l.e)(n)),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),[n,t,c])}},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(s.b)(),c=Object(o.c)(),u=c.account,d=Object(j.f)(e),x=Object(j.b)(),p=Object(i.useCallback)(Object(a.a)(r.a.mark((function c(){var a;return r.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(a=0,!(e<100)){c.next=7;break}return c.next=4,Object(b.e)(x,e,u);case 4:a=c.sent,c.next=16;break;case 7:if(!t){c.next=13;break}return c.next=10,Object(b.k)(d,u);case 10:a=c.sent,c.next=16;break;case 13:return c.next=15,Object(b.j)(d,u);case 15:a=c.sent;case 16:return n(Object(l.k)(e,u)),n(Object(l.j)(e,u)),n(Object(l.i)(e,u)),c.abrupt("return",a);case 20:case"end":return c.stop()}}),c)}))),[u,n,t,x,d,e]);return{onReward:p}}},709:function(e,t,n){"use strict";var c,r,a=n(72),i=(n(0),n(7)),o=n(32),s=n(98),l=n(710),b=n(13),j=i.e.div(c||(c=Object(a.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),u=i.e.div(r||(r=Object(a.a)(["\n  margin-bottom: '10px';\n"])));t.a=function(e){var t=e.onDismiss,n=e.tokenPrice,c=e.apr,r=e.linkLabel,a=e.linkHref,i=e.earningTokenSymbol,d=void 0===i?"orbitrium":i,x=e.roundingDecimals,p=void 0===x?2:x,O=e.compoundFrequency,m=void 0===O?1:O,h=e.performanceFee,f=void 0===h?0:h,g=Object(s.b)().t,k=1e3/n,v=Object(l.b)({numberOfDays:1,farmApr:c,tokenPrice:n,roundingDecimals:p,compoundFrequency:m,performanceFee:f}),y=Object(l.b)({numberOfDays:7,farmApr:c,tokenPrice:n,roundingDecimals:p,compoundFrequency:m,performanceFee:f}),w=Object(l.b)({numberOfDays:30,farmApr:c,tokenPrice:n,roundingDecimals:p,compoundFrequency:m,performanceFee:f}),S=Object(l.b)({numberOfDays:365,farmApr:c,tokenPrice:n,roundingDecimals:p,compoundFrequency:m,performanceFee:f});return Object(b.jsxs)(o.J,{title:g("ROI"),onDismiss:t,children:[Object(b.jsxs)(j,{children:[Object(b.jsx)(u,{children:Object(b.jsx)(o.R,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:g("Timeframe")})}),Object(b.jsx)(u,{children:Object(b.jsx)(o.R,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",style:{textAlign:"right"},children:g("ROI")})}),Object(b.jsx)(u,{children:Object(b.jsx)(o.R,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",style:{textAlign:"right"},children:g("%symbol% per $1000",{symbol:d})})}),Object(b.jsx)(u,{children:Object(b.jsx)(o.R,{children:g("%num%d",{num:1})})}),Object(b.jsx)(u,{children:Object(b.jsxs)(o.R,{style:{textAlign:"right"},children:[parseFloat(Object(l.a)({amountEarned:v,amountInvested:k}).toFixed(p))," %"]})}),Object(b.jsx)(u,{children:Object(b.jsx)(o.R,{style:{textAlign:"right"},children:v})}),Object(b.jsx)(u,{children:Object(b.jsx)(o.R,{children:g("%num%d",{num:7})})}),Object(b.jsx)(u,{children:Object(b.jsxs)(o.R,{style:{textAlign:"right"},children:[parseFloat(Object(l.a)({amountEarned:y,amountInvested:k}).toFixed(p))," %"]})}),Object(b.jsx)(u,{children:Object(b.jsx)(o.R,{style:{textAlign:"right"},children:y})}),Object(b.jsx)(u,{children:Object(b.jsx)(o.R,{children:g("%num%d",{num:30})})}),Object(b.jsx)(u,{children:Object(b.jsxs)(o.R,{style:{textAlign:"right"},children:[parseFloat(Object(l.a)({amountEarned:w,amountInvested:k}).toFixed(p))," %"]})}),Object(b.jsx)(u,{children:Object(b.jsx)(o.R,{style:{textAlign:"right"},children:w})}),Object(b.jsx)(u,{children:Object(b.jsx)(o.R,{children:g("365d(APY)")})}),Object(b.jsx)(u,{children:Object(b.jsxs)(o.R,{style:{textAlign:"right"},children:[parseFloat(Object(l.a)({amountEarned:S,amountInvested:k}).toFixed(p))," %"]})}),Object(b.jsx)(u,{children:Object(b.jsx)(o.R,{style:{textAlign:"right"},children:S})})]}),Object(b.jsxs)(o.h,{mb:"28px",children:[Object(b.jsxs)(o.R,{fontSize:"12px",color:"textSubtle",style:{textAlign:"center"},children:["Calculated based on current rates. Compounding ",1===m?"once per day":m.toLocaleString().concat(" times per day"),".",Object(b.jsx)("br",{}),"Rates are estimates provided for your convenience only and by",Object(b.jsx)("br",{}),"no means do they represent guaranteed returns."]}),f>0&&Object(b.jsx)(o.R,{mt:"14px",fontSize:"12px",color:"textSubtle",style:{textAlign:"center"},children:g("All estimated rates take into account this pool\u2019s %fee%% performance fee",{fee:f})})]}),Object(b.jsx)(o.y,{justifyContent:"center",children:Object(b.jsx)(o.G,{href:a,children:r})})]})}},710:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return r}));var c=function(e){var t=e.numberOfDays,n=e.farmApr,c=e.tokenPrice,r=e.roundingDecimals,a=void 0===r?2:r,i=e.compoundFrequency,o=void 0===i?1:i,s=e.performanceFee,l=void 0===s?0:s,b=365*o,j=n/100;l&&(j=(n-n/100*l)/100);var u=t/365,d=1e3/c,x=d*Math.pow(1+j/b,b*u);return parseFloat((x-d).toFixed(a))},r=function(e){return e.amountEarned/e.amountInvested*100}}}]);