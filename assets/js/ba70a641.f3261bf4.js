"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[194],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(6010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>x});var n=a(7462),l=a(7294),r=a(6010),s=a(2466),o=a(6550),i=a(1980),u=a(7392),d=a(12);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[s,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[i,u]=b({queryString:a,groupId:n}),[p,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,d.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),g=(()=>{const e=i??p;return c({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),k(e)}),[u,k,r]),tabValues:r}}var g=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==o&&(p(t),i(n))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:c,onClick:m},s,{className:(0,r.Z)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function C(e){const t=k(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},l.createElement(y,(0,n.Z)({},e,t)),l.createElement(f,(0,n.Z)({},e,t)))}function x(e){const t=(0,g.Z)();return l.createElement(C,(0,n.Z)({key:String(t)},e))}},9814:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);function l(){return n.createElement("div",{style:{height:"1px"}})}},8751:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>l});var n=a(7294);function l(e){return e?.children[0]?.children[0]}function r(e){let{children:t,minHeight:a}=e;return n.createElement("div",{className:"documentation-example-container",style:{minHeight:`${a||400}px`}},n.createElement("div",null,t))}},911:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>y,frontMatter:()=>p,metadata:()=>c,toc:()=>k});var n=a(7462),l=(a(7294),a(3905)),r=a(8751),s=a(4602),o=a(9814),i=a(1262),u=a(5162),d=a(4866);const p={sidebar_position:6},m="Message Styles",c={unversionedId:"docs/messageStyles",id:"docs/messageStyles",title:"Message Styles",description:"Properties related to message styling.",source:"@site/docs/docs/messageStyles.mdx",sourceDirName:"docs",slug:"/docs/messageStyles",permalink:"/docs/messageStyles",draft:!1,editUrl:"https://github.com/OvidijusParsiunas/deep-chat/tree/main/website/docs/docs/messageStyles.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Messages",permalink:"/docs/messages"},next:{title:"Files",permalink:"/docs/files"}},b={},k=[{value:"<code>messageStyles</code>",id:"messageStyles",level:3},{value:"Types",id:"types",level:2},{value:"<code>MessageRoleStyles</code>",id:"MessageRoleStyles",level:3},{value:"<code>MessageElementsStyles</code>",id:"MessageElementsStyles",level:3},{value:"More Examples",id:"more-examples",level:2}],g={toc:k},h="wrapper";function y(e){let{components:t,...p}=e;return(0,l.kt)(h,(0,n.Z)({},g,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"message-styles"},"Message Styles"),(0,l.kt)("p",null,"Properties related to message styling."),(0,l.kt)(i.Z,{mdxType:"BrowserOnly"},(()=>a(1853).readdAutoNavShadowToggle())),(0,l.kt)("h3",{id:"messageStyles"},(0,l.kt)("inlineCode",{parentName:"h3"},"messageStyles")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: {",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"#MessageRoleStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"default?: MessageRoleStyles")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"#MessageRoleStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"image?: MessageRoleStyles")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"#MessageRoleStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"audio?: MessageRoleStyles")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"#MessageRoleStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"file?: MessageRoleStyles")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"#MessageElementsStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"intro?: MessageElementsStyles")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"#MessageElementsStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"loading?: MessageElementsStyles")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"#MessageElementsStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"error?: MessageElementsStyles"))," ",(0,l.kt)("br",null),"\n}")),(0,l.kt)("p",null,"Object defining the styling for various message types. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"default")," is applied to all message types. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"image")," is applied to messages that contain an image. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"audio")," is applied to messages that contain an audio player. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"file")," is applied to messages that contain a file attachment icon. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"intro")," is applied to the ",(0,l.kt)("a",{parentName:"p",href:"./messages#introMessage"},(0,l.kt)("inlineCode",{parentName:"a"},"introMessage")),". ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"loading")," is applied to the loading bubble. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"error")," is applied to error messages. ",(0,l.kt)("br",null)),(0,l.kt)(o.Z,{mdxType:"LineBreak"}),(0,l.kt)("h2",{id:"types"},"Types"),(0,l.kt)("p",null,"Shared property types for the ",(0,l.kt)("a",{parentName:"p",href:"#messageStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"messageStyles"))," object:"),(0,l.kt)("h3",{id:"MessageRoleStyles"},(0,l.kt)("inlineCode",{parentName:"h3"},"MessageRoleStyles")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: {",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"#MessageElementsStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"shared?: MessageElementsStyles")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"#MessageElementsStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"user?: MessageElementsStyles")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"#MessageElementsStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"ai?: MessageElementsStyles"))," ",(0,l.kt)("br",null),"\n}")),(0,l.kt)("p",null,"Object defining the styling for various message roles. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"shared")," is applied to all message roles. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"user")," is applied to messages from the user. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"ai")," is applied to messages returned from the ai service. ",(0,l.kt)("br",null)),(0,l.kt)(r.Z,{mdxType:"ComponentContainer"},(0,l.kt)(s.Z,{containerStyle:{borderRadius:"8px"},messageStyles:{default:{shared:{bubble:{color:"white"}},ai:{bubble:{backgroundColor:"#3cbe3c"}},user:{bubble:{backgroundColor:"#6767ff"}}}},initialMessages:[{text:"What is the meaning of life?",role:"user"},{text:"This ultimately depends on the person, but it could be the pursuit of happiness or fulfillment.",role:"ai"}],directConnection:{demo:!0},mdxType:"DeepChatBrowser"})),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  messageStyles=\'{\n    "default": {\n      "shared": {"bubble": {"color": "white"}},\n      "ai": {"bubble": {"backgroundColor": "#3cbe3c"}},\n      "user": {"bubble": {"backgroundColor": "#6767ff"}}\n    }\n  }\'\n></deep-chat>\n'))),(0,l.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  messageStyles=\'{\n    "default": {\n      "shared": {"bubble": {"color": "white"}},\n      "ai": {"bubble": {"backgroundColor": "#3cbe3c"}},\n      "user": {"bubble": {"backgroundColor": "#6767ff"}}\n    }\n  }\'\n  initialMessages=\'[\n    {"text": "What is the meaning of life?", "role": "user"},\n    {\n      "text": "This ultimately depends on the person, but it could be the pursuit of happiness or fulfillment.",\n      "role": "ai"\n    }\n  ]\'\n  containerStyle=\'{"borderRadius": "8px"}\'\n  directConnection=\'{"demo": true}\'\n></deep-chat>\n')))),(0,l.kt)(o.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",{id:"MessageElementsStyles"},(0,l.kt)("inlineCode",{parentName:"h3"},"MessageElementsStyles")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: {",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"./styles#CustomStyle"},(0,l.kt)("inlineCode",{parentName:"a"},"outerContainer?: CustomStyle")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"./styles#CustomStyle"},(0,l.kt)("inlineCode",{parentName:"a"},"innerContainer?: CustomStyle")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"./styles#CustomStyle"},(0,l.kt)("inlineCode",{parentName:"a"},"bubble?: CustomStyle")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"./styles#CustomStyle"},(0,l.kt)("inlineCode",{parentName:"a"},"media?: CustomStyle"))," ",(0,l.kt)("br",null),"\n}")),(0,l.kt)("p",null,"Object defining the styling for various elements that encompass a message. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"outerContainer")," contains all elements related to the message. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"innerContainer")," is an element inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"outerContainer")," that is mostly used to set message side padding. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"bubble")," is the element that displays the actual message contents. ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"media")," is applied to ",(0,l.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"audio")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"file")," type messages which contain an extra child element inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"bubble"),"\nto display the file contents. ",(0,l.kt)("br",null)),(0,l.kt)(r.Z,{mdxType:"ComponentContainer"},(0,l.kt)(s.Z,{containerStyle:{borderRadius:"8px"},messageStyles:{default:{shared:{outerContainer:{backgroundColor:"orange"},innerContainer:{backgroundColor:"yellow"},bubble:{color:"black"}},ai:{bubble:{backgroundColor:"lightgreen"}},user:{bubble:{backgroundColor:"lightblue"}}}},initialMessages:[{text:"What is the meaning of life?",role:"user"},{text:"This ultimately depends on the person, but it could be the pursuit of happiness or fulfillment.",role:"ai"}],directConnection:{demo:!0},mdxType:"DeepChatBrowser"})),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  messageStyles=\'{\n    "default": {\n      "shared": {\n        "outerContainer": {"backgroundColor": "orange"},\n        "innerContainer": {"backgroundColor": "yellow"},\n        "bubble": {"color": "black"}\n      },\n      "ai": {"bubble": {"backgroundColor": "lightgreen"}},\n      "user": {"bubble": {"backgroundColor": "lightblue"}}\n    }\n  }\'\n></deep-chat>\n'))),(0,l.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  messageStyles=\'{\n    "default": {\n      "shared": {\n        "outerContainer": {"backgroundColor": "orange"},\n        "innerContainer": {"backgroundColor": "yellow"},\n        "bubble": {"color": "black"}\n      },\n      "ai": {"bubble": {"backgroundColor": "lightgreen"}},\n      "user": {"bubble": {"backgroundColor": "lightblue"}}\n    }\n  }\'\n  initialMessages=\'[\n    {"text": "What is the meaning of life?", "role": "user"},\n    {\n      "text": "This ultimately depends on the person, but it could be the pursuit of happiness or fulfillment.",\n      "role": "ai"\n    }\n  ]\'\n  containerStyle=\'{"borderRadius": "8px"}\'\n  directConnection=\'{"demo": true}\'\n></deep-chat>\n')))),(0,l.kt)(o.Z,{mdxType:"LineBreak"}),(0,l.kt)("h2",{id:"more-examples"},"More Examples"),(0,l.kt)("h3",null,"Files"),(0,l.kt)(r.Z,{mdxType:"ComponentContainer"},(0,l.kt)(s.Z,{containerStyle:{borderRadius:"8px"},messageStyles:{image:{shared:{media:{borderRadius:"0px"}}},audio:{shared:{media:{borderRadius:"30px",border:"1px solid #8c8c8c",backgroundColor:"red"}}},file:{shared:{bubble:{backgroundColor:"grey"}}}},initialMessages:[{file:{src:"/img/city.jpeg",type:"image"},role:"user"},{file:{src:"/audio/cantinaBand.wav",type:"audio"},role:"ai"},{file:{src:"/text/text.txt",type:"file",name:"text-file.txt"},role:"user"}],directConnection:{demo:!0},mdxType:"DeepChatBrowser"})),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  messageStyles=\'{\n    "image": {\n      "shared": {\n        "media": {"borderRadius": "0px"}\n      }\n    },\n    "audio": {\n      "shared": {\n        "media": {"borderRadius": "30px", "border": "1px solid #8c8c8c", "backgroundColor": "red"}\n      }\n    },\n    "file": {\n      "shared": {\n        "bubble": {"backgroundColor": "grey"}\n      }\n    }\n  }\'\n></deep-chat>\n'))),(0,l.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  messageStyles=\'{\n    "image": {\n      "shared": {\n        "media": {"borderRadius": "0px"}\n      }\n    },\n    "audio": {\n      "shared": {\n        "media": {"borderRadius": "30px", "border": "1px solid #8c8c8c", "backgroundColor": "red"}\n      }\n    },\n    "file": {\n      "shared": {\n        "bubble": {"backgroundColor": "grey"}\n      }\n    }\n  }\'\n  initialMessages=\'[\n    {"file": {"src": "path-to-file.jpeg", "type": "image"}, "role": "user"},\n    {"file": {"src": "path-to-file.wav", "type": "audio"}, "role": "ai"},\n    {"file": {"src": "path-to-file.txt", name: "text-file.txt", "type": "file"}, "role": "user"}\n  ]\'\n  containerStyle=\'{"borderRadius": "8px"}\'\n  directConnection=\'{"demo": true}\'\n></deep-chat>\n')))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("em",{parentName:"p"},'"audio"')," media player is controlled by the browser and and its styling may not be overwritable by the ",(0,l.kt)("inlineCode",{parentName:"p"},"media")," property.")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"In the Safari browser, the ",(0,l.kt)("em",{parentName:"p"},'"audio"')," media player can be expanded by setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"width")," property in ",(0,l.kt)("inlineCode",{parentName:"p"},"media")," to ",(0,l.kt)("em",{parentName:"p"},"200px")," or higher.")),(0,l.kt)(o.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",null,"Intro message"),(0,l.kt)(r.Z,{mdxType:"ComponentContainer"},(0,l.kt)(s.Z,{containerStyle:{borderRadius:"8px"},messageStyles:{intro:{bubble:{backgroundColor:"#475cc7",color:"white",fontSize:"16px"}}},introMessage:"Hi I'm an AiAssistant, ask me anything!",directConnection:{demo:!0},mdxType:"DeepChatBrowser"})),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  messageStyles=\'{\n    "intro": {"bubble": {"backgroundColor": "#475cc7", "color": "white", "fontSize": "16px"}}\n  }\'\n></deep-chat>\n'))),(0,l.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  messageStyles=\'{\n    "intro": {\n      "bubble": {"backgroundColor": "#475cc7", "color": "white", "fontSize": "16px"}\n    }\n  }\'\n  introMessage="Hi I\'m an AiAssistant, ask me anything!"\n  containerStyle=\'{"borderRadius": "8px"}\'\n  directConnection=\'{"demo": true}\'\n></deep-chat>\n')))),(0,l.kt)(o.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",null,"Loading bubble"),(0,l.kt)(r.Z,{mdxType:"ComponentContainer"},(0,l.kt)(s.Z,{containerStyle:{borderRadius:"8px"},messageStyles:{loading:{bubble:{backgroundColor:"#3793ff",fontSize:"20px",color:"white"}}},directConnection:{demo:{displayLoadingBubble:!0}},mdxType:"DeepChatBrowser"})),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  messageStyles=\'{\n    "loading": {\n      "bubble": {"backgroundColor": "#3793ff", "fontSize": "20px", "color": "white"}\n    }\n  }\'\n></deep-chat>\n'))),(0,l.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  messageStyles=\'{\n    "loading": {\n      "bubble": {"backgroundColor": "#3793ff", "fontSize": "20px", "color": "white"}\n    }\n  }\'\n  containerStyle=\'{"borderRadius": "8px"}\'\n  directConnection=\'{"demo": {"displayLoadingBubble": true}}\'\n></deep-chat>\n')))),(0,l.kt)(o.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",null,"Error messages"),(0,l.kt)(r.Z,{mdxType:"ComponentContainer"},(0,l.kt)(s.Z,{containerStyle:{borderRadius:"8px"},messageStyles:{error:{bubble:{backgroundColor:"#f98e00",color:"white",fontSize:"15px"}}},directConnection:{demo:{displayErrors:{service:!0}}},mdxType:"DeepChatBrowser"})),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  messageStyles=\'{\n    "error": {\n      "bubble": {"backgroundColor": "#f98e00", "color": "white", "fontSize": "15px"}\n    }\n  }\'\n></deep-chat>\n'))),(0,l.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  messageStyles=\'{\n    "error": {\n      "bubble": {"backgroundColor": "#f98e00", "color": "white", "fontSize": "15px"}\n    }\n  }\'\n  containerStyle=\'{"borderRadius": "8px"}\'\n  directConnection=\'{"demo": {"displayErrors": {"service": true}}}\'\n></deep-chat>\n')))),(0,l.kt)(o.Z,{mdxType:"LineBreak"}))}y.isMDXComponent=!0}}]);