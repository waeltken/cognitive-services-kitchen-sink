import{d as i,o as c,c as r,a as e,w as n,j as a,u as t,v as p,F as d}from"./index.bda7e232.js";import{u}from"./settings.1a7a463f.js";const x=e("br",null,null,-1),_={class:"form-control w-full max-w-xs"},b=e("label",{class:"label"},[e("span",{class:"label-text"},[e("strong",null,"Cognitive Services Subscription Key")])],-1),m=e("label",{class:"label"},[e("span",{class:"label-text-alt"},"Example: e000cad0902x44f0x0c02xxxe12xxx3")],-1),f=e("br",null,null,-1),h={class:"form-control w-full max-w-xs"},w=e("label",{class:"label"},[e("span",{class:"label-text"},[e("strong",null,"Pick your Cognitive Services Region")])],-1),v=e("option",{disabled:"",selected:""},"Pick one or type your region",-1),y=e("option",null,"westeurope",-1),g=e("option",null,"northeurope",-1),S=e("option",null,"westus",-1),E=e("option",null,"eastus",-1),k=e("option",null,"germanywestcentral",-1),A=[v,y,g,S,E,k],V={class:"form-control w-full max-w-xs"},F=e("label",{class:"label"},[e("span",{class:"label-text"},[e("strong",null,"Face Service Subscription Key")])],-1),K=e("label",{class:"label"},[e("span",{class:"label-text-alt"},"Example: e000cad0902x44f0x0c02xxxe12xxx3")],-1),M={class:"form-control w-full max-w-xs"},T=e("label",{class:"label"},[e("span",{class:"label-text"},[e("strong",null,"Face Service endpoint")])],-1),U=e("label",{class:"label"},[e("span",{class:"label-text-alt"},"Example: https://SAMPLE-NAME.cognitiveservices.azure.com/")],-1),N=i({setup(z){const l=u();return(B,s)=>(c(),r(d,null,[x,e("div",_,[b,n(e("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>t(l).apikey=o),type:"text",placeholder:"Type here",class:"input input-bordered w-full max-w-xs"},null,512),[[a,t(l).apikey]]),m]),f,e("div",h,[w,n(e("select",{class:"select select-bordered","onUpdate:modelValue":s[1]||(s[1]=o=>t(l).azureregion=o)},A,512),[[p,t(l).azureregion]])]),e("div",V,[F,n(e("input",{"onUpdate:modelValue":s[2]||(s[2]=o=>t(l).faceApiKey=o),type:"text",placeholder:"Type here",class:"input input-bordered w-full max-w-xs"},null,512),[[a,t(l).faceApiKey]]),K]),e("div",M,[T,n(e("input",{"onUpdate:modelValue":s[3]||(s[3]=o=>t(l).faceApiEndpoint=o),type:"text",placeholder:"Type here",class:"input input-bordered w-full max-w-xs"},null,512),[[a,t(l).faceApiEndpoint]]),U])],64))}});export{N as default};
