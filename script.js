const works = [
  {name:'Hospital de Clínicas de Carazinho',short:'HCC',city:'Hospital de Clínicas de Carazinho',year:'2023/2024',image:'assets/images/obras/hcc.webp',desc:'Ampliação da recepção, internação e Centro de Convivência Azelar Kissmann, com foco em comodidade, acessibilidade e segurança.'},
  {name:'Loja Lavoro',short:'Lavoro',city:'Loja Lavoro / Carazinho',year:'2018',image:'assets/images/obras/lavoro.webp',desc:'2.130,29 m² com showroom, escritórios e vendas, depósito, oficina e lavagem.'},
  {name:'SEST/SENAT',short:'SEST / SENAT',city:'Carazinho / RS',year:'2018',image:'assets/images/obras/sest_senat.webp',desc:'4.391,98 m² com ginásio, área de saúde, centro de eventos, área administrativa e salas de aula.'},
  {name:'Instituto Federal Farroupilha',short:'IF Farroupilha',city:'Campus Panambi',year:'2017',image:'assets/images/obras/if_farroupilha.webp',desc:'1.116,88 m² com laboratórios, salas de aula, sanitários e administração.'},
  {name:'Sesc',short:'Sesc',city:'Carazinho / RS',year:'2016',image:'assets/images/obras/sesc.webp',desc:'Unidade do Sesc entregue em Carazinho.'},
  {name:'OAB — Sede Carazinho',short:'OAB',city:'Sede Carazinho',year:'2015',image:'assets/images/obras/oab.webp',desc:'539,77 m² com salas, auditório e salão de festas.'},
  {name:'Estação 599',short:'Estação 599',city:'Carazinho / RS',year:'2024',image:'assets/images/obras/estacao_599.webp',desc:'Empreendimento entregue em 2024, parte do portfólio de obras para terceiros da Senger.'},
  {name:'Bianchini',short:'Bianchini',city:'Santa Bárbara',year:'2022',image:'assets/images/obras/bianchini.webp',desc:'Obra industrial/corporativa que reforça a capacidade da Senger em diferentes segmentos.'},
  {name:'Hotel Ibis Budget',short:'Hotel Ibis',city:'Não-Me-Toque / RS',year:'2014',image:'assets/images/obras/ibis.webp',desc:'Projeto da rede Ibis executado pela Senger, com quartos, restaurante e auditório.'},
  {name:'Residencial Alto Panambi',short:'Alto Panambi',city:'Panambi / RS',year:'2014',image:'assets/images/obras/alto_panambi_1.webp',desc:'Condomínio com 7 edifícios de 5 pavimentos, totalizando 7.188,54 m².'},
  {name:'Centro de Convivência UPF',short:'UPF',city:'Passo Fundo / RS',year:'2009',image:'assets/images/obras/upf.webp',desc:'Centro de convivência da Universidade de Passo Fundo.'},
  {name:'Caixa Econômica Federal',short:'Caixa Econômica',city:'Carazinho / RS',year:'2009',image:'assets/images/obras/caixa.webp',desc:'Agência da Caixa Econômica Federal em Carazinho.'},
  {name:'Supermercado Economia da Praça',short:'Economia da Praça',city:'Carazinho / RS',year:'2000',image:'assets/images/obras/economia.webp',desc:'Obra relevante para o comércio local e parte da paisagem de Carazinho desde 2000.'},
  {name:'Biblioteca Pública Dr. Guilherme Schultz Filho',short:'Biblioteca Pública',city:'Carazinho / RS',year:'1980',image:'assets/images/obras/biblioteca.webp',desc:'Obra realizada para a Prefeitura de Carazinho, marco histórico da atuação da Senger na cidade.'}
];
const featured = works.slice(0,6);
function card(w){return `<button class="work-card" type="button" data-name="${w.name.replaceAll('"','&quot;')}"><img src="${w.image}" alt="${w.name}" loading="lazy"><span class="work-info"><strong>${w.short}</strong><span>${w.city}</span><small>${w.year}</small></span></button>`}
const featuredWorks=document.getElementById('featuredWorks');
const allWorks=document.getElementById('allWorks');
featuredWorks.innerHTML=featured.map(card).join('');
allWorks.innerHTML=works.map(card).join('');

const drawer=document.getElementById('worksDrawer');
document.getElementById('showAllWorks').addEventListener('click',()=>{drawer.classList.add('open');drawer.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'});
document.getElementById('closeWorks').addEventListener('click',()=>{drawer.classList.remove('open');drawer.setAttribute('aria-hidden','true');document.body.style.overflow=''});

const dialog=document.getElementById('mediaDialog'); const body=document.getElementById('mediaBody');
function openWork(name){const w=works.find(x=>x.name===name); if(!w)return; body.innerHTML=`<div style="display:grid;grid-template-columns:minmax(0,1.2fr) minmax(280px,.8fr);background:#080a0b"><img src="${w.image}" alt="${w.name}" style="width:100%;height:100%;min-height:360px;object-fit:cover"><div style="padding:38px"><small style="color:#c8953d;text-transform:uppercase;letter-spacing:.1em">${w.city} · ${w.year}</small><h2 style="font-size:34px;text-transform:uppercase;margin:12px 0 18px">${w.name}</h2><p style="color:#b9bfbb;line-height:1.7">${w.desc}</p></div></div>`;dialog.showModal()}
document.addEventListener('click',e=>{const c=e.target.closest('.work-card'); if(c)openWork(c.dataset.name); const t=e.target.closest('[data-image]'); if(t){body.innerHTML=`<img src="${t.dataset.image}" alt="Hotel atual">`;dialog.showModal()}});
document.getElementById('openVideo').addEventListener('click',()=>{body.innerHTML='<video controls autoplay playsinline><source src="assets/video/hotel-senger.mp4" type="video/mp4"></video>';dialog.showModal()});
function closeDialog(){dialog.close();body.innerHTML=''} document.getElementById('closeMedia').addEventListener('click',closeDialog);dialog.addEventListener('click',e=>{if(e.target===dialog)closeDialog()});

const menuToggle=document.getElementById('menuToggle'), mobileNav=document.getElementById('mobileNav');
menuToggle.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open))});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileNav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));
window.addEventListener('keydown',e=>{if(e.key==='Escape'){drawer.classList.remove('open');document.body.style.overflow='';if(dialog.open)closeDialog()}});
