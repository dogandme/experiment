(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[937],{5065:function(e,t,r){Promise.resolve().then(r.bind(r,8030)),Promise.resolve().then(r.bind(r,5680))},8030:function(e,t,r){"use strict";var n=r(7437),i=r(874),s=r(2265);t.default=()=>{let e=(0,s.useRef)(null),t=(0,s.useRef)(null),[r,l]=(0,s.useState)(null);return(0,i.z)(()=>{(async()=>{if(!e.current||!t.current)return;let r=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1});e.current.srcObject=r})()},[]),(0,n.jsxs)("section",{children:[(0,n.jsx)("video",{ref:e,autoPlay:!0,playsInline:!0,style:{width:"100%"}}),(0,n.jsx)("button",{onClick:()=>{if(!e.current||!t.current)return;let r=t.current,n=e.current,i=r.getContext("2d");i&&(r.width=n.videoWidth,r.height=n.videoHeight,i.drawImage(n,0,0,r.width,r.height),l(r.toDataURL("image/png")))},style:{backgroundColor:"gray",padding:"1rem"},children:"Capture Photo"}),(0,n.jsx)("canvas",{ref:t,style:{display:"none"}}),r&&(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"캡쳐된 이미지"}),(0,n.jsx)("img",{src:r,alt:"Captured"})]})]})}},5680:function(e,t,r){"use strict";r.d(t,{default:function(){return v}});var n=r(7437),i=r(2265);let s=(0,i.forwardRef)(function(e,t){return(0,n.jsx)("video",{...e,ref:t,autoPlay:!0,playsInline:!0,style:{display:e.isCaptured?"none":"block"}})}),l=(0,i.forwardRef)(function(e,t){return(0,n.jsx)("canvas",{...e,ref:t,style:{display:e.isCaptured?"block":"none"}})});var a=e=>{let{children:t,onClick:r}=e;return(0,n.jsx)("button",{style:{backgroundColor:"gray",padding:"1rem"},onClick:r,children:t})},d=r(874);let u=()=>{let[e,t]=(0,i.useState)(""),[r,n]=(0,i.useState)(!1),s=(0,i.useRef)(null),l=(0,i.useRef)(null);return(0,d.z)(()=>{(async()=>{if(null!==s.current)try{let e=await navigator.mediaDevices.getUserMedia({video:!0});s.current.srcObject=e}catch(e){console.error(e)}})()},[]),{photoUrl:e,isCaptured:r,streamingRef:s,photoRef:l,handleCapture:()=>{if(!l.current||!s.current)return;let{current:e}=s,{current:r}=l;r.width=e.videoWidth,r.height=e.videoHeight;let i=r.getContext("2d");i&&(i.drawImage(e,0,0,r.width,r.height),t(r.toDataURL("image/png")),n(!0))},handleReCapture:()=>{t(""),n(!1)}}};var o=r(231),c=r.n(o),h=()=>(0,n.jsx)(c(),{href:"../",children:"back"});let f={display:"flex",justifyContent:"space-between",padding:"1rem",border:"1px solid white"};var p=e=>{let{photoUrl:t,isCaptured:r}=e;return(0,n.jsxs)("div",{style:f,children:[(0,n.jsx)(h,{}),(0,n.jsx)("a",{href:t,download:"저장 될 파일 이름.jpg",style:{display:r?"block":"none"},children:"Download"})]})};let x={border:"1px solid white",minWidth:"400px",minHeight:"600px"},g={display:"flex",justifyContent:"center",margin:"10px 0"};var v=()=>{let{photoUrl:e,isCaptured:t,streamingRef:r,photoRef:i,handleCapture:d,handleReCapture:o}=u();return(0,n.jsxs)("div",{style:x,children:[(0,n.jsx)(p,{photoUrl:e,isCaptured:t}),(0,n.jsxs)("div",{children:[(0,n.jsx)(s,{ref:r,isCaptured:t}),(0,n.jsx)(l,{ref:i,isCaptured:t})]}),(0,n.jsx)("div",{style:g,children:t?(0,n.jsx)(a,{onClick:o,children:"다시 촬영"}):(0,n.jsx)(a,{onClick:d,children:"사진 찍기!"})})]})}},874:function(e,t,r){"use strict";r.d(t,{z:function(){return i}});var n=r(2265);let i=(e,t)=>(0,n.useEffect)(()=>{e()},t)}},function(e){e.O(0,[231,971,23,744],function(){return e(e.s=5065)}),_N_E=e.O()}]);