let el=document.querySelector(".cc");
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
window.addEventListener("scroll",()=>{
let scrollTop=document.documentElement.scrollTop;
el.style.width=`${(scrollTop / height)*100}%`;
});