!function(){function e(){window.scrollBy(0,-55);var e=document.querySelector(".inner-link-active");e&&e.classList.remove("inner-link-active");var n=location.hash.replace(/([\[\].'"@$])/g,"\\$1"),e=document.querySelector(n);e&&e.classList.add("inner-link-active")}location.hash.match(/errorLines=([\d,]+)/)||(window.addEventListener("hashchange",e),location.hash&&setTimeout(e,0))}(),function(){for(var e=document.querySelectorAll('[href^="#"]'),n=location.href.replace(/#.*$/,""),t=0;t<e.length;t++){var r=e[t];r.href=n+r.getAttribute("href")}}();