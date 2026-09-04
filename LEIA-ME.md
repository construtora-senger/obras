# Construtora Senger — Obras para terceiros

Site de uma página, pronto para GitHub Pages.

## Conteúdo

```
index.html          página (todo o HTML e o CSS estão aqui)
support.js          runtime necessário para a página renderizar
assets/
  hotel_perspectiva.jpeg
  hotel_fachada.jpeg
  hotel_entrada.jpeg
  hotel_video.mp4
  geracoes.jpg
```

## Como publicar no GitHub Pages

1. Suba estes arquivos na raiz do repositório (ou na pasta que serve o site),
   mantendo a estrutura acima — `assets/` precisa ficar ao lado do `index.html`.
2. Em Settings → Pages, aponte a Source para o branch e a pasta usados.
3. Aguarde alguns minutos e acesse a URL do Pages.

Importante: abrir o `index.html` com duplo clique (protocolo `file://`) pode
bloquear o carregamento. Publique num servidor ou use um servidor local
(`python -m http.server`) para testar.

## Observações

- As fotos das obras do carrossel são carregadas de
  `construtora-senger.github.io/obras/assets/obras/`. Se o repositório mudar
  de endereço, atualize esses caminhos no `index.html`.
- A imagem do hero também vem desse endereço
  (`assets/hotel/hotel_hero_retrato.jpg`).
- A obra da OAB ficou fora do carrossel porque o arquivo
  `assets/obras/oab_sede_carazinho_2015.jpg` está com link quebrado.
- O vídeo do hotel toca automaticamente sem som (exigência dos navegadores)
  e tem controles visíveis.
