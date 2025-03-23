"use strict";(self.webpackChunkchill_box_104=self.webpackChunkchill_box_104||[]).push([[2076],{6606:(e,o,r)=>{r.d(o,{A:()=>X});var t=r(4164);const n=e=>{const o=i(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:t}=e;return{getClassGroupId:e=>{const r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),l(r,o)||a(e)},getConflictingClassGroupIds:(e,o)=>{const n=r[e]||[];return o&&t[e]?[...n,...t[e]]:n}}},l=(e,o)=>{if(0===e.length)return o.classGroupId;const r=e[0],t=o.nextPart.get(r),n=t?l(e.slice(1),t):void 0;if(n)return n;if(0===o.validators.length)return;const s=e.join("-");return o.validators.find((({validator:e})=>e(s)))?.classGroupId},s=/^\[(.+)\]$/,a=e=>{if(s.test(e)){const o=s.exec(e)[1],r=o?.substring(0,o.indexOf(":"));if(r)return"arbitrary.."+r}},i=e=>{const{theme:o,prefix:r}=e,t={nextPart:new Map,validators:[]};return u(Object.entries(e.classGroups),r).forEach((([e,r])=>{d(r,t,e,o)})),t},d=(e,o,r,t)=>{e.forEach((e=>{if("string"!=typeof e){if("function"==typeof e)return p(e)?void d(e(t),o,r,t):void o.validators.push({validator:e,classGroupId:r});Object.entries(e).forEach((([e,n])=>{d(n,c(o,e),r,t)}))}else{(""===e?o:c(o,e)).classGroupId=r}}))},c=(e,o)=>{let r=e;return o.split("-").forEach((e=>{r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)})),r},p=e=>e.isThemeGetter,u=(e,o)=>o?e.map((([e,r])=>[e,r.map((e=>"string"==typeof e?o+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map((([e,r])=>[o+e,r]))):e))])):e,b=e=>{if(e<1)return{get:()=>{},set:()=>{}};let o=0,r=new Map,t=new Map;const n=(n,l)=>{r.set(n,l),o++,o>e&&(o=0,t=r,r=new Map)};return{get(e){let o=r.get(e);return void 0!==o?o:void 0!==(o=t.get(e))?(n(e,o),o):void 0},set(e,o){r.has(e)?r.set(e,o):n(e,o)}}},m=e=>{const{separator:o,experimentalParseClassName:r}=e,t=1===o.length,n=o[0],l=o.length,s=e=>{const r=[];let s,a=0,i=0;for(let p=0;p<e.length;p++){let d=e[p];if(0===a){if(d===n&&(t||e.slice(p,p+l)===o)){r.push(e.slice(i,p)),i=p+l;continue}if("/"===d){s=p;continue}}"["===d?a++:"]"===d&&a--}const d=0===r.length?e:e.substring(i),c=d.startsWith("!");return{modifiers:r,hasImportantModifier:c,baseClassName:c?d.substring(1):d,maybePostfixModifierPosition:s&&s>i?s-i:void 0}};return r?e=>r({className:e,parseClassName:s}):s},f=e=>{if(e.length<=1)return e;const o=[];let r=[];return e.forEach((e=>{"["===e[0]?(o.push(...r.sort(),e),r=[]):r.push(e)})),o.push(...r.sort()),o},g=/\s+/;function h(){let e,o,r=0,t="";for(;r<arguments.length;)(e=arguments[r++])&&(o=x(e))&&(t&&(t+=" "),t+=o);return t}const x=e=>{if("string"==typeof e)return e;let o,r="";for(let t=0;t<e.length;t++)e[t]&&(o=x(e[t]))&&(r&&(r+=" "),r+=o);return r};function y(e,...o){let r,t,l,s=function(i){const d=o.reduce(((e,o)=>o(e)),e());return r=(e=>({cache:b(e.cacheSize),parseClassName:m(e),...n(e)}))(d),t=r.cache.get,l=r.cache.set,s=a,a(i)};function a(e){const o=t(e);if(o)return o;const n=((e,o)=>{const{parseClassName:r,getClassGroupId:t,getConflictingClassGroupIds:n}=o,l=[],s=e.trim().split(g);let a="";for(let i=s.length-1;i>=0;i-=1){const e=s[i],{modifiers:o,hasImportantModifier:d,baseClassName:c,maybePostfixModifierPosition:p}=r(e);let u=Boolean(p),b=t(u?c.substring(0,p):c);if(!b){if(!u){a=e+(a.length>0?" "+a:a);continue}if(b=t(c),!b){a=e+(a.length>0?" "+a:a);continue}u=!1}const m=f(o).join(":"),g=d?m+"!":m,h=g+b;if(l.includes(h))continue;l.push(h);const x=n(b,u);for(let r=0;r<x.length;++r){const e=x[r];l.push(g+e)}a=e+(a.length>0?" "+a:a)}return a})(e,r);return l(e,n),n}return function(){return s(h.apply(null,arguments))}}const v=e=>{const o=o=>o[e]||[];return o.isThemeGetter=!0,o},w=/^\[(?:([a-z-]+):)?(.+)\]$/i,k=/^\d+\/\d+$/,z=new Set(["px","full","screen"]),C=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,j=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,G=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,P=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,N=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,S=e=>I(e)||z.has(e)||k.test(e),M=e=>H(e,"length",J),I=e=>Boolean(e)&&!Number.isNaN(Number(e)),E=e=>H(e,"number",I),$=e=>Boolean(e)&&Number.isInteger(Number(e)),_=e=>e.endsWith("%")&&I(e.slice(0,-1)),O=e=>w.test(e),R=e=>C.test(e),W=new Set(["length","size","percentage"]),A=e=>H(e,W,K),B=e=>H(e,"position",K),T=new Set(["image","url"]),q=e=>H(e,T,Q),D=e=>H(e,"",L),F=()=>!0,H=(e,o,r)=>{const t=w.exec(e);return!!t&&(t[1]?"string"==typeof o?t[1]===o:o.has(t[1]):r(t[2]))},J=e=>j.test(e)&&!G.test(e),K=()=>!1,L=e=>P.test(e),Q=e=>N.test(e),U=(Symbol.toStringTag,()=>{const e=v("colors"),o=v("spacing"),r=v("blur"),t=v("brightness"),n=v("borderColor"),l=v("borderRadius"),s=v("borderSpacing"),a=v("borderWidth"),i=v("contrast"),d=v("grayscale"),c=v("hueRotate"),p=v("invert"),u=v("gap"),b=v("gradientColorStops"),m=v("gradientColorStopPositions"),f=v("inset"),g=v("margin"),h=v("opacity"),x=v("padding"),y=v("saturate"),w=v("scale"),k=v("sepia"),z=v("skew"),C=v("space"),j=v("translate"),G=()=>["auto",O,o],P=()=>[O,o],N=()=>["",S,M],W=()=>["auto",I,O],T=()=>["","0",O],H=()=>[I,O];return{cacheSize:500,separator:":",theme:{colors:[F],spacing:[S,M],blur:["none","",R,O],brightness:H(),borderColor:[e],borderRadius:["none","","full",R,O],borderSpacing:P(),borderWidth:N(),contrast:H(),grayscale:T(),hueRotate:H(),invert:T(),gap:P(),gradientColorStops:[e],gradientColorStopPositions:[_,M],inset:G(),margin:G(),opacity:H(),padding:P(),saturate:H(),scale:H(),sepia:T(),skew:H(),space:P(),translate:P()},classGroups:{aspect:[{aspect:["auto","square","video",O]}],container:["container"],columns:[{columns:[R]}],"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",O]}],overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],overscroll:[{overscroll:["auto","contain","none"]}],"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[f]}],"inset-x":[{"inset-x":[f]}],"inset-y":[{"inset-y":[f]}],start:[{start:[f]}],end:[{end:[f]}],top:[{top:[f]}],right:[{right:[f]}],bottom:[{bottom:[f]}],left:[{left:[f]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",$,O]}],basis:[{basis:G()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",O]}],grow:[{grow:T()}],shrink:[{shrink:T()}],order:[{order:["first","last","none",$,O]}],"grid-cols":[{"grid-cols":[F]}],"col-start-end":[{col:["auto",{span:["full",$,O]},O]}],"col-start":[{"col-start":W()}],"col-end":[{"col-end":W()}],"grid-rows":[{"grid-rows":[F]}],"row-start-end":[{row:["auto",{span:[$,O]},O]}],"row-start":[{"row-start":W()}],"row-end":[{"row-end":W()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",O]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",O]}],gap:[{gap:[u]}],"gap-x":[{"gap-x":[u]}],"gap-y":[{"gap-y":[u]}],"justify-content":[{justify:["normal","start","end","center","between","around","evenly","stretch"]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal","start","end","center","between","around","evenly","stretch","baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":["start","end","center","between","around","evenly","stretch","baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",O,o]}],"min-w":[{"min-w":[O,o,"min","max","fit"]}],"max-w":[{"max-w":[O,o,"none","full","min","max","fit","prose",{screen:[R]},R]}],h:[{h:[O,o,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[O,o,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[O,o,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[O,o,"auto","min","max","fit"]}],"font-size":[{text:["base",R,M]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",E]}],"font-family":[{font:[F]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",O]}],"line-clamp":[{"line-clamp":["none",I,E]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",S,O]}],"list-image":[{"list-image":["none",O]}],"list-style-type":[{list:["none","disc","decimal",O]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:["solid","dashed","dotted","double","none","wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",S,M]}],"underline-offset":[{"underline-offset":["auto",S,O]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",O]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",O]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",B]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",A]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},q]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:["solid","dashed","dotted","double","none","hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:["solid","dashed","dotted","double","none"]}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["","solid","dashed","dotted","double","none"]}],"outline-offset":[{"outline-offset":[S,O]}],"outline-w":[{outline:[S,M]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:N()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[S,M]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",R,D]}],"shadow-color":[{shadow:[F]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"]}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[t]}],contrast:[{contrast:[i]}],"drop-shadow":[{"drop-shadow":["","none",R,O]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[p]}],saturate:[{saturate:[y]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[i]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",O]}],duration:[{duration:H()}],ease:[{ease:["linear","in","out","in-out",O]}],delay:[{delay:H()}],animate:[{animate:["none","spin","ping","pulse","bounce",O]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[$,O]}],"translate-x":[{"translate-x":[j]}],"translate-y":[{"translate-y":[j]}],"skew-x":[{"skew-x":[z]}],"skew-y":[{"skew-y":[z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",O]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",O]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",O]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[S,M,E]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}),V=y(U);function X(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return V((0,t.A)(o))}},8453:(e,o,r)=>{r.d(o,{R:()=>s,x:()=>a});var t=r(6540);const n={},l=t.createContext(n);function s(e){const o=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(l.Provider,{value:o},e.children)}}}]);