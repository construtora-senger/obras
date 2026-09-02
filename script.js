/* Construtora Senger — portfólio de obras para terceiros
   Único efeito da página: os números sobem uma vez quando entram na tela.
   Quem tiver "reduzir movimento" ligado no aparelho vê os números já prontos. */

(function () {
  'use strict';

  var reduzir = window.matchMedia &&
                window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var alvos = document.querySelectorAll('.num[data-alvo]');
  if (!alvos.length || reduzir || !('IntersectionObserver' in window)) return;

  function formatar(valor, milhar) {
    return milhar ? valor.toLocaleString('pt-BR') : String(valor);
  }

  function contar(el) {
    var fim = parseInt(el.getAttribute('data-alvo'), 10);
    var milhar = el.hasAttribute('data-milhar');
    var dur = 950;
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
      if (e.isIntersecting) {
        contar(e.target);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.55 });

  alvos.forEach(function (el) { obs.observe(el); });
})();

/* A barra fixa do WhatsApp só entra depois que a pessoa passa do topo,
   para não repetir o botão que já está na primeira tela. */
(function () {
  'use strict';

  var barra = document.querySelector('.wpp-fixo');
  var hero = document.querySelector('.hero');
  if (!barra || !hero) return;

  if (!('IntersectionObserver' in window)) {
    barra.classList.add('visivel');
    return;
  }

  var obs = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      barra.classList.toggle('visivel', !e.isIntersecting);
    });
  }, { threshold: 0, rootMargin: '-70% 0px 0px 0px' });

  obs.observe(hero);
})();
