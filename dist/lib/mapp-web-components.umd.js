(function(b,w){typeof exports=="object"&&typeof module<"u"?w(exports):typeof define=="function"&&define.amd?define(["exports"],w):(b=typeof globalThis<"u"?globalThis:b||self,w(b.mappWebComponents={}))})(this,function(b){"use strict";var Ti=Object.defineProperty;var Yr=b=>{throw TypeError(b)};var Ai=(b,w,I)=>w in b?Ti(b,w,{enumerable:!0,configurable:!0,writable:!0,value:I}):b[w]=I;var G=(b,w,I)=>Ai(b,typeof w!="symbol"?w+"":w,I),jr=(b,w,I)=>w.has(b)||Yr("Cannot "+I);var q=(b,w,I)=>(jr(b,w,"read from private field"),I?I.call(b):w.get(b)),Mt=(b,w,I)=>w.has(b)?Yr("Cannot add the same private member more than once"):w instanceof WeakSet?w.add(b):w.set(b,I),Lt=(b,w,I,qe)=>(jr(b,w,"write to private field"),qe?qe.call(b,I):w.set(b,I),I);var se,j;const w="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(w);const I=1,qe=2,Ur=16,Wr=1,Kr=4,Gr=8,Jr=16,Xr=4,Zr=1,Qr=2,Pt="[",lt="[!",ot="]",Ne={},H=Symbol(),Dt=!1;function ut(e){console.warn("hydration_mismatch")}var ft=Array.isArray,ct=Array.from,He=Object.keys,Be=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,en=Object.getOwnPropertyDescriptors,tn=Object.prototype,rn=Array.prototype,vt=Object.getPrototypeOf;function nn(e){return typeof e=="function"}const Ce=()=>{};function Ft(e){for(var t=0;t<e.length;t++)e[t]()}const ae=2,qt=4,ze=8,Ve=16,J=32,Se=64,be=128,Ye=256,B=512,le=1024,Oe=2048,X=4096,Re=8192,Ht=16384,je=32768,sn=1<<18,Bt=1<<19,dt=Symbol("$state"),an=Symbol("");function zt(e){return e===this.v}function ln(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Vt(e){return!ln(e,this.v)}function on(){throw new Error("effect_update_depth_exceeded")}function un(){throw new Error("hydration_failed")}function fn(e){throw new Error("props_invalid_value")}function cn(){throw new Error("state_descriptors_fixed")}function vn(){throw new Error("state_prototype_fixed")}function dn(){throw new Error("state_unsafe_local_read")}function _n(){throw new Error("state_unsafe_mutation")}let Yt=!1;function W(e){return{f:0,v:e,reactions:null,equals:zt,version:0}}function _t(e,t=!1){const r=W(e);return t||(r.equals=Vt),r}function Z(e,t){return T!==null&&xn()&&T.f&(ae|Ve)&&(he===null||!he.includes(e))&&_n(),jt(e,t)}function jt(e,t){return e.equals(t)||(e.v=t,e.version=cr(),Ut(e,le),g!==null&&g.f&B&&!(g.f&J)&&(M!==null&&M.includes(e)?(ne(g,le),Xe(g)):oe===null?wn([e]):oe.push(e))),t}function Ut(e,t){var r=e.reactions;if(r!==null)for(var n=r.length,i=0;i<n;i++){var s=r[i],a=s.f;a&le||(ne(s,t),a&(B|be)&&(a&ae?Ut(s,Oe):Xe(s)))}}function hn(e){var t=ae|le;g===null?t|=be:g.f|=Bt;const r={children:null,ctx:ee,deps:null,equals:zt,f:t,fn:e,reactions:null,v:null,version:0,parent:g};if(T!==null&&T.f&ae){var n=T;(n.children??(n.children=[])).push(r)}return r}function Wt(e){var t=e.children;if(t!==null){e.children=null;for(var r=0;r<t.length;r+=1){var n=t[r];n.f&ae?ht(n):de(n)}}}function Kt(e){var t,r=g;V(e.parent);try{Wt(e),t=vr(e)}finally{V(r)}return t}function Gt(e){var t=Kt(e),r=(xe||e.f&be)&&e.deps!==null?Oe:B;ne(e,r),e.equals(t)||(e.v=t,e.version=cr())}function ht(e){Wt(e),De(e,0),ne(e,Re),e.v=e.children=e.deps=e.ctx=e.reactions=null}function pn(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Ie(e,t,r,n=!0){var i=(e&Se)!==0,s=g,a={ctx:ee,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|le,first:null,fn:t,last:null,next:null,parent:i?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var u=$e;try{ur(!0),Je(a),a.f|=Ht}catch(l){throw de(a),l}finally{ur(u)}}else t!==null&&Xe(a);var f=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&Bt)===0;if(!f&&!i&&n&&(s!==null&&pn(a,s),T!==null&&T.f&ae)){var o=T;(o.children??(o.children=[])).push(a)}return a}function Jt(e){const t=Ie(Se,e,!0);return()=>{de(t)}}function Xt(e){return Ie(qt,e,!1)}function Zt(e){return Ie(ze,e,!0)}function re(e){return pt(e)}function pt(e,t=0){return Ie(ze|Ve|t,e,!0)}function Me(e,t=!0){return Ie(ze|J,e,!0,t)}function Qt(e){var t=e.teardown;if(t!==null){const r=T;Q(null);try{t.call(null)}finally{Q(r)}}}function er(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var r=0;r<t.length;r+=1)ht(t[r])}}function tr(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var n=r.next;de(r,t),r=n}}function mn(e){for(var t=e.first;t!==null;){var r=t.next;t.f&J||de(t),t=r}}function de(e,t=!0){var r=!1;if((t||e.f&sn)&&e.nodes_start!==null){for(var n=e.nodes_start,i=e.nodes_end;n!==null;){var s=n===i?null:ue(n);n.remove(),n=s}r=!0}tr(e,t&&!r),er(e),De(e,0),ne(e,Re);var a=e.transitions;if(a!==null)for(const f of a)f.stop();Qt(e);var u=e.parent;u!==null&&u.first!==null&&rr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.parent=e.fn=e.nodes_start=e.nodes_end=null}function rr(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function mt(e,t){var r=[];gt(e,r,!0),nr(r,()=>{de(e),t&&t()})}function nr(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var i of e)i.out(n)}else t()}function gt(e,t,r){if(!(e.f&X)){if(e.f^=X,e.transitions!==null)for(const a of e.transitions)(a.is_global||r)&&t.push(a);for(var n=e.first;n!==null;){var i=n.next,s=(n.f&je)!==0||(n.f&J)!==0;gt(n,t,s?r:!1),n=i}}}function Ue(e){ir(e,!0)}function ir(e,t){if(e.f&X){Pe(e)&&Je(e),e.f^=X;for(var r=e.first;r!==null;){var n=r.next,i=(r.f&je)!==0||(r.f&J)!==0;ir(r,i?t:!1),r=n}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||t)&&s.in()}}const gn=typeof requestIdleCallback>"u"?e=>setTimeout(e,1):requestIdleCallback;let We=!1,Ke=!1,yt=[],bt=[];function sr(){We=!1;const e=yt.slice();yt=[],Ft(e)}function ar(){Ke=!1;const e=bt.slice();bt=[],Ft(e)}function lr(e){We||(We=!0,queueMicrotask(sr)),yt.push(e)}function yn(e){Ke||(Ke=!0,gn(ar)),bt.push(e)}function bn(){We&&sr(),Ke&&ar()}const or=0,$n=1;let Ge=or,Le=!1,$e=!1;function ur(e){$e=e}let _e=[],we=0,Ni=[],T=null;function Q(e){T=e}let g=null;function V(e){g=e}let he=null,M=null,z=0,oe=null;function wn(e){oe=e}let fr=0,xe=!1,ee=null;function cr(){return++fr}function xn(){return!Yt}function Pe(e){var a,u;var t=e.f;if(t&le)return!0;if(t&Oe){var r=e.deps,n=(t&be)!==0;if(r!==null){var i;if(t&Ye){for(i=0;i<r.length;i++)((a=r[i]).reactions??(a.reactions=[])).push(e);e.f^=Ye}for(i=0;i<r.length;i++){var s=r[i];if(Pe(s)&&Gt(s),n&&g!==null&&!xe&&!((u=s==null?void 0:s.reactions)!=null&&u.includes(e))&&(s.reactions??(s.reactions=[])).push(e),s.version>e.version)return!0}}n||ne(e,B)}return!1}function En(e,t,r){throw e}function vr(e){var v;var t=M,r=z,n=oe,i=T,s=xe,a=he,u=ee,f=e.f;M=null,z=0,oe=null,T=f&(J|Se)?null:e,xe=!$e&&(f&be)!==0,he=null,ee=e.ctx;try{var o=(0,e.fn)(),l=e.deps;if(M!==null){var c;if(De(e,z),l!==null&&z>0)for(l.length=z+M.length,c=0;c<M.length;c++)l[z+c]=M[c];else e.deps=l=M;if(!xe)for(c=z;c<l.length;c++)((v=l[c]).reactions??(v.reactions=[])).push(e)}else l!==null&&z<l.length&&(De(e,z),l.length=z);return o}finally{M=t,z=r,oe=n,T=i,xe=s,he=a,ee=u}}function kn(e,t){let r=t.reactions;if(r!==null){var n=r.indexOf(e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}r===null&&t.f&ae&&(M===null||!M.includes(t))&&(ne(t,Oe),t.f&(be|Ye)||(t.f^=Ye),De(t,0))}function De(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)kn(e,r[n])}function Je(e){var t=e.f;if(!(t&Re)){ne(e,B);var r=g;g=e;try{t&Ve?mn(e):tr(e),er(e),Qt(e);var n=vr(e);e.teardown=typeof n=="function"?n:null,e.version=fr}catch(i){En(i)}finally{g=r}}}function dr(){we>1e3&&(we=0,on()),we++}function _r(e){var t=e.length;if(t!==0){dr();var r=$e;$e=!0;try{for(var n=0;n<t;n++){var i=e[n];i.f&B||(i.f^=B);var s=[];hr(i,s),Tn(s)}}finally{$e=r}}}function Tn(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var n=e[r];!(n.f&(Re|X))&&Pe(n)&&(Je(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?rr(n):n.fn=null))}}function An(){if(Le=!1,we>1001)return;const e=_e;_e=[],_r(e),Le||(we=0)}function Xe(e){Ge===or&&(Le||(Le=!0,queueMicrotask(An)));for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if(r&(Se|J)){if(!(r&B))return;t.f^=B}}_e.push(t)}function hr(e,t){var r=e.first,n=[];e:for(;r!==null;){var i=r.f,s=(i&J)!==0,a=s&&(i&B)!==0;if(!a&&!(i&X))if(i&ze){s?r.f^=B:Pe(r)&&Je(r);var u=r.first;if(u!==null){r=u;continue}}else i&qt&&n.push(r);var f=r.next;if(f===null){let c=r.parent;for(;c!==null;){if(e===c)break e;var o=c.next;if(o!==null){r=o;continue e}c=c.parent}}r=f}for(var l=0;l<n.length;l++)u=n[l],t.push(u),hr(u,t)}function pr(e){var t=Ge,r=_e;try{dr();const i=[];Ge=$n,_e=i,Le=!1,_r(r);var n=e==null?void 0:e();return bn(),(_e.length>0||i.length>0)&&pr(),we=0,n}finally{Ge=t,_e=r}}function E(e){var u;var t=e.f,r=(t&ae)!==0;if(r&&t&Re){var n=Kt(e);return ht(e),n}if(T!==null){he!==null&&he.includes(e)&&dn();var i=T.deps;M===null&&i!==null&&i[z]===e?z++:M===null?M=[e]:M.push(e),oe!==null&&g!==null&&g.f&B&&!(g.f&J)&&oe.includes(e)&&(ne(g,le),Xe(g))}else if(r&&e.deps===null){var s=e,a=s.parent;a!==null&&!((u=a.deriveds)!=null&&u.includes(s))&&(a.deriveds??(a.deriveds=[])).push(s)}return r&&(s=e,Pe(s)&&Gt(s)),e.v}function $t(e){const t=T;try{return T=null,e()}finally{T=t}}const Nn=~(le|Oe|B);function ne(e,t){e.f=e.f&Nn|t}function wt(e,t=!1,r){ee={p:ee,c:null,e:null,m:!1,s:e,x:null,l:null}}function xt(e){const t=ee;if(t!==null){const a=t.e;if(a!==null){var r=g,n=T;t.e=null;try{for(var i=0;i<a.length;i++){var s=a[i];V(s.effect),Q(s.reaction),Xt(s.fn)}}finally{V(r),Q(n)}}ee=t.p,t.m=!0}return{}}function pe(e,t=null,r){if(typeof e!="object"||e===null||dt in e)return e;const n=vt(e);if(n!==tn&&n!==rn)return e;var i=new Map,s=ft(e),a=W(0);s&&i.set("length",W(e.length));var u;return new Proxy(e,{defineProperty(f,o,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&cn();var c=i.get(o);return c===void 0?(c=W(l.value),i.set(o,c)):Z(c,pe(l.value,u)),!0},deleteProperty(f,o){var l=i.get(o);if(l===void 0)o in f&&i.set(o,W(H));else{if(s&&typeof o=="string"){var c=i.get("length"),v=Number(o);Number.isInteger(v)&&v<c.v&&Z(c,v)}Z(l,H),mr(a)}return!0},get(f,o,l){var _;if(o===dt)return e;var c=i.get(o),v=o in f;if(c===void 0&&(!v||(_=ve(f,o))!=null&&_.writable)&&(c=W(pe(v?f[o]:H,u)),i.set(o,c)),c!==void 0){var d=E(c);return d===H?void 0:d}return Reflect.get(f,o,l)},getOwnPropertyDescriptor(f,o){var l=Reflect.getOwnPropertyDescriptor(f,o);if(l&&"value"in l){var c=i.get(o);c&&(l.value=E(c))}else if(l===void 0){var v=i.get(o),d=v==null?void 0:v.v;if(v!==void 0&&d!==H)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return l},has(f,o){var d;if(o===dt)return!0;var l=i.get(o),c=l!==void 0&&l.v!==H||Reflect.has(f,o);if(l!==void 0||g!==null&&(!c||(d=ve(f,o))!=null&&d.writable)){l===void 0&&(l=W(c?pe(f[o],u):H),i.set(o,l));var v=E(l);if(v===H)return!1}return c},set(f,o,l,c){var x;var v=i.get(o),d=o in f;if(s&&o==="length")for(var _=l;_<v.v;_+=1){var p=i.get(_+"");p!==void 0?Z(p,H):_ in f&&(p=W(H),i.set(_+"",p))}v===void 0?(!d||(x=ve(f,o))!=null&&x.writable)&&(v=W(void 0),Z(v,pe(l,u)),i.set(o,v)):(d=v.v!==H,Z(v,pe(l,u)));var m=Reflect.getOwnPropertyDescriptor(f,o);if(m!=null&&m.set&&m.set.call(c,l),!d){if(s&&typeof o=="string"){var h=i.get("length"),y=Number(o);Number.isInteger(y)&&y>=h.v&&Z(h,y+1)}mr(a)}return!0},ownKeys(f){E(a);var o=Reflect.ownKeys(f).filter(v=>{var d=i.get(v);return d===void 0||d.v!==H});for(var[l,c]of i)c.v!==H&&!(l in f)&&o.push(l);return o},setPrototypeOf(){vn()}})}function mr(e,t=1){Z(e,e.v+t)}var gr,yr,br;function Et(){if(gr===void 0){gr=window;var e=Element.prototype,t=Node.prototype;yr=ve(t,"firstChild").get,br=ve(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function Ee(e=""){return document.createTextNode(e)}function me(e){return yr.call(e)}function ue(e){return br.call(e)}function N(e,t){if(!$)return me(e);var r=me(k);if(r===null)r=k.appendChild(Ee());else if(t&&r.nodeType!==3){var n=Ee();return r==null||r.before(n),K(n),n}return K(r),r}function $r(e,t){if(!$){var r=me(e);return r instanceof Comment&&r.data===""?ue(r):r}return k}function Y(e,t=1,r=!1){let n=$?k:e;for(;t--;)n=ue(n);if(!$)return n;var i=n.nodeType;if(r&&i!==3){var s=Ee();return n==null||n.before(s),K(s),s}return K(n),n}function wr(e){e.textContent=""}let $=!1;function ie(e){$=e}let k;function K(e){if(e===null)throw ut(),Ne;return k=e}function Fe(){return K(ue(k))}function A(e){if($){if(ue(k)!==null)throw ut(),Ne;k=e}}function kt(){for(var e=0,t=k;;){if(t.nodeType===8){var r=t.data;if(r===ot){if(e===0)return t;e-=1}else(r===Pt||r===lt)&&(e+=1)}var n=ue(t);t.remove(),t=n}}let xr=!1;function Er(){xr||(xr=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function Cn(e){var t=T,r=g;Q(null),V(null);try{return e()}finally{Q(t),V(r)}}function Sn(e,t,r,n=r){e.addEventListener(t,()=>Cn(r));const i=e.__on_r;i?e.__on_r=()=>{i(),n()}:e.__on_r=n,Er()}const kr=new Set,Tt=new Set;function At(e){for(var t=0;t<e.length;t++)kr.add(e[t]);for(var r of Tt)r(e)}function Ze(e){var y;var t=this,r=t.ownerDocument,n=e.type,i=((y=e.composedPath)==null?void 0:y.call(e))||[],s=i[0]||e.target,a=0,u=e.__root;if(u){var f=i.indexOf(u);if(f!==-1&&(t===document||t===window)){e.__root=t;return}var o=i.indexOf(t);if(o===-1)return;f<=o&&(a=f)}if(s=i[a]||e.target,s!==t){Be(e,"currentTarget",{configurable:!0,get(){return s||r}});var l=T,c=g;Q(null),V(null);try{for(var v,d=[];s!==null;){var _=s.assignedSlot||s.parentNode||s.host||null;try{var p=s["__"+n];if(p!==void 0&&!s.disabled)if(ft(p)){var[m,...h]=p;m.apply(s,[e,...h])}else p.call(s,e)}catch(x){v?d.push(x):v=x}if(e.cancelBubble||_===t||_===null)break;s=_}if(v){for(let x of d)queueMicrotask(()=>{throw x});throw v}}finally{e.__root=t,delete e.currentTarget,Q(l),V(c)}}}function On(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function ke(e,t){var r=g;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function D(e,t){var r=(t&Zr)!==0,n=(t&Qr)!==0,i,s=!e.startsWith("<!>");return()=>{if($)return ke(k,null),k;i===void 0&&(i=On(s?e:"<!>"+e),r||(i=me(i)));var a=n?document.importNode(i,!0):i.cloneNode(!0);if(r){var u=me(a),f=a.lastChild;ke(u,f)}else ke(a,a);return a}}function Rn(){if($)return ke(k,null),k;var e=document.createDocumentFragment(),t=document.createComment(""),r=Ee();return e.append(t,r),ke(t,r),e}function L(e,t){if($){g.nodes_end=k,Fe();return}e!==null&&e.before(t)}const In=["touchstart","touchmove"];function Mn(e){return In.includes(e)}let Nt=!0;function Qe(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function Tr(e,t){return Ar(e,t)}function Ln(e,t){Et(),t.intro=t.intro??!1;const r=t.target,n=$,i=k;try{for(var s=me(r);s&&(s.nodeType!==8||s.data!==Pt);)s=ue(s);if(!s)throw Ne;ie(!0),K(s),Fe();const a=Ar(e,{...t,anchor:s});if(k===null||k.nodeType!==8||k.data!==ot)throw ut(),Ne;return ie(!1),a}catch(a){if(a===Ne)return t.recover===!1&&un(),Et(),wr(r),ie(!1),Tr(e,t);throw a}finally{ie(n),K(i)}}const Te=new Map;function Ar(e,{target:t,anchor:r,props:n={},events:i,context:s,intro:a=!0}){Et();var u=new Set,f=c=>{for(var v=0;v<c.length;v++){var d=c[v];if(!u.has(d)){u.add(d);var _=Mn(d);t.addEventListener(d,Ze,{passive:_});var p=Te.get(d);p===void 0?(document.addEventListener(d,Ze,{passive:_}),Te.set(d,1)):Te.set(d,p+1)}}};f(ct(kr)),Tt.add(f);var o=void 0,l=Jt(()=>{var c=r??t.appendChild(Ee());return Me(()=>{if(s){wt({});var v=ee;v.c=s}i&&(n.$$events=i),$&&ke(c,null),Nt=a,o=e(c,n)||{},Nt=!0,$&&(g.nodes_end=k),s&&xt()}),()=>{var _;for(var v of u){t.removeEventListener(v,Ze);var d=Te.get(v);--d===0?(document.removeEventListener(v,Ze),Te.delete(v)):Te.set(v,d)}Tt.delete(f),Ct.delete(o),c!==r&&((_=c.parentNode)==null||_.removeChild(c))}});return Ct.set(o,l),o}let Ct=new WeakMap;function Pn(e){const t=Ct.get(e);t&&t()}function ge(e,t,r,n=null,i=!1){$&&Fe();var s=e,a=null,u=null,f=null,o=i?je:0;pt(()=>{if(f===(f=!!t()))return;let l=!1;if($){const c=s.data===lt;f===c&&(s=kt(),K(s),ie(!1),l=!0)}f?(a?Ue(a):a=Me(()=>r(s)),u&&mt(u,()=>{u=null})):(u?Ue(u):n&&(u=Me(()=>n(s))),a&&mt(a,()=>{a=null})),l&&ie(!0)},o),$&&(s=k)}function Nr(e,t){return t}function Dn(e,t,r,n){for(var i=[],s=t.length,a=0;a<s;a++)gt(t[a].e,i,!0);var u=s>0&&i.length===0&&r!==null;if(u){var f=r.parentNode;wr(f),f.append(r),n.clear(),fe(e,t[0].prev,t[s-1].next)}nr(i,()=>{for(var o=0;o<s;o++){var l=t[o];u||(n.delete(l.k),fe(e,l.prev,l.next)),de(l.e,!u)}})}function Cr(e,t,r,n,i,s=null){var a=e,u={flags:t,items:new Map,first:null};{var f=e;a=$?K(me(f)):f.appendChild(Ee())}$&&Fe();var o=null,l=!1;pt(()=>{var c=r(),v=ft(c)?c:c==null?[]:ct(c),d=v.length;if(l&&d===0)return;l=d===0;let _=!1;if($){var p=a.data===lt;p!==(d===0)&&(a=kt(),K(a),ie(!1),_=!0)}if($){for(var m=null,h,y=0;y<d;y++){if(k.nodeType===8&&k.data===ot){a=k,_=!0,ie(!1);break}var x=v[y],O=n(x,y);h=Sr(k,u,m,null,x,O,y,i,t),u.items.set(O,h),m=h}d>0&&K(kt())}if(!$){var S=T;Fn(v,u,a,i,t,(S.f&X)!==0,n)}s!==null&&(d===0?o?Ue(o):o=Me(()=>s(a)):o!==null&&mt(o,()=>{o=null})),_&&ie(!0),r()}),$&&(a=k)}function Fn(e,t,r,n,i,s,a){var u=e.length,f=t.items,o=t.first,l=o,c,v=null,d=[],_=[],p,m,h,y;for(y=0;y<u;y+=1){if(p=e[y],m=a(p,y),h=f.get(m),h===void 0){var x=l?l.e.nodes_start:r;v=Sr(x,t,v,v===null?t.first:v.next,p,m,y,n,i),f.set(m,v),d=[],_=[],l=v.next;continue}if(qn(h,p,y),h.e.f&X&&Ue(h.e),h!==l){if(c!==void 0&&c.has(h)){if(d.length<_.length){var O=_[0],S;v=O.prev;var R=d[0],P=d[d.length-1];for(S=0;S<d.length;S+=1)Or(d[S],O,r);for(S=0;S<_.length;S+=1)c.delete(_[S]);fe(t,R.prev,P.next),fe(t,v,R),fe(t,P,O),l=O,v=P,y-=1,d=[],_=[]}else c.delete(h),Or(h,l,r),fe(t,h.prev,h.next),fe(t,h,v===null?t.first:v.next),fe(t,v,h),v=h;continue}for(d=[],_=[];l!==null&&l.k!==m;)(s||!(l.e.f&X))&&(c??(c=new Set)).add(l),_.push(l),l=l.next;if(l===null)continue;h=l}d.push(h),v=h,l=h.next}if(l!==null||c!==void 0){for(var F=c===void 0?[]:ct(c);l!==null;)(s||!(l.e.f&X))&&F.push(l),l=l.next;var Rt=F.length;if(Rt>0){var It=u===0?r:null;Dn(t,F,It,f)}}g.first=t.first&&t.first.e,g.last=v&&v.e}function qn(e,t,r,n){jt(e.v,t),e.i=r}function Sr(e,t,r,n,i,s,a,u,f){var o=(f&I)!==0,l=(f&Ur)===0,c=o?l?_t(i):W(i):i,v=f&qe?W(a):a,d={i:v,v:c,k:s,a:null,e:null,prev:r,next:n};try{return d.e=Me(()=>u(e,c,v),$),d.e.prev=r&&r.e,d.e.next=n&&n.e,r===null?t.first=d:(r.next=d,r.e.next=d.e),n!==null&&(n.prev=d,n.e.prev=d.e),d}finally{}}function Or(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,i=t?t.e.nodes_start:r,s=e.e.nodes_start;s!==n;){var a=ue(s);i.before(s),s=a}}function fe(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function Rr(e,t,r,n,i){var u;$&&Fe();var s=(u=t.$$slots)==null?void 0:u[r],a=!1;s===!0&&(s=t.children,a=!0),s===void 0||s(e,a?()=>n:n)}function et(e,t){lr(()=>{var r=e.getRootNode(),n=r.host?r:r.head??r.ownerDocument.head;if(!n.querySelector("#"+t.hash)){const i=document.createElement("style");i.id=t.hash,i.textContent=t.code,n.appendChild(i)}})}function Hn(e){if($){var t=!1,r=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var n=e.value;te(e,"value",null),e.value=n}if(e.hasAttribute("checked")){var i=e.checked;te(e,"checked",null),e.checked=i}}};e.__on_r=r,yn(r),Er()}}function te(e,t,r,n){var i=e.__attributes??(e.__attributes={});$&&(i[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||i[t]!==(i[t]=r)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[an]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Bn(e).includes(t)?e[t]=r:e.setAttribute(t,r))}var Ir=new Map;function Bn(e){var t=Ir.get(e.nodeName);if(t)return t;Ir.set(e.nodeName,t=[]);for(var r,n=vt(e),i=Element.prototype;i!==n;){r=en(n);for(var s in r)r[s].set&&t.push(s);n=vt(n)}return t}function tt(e,t){var r=e.__className,n=zn(t);$&&e.className===n?e.__className=n:(r!==n||$&&e.className!==n)&&(t==null?e.removeAttribute("class"):e.className=n,e.__className=n)}function zn(e){return e??""}const Vn=()=>performance.now(),ce={tick:e=>requestAnimationFrame(e),now:()=>Vn(),tasks:new Set};function Mr(e){ce.tasks.forEach(t=>{t.c(e)||(ce.tasks.delete(t),t.f())}),ce.tasks.size!==0&&ce.tick(Mr)}function Yn(e){let t;return ce.tasks.size===0&&ce.tick(Mr),{promise:new Promise(r=>{ce.tasks.add(t={c:e,f:r})}),abort(){ce.tasks.delete(t)}}}function rt(e,t){e.dispatchEvent(new CustomEvent(t))}function jn(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Lr(e){const t={},r=e.split(";");for(const n of r){const[i,s]=n.split(":");if(!i||s===void 0)break;const a=jn(i.trim());t[a]=s.trim()}return t}const Un=e=>e;function Wn(e,t,r,n){var i=(e&Xr)!==0,s="both",a,u=t.inert,f,o;function l(){var p=T,m=g;Q(null),V(null);try{return a??(a=r()(t,(n==null?void 0:n())??{},{direction:s}))}finally{Q(p),V(m)}}var c={is_global:i,in(){t.inert=u,rt(t,"introstart"),f=St(t,l(),o,1,()=>{rt(t,"introend"),f==null||f.abort(),f=a=void 0})},out(p){t.inert=!0,rt(t,"outrostart"),o=St(t,l(),f,0,()=>{rt(t,"outroend"),p==null||p()})},stop:()=>{f==null||f.abort(),o==null||o.abort()}},v=g;if((v.transitions??(v.transitions=[])).push(c),Nt){var d=i;if(!d){for(var _=v.parent;_&&_.f&je;)for(;(_=_.parent)&&!(_.f&Ve););d=!_||(_.f&Ht)!==0}d&&Xt(()=>{$t(()=>c.in())})}}function St(e,t,r,n,i){var s=n===1;if(nn(t)){var a,u=!1;return lr(()=>{if(!u){var m=t({direction:s?"in":"out"});a=St(e,m,r,n,i)}}),{abort:()=>{u=!0,a==null||a.abort()},deactivate:()=>a.deactivate(),reset:()=>a.reset(),t:()=>a.t()}}if(r==null||r.deactivate(),!(t!=null&&t.duration))return i(),{abort:Ce,deactivate:Ce,reset:Ce,t:()=>n};const{delay:f=0,css:o,tick:l,easing:c=Un}=t;var v=[];if(s&&r===void 0&&(l&&l(0,1),o)){var d=Lr(o(0,1));v.push(d,d)}var _=()=>1-n,p=e.animate(v,{duration:f});return p.onfinish=()=>{var m=(r==null?void 0:r.t())??1-n;r==null||r.abort();var h=n-m,y=t.duration*Math.abs(h),x=[];if(y>0){if(o)for(var O=Math.ceil(y/16.666666666666668),S=0;S<=O;S+=1){var R=m+h*c(S/O),P=o(R,1-R);x.push(Lr(P))}_=()=>{var F=p.currentTime;return m+h*c(F/y)},l&&Yn(()=>{if(p.playState!=="running")return!1;var F=_();return l(F,1-F),!0})}p=e.animate(x,{duration:y,fill:"forwards"}),p.onfinish=()=>{_=()=>n,l==null||l(n,1-n),i()}},{abort:()=>{p&&(p.cancel(),p.effect=null,p.onfinish=Ce)},deactivate:()=>{i=Ce},reset:()=>{n===0&&(l==null||l(1,0))},t:()=>_()}}function Kn(e,t,r=t){Sn(e,"input",()=>{var n=Pr(e)?Dr(e.value):e.value;r(n),n!==(n=t())&&(e.value=n??"")}),Zt(()=>{var n=t();if($&&e.defaultValue!==e.value){r(e.value);return}Pr(e)&&n===Dr(e.value)||e.type==="date"&&!n&&!e.value||n!==e.value&&(e.value=n??"")})}function Pr(e){var t=e.type;return t==="number"||t==="range"}function Dr(e){return e===""?null:+e}let nt=!1;function Gn(e){var t=nt;try{return nt=!1,[e(),nt]}finally{nt=t}}function Jn(e){for(var t=g,r=g;t!==null&&!(t.f&(J|Se));)t=t.parent;try{return V(t),e()}finally{V(r)}}function C(e,t,r,n){var S;var i=(r&Wr)!==0,s=!Yt,a=(r&Gr)!==0,u=(r&Jr)!==0,f=!1,o;a?[o,f]=Gn(()=>e[t]):o=e[t];var l=(S=ve(e,t))==null?void 0:S.set,c=n,v=!0,d=!1,_=()=>(d=!0,v&&(v=!1,u?c=$t(n):c=n),c);o===void 0&&n!==void 0&&(l&&s&&fn(),o=_(),l&&l(o));var p;if(p=()=>{var R=e[t];return R===void 0?_():(v=!0,d=!1,R)},!(r&Kr))return p;if(l){var m=e.$$legacy;return function(R,P){return arguments.length>0?((!P||m||f)&&l(P?p():R),R):p()}}var h=!1,y=!1,x=_t(o),O=Jn(()=>hn(()=>{var R=p(),P=E(x);return h?(h=!1,y=!0,P):(y=!1,x.v=R)}));return i||(O.equals=Vt),function(R,P){if(arguments.length>0){const F=P?E(O):a?pe(R):R;return O.equals(F)||(h=!0,Z(x,F),d&&c!==void 0&&(c=F),$t(()=>E(O))),R}return E(O)}}function Xn(e){return new Zn(e)}class Zn{constructor(t){Mt(this,se);Mt(this,j);var s;var r=new Map,n=(a,u)=>{var f=_t(u);return r.set(a,f),f};const i=new Proxy({...t.props||{},$$events:{}},{get(a,u){return E(r.get(u)??n(u,Reflect.get(a,u)))},has(a,u){return E(r.get(u)??n(u,Reflect.get(a,u))),Reflect.has(a,u)},set(a,u,f){return Z(r.get(u)??n(u,f),f),Reflect.set(a,u,f)}});Lt(this,j,(t.hydrate?Ln:Tr)(t.component,{target:t.target,anchor:t.anchor,props:i,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((s=t==null?void 0:t.props)!=null&&s.$$host)||t.sync===!1)&&pr(),Lt(this,se,i.$$events);for(const a of Object.keys(q(this,j)))a==="$set"||a==="$destroy"||a==="$on"||Be(this,a,{get(){return q(this,j)[a]},set(u){q(this,j)[a]=u},enumerable:!0});q(this,j).$set=a=>{Object.assign(i,a)},q(this,j).$destroy=()=>{Pn(q(this,j))}}$set(t){q(this,j).$set(t)}$on(t,r){q(this,se)[t]=q(this,se)[t]||[];const n=(...i)=>r.call(this,...i);return q(this,se)[t].push(n),()=>{q(this,se)[t]=q(this,se)[t].filter(i=>i!==n)}}$destroy(){q(this,j).$destroy()}}se=new WeakMap,j=new WeakMap;let Fr;typeof HTMLElement=="function"&&(Fr=class extends HTMLElement{constructor(t,r,n){super();G(this,"$$ctor");G(this,"$$s");G(this,"$$c");G(this,"$$cn",!1);G(this,"$$d",{});G(this,"$$r",!1);G(this,"$$p_d",{});G(this,"$$l",{});G(this,"$$l_u",new Map);G(this,"$$me");this.$$ctor=t,this.$$s=r,n&&this.attachShadow({mode:"open"})}addEventListener(t,r,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(r),this.$$c){const i=this.$$c.$on(t,r);this.$$l_u.set(r,i)}super.addEventListener(t,r,n)}removeEventListener(t,r,n){if(super.removeEventListener(t,r,n),this.$$c){const i=this.$$l_u.get(r);i&&(i(),this.$$l_u.delete(r))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(i){return s=>{const a=document.createElement("slot");i!=="default"&&(a.name=i),L(s,a)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const r={},n=Qn(this);for(const i of this.$$s)i in n&&(i==="default"&&!this.$$d.children?(this.$$d.children=t(i),r.default=!0):r[i]=t(i));for(const i of this.attributes){const s=this.$$g_p(i.name);s in this.$$d||(this.$$d[s]=it(s,i.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=Xn({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:r,$$host:this}}),this.$$me=Jt(()=>{Zt(()=>{var i;this.$$r=!0;for(const s of He(this.$$c)){if(!((i=this.$$p_d[s])!=null&&i.reflect))continue;this.$$d[s]=this.$$c[s];const a=it(s,this.$$d[s],this.$$p_d,"toAttribute");a==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,a)}this.$$r=!1})});for(const i in this.$$l)for(const s of this.$$l[i]){const a=this.$$c.$on(i,s);this.$$l_u.set(s,a)}this.$$l={}}}attributeChangedCallback(t,r,n){var i;this.$$r||(t=this.$$g_p(t),this.$$d[t]=it(t,n,this.$$p_d,"toProp"),(i=this.$$c)==null||i.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(t){return He(this.$$p_d).find(r=>this.$$p_d[r].attribute===t||!this.$$p_d[r].attribute&&r.toLowerCase()===t)||t}});function it(e,t,r,n){var s;const i=(s=r[e])==null?void 0:s.type;if(t=i==="Boolean"&&typeof t!="boolean"?t!=null:t,!n||!r[e])return t;if(n==="toAttribute")switch(i){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(i){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function Qn(e){const t={};return e.childNodes.forEach(r=>{t[r.slot||"default"]=!0}),t}function st(e,t,r,n,i,s){let a=class extends Fr{constructor(){super(e,r,i),this.$$p_d=t}static get observedAttributes(){return He(t).map(u=>(t[u].attribute||u).toLowerCase())}};return He(t).forEach(u=>{Be(a.prototype,u,{get(){return this.$$c&&u in this.$$c?this.$$c[u]:this.$$d[u]},set(f){var c;f=it(u,f,t),this.$$d[u]=f;var o=this.$$c;if(o){var l=(c=ve(o,u))==null?void 0:c.get;l?o[u]=f:o.$set({[u]:f})}}})}),n.forEach(u=>{Be(a.prototype,u,{get(){var f;return(f=this.$$c)==null?void 0:f[u]}})}),e.element=a,a}var ei=D('<button type="button"><!></button>');const ti={hash:"svelte-1bto172",code:".button.svelte-1bto172 {display:inline-block;cursor:pointer;border:0;margin-left:14px;border-radius:3em;font-weight:700;line-height:1;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.button--primary.svelte-1bto172 {background-color:#1ea7fd;color:white;}.button--secondary.svelte-1bto172 {box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;background-color:transparent;color:#333;}.button--small.svelte-1bto172 {padding:10px 16px;font-size:12px;}.button--medium.svelte-1bto172 {padding:11px 20px;font-size:14px;}.button--large.svelte-1bto172 {padding:12px 24px;font-size:16px;}"};function qr(e,t){et(e,ti);const r=C(t,"type",3,"primary"),n=C(t,"size",3,"medium");C(t,"label",3,"Button");const i=C(t,"onClick",3,void 0);var s=ei();s.__click=function(...u){var f;(f=i())==null||f.apply(this,u)};var a=N(s);Rr(a,t,"default",{}),A(s),re(()=>tt(s,`${"button button--"+n()+" button--"+r()} svelte-1bto172`)),L(e,s)}At(["click"]),customElements.define("mapp-button",st(qr,{type:{},size:{},label:{},onClick:{}},["default"],[],!0));var ri=D('<div class="input_label svelte-1hyy719"> </div>'),ni=D('<span class="input_icon svelte-1hyy719"><img width="16px" alt="in"></span>'),ii=(e,t)=>{t(e)},si=D('<div class="input_frame svelte-1hyy719"><!> <div class="input_box svelte-1hyy719"><!> <input class="input_field svelte-1hyy719"></div></div>');const ai={hash:"svelte-1hyy719",code:`.input_frame.svelte-1hyy719 {padding-right:24px;margin-bottom:14px;}.input_label.svelte-1hyy719 {margin-bottom:6px;}.input_box.svelte-1hyy719 {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;
    /* padding-right: 14px; */}.input_icon.svelte-1hyy719 {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1hyy719 {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;color:#66799e;background-color:transparent;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;width:98%;}.input_field.svelte-1hyy719:focus {outline:none;}`};function Hr(e,t){wt(t,!0),et(e,ai);let r=C(t,"label",3,""),n=C(t,"icon",3,""),i=C(t,"type",3,"text"),s=C(t,"placeholder",3,""),a=C(t,"input",15,""),u=C(t,"style",3,"");const f=_=>{_&&_.target&&_.target.value&&t.$$host&&t.$$host.dispatchEvent(new CustomEvent("update",{detail:{input:_.target.value}}))};var o=si(),l=N(o);ge(l,r,_=>{var p=ri(),m=N(p,!0);A(p),re(()=>Qe(m,r())),L(_,p)});var c=Y(l,2),v=N(c);ge(v,n,_=>{var p=ni(),m=N(p);A(p),re(()=>te(m,"src",n())),L(_,p)});var d=Y(v,2);Hn(d),d.__input=[ii,f],A(c),A(o),re(()=>{te(o,"style",u()),te(d,"type",i()),te(d,"placeholder",s())}),Kn(d,a),L(e,o),xt()}At(["input"]),customElements.define("apint-input",st(Hr,{label:{},icon:{},type:{},placeholder:{},input:{},style:{}},[],[],!0));var li=D('<span class="user_button svelte-gns4bd"><img class="msg_icon svelte-gns4bd" alt="alerts" src="bell.svg"> <span class="msg_new svelte-gns4bd"></span> <img class="user_icon svelte-gns4bd" alt="profile"> <span class="user_name svelte-gns4bd"> </span></span>'),oi=D("<span>logged out</span>"),ui=D('<div class="header svelte-gns4bd"><div style="width: 364px;"><!> <span></span></div> <div><!></div></div>');const fi={hash:"svelte-gns4bd",code:".header.svelte-gns4bd {display:flex;justify-content:space-between;align-items:center;padding:26px 20px;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.msg_icon.svelte-gns4bd {width:20px;margin-right:22px;}.msg_new.svelte-gns4bd {background-color:red;height:7px;width:7px;border-radius:50% !important;position:relative;top:4px;left:-22px;}.user_button.svelte-gns4bd {display:flex;position:relative;top:-6px;}.user_button.svelte-gns4bd:hover {cursor:pointer;}.user_name.svelte-gns4bd {padding-top:12px;padding-left:8px;}.user_icon.svelte-gns4bd {border-radius:50% !important;width:40px;}"};function Ot(e,t){et(e,fi),C(t,"title",3,"Apint.org");const r=C(t,"supportuser",3,!1),n=C(t,"username",3,""),i=C(t,"userpic",3,"");let s="";var a=ui(),u=N(a),f=N(u);Hr(f,{icon:"search.svg",placeholder:"Search",input:s});var o=Y(f,2);o.textContent=s,A(u);var l=Y(u,2),c=N(l);ge(c,r,v=>{var d=li(),_=Y(N(d),4),p=Y(_,2),m=N(p,!0);A(p),A(d),re(()=>{te(_,"src",i()),Qe(m,n())}),L(v,d)},v=>{var d=Rn(),_=$r(d);ge(_,r,p=>{var m=oi();L(p,m)},null,!0),L(v,d)}),A(l),A(a),L(e,a)}customElements.define("mapp-headerlite",st(Ot,{title:{},supportuser:{},username:{},userpic:{}},[],[],!0));function ci(e){const t=e-1;return t*t*t+1}function vi(e,{delay:t=0,duration:r=400,easing:n=ci,axis:i="y"}={}){const s=getComputedStyle(e),a=+s.opacity,u=i==="y"?"height":"width",f=parseFloat(s[u]),o=i==="y"?["top","bottom"]:["left","right"],l=o.map(h=>`${h[0].toUpperCase()}${h.slice(1)}`),c=parseFloat(s[`padding${l[0]}`]),v=parseFloat(s[`padding${l[1]}`]),d=parseFloat(s[`margin${l[0]}`]),_=parseFloat(s[`margin${l[1]}`]),p=parseFloat(s[`border${l[0]}Width`]),m=parseFloat(s[`border${l[1]}Width`]);return{delay:t,duration:r,easing:n,css:h=>`overflow: hidden;opacity: ${Math.min(h*20,1)*a};${u}: ${h*f}px;padding-${o[0]}: ${h*c}px;padding-${o[1]}: ${h*v}px;margin-${o[0]}: ${h*d}px;margin-${o[1]}: ${h*_}px;border-${o[0]}-width: ${h*p}px;border-${o[1]}-width: ${h*m}px;`}}function di(e){return e}var _i=(e,t,r)=>t(E(r).title),hi=D('<img alt="option" width="18px">'),pi=D('<svg width="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" class="svg-inline--fa fa-chart-pie fa-w-17 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path></svg>'),mi=D('<span><svg class="icon icon-sm" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>'),gi=(e,t,r)=>t(E(r).title),yi=D('<a><span><span class="menu_item_icon svelte-v1mgvt"></span> <span class="menu_item_text"> </span></span></a>'),bi=D('<div class="menu_item_frame svelte-v1mgvt"></div>'),$i=D('<a><span><span class="menu_item_icon svelte-v1mgvt"><!></span> <span class="menu_item_text"> </span> <!></span></a> <!>',1),wi=D('<div class="outer_frame svelte-v1mgvt"><div class="left_menu svelte-v1mgvt"><div class="menu_frame svelte-v1mgvt"></div></div> <div class="right_panel svelte-v1mgvt"><!> <div class="right_panel_content svelte-v1mgvt"><!></div></div></div>');const xi={hash:"svelte-v1mgvt",code:`a.svelte-v1mgvt:link {text-decoration:none;}a.svelte-v1mgvt:visited {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:hover {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:active {text-decoration:none;}.outer_frame.svelte-v1mgvt {position:fixed;left:0px;top:0px;display:flex;height:100vh;width:100vw;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.left_menu.svelte-v1mgvt {display:flex;flex-flow:row nowrap;width:260px !important;min-width:260px;height:100%;background-color:#262b40 !important;color:#eaedf2;}.menu_frame.svelte-v1mgvt {margin:20px 30px 20px 30px;width:100%;}.menu_item.svelte-v1mgvt {display:block;width:100%;text-align:left;padding:10px 0px;color:#eaedf2;border-radius:.5rem;margin-bottom:8px;border:.0625rem solid transparent;}.menu_item.svelte-v1mgvt:hover {background-color:#2e3650;}.menu_item_active.svelte-v1mgvt {background-color:#2e3650;border:.0625rem solid #4c5680;}.menu_item_icon.svelte-v1mgvt {display:inline-block;margin-left:12px;margin-right:.5rem;color:#fff;position:relative;top:3px;width:18px;}.menu_item_expand.svelte-v1mgvt {float:right;width:22px;}.expanded.svelte-v1mgvt {position:relative;
    /* left: -4px; */
    /* top: -2px; */transform:rotate(90deg) translateX(-2px) translateY(4px);transition:all 0.2s ease;}.menu_item_frame.svelte-v1mgvt {width:100%;}.right_panel.svelte-v1mgvt {color:#4a5073;background-color:#f5f8fb;flex:auto;height:100%;overflow-y:auto;}.right_panel_content.svelte-v1mgvt {padding:0px 20px;}`};function Br(e,t){wt(t,!0),et(e,xi),C(t,"title",3,"Apint.org"),C(t,"icon",3,"");let r=C(t,"supportuser",3,!0),n=C(t,"username",3,""),i=C(t,"userpic",3,""),s=C(t,"activeitem",3,""),a=C(t,"menuconfig",7,void 0);typeof a()=="string"&&a(JSON.parse(a()));let u=pe({}),f=m=>{u[m]?u[m]=!u[m]:u[m]=!0};var o=wi(),l=N(o),c=N(l);Cr(c,21,()=>a().items,Nr,(m,h)=>{var y=$i(),x=$r(y);x.__click=[_i,f,h];var O=N(x),S=N(O),R=N(S);ge(R,()=>E(h).icon,ye=>{var U=hi();re(()=>te(U,"src",E(h).icon)),L(ye,U)},ye=>{var U=pi();L(ye,U)}),A(S);var P=Y(S,2),F=N(P,!0);A(P);var Rt=Y(P,2);ge(Rt,()=>E(h).subitems,ye=>{var U=mi();re(()=>tt(U,`${(u[E(h).title]?"menu_item_expand expanded":"menu_item_expand")??""} svelte-v1mgvt`)),L(ye,U)}),A(O),A(x);var It=Y(x,2);ge(It,()=>u[E(h).title]&&E(h).subitems,ye=>{var U=bi();Cr(U,21,()=>E(h).subitems,Nr,(Ei,at)=>{var Ae=yi();Ae.__click=[gi,f,at];var zr=N(Ae),Vr=Y(N(zr),2),ki=N(Vr,!0);A(Vr),A(zr),A(Ae),re(()=>{te(Ae,"href",E(at).url),tt(Ae,`${(E(at).title==s()?"menu_item menu_item_active":"menu_item")??""} svelte-v1mgvt`),Qe(ki,E(at).title)}),L(Ei,Ae)}),A(U),Wn(3,U,()=>vi,()=>({duration:300,easing:di})),L(ye,U)}),re(()=>{te(x,"href",E(h).url),tt(x,`${(E(h).title==s()?"menu_item menu_item_active":"menu_item")??""} svelte-v1mgvt`),Qe(F,E(h).title)}),L(m,y)}),A(c),A(l);var v=Y(l,2),d=N(v);Ot(d,{get supportuser(){return r()},get username(){return n()},get userpic(){return i()}});var _=Y(d,2),p=N(_);Rr(p,t,"default",{}),A(_),A(v),A(o),L(e,o),xt()}At(["click"]),customElements.define("mapp-menu",st(Br,{title:{},icon:{},supportuser:{},username:{},userpic:{},activeitem:{},menuconfig:{}},["default"],[],!0)),b.MappButton=qr,b.MappHeaderLite=Ot,b.MappMenu=Br,Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
