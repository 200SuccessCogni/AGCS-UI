import{d as B,g as M,a2 as y,l as j,s as N,T as P,p as h,f as a,b as x,m as U,_,M as z,C as W,j as E,o as H,q}from"./index-8f45885e.js";function w(o){return M("MuiLink",o)}const I=B("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),O=I,C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=o=>C[o]||o,G=({theme:o,ownerState:e})=>{const n=S(e.color),s=y(o,`palette.${n}`,!1)||e.color,r=y(o,`palette.${n}Channel`);return"vars"in o&&r?`rgba(${r} / 0.4)`:j(s,.4)},J=G,K=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Q=o=>{const{classes:e,component:n,focusVisible:s,underline:r}=o,t={root:["root",`underline${h(r)}`,n==="button"&&"button",s&&"focusVisible"]};return q(t,w,e)},X=N(P,{name:"MuiLink",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.root,e[`underline${h(n.underline)}`],n.component==="button"&&e.button]}})(({theme:o,ownerState:e})=>a({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&a({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:J({theme:o,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${O.focusVisible}`]:{outline:"auto"}})),Y=x.forwardRef(function(e,n){const s=U({props:e,name:"MuiLink"}),{className:r,color:t="primary",component:c="a",onBlur:u,onFocus:p,TypographyClasses:g,underline:k="always",variant:d="inherit",sx:l}=s,L=_(s,K),{isFocusVisibleRef:f,onBlur:V,onFocus:v,ref:F}=z(),[R,m]=x.useState(!1),D=W(n,F),T=i=>{V(i),f.current===!1&&m(!1),u&&u(i)},$=i=>{v(i),f.current===!0&&m(!0),p&&p(i)},b=a({},s,{color:t,component:c,focusVisible:R,underline:k,variant:d}),A=Q(b);return E.jsx(X,a({color:t,className:H(A.root,r),classes:g,component:c,onBlur:T,onFocus:$,ref:D,ownerState:b,variant:d,sx:[...Object.keys(C).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},L))}),ee=Y;export{ee as L};
