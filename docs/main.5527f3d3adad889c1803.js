(()=>{var e={701:()=>{document.querySelector(".users-window")},12:()=>{var e,t=[{profileName:"Amet",timeAgo:"1h ago",title:"How do I stop obsessing over grades?",detail:"I just got a B+ on an essay and I’m absolutely losing my mind. I’ve never gotten anything lower than an A- and I feel actually sick over this. What can I do?"},{profileName:"Sodoo",timeAgo:"3h ago",title:"How do I stop obsessing over grades?",detail:"I just got a B+ on an essay and I’m absolutely losing my mind. I’ve never gotten anything lower than an A- and I feel actually sick over this. What can I do?"},{profileName:"Hulan",timeAgo:"5h ago",title:"How do I stop obsessing over grades?",detail:"I just got a B+ on an essay and I’m absolutely losing my mind. I’ve never gotten anything lower than an A- and I feel actually sick over this. What can I do?"},{profileName:"Dukk",timeAgo:"10h ago",title:"How do I stop obsessing over grades?",detail:"I just got a B+ on an essay and I’m absolutely losing my mind. I’ve never gotten anything lower than an A- and I feel actually sick over this. What can I do?"}],a={posts:t},n=JSON.stringify(a,null,2);console.log(n),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".post__reactions__list").forEach((function(e){var t=e.querySelector(".reaction-count"),a=e.textContent.trim().split(" ")[1].toLowerCase(),n=0,s="user_reaction_".concat(a),o=localStorage.getItem(s);o&&(n=parseInt(localStorage.getItem(s)),t.textContent=n,e.classList.add("clicked")),e.addEventListener("click",(function(){o?(n--,t.textContent=n,localStorage.removeItem(s),e.classList.remove("clicked"),o=null):(n++,t.textContent=n,localStorage.setItem(s,n),e.classList.add("clicked"),o=n)}))}))})),e=document.getElementById("posts-container"),t.forEach((function(t){var a=function(e){var t=document.createElement("article");return t.classList.add("post"),t.innerHTML='\n      <div class="post__profile" id="posts-container">\n          <img src="/assets/images/profile.png" alt="profile" class="post__profile__img">\n          <p class="post__profile__name">'.concat(e.profileName,'</p>\n          <p class="post__profile__time">').concat(e.timeAgo,'</p>\n      </div>\n      <hr>\n      <h3 class="post__title">').concat(e.title,'</h3>\n      <p class="post__detail">').concat(e.detail,'</p>\n      <div class="post__reactions">\n        <p class="post__reactions__list">\n            <i class="fa-regular fa-face-smile-beam post__reactions__icon"></i>\n            <span class="reaction-count">0</span> <button class="reaction-button ">Agree</button>\n        </p>\n        <p class="post__reactions__list">\n            <i class="fa-regular fa-face-frown post__reactions__icon"></i>\n            <span class="reaction-count">0</span> <button class="reaction-button ">Disagree</button>\n        </p>\n        <p class="post__reactions__list">\n            <i class="fa-regular fa-comment post__reactions__icon"></i>\n            <span class="reaction-count">0</span> Comment\n        </p>\n        <p class="post__reactions__list">\n            <i class="fa-regular fa-share-from-square post__reactions__icon"></i>\n            <span class="reaction-count">0</span> Share\n        </p>\n      </div>\n  '),t}(t);e.appendChild(a)}))},263:()=>{var e=document.querySelector(".toggle"),t=document.querySelector(".slide"),a=document.querySelector(".slide__title"),n=document.querySelector(".slide__list"),s=document.querySelectorAll(".slide__list__item"),o=!1;e.addEventListener("click",(function(){o?(e.classList.remove("close"),t.classList.remove("show"),a.classList.remove("show"),n.classList.remove("show"),s.forEach((function(e){return e.classList.remove("show")})),o=!1):(e.classList.add("close"),t.classList.add("show"),a.classList.add("show"),n.classList.add("show"),s.forEach((function(e){return e.classList.add("show")})),o=!0)}))},90:e=>{!function(t,a){var n=function(e,t,a){"use strict";var n,s;if(function(){var t,a={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in s=e.lazySizesConfig||e.lazysizesConfig||{},a)t in s||(s[t]=a[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:s,noSupport:!0};var o,i,r,l,c,d,u,f,m,p,g,h,v,_,y,z,C,b,A,w,E,I,L,S,N,x,M,k,W,B,q,H,T,D,F,R,O,P,$,j,U,J,G,K,Q=t.documentElement,V=e.HTMLPictureElement,X="addEventListener",Y="getAttribute",Z=e[X].bind(e),ee=e.setTimeout,te=e.requestAnimationFrame||ee,ae=e.requestIdleCallback,ne=/^picture$/i,se=["load","error","lazyincluded","_lazyloaded"],oe={},ie=Array.prototype.forEach,re=function(e,t){return oe[t]||(oe[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),oe[t].test(e[Y]("class")||"")&&oe[t]},le=function(e,t){re(e,t)||e.setAttribute("class",(e[Y]("class")||"").trim()+" "+t)},ce=function(e,t){var a;(a=re(e,t))&&e.setAttribute("class",(e[Y]("class")||"").replace(a," "))},de=function(e,t,a){var n=a?X:"removeEventListener";a&&de(e,t),se.forEach((function(a){e[n](a,t)}))},ue=function(e,a,s,o,i){var r=t.createEvent("Event");return s||(s={}),s.instance=n,r.initEvent(a,!o,!i),r.detail=s,e.dispatchEvent(r),r},fe=function(t,a){var n;!V&&(n=e.picturefill||s.pf)?(a&&a.src&&!t[Y]("srcset")&&t.setAttribute("srcset",a.src),n({reevaluate:!0,elements:[t]})):a&&a.src&&(t.src=a.src)},me=function(e,t){return(getComputedStyle(e,null)||{})[t]},pe=function(e,t,a){for(a=a||e.offsetWidth;a<s.minSize&&t&&!e._lazysizesWidth;)a=t.offsetWidth,t=t.parentNode;return a},ge=(U=[],J=j=[],K=function(e,a){P&&!a?e.apply(this,arguments):(J.push(e),$||($=!0,(t.hidden?ee:te)(G)))},K._lsFlush=G=function(){var e=J;for(J=j.length?U:j,P=!0,$=!1;e.length;)e.shift()();P=!1},K),he=function(e,t){return t?function(){ge(e)}:function(){var t=this,a=arguments;ge((function(){e.apply(t,a)}))}},ve=function(e){var t,n,s=function(){t=null,e()},o=function(){var e=a.now()-n;e<99?ee(o,99-e):(ae||s)(s)};return function(){n=a.now(),t||(t=ee(o,99))}},_e=(C=/^img$/i,b=/^iframe$/i,A="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),0,w=0,E=0,I=-1,L=function(e){E--,(!e||E<0||!e.target)&&(E=0)},S=function(e){return null==z&&(z="hidden"==me(t.body,"visibility")),z||!("hidden"==me(e.parentNode,"visibility")&&"hidden"==me(e,"visibility"))},N=function(e,a){var n,s=e,o=S(e);for(h-=a,y+=a,v-=a,_+=a;o&&(s=s.offsetParent)&&s!=t.body&&s!=Q;)(o=(me(s,"opacity")||1)>0)&&"visible"!=me(s,"overflow")&&(n=s.getBoundingClientRect(),o=_>n.left&&v<n.right&&y>n.top-1&&h<n.bottom+1);return o},M=function(e){var t,n=0,o=s.throttleDelay,i=s.ricTimeout,r=function(){t=!1,n=a.now(),e()},l=ae&&i>49?function(){ae(r,{timeout:i}),i!==s.ricTimeout&&(i=s.ricTimeout)}:he((function(){ee(r)}),!0);return function(e){var s;(e=!0===e)&&(i=33),t||(t=!0,(s=o-(a.now()-n))<0&&(s=0),e||s<9?l():ee(l,s))}}(x=function(){var e,a,o,i,r,l,u,m,C,b,L,x,M=n.elements;if((f=s.loadMode)&&E<8&&(e=M.length)){for(a=0,I++;a<e;a++)if(M[a]&&!M[a]._lazyRace)if(!A||n.prematureUnveil&&n.prematureUnveil(M[a]))D(M[a]);else if((m=M[a][Y]("data-expand"))&&(l=1*m)||(l=w),b||(b=!s.expand||s.expand<1?Q.clientHeight>500&&Q.clientWidth>500?500:370:s.expand,n._defEx=b,L=b*s.expFactor,x=s.hFac,z=null,w<L&&E<1&&I>2&&f>2&&!t.hidden?(w=L,I=0):w=f>1&&I>1&&E<6?b:0),C!==l&&(p=innerWidth+l*x,g=innerHeight+l,u=-1*l,C=l),o=M[a].getBoundingClientRect(),(y=o.bottom)>=u&&(h=o.top)<=g&&(_=o.right)>=u*x&&(v=o.left)<=p&&(y||_||v||h)&&(s.loadHidden||S(M[a]))&&(d&&E<3&&!m&&(f<3||I<4)||N(M[a],l))){if(D(M[a]),r=!0,E>9)break}else!r&&d&&!i&&E<4&&I<4&&f>2&&(c[0]||s.preloadAfterLoad)&&(c[0]||!m&&(y||_||v||h||"auto"!=M[a][Y](s.sizesAttr)))&&(i=c[0]||M[a]);i&&!r&&D(i)}}),W=he(k=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(L(e),le(t,s.loadedClass),ce(t,s.loadingClass),de(t,B),ue(t,"lazyloaded"))}),B=function(e){W({target:e.target})},q=function(e,t){var a=e.getAttribute("data-load-mode")||s.iframeLoadMode;0==a?e.contentWindow.location.replace(t):1==a&&(e.src=t)},H=function(e){var t,a=e[Y](s.srcsetAttr);(t=s.customMedia[e[Y]("data-media")||e[Y]("media")])&&e.setAttribute("media",t),a&&e.setAttribute("srcset",a)},T=he((function(e,t,a,n,o){var i,r,l,c,d,f;(d=ue(e,"lazybeforeunveil",t)).defaultPrevented||(n&&(a?le(e,s.autosizesClass):e.setAttribute("sizes",n)),r=e[Y](s.srcsetAttr),i=e[Y](s.srcAttr),o&&(c=(l=e.parentNode)&&ne.test(l.nodeName||"")),f=t.firesLoad||"src"in e&&(r||i||c),d={target:e},le(e,s.loadingClass),f&&(clearTimeout(u),u=ee(L,2500),de(e,B,!0)),c&&ie.call(l.getElementsByTagName("source"),H),r?e.setAttribute("srcset",r):i&&!c&&(b.test(e.nodeName)?q(e,i):e.src=i),o&&(r||c)&&fe(e,{src:i})),e._lazyRace&&delete e._lazyRace,ce(e,s.lazyClass),ge((function(){var t=e.complete&&e.naturalWidth>1;f&&!t||(t&&le(e,s.fastLoadedClass),k(d),e._lazyCache=!0,ee((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&E--}),!0)})),D=function(e){if(!e._lazyRace){var t,a=C.test(e.nodeName),n=a&&(e[Y](s.sizesAttr)||e[Y]("sizes")),o="auto"==n;(!o&&d||!a||!e[Y]("src")&&!e.srcset||e.complete||re(e,s.errorClass)||!re(e,s.lazyClass))&&(t=ue(e,"lazyunveilread").detail,o&&ye.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,E++,T(e,t,o,n,a))}},F=ve((function(){s.loadMode=3,M()})),O=function(){d||(a.now()-m<999?ee(O,999):(d=!0,s.loadMode=3,M(),Z("scroll",R,!0)))},{_:function(){m=a.now(),n.elements=t.getElementsByClassName(s.lazyClass),c=t.getElementsByClassName(s.lazyClass+" "+s.preloadClass),Z("scroll",M,!0),Z("resize",M,!0),Z("pageshow",(function(e){if(e.persisted){var a=t.querySelectorAll("."+s.loadingClass);a.length&&a.forEach&&te((function(){a.forEach((function(e){e.complete&&D(e)}))}))}})),e.MutationObserver?new MutationObserver(M).observe(Q,{childList:!0,subtree:!0,attributes:!0}):(Q[X]("DOMNodeInserted",M,!0),Q[X]("DOMAttrModified",M,!0),setInterval(M,999)),Z("hashchange",M,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t[X](e,M,!0)})),/d$|^c/.test(t.readyState)?O():(Z("load",O),t[X]("DOMContentLoaded",M),ee(O,2e4)),n.elements.length?(x(),ge._lsFlush()):M()},checkElems:M,unveil:D,_aLSL:R=function(){3==s.loadMode&&(s.loadMode=2),F()}}),ye=(i=he((function(e,t,a,n){var s,o,i;if(e._lazysizesWidth=n,n+="px",e.setAttribute("sizes",n),ne.test(t.nodeName||""))for(o=0,i=(s=t.getElementsByTagName("source")).length;o<i;o++)s[o].setAttribute("sizes",n);a.detail.dataAttr||fe(e,a.detail)})),r=function(e,t,a){var n,s=e.parentNode;s&&(a=pe(e,s,a),(n=ue(e,"lazybeforesizes",{width:a,dataAttr:!!t})).defaultPrevented||(a=n.detail.width)&&a!==e._lazysizesWidth&&i(e,s,n,a))},{_:function(){o=t.getElementsByClassName(s.autosizesClass),Z("resize",l)},checkElems:l=ve((function(){var e,t=o.length;if(t)for(e=0;e<t;e++)r(o[e])})),updateElem:r}),ze=function(){!ze.i&&t.getElementsByClassName&&(ze.i=!0,ye._(),_e._())};return ee((function(){s.init&&ze()})),n={cfg:s,autoSizer:ye,loader:_e,init:ze,uP:fe,aC:le,rC:ce,hC:re,fire:ue,gW:pe,rAF:ge}}(t,t.document,Date);t.lazySizes=n,e.exports&&(e.exports=n)}("undefined"!=typeof window?window:{})}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,a),o.exports}(()=>{"use strict";a(90),a(701),a(263),a(12)})()})();