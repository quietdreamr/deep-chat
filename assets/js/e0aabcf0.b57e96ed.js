"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7654],{4602:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(1262),s=n(7294);function a(e){return s.createElement(o.Z,null,(()=>{const t=n(2150).DeepChat;return s.createElement(t,e,e.children)}))}},2765:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var o=n(4602),s=n(2949),a=n(1262),l=n(7294);const c={response:{text:"Click the 'Configure' button below to connect to a service."}};function r(e){let{config:t}=e;const n=l.createRef(null);function r(e){let{isInitial:o}=e;if(!o){const{messages:e}=t;e.splice(0,e.length),e.push(...n.current.children[0].getMessages())}}function p(){t?.messages.splice(0,t.messages.length)}function h(e,t){if(e[t])return e[t];const n="key"===Object.keys(e)[0]?Object.keys(e)[1]:Object.keys(e)[0];return"object"==typeof e[n]&&h(e[n],t)}return l.createElement(a.Z,null,(()=>{const{colorMode:e}=(0,s.I)();return"dark"===e?l.createElement("div",{ref:n,className:"playground-chat-component"},t?.connect?.custom?l.createElement(o.Z,{request:t.connect.custom,images:h(t.connect,"allowImages"),camera:h(t.connect,"allowCamera"),gifs:h(t.connect,"allowGifs"),audio:h(t.connect,"allowAudio"),microphone:h(t.connect,"allowMicrophone"),mixedFiles:h(t.connect,"allowMixedFiles"),style:i,messageStyles:u,initialMessages:t.messages,onNewMessage:r,onClearMessages:p,textInput:m,submitButtonStyles:g,auxiliaryStyle:d,introPanelStyle:b}):t?.connect?.demo?l.createElement(o.Z,{demo:c,style:i,messageStyles:u,initialMessages:t.messages,onNewMessage:r,onClearMessages:p,textInput:m,submitButtonStyles:g,auxiliaryStyle:d,introPanelStyle:b}):l.createElement(o.Z,{directConnection:t.connect,images:h(t.connect,"allowImages"),camera:h(t.connect,"allowCamera"),gifs:h(t.connect,"allowGifs"),audio:h(t.connect,"allowAudio"),microphone:h(t.connect,"allowMicrophone"),mixedFiles:h(t.connect,"allowMixedFiles"),style:i,messageStyles:u,initialMessages:t.messages,onNewMessage:r,onClearMessages:p,textInput:m,submitButtonStyles:g,auxiliaryStyle:d,introPanelStyle:b})):l.createElement("div",{ref:n,className:"playground-chat-component"},t?.connect?.custom?l.createElement(o.Z,{request:t.connect.custom,images:h(t.connect,"allowImages"),camera:h(t.connect,"allowCamera"),gifs:h(t.connect,"allowGifs"),audio:h(t.connect,"allowAudio"),microphone:h(t.connect,"allowMicrophone"),mixedFiles:h(t.connect,"allowMixedFiles"),style:w,initialMessages:t.messages,onNewMessage:r,onClearMessages:p}):t?.connect?.demo?l.createElement(o.Z,{demo:c,style:w,initialMessages:t.messages,onNewMessage:r,onClearMessages:p}):l.createElement(o.Z,{directConnection:t.connect,images:h(t.connect,"allowImages"),camera:h(t.connect,"allowCamera"),gifs:h(t.connect,"allowGifs"),audio:h(t.connect,"allowAudio"),microphone:h(t.connect,"allowMicrophone"),mixedFiles:h(t.connect,"allowMixedFiles"),style:w,initialMessages:t.messages,onNewMessage:r,onClearMessages:p}))}))}const i={borderRadius:"10px",boxShadow:"0 .5rem 1rem 0 rgba(44, 51, 73, .1)",border:"1px solid #ededed",marginLeft:"10px",border:"unset",marginRight:"10px",width:"302px",backgroundColor:"#2e2e2e"},u={default:{ai:{bubble:{backgroundColor:"#545454",color:"white"}}},loading:{bubble:{backgroundColor:"#545454",color:"white"}}},m={styles:{container:{backgroundColor:"#4e4e4e",border:"unset",color:"#e8e8e8"}},placeholder:{style:{color:"#bcbcbc"}}},g={submit:{container:{default:{bottom:"0.7rem"}},svg:{styles:{default:{filter:"brightness(0) saturate(100%) invert(70%) sepia(52%) saturate(5617%) hue-rotate(185deg) brightness(101%) contrast(101%)"}}}}},d="\n  ::-webkit-scrollbar {\n    width: 10px;\n    height: 10px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background-color: grey;\n    border-radius: 5px;\n  }\n  ::-webkit-scrollbar-track {\n    background-color: unset;\n  }",b={backgroundColor:"#4f4f4f",color:"white",border:"unset"},w={borderRadius:"10px",boxShadow:"0 .5rem 1rem 0 rgba(44, 51, 73, .1)",border:"1px solid #ededed",marginLeft:"10px",marginRight:"10px",width:"302px"}}}]);