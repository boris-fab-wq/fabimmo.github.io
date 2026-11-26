/* FAB Serveis Immobiliaris · dades i fitxes dels immobles (compartit per index.html i immobles.html) */
(function(){
// Immobles: { etiqueta, municipi (per al filtre de població), titol, poblacio, preu, detalls, descripcio, fitxa:[[nom,valor]], fotos:[[fitxer,peu]] }
// La primera foto és la portada (diferent a cada anunci); la segona, el plànol del pis.
var D='immobles/salt-iii/';
var ADR='Salt (Girona)';
var EDIF=' Edifici de reforma integral amb ascensor, a 9 minuts en cotxe del centre de Girona i a 3 minuts de l\'AP-7 i l\'A-2.';
var F={
 facDia:[D+'facana-dia.jpg','Façana de l\'edifici'],facNit:[D+'facana-nit.jpg','Façana al vespre'],
 salo:[D+'salo-menjador.jpg','Saló-menjador'],cuina:[D+'cuina.jpg','Cuina'],dorm:[D+'dormitori.jpg','Dormitori'],
 atic:[D+'atic-terrassa.jpg','Terrassa de l\'àtic'],seccio:[D+'seccio-edifici.jpg','Secció de l\'edifici'],
 tipus:[D+'planta-tipus.jpg','Planta tipus (plantes 1a a 3a)'],zenital:[D+'vista-zenital.jpg','Vista zenital d\'una planta tipus']
};
function pis(o){
  var g=[o.portada,o.planol].concat(o.extra||[]);
  [F.salo,F.cuina,F.dorm,F.facDia].forEach(function(f){if(g.indexOf(f)<0)g.push(f)});
  return {etiqueta:'RESIDENCIAL SALT III',promocio:'Residencial Salt III',municipi:'Salt',titol:o.titol,poblacio:ADR,preu:o.preu,detalls:o.detalls,descripcio:o.desc+EDIF,fitxa:o.fitxa,fotos:g};
}
var tA=[D+'tipus-a-planol.jpg','Plànol de l\'habitatge A (plantes 1a a 3a)'],t3A=[D+'tipus-a-3d.jpg','Vista 3D de l\'habitatge A'];
var tB=[D+'tipus-b-planol.jpg','Plànol de l\'habitatge B (plantes 1a a 3a)'],t3B=[D+'tipus-b-3d.jpg','Vista 3D de l\'habitatge B'];
function fA(p){return [['Planta',p],['Superfície construïda','79,36 m²'],['Superfície útil','64,96 m²'],['Saló-menjador','20,83 m²'],['Cuina','6,53 m²'],['Dormitoris','3'],['Banys','2'],['Terrassa','7,70 m²']]}
function fB(p){return [['Planta',p],['Superfície construïda','79,30 m²'],['Superfície útil','63,84 m²'],['Saló-menjador','19,97 m²'],['Cuina','6,34 m²'],['Dormitoris','3'],['Banys','2'],['Terrassa','7,71 m²']]}
function dA(n){return 'Es comercialitza el pis '+n+' de Residencial Salt III: 64,96 m² útils amb saló-menjador de 20,83 m² amb sortida a terrassa, cuina independent, 3 dormitoris i 2 banys.'}
function dB(n){return 'Es comercialitza el pis '+n+' de Residencial Salt III: 63,84 m² útils amb saló-menjador de 19,97 m² amb sortida a terrassa, cuina independent, 3 dormitoris i 2 banys.'}
var L='immobles/loft-santa-coloma/';
var IMMOBLES={venda:[
 {etiqueta:'LOFT REFORMAT',municipi:'Santa Coloma de Farners',titol:'Loft totalment reformat amb balcó',poblacio:'Santa Coloma de Farners (Girona)',preu:'87.000 €',
  detalls:'Estudi · 1 bany · 1a planta · Balcó',
  descripcio:'Es comercialitza un loft a la primera planta (sense ascensor), al costat de l\'estació d\'autobusos i a pocs minuts dels centres esportius i de les escoles. És un estudi totalment reformat: espai obert i lluminós amb sortida a balcó, cuina equipada amb placa d\'inducció, forn i microones, bany amb plat de dutxa, armari encastat, aire condicionat i safareig. A més, tota la instal·lació elèctrica de la comunitat és nova.',
  fitxa:[['Tipus','Loft / estudi'],['Planta','1a (sense ascensor)'],['Estat','Totalment reformat'],['Banys','1'],['Cuina','Equipada (inducció, forn i microones)'],['Climatització','Aire condicionat'],['Aigua calenta','Termo elèctric'],['Exterior','Balcó'],['Instal·lació elèctrica comunitat','Nova']],
  fotos:[[L+'sala-balco.jpg','Espai principal amb sortida al balcó'],[L+'sala-cuina.jpg','Espai obert amb cuina'],[L+'sala-passadis.jpg','Vista general del loft'],[L+'cuina.jpg','Cuina equipada'],[L+'cuina-2.jpg','Cuina i sortida al balcó'],[L+'cuina-armari.jpg','Cuina i armari encastat'],[L+'bany.jpg','Bany'],[L+'balco.jpg','Balcó'],[L+'balco-2.jpg','Balcó'],[L+'safareig.jpg','Safareig amb termo elèctric']]},
 pis({titol:'Planta baixa A amb pati de 112 m²',preu:'220.500 €',detalls:'3 hab. · 2 banys · 62,73 m² útils · Pati 112,84 m²',
  desc:'Es comercialitza l\'habitatge de planta baixa A de Residencial Salt III: 62,73 m² útils amb 3 dormitoris, 2 banys i un pati privat de 112,84 m².',
  fitxa:[['Planta','Baixa'],['Superfície construïda','79,30 m²'],['Superfície útil','62,73 m²'],['Dormitoris','3'],['Banys','2'],['Pati privat','112,84 m²']],
  portada:F.facDia,planol:[D+'pb-a-planol.jpg','Plànol de l\'habitatge de planta baixa A'],extra:[[D+'pb-a-3d.jpg','Vista 3D de l\'habitatge de planta baixa A'],F.facNit]}),
 pis({titol:'Pis 1r A amb terrassa',preu:'199.500 €',detalls:'3 hab. · 2 banys · 64,96 m² útils · Terrassa 7,70 m²',desc:dA('1r A'),fitxa:fA('1a'),portada:F.salo,planol:tA,extra:[t3A]}),
 pis({titol:'Pis 1r B amb terrassa',preu:'199.500 €',detalls:'3 hab. · 2 banys · 63,84 m² útils · Terrassa 7,71 m²',desc:dB('1r B'),fitxa:fB('1a'),portada:F.cuina,planol:tB,extra:[t3B]}),
 pis({titol:'Pis 2n A amb terrassa',preu:'199.500 €',detalls:'3 hab. · 2 banys · 64,96 m² útils · Terrassa 7,70 m²',desc:dA('2n A'),fitxa:fA('2a'),portada:F.dorm,planol:tA,extra:[t3A]}),
 pis({titol:'Pis 2n B amb terrassa',preu:'199.500 €',detalls:'3 hab. · 2 banys · 63,84 m² útils · Terrassa 7,71 m²',desc:dB('2n B'),fitxa:fB('2a'),portada:t3B,planol:tB}),
 pis({titol:'Pis 3r A amb terrassa',preu:'199.500 €',detalls:'3 hab. · 2 banys · 64,96 m² útils · Terrassa 7,70 m²',desc:dA('3r A'),fitxa:fA('3a'),portada:F.tipus,planol:tA,extra:[t3A]}),
 pis({titol:'Pis 3r B amb terrassa',preu:'199.500 €',detalls:'3 hab. · 2 banys · 63,84 m² útils · Terrassa 7,71 m²',desc:dB('3r B'),fitxa:fB('3a'),portada:F.zenital,planol:tB,extra:[t3B]}),
 pis({titol:'Dúplex àtic 4t A amb terrassa de 39 m²',preu:'220.500 €',detalls:'2 hab. · 2 banys · 86,65 m² útils · Terrassa 39,16 m²',
  desc:'Es comercialitza el dúplex àtic 4t A de Residencial Salt III: 86,65 m² útils en dues plantes (altell de 21,77 m² útils inclòs), 2 dormitoris, 2 banys i una terrassa de 39,16 m².',
  fitxa:[['Planta','4a + altell'],['Superfície útil total','86,65 m²'],['Altell (útil)','21,77 m²'],['Altell (construït)','32,39 m²'],['Dormitoris','2'],['Banys','2'],['Terrassa','39,16 m²']],
  portada:F.atic,planol:[D+'4a-planol.jpg','Plànol de la planta 4a (dúplex 4t A)'],extra:[[D+'4a-altell.jpg','Plànol de l\'altell (dúplex 4t A)'],[D+'4a-3d.jpg','Vista 3D del dúplex 4t A'],F.seccio]}),
 pis({titol:'Dúplex àtic 4t B amb terrassa de 39 m²',preu:'220.500 €',detalls:'2 hab. · 2 banys · 85,68 m² útils · Terrassa 39,24 m²',
  desc:'Es comercialitza el dúplex àtic 4t B de Residencial Salt III: 85,68 m² útils en dues plantes (altell de 22,01 m² útils inclòs), 2 dormitoris, 2 banys i una terrassa de 39,24 m².',
  fitxa:[['Planta','4a + altell'],['Superfície útil total','85,68 m²'],['Altell (útil)','22,01 m²'],['Altell (construït)','32,36 m²'],['Dormitoris','2'],['Banys','2'],['Terrassa','39,24 m²']],
  portada:F.seccio,planol:[D+'4b-planol.jpg','Plànol de la planta 4a (dúplex 4t B)'],extra:[[D+'4b-altell.jpg','Plànol de l\'altell (dúplex 4t B)'],[D+'4b-3d.jpg','Vista 3D del dúplex 4t B'],F.atic]}),
 {etiqueta:'RESIDENCIAL SALT III',promocio:'Residencial Salt III',municipi:'Salt',titol:'Local comercial a peu de carrer',poblacio:ADR,preu:'63.000 €',detalls:'Planta baixa · 20 m² construïts',
  descripcio:'Es comercialitza el local comercial de planta baixa de Residencial Salt III: 20 m² construïts a peu de carrer.'+EDIF,
  fitxa:[['Planta','Baixa'],['Superfície construïda','20 m²']],fotos:[F.facNit,F.facDia]}
],lloguer:[]};

var $=function(i){return document.getElementById(i)};
function esc(t){return String(t==null?'':t).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function fotos(it){return it.fotos||(it.imatge?[[it.imatge,it.titol]]:[])}
function missatge(it){return 'Hola, voldria rebre més informació sobre: '+it.titol+(it.promocio?' · '+it.promocio:'')+(it.municipi?' ('+it.municipi+')':'')+', '+it.preu+'.'}
function askInfo(it){
  closeIm();
  var m=$('missatge');
  if(m&&$('contactForm')){if(!m.value)m.value=missatge(it);var s=$('servei');if(s)s.selectedIndex=0;var c=$('contacte');if(c)c.scrollIntoView({behavior:'smooth'});return}
  location.href='index.html?interes='+encodeURIComponent(missatge(it))+'#contacte';
}
function card(it){
  var f=fotos(it),a=document.createElement('article');
  a.className='im-card';
  a.innerHTML='<button type="button" data-open class="im-photo" aria-label="Veure fotos: '+esc(it.titol)+'">'+
    '<img src="'+esc(f[0]?f[0][0]:'')+'" alt="'+esc(it.titol)+'" loading="lazy">'+
    (it.etiqueta?'<span class="im-tag">'+esc(it.etiqueta)+'</span>':'')+
    (f.length>1?'<span class="im-n">'+f.length+' fotos</span>':'')+'</button>'+
    '<div class="im-body"><span class="im-preu">'+esc(it.preu)+'</span><h3>'+esc(it.titol)+'</h3>'+
    '<p>'+esc(it.poblacio)+'</p><p>'+esc(it.detalls)+'</p>'+
    '<div class="im-acc"><button type="button" data-open class="im-link">Veure fotos i detalls</button>'+
    '<a href="index.html#contacte" data-info>Demani informació</a></div></div>';
  a.querySelectorAll('[data-open]').forEach(function(b){b.addEventListener('click',function(){openIm(it)})});
  a.querySelector('[data-info]').addEventListener('click',function(e){e.preventDefault();askInfo(it)});
  return a;
}
var MODAL='<div id="imModal" hidden role="dialog" aria-modal="true" aria-labelledby="imTitol"><div id="imBox"><div id="imGal">'+
 '<img id="imMain" alt=""><button type="button" class="imNav" id="imPrev" aria-label="Foto anterior" style="left:12px">‹</button>'+
 '<button type="button" class="imNav" id="imNext" aria-label="Foto següent" style="right:12px">›</button>'+
 '<span id="imCount"></span><p id="imCaption"></p><div id="imThumbs"></div></div>'+
 '<div id="imInfo"><div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px"><span id="imEtiqueta"></span>'+
 '<button type="button" id="imClose" aria-label="Tancar">×</button></div>'+
 '<span id="imPreu"></span><h3 id="imTitol"></h3><p id="imPoblacio"></p><p id="imDesc"></p><ul id="imFitxa"></ul>'+
 '<p style="font-size:13px;color:#7B88A8">Imatges orientatives, no contractuals.</p>'+
 '<div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center"><a href="index.html#contacte" id="imInfoBtn" class="im-btn">Demani informació</a>'+
 '<a href="tel:+34650369778" class="im-tel">Truqui al 650 369 778</a></div></div></div></div>';
var cur=null,idx=0,lastFocus=null,ready=false;
function setup(){
  if(ready)return;ready=true;
  document.body.insertAdjacentHTML('beforeend',MODAL);
  $('imPrev').addEventListener('click',function(){show(idx-1)});
  $('imNext').addEventListener('click',function(){show(idx+1)});
  $('imClose').addEventListener('click',closeIm);
  $('imInfoBtn').addEventListener('click',function(e){e.preventDefault();askInfo(cur)});
  $('imModal').addEventListener('click',function(e){if(e.target===this)closeIm()});
  document.addEventListener('keydown',function(e){if($('imModal').hidden)return;if(e.key==='Escape')closeIm();if(e.key==='ArrowLeft')show(idx-1);if(e.key==='ArrowRight')show(idx+1)});
  var tx=null;$('imMain').addEventListener('touchstart',function(e){tx=e.touches[0].clientX},{passive:true});
  $('imMain').addEventListener('touchend',function(e){if(tx===null)return;var d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>40)show(idx+(d<0?1:-1));tx=null});
}
function show(i){
  var f=fotos(cur);idx=(i+f.length)%f.length;
  $('imMain').src=f[idx][0];$('imMain').alt=f[idx][1];$('imCaption').textContent=f[idx][1];
  $('imCount').textContent=(idx+1)+' / '+f.length;
  $('imThumbs').querySelectorAll('button').forEach(function(b,j){b.setAttribute('aria-current',j===idx)});
  var tb=$('imThumbs').children[idx];if(tb)tb.scrollIntoView({block:'nearest',inline:'nearest'});
  var nx=new Image();nx.src=f[(idx+1)%f.length][0];
}
function openIm(it){
  setup();cur=it;lastFocus=document.activeElement;var f=fotos(it);
  $('imEtiqueta').textContent=it.etiqueta||'';$('imPreu').textContent=it.preu||'';$('imTitol').textContent=it.titol||'';
  $('imPoblacio').textContent=it.poblacio||'';$('imDesc').textContent=it.descripcio||it.detalls||'';
  var ul=$('imFitxa');ul.innerHTML='';
  (it.fitxa||[]).forEach(function(r){var li=document.createElement('li');li.innerHTML='<span>'+esc(r[0])+'</span><span>'+esc(r[1])+'</span>';ul.appendChild(li)});
  var th=$('imThumbs');th.innerHTML='';
  f.forEach(function(p,j){var b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Foto '+(j+1)+': '+p[1]);b.innerHTML='<img alt="" loading="lazy" src="'+esc(p[0])+'">';b.addEventListener('click',function(){show(j)});th.appendChild(b)});
  $('imPrev').hidden=$('imNext').hidden=f.length<2;
  $('imModal').hidden=false;document.body.style.overflow='hidden';show(0);$('imClose').focus();
}
function closeIm(){if(!ready||$('imModal').hidden)return;$('imModal').hidden=true;document.body.style.overflow='';if(lastFocus)lastFocus.focus()}
window.FAB={IMMOBLES:IMMOBLES,card:card,open:openIm};
})();
