"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[490],{5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),A=n(6010);const o={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,A.Z)(o.tabItem,r),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(7462),A=n(7294),o=n(6010),r=n(2466),l=n(6550),i=n(1980),p=n(7392),m=n(12);function s(e){return function(e){return A.Children.map(e,(e=>{if(!e||(0,A.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:A}}=e;return{value:t,label:n,attributes:a,default:A}}))}function d(e){const{values:t,children:n}=e;return(0,A.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,A.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[r,l]=(0,A.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,p]=c({queryString:n,groupId:a}),[s,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,m.Nk)(n);return[a,(0,A.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=i??s;return u({value:e,tabValues:o})?e:null})();(0,A.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:r,selectValue:(0,A.useCallback)((e=>{if(!u({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),k(e)}),[p,k,o]),tabValues:o}}var h=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:p}=e;const m=[],{blockElementScrollPositionUntilNextRender:s}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=m.indexOf(t),a=p[n].value;a!==l&&(s(t),i(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;t=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;t=m[n]??m[m.length-1];break}}t?.focus()};return A.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:r}=e;return A.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>m.push(e),onKeyDown:u,onClick:d},r,{className:(0,o.Z)("tabs__item",y.tabItem,r?.className,{"tabs__item--active":l===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,A.cloneElement)(e,{className:"margin-top--md"}):null}return A.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,A.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function f(e){const t=k(e);return A.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},A.createElement(g,(0,a.Z)({},e,t)),A.createElement(b,(0,a.Z)({},e,t)))}function C(e){const t=(0,h.Z)();return A.createElement(f,(0,a.Z)({key:String(t)},e))}},9814:(e,t,n)=>{n.d(t,{Z:()=>A});var a=n(7294);function A(){return a.createElement("div",{style:{height:"1px"}})}},8751:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>A});var a=n(7294);function A(e){return e?.children[0]?.children[0]}function o(e){let{children:t,minHeight:n}=e;return a.createElement("div",{className:"documentation-example-container",style:{minHeight:`${n||400}px`}},a.createElement("div",null,t))}},5833:(e,t,n)=>{n.d(t,{Z:()=>A});var a=n(7294);function A(e){let{children:t}=e;const[n,A]=a.useState(!0);return a.createElement("div",null,n&&t[0],!n&&t[1],a.createElement("div",{className:"component-key-toggle-button-container"},a.createElement("button",{className:"documentation-button component-key-toggle-button",onClick:()=>A(!n)},n&&"Insert test key",!n&&"Use placeholder key")))}},483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>k,toc:()=>y});var a=n(7462),A=(n(7294),n(3905)),o=n(7273),r=n(5833),l=n(8751),i=n(4602),p=n(9814),m=n(1262),s=n(5162),d=n(4866);const u={sidebar_position:1},c=void 0,k={unversionedId:"docs/directConnection/OpenAI",id:"docs/directConnection/OpenAI",title:"OpenAI",description:"Properties used to connect to OpenAI.",source:"@site/docs/docs/directConnection/OpenAI.mdx",sourceDirName:"docs/directConnection",slug:"/docs/directConnection/OpenAI",permalink:"/docs/directConnection/OpenAI",draft:!1,editUrl:"https://github.com/OvidijusParsiunas/deep-chat/tree/main/website/docs/docs/directConnection/OpenAI.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Direct Connection",permalink:"/docs/directConnection/"},next:{title:"HuggingFace",permalink:"/docs/directConnection/HuggingFace"}},h={},y=[{value:"<code>openAI</code>",id:"openAI",level:3},{value:"Service Types",id:"service-types",level:2},{value:"<code>Chat</code>",id:"Chat",level:3},{value:"Example",id:"example",level:4},{value:"<code>Completions</code>",id:"Completions",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>Images</code>",id:"Images",level:3},{value:"Example",id:"example-2",level:4},{value:"<code>Audio</code>",id:"Audio",level:3},{value:"Example",id:"example-3",level:4},{value:"Shared Types",id:"shared-types",level:2},{value:"<code>OpenAIConverse</code>",id:"OpenAIConverse",level:3},{value:"Example",id:"example-4",level:4}],g={toc:y},b="wrapper";function f(e){let{components:t,...u}=e;return(0,A.kt)(b,(0,a.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("div",null),(0,A.kt)("h1",{id:"-openai"},(0,A.kt)("img",{src:o.Z,id:"openai-logo",width:"40",style:{float:"left",marginRight:"10px",marginTop:"10px"}})," OpenAI"),(0,A.kt)("p",null,"Properties used to connect to ",(0,A.kt)("a",{parentName:"p",href:"https://openai.com/blog/openai-api"},"OpenAI"),"."),(0,A.kt)("h3",{id:"openAI"},(0,A.kt)("inlineCode",{parentName:"h3"},"openAI")),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"Type: {",(0,A.kt)("a",{parentName:"li",href:"#Completions"},(0,A.kt)("inlineCode",{parentName:"a"},"completions?: Completions")),", ",(0,A.kt)("a",{parentName:"li",href:"#Images"},(0,A.kt)("inlineCode",{parentName:"a"},"images?: Images")),", ",(0,A.kt)("a",{parentName:"li",href:"#Audio"},(0,A.kt)("inlineCode",{parentName:"a"},"audio?: Audio")),"}"),(0,A.kt)("li",{parentName:"ul"},"Default: ",(0,A.kt)("em",{parentName:"li"},"{chat: true}"))),(0,A.kt)(m.Z,{mdxType:"BrowserOnly"},(()=>n(1853).readdAutoNavShadowToggle())),(0,A.kt)("h2",{id:"service-types"},"Service Types"),(0,A.kt)("h3",{id:"Chat"},(0,A.kt)("inlineCode",{parentName:"h3"},"Chat")),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"Type: ",(0,A.kt)("inlineCode",{parentName:"li"},"true")," | {",(0,A.kt)("a",{parentName:"li",href:"#OpenAIConverse"},(0,A.kt)("inlineCode",{parentName:"a"},"OpenAIConverse")),", ",(0,A.kt)("inlineCode",{parentName:"li"},"systemPrompt?: string"),"}"),(0,A.kt)("li",{parentName:"ul"},"Default: ",(0,A.kt)("em",{parentName:"li"},'{model: "gpt-3.5-turbo", systemPrompt: "You are a helpful assistant."}'))),(0,A.kt)("p",null,"Connect to Open AI's ",(0,A.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/chat/create"},(0,A.kt)("inlineCode",{parentName:"a"},"chat completions"))," API. ",(0,A.kt)("br",null),"\n",(0,A.kt)("inlineCode",{parentName:"p"},"OpenAIConverse")," object can be used to augment the ",(0,A.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/chat/create"},(0,A.kt)("inlineCode",{parentName:"a"},"request body")),". ",(0,A.kt)("br",null),"\n",(0,A.kt)("inlineCode",{parentName:"p"},"systemPrompt")," is used to set the ",(0,A.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/chat/create"},(0,A.kt)("em",{parentName:"a"},'"system"'))," message for the conversation context. ",(0,A.kt)("br",null)),(0,A.kt)("h4",{id:"example"},"Example"),(0,A.kt)(r.Z,{mdxType:"ContainersKeyToggle"},(0,A.kt)(l.Z,{mdxType:"ComponentContainer"},(0,A.kt)(i.Z,{containerStyle:{borderRadius:"8px"},directConnection:{openAI:{key:"placeholder key",chat:{max_tokens:2e3,systemPrompt:"Assist me with anything you can"}}},mdxType:"DeepChatBrowser"})),(0,A.kt)(l.Z,{mdxType:"ComponentContainer"},(0,A.kt)(i.Z,{containerStyle:{borderRadius:"8px"},directConnection:{openAI:{chat:{max_tokens:2e3,systemPrompt:"Assist me with anything you can"}}},mdxType:"DeepChatBrowser"}))),(0,A.kt)(d.Z,{mdxType:"Tabs"},(0,A.kt)(s.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  directConnection=\'{\n    "openAI": {\n      "key": "placeholder key",\n      "chat": {"max_tokens": 2000, "systemPrompt": "Assist me with anything you can"}\n    }\n  }\'\n></deep-chat>\n'))),(0,A.kt)(s.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  directConnection=\'{\n    "openAI": {\n      "key": "placeholder key",\n      "chat": {"max_tokens": 2000, "systemPrompt": "Assist me with anything you can"}\n    }\n  }\'\n  containerStyle=\'{"borderRadius": "8px"}\'\n></deep-chat>\n')))),(0,A.kt)(p.Z,{mdxType:"LineBreak"}),(0,A.kt)("h3",{id:"Completions"},(0,A.kt)("inlineCode",{parentName:"h3"},"Completions")),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"Type: ",(0,A.kt)("inlineCode",{parentName:"li"},"true")," | ",(0,A.kt)("a",{parentName:"li",href:"#OpenAIConverse"},(0,A.kt)("inlineCode",{parentName:"a"},"OpenAIConverse"))),(0,A.kt)("li",{parentName:"ul"},"Default: ",(0,A.kt)("em",{parentName:"li"},'{model: "text-davinci-003"}'))),(0,A.kt)("p",null,"Connect to Open AI's ",(0,A.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/completions/create"},(0,A.kt)("inlineCode",{parentName:"a"},"completions"))," API. ",(0,A.kt)("br",null),"\nYou can either set this property to ",(0,A.kt)("em",{parentName:"p"},"true")," or use an ",(0,A.kt)("inlineCode",{parentName:"p"},"OpenAIConverse")," object to augment the ",(0,A.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/chat/create"},(0,A.kt)("inlineCode",{parentName:"a"},"request body")),". ",(0,A.kt)("br",null)),(0,A.kt)("h4",{id:"example-1"},"Example"),(0,A.kt)(r.Z,{mdxType:"ContainersKeyToggle"},(0,A.kt)(l.Z,{mdxType:"ComponentContainer"},(0,A.kt)(i.Z,{containerStyle:{borderRadius:"8px"},directConnection:{openAI:{key:"placeholder key",completions:{max_tokens:2e3}}},mdxType:"DeepChatBrowser"})),(0,A.kt)(l.Z,{mdxType:"ComponentContainer"},(0,A.kt)(i.Z,{containerStyle:{borderRadius:"8px"},directConnection:{openAI:{completions:{max_tokens:2e3}}},mdxType:"DeepChatBrowser"}))),(0,A.kt)(d.Z,{mdxType:"Tabs"},(0,A.kt)(s.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  directConnection=\'{\n    "openAI": {\n      "key": "placeholder key",\n      "completions": {"max_tokens": 2000}\n    }\n  }\'\n></deep-chat>\n'))),(0,A.kt)(s.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  directConnection=\'{\n    "openAI": {\n      "key": "placeholder key",\n      "completions": {"max_tokens": 2000}\n    }\n  }\'\n  containerStyle=\'{"borderRadius": "8px"}\'\n></deep-chat>\n')))),(0,A.kt)(p.Z,{mdxType:"LineBreak"}),(0,A.kt)("admonition",{type:"tip"},(0,A.kt)("p",{parentName:"admonition"},'If chat responses are inaccurate, try setting the "max_tokens" to a higher number.')),(0,A.kt)(p.Z,{mdxType:"LineBreak"}),(0,A.kt)("h3",{id:"Images"},(0,A.kt)("inlineCode",{parentName:"h3"},"Images")),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"Type: ",(0,A.kt)("inlineCode",{parentName:"li"},"true")," | {",(0,A.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,A.kt)("inlineCode",{parentName:"li"},"n?: number"),", ",(0,A.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,A.kt)("inlineCode",{parentName:"li"},"size?:")," ",(0,A.kt)("inlineCode",{parentName:"li"},'"256x256"')," | ",(0,A.kt)("inlineCode",{parentName:"li"},'"512x512"')," | ",(0,A.kt)("inlineCode",{parentName:"li"},'"1024x1024"'),", ",(0,A.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,A.kt)("inlineCode",{parentName:"li"},"response_format?:")," ",(0,A.kt)("inlineCode",{parentName:"li"},'"url"')," | ",(0,A.kt)("inlineCode",{parentName:"li"},'"b64_json"'),", ",(0,A.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,A.kt)("inlineCode",{parentName:"li"},"user?: number")," ",(0,A.kt)("br",null),"\n}"),(0,A.kt)("li",{parentName:"ul"},"Default: ",(0,A.kt)("em",{parentName:"li"},'{size: "1024x1024"}'))),(0,A.kt)("p",null,"Connect to Open AI's ",(0,A.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/images"},(0,A.kt)("inlineCode",{parentName:"a"},"Image Generation"))," API to access DALL\xb7E models. ",(0,A.kt)("br",null),"\nYou can either set this property to ",(0,A.kt)("em",{parentName:"p"},"true")," or use an object to augment the ",(0,A.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/images/create"},(0,A.kt)("inlineCode",{parentName:"a"},"request body")),": ",(0,A.kt)("br",null),"\n",(0,A.kt)("inlineCode",{parentName:"p"},"n")," is the number of images to generate. Ranges between 1 and 10. ",(0,A.kt)("br",null),"\n",(0,A.kt)("inlineCode",{parentName:"p"},"size")," is the pixel dimensions of the generated images. ",(0,A.kt)("br",null),"\n",(0,A.kt)("inlineCode",{parentName:"p"},"response_format")," is the format in which the generated images are returned. ",(0,A.kt)("br",null),"\n",(0,A.kt)("inlineCode",{parentName:"p"},"user")," is a unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. More info can be found ",(0,A.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/safety-best-practices/end-user-ids"},(0,A.kt)("inlineCode",{parentName:"a"},"here")),". ",(0,A.kt)("br",null)),(0,A.kt)("p",null,"You can automatically call any of the following three APIs by combining different inputs:"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://platform.openai.com/docs/api-reference/images/create"},"Create Image")," - Send text."),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://platform.openai.com/docs/api-reference/images/create-variation"},"Create Image Variation")," - Upload and send an image with no text."),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://platform.openai.com/docs/api-reference/images/create-edit"},"Create Image Edit")," - Upload an image and add text. You can also upload a second image to be used as a ",(0,A.kt)("em",{parentName:"li"},"mask"),".")),(0,A.kt)("h4",{id:"example-2"},"Example"),(0,A.kt)(r.Z,{mdxType:"ContainersKeyToggle"},(0,A.kt)(l.Z,{mdxType:"ComponentContainer"},(0,A.kt)(i.Z,{containerStyle:{borderRadius:"8px"},directConnection:{openAI:{key:"placeholder key",images:{n:1,size:"1024x1024",response_format:"url"}}},mdxType:"DeepChatBrowser"})),(0,A.kt)(l.Z,{mdxType:"ComponentContainer"},(0,A.kt)(i.Z,{containerStyle:{borderRadius:"8px"},directConnection:{openAI:{images:{n:1,size:"1024x1024",response_format:"url"}}},mdxType:"DeepChatBrowser"}))),(0,A.kt)(d.Z,{mdxType:"Tabs"},(0,A.kt)(s.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  directConnection=\'{\n    "openAI": {\n      "key": "placeholder key",\n      "images": {"n": 1, "size": "1024x1024", "response_format": "url"}\n    }\n  }\'\n></deep-chat>\n'))),(0,A.kt)(s.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  directConnection=\'{\n    "openAI": {\n      "key": "placeholder key",\n      "images": {"n": 2, "size": "1024x1024", "response_format": "url"}\n    }\n  }\'\n  containerStyle=\'{"borderRadius": "8px"}\'\n></deep-chat>\n')))),(0,A.kt)(p.Z,{mdxType:"LineBreak"}),(0,A.kt)("h3",{id:"Audio"},(0,A.kt)("inlineCode",{parentName:"h3"},"Audio")),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"Type: ",(0,A.kt)("inlineCode",{parentName:"li"},"true")," | { ",(0,A.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,A.kt)("inlineCode",{parentName:"li"},'model?: "whisper-1"'),", ",(0,A.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,A.kt)("inlineCode",{parentName:"li"},"temperature?: number"),", ",(0,A.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,A.kt)("inlineCode",{parentName:"li"},"language?: string"),", ",(0,A.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,A.kt)("inlineCode",{parentName:"li"},"type?:")," ",(0,A.kt)("inlineCode",{parentName:"li"},'"transcription" | "translation"')," ",(0,A.kt)("br",null),"\n}"),(0,A.kt)("li",{parentName:"ul"},"Default: ",(0,A.kt)("em",{parentName:"li"},'{model: "whisper-1", type: "transcription"}'))),(0,A.kt)("p",null,"Connect to Open AI's ",(0,A.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/audio"},(0,A.kt)("inlineCode",{parentName:"a"},"Audio"))," API. ",(0,A.kt)("br",null),"\nYou can either set this property to ",(0,A.kt)("em",{parentName:"p"},"true")," or use an object to augment the ",(0,A.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/audio/create"},(0,A.kt)("inlineCode",{parentName:"a"},"request body")),": ",(0,A.kt)("br",null),"\n",(0,A.kt)("inlineCode",{parentName:"p"},"model")," is the name of the model to use. ",(0,A.kt)("em",{parentName:"p"},'"whisper-1"')," is currently the only one available. ",(0,A.kt)("br",null),"\n",(0,A.kt)("inlineCode",{parentName:"p"},"temperature")," is used for sampling; between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused. ",(0,A.kt)("br",null),"\n",(0,A.kt)("inlineCode",{parentName:"p"},"language")," is the language used the input audio. Supplying the input language in ",(0,A.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"},(0,A.kt)("em",{parentName:"a"},"ISO-639-1"))," format will improve accuracy and latency. (Only used for ",(0,A.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/audio/create"},(0,A.kt)("em",{parentName:"a"},"transcription"))," based API). ",(0,A.kt)("br",null),"\n",(0,A.kt)("inlineCode",{parentName:"p"},"type")," is used to toggle between the ",(0,A.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/audio/create"},(0,A.kt)("em",{parentName:"a"},"transcription"))," and the ",(0,A.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/audio/create"},(0,A.kt)("em",{parentName:"a"},"translation"))," APIs.\nNote that ",(0,A.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/audio/create"},(0,A.kt)("em",{parentName:"a"},"translation"))," can only attempt to translate audio into ",(0,A.kt)("em",{parentName:"p"},"English"),"."),(0,A.kt)("h4",{id:"example-3"},"Example"),(0,A.kt)(r.Z,{mdxType:"ContainersKeyToggle"},(0,A.kt)(l.Z,{mdxType:"ComponentContainer"},(0,A.kt)(i.Z,{containerStyle:{borderRadius:"8px"},directConnection:{openAI:{key:"placeholder key",audio:{model:"whisper-1",temperature:.3,language:"en",type:"transcription"}}},mdxType:"DeepChatBrowser"})),(0,A.kt)(l.Z,{mdxType:"ComponentContainer"},(0,A.kt)(i.Z,{containerStyle:{borderRadius:"8px"},directConnection:{openAI:{audio:{model:"whisper-1",temperature:.3,language:"en",type:"transcription"}}},mdxType:"DeepChatBrowser"}))),(0,A.kt)(d.Z,{mdxType:"Tabs"},(0,A.kt)(s.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  directConnection=\'{\n    "openAI": {\n      "key": "placeholder key",\n      "audio": {"model": "whisper-1", "temperature": 0.3, "language": "en", "type": "transcription"}\n    }\n  }\'\n></deep-chat>\n'))),(0,A.kt)(s.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  directConnection=\'{\n    "openAI": {\n      "key": "placeholder key",\n      "audio": {"model": "whisper-1", "temperature": 0.3, "language": "en", "type": "transcription"}\n    }\n  }\'\n  containerStyle=\'{"borderRadius": "8px"}\'\n></deep-chat>\n')))),(0,A.kt)(p.Z,{mdxType:"LineBreak"}),(0,A.kt)("h2",{id:"shared-types"},"Shared Types"),(0,A.kt)("p",null,"Types used in ",(0,A.kt)("a",{parentName:"p",href:"#openAI"},(0,A.kt)("inlineCode",{parentName:"a"},"openAI"))," properties:"),(0,A.kt)("h3",{id:"OpenAIConverse"},(0,A.kt)("inlineCode",{parentName:"h3"},"OpenAIConverse")),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"Type: {",(0,A.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,A.kt)("inlineCode",{parentName:"li"},"model?: string"),", ",(0,A.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,A.kt)("inlineCode",{parentName:"li"},"max_tokens?: number"),", ",(0,A.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,A.kt)("inlineCode",{parentName:"li"},"temperature?: number"),", ",(0,A.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,A.kt)("inlineCode",{parentName:"li"},"top_p?: number")," ",(0,A.kt)("br",null),"\n}")),(0,A.kt)("p",null,"Object that is sent to Open AI's ",(0,A.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/chat/create"},(0,A.kt)("inlineCode",{parentName:"a"},"Chat"))," and ",(0,A.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/completions/create"},(0,A.kt)("inlineCode",{parentName:"a"},"Completions"))," API. ",(0,A.kt)("br",null),"\n",(0,A.kt)("inlineCode",{parentName:"p"},"model")," is name of the model to be used by the API. Check out the model ",(0,A.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/models/model-endpoint-compatibility"},"endpoint compatibility table"),". ",(0,A.kt)("br",null),"\n",(0,A.kt)("inlineCode",{parentName:"p"},"max_tokens")," the maximum number of tokens to generate in the chat. See here for more ",(0,A.kt)("a",{parentName:"p",href:"https://platform.openai.com/tokenizer"},(0,A.kt)("inlineCode",{parentName:"a"},"info")),". ",(0,A.kt)("br",null),"\n",(0,A.kt)("inlineCode",{parentName:"p"},"temperature")," is used for sampling; between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused. ",(0,A.kt)("br",null),"\n",(0,A.kt)("inlineCode",{parentName:"p"},"top_p")," is an alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. ",(0,A.kt)("br",null)),(0,A.kt)("h4",{id:"example-4"},"Example"),(0,A.kt)(r.Z,{mdxType:"ContainersKeyToggle"},(0,A.kt)(l.Z,{mdxType:"ComponentContainer"},(0,A.kt)(i.Z,{containerStyle:{borderRadius:"8px"},directConnection:{openAI:{key:"placeholder key",chat:{model:"gpt-4",max_tokens:2e3,temperature:1,top_p:1}}},mdxType:"DeepChatBrowser"})),(0,A.kt)(l.Z,{mdxType:"ComponentContainer"},(0,A.kt)(i.Z,{containerStyle:{borderRadius:"8px"},directConnection:{openAI:{chat:{model:"gpt-4",max_tokens:2e3,temperature:1,top_p:1}}},mdxType:"DeepChatBrowser"}))),(0,A.kt)(d.Z,{mdxType:"Tabs"},(0,A.kt)(s.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  directConnection=\'{\n    "openAI": {\n      "key": "placeholder key",\n      "chat": {\n        "model": "gpt-4",\n        "max_tokens": 2000,\n        "temperature": 1,\n        "top_p": 1\n      }\n    }\n  }\'\n></deep-chat>\n'))),(0,A.kt)(s.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  directConnection=\'{\n    "openAI": {\n      "key": "placeholder key",\n      "chat": {\n        "model": "gpt-4",\n        "max_tokens": 2000,\n        "temperature": 1,\n        "top_p": 1\n      }\n    }\n  }\'\n  containerStyle=\'{"borderRadius": "8px"}\'\n></deep-chat>\n')))),(0,A.kt)(p.Z,{mdxType:"LineBreak"}))}f.isMDXComponent=!0},7273:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);