const bl=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};bl();function ga(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const yl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_l=ga(yl);function Eo(e){return!!e||e===""}function va(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ve(r)?El(r):va(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ve(e))return e;if(de(e))return e}}const wl=/;(?![^(]*\))/g,xl=/:(.+)/;function El(e){const t={};return e.split(wl).forEach(n=>{if(n){const r=n.split(xl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ba(e){let t="";if(ve(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=ba(e[n]);r&&(t+=r+" ")}else if(de(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function kl(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=or(e[r],t[r]);return n}function or(e,t){if(e===t)return!0;let n=oi(e),r=oi(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=H(e),r=H(t),n||r)return n&&r?kl(e,t):!1;if(n=de(e),r=de(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!or(e[o],t[o]))return!1}}return String(e)===String(t)}function Al(e,t){return e.findIndex(n=>or(n,t))}const Th=e=>ve(e)?e:e==null?"":H(e)||de(e)&&(e.toString===Co||!Y(e.toString))?JSON.stringify(e,ko,2):String(e),ko=(e,t)=>t&&t.__v_isRef?ko(e,t.value):Wt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:lr(t)?{[`Set(${t.size})`]:[...t.values()]}:de(t)&&!H(t)&&!Po(t)?String(t):t,te={},Kt=[],ze=()=>{},Cl=()=>!1,Pl=/^on[^a-z]/,sr=e=>Pl.test(e),ya=e=>e.startsWith("onUpdate:"),_e=Object.assign,_a=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ol=Object.prototype.hasOwnProperty,X=(e,t)=>Ol.call(e,t),H=Array.isArray,Wt=e=>cr(e)==="[object Map]",lr=e=>cr(e)==="[object Set]",oi=e=>e instanceof Date,Y=e=>typeof e=="function",ve=e=>typeof e=="string",wa=e=>typeof e=="symbol",de=e=>e!==null&&typeof e=="object",Ao=e=>de(e)&&Y(e.then)&&Y(e.catch),Co=Object.prototype.toString,cr=e=>Co.call(e),Sl=e=>cr(e).slice(8,-1),Po=e=>cr(e)==="[object Object]",xa=e=>ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Fn=ga(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Il=/-(\w)/g,Ye=fr(e=>e.replace(Il,(t,n)=>n?n.toUpperCase():"")),Rl=/\B([A-Z])/g,Qt=fr(e=>e.replace(Rl,"-$1").toLowerCase()),ur=fr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Or=fr(e=>e?`on${ur(e)}`:""),wn=(e,t)=>!Object.is(e,t),zn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Bn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Kn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let si;const Tl=()=>si||(si=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Xe;class Oo{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Xe&&(this.parent=Xe,this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1)}run(t){if(this.active)try{return Xe=this,t()}finally{Xe=this.parent}}on(){Xe=this}off(){Xe=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function So(e){return new Oo(e)}function Nl(e,t=Xe){t&&t.active&&t.effects.push(e)}const Ea=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Io=e=>(e.w&gt)>0,Ro=e=>(e.n&gt)>0,Ml=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=gt},Ll=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Io(a)&&!Ro(a)?a.delete(e):t[n++]=a,a.w&=~gt,a.n&=~gt}t.length=n}},$r=new WeakMap;let ln=0,gt=1;const Dr=30;let Ke;const Ot=Symbol(""),Hr=Symbol("");class ka{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Nl(this,r)}run(){if(!this.active)return this.fn();let t=Ke,n=mt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ke,Ke=this,mt=!0,gt=1<<++ln,ln<=Dr?Ml(this):li(this),this.fn()}finally{ln<=Dr&&Ll(this),gt=1<<--ln,Ke=this.parent,mt=n,this.parent=void 0}}stop(){this.active&&(li(this),this.onStop&&this.onStop(),this.active=!1)}}function li(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let mt=!0;const To=[];function Zt(){To.push(mt),mt=!1}function en(){const e=To.pop();mt=e===void 0?!0:e}function Pe(e,t,n){if(mt&&Ke){let r=$r.get(e);r||$r.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Ea()),No(a)}}function No(e,t){let n=!1;ln<=Dr?Ro(e)||(e.n|=gt,n=!Io(e)):n=!e.has(Ke),n&&(e.add(Ke),Ke.deps.push(e))}function Ze(e,t,n,r,a,i){const o=$r.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&H(e))o.forEach((l,f)=>{(f==="length"||f>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":H(e)?xa(n)&&s.push(o.get("length")):(s.push(o.get(Ot)),Wt(e)&&s.push(o.get(Hr)));break;case"delete":H(e)||(s.push(o.get(Ot)),Wt(e)&&s.push(o.get(Hr)));break;case"set":Wt(e)&&s.push(o.get(Ot));break}if(s.length===1)s[0]&&Ur(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Ur(Ea(l))}}function Ur(e,t){for(const n of H(e)?e:[...e])(n!==Ke||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Fl=ga("__proto__,__v_isRef,__isVue"),Mo=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(wa)),zl=Aa(),jl=Aa(!1,!0),$l=Aa(!0),ci=Dl();function Dl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)Pe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(G)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Zt();const r=G(this)[t].apply(this,n);return en(),r}}),e}function Aa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?nc:$o:t?jo:zo).get(r))return r;const o=H(r);if(!e&&o&&X(ci,a))return Reflect.get(ci,a,i);const s=Reflect.get(r,a,i);return(wa(a)?Mo.has(a):Fl(a))||(e||Pe(r,"get",a),t)?s:fe(s)?!o||!xa(a)?s.value:s:de(s)?e?Do(s):tn(s):s}}const Hl=Lo(),Ul=Lo(!0);function Lo(e=!1){return function(n,r,a,i){let o=n[r];if(xn(o)&&fe(o)&&!fe(a))return!1;if(!e&&!xn(a)&&(Ho(a)||(a=G(a),o=G(o)),!H(n)&&fe(o)&&!fe(a)))return o.value=a,!0;const s=H(n)&&xa(r)?Number(r)<n.length:X(n,r),l=Reflect.set(n,r,a,i);return n===G(i)&&(s?wn(a,o)&&Ze(n,"set",r,a):Ze(n,"add",r,a)),l}}function Bl(e,t){const n=X(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ze(e,"delete",t,void 0),r}function Kl(e,t){const n=Reflect.has(e,t);return(!wa(t)||!Mo.has(t))&&Pe(e,"has",t),n}function Wl(e){return Pe(e,"iterate",H(e)?"length":Ot),Reflect.ownKeys(e)}const Fo={get:zl,set:Hl,deleteProperty:Bl,has:Kl,ownKeys:Wl},Yl={get:$l,set(e,t){return!0},deleteProperty(e,t){return!0}},Vl=_e({},Fo,{get:jl,set:Ul}),Ca=e=>e,dr=e=>Reflect.getPrototypeOf(e);function In(e,t,n=!1,r=!1){e=e.__v_raw;const a=G(e),i=G(t);t!==i&&!n&&Pe(a,"get",t),!n&&Pe(a,"get",i);const{has:o}=dr(a),s=r?Ca:n?Sa:En;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Rn(e,t=!1){const n=this.__v_raw,r=G(n),a=G(e);return e!==a&&!t&&Pe(r,"has",e),!t&&Pe(r,"has",a),e===a?n.has(e):n.has(e)||n.has(a)}function Tn(e,t=!1){return e=e.__v_raw,!t&&Pe(G(e),"iterate",Ot),Reflect.get(e,"size",e)}function fi(e){e=G(e);const t=G(this);return dr(t).has.call(t,e)||(t.add(e),Ze(t,"add",e,e)),this}function ui(e,t){t=G(t);const n=G(this),{has:r,get:a}=dr(n);let i=r.call(n,e);i||(e=G(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?wn(t,o)&&Ze(n,"set",e,t):Ze(n,"add",e,t),this}function di(e){const t=G(this),{has:n,get:r}=dr(t);let a=n.call(t,e);a||(e=G(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ze(t,"delete",e,void 0),i}function mi(){const e=G(this),t=e.size!==0,n=e.clear();return t&&Ze(e,"clear",void 0,void 0),n}function Nn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=G(o),l=t?Ca:e?Sa:En;return!e&&Pe(s,"iterate",Ot),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function Mn(e,t,n){return function(...r){const a=this.__v_raw,i=G(a),o=Wt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?Ca:t?Sa:En;return!t&&Pe(i,"iterate",l?Hr:Ot),{next(){const{value:d,done:m}=f.next();return m?{value:d,done:m}:{value:s?[c(d[0]),c(d[1])]:c(d),done:m}},[Symbol.iterator](){return this}}}}function it(e){return function(...t){return e==="delete"?!1:this}}function ql(){const e={get(i){return In(this,i)},get size(){return Tn(this)},has:Rn,add:fi,set:ui,delete:di,clear:mi,forEach:Nn(!1,!1)},t={get(i){return In(this,i,!1,!0)},get size(){return Tn(this)},has:Rn,add:fi,set:ui,delete:di,clear:mi,forEach:Nn(!1,!0)},n={get(i){return In(this,i,!0)},get size(){return Tn(this,!0)},has(i){return Rn.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:Nn(!0,!1)},r={get(i){return In(this,i,!0,!0)},get size(){return Tn(this,!0)},has(i){return Rn.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:Nn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Mn(i,!1,!1),n[i]=Mn(i,!0,!1),t[i]=Mn(i,!1,!0),r[i]=Mn(i,!0,!0)}),[e,n,t,r]}const[Xl,Gl,Jl,Ql]=ql();function Pa(e,t){const n=t?e?Ql:Jl:e?Gl:Xl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(X(n,a)&&a in r?n:r,a,i)}const Zl={get:Pa(!1,!1)},ec={get:Pa(!1,!0)},tc={get:Pa(!0,!1)},zo=new WeakMap,jo=new WeakMap,$o=new WeakMap,nc=new WeakMap;function rc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ac(e){return e.__v_skip||!Object.isExtensible(e)?0:rc(Sl(e))}function tn(e){return xn(e)?e:Oa(e,!1,Fo,Zl,zo)}function ic(e){return Oa(e,!1,Vl,ec,jo)}function Do(e){return Oa(e,!0,Yl,tc,$o)}function Oa(e,t,n,r,a){if(!de(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=ac(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function ht(e){return xn(e)?ht(e.__v_raw):!!(e&&e.__v_isReactive)}function xn(e){return!!(e&&e.__v_isReadonly)}function Ho(e){return!!(e&&e.__v_isShallow)}function Uo(e){return ht(e)||xn(e)}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function qt(e){return Bn(e,"__v_skip",!0),e}const En=e=>de(e)?tn(e):e,Sa=e=>de(e)?Do(e):e;function Bo(e){mt&&Ke&&(e=G(e),No(e.dep||(e.dep=Ea())))}function Ko(e,t){e=G(e),e.dep&&Ur(e.dep)}function fe(e){return!!(e&&e.__v_isRef===!0)}function Ia(e){return Wo(e,!1)}function oc(e){return Wo(e,!0)}function Wo(e,t){return fe(e)?e:new sc(e,t)}class sc{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:G(t),this._value=n?t:En(t)}get value(){return Bo(this),this._value}set value(t){t=this.__v_isShallow?t:G(t),wn(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:En(t),Ko(this))}}function ye(e){return fe(e)?e.value:e}const lc={get:(e,t,n)=>ye(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return fe(a)&&!fe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Yo(e){return ht(e)?e:new Proxy(e,lc)}function cc(e){const t=H(e)?new Array(e.length):{};for(const n in e)t[n]=uc(e,n);return t}class fc{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function uc(e,t,n){const r=e[t];return fe(r)?r:new fc(e,t,n)}class dc{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ka(t,()=>{this._dirty||(this._dirty=!0,Ko(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=G(this);return Bo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function mc(e,t,n=!1){let r,a;const i=Y(e);return i?(r=e,a=ze):(r=e.get,a=e.set),new dc(r,a,i||!a,n)}Promise.resolve();function pt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){mr(i,t,n)}return a}function je(e,t,n,r){if(Y(e)){const i=pt(e,t,n,r);return i&&Ao(i)&&i.catch(o=>{mr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(je(e[i],t,n,r));return a}function mr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){pt(l,null,10,[e,o,s]);return}}hc(e,n,a,r)}function hc(e,t,n,r=!0){console.error(e)}let Wn=!1,Br=!1;const Ae=[];let Je=0;const dn=[];let cn=null,$t=0;const mn=[];let ft=null,Dt=0;const Vo=Promise.resolve();let Ra=null,Kr=null;function Ta(e){const t=Ra||Vo;return e?t.then(this?e.bind(this):e):t}function pc(e){let t=Je+1,n=Ae.length;for(;t<n;){const r=t+n>>>1;kn(Ae[r])<e?t=r+1:n=r}return t}function qo(e){(!Ae.length||!Ae.includes(e,Wn&&e.allowRecurse?Je+1:Je))&&e!==Kr&&(e.id==null?Ae.push(e):Ae.splice(pc(e.id),0,e),Xo())}function Xo(){!Wn&&!Br&&(Br=!0,Ra=Vo.then(Qo))}function gc(e){const t=Ae.indexOf(e);t>Je&&Ae.splice(t,1)}function Go(e,t,n,r){H(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Xo()}function vc(e){Go(e,cn,dn,$t)}function bc(e){Go(e,ft,mn,Dt)}function Na(e,t=null){if(dn.length){for(Kr=t,cn=[...new Set(dn)],dn.length=0,$t=0;$t<cn.length;$t++)cn[$t]();cn=null,$t=0,Kr=null,Na(e,t)}}function Jo(e){if(mn.length){const t=[...new Set(mn)];if(mn.length=0,ft){ft.push(...t);return}for(ft=t,ft.sort((n,r)=>kn(n)-kn(r)),Dt=0;Dt<ft.length;Dt++)ft[Dt]();ft=null,Dt=0}}const kn=e=>e.id==null?1/0:e.id;function Qo(e){Br=!1,Wn=!0,Na(e),Ae.sort((n,r)=>kn(n)-kn(r));const t=ze;try{for(Je=0;Je<Ae.length;Je++){const n=Ae[Je];n&&n.active!==!1&&pt(n,null,14)}}finally{Je=0,Ae.length=0,Jo(),Wn=!1,Ra=null,(Ae.length||dn.length||mn.length)&&Qo(e)}}function yc(e,t,...n){const r=e.vnode.props||te;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:m}=r[c]||te;m?a=n.map(g=>g.trim()):d&&(a=n.map(Kn))}let s,l=r[s=Or(t)]||r[s=Or(Ye(t))];!l&&i&&(l=r[s=Or(Qt(t))]),l&&je(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,je(f,e,6,a)}}function Zo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!Y(e)){const l=f=>{const c=Zo(f,t,!0);c&&(s=!0,_e(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(H(i)?i.forEach(l=>o[l]=null):_e(o,i),r.set(e,o),o)}function Ma(e,t){return!e||!sr(t)?!1:(t=t.slice(2).replace(/Once$/,""),X(e,t[0].toLowerCase()+t.slice(1))||X(e,Qt(t))||X(e,t))}let Ce=null,hr=null;function Yn(e){const t=Ce;return Ce=e,hr=e&&e.type.__scopeId||null,t}function _c(e){hr=e}function wc(){hr=null}function Me(e,t=Ce,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ei(-1);const i=Yn(t),o=e(...a);return Yn(i),r._d&&Ei(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Sr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:d,data:m,setupState:g,ctx:E,inheritAttrs:R}=e;let O,v;const w=Yn(e);try{if(n.shapeFlag&4){const L=a||r;O=Be(c.call(L,L,d,i,g,m,E)),v=l}else{const L=t;O=Be(L.length>1?L(i,{attrs:l,slots:s,emit:f}):L(i,null)),v=t.props?l:xc(l)}}catch(L){hn.length=0,mr(L,e,1),O=ae(vt)}let N=O;if(v&&R!==!1){const L=Object.keys(v),{shapeFlag:K}=N;L.length&&K&7&&(o&&L.some(ya)&&(v=Ec(v,o)),N=An(N,v))}return n.dirs&&(N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),O=N,Yn(w),O}const xc=e=>{let t;for(const n in e)(n==="class"||n==="style"||sr(n))&&((t||(t={}))[n]=e[n]);return t},Ec=(e,t)=>{const n={};for(const r in e)(!ya(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function kc(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?hi(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const m=c[d];if(o[m]!==r[m]&&!Ma(f,m))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?hi(r,o,f):!0:!!o;return!1}function hi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Ma(n,i))return!0}return!1}function Ac({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Cc=e=>e.__isSuspense;function Pc(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):bc(e)}function jn(e,t){if(ge){let n=ge.provides;const r=ge.parent&&ge.parent.provides;r===n&&(n=ge.provides=Object.create(r)),n[e]=t}}function Qe(e,t,n=!1){const r=ge||Ce;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&Y(t)?t.call(r.proxy):t}}const pi={};function Yt(e,t,n){return es(e,t,n)}function es(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=te){const s=ge;let l,f=!1,c=!1;if(fe(e)?(l=()=>e.value,f=Ho(e)):ht(e)?(l=()=>e,r=!0):H(e)?(c=!0,f=e.some(ht),l=()=>e.map(v=>{if(fe(v))return v.value;if(ht(v))return Ct(v);if(Y(v))return pt(v,s,2)})):Y(e)?t?l=()=>pt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),je(e,s,3,[m])}:l=ze,t&&r){const v=l;l=()=>Ct(v())}let d,m=v=>{d=O.onStop=()=>{pt(v,s,4)}};if(Cn)return m=ze,t?n&&je(t,s,3,[l(),c?[]:void 0,m]):l(),ze;let g=c?[]:pi;const E=()=>{if(!!O.active)if(t){const v=O.run();(r||f||(c?v.some((w,N)=>wn(w,g[N])):wn(v,g)))&&(d&&d(),je(t,s,3,[v,g===pi?void 0:g,m]),g=v)}else O.run()};E.allowRecurse=!!t;let R;a==="sync"?R=E:a==="post"?R=()=>xe(E,s&&s.suspense):R=()=>{!s||s.isMounted?vc(E):E()};const O=new ka(l,R);return t?n?E():g=O.run():a==="post"?xe(O.run.bind(O),s&&s.suspense):O.run(),()=>{O.stop(),s&&s.scope&&_a(s.scope.effects,O)}}function Oc(e,t,n){const r=this.proxy,a=ve(e)?e.includes(".")?ts(r,e):()=>r[e]:e.bind(r,r);let i;Y(t)?i=t:(i=t.handler,n=t);const o=ge;Xt(this);const s=es(a,i.bind(r),n);return o?Xt(o):It(),s}function ts(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Ct(e,t){if(!de(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))Ct(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)Ct(e[n],t);else if(lr(e)||Wt(e))e.forEach(n=>{Ct(n,t)});else if(Po(e))for(const n in e)Ct(e[n],t);return e}function _t(e){return Y(e)?{setup:e,name:e.name}:e}const Wr=e=>!!e.type.__asyncLoader,ns=e=>e.type.__isKeepAlive;function Sc(e,t){rs(e,"a",t)}function Ic(e,t){rs(e,"da",t)}function rs(e,t,n=ge){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(pr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ns(a.parent.vnode)&&Rc(r,t,n,a),a=a.parent}}function Rc(e,t,n,r){const a=pr(t,e,r,!0);La(()=>{_a(r[t],a)},n)}function pr(e,t,n=ge,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Zt(),Xt(n);const s=je(t,n,e,o);return It(),en(),s});return r?a.unshift(i):a.push(i),i}}const rt=e=>(t,n=ge)=>(!Cn||e==="sp")&&pr(e,t,n),Tc=rt("bm"),Nc=rt("m"),Mc=rt("bu"),Lc=rt("u"),Fc=rt("bum"),La=rt("um"),zc=rt("sp"),jc=rt("rtg"),$c=rt("rtc");function Dc(e,t=ge){pr("ec",e,t)}let Yr=!0;function Hc(e){const t=is(e),n=e.proxy,r=e.ctx;Yr=!1,t.beforeCreate&&gi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:d,mounted:m,beforeUpdate:g,updated:E,activated:R,deactivated:O,beforeDestroy:v,beforeUnmount:w,destroyed:N,unmounted:L,render:K,renderTracked:D,renderTriggered:B,errorCaptured:me,serverPrefetch:le,expose:we,inheritAttrs:Re,components:Te,directives:Se,filters:he}=t;if(f&&Uc(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ne in o){const J=o[ne];Y(J)&&(r[ne]=J.bind(n))}if(a){const ne=a.call(n,n);de(ne)&&(e.data=tn(ne))}if(Yr=!0,i)for(const ne in i){const J=i[ne],Ee=Y(J)?J.bind(n,n):Y(J.get)?J.get.bind(n,n):ze,Lt=!Y(J)&&Y(J.set)?J.set.bind(n):ze,qe=ce({get:Ee,set:Lt});Object.defineProperty(r,ne,{enumerable:!0,configurable:!0,get:()=>qe.value,set:$e=>qe.value=$e})}if(s)for(const ne in s)as(s[ne],r,n,ne);if(l){const ne=Y(l)?l.call(n):l;Reflect.ownKeys(ne).forEach(J=>{jn(J,ne[J])})}c&&gi(c,e,"c");function pe(ne,J){H(J)?J.forEach(Ee=>ne(Ee.bind(n))):J&&ne(J.bind(n))}if(pe(Tc,d),pe(Nc,m),pe(Mc,g),pe(Lc,E),pe(Sc,R),pe(Ic,O),pe(Dc,me),pe($c,D),pe(jc,B),pe(Fc,w),pe(La,L),pe(zc,le),H(we))if(we.length){const ne=e.exposed||(e.exposed={});we.forEach(J=>{Object.defineProperty(ne,J,{get:()=>n[J],set:Ee=>n[J]=Ee})})}else e.exposed||(e.exposed={});K&&e.render===ze&&(e.render=K),Re!=null&&(e.inheritAttrs=Re),Te&&(e.components=Te),Se&&(e.directives=Se)}function Uc(e,t,n=ze,r=!1){H(e)&&(e=Vr(e));for(const a in e){const i=e[a];let o;de(i)?"default"in i?o=Qe(i.from||a,i.default,!0):o=Qe(i.from||a):o=Qe(i),fe(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function gi(e,t,n){je(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function as(e,t,n,r){const a=r.includes(".")?ts(n,r):()=>n[r];if(ve(e)){const i=t[e];Y(i)&&Yt(a,i)}else if(Y(e))Yt(a,e.bind(n));else if(de(e))if(H(e))e.forEach(i=>as(i,t,n,r));else{const i=Y(e.handler)?e.handler.bind(n):t[e.handler];Y(i)&&Yt(a,i,e)}}function is(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>Vn(l,f,o,!0)),Vn(l,t,o)),i.set(t,l),l}function Vn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Vn(e,i,n,!0),a&&a.forEach(o=>Vn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Bc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Bc={data:vi,props:Et,emits:Et,methods:Et,computed:Et,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:Et,directives:Et,watch:Wc,provide:vi,inject:Kc};function vi(e,t){return t?e?function(){return _e(Y(e)?e.call(this,this):e,Y(t)?t.call(this,this):t)}:t:e}function Kc(e,t){return Et(Vr(e),Vr(t))}function Vr(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function Et(e,t){return e?_e(_e(Object.create(null),e),t):t}function Wc(e,t){if(!e)return t;if(!t)return e;const n=_e(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function Yc(e,t,n,r=!1){const a={},i={};Bn(i,vr,1),e.propsDefaults=Object.create(null),os(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:ic(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Vc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=G(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let m=c[d];const g=t[m];if(l)if(X(i,m))g!==i[m]&&(i[m]=g,f=!0);else{const E=Ye(m);a[E]=qr(l,s,E,g,e,!1)}else g!==i[m]&&(i[m]=g,f=!0)}}}else{os(e,t,a,i)&&(f=!0);let c;for(const d in s)(!t||!X(t,d)&&((c=Qt(d))===d||!X(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(a[d]=qr(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!X(t,d)&&!0)&&(delete i[d],f=!0)}f&&Ze(e,"set","$attrs")}function os(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Fn(l))continue;const f=t[l];let c;a&&X(a,c=Ye(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:Ma(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=G(n),f=s||te;for(let c=0;c<i.length;c++){const d=i[c];n[d]=qr(a,l,d,f[d],e,!X(f,d))}}return o}function qr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=X(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&Y(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Xt(a),r=f[n]=l.call(null,t),It())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Qt(n))&&(r=!0))}return r}function ss(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!Y(e)){const c=d=>{l=!0;const[m,g]=ss(d,t,!0);_e(o,m),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return r.set(e,Kt),Kt;if(H(i))for(let c=0;c<i.length;c++){const d=Ye(i[c]);bi(d)&&(o[d]=te)}else if(i)for(const c in i){const d=Ye(c);if(bi(d)){const m=i[c],g=o[d]=H(m)||Y(m)?{type:m}:m;if(g){const E=wi(Boolean,g.type),R=wi(String,g.type);g[0]=E>-1,g[1]=R<0||E<R,(E>-1||X(g,"default"))&&s.push(d)}}}const f=[o,s];return r.set(e,f),f}function bi(e){return e[0]!=="$"}function yi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function _i(e,t){return yi(e)===yi(t)}function wi(e,t){return H(t)?t.findIndex(n=>_i(n,e)):Y(t)&&_i(t,e)?0:-1}const ls=e=>e[0]==="_"||e==="$stable",Fa=e=>H(e)?e.map(Be):[Be(e)],qc=(e,t,n)=>{const r=Me((...a)=>Fa(t(...a)),n);return r._c=!1,r},cs=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ls(a))continue;const i=e[a];if(Y(i))t[a]=qc(a,i,r);else if(i!=null){const o=Fa(i);t[a]=()=>o}}},fs=(e,t)=>{const n=Fa(t);e.slots.default=()=>n},Xc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=G(t),Bn(t,"_",n)):cs(t,e.slots={})}else e.slots={},t&&fs(e,t);Bn(e.slots,vr,1)},Gc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=te;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(_e(a,t),!n&&s===1&&delete a._):(i=!t.$stable,cs(t,a)),o=t}else t&&(fs(e,t),o={default:1});if(i)for(const s in a)!ls(s)&&!(s in o)&&delete a[s]};function Nh(e,t){const n=Ce;if(n===null)return e;const r=n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,f=te]=t[i];Y(o)&&(o={mounted:o,updated:o}),o.deep&&Ct(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f})}return e}function wt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Zt(),je(l,n,8,[e.el,s,e,t]),en())}}function us(){return{app:null,config:{isNativeTag:Cl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jc=0;function Qc(e,t){return function(r,a=null){a!=null&&!de(a)&&(a=null);const i=us(),o=new Set;let s=!1;const l=i.app={_uid:Jc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:wf,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&Y(f.install)?(o.add(f),f.install(l,...c)):Y(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,d){if(!s){const m=ae(r,a);return m.appContext=i,c&&t?t(m,f):e(m,f,d),s=!0,l._container=f,f.__vue_app__=l,Da(m.component)||m.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l}};return l}}function Xr(e,t,n,r,a=!1){if(H(e)){e.forEach((m,g)=>Xr(m,t&&(H(t)?t[g]:t),n,r,a));return}if(Wr(r)&&!a)return;const i=r.shapeFlag&4?Da(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===te?s.refs={}:s.refs,d=s.setupState;if(f!=null&&f!==l&&(ve(f)?(c[f]=null,X(d,f)&&(d[f]=null)):fe(f)&&(f.value=null)),Y(l))pt(l,s,12,[o,c]);else{const m=ve(l),g=fe(l);if(m||g){const E=()=>{if(e.f){const R=m?c[l]:l.value;a?H(R)&&_a(R,i):H(R)?R.includes(i)||R.push(i):m?c[l]=[i]:(l.value=[i],e.k&&(c[e.k]=l.value))}else m?(c[l]=o,X(d,l)&&(d[l]=o)):fe(l)&&(l.value=o,e.k&&(c[e.k]=o))};o?(E.id=-1,xe(E,n)):E()}}}const xe=Pc;function Zc(e){return ef(e)}function ef(e,t){const n=Tl();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:d,nextSibling:m,setScopeId:g=ze,cloneNode:E,insertStaticContent:R}=e,O=(u,h,p,_=null,y=null,A=null,S=!1,k=null,C=!!h.dynamicChildren)=>{if(u===h)return;u&&!on(u,h)&&(_=F(u),Ie(u,y,A,!0),u=null),h.patchFlag===-2&&(C=!1,h.dynamicChildren=null);const{type:x,ref:z,shapeFlag:T}=h;switch(x){case za:v(u,h,p,_);break;case vt:w(u,h,p,_);break;case Ir:u==null&&N(h,p,_,S);break;case Le:Se(u,h,p,_,y,A,S,k,C);break;default:T&1?D(u,h,p,_,y,A,S,k,C):T&6?he(u,h,p,_,y,A,S,k,C):(T&64||T&128)&&x.process(u,h,p,_,y,A,S,k,C,re)}z!=null&&y&&Xr(z,u&&u.ref,A,h||u,!h)},v=(u,h,p,_)=>{if(u==null)r(h.el=s(h.children),p,_);else{const y=h.el=u.el;h.children!==u.children&&f(y,h.children)}},w=(u,h,p,_)=>{u==null?r(h.el=l(h.children||""),p,_):h.el=u.el},N=(u,h,p,_)=>{[u.el,u.anchor]=R(u.children,h,p,_,u.el,u.anchor)},L=({el:u,anchor:h},p,_)=>{let y;for(;u&&u!==h;)y=m(u),r(u,p,_),u=y;r(h,p,_)},K=({el:u,anchor:h})=>{let p;for(;u&&u!==h;)p=m(u),a(u),u=p;a(h)},D=(u,h,p,_,y,A,S,k,C)=>{S=S||h.type==="svg",u==null?B(h,p,_,y,A,S,k,C):we(u,h,y,A,S,k,C)},B=(u,h,p,_,y,A,S,k)=>{let C,x;const{type:z,props:T,shapeFlag:j,transition:U,patchFlag:q,dirs:se}=u;if(u.el&&E!==void 0&&q===-1)C=u.el=E(u.el);else{if(C=u.el=o(u.type,A,T&&T.is,T),j&8?c(C,u.children):j&16&&le(u.children,C,null,_,y,A&&z!=="foreignObject",S,k),se&&wt(u,null,_,"created"),T){for(const ie in T)ie!=="value"&&!Fn(ie)&&i(C,ie,null,T[ie],A,u.children,_,y,P);"value"in T&&i(C,"value",null,T.value),(x=T.onVnodeBeforeMount)&&He(x,_,u)}me(C,u,u.scopeId,S,_)}se&&wt(u,null,_,"beforeMount");const Z=(!y||y&&!y.pendingBranch)&&U&&!U.persisted;Z&&U.beforeEnter(C),r(C,h,p),((x=T&&T.onVnodeMounted)||Z||se)&&xe(()=>{x&&He(x,_,u),Z&&U.enter(C),se&&wt(u,null,_,"mounted")},y)},me=(u,h,p,_,y)=>{if(p&&g(u,p),_)for(let A=0;A<_.length;A++)g(u,_[A]);if(y){let A=y.subTree;if(h===A){const S=y.vnode;me(u,S,S.scopeId,S.slotScopeIds,y.parent)}}},le=(u,h,p,_,y,A,S,k,C=0)=>{for(let x=C;x<u.length;x++){const z=u[x]=k?ut(u[x]):Be(u[x]);O(null,z,h,p,_,y,A,S,k)}},we=(u,h,p,_,y,A,S)=>{const k=h.el=u.el;let{patchFlag:C,dynamicChildren:x,dirs:z}=h;C|=u.patchFlag&16;const T=u.props||te,j=h.props||te;let U;p&&xt(p,!1),(U=j.onVnodeBeforeUpdate)&&He(U,p,h,u),z&&wt(h,u,p,"beforeUpdate"),p&&xt(p,!0);const q=y&&h.type!=="foreignObject";if(x?Re(u.dynamicChildren,x,k,p,_,q,A):S||Ee(u,h,k,null,p,_,q,A,!1),C>0){if(C&16)Te(k,h,T,j,p,_,y);else if(C&2&&T.class!==j.class&&i(k,"class",null,j.class,y),C&4&&i(k,"style",T.style,j.style,y),C&8){const se=h.dynamicProps;for(let Z=0;Z<se.length;Z++){const ie=se[Z],Ne=T[ie],Ft=j[ie];(Ft!==Ne||ie==="value")&&i(k,ie,Ne,Ft,y,u.children,p,_,P)}}C&1&&u.children!==h.children&&c(k,h.children)}else!S&&x==null&&Te(k,h,T,j,p,_,y);((U=j.onVnodeUpdated)||z)&&xe(()=>{U&&He(U,p,h,u),z&&wt(h,u,p,"updated")},_)},Re=(u,h,p,_,y,A,S)=>{for(let k=0;k<h.length;k++){const C=u[k],x=h[k],z=C.el&&(C.type===Le||!on(C,x)||C.shapeFlag&70)?d(C.el):p;O(C,x,z,null,_,y,A,S,!0)}},Te=(u,h,p,_,y,A,S)=>{if(p!==_){for(const k in _){if(Fn(k))continue;const C=_[k],x=p[k];C!==x&&k!=="value"&&i(u,k,x,C,S,h.children,y,A,P)}if(p!==te)for(const k in p)!Fn(k)&&!(k in _)&&i(u,k,p[k],null,S,h.children,y,A,P);"value"in _&&i(u,"value",p.value,_.value)}},Se=(u,h,p,_,y,A,S,k,C)=>{const x=h.el=u?u.el:s(""),z=h.anchor=u?u.anchor:s("");let{patchFlag:T,dynamicChildren:j,slotScopeIds:U}=h;U&&(k=k?k.concat(U):U),u==null?(r(x,p,_),r(z,p,_),le(h.children,p,z,y,A,S,k,C)):T>0&&T&64&&j&&u.dynamicChildren?(Re(u.dynamicChildren,j,p,y,A,S,k),(h.key!=null||y&&h===y.subTree)&&ds(u,h,!0)):Ee(u,h,p,z,y,A,S,k,C)},he=(u,h,p,_,y,A,S,k,C)=>{h.slotScopeIds=k,u==null?h.shapeFlag&512?y.ctx.activate(h,p,_,S,C):Mt(h,p,_,y,A,S,C):pe(u,h,C)},Mt=(u,h,p,_,y,A,S)=>{const k=u.component=hf(u,_,y);if(ns(u)&&(k.ctx.renderer=re),pf(k),k.asyncDep){if(y&&y.registerDep(k,ne),!u.el){const C=k.subTree=ae(vt);w(null,C,h,p)}return}ne(k,u,h,p,y,A,S)},pe=(u,h,p)=>{const _=h.component=u.component;if(kc(u,h,p))if(_.asyncDep&&!_.asyncResolved){J(_,h,p);return}else _.next=h,gc(_.update),_.update();else h.component=u.component,h.el=u.el,_.vnode=h},ne=(u,h,p,_,y,A,S)=>{const k=()=>{if(u.isMounted){let{next:z,bu:T,u:j,parent:U,vnode:q}=u,se=z,Z;xt(u,!1),z?(z.el=q.el,J(u,z,S)):z=q,T&&zn(T),(Z=z.props&&z.props.onVnodeBeforeUpdate)&&He(Z,U,z,q),xt(u,!0);const ie=Sr(u),Ne=u.subTree;u.subTree=ie,O(Ne,ie,d(Ne.el),F(Ne),u,y,A),z.el=ie.el,se===null&&Ac(u,ie.el),j&&xe(j,y),(Z=z.props&&z.props.onVnodeUpdated)&&xe(()=>He(Z,U,z,q),y)}else{let z;const{el:T,props:j}=h,{bm:U,m:q,parent:se}=u,Z=Wr(h);if(xt(u,!1),U&&zn(U),!Z&&(z=j&&j.onVnodeBeforeMount)&&He(z,se,h),xt(u,!0),T&&W){const ie=()=>{u.subTree=Sr(u),W(T,u.subTree,u,y,null)};Z?h.type.__asyncLoader().then(()=>!u.isUnmounted&&ie()):ie()}else{const ie=u.subTree=Sr(u);O(null,ie,p,_,u,y,A),h.el=ie.el}if(q&&xe(q,y),!Z&&(z=j&&j.onVnodeMounted)){const ie=h;xe(()=>He(z,se,ie),y)}h.shapeFlag&256&&u.a&&xe(u.a,y),u.isMounted=!0,h=p=_=null}},C=u.effect=new ka(k,()=>qo(u.update),u.scope),x=u.update=C.run.bind(C);x.id=u.uid,xt(u,!0),x()},J=(u,h,p)=>{h.component=u;const _=u.vnode.props;u.vnode=h,u.next=null,Vc(u,h.props,_,p),Gc(u,h.children,p),Zt(),Na(void 0,u.update),en()},Ee=(u,h,p,_,y,A,S,k,C=!1)=>{const x=u&&u.children,z=u?u.shapeFlag:0,T=h.children,{patchFlag:j,shapeFlag:U}=h;if(j>0){if(j&128){qe(x,T,p,_,y,A,S,k,C);return}else if(j&256){Lt(x,T,p,_,y,A,S,k,C);return}}U&8?(z&16&&P(x,y,A),T!==x&&c(p,T)):z&16?U&16?qe(x,T,p,_,y,A,S,k,C):P(x,y,A,!0):(z&8&&c(p,""),U&16&&le(T,p,_,y,A,S,k,C))},Lt=(u,h,p,_,y,A,S,k,C)=>{u=u||Kt,h=h||Kt;const x=u.length,z=h.length,T=Math.min(x,z);let j;for(j=0;j<T;j++){const U=h[j]=C?ut(h[j]):Be(h[j]);O(u[j],U,p,null,y,A,S,k,C)}x>z?P(u,y,A,!0,!1,T):le(h,p,_,y,A,S,k,C,T)},qe=(u,h,p,_,y,A,S,k,C)=>{let x=0;const z=h.length;let T=u.length-1,j=z-1;for(;x<=T&&x<=j;){const U=u[x],q=h[x]=C?ut(h[x]):Be(h[x]);if(on(U,q))O(U,q,p,null,y,A,S,k,C);else break;x++}for(;x<=T&&x<=j;){const U=u[T],q=h[j]=C?ut(h[j]):Be(h[j]);if(on(U,q))O(U,q,p,null,y,A,S,k,C);else break;T--,j--}if(x>T){if(x<=j){const U=j+1,q=U<z?h[U].el:_;for(;x<=j;)O(null,h[x]=C?ut(h[x]):Be(h[x]),p,q,y,A,S,k,C),x++}}else if(x>j)for(;x<=T;)Ie(u[x],y,A,!0),x++;else{const U=x,q=x,se=new Map;for(x=q;x<=j;x++){const ke=h[x]=C?ut(h[x]):Be(h[x]);ke.key!=null&&se.set(ke.key,x)}let Z,ie=0;const Ne=j-q+1;let Ft=!1,ri=0;const an=new Array(Ne);for(x=0;x<Ne;x++)an[x]=0;for(x=U;x<=T;x++){const ke=u[x];if(ie>=Ne){Ie(ke,y,A,!0);continue}let De;if(ke.key!=null)De=se.get(ke.key);else for(Z=q;Z<=j;Z++)if(an[Z-q]===0&&on(ke,h[Z])){De=Z;break}De===void 0?Ie(ke,y,A,!0):(an[De-q]=x+1,De>=ri?ri=De:Ft=!0,O(ke,h[De],p,null,y,A,S,k,C),ie++)}const ai=Ft?tf(an):Kt;for(Z=ai.length-1,x=Ne-1;x>=0;x--){const ke=q+x,De=h[ke],ii=ke+1<z?h[ke+1].el:_;an[x]===0?O(null,De,p,ii,y,A,S,k,C):Ft&&(Z<0||x!==ai[Z]?$e(De,p,ii,2):Z--)}}},$e=(u,h,p,_,y=null)=>{const{el:A,type:S,transition:k,children:C,shapeFlag:x}=u;if(x&6){$e(u.component.subTree,h,p,_);return}if(x&128){u.suspense.move(h,p,_);return}if(x&64){S.move(u,h,p,re);return}if(S===Le){r(A,h,p);for(let T=0;T<C.length;T++)$e(C[T],h,p,_);r(u.anchor,h,p);return}if(S===Ir){L(u,h,p);return}if(_!==2&&x&1&&k)if(_===0)k.beforeEnter(A),r(A,h,p),xe(()=>k.enter(A),y);else{const{leave:T,delayLeave:j,afterLeave:U}=k,q=()=>r(A,h,p),se=()=>{T(A,()=>{q(),U&&U()})};j?j(A,q,se):se()}else r(A,h,p)},Ie=(u,h,p,_=!1,y=!1)=>{const{type:A,props:S,ref:k,children:C,dynamicChildren:x,shapeFlag:z,patchFlag:T,dirs:j}=u;if(k!=null&&Xr(k,null,p,u,!0),z&256){h.ctx.deactivate(u);return}const U=z&1&&j,q=!Wr(u);let se;if(q&&(se=S&&S.onVnodeBeforeUnmount)&&He(se,h,u),z&6)M(u.component,p,_);else{if(z&128){u.suspense.unmount(p,_);return}U&&wt(u,null,h,"beforeUnmount"),z&64?u.type.remove(u,h,p,y,re,_):x&&(A!==Le||T>0&&T&64)?P(x,h,p,!1,!0):(A===Le&&T&384||!y&&z&16)&&P(C,h,p),_&&Pr(u)}(q&&(se=S&&S.onVnodeUnmounted)||U)&&xe(()=>{se&&He(se,h,u),U&&wt(u,null,h,"unmounted")},p)},Pr=u=>{const{type:h,el:p,anchor:_,transition:y}=u;if(h===Le){b(p,_);return}if(h===Ir){K(u);return}const A=()=>{a(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:k}=y,C=()=>S(p,A);k?k(u.el,A,C):C()}else A()},b=(u,h)=>{let p;for(;u!==h;)p=m(u),a(u),u=p;a(h)},M=(u,h,p)=>{const{bum:_,scope:y,update:A,subTree:S,um:k}=u;_&&zn(_),y.stop(),A&&(A.active=!1,Ie(S,u,h,p)),k&&xe(k,h),xe(()=>{u.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},P=(u,h,p,_=!1,y=!1,A=0)=>{for(let S=A;S<u.length;S++)Ie(u[S],h,p,_,y)},F=u=>u.shapeFlag&6?F(u.component.subTree):u.shapeFlag&128?u.suspense.next():m(u.anchor||u.el),Q=(u,h,p)=>{u==null?h._vnode&&Ie(h._vnode,null,null,!0):O(h._vnode||null,u,h,null,null,null,p),Jo(),h._vnode=u},re={p:O,um:Ie,m:$e,r:Pr,mt:Mt,mc:le,pc:Ee,pbc:Re,n:F,o:e};let V,W;return t&&([V,W]=t(re)),{render:Q,hydrate:V,createApp:Qc(Q,V)}}function xt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ds(e,t,n=!1){const r=e.children,a=t.children;if(H(r)&&H(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ut(a[i]),s.el=o.el),n||ds(o,s))}}function tf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const nf=e=>e.__isTeleport,ms="components";function Mh(e,t){return af(ms,e,!0,t)||e}const rf=Symbol();function af(e,t,n=!0,r=!1){const a=Ce||ge;if(a){const i=a.type;if(e===ms){const s=yf(i);if(s&&(s===t||s===Ye(t)||s===ur(Ye(t))))return i}const o=xi(a[e]||i[e],t)||xi(a.appContext[e],t);return!o&&r?i:o}}function xi(e,t){return e&&(e[t]||e[Ye(t)]||e[ur(Ye(t))])}const Le=Symbol(void 0),za=Symbol(void 0),vt=Symbol(void 0),Ir=Symbol(void 0),hn=[];let St=null;function Nt(e=!1){hn.push(St=e?null:[])}function of(){hn.pop(),St=hn[hn.length-1]||null}let qn=1;function Ei(e){qn+=e}function hs(e){return e.dynamicChildren=qn>0?St||Kt:null,of(),qn>0&&St&&St.push(e),e}function gr(e,t,n,r,a,i){return hs(ue(e,t,n,r,a,i,!0))}function ja(e,t,n,r,a){return hs(ae(e,t,n,r,a,!0))}function Xn(e){return e?e.__v_isVNode===!0:!1}function on(e,t){return e.type===t.type&&e.key===t.key}const vr="__vInternal",ps=({key:e})=>e!=null?e:null,$n=({ref:e,ref_key:t,ref_for:n})=>e!=null?ve(e)||fe(e)||Y(e)?{i:Ce,r:e,k:t,f:!!n}:e:null;function ue(e,t=null,n=null,r=0,a=null,i=e===Le?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ps(t),ref:t&&$n(t),scopeId:hr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?($a(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ve(n)?8:16),qn>0&&!o&&St&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&St.push(l),l}const ae=sf;function sf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===rf)&&(e=vt),Xn(e)){const s=An(e,t,!0);return n&&$a(s,n),s}if(_f(e)&&(e=e.__vccOpts),t){t=lf(t);let{class:s,style:l}=t;s&&!ve(s)&&(t.class=ba(s)),de(l)&&(Uo(l)&&!H(l)&&(l=_e({},l)),t.style=va(l))}const o=ve(e)?1:Cc(e)?128:nf(e)?64:de(e)?4:Y(e)?2:0;return ue(e,t,n,r,a,o,i,!0)}function lf(e){return e?Uo(e)||vr in e?_e({},e):e:null}function An(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?cf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&ps(s),ref:t&&t.ref?n&&a?H(a)?a.concat($n(t)):[a,$n(t)]:$n(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Le?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&An(e.ssContent),ssFallback:e.ssFallback&&An(e.ssFallback),el:e.el,anchor:e.anchor}}function Ve(e=" ",t=0){return ae(za,null,e,t)}function Lh(e="",t=!1){return t?(Nt(),ja(vt,null,e)):ae(vt,null,e)}function Be(e){return e==null||typeof e=="boolean"?ae(vt):H(e)?ae(Le,null,e.slice()):typeof e=="object"?ut(e):ae(za,null,String(e))}function ut(e){return e.el===null||e.memo?e:An(e)}function $a(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),$a(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(vr in t)?t._ctx=Ce:a===3&&Ce&&(Ce.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Y(t)?(t={default:t,_ctx:Ce},n=32):(t=String(t),r&64?(n=16,t=[Ve(t)]):n=8);e.children=t,e.shapeFlag|=n}function cf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ba([t.class,r.class]));else if(a==="style")t.style=va([t.style,r.style]);else if(sr(a)){const i=t[a],o=r[a];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function He(e,t,n,r=null){je(e,t,7,[n,r])}function ff(e,t,n={},r,a){if(Ce.isCE)return ae("slot",t==="default"?null:{name:t},r&&r());let i=e[t];i&&i._c&&(i._d=!1),Nt();const o=i&&gs(i(n)),s=ja(Le,{key:n.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!a&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function gs(e){return e.some(t=>Xn(t)?!(t.type===vt||t.type===Le&&!gs(t.children)):!0)?e:null}const Gr=e=>e?bs(e)?Da(e)||e.proxy:Gr(e.parent):null,Gn=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Gr(e.parent),$root:e=>Gr(e.root),$emit:e=>e.emit,$options:e=>is(e),$forceUpdate:e=>()=>qo(e.update),$nextTick:e=>Ta.bind(e.proxy),$watch:e=>Oc.bind(e)}),uf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==te&&X(r,t))return o[t]=1,r[t];if(a!==te&&X(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&X(f,t))return o[t]=3,i[t];if(n!==te&&X(n,t))return o[t]=4,n[t];Yr&&(o[t]=0)}}const c=Gn[t];let d,m;if(c)return t==="$attrs"&&Pe(e,"get",t),c(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==te&&X(n,t))return o[t]=4,n[t];if(m=l.config.globalProperties,X(m,t))return m[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==te&&X(a,t)?(a[t]=n,!0):r!==te&&X(r,t)?(r[t]=n,!0):X(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==te&&X(e,o)||t!==te&&X(t,o)||(s=i[0])&&X(s,o)||X(r,o)||X(Gn,o)||X(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?this.set(e,t,n.get(),null):n.value!=null&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},df=us();let mf=0;function hf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||df,i={uid:mf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Oo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ss(r,a),emitsOptions:Zo(r,a),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=yc.bind(null,i),e.ce&&e.ce(i),i}let ge=null;const vs=()=>ge||Ce,Xt=e=>{ge=e,e.scope.on()},It=()=>{ge&&ge.scope.off(),ge=null};function bs(e){return e.vnode.shapeFlag&4}let Cn=!1;function pf(e,t=!1){Cn=t;const{props:n,children:r}=e.vnode,a=bs(e);Yc(e,n,a,t),Xc(e,r);const i=a?gf(e,t):void 0;return Cn=!1,i}function gf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=qt(new Proxy(e.ctx,uf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?bf(e):null;Xt(e),Zt();const i=pt(r,e,0,[e.props,a]);if(en(),It(),Ao(i)){if(i.then(It,It),t)return i.then(o=>{ki(e,o,t)}).catch(o=>{mr(o,e,0)});e.asyncDep=i}else ki(e,i,t)}else ys(e,t)}function ki(e,t,n){Y(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:de(t)&&(e.setupState=Yo(t)),ys(e,n)}let Ai;function ys(e,t,n){const r=e.type;if(!e.render){if(!t&&Ai&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=_e(_e({isCustomElement:i,delimiters:s},o),l);r.render=Ai(a,f)}}e.render=r.render||ze}Xt(e),Zt(),Hc(e),en(),It()}function vf(e){return new Proxy(e.attrs,{get(t,n){return Pe(e,"get","$attrs"),t[n]}})}function bf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=vf(e))},slots:e.slots,emit:e.emit,expose:t}}function Da(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Yo(qt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Gn)return Gn[n](e)}}))}function yf(e){return Y(e)&&e.displayName||e.name}function _f(e){return Y(e)&&"__vccOpts"in e}const ce=(e,t)=>mc(e,t,Cn);function br(e,t,n){const r=arguments.length;return r===2?de(t)&&!H(t)?Xn(t)?ae(e,null,[t]):ae(e,t):ae(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xn(n)&&(n=[n]),ae(e,t,n))}const wf="3.2.31",xf="http://www.w3.org/2000/svg",kt=typeof document!="undefined"?document:null,Ci=kt&&kt.createElement("template"),Ef={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?kt.createElementNS(xf,e):kt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>kt.createTextNode(e),createComment:e=>kt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>kt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ci.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ci.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function kf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Af(e,t,n){const r=e.style,a=ve(n);if(n&&!a){for(const i in n)Jr(r,i,n[i]);if(t&&!ve(t))for(const i in t)n[i]==null&&Jr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Pi=/\s*!important$/;function Jr(e,t,n){if(H(n))n.forEach(r=>Jr(e,t,r));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=Cf(e,t);Pi.test(n)?e.setProperty(Qt(r),n.replace(Pi,""),"important"):e[r]=n}}const Oi=["Webkit","Moz","ms"],Rr={};function Cf(e,t){const n=Rr[t];if(n)return n;let r=Ye(t);if(r!=="filter"&&r in e)return Rr[t]=r;r=ur(r);for(let a=0;a<Oi.length;a++){const i=Oi[a]+r;if(i in e)return Rr[t]=i}return t}const Si="http://www.w3.org/1999/xlink";function Pf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Si,t.slice(6,t.length)):e.setAttributeNS(Si,t,n);else{const i=_l(t);n==null||i&&!Eo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Of(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const s=n==null?"":n;(e.value!==s||e.tagName==="OPTION")&&(e.value=s),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const s=typeof e[t];if(s==="boolean"){e[t]=Eo(n);return}else if(n==null&&s==="string"){e[t]="",e.removeAttribute(t);return}else if(s==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let Jn=Date.now,_s=!1;if(typeof window!="undefined"){Jn()>document.createEvent("Event").timeStamp&&(Jn=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);_s=!!(e&&Number(e[1])<=53)}let Qr=0;const Sf=Promise.resolve(),If=()=>{Qr=0},Rf=()=>Qr||(Sf.then(If),Qr=Jn());function At(e,t,n,r){e.addEventListener(t,n,r)}function Tf(e,t,n,r){e.removeEventListener(t,n,r)}function Nf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Mf(t);if(r){const f=i[t]=Lf(r,a);At(e,s,f,l)}else o&&(Tf(e,s,o,l),i[t]=void 0)}}const Ii=/(?:Once|Passive|Capture)$/;function Mf(e){let t;if(Ii.test(e)){t={};let n;for(;n=e.match(Ii);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Qt(e.slice(2)),t]}function Lf(e,t){const n=r=>{const a=r.timeStamp||Jn();(_s||a>=n.attached-1)&&je(Ff(r,n.value),t,5,[r])};return n.value=e,n.attached=Rf(),n}function Ff(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ri=/^on[a-z]/,zf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?kf(e,r,a):t==="style"?Af(e,n,r):sr(t)?ya(t)||Nf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):jf(e,t,r,a))?Of(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Pf(e,t,r,a))};function jf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ri.test(t)&&Y(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ri.test(t)&&ve(n)?!1:t in e}const Qn=e=>{const t=e.props["onUpdate:modelValue"];return H(t)?n=>zn(t,n):t};function $f(e){e.target.composing=!0}function Ti(e){const t=e.target;t.composing&&(t.composing=!1,Df(t,"input"))}function Df(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const Fh={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=Qn(a);const i=r||a.props&&a.props.type==="number";At(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n?s=s.trim():i&&(s=Kn(s)),e._assign(s)}),n&&At(e,"change",()=>{e.value=e.value.trim()}),t||(At(e,"compositionstart",$f),At(e,"compositionend",Ti),At(e,"change",Ti))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=Qn(i),e.composing||document.activeElement===e&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Kn(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},zh={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const a=lr(t);At(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?Kn(Zn(o)):Zn(o));e._assign(e.multiple?a?new Set(i):i:i[0])}),e._assign=Qn(r)},mounted(e,{value:t}){Ni(e,t)},beforeUpdate(e,t,n){e._assign=Qn(n)},updated(e,{value:t}){Ni(e,t)}};function Ni(e,t){const n=e.multiple;if(!(n&&!H(t)&&!lr(t))){for(let r=0,a=e.options.length;r<a;r++){const i=e.options[r],o=Zn(i);if(n)H(t)?i.selected=Al(t,o)>-1:i.selected=t.has(o);else if(or(Zn(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Zn(e){return"_value"in e?e._value:e.value}const Hf=_e({patchProp:zf},Ef);let Mi;function Uf(){return Mi||(Mi=Zc(Hf))}const Bf=(...e)=>{const t=Uf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Kf(r);if(!a)return;const i=t._component;!Y(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Kf(e){return ve(e)?document.querySelector(e):e}var Wf=!1;/*!
  * pinia v2.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let ws;const yr=e=>ws=e,xs=Symbol();function Zr(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var pn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(pn||(pn={}));function Yf(){const e=So(!0),t=e.run(()=>Ia({}));let n=[],r=[];const a=qt({install(i){yr(a),a._a=i,i.provide(xs,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Wf?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}const Es=()=>{};function Li(e,t,n,r=Es){e.push(t);const a=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&vs()&&La(a),a}function zt(e,...t){e.slice().forEach(n=>{n(...t)})}function ea(e,t){for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],a=e[n];Zr(a)&&Zr(r)&&e.hasOwnProperty(n)&&!fe(r)&&!ht(r)?e[n]=ea(a,r):e[n]=r}return e}const Vf=Symbol();function qf(e){return!Zr(e)||!e.hasOwnProperty(Vf)}const{assign:Ge}=Object;function Xf(e){return!!(fe(e)&&e.effect)}function Gf(e,t,n,r){const{state:a,actions:i,getters:o}=t,s=n.state.value[e];let l;function f(){s||(n.state.value[e]=a?a():{});const c=cc(n.state.value[e]);return Ge(c,i,Object.keys(o||{}).reduce((d,m)=>(d[m]=qt(ce(()=>{yr(n);const g=n._s.get(e);return o[m].call(g,g)})),d),{}))}return l=ks(e,f,t,n),l.$reset=function(){const d=a?a():{};this.$patch(m=>{Ge(m,d)})},l}function ks(e,t,n={},r,a){let i;const o=n.state,s=Ge({actions:{}},n),l={deep:!0};let f,c,d=qt([]),m=qt([]),g;const E=r.state.value[e];!o&&!E&&(r.state.value[e]={}),Ia({});function R(D){let B;f=c=!1,typeof D=="function"?(D(r.state.value[e]),B={type:pn.patchFunction,storeId:e,events:g}):(ea(r.state.value[e],D),B={type:pn.patchObject,payload:D,storeId:e,events:g}),Ta().then(()=>{f=!0}),c=!0,zt(d,B,r.state.value[e])}const O=Es;function v(){i.stop(),d=[],m=[],r._s.delete(e)}function w(D,B){return function(){yr(r);const me=Array.from(arguments),le=[],we=[];function Re(he){le.push(he)}function Te(he){we.push(he)}zt(m,{args:me,name:D,store:L,after:Re,onError:Te});let Se;try{Se=B.apply(this&&this.$id===e?this:L,me)}catch(he){throw zt(we,he),he}return Se instanceof Promise?Se.then(he=>(zt(le,he),he)).catch(he=>(zt(we,he),Promise.reject(he))):(zt(le,Se),Se)}}const N={_p:r,$id:e,$onAction:Li.bind(null,m),$patch:R,$reset:O,$subscribe(D,B={}){const me=Li(d,D,B.detached,()=>le()),le=i.run(()=>Yt(()=>r.state.value[e],we=>{(B.flush==="sync"?c:f)&&D({storeId:e,type:pn.direct,events:g},we)},Ge({},l,B)));return me},$dispose:v},L=tn(Ge({},N));r._s.set(e,L);const K=r._e.run(()=>(i=So(),i.run(()=>t())));for(const D in K){const B=K[D];if(fe(B)&&!Xf(B)||ht(B))o||(E&&qf(B)&&(fe(B)?B.value=E[D]:ea(B,E[D])),r.state.value[e][D]=B);else if(typeof B=="function"){const me=w(D,B);K[D]=me,s.actions[D]=B}}return Ge(L,K),Ge(G(L),K),Object.defineProperty(L,"$state",{get:()=>r.state.value[e],set:D=>{R(B=>{Ge(B,D)})}}),r._p.forEach(D=>{Ge(L,i.run(()=>D({store:L,app:r._a,pinia:r,options:s})))}),E&&o&&n.hydrate&&n.hydrate(L.$state,E),f=!0,c=!0,L}function jh(e,t,n){let r,a;const i=typeof t=="function";typeof e=="string"?(r=e,a=i?n:t):(a=e,r=e.id);function o(s,l){const f=vs();return s=s||f&&Qe(xs),s&&yr(s),s=ws,s._s.has(r)||(i?ks(r,t,a,s):Gf(r,a,s)),s._s.get(r)}return o.$id=r,o}function Jf(e,t){return t.reduce((n,r)=>n==null?void 0:n[r],e)}function Qf(e,t,n){return t.slice(0,-1).reduce((r,a)=>/^(__proto__)$/.test(a)?{}:r[a]=r[a]||{},e)[t[t.length-1]]=n,e}function Zf(e,t){return t.reduce((n,r)=>{const a=r.split(".");return Qf(n,a,Jf(e,a))},{})}function eu(e={}){return function(t){var n,r,a,i;const{options:{persist:o},store:s}=t;if(!o)return;const{storage:l=(n=e.storage)!=null?n:localStorage,beforeRestore:f=(r=e.beforeRestore)!=null?r:null,afterRestore:c=(a=e.afterRestore)!=null?a:null,serializer:d=(i=e.serializer)!=null?i:{serialize:JSON.stringify,deserialize:JSON.parse},key:m=s.$id,paths:g=null}=typeof o!="boolean"?o:{};f==null||f(t);try{const E=l.getItem(m);E&&s.$patch(d.deserialize(E))}catch{}c==null||c(t),s.$subscribe((E,R)=>{try{const O=Array.isArray(g)?Zf(R,g):R;l.setItem(m,d.serialize(O))}catch{}},{detached:!0})}}var tu=eu();/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const As=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",nn=e=>As?Symbol(e):"_vr_"+e,nu=nn("rvlm"),Fi=nn("rvd"),Ha=nn("r"),Cs=nn("rl"),ta=nn("rvl"),Ht=typeof window!="undefined";function ru(e){return e.__esModule||As&&e[Symbol.toStringTag]==="Module"}const ee=Object.assign;function Tr(e,t){const n={};for(const r in t){const a=t[r];n[r]=Array.isArray(a)?a.map(e):e(a)}return n}const gn=()=>{},au=/\/$/,iu=e=>e.replace(au,"");function Nr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("?"),l=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),i=t.slice(s+1,l>-1?l:t.length),a=e(i)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=cu(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function ou(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function zi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function su(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Gt(t.matched[r],n.matched[a])&&Ps(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Gt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ps(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!lu(e[n],t[n]))return!1;return!0}function lu(e,t){return Array.isArray(e)?ji(e,t):Array.isArray(t)?ji(t,e):e===t}function ji(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function cu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(a===1||o==="."))if(o==="..")a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Pn;(function(e){e.pop="pop",e.push="push"})(Pn||(Pn={}));var vn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(vn||(vn={}));function fu(e){if(!e)if(Ht){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),iu(e)}const uu=/^[^#]+#/;function du(e,t){return e.replace(uu,"#")+t}function mu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const _r=()=>({left:window.pageXOffset,top:window.pageYOffset});function hu(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=mu(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function $i(e,t){return(history.state?history.state.position-t:-1)+e}const na=new Map;function pu(e,t){na.set(e,t)}function gu(e){const t=na.get(e);return na.delete(e),t}let vu=()=>location.protocol+"//"+location.host;function Os(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),zi(l,"")}return zi(n,e)+r+a}function bu(e,t,n,r){let a=[],i=[],o=null;const s=({state:m})=>{const g=Os(e,location),E=n.value,R=t.value;let O=0;if(m){if(n.value=g,t.value=m,o&&o===E){o=null;return}O=R?m.position-R.position:0}else r(g);a.forEach(v=>{v(n.value,E,{delta:O,type:Pn.pop,direction:O?O>0?vn.forward:vn.back:vn.unknown})})};function l(){o=n.value}function f(m){a.push(m);const g=()=>{const E=a.indexOf(m);E>-1&&a.splice(E,1)};return i.push(g),g}function c(){const{history:m}=window;!m.state||m.replaceState(ee({},m.state,{scroll:_r()}),"")}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:f,destroy:d}}function Di(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?_r():null}}function yu(e){const{history:t,location:n}=window,r={value:Os(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,c){const d=e.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:vu()+e+l;try{t[c?"replaceState":"pushState"](f,"",m),a.value=f}catch(g){console.error(g),n[c?"replace":"assign"](m)}}function o(l,f){const c=ee({},t.state,Di(a.value.back,l,a.value.forward,!0),f,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,f){const c=ee({},a.value,t.state,{forward:l,scroll:_r()});i(c.current,c,!0);const d=ee({},Di(r.value,l,null),{position:c.position+1},f);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function _u(e){e=fu(e);const t=yu(e),n=bu(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=ee({location:"",base:e,go:r,createHref:du.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function wu(e){return typeof e=="string"||e&&typeof e=="object"}function Ss(e){return typeof e=="string"||typeof e=="symbol"}const ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Is=nn("nf");var Hi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Hi||(Hi={}));function Jt(e,t){return ee(new Error,{type:e,[Is]:!0},t)}function st(e,t){return e instanceof Error&&Is in e&&(t==null||!!(e.type&t))}const Ui="[^/]+?",xu={sensitive:!1,strict:!1,start:!0,end:!0},Eu=/[.+*?^${}()[\]/\\]/g;function ku(e,t){const n=ee({},xu,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let d=0;d<f.length;d++){const m=f[d];let g=40+(n.sensitive?.25:0);if(m.type===0)d||(a+="/"),a+=m.value.replace(Eu,"\\$&"),g+=40;else if(m.type===1){const{value:E,repeatable:R,optional:O,regexp:v}=m;i.push({name:E,repeatable:R,optional:O});const w=v||Ui;if(w!==Ui){g+=10;try{new RegExp(`(${w})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${E}" (${w}): `+L.message)}}let N=R?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(N=O&&f.length<2?`(?:/${N})`:"/"+N),O&&(N+="?"),a+=N,g+=20,O&&(g+=-8),R&&(g+=-20),w===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(f){const c=f.match(o),d={};if(!c)return null;for(let m=1;m<c.length;m++){const g=c[m]||"",E=i[m-1];d[E.name]=g&&E.repeatable?g.split("/"):g}return d}function l(f){let c="",d=!1;for(const m of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const g of m)if(g.type===0)c+=g.value;else if(g.type===1){const{value:E,repeatable:R,optional:O}=g,v=E in f?f[E]:"";if(Array.isArray(v)&&!R)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const w=Array.isArray(v)?v.join("/"):v;if(!w)if(O)m.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);c+=w}}return c}return{re:o,score:r,keys:i,parse:s,stringify:l}}function Au(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Cu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=Au(r[n],a[n]);if(i)return i;n++}return a.length-r.length}const Pu={type:0,value:""},Ou=/[a-zA-Z0-9_]/;function Su(e){if(!e)return[[]];if(e==="/")return[[Pu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,f="",c="";function d(){!f||(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function m(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),o()):l===":"?(d(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:Ou.test(l)?m():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),d(),o(),a}function Iu(e,t,n){const r=ku(Su(e.path),n),a=ee(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Ru(e,t){const n=[],r=new Map;t=Ki({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,d,m){const g=!m,E=Nu(c);E.aliasOf=m&&m.record;const R=Ki(t,c),O=[E];if("alias"in c){const N=typeof c.alias=="string"?[c.alias]:c.alias;for(const L of N)O.push(ee({},E,{components:m?m.record.components:E.components,path:L,aliasOf:m?m.record:E}))}let v,w;for(const N of O){const{path:L}=N;if(d&&L[0]!=="/"){const K=d.record.path,D=K[K.length-1]==="/"?"":"/";N.path=d.record.path+(L&&D+L)}if(v=Iu(N,d,R),m?m.alias.push(v):(w=w||v,w!==v&&w.alias.push(v),g&&c.name&&!Bi(v)&&o(c.name)),"children"in E){const K=E.children;for(let D=0;D<K.length;D++)i(K[D],v,m&&m.children[D])}m=m||v,l(v)}return w?()=>{o(w)}:gn}function o(c){if(Ss(c)){const d=r.get(c);d&&(r.delete(c),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(c);d>-1&&(n.splice(d,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let d=0;for(;d<n.length&&Cu(c,n[d])>=0&&(c.record.path!==n[d].record.path||!Rs(c,n[d]));)d++;n.splice(d,0,c),c.record.name&&!Bi(c)&&r.set(c.record.name,c)}function f(c,d){let m,g={},E,R;if("name"in c&&c.name){if(m=r.get(c.name),!m)throw Jt(1,{location:c});R=m.record.name,g=ee(Tu(d.params,m.keys.filter(w=>!w.optional).map(w=>w.name)),c.params),E=m.stringify(g)}else if("path"in c)E=c.path,m=n.find(w=>w.re.test(E)),m&&(g=m.parse(E),R=m.record.name);else{if(m=d.name?r.get(d.name):n.find(w=>w.re.test(d.path)),!m)throw Jt(1,{location:c,currentLocation:d});R=m.record.name,g=ee({},d.params,c.params),E=m.stringify(g)}const O=[];let v=m;for(;v;)O.unshift(v.record),v=v.parent;return{name:R,path:E,params:g,matched:O,meta:Lu(O)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Tu(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Nu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Mu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Mu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Bi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Lu(e){return e.reduce((t,n)=>ee(t,n.meta),{})}function Ki(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Rs(e,t){return t.children.some(n=>n===e||Rs(e,n))}const Ts=/#/g,Fu=/&/g,zu=/\//g,ju=/=/g,$u=/\?/g,Ns=/\+/g,Du=/%5B/g,Hu=/%5D/g,Ms=/%5E/g,Uu=/%60/g,Ls=/%7B/g,Bu=/%7C/g,Fs=/%7D/g,Ku=/%20/g;function Ua(e){return encodeURI(""+e).replace(Bu,"|").replace(Du,"[").replace(Hu,"]")}function Wu(e){return Ua(e).replace(Ls,"{").replace(Fs,"}").replace(Ms,"^")}function ra(e){return Ua(e).replace(Ns,"%2B").replace(Ku,"+").replace(Ts,"%23").replace(Fu,"%26").replace(Uu,"`").replace(Ls,"{").replace(Fs,"}").replace(Ms,"^")}function Yu(e){return ra(e).replace(ju,"%3D")}function Vu(e){return Ua(e).replace(Ts,"%23").replace($u,"%3F")}function qu(e){return e==null?"":Vu(e).replace(zu,"%2F")}function er(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Xu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Ns," "),o=i.indexOf("="),s=er(o<0?i:i.slice(0,o)),l=o<0?null:er(i.slice(o+1));if(s in t){let f=t[s];Array.isArray(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function Wi(e){let t="";for(let n in e){const r=e[n];if(n=Yu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&ra(i)):[r&&ra(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Gu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}function sn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function dt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Jt(4,{from:n,to:t})):d instanceof Error?s(d):wu(d)?s(Jt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},f=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(d=>s(d))})}function Mr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Ju(s)){const f=(s.__vccOpts||s)[t];f&&a.push(dt(f,n,r,i,o))}else{let l=s();a.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=ru(f)?f.default:f;i.components[o]=c;const m=(c.__vccOpts||c)[t];return m&&dt(m,n,r,i,o)()}))}}return a}function Ju(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Yi(e){const t=Qe(Ha),n=Qe(Cs),r=ce(()=>t.resolve(ye(e.to))),a=ce(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],d=n.matched;if(!c||!d.length)return-1;const m=d.findIndex(Gt.bind(null,c));if(m>-1)return m;const g=Vi(l[f-2]);return f>1&&Vi(c)===g&&d[d.length-1].path!==g?d.findIndex(Gt.bind(null,l[f-2])):m}),i=ce(()=>a.value>-1&&ed(n.params,r.value.params)),o=ce(()=>a.value>-1&&a.value===n.matched.length-1&&Ps(n.params,r.value.params));function s(l={}){return Zu(l)?t[ye(e.replace)?"replace":"push"](ye(e.to)).catch(gn):Promise.resolve()}return{route:r,href:ce(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Qu=_t({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yi,setup(e,{slots:t}){const n=tn(Yi(e)),{options:r}=Qe(Ha),a=ce(()=>({[qi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[qi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:br("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Ue=Qu;function Zu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ed(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Array.isArray(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Vi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const qi=(e,t,n)=>e!=null?e:t!=null?t:n,td=_t({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=Qe(ta),a=ce(()=>e.route||r.value),i=Qe(Fi,0),o=ce(()=>a.value.matched[i]);jn(Fi,i+1),jn(nu,o),jn(ta,a);const s=Ia();return Yt(()=>[s.value,o.value,e.name],([l,f,c],[d,m,g])=>{f&&(f.instances[c]=l,m&&m!==f&&l&&l===d&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),l&&f&&(!m||!Gt(f,m)||!d)&&(f.enterCallbacks[c]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=a.value,f=o.value,c=f&&f.components[e.name],d=e.name;if(!c)return Xi(n.default,{Component:c,route:l});const m=f.props[e.name],g=m?m===!0?l.params:typeof m=="function"?m(l):m:null,R=br(c,ee({},g,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(f.instances[d]=null)},ref:s}));return Xi(n.default,{Component:R,route:l})||R}}});function Xi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const zs=td;function nd(e){const t=Ru(e.routes,e),n=e.parseQuery||Xu,r=e.stringifyQuery||Wi,a=e.history,i=sn(),o=sn(),s=sn(),l=oc(ot);let f=ot;Ht&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Tr.bind(null,b=>""+b),d=Tr.bind(null,qu),m=Tr.bind(null,er);function g(b,M){let P,F;return Ss(b)?(P=t.getRecordMatcher(b),F=M):F=b,t.addRoute(F,P)}function E(b){const M=t.getRecordMatcher(b);M&&t.removeRoute(M)}function R(){return t.getRoutes().map(b=>b.record)}function O(b){return!!t.getRecordMatcher(b)}function v(b,M){if(M=ee({},M||l.value),typeof b=="string"){const W=Nr(n,b,M.path),u=t.resolve({path:W.path},M),h=a.createHref(W.fullPath);return ee(W,u,{params:m(u.params),hash:er(W.hash),redirectedFrom:void 0,href:h})}let P;if("path"in b)P=ee({},b,{path:Nr(n,b.path,M.path).path});else{const W=ee({},b.params);for(const u in W)W[u]==null&&delete W[u];P=ee({},b,{params:d(b.params)}),M.params=d(M.params)}const F=t.resolve(P,M),Q=b.hash||"";F.params=c(m(F.params));const re=ou(r,ee({},b,{hash:Wu(Q),path:F.path})),V=a.createHref(re);return ee({fullPath:re,hash:Q,query:r===Wi?Gu(b.query):b.query||{}},F,{redirectedFrom:void 0,href:V})}function w(b){return typeof b=="string"?Nr(n,b,l.value.path):ee({},b)}function N(b,M){if(f!==b)return Jt(8,{from:M,to:b})}function L(b){return B(b)}function K(b){return L(ee(w(b),{replace:!0}))}function D(b){const M=b.matched[b.matched.length-1];if(M&&M.redirect){const{redirect:P}=M;let F=typeof P=="function"?P(b):P;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=w(F):{path:F},F.params={}),ee({query:b.query,hash:b.hash,params:b.params},F)}}function B(b,M){const P=f=v(b),F=l.value,Q=b.state,re=b.force,V=b.replace===!0,W=D(P);if(W)return B(ee(w(W),{state:Q,force:re,replace:V}),M||P);const u=P;u.redirectedFrom=M;let h;return!re&&su(r,F,P)&&(h=Jt(16,{to:u,from:F}),Lt(F,F,!0,!1)),(h?Promise.resolve(h):le(u,F)).catch(p=>st(p)?st(p,2)?p:Ee(p):ne(p,u,F)).then(p=>{if(p){if(st(p,2))return B(ee(w(p.to),{state:Q,force:re,replace:V}),M||u)}else p=Re(u,F,!0,V,Q);return we(u,F,p),p})}function me(b,M){const P=N(b,M);return P?Promise.reject(P):Promise.resolve()}function le(b,M){let P;const[F,Q,re]=rd(b,M);P=Mr(F.reverse(),"beforeRouteLeave",b,M);for(const W of F)W.leaveGuards.forEach(u=>{P.push(dt(u,b,M))});const V=me.bind(null,b,M);return P.push(V),jt(P).then(()=>{P=[];for(const W of i.list())P.push(dt(W,b,M));return P.push(V),jt(P)}).then(()=>{P=Mr(Q,"beforeRouteUpdate",b,M);for(const W of Q)W.updateGuards.forEach(u=>{P.push(dt(u,b,M))});return P.push(V),jt(P)}).then(()=>{P=[];for(const W of b.matched)if(W.beforeEnter&&!M.matched.includes(W))if(Array.isArray(W.beforeEnter))for(const u of W.beforeEnter)P.push(dt(u,b,M));else P.push(dt(W.beforeEnter,b,M));return P.push(V),jt(P)}).then(()=>(b.matched.forEach(W=>W.enterCallbacks={}),P=Mr(re,"beforeRouteEnter",b,M),P.push(V),jt(P))).then(()=>{P=[];for(const W of o.list())P.push(dt(W,b,M));return P.push(V),jt(P)}).catch(W=>st(W,8)?W:Promise.reject(W))}function we(b,M,P){for(const F of s.list())F(b,M,P)}function Re(b,M,P,F,Q){const re=N(b,M);if(re)return re;const V=M===ot,W=Ht?history.state:{};P&&(F||V?a.replace(b.fullPath,ee({scroll:V&&W&&W.scroll},Q)):a.push(b.fullPath,Q)),l.value=b,Lt(b,M,P,V),Ee()}let Te;function Se(){Te=a.listen((b,M,P)=>{const F=v(b),Q=D(F);if(Q){B(ee(Q,{replace:!0}),F).catch(gn);return}f=F;const re=l.value;Ht&&pu($i(re.fullPath,P.delta),_r()),le(F,re).catch(V=>st(V,12)?V:st(V,2)?(B(V.to,F).then(W=>{st(W,20)&&!P.delta&&P.type===Pn.pop&&a.go(-1,!1)}).catch(gn),Promise.reject()):(P.delta&&a.go(-P.delta,!1),ne(V,F,re))).then(V=>{V=V||Re(F,re,!1),V&&(P.delta?a.go(-P.delta,!1):P.type===Pn.pop&&st(V,20)&&a.go(-1,!1)),we(F,re,V)}).catch(gn)})}let he=sn(),Mt=sn(),pe;function ne(b,M,P){Ee(b);const F=Mt.list();return F.length?F.forEach(Q=>Q(b,M,P)):console.error(b),Promise.reject(b)}function J(){return pe&&l.value!==ot?Promise.resolve():new Promise((b,M)=>{he.add([b,M])})}function Ee(b){return pe||(pe=!b,Se(),he.list().forEach(([M,P])=>b?P(b):M()),he.reset()),b}function Lt(b,M,P,F){const{scrollBehavior:Q}=e;if(!Ht||!Q)return Promise.resolve();const re=!P&&gu($i(b.fullPath,0))||(F||!P)&&history.state&&history.state.scroll||null;return Ta().then(()=>Q(b,M,re)).then(V=>V&&hu(V)).catch(V=>ne(V,b,M))}const qe=b=>a.go(b);let $e;const Ie=new Set;return{currentRoute:l,addRoute:g,removeRoute:E,hasRoute:O,getRoutes:R,resolve:v,options:e,push:L,replace:K,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:Mt.add,isReady:J,install(b){const M=this;b.component("RouterLink",Ue),b.component("RouterView",zs),b.config.globalProperties.$router=M,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>ye(l)}),Ht&&!$e&&l.value===ot&&($e=!0,L(a.location).catch(Q=>{}));const P={};for(const Q in ot)P[Q]=ce(()=>l.value[Q]);b.provide(Ha,M),b.provide(Cs,tn(P)),b.provide(ta,l);const F=b.unmount;Ie.add(b),b.unmount=function(){Ie.delete(b),Ie.size<1&&(f=ot,Te&&Te(),l.value=ot,$e=!1,pe=!1),F()}}}}function jt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function rd(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(f=>Gt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Gt(f,l))||a.push(l))}return[n,r,a]}const ad={class:"drawer-side"},id=ue("label",{for:"drawer",class:"drawer-overlay"},null,-1),od={class:"menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content"},sd=Ve("Home"),ld=Ve("About"),cd=Ve("Speech"),fd=Ve("Face"),ud=Ve("Language"),dd=Ve("Form Recognizer"),md=Ve("Custom Vision"),hd=Ve("Computer Vision"),pd=Ve("Settings"),gd=_t({setup(e){return(t,n)=>(Nt(),gr("div",ad,[id,ue("ul",od,[ue("li",null,[ae(ye(Ue),{to:"/"},{default:Me(()=>[sd]),_:1})]),ue("li",null,[ae(ye(Ue),{to:"/about"},{default:Me(()=>[ld]),_:1})]),ue("li",null,[ae(ye(Ue),{to:"/speech"},{default:Me(()=>[cd]),_:1})]),ue("li",null,[ae(ye(Ue),{to:"/face"},{default:Me(()=>[fd]),_:1})]),ue("li",null,[ae(ye(Ue),{to:"/language"},{default:Me(()=>[ud]),_:1})]),ue("li",null,[ae(ye(Ue),{to:"/formrecognizer"},{default:Me(()=>[dd]),_:1})]),ue("li",null,[ae(ye(Ue),{to:"/customvision"},{default:Me(()=>[md]),_:1})]),ue("li",null,[ae(ye(Ue),{to:"/computervision"},{default:Me(()=>[hd]),_:1})]),ue("li",null,[ae(ye(Ue),{to:"/settings"},{default:Me(()=>[pd]),_:1})])])]))}});var js=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const vd={},bd={class:"w-full navbar bg-base-300 lg:hidden"},yd=ue("div",{class:"flex-none lg:hidden"},[ue("label",{for:"drawer",class:"btn btn-square btn-ghost"},[ue("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"inline-block w-6 h-6 stroke-current"},[ue("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})])])],-1),_d=[yd];function wd(e,t){return Nt(),gr("div",bd,_d)}var xd=js(vd,[["render",wd]]);const Ed={class:"drawer drawer-mobile"},kd=ue("input",{id:"drawer",type:"checkbox",class:"drawer-toggle"},null,-1),Ad={class:"drawer-content flex flex-col"},Cd=_t({setup(e){return(t,n)=>(Nt(),gr("div",Ed,[kd,ue("div",Ad,[ae(xd),ff(t.$slots,"default")]),ae(gd)]))}}),Pd=_t({setup(e){return(t,n)=>(Nt(),ja(Cd,null,{default:Me(()=>[ae(ye(zs))]),_:1}))}}),Od="modulepreload",Gi={},Sd="/cognitive-services-kitchen-sink/",lt=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${Sd}${r}`,r in Gi)return;Gi[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":Od,a||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),a)return new Promise((s,l)=>{o.addEventListener("load",s),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};const Id={},Rd=e=>(_c("data-v-dc28b988"),e=e(),wc(),e),Td={class:"greetings"},Nd=Rd(()=>ue("h1",{class:"blue"},"Azure Cognitive Services - Kitchen Sink",-1)),Md=[Nd];function Ld(e,t){return Nt(),gr("div",Td,Md)}var Fd=js(Id,[["render",Ld],["__scopeId","data-v-dc28b988"]]);const zd=nd({history:_u("/cognitive-services-kitchen-sink/"),routes:[{path:"/",name:"home",component:Fd},{path:"/about",name:"about",component:()=>lt(()=>import("./AboutView.0e23010c.js"),["assets/AboutView.0e23010c.js","assets/AboutView.ab071ea6.css"])},{path:"/speech",name:"speech",component:()=>lt(()=>import("./SpeechView.26ff7ce1.js"),["assets/SpeechView.26ff7ce1.js","assets/settings.1a7a463f.js","assets/v4.90f1a8cc.js"])},{path:"/face",name:"face",component:()=>lt(()=>import("./FaceView.0613ef19.js"),["assets/FaceView.0613ef19.js","assets/v4.90f1a8cc.js","assets/settings.1a7a463f.js"])},{path:"/language",name:"language",component:()=>lt(()=>import("./LanguageView.d8f253ab.js"),["assets/LanguageView.d8f253ab.js","assets/settings.1a7a463f.js","assets/v4.90f1a8cc.js"])},{path:"/formrecognizer",name:"formrecognizer",component:()=>lt(()=>import("./FormView.6b8f0d2c.js"),[])},{path:"/customvision",name:"customvision",component:()=>lt(()=>import("./CustomVisionView.3c038a97.js"),[])},{path:"/computervision",name:"computervision",component:()=>lt(()=>import("./ComputerVisionView.696186a8.js"),[])},{path:"/settings",name:"settings",component:()=>lt(()=>import("./SettingsView.fb115409.js"),["assets/SettingsView.fb115409.js","assets/settings.1a7a463f.js"])}],linkActiveClass:"",linkExactActiveClass:""});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Ji(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ji(Object(n),!0).forEach(function(r){Dd(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ji(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tr(e){return tr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tr(e)}function jd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $d(e,t,n){return t&&Qi(e.prototype,t),n&&Qi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Dd(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ba(e,t){return Ud(e)||Kd(e,t)||$s(e,t)||Yd()}function wr(e){return Hd(e)||Bd(e)||$s(e)||Wd()}function Hd(e){if(Array.isArray(e))return aa(e)}function Ud(e){if(Array.isArray(e))return e}function Bd(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Kd(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function $s(e,t){if(!!e){if(typeof e=="string")return aa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return aa(e,t)}}function aa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Wd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Zi=function(){},Ka={},Ds={},Hs=null,Us={mark:Zi,measure:Zi};try{typeof window!="undefined"&&(Ka=window),typeof document!="undefined"&&(Ds=document),typeof MutationObserver!="undefined"&&(Hs=MutationObserver),typeof performance!="undefined"&&(Us=performance)}catch{}var Vd=Ka.navigator||{},eo=Vd.userAgent,to=eo===void 0?"":eo,bt=Ka,oe=Ds,no=Hs,Ln=Us;bt.document;var at=!!oe.documentElement&&!!oe.head&&typeof oe.addEventListener=="function"&&typeof oe.createElement=="function",Bs=~to.indexOf("MSIE")||~to.indexOf("Trident/"),et="___FONT_AWESOME___",ia=16,Ks="fa",Ws="svg-inline--fa",Rt="data-fa-i2svg",oa="data-fa-pseudo-element",qd="data-fa-pseudo-element-pending",Wa="data-prefix",Ya="data-icon",ro="fontawesome-i2svg",Xd="async",Gd=["HTML","HEAD","STYLE","SCRIPT"],Ys=function(){try{return!0}catch{return!1}}(),Va={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},nr={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Vs={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Jd={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Qd=/fa[srltdbk\-\ ]/,qs="fa-layers-text",Zd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,em={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},Xs=[1,2,3,4,5,6,7,8,9,10],tm=Xs.concat([11,12,13,14,15,16,17,18,19,20]),nm=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Pt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},rm=[].concat(wr(Object.keys(nr)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Pt.GROUP,Pt.SWAP_OPACITY,Pt.PRIMARY,Pt.SECONDARY]).concat(Xs.map(function(e){return"".concat(e,"x")})).concat(tm.map(function(e){return"w-".concat(e)})),Gs=bt.FontAwesomeConfig||{};function am(e){var t=oe.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function im(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(oe&&typeof oe.querySelector=="function"){var om=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];om.forEach(function(e){var t=Ba(e,2),n=t[0],r=t[1],a=im(am(n));a!=null&&(Gs[r]=a)})}var sm={familyPrefix:Ks,styleDefault:"solid",replacementClass:Ws,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},bn=I(I({},sm),Gs);bn.autoReplaceSvg||(bn.observeMutations=!1);var $={};Object.keys(bn).forEach(function(e){Object.defineProperty($,e,{enumerable:!0,set:function(n){bn[e]=n,Dn.forEach(function(r){return r($)})},get:function(){return bn[e]}})});bt.FontAwesomeConfig=$;var Dn=[];function lm(e){return Dn.push(e),function(){Dn.splice(Dn.indexOf(e),1)}}var ct=ia,We={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function cm(e){if(!(!e||!at)){var t=oe.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=oe.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return oe.head.insertBefore(t,r),e}}var fm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function On(){for(var e=12,t="";e-- >0;)t+=fm[Math.random()*62|0];return t}function rn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function qa(e){return e.classList?rn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Js(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function um(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Js(e[n]),'" ')},"").trim()}function xr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Xa(e){return e.size!==We.size||e.x!==We.x||e.y!==We.y||e.rotate!==We.rotate||e.flipX||e.flipY}function dm(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function mm(e){var t=e.transform,n=e.width,r=n===void 0?ia:n,a=e.height,i=a===void 0?ia:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Bs?l+="translate(".concat(t.x/ct-r/2,"em, ").concat(t.y/ct-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ct,"em), calc(-50% + ").concat(t.y/ct,"em)) "):l+="translate(".concat(t.x/ct,"em, ").concat(t.y/ct,"em) "),l+="scale(".concat(t.size/ct*(t.flipX?-1:1),", ").concat(t.size/ct*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var hm=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Qs(){var e=Ks,t=Ws,n=$.familyPrefix,r=$.replacementClass,a=hm;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ao=!1;function Lr(){$.autoAddCss&&!ao&&(cm(Qs()),ao=!0)}var pm={mixout:function(){return{dom:{css:Qs,insertCss:Lr}}},hooks:function(){return{beforeDOMElementCreation:function(){Lr()},beforeI2svg:function(){Lr()}}}},tt=bt||{};tt[et]||(tt[et]={});tt[et].styles||(tt[et].styles={});tt[et].hooks||(tt[et].hooks={});tt[et].shims||(tt[et].shims=[]);var Fe=tt[et],Zs=[],gm=function e(){oe.removeEventListener("DOMContentLoaded",e),rr=1,Zs.map(function(t){return t()})},rr=!1;at&&(rr=(oe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(oe.readyState),rr||oe.addEventListener("DOMContentLoaded",gm));function vm(e){!at||(rr?setTimeout(e,0):Zs.push(e))}function Sn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Js(e):"<".concat(t," ").concat(um(r),">").concat(i.map(Sn).join(""),"</").concat(t,">")}function io(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var bm=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Fr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?bm(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function ym(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function sa(e){var t=ym(e);return t.length===1?t[0].toString(16):null}function _m(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function oo(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function la(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=oo(t);typeof Fe.hooks.addPack=="function"&&!a?Fe.hooks.addPack(e,oo(t)):Fe.styles[e]=I(I({},Fe.styles[e]||{}),i),e==="fas"&&la("fa",t)}var yn=Fe.styles,wm=Fe.shims,xm=Object.values(Vs),Ga=null,el={},tl={},nl={},rl={},al={},Em=Object.keys(Va);function km(e){return~rm.indexOf(e)}function Am(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!km(a)?a:null}var il=function(){var t=function(i){return Fr(yn,function(o,s,l){return o[l]=Fr(s,i,{}),o},{})};el=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),tl=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),al=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in yn||$.autoFetchSvg,r=Fr(wm,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});nl=r.names,rl=r.unicodes,Ga=Er($.styleDefault)};lm(function(e){Ga=Er(e.styleDefault)});il();function Ja(e,t){return(el[e]||{})[t]}function Cm(e,t){return(tl[e]||{})[t]}function Ut(e,t){return(al[e]||{})[t]}function ol(e){return nl[e]||{prefix:null,iconName:null}}function Pm(e){var t=rl[e],n=Ja("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function yt(){return Ga}var Qa=function(){return{prefix:null,iconName:null,rest:[]}};function Er(e){var t=Va[e],n=nr[e]||nr[t],r=e in Fe.styles?e:null;return n||r||null}function kr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=Am($.familyPrefix,s);if(yn[s]?(s=xm.includes(s)?Jd[s]:s,a=s,o.prefix=s):Em.indexOf(s)>-1?(a=s,o.prefix=Er(s)):l?o.iconName=l:s!==$.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var f=a==="fa"?ol(o.iconName):{},c=Ut(o.prefix,o.iconName);f.prefix&&(a=null),o.iconName=f.iconName||c||o.iconName,o.prefix=f.prefix||o.prefix,o.prefix==="far"&&!yn.far&&yn.fas&&!$.autoFetchSvg&&(o.prefix="fas")}return o},Qa());return(i.prefix==="fa"||a==="fa")&&(i.prefix=yt()||"fas"),i}var Om=function(){function e(){jd(this,e),this.definitions={}}return $d(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=I(I({},n.definitions[s]||{}),o[s]),la(s,o[s]);var l=Vs[s];l&&la(l,o[s]),il()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=f)}),n[s][l]=f}),n}}]),e}(),so=[],Bt={},Vt={},Sm=Object.keys(Vt);function Im(e,t){var n=t.mixoutsTo;return so=e,Bt={},Object.keys(Vt).forEach(function(r){Sm.indexOf(r)===-1&&delete Vt[r]}),so.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),tr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Bt[o]||(Bt[o]=[]),Bt[o].push(i[o])})}r.provides&&r.provides(Vt)}),n}function ca(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Bt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Tt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Bt[e]||[];a.forEach(function(i){i.apply(null,n)})}function nt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Vt[e]?Vt[e].apply(null,t):void 0}function fa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||yt();if(!!t)return t=Ut(n,t)||t,io(sl.definitions,n,t)||io(Fe.styles,n,t)}var sl=new Om,Rm=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,Tt("noAuto")},Tm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return at?(Tt("beforeI2svg",t),nt("pseudoElements2svg",t),nt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,vm(function(){Mm({autoReplaceSvgRoot:n}),Tt("watch",t)})}},Nm={icon:function(t){if(t===null)return null;if(tr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ut(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Er(t[0]);return{prefix:r,iconName:Ut(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat($.familyPrefix,"-"))>-1||t.match(Qd))){var a=kr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||yt(),iconName:Ut(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=yt();return{prefix:i,iconName:Ut(i,t)||t}}}},Oe={noAuto:Rm,config:$,dom:Tm,parse:Nm,library:sl,findIconDefinition:fa,toHtml:Sn},Mm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?oe:n;(Object.keys(Fe.styles).length>0||$.autoFetchSvg)&&at&&$.autoReplaceSvg&&Oe.dom.i2svg({node:r})};function Ar(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Sn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!at){var r=oe.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Lm(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Xa(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=xr(I(I({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Fm(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat($.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},a),{},{id:o}),children:r}]}]}function Za(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,d=e.extra,m=e.watchable,g=m===void 0?!1:m,E=r.found?r:n,R=E.width,O=E.height,v=a==="fak",w=[$.replacementClass,i?"".concat($.familyPrefix,"-").concat(i):""].filter(function(le){return d.classes.indexOf(le)===-1}).filter(function(le){return le!==""||!!le}).concat(d.classes).join(" "),N={children:[],attributes:I(I({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(O)})},L=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(R/O*16*.0625,"em")}:{};g&&(N.attributes[Rt]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(c||On())},children:[l]}),delete N.attributes.title);var K=I(I({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:I(I({},L),d.styles)}),D=r.found&&n.found?nt("generateAbstractMask",K)||{children:[],attributes:{}}:nt("generateAbstractIcon",K)||{children:[],attributes:{}},B=D.children,me=D.attributes;return K.children=B,K.attributes=me,s?Fm(K):Lm(K)}function lo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=I(I(I({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Rt]="");var c=I({},o.styles);Xa(a)&&(c.transform=mm({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=xr(c);d.length>0&&(f.style=d);var m=[];return m.push({tag:"span",attributes:f,children:[t]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function zm(e){var t=e.content,n=e.title,r=e.extra,a=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=xr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var zr=Fe.styles;function ua(e){var t=e[0],n=e[1],r=e.slice(4),a=Ba(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat($.familyPrefix,"-").concat(Pt.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat(Pt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat(Pt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var jm={found:!1,width:512,height:512};function $m(e,t){!Ys&&!$.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function da(e,t){var n=t;return t==="fa"&&$.styleDefault!==null&&(t=yt()),new Promise(function(r,a){if(nt("missingIconAbstract"),n==="fa"){var i=ol(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&zr[t]&&zr[t][e]){var o=zr[t][e];return r(ua(o))}$m(e,t),r(I(I({},jm),{},{icon:$.showMissingIcons&&e?nt("missingIconAbstract")||{}:{}}))})}var co=function(){},ma=$.measurePerformance&&Ln&&Ln.mark&&Ln.measure?Ln:{mark:co,measure:co},fn='FA "6.1.1"',Dm=function(t){return ma.mark("".concat(fn," ").concat(t," begins")),function(){return ll(t)}},ll=function(t){ma.mark("".concat(fn," ").concat(t," ends")),ma.measure("".concat(fn," ").concat(t),"".concat(fn," ").concat(t," begins"),"".concat(fn," ").concat(t," ends"))},ei={begin:Dm,end:ll},Hn=function(){};function fo(e){var t=e.getAttribute?e.getAttribute(Rt):null;return typeof t=="string"}function Hm(e){var t=e.getAttribute?e.getAttribute(Wa):null,n=e.getAttribute?e.getAttribute(Ya):null;return t&&n}function Um(e){return e&&e.classList&&e.classList.contains&&e.classList.contains($.replacementClass)}function Bm(){if($.autoReplaceSvg===!0)return Un.replace;var e=Un[$.autoReplaceSvg];return e||Un.replace}function Km(e){return oe.createElementNS("http://www.w3.org/2000/svg",e)}function Wm(e){return oe.createElement(e)}function cl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Km:Wm:n;if(typeof e=="string")return oe.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(cl(o,{ceFn:r}))}),a}function Ym(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Un={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(cl(a),n)}),n.getAttribute(Rt)===null&&$.keepOriginalSource){var r=oe.createComment(Ym(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~qa(n).indexOf($.replacementClass))return Un.replace(t);var a=new RegExp("".concat($.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===$.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Sn(s)}).join(`
`);n.setAttribute(Rt,""),n.innerHTML=o}};function uo(e){e()}function fl(e,t){var n=typeof t=="function"?t:Hn;if(e.length===0)n();else{var r=uo;$.mutateApproach===Xd&&(r=bt.requestAnimationFrame||uo),r(function(){var a=Bm(),i=ei.begin("mutate");e.map(a),i(),n()})}}var ti=!1;function ul(){ti=!0}function ha(){ti=!1}var ar=null;function mo(e){if(!!no&&!!$.observeMutations){var t=e.treeCallback,n=t===void 0?Hn:t,r=e.nodeCallback,a=r===void 0?Hn:r,i=e.pseudoElementsCallback,o=i===void 0?Hn:i,s=e.observeMutationsRoot,l=s===void 0?oe:s;ar=new no(function(f){if(!ti){var c=yt();rn(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!fo(d.addedNodes[0])&&($.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&$.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&fo(d.target)&&~nm.indexOf(d.attributeName))if(d.attributeName==="class"&&Hm(d.target)){var m=kr(qa(d.target)),g=m.prefix,E=m.iconName;d.target.setAttribute(Wa,g||c),E&&d.target.setAttribute(Ya,E)}else Um(d.target)&&a(d.target)})}}),at&&ar.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Vm(){!ar||ar.disconnect()}function qm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Xm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=kr(qa(e));return a.prefix||(a.prefix=yt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=Cm(a.prefix,e.innerText)||Ja(a.prefix,sa(e.innerText))),a}function Gm(e){var t=rn(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return $.autoA11y&&(n?t["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(r||On()):(t["aria-hidden"]="true",t.focusable="false")),t}function Jm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:We,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ho(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Xm(e),r=n.iconName,a=n.prefix,i=n.rest,o=Gm(e),s=ca("parseNodeAttributes",{},e),l=t.styleParser?qm(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:We,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Qm=Fe.styles;function dl(e){var t=$.autoReplaceSvg==="nest"?ho(e,{styleParser:!1}):ho(e);return~t.extra.classes.indexOf(qs)?nt("generateLayersText",e,t):nt("generateSvgReplacementMutation",e,t)}function po(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!at)return Promise.resolve();var n=oe.documentElement.classList,r=function(d){return n.add("".concat(ro,"-").concat(d))},a=function(d){return n.remove("".concat(ro,"-").concat(d))},i=$.autoFetchSvg?Object.keys(Va):Object.keys(Qm),o=[".".concat(qs,":not([").concat(Rt,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Rt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=rn(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ei.begin("onTree"),f=s.reduce(function(c,d){try{var m=dl(d);m&&c.push(m)}catch(g){Ys||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(m){fl(m,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(m){l(),d(m)})})}function Zm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;dl(e).then(function(n){n&&fl([n],t)})}function eh(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:fa(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:fa(a||{})),e(r,I(I({},n),{},{mask:a}))}}var th=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?We:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,d=n.title,m=d===void 0?null:d,g=n.titleId,E=g===void 0?null:g,R=n.classes,O=R===void 0?[]:R,v=n.attributes,w=v===void 0?{}:v,N=n.styles,L=N===void 0?{}:N;if(!!t){var K=t.prefix,D=t.iconName,B=t.icon;return Ar(I({type:"icon"},t),function(){return Tt("beforeDOMElementCreation",{iconDefinition:t,params:n}),$.autoA11y&&(m?w["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(E||On()):(w["aria-hidden"]="true",w.focusable="false")),Za({icons:{main:ua(B),mask:l?ua(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:K,iconName:D,transform:I(I({},We),a),symbol:o,title:m,maskId:c,titleId:E,extra:{attributes:w,styles:L,classes:O}})})}},nh={mixout:function(){return{icon:eh(th)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=po,n.nodeCallback=Zm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?oe:r,i=n.callback,o=i===void 0?function(){}:i;return po(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,d=r.maskId,m=r.extra;return new Promise(function(g,E){Promise.all([da(a,s),c.iconName?da(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(R){var O=Ba(R,2),v=O[0],w=O[1];g([n,Za({icons:{main:v,mask:w},prefix:s,iconName:a,transform:l,symbol:f,maskId:d,title:i,titleId:o,extra:m,watchable:!0})])}).catch(E)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=xr(s);l.length>0&&(a.style=l);var f;return Xa(o)&&(f=nt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},rh={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Ar({type:"layer"},function(){Tt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat($.familyPrefix,"-layers")].concat(wr(i)).join(" ")},children:o}]})}}}},ah={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Ar({type:"counter",content:n},function(){return Tt("beforeDOMElementCreation",{content:n,params:r}),zm({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat($.familyPrefix,"-layers-counter")].concat(wr(s))}})})}}}},ih={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?We:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,m=r.styles,g=m===void 0?{}:m;return Ar({type:"text",content:n},function(){return Tt("beforeDOMElementCreation",{content:n,params:r}),lo({content:n,transform:I(I({},We),i),title:s,extra:{attributes:d,styles:g,classes:["".concat($.familyPrefix,"-layers-text")].concat(wr(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Bs){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return $.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,lo({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},oh=new RegExp('"',"ug"),go=[1105920,1112319];function sh(e){var t=e.replace(oh,""),n=_m(t,0),r=n>=go[0]&&n<=go[1],a=t.length===2?t[0]===t[1]:!1;return{value:sa(a?t[0]:t),isSecondary:r||a}}function vo(e,t){var n="".concat(qd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=rn(e.children),o=i.filter(function(D){return D.getAttribute(oa)===t})[0],s=bt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Zd),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?nr[l[2].toLowerCase()]:em[f],g=sh(d),E=g.value,R=g.isSecondary,O=l[0].startsWith("FontAwesome"),v=Ja(m,E),w=v;if(O){var N=Pm(E);N.iconName&&N.prefix&&(v=N.iconName,m=N.prefix)}if(v&&!R&&(!o||o.getAttribute(Wa)!==m||o.getAttribute(Ya)!==w)){e.setAttribute(n,w),o&&e.removeChild(o);var L=Jm(),K=L.extra;K.attributes[oa]=t,da(v,m).then(function(D){var B=Za(I(I({},L),{},{icons:{main:D,mask:Qa()},prefix:m,iconName:w,extra:K,watchable:!0})),me=oe.createElement("svg");t==="::before"?e.insertBefore(me,e.firstChild):e.appendChild(me),me.outerHTML=B.map(function(le){return Sn(le)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function lh(e){return Promise.all([vo(e,"::before"),vo(e,"::after")])}function ch(e){return e.parentNode!==document.head&&!~Gd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(oa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function bo(e){if(!!at)return new Promise(function(t,n){var r=rn(e.querySelectorAll("*")).filter(ch).map(lh),a=ei.begin("searchPseudoElements");ul(),Promise.all(r).then(function(){a(),ha(),t()}).catch(function(){a(),ha(),n()})})}var fh={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=bo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?oe:r;$.searchPseudoElements&&bo(a)}}},yo=!1,uh={mixout:function(){return{dom:{unwatch:function(){ul(),yo=!0}}}},hooks:function(){return{bootstrap:function(){mo(ca("mutationObserverCallbacks",{}))},noAuto:function(){Vm()},watch:function(n){var r=n.observeMutationsRoot;yo?ha():mo(ca("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},_o=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},dh={mixout:function(){return{parse:{transform:function(n){return _o(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=_o(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},m={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:m};return{tag:"g",attributes:I({},g.outer),children:[{tag:"g",attributes:I({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),g.path)}]}]}}}},jr={x:0,y:0,width:"100%",height:"100%"};function wo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function mh(e){return e.tag==="g"?e.children:[e]}var hh={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?kr(a.split(" ").map(function(o){return o.trim()})):Qa();return i.prefix||(i.prefix=yt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,d=o.width,m=o.icon,g=dm({transform:l,containerWidth:d,iconWidth:f}),E={tag:"rect",attributes:I(I({},jr),{},{fill:"white"})},R=c.children?{children:c.children.map(wo)}:{},O={tag:"g",attributes:I({},g.inner),children:[wo(I({tag:c.tag,attributes:I(I({},c.attributes),g.path)},R))]},v={tag:"g",attributes:I({},g.outer),children:[O]},w="mask-".concat(s||On()),N="clip-".concat(s||On()),L={tag:"mask",attributes:I(I({},jr),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,v]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:mh(m)},L]};return r.push(K,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(w,")")},jr)}),{children:r,attributes:a}}}},ph={provides:function(t){var n=!1;bt.matchMedia&&(n=bt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:I(I({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:I(I({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:I(I({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},gh={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},vh=[pm,nh,rh,ah,ih,fh,uh,dh,hh,ph,gh];Im(vh,{mixoutsTo:Oe});Oe.noAuto;var ml=Oe.config,hl=Oe.library;Oe.dom;var pl=Oe.parse;Oe.findIconDefinition;Oe.toHtml;var bh=Oe.icon;Oe.layer;var yh=Oe.text;Oe.counter;var _h=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function wh(e,t){return t={exports:{}},e(t,t.exports),t.exports}var xh=wh(function(e){(function(t){var n=function(v,w,N){if(!f(w)||d(w)||m(w)||g(w)||l(w))return w;var L,K=0,D=0;if(c(w))for(L=[],D=w.length;K<D;K++)L.push(n(v,w[K],N));else{L={};for(var B in w)Object.prototype.hasOwnProperty.call(w,B)&&(L[v(B,N)]=n(v,w[B],N))}return L},r=function(v,w){w=w||{};var N=w.separator||"_",L=w.split||/(?=[A-Z])/;return v.split(L).join(N)},a=function(v){return E(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(w,N){return N?N.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var w=a(v);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(v,w){return r(v,w).toLowerCase()},s=Object.prototype.toString,l=function(v){return typeof v=="function"},f=function(v){return v===Object(v)},c=function(v){return s.call(v)=="[object Array]"},d=function(v){return s.call(v)=="[object Date]"},m=function(v){return s.call(v)=="[object RegExp]"},g=function(v){return s.call(v)=="[object Boolean]"},E=function(v){return v=v-0,v===v},R=function(v,w){var N=w&&"process"in w?w.process:w;return typeof N!="function"?v:function(L,K){return N(L,v,K)}},O={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,w){return n(R(a,w),v)},decamelizeKeys:function(v,w){return n(R(o,w),v,w)},pascalizeKeys:function(v,w){return n(R(i,w),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=O:t.humps=O})(_h)}),Eh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},un=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},ir=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kh=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},pa=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function Ah(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=xh.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Ch(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ni(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=Ch(c);break;case"style":l.style=Ah(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=kh(n,["class","style"]);return br(e.tag,ir({},t,{class:a.class,style:ir({},a.style,o)},a.attrs,s),r)}var gl=!1;try{gl=!0}catch{}function Ph(){if(!gl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function _n(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?un({},e,t):{}}function Oh(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},un(t,"fa-"+e.size,e.size!==null),un(t,"fa-rotate-"+e.rotation,e.rotation!==null),un(t,"fa-pull-"+e.pull,e.pull!==null),un(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function xo(e){if(e===null)return null;if((typeof e=="undefined"?"undefined":Eh(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Sh=_t({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ce(function(){return xo(t.icon)}),i=ce(function(){return _n("classes",Oh(t))}),o=ce(function(){return _n("transform",typeof t.transform=="string"?pl.transform(t.transform):t.transform)}),s=ce(function(){return _n("mask",xo(t.mask))}),l=ce(function(){return bh(a.value,ir({},i.value,o.value,s.value,{symbol:t.symbol,title:t.title}))});Yt(l,function(c){if(!c)return Ph("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=ce(function(){return l.value?ni(l.value.abstract[0],{},r):null});return function(){return f.value}}});_t({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=ml.familyPrefix,i=ce(function(){return[a+"-layers"].concat(pa(t.fixedWidth?[a+"-fw"]:[]))});return function(){return br("div",{class:i.value},r.default?r.default():[])}}});_t({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=ml.familyPrefix,i=ce(function(){return _n("classes",[].concat(pa(t.counter?[a+"-layers-counter"]:[]),pa(t.position?[a+"-layers-"+t.position]:[])))}),o=ce(function(){return _n("transform",typeof t.transform=="string"?pl.transform(t.transform):t.transform)}),s=ce(function(){var f=yh(t.value.toString(),ir({},o.value,i.value)),c=f.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),l=ce(function(){return ni(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Ih={prefix:"fas",iconName:"camera",icon:[512,512,[62258,"camera-alt"],"f030","M194.6 32H317.4C338.1 32 356.4 45.22 362.9 64.82L373.3 96H448C483.3 96 512 124.7 512 160V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V160C0 124.7 28.65 96 64 96H138.7L149.1 64.82C155.6 45.22 173.9 32 194.6 32H194.6zM256 384C309 384 352 341 352 288C352 234.1 309 192 256 192C202.1 192 160 234.1 160 288C160 341 202.1 384 256 384z"]},Rh={prefix:"fas",iconName:"microphone",icon:[384,512,[],"f130","M192 352c53.03 0 96-42.97 96-96v-160c0-53.03-42.97-96-96-96s-96 42.97-96 96v160C96 309 138.1 352 192 352zM344 192C330.7 192 320 202.7 320 215.1V256c0 73.33-61.97 132.4-136.3 127.7c-66.08-4.169-119.7-66.59-119.7-132.8L64 215.1C64 202.7 53.25 192 40 192S16 202.7 16 215.1v32.15c0 89.66 63.97 169.6 152 181.7V464H128c-18.19 0-32.84 15.18-31.96 33.57C96.43 505.8 103.8 512 112 512h160c8.222 0 15.57-6.216 15.96-14.43C288.8 479.2 274.2 464 256 464h-40v-33.77C301.7 418.5 368 344.9 368 256V215.1C368 202.7 357.3 192 344 192z"]};const Cr=Bf(Pd),vl=Yf();vl.use(tu);Cr.use(vl);Cr.component("font-awesome-icon",Sh);Cr.use(zd);Cr.mount("#app");hl.add(Rh);hl.add(Ih);export{Le as F,js as _,ue as a,Mh as b,gr as c,_t as d,ae as e,Ve as f,jh as g,Lh as h,fe as i,Fh as j,Nt as o,tn as r,Th as t,ye as u,zh as v,Nh as w};
