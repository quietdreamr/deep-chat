"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7754],{5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=s??d;return p({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var y=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(d(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function x(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function k(e){const t=(0,y.Z)();return r.createElement(x,(0,a.Z)({key:String(t)},e))}},7235:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(){return a.createElement("div",{style:{height:"1px"}})}},1853:(e,t,n)=>{function a(e){window.scrollY>0?e.style.boxShadow="0 1px 2px 0 rgb(0 0 0 / 10%)":e.style.boxShadow="unset"}function r(){setTimeout((()=>{window.removeEventListener("scroll",window.toggleNavOnScroll);const e=document.getElementsByClassName("navbar--fixed-top");if(e[0]){const t=e[0];a(t),window.toggleNavOnScroll=a.bind(this,t),window.addEventListener("scroll",window.toggleNavOnScroll)}}),2)}function o(){setTimeout((()=>{const e=document.querySelectorAll(".homepage > body > #__docusaurus > nav")?.[0];try{e.classList.add("fade-in")}catch(t){console.error(t),console.log("element was not rendered in time - use MutationObserver")}}),2)}n.r(t),n.d(t,{fadeIn:()=>o,readdAutoNavShadowToggle:()=>r})},8751:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var a=n(7294);function r(e){return e?.children[0]?.children[0]}function o(e){let{children:t,minHeight:n,innerDisplay:r}=e;return a.createElement("div",{className:"documentation-example-container",style:{minHeight:`${n||400}px`}},a.createElement("div",{style:{display:r||"block"}},t))}},4995:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);function r(e){let{isDisplayed:t,children:n}=e;return t?a.createElement("div",null,n):a.createElement("div",null)}function o(e){let{children:t}=e;const[n,o]=a.useState(!1);return a.createElement("div",null,a.createElement("div",{className:"code-toggle",onClick:()=>o(!n)},n?"Hide":"View"," Code"),a.createElement(r,{isDisplayed:n},t))}},7:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>y,frontMatter:()=>u,metadata:()=>d,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(8751),l=n(4602),i=(n(4995),n(7235)),s=n(1262);n(5162),n(4866);const u={sidebar_position:1},c="Sticky",d={unversionedId:"examples/Layout/sticky",id:"examples/Layout/sticky",title:"Sticky",description:"Example to help you stick the component to any side of the screen - furthering a chat-like experience to your users. The core method to achieve this is to",source:"@site/docs/examples/Layout/sticky.mdx",sourceDirName:"examples/Layout",slug:"/examples/Layout/sticky",permalink:"/examples/Layout/sticky",draft:!1,editUrl:"https://github.com/OvidijusParsiunas/deep-chat/tree/main/website/docs/examples/Layout/sticky.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"examples",previous:{title:"Full Screen",permalink:"/examples/Layout/fullScreen"}},m={},p=[],h={toc:p},f="wrapper";function y(e){let{components:t,...u}=e;return(0,r.kt)(f,(0,a.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sticky"},"Sticky"),(0,r.kt)("p",null,"Example to help you stick the component to any side of the screen - furthering a chat-like experience to your users. The core method to achieve this is to\nset the ",(0,r.kt)("a",{parentName:"p",href:"../../docs/styles#containerStyle"},(0,r.kt)("inlineCode",{parentName:"a"},"containerStyle"))," property with ",(0,r.kt)("em",{parentName:"p"},'position: "fixed"')," and defining the side you want to component to sit on e.g. ",(0,r.kt)("em",{parentName:"p"},'right: "7%"'),"."),(0,r.kt)(s.Z,{mdxType:"BrowserOnly"},(()=>n(1853).readdAutoNavShadowToggle())),(0,r.kt)("h3",null,"Example code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Frameworks) --\x3e\n\n<deep-chat\n  containerStyle=\'{\n    "borderRadius": "10px",\n    "position": "fixed",\n    "bottom": "0px",\n    "right": "7%",\n    "zIndex": "1"\n  }\'\n  initialMessages=\'[\n    {"text": "Hey, how are you?", "role": "user"},\n    {"text": "I am doing great, how about you?", "role": "ai"},\n    {"text": "What is the meaning of life?", "role": "user"},\n    {"text": "This completely depends on the person.", "role": "ai"}\n  ]\'\n  directConnection=\'{"demo": true}\'\n  stream="true"\n></deep-chat>\n')),(0,r.kt)(i.Z,{mdxType:"LineBreak"}),(0,r.kt)(o.Z,{minHeight:1,mdxType:"ComponentContainer"},(0,r.kt)(l.Z,{directConnection:{demo:!0},initialMessages:[{text:"Hey, how are you?",role:"user"},{text:"I am doing great, how about you?",role:"ai"},{text:"What is the meaning of life?",role:"user"},{text:"This completely depends on the person.",role:"ai"}],stream:!0,containerStyle:{borderRadius:"10px",position:"fixed",bottom:"0px",right:"7%",zIndex:1},mdxType:"DeepChatBrowser"})))}y.isMDXComponent=!0}}]);