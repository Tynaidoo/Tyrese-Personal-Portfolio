const btn=document.querySelector(".menu-btn"),links=document.querySelector(".nav-links");
btn.addEventListener("click",()=>{const open=links.classList.toggle("open");btn.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
document.querySelectorAll(".hero .reveal").forEach(el=>setTimeout(()=>el.classList.add("visible"),80));