import{a as g,S as m,i as n}from"./assets/vendor-u8rapaCG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&e(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function e(t){if(t.ep)return;t.ep=!0;const l=s(t);fetch(t.href,l)}})();const f="46102534-3e9989b221503d0d2c214f5a1",b="https://pixabay.com/api/",p=async(o,r=1,s=15)=>{try{return(await g.get(`${b}?key=${f}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${s}`)).data}catch(e){throw console.error("Error fetching images:",e),new Error("Sorry, there are no images matching your search query. Please try again!")}};async function h(o){const r=document.querySelector(".gallery"),s=o.map(e=>`  <li class="gallery-item">
          <a href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" height="152" width="360"/>
          </a>
          <ul class="info">
           <li>
             <p class="headers">Likes</p>
             <p class="details">${e.likes}</p>
           </li>
           <li>
             <p class="headers">Views</p>
             <p class="details">${e.views}</p>
           </li>
           <li>
             <p class="headers">Comments</p>
             <p class="details">${e.comments}</p>
           </li>
           <li>
             <p class="headers">Downloads</p>
             <p class="details">${e.downloads}</p>
           </li>
          </ul>
        </li>`).join("");r.insertAdjacentHTML("beforeend",s)}function q(){const o=document.querySelector(".gallery");o.innerHTML=""}const L=document.querySelector(".search-form");document.querySelector(".gallery");const a=document.querySelector(".btn-load");document.querySelector(".loader");let y=new m(".gallery a"),i=1,u=15,c="";L.addEventListener("submit",o=>{if(o.preventDefault(),c=o.target.elements.query.value.trim(),c===""){n.error({message:"Please enter a search term",position:"topRight"});return}q(),y.refresh(),i=1,o.target.elements.query.value="",a.style.display="none";const r=document.querySelector(".loader-search");r.style.display="block",p(c,i).then(({hits:s,totalHits:e})=>{setTimeout(()=>{r.style.display="none",!s||s.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(h(s),y.refresh(),a.style.display="block",(s.length<u||s.length>=e)&&(a.style.display="none",n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})))},1e3)}).catch(s=>{r.style.display="none",n.error({title:"Error",message:"Failed to fetch images"})})});a.addEventListener("click",async()=>{const o=document.querySelector(".loader-load");o.style.display="block",i+=1;try{const{hits:r,totalHits:s}=await p(c,i,u);setTimeout(()=>{if(o.style.display="none",h(r),y.refresh(),r.length>0){const e=document.querySelector(".gallery .gallery-item");if(e){const{height:t}=e.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}}r.length===0||i*u>=s?(a.style.display="none",n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):a.textContent="Load more"},1e3)}catch(r){console.log(r),o.style.display="none"}});
//# sourceMappingURL=index.js.map
