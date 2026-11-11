(()=>{const d=document,r=d.documentElement,$=s=>d.querySelector(s),all=s=>[...d.querySelectorAll(s)];
const rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
try{const t=localStorage.getItem("theme");if(t)r.dataset.theme=t}catch(e){}
const tb=$("#theme");if(tb)tb.onclick=()=>{const dark=(r.dataset.theme||(matchMedia("(prefers-color-scheme:light)").matches?"light":"dark"))=="dark";
r.dataset.theme=dark?"light":"dark";try{localStorage.setItem("theme",r.dataset.theme)}catch(e){}};
const m=$("#menu"),l=$(".links");if(m)m.onclick=()=>{const o=l.classList.toggle("open");m.setAttribute("aria-expanded",o)};
all(".links a").forEach(a=>a.onclick=()=>l.classList.remove("open"));
const bar=$("#bar"),top=$(".top");
addEventListener("scroll",()=>{const h=r.scrollHeight-innerHeight;bar.style.transform="scaleX("+(h>0?scrollY/h:0)+")";top.classList.toggle("scrolled",scrollY>10)},{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});
all(".rv").forEach((e,i)=>{e.style.setProperty("--d",(i%3)*.1+"s");io.observe(e)});
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)all(".links a").forEach(a=>a.classList.toggle("on",a.hash=="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
all("section[id]").forEach(s=>so.observe(s));
const g=$("#glow");
if(matchMedia("(pointer:fine)").matches&&!rm){addEventListener("pointermove",e=>{g.style.transform="translate("+(e.clientX-innerWidth/2)+"px,"+(e.clientY-innerHeight*.2)+"px)"},{passive:true});
all(".card").forEach(c=>{c.addEventListener("pointermove",e=>{const b=c.getBoundingClientRect(),x=e.clientX-b.left,y=e.clientY-b.top;
c.style.setProperty("--mx",x+"px");c.style.setProperty("--my",y+"px");
c.style.transform="perspective(800px) rotateX("+((y/b.height-.5)*-6)+"deg) rotateY("+((x/b.width-.5)*6)+"deg) translateY(-6px)"});
c.addEventListener("pointerleave",()=>c.style.transform="")})}
const tp=$(".type");if(tp){const w=["IT Developer","Front-End Engineer","Problem Solver","Open-Source Builder"];let i=0,j=0,del=false;
if(rm){tp.textContent=w[0]}else(function t(){const s=w[i];tp.textContent=s.slice(0,j+=del?-1:1);let n=del?40:85;
if(!del&&j==s.length){del=true;n=1400}else if(del&&j==0){del=false;i=(i+1)%w.length;n=300}setTimeout(t,n)})()}
all(".track").forEach(t=>{const box=t.parentElement,need=Math.max(box.clientWidth,screen.width)*1.1,set=[...t.children];
while(t.scrollWidth<need)set.forEach(k=>t.appendChild(k.cloneNode(true)));
[...t.children].forEach(k=>{const c=k.cloneNode(true);c.setAttribute("aria-hidden","true");t.appendChild(c)});
t.style.setProperty("--dur",(t.scrollWidth/2/55).toFixed(1)+"s")});
})();