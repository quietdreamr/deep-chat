"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4202],{5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(7462),r=n(7294),l=n(6010),s=n(2466),o=n(6550),i=n(1980),u=n(7392),d=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,u]=h({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),g=(()=>{const e=i??c;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var g=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),m=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==o&&(c(t),i(a))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:p,onClick:m},s,{className:(0,l.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function x(e){const t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},7537:(e,t,n)=>{function a(){window.hljs||n.e(637).then(n.bind(n,637)).then((e=>{window.hljs=e.default}))}async function r(){return!!window.hljs||n.e(637).then(n.bind(n,637)).then((e=>(window.hljs=e.default,!0)))}function l(){delete window.hljs}n.d(t,{A2:()=>l,i5:()=>r,pX:()=>a})},7235:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(){return a.createElement("div",{style:{height:"1px"}})}},1853:(e,t,n)=>{function a(e){window.scrollY>0?e.style.boxShadow="0 1px 2px 0 rgb(0 0 0 / 10%)":e.style.boxShadow="unset"}function r(){setTimeout((()=>{window.removeEventListener("scroll",window.toggleNavOnScroll);const e=document.getElementsByClassName("navbar--fixed-top");if(e[0]){const t=e[0];a(t),window.toggleNavOnScroll=a.bind(this,t),window.addEventListener("scroll",window.toggleNavOnScroll)}}),2)}function l(){setTimeout((()=>{const e=document.querySelectorAll(".homepage > body > #__docusaurus > nav")?.[0];try{e.classList.add("fade-in")}catch(t){console.error(t),console.log("element was not rendered in time - use MutationObserver")}}),2)}n.r(t),n.d(t,{fadeIn:()=>l,readdAutoNavShadowToggle:()=>r})},8751:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var a=n(7294);function r(e){return e?.children[0]?.children[0]}function l(e){let{children:t,minHeight:n,innerDisplay:r}=e;return a.createElement("div",{className:"documentation-example-container",style:{minHeight:`${n||400}px`}},a.createElement("div",{style:{display:r||"block"}},t))}},6619:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){return e.data.map(((e,t)=>{const n=""===e?"":JSON.stringify(e);return a.createElement("div",{key:t},">"," ",n)}))}},1577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>E,frontMatter:()=>b,metadata:()=>v,toc:()=>x});var a=n(7462),r=n(7294),l=n(3905),s=n(8751),o=n(7537);function i(e){let{children:t}=e;const n=r.useRef(null);return r.useEffect((()=>{(0,o.A2)()}),[]),r.createElement("div",null,r.createElement("div",{ref:n},r.createElement(s.Z,null,t)),r.createElement("div",{className:"documentation-example-container method-example-container"},r.createElement("button",{className:"documentation-button",onClick:()=>function(e){const t=(0,s.a)(e);(0,o.i5)().then((()=>{t.refreshMessages()}))}(n.current.children[0])},"Call Method")))}var u=n(6619);function d(e){return r.createElement("div",null,"Method results:",r.createElement(u.Z,{data:e.resultText}))}function c(e){let{children:t,propertyName:n,displayResults:a,argument:l}=e;const o=r.useRef(null),[i,u]=r.useState([""]);return r.createElement("div",null,r.createElement("div",{ref:o},r.createElement(s.Z,null,t)),r.createElement("div",{className:"documentation-example-container method-example-container"},r.createElement("button",{className:"documentation-button",onClick:()=>function(e,t,n,a,r,l){const o=(0,s.a)(e)[a](l);if(r??1){let e=[...t];1===e.length&&""===e[0]&&(e=[]),e.length>3&&e.pop(),e.unshift(JSON.parse(JSON.stringify(o))),n(e)}}(o.current.children[0],i,u,n,a,l)},"Call Method"),(a??!0)&&r.createElement(d,{resultText:i})))}var m=n(4602),p=n(7235),h=n(1262),f=n(5162),g=n(4866);const b={sidebar_position:10},k="Methods",v={unversionedId:"docs/methods",id:"docs/methods",title:"Methods",description:"Method properties that can be called directly on the Deep Chat element.",source:"@site/docs/docs/methods.mdx",sourceDirName:"docs",slug:"/docs/methods",permalink:"/docs/methods",draft:!1,editUrl:"https://github.com/OvidijusParsiunas/deep-chat/tree/main/website/docs/docs/methods.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docs",previous:{title:"Intro Panel",permalink:"/docs/introPanel"},next:{title:"Events",permalink:"/docs/events"}},y={},x=[{value:"<code>getMessages</code>",id:"getMessages",level:3},{value:"Example",id:"example",level:4},{value:"<code>submitUserMessage</code>",id:"submitUserMessage",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>focusInput</code>",id:"focusInput",level:3},{value:"Example",id:"example-2",level:4},{value:"<code>refreshMessages</code>",id:"refreshMessages",level:3},{value:"Example",id:"example-3",level:4}],w={toc:x},N="wrapper";function E(e){let{components:t,...r}=e;return(0,l.kt)(N,(0,a.Z)({},w,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"methods"},"Methods"),(0,l.kt)("p",null,"Method properties that can be called directly on the Deep Chat element."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Make sure the Deep Chat component has been fully rendered on the DOM before using these.")),(0,l.kt)("h3",{id:"getMessages"},(0,l.kt)("inlineCode",{parentName:"h3"},"getMessages")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("a",{parentName:"li",href:"./messages#MessageContent"},(0,l.kt)("inlineCode",{parentName:"a"},"() => MessageContent[]")))),(0,l.kt)("p",null,"Returns details of messages inside the chat."),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)(h.Z,{mdxType:"BrowserOnly"},(()=>n(1853).readdAutoNavShadowToggle())),(0,l.kt)(c,{propertyName:"getMessages",mdxType:"ComponentContainerMethods"},(0,l.kt)(m.Z,{containerStyle:{borderRadius:"8px"},directConnection:{demo:!0},mdxType:"DeepChatBrowser"})),(0,l.kt)(g.Z,{mdxType:"Tabs"},(0,l.kt)(f.Z,{value:"js",label:"Code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"chatElementRef.getMessages();\n")))),(0,l.kt)(p.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",{id:"submitUserMessage"},(0,l.kt)("inlineCode",{parentName:"h3"},"submitUserMessage")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: (",(0,l.kt)("inlineCode",{parentName:"li"},"text: string"),") => ",(0,l.kt)("inlineCode",{parentName:"li"},"void"))),(0,l.kt)("p",null,"Send a user message programmatically."),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)(c,{propertyName:"submitUserMessage",displayResults:!1,argument:"User message",mdxType:"ComponentContainerMethods"},(0,l.kt)(m.Z,{containerStyle:{borderRadius:"8px"},directConnection:{demo:!0},mdxType:"DeepChatBrowser"})),(0,l.kt)(g.Z,{mdxType:"Tabs"},(0,l.kt)(f.Z,{value:"js",label:"Code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'chatElementRef.submitUserMessage("User message");\n')))),(0,l.kt)(p.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",{id:"focusInput"},(0,l.kt)("inlineCode",{parentName:"h3"},"focusInput")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"() => void"))),(0,l.kt)("p",null,"Focuses the cursor on the text input."),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)(c,{propertyName:"focusInput",displayResults:!1,mdxType:"ComponentContainerMethods"},(0,l.kt)(m.Z,{containerStyle:{borderRadius:"8px"},directConnection:{demo:!0},mdxType:"DeepChatBrowser"})),(0,l.kt)(g.Z,{mdxType:"Tabs"},(0,l.kt)(f.Z,{value:"js",label:"Code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"chatElementRef.focusInput();\n")))),(0,l.kt)(p.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",{id:"refreshMessages"},(0,l.kt)("inlineCode",{parentName:"h3"},"refreshMessages")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"() => void"))),(0,l.kt)("p",null,"If your messages contain ",(0,l.kt)("a",{parentName:"p",href:"./messages/#code-messages"},"Code")," and you are using the ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/highlight.js?activeTab=readme"},(0,l.kt)("inlineCode",{parentName:"a"},"higlight.js"))," module to highlight them\n(as per ",(0,l.kt)("a",{parentName:"p",href:"../examples/externalModules"},"external module")," guidelines), sometimes the module may load after the messages have been rendered, leaving the code without a highlight. In such instances, you can use this\nmethod to highlight the code with the loaded module."),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)(i,{displayResults:!1,mdxType:"ComponentContainerHighlightMethod"},(0,l.kt)(m.Z,{containerStyle:{borderRadius:"8px"},initialMessages:[{text:'```java\nwhile (i < 5) {\n console.log("hi");\n i+= 1;\n}\n```',role:"ai"}],messageStyles:{default:{shared:{bubble:{maxWidth:"270px"}}}},directConnection:{demo:!0},mdxType:"DeepChatBrowser"})),(0,l.kt)(g.Z,{mdxType:"Tabs"},(0,l.kt)(f.Z,{value:"js",label:"Code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"chatElementRef.refreshMessages();\n")))),(0,l.kt)(p.Z,{mdxType:"LineBreak"}))}E.isMDXComponent=!0}}]);