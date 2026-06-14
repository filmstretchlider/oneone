document.querySelectorAll('.menu-toggle').forEach(btn=>{btn.addEventListener('click',()=>{document.body.classList.toggle('menu-open');btn.setAttribute('aria-expanded',document.body.classList.contains('menu-open'))})});
const q=document.getElementById('quoteForm');
if(q){q.addEventListener('submit',e=>{e.preventDefault(); alert('Consulta preparada. Falta conectar el email o WhatsApp final para enviar automáticamente.');});}
