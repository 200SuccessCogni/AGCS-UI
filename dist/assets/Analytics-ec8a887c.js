import{g as V,d as z,V as H,s as K,f as w,l as J,W as M,b as x,m as Q,_ as Z,j as e,o as tt,q as et,r as U,i as O,B as d,T as h,u as at,G as rt,y as k,X as ot}from"./index-8f45885e.js";import{R as nt}from"./ReviewForm-5840bca7.js";import{c as R,r as st}from"./shared.service-6180cc91.js";import{L as it}from"./index-3edf5da6.js";import{C as lt}from"./auto-1f95ca72.js";import{G as m}from"./Grid-42d30c92.js";import"./useFormControl-c11f480c.js";import"./SwitchBase-2550e058.js";function dt(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function ct(t){return parseFloat(t)}function ht(t){return V("MuiSkeleton",t)}z("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const ut=["animation","className","component","height","style","variant","width"];let _=t=>t,$,F,I,L;const gt=t=>{const{classes:a,variant:n,animation:r,hasChildren:c,width:p,height:f}=t;return et({root:["root",n,r,c&&"withChildren",c&&!p&&"fitContent",c&&!f&&"heightAuto"]},ht,a)},mt=H($||($=_`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),pt=H(F||(F=_`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),xt=K("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:n}=t;return[a.root,a[n.variant],n.animation!==!1&&a[n.animation],n.hasChildren&&a.withChildren,n.hasChildren&&!n.width&&a.fitContent,n.hasChildren&&!n.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const n=dt(t.shape.borderRadius)||"px",r=ct(t.shape.borderRadius);return w({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:J(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${n}/${Math.round(r/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&M(I||(I=_`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),mt),({ownerState:t,theme:a})=>t.animation==="wave"&&M(L||(L=_`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),pt,(a.vars||a).palette.action.hover)),ft=x.forwardRef(function(a,n){const r=Q({props:a,name:"MuiSkeleton"}),{animation:c="pulse",className:p,component:f="span",height:v,style:B,variant:S="text",width:T}=r,C=Z(r,ut),j=w({},r,{animation:c,component:f,variant:S,hasChildren:!!C.children}),l=gt(j);return e.jsx(xt,w({as:f,ref:n,className:tt(l.root,p),ownerState:j},C,{style:w({width:T,height:v},B)}))}),bt=ft;var A={},yt=O;Object.defineProperty(A,"__esModule",{value:!0});var E=A.default=void 0,vt=yt(U()),Ct=e,jt=(0,vt.default)((0,Ct.jsx)("path",{d:"m16 18 2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"}),"TrendingDown");E=A.default=jt;var W={},kt=O;Object.defineProperty(W,"__esModule",{value:!0});var N=W.default=void 0,wt=kt(U()),Rt=e,_t=(0,wt.default)((0,Rt.jsx)("path",{d:"m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"}),"TrendingUp");N=W.default=_t;function P(t){return e.jsxs(d,{sx:{backgroundColor:t.bgColor,borderRadius:"1rem",p:2},children:[e.jsx(h,{variant:"caption",color:"text.primary",children:t.headerTitle}),e.jsxs(d,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[!t.contentText&&e.jsx(bt,{variant:"rounded",width:210,height:60}),!!t.contentText&&e.jsx(h,{variant:"h4",color:"text.primary",fontWeight:500,children:t.contentText}),e.jsx(d,{sx:{backgroundColor:t.iconBgColor,p:1,borderRadius:2,color:t.iconColor||"text.primary"},children:t.icon})]})]})}function Bt(t){return e.jsxs(d,{sx:{backgroundColor:t.backgroundColor||"secondary.light",my:3,p:2,borderRadius:"1rem"},children:[e.jsx(h,{variant:"body1",gutterBottom:!0,fontWeight:500,sx:{mb:2},children:"Overall Score"}),t.scores&&t.scores.map(a=>e.jsxs(d,{sx:{px:2,py:1,display:"flex",justifyContent:"space-between",borderRadius:2},children:[e.jsx(d,{flexBasis:"20%",children:e.jsx(h,{variant:"body1",children:R(a.label)})}),e.jsx(it,{count:a.value})]},a.label))]})}function St(t){return e.jsx(lt,{type:"line",data:t.chartData,options:t.options})}function Tt(t){const a={responsive:!0,scales:{x:{grid:{display:!1}},y:{ticks:{display:!1}}},plugins:{legend:{position:"bottom",display:!1},title:{display:!0},tooltip:{enabled:!0,position:"nearest"},chartAreaBorder:{borderColor:"red",borderWidth:2,borderDash:[5,5],borderDashOffset:2}}};return e.jsxs(d,{sx:{background:"secondary.dark",borderRadius:"10px",width:"100%"},children:[e.jsx(d,{p:2,children:e.jsx(St,{chartData:t.data,options:{...t.options,...a}})}),e.jsx(h,{variant:"body2",align:"center",children:R(t.label)})]})}const Dt=[{label:"Bathroom",data:[2,4,2,4,2,3,2],borderColor:"rgb(255, 99, 132)",tension:.4,pointHoverBorderWidth:1},{label:"Bedroom",data:[4,4,2,4,2,3,3],borderColor:"rgb(53, 162, 235)",tension:.4,pointHoverBorderWidth:1},{label:"Housekeeping",data:[2,1,2,3,2.5,3,2],borderColor:"#095F59",tension:.4,pointHoverBorderWidth:1},{label:"Restaurant",data:[3,4,3,4,2,1,2],borderColor:"#FFD681",tension:.4,pointHoverBorderWidth:1},{label:"Bedroom",data:[4,4,2,4,2,3,3],borderColor:"rgb(53, 162, 235)",tension:.4,pointHoverBorderWidth:1},{label:"Housekeeping",data:[2,1,2,3,2.5,3,2],borderColor:"#095F59",tension:.4,pointHoverBorderWidth:1},{label:"Restaurant",data:[3,4,3,4,2,1,2],borderColor:"#FFD681",tension:.4,pointHoverBorderWidth:1}];function Ut(){const[t,a]=x.useState([]),{setLoader:n,user:r,selectedLocation:c}=at(),[p,f]=x.useState();x.useState(Dt);const[v,B]=x.useState(""),[S,T]=x.useState(""),C=l=>{};x.useEffect(()=>{var l,b;r&&(r!=null&&r.business)&&((l=r==null?void 0:r.business)!=null&&l.businessId)&&c&&j((b=r==null?void 0:r.business)==null?void 0:b.businessId,c.id)},[r,c]);const j=async(l,b)=>{n(!0);try{const u=await rt(`/review/getinsightAnalytics?businessId=${l}&locationId=${b}`);if(u&&u.status===200){const D=u.data.insights;let y;if(D&&D.length&&(y=D.map(s=>({...s,label:s._id,value:s.avgMagnitude>1?Math.floor(s.avgMagnitude):Math.floor(s.avgMagnitude*10)})),a(y),B(y.reduce((s,g)=>s.count<g.count?s:g)._id),T(y.reduce((s,g)=>s.count>g.count?s:g)._id)),u.data.analytics&&u.data.analytics.length){const s=u.data.analytics.map(o=>({entityName:o.entityScores.entityName,date:k(o.entityScores.date.split("T")),score:Math.floor(o.entityScores.sentimentScore*10)})),g=[];y.forEach(o=>{g.push({type:o==null?void 0:o.label,data:s.filter(i=>i.entityName===(o==null?void 0:o.label))})});const q=g.map(o=>{const i=o.data.sort((G,Y)=>k(G.date).isAfter(k(Y.date))?1:-1),X=i.length<6?i:i.slice(i.length-6,i.length);return{type:o.type,data:X}}).map(o=>({type:o.type,data:{labels:o.data.map(i=>k(i.date).format("MMM, YYYY")),datasets:[{tension:.4,borderColor:st(),data:o.data.map(i=>i.score)}]}}));f(q.filter(o=>o.data.labels.length>1))}}}catch(u){console.log(u)}n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(h,{variant:"h5",fontWeight:500,children:"Insights & Analytics"}),e.jsxs(m,{container:!0,spacing:3,sx:{mt:0},children:[e.jsxs(m,{item:!0,xs:12,md:9,children:[e.jsxs(ot,{sx:{backgroundColor:"secondary.light",borderRadius:"1rem",px:2,pb:3,pt:2},children:[e.jsx(h,{variant:"h6",color:"text.primary",gutterBottom:!0,children:"Overview"}),e.jsxs(m,{container:!0,spacing:3,children:[e.jsx(m,{item:!0,xs:12,md:6,children:e.jsx(P,{bgColor:"secondary.main",icon:e.jsx(N,{}),iconBgColor:"secondary.dark",contentText:R(S),headerTitle:"Top Performing Amenity / Category"})}),e.jsx(m,{item:!0,xs:12,md:6,children:e.jsx(P,{bgColor:"secondary.dark",icon:e.jsx(E,{}),iconBgColor:"primary.main",contentText:R(v),iconColor:"text.contrastText",headerTitle:"Low Performing Amenity / Category"})})]})]}),e.jsx(Bt,{scores:t}),e.jsxs(d,{sx:{backgroundColor:"secondary.light",borderRadius:"1rem",my:3,p:2},children:[e.jsx(h,{variant:"body1",gutterBottom:!0,fontWeight:500,sx:{mb:2},children:"In details analysis"}),e.jsx(m,{container:!0,spacing:3,sx:{mt:0},children:!!p&&!!p.length&&p.map((l,b)=>e.jsx(m,{item:!0,xs:12,md:6,children:e.jsx(Tt,{label:l.type,data:l.data})},b))})]})]}),e.jsx(m,{item:!0,xs:12,md:3,sx:{display:{xs:"none",md:"flex"},justifyContent:"center",alignItems:"flex-start"},children:e.jsxs(d,{sx:{backgroundColor:"secondary.light",borderRadius:"10px",p:3,width:"100%",position:"sticky"},children:[e.jsx(h,{variant:"body1",gutterBottom:!0,fontWeight:500,children:"Filters"}),e.jsx(nt,{sourcesFilter:C,showCategory:!1})]})})]})]})}export{Ut as default};
