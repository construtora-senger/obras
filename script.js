/* Construtora Senger — portfólio de obras para terceiros */

/* 1. Os números sobem uma vez quando entram na tela.
      Quem tem "reduzir movimento" ligado vê os números já prontos. */
(function () {
  'use strict';

  var reduzir = window.matchMedia &&
                window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var alvos = document.querySelectorAll('[data-alvo]');
  if (!alvos.length || reduzir || !('IntersectionObserver' in window)) return;

  function formatar(valor, milhar) {
    return milhar ? valor.toLocaleString('pt-BR') : String(valor);
  }

  function contar(el) {
    var fim = parseInt(el.getAttribute('data-alvo'), 10);
    var milhar = el.hasAttribute('data-milhar');
    var dur = 900;
    var ini = null;

    el.textContent = formatar(0, milhar);

    function passo(agora) {
      if (ini === null) ini = agora;
      var t = Math.min((agora - ini) / dur, 1);
      var suave = 1 - Math.pow(1 - t, 3);
      el.textContent = formatar(Math.round(fim * suave), milhar);
      if (t < 1) requestAnimationFrame(passo);
      else el.textContent = formatar(fim, milhar);
    }
    requestAnimationFrame(passo);
  }

  var obs = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (e.isIntersecting) { contar(e.target); obs.unobserve(e.target); }
    });
  }, { threshold: 0.5 });

  alvos.forEach(function (el) { obs.observe(el); });
})();


/* 2. A barra do WhatsApp entra depois que a pessoa passa da primeira tela. */
(function () {
  'use strict';

  var barra = document.querySelector('.wpp-fixo');
  var hero = document.querySelector('.hero');
  if (!barra || !hero) return;

  if (!('IntersectionObserver' in window)) { barra.classList.add('visivel'); return; }

  var obs = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      barra.classList.toggle('visivel', !e.isIntersecting);
    });
  }, { threshold: 0, rootMargin: '-72% 0px 0px 0px' });

  obs.observe(hero);
})();


/* 3. A faixa de obras rola de lado. A seta e o botão "ver todas" empurram
      a faixa; no fim, ela volta para o começo. */
(function () {
  'use strict';

  var trilho = document.getElementById('trilho');
  var seta = document.getElementById('seta');
  var verTodas = document.getElementById('ver-todas');
  if (!trilho) return;

  function avancar() {
    var cartao = trilho.querySelector('.obra');
    var passo = cartao ? cartao.getBoundingClientRect().width + 2 : 240;
    var fim = trilho.scrollWidth - trilho.clientWidth - 4;

    if (trilho.scrollLeft >= fim) {
      trilho.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      trilho.scrollBy({ left: passo * 2, behavior: 'smooth' });
    }
  }

  if (seta) seta.addEventListener('click', avancar);
  if (verTodas) verTodas.addEventListener('click', avancar);
})();


/* 4. Cada seção aparece quando entra na tela.
      Os itens de dentro entram em sequência, um após o outro. */
(function () {
  'use strict';

  var reduzir = window.matchMedia &&
                window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var secoes = document.querySelectorAll('.revela');
  if (!secoes.length) return;

  // numera os filhos para o atraso em cascata
  secoes.forEach(function (s) {
    var itens = s.querySelectorAll('.faixa-lista li, .trilho .obra');
    itens.forEach(function (el, i) { el.style.setProperty('--i', i); });
  });

  if (reduzir || !('IntersectionObserver' in window)) {
    secoes.forEach(function (s) { s.classList.add('dentro'); });
    return;
  }

  var obs = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('dentro');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  secoes.forEach(function (s) { obs.observe(s); });
})();
