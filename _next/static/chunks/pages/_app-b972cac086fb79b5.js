(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3119)}])},4080:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return x}});let i=r(8754),n=r(1757),o=r(5893),s=n._(r(7294)),l=i._(r(3935)),a=i._(r(3867)),u=r(5283),d=r(6594),c=r(3945);r(3179);let f=r(1928),g=i._(r(3872)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/frontend-mentor-challenges/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e,t,r,i,n,o,s){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function m(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}let v=(0,s.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:l,width:a,decoding:u,className:d,style:c,fetchPriority:f,placeholder:g,loading:h,unoptimized:v,fill:b,onLoadRef:x,onLoadingCompleteRef:j,setBlurComplete:w,setShowAltText:y,sizesInput:_,onLoad:S,onError:C,...z}=e;return(0,o.jsx)("img",{...z,...m(f),loading:h,width:a,height:l,decoding:u,"data-nimg":b?"fill":"1",className:d,style:c,sizes:n,srcSet:i,src:r,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&p(e,g,x,j,w,v,_))},[r,g,x,j,w,C,v,_,t]),onLoad:e=>{p(e.currentTarget,g,x,j,w,v,_)},onError:e=>{y(!0),"empty"!==g&&w(!0),C&&C(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...m(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,i),null):(0,o.jsx)(a.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let x=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(f.RouterContext),i=(0,s.useContext)(c.ImageConfigContext),n=(0,s.useMemo)(()=>{let e=h||i||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:l,onLoadingComplete:a}=e,p=(0,s.useRef)(l);(0,s.useEffect)(()=>{p.current=l},[l]);let m=(0,s.useRef)(a);(0,s.useEffect)(()=>{m.current=a},[a]);let[x,j]=(0,s.useState)(!1),[w,y]=(0,s.useState)(!1),{props:_,meta:S}=(0,u.getImgProps)(e,{defaultLoader:g.default,imgConf:n,blurComplete:x,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{..._,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:p,onLoadingCompleteRef:m,setBlurComplete:j,setShowAltText:y,sizesInput:e.sizes,ref:t}),S.priority?(0,o.jsx)(b,{isAppRouter:!r,imgAttributes:_}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5283:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(3179);let i=r(6630),n=r(6594);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,a,u,{src:d,sizes:c,unoptimized:f=!1,priority:g=!1,loading:h,className:p,quality:m,width:v,height:b,fill:x=!1,style:j,overrideSrc:w,onLoad:y,onLoadingComplete:_,placeholder:S="empty",blurDataURL:C,fetchPriority:z,decoding:P="async",layout:E,objectFit:O,objectPosition:k,lazyBoundary:M,lazyRoot:R,...I}=e,{imgConf:N,showAltText:A,blurComplete:D,defaultLoader:F}=t,B=N||n.imageConfigDefault;if("allSizes"in B)l=B;else{let e=[...B.deviceSizes,...B.imageSizes].sort((e,t)=>e-t),t=B.deviceSizes.sort((e,t)=>e-t);l={...B,allSizes:e,deviceSizes:t}}if(void 0===F)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let G=I.loader||F;delete I.loader,delete I.srcSet;let L="__next_img_default"in G;if(L){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=G;G=t=>{let{config:r,...i}=t;return e(i)}}if(E){"fill"===E&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(j={...j,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!c&&(c=t)}let T="",W=s(v),q=s(b);if("object"==typeof(r=d)&&(o(r)||void 0!==r.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,u=e.blurHeight,C=C||e.blurDataURL,T=e.src,!x){if(W||q){if(W&&!q){let t=W/e.width;q=Math.round(e.height*t)}else if(!W&&q){let t=q/e.height;W=Math.round(e.width*t)}}else W=e.width,q=e.height}}let U=!g&&("lazy"===h||void 0===h);(!(d="string"==typeof d?d:T)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,U=!1),l.unoptimized&&(f=!0),L&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),g&&(z="high");let V=s(m),J=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:k}:{},A?{}:{color:"transparent"},j),X=D||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:W,heightInt:q,blurWidth:a,blurHeight:u,blurDataURL:C||"",objectFit:J.objectFit})+'")':'url("'+S+'")',Y=X?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},H=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:s,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:u}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,s),d=a.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:a.map((e,i)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:l({config:t,src:r,quality:o,width:a[d]})}}({config:l,src:d,unoptimized:f,width:W,quality:V,sizes:c,loader:G});return{props:{...I,loading:U?"lazy":h,fetchPriority:z,width:W,height:q,decoding:P,className:p,style:{...J,...Y},sizes:H.sizes,srcSet:H.srcSet,src:w||H.src},meta:{unoptimized:f,priority:g,placeholder:S,fill:x}}}},6630:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:s}=e,l=i?40*i:t,a=n?40*n:r,u=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},6210:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return a},getImageProps:function(){return l}});let i=r(8754),n=r(5283),o=r(4080),s=i._(r(3872));function l(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/frontend-mentor-challenges/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let a=o.Image},3872:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},3119:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var i=r(5893),n=r(5675),o=r.n(n);function s(){return(0,i.jsxs)("footer",{children:[(0,i.jsx)("span",{children:"Made by "}),(0,i.jsx)("a",{href:"https://github.com/sashauly",target:"blank",referrerPolicy:"no-referrer",children:"sashauly"})]})}function l(e){let{children:t}=e;return(0,i.jsx)("header",{className:"sticky top-0 left-0 p-2 flex justify-between gap-2 bg-background",children:t})}function a(){return(0,i.jsx)("nav",{children:(0,i.jsxs)("ul",{className:"flex gap-2",children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#qr-code-component",children:"qr-code-component"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#blog-preview-card",children:"blog-preview-card"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#social-links-profile",children:"social-links-profile"})})]})})}function u(e){let{children:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l,{children:[(0,i.jsxs)("div",{className:"flex gap-2",children:[(0,i.jsx)(o(),{src:"",alt:"logo"}),(0,i.jsx)("h1",{children:"Frontend Mentor Challenges"})]}),(0,i.jsx)(a,{})]}),(0,i.jsx)("main",{children:t}),(0,i.jsx)(s,{})]})}function d(e){let{Component:t,pageProps:r}=e;return(0,i.jsx)(u,{children:(0,i.jsx)(t,{...r})})}r(7294),r(876)},876:function(){},5675:function(e,t,r){e.exports=r(6210)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(3079)}),_N_E=e.O()}]);