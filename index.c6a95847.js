const e=document.querySelectorAll(".js-anim-items"),t=function(t){for(let t=0;t<e.length;t++){let n=e[t],o=n.offsetHeight,l=function(e){let t=e.getBoundingClientRect(),n=window.scrollX||document.documentElement.scrollLeft,o=window.scrollY||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+n}}(n).top,i=window.innerHeight-o/4;o>window.innerHeight&&(i=window.innerHeight-window.innerHeight/4);let r=window.scrollY>l-i,c=window.scrollX<l+o,d=n.classList.contains("js-anim-no-hide");r&&c?n.classList.add("active"):d||n.classList.remove("active")}},n={menuCloseBtnRef:document.querySelector("[data-close-menu]"),menuOpenBtnRef:document.querySelector("[data-open-menu]"),headerOverlay:document.querySelector(".header__overlay"),mobileMenuRef:document.querySelector(".top-bar__menu"),body:document.querySelector(".page__body")};function o(){n.body.style.paddingRight="0px",n.body.classList.remove("lock"),l()}function l(){let e="true"===n.menuOpenBtnRef.getAttribute("aria-expanded"),t="true"===n.menuCloseBtnRef.getAttribute("aria-expanded");n.headerOverlay.classList.toggle("open-menu"),n.menuOpenBtnRef.setAttribute("aria-expanded",!e),n.menuCloseBtnRef.setAttribute("aria-expanded",!t),n.mobileMenuRef.classList.toggle("open-menu")}let i=!0;const r={lockPadding:document.querySelectorAll(".lock-padding"),body:document.querySelector(".page__body")},c=function(e){if(e&&i){let t=document.querySelector(".popup__open");t?d(t,!1):function(){let e=window.innerWidth-document.querySelector(".page__body").offsetWidth+"px";r.lockPadding.length>0&&r.lockPadding.forEach(t=>{t.style.paddingRight=e}),r.body.style.paddingRight=e,r.body.classList.add("lock"),i=!1,setTimeout(function(){i=!0},800)}(),e.classList.add("popup__open"),e.addEventListener("click",function(e){e.target.closest(".popup__content")||d(e.target.closest(".popup"))}),document.addEventListener("keydown",u)}},d=function(e,t=!0){if(i){e.classList.remove("popup__open"),window.removeEventListener("keydown",u);let n=e.querySelector(".popup__image");n&&(n.src="",n.alt=""),t&&(setTimeout(function(){r.lockPadding.forEach(e=>{e.style.paddingRight="0px"}),r.body.style.paddingRight="0px",r.body.classList.remove("lock")},800),i=!1,setTimeout(function(){i=!0},800))}};function u(e){"Escape"===e.code&&d(document.querySelector(".popup__open"))}let a=window.innerWidth;const s=function(e){a=window.innerWidth,e.style.transform="translateX(0px)"},p=function(e,t){e.classList.add("active"),[...t].filter(t=>t!==e).forEach(e=>e.classList.remove("active"))},m=function(e,t,n){let o;let l=e.clientWidth-a,i=(t.clientWidth+16)*n;o=a>=768&&a<1280?i<=l?i:l+58:i<=l?i:l+48,e.style.transform=`translateX(-${o}px)`},g={menuCloseBtnRef:document.querySelector("[data-close-menu]"),menuOpenBtnRef:document.querySelector("[data-open-menu]"),menuLinks:document.querySelectorAll(".nav__link")},y={galleryDots:document.querySelectorAll(".gallery__dot"),galleryDot:document.querySelector(".gallery__dot"),galleryList:document.querySelector(".gallery__list"),galleryItems:document.querySelectorAll(".gallery__item"),galleryItem:document.querySelector(".gallery__item")},f={popupLinks:document.querySelectorAll(".popup-link"),popupImages:document.querySelectorAll(".popup-link .gallery__image"),popupImg:document.querySelector(".popup__image"),popupCloseIcon:document.querySelectorAll(".close-popup")},h={form:document.querySelector(".form"),animateItems:document.querySelectorAll(".js-anim-items"),footerScrollTop:document.querySelector("[data-footer-button]")};g.menuOpenBtnRef.addEventListener("click",function(){(function(){let e=window.innerWidth-document.querySelector(".page__body").offsetWidth+"px";n.body.style.paddingRight=e,n.body.classList.add("lock")})(),l()}),g.menuCloseBtnRef.addEventListener("click",o),h.form.addEventListener("submit",function(e){e.preventDefault(),e.target.reset()}),h.footerScrollTop.addEventListener("click",function(){window.scrollTo(0,0)}),window.addEventListener("resize",function(){s(y.galleryList),p(y.galleryDot,y.galleryDots)}),y.galleryDots.length>0&&y.galleryDots.forEach((e,t)=>{e.addEventListener("click",function(){p(e,y.galleryDots),m(y.galleryList,y.galleryItem,t)})}),h.animateItems.length>0&&window.addEventListener("scroll",t),setTimeout(()=>{t()},300),g.menuLinks.length>0&&g.menuLinks.forEach(e=>{e.addEventListener("click",function(e){"true"===g.menuCloseBtnRef.getAttribute("aria-expanded")&&o()})}),f.popupImages.length>0&&f.popupImages.forEach(e=>{e.addEventListener("click",function(t){let n=e.getAttribute("srcset").split(" "),o=e.getAttribute("alt");f.popupImg.src=`${n[n.length-2]}`,f.popupImg.alt=`${o}`})}),f.popupLinks.length>0&&f.popupLinks.forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();let n=e.getAttribute("href").replace("#","");c(document.getElementById(n))})}),f.popupCloseIcon.length>0&&f.popupCloseIcon.forEach(e=>{e.addEventListener("click",function(t){t.preventDefault(),d(e.closest(".popup"))})});
//# sourceMappingURL=index.c6a95847.js.map