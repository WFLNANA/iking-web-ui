(function(n,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(n=typeof globalThis<"u"?globalThis:n||self,t(n.index={},n.Vue))})(this,function(n,t){"use strict";const u=(r,s)=>{if(r.install=e=>{for(const c of[r,...Object.values(s??{})])e.component(c.name,c)},s)for(const[e,c]of Object.entries(s))r[e]=c;return r},p=["src"],a={name:"IkPrintConfig"},l=t.defineComponent({...a,props:{id:{},srcPrefix:{default:""},token:{}},emits:["created"],setup(r,{emit:s}){const e=r,c=t.computed(()=>!!e.id),o=t.reactive({currentId:e.id,loading:!0,src:""}),m=async()=>{fetch(`${e.srcPrefix??""}/jmreport/save`,{method:"POST",body:JSON.stringify({}),headers:{"Content-Type":"application/json",Authorization:e.token??""}}).then(i=>i.json()).then(({code:i,result:f})=>{if(i===200){const k=f.id;o.currentId=k,o.src=`${e.srcPrefix??""}/jmreport/index/${o.currentId}?token=${e.token}&menuType=printinfo`,s("created",o.currentId)}}).catch(i=>{console.error(i)})},h=()=>{if(!c.value){m();return}o.src=`${e.srcPrefix??""}/jmreport/index/${o.currentId}?token=${e.token}`};return t.onMounted(()=>{h()}),(i,f)=>o.src?(t.openBlock(),t.createElementBlock("iframe",{key:0,width:"100%",height:"100%",src:o.src,frameborder:"0"},`\r
  `,8,p)):t.createCommentVNode("",!0)}}),d=u(l);n.IkPrintConfig=d,n.default=d,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});