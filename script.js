document.querySelectorAll('.menu-toggle').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.body.classList.toggle('menu-open');
    btn.setAttribute('aria-expanded',document.body.classList.contains('menu-open'));
  });
});

const counters=document.querySelectorAll('.counter[data-target]');
const formatNumber=n=>n>=1000?n.toLocaleString('es-AR'):String(n);

if(counters.length){
  const runCounter=el=>{
    const target=parseInt(el.dataset.target,10);
    const duration=1100;
    const start=performance.now();

    const tick=now=>{
      const progress=Math.min((now-start)/duration,1);
      const eased=1-Math.pow(1-progress,3);
      const value=Math.round(target*eased);
      el.textContent='+'+formatNumber(value);
      if(progress<1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          runCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.45});

    counters.forEach(counter=>observer.observe(counter));
  }else{
    counters.forEach(runCounter);
  }
}

const q=document.getElementById('quoteForm');
if(q){
  q.addEventListener('submit',e=>{
    e.preventDefault();
    alert('Consulta preparada. Falta conectar el email o WhatsApp final para enviar automáticamente.');
  });
}
