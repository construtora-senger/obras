# Portfólio de obras para terceiros — Construtora Senger

Página única (landing page) feita para o QR Code da placa de obra.
Site estático: HTML, CSS e JavaScript puro, sem framework, sem build, sem servidor.
É só jogar os arquivos no GitHub e publicar.

---

## O que tem dentro

```
index.html          → a página inteira (todo o texto está aqui)
style.css           → todo o visual
script.js           → a contagem dos números e a barra do WhatsApp
README.md           → este arquivo
assets/
  obras/            → as 12 fotos das obras entregues
  hotel/            → renders do hotel, o vídeo e as versões para celular
  marca/            → a logo da Senger usada no rodapé
```

Peso total sem o vídeo: aproximadamente 1,5 MB.
O vídeo tem 4,5 MB, mas só é baixado se a pessoa apertar o play.
Quem abre pelo celular na obra carrega em poucos segundos.

---

## Como publicar no GitHub Pages

### 1. Crie o repositório

1. Entre em github.com e clique em **New repository**
2. Nome sugerido: `senger-obras`
3. Deixe marcado **Public**
4. Não marque nada em "Initialize this repository"
5. Clique em **Create repository**

### 2. Envie os arquivos

1. Na página do repositório recém-criado, clique em **uploading an existing file**
2. Arraste o conteúdo desta pasta para dentro da janela do navegador
   — arraste os arquivos e a pasta `assets`, e **não** a pasta que os contém
3. Espere as barras de progresso terminarem (o vídeo demora um pouco)
4. Clique em **Commit changes**

### 3. Ligue o GitHub Pages

1. No repositório, clique em **Settings** (engrenagem, no topo)
2. No menu da esquerda, clique em **Pages**
3. Em "Source", escolha **Deploy from a branch**
4. Em "Branch", escolha **main** e a pasta **/ (root)**
5. Clique em **Save**

Espere de um a dois minutos e recarregue a página de Settings > Pages.
Vai aparecer o endereço do site, no formato:

```
https://SEU-USUARIO.github.io/senger-obras/
```

Esse é o endereço que entra no QR Code da placa.

### 4. Gere o QR Code

Use qualquer gerador gratuito (por exemplo, qr-code-generator.com) e cole o endereço acima.
Antes de mandar imprimir a placa, teste o QR Code lido pelo seu próprio celular,
com o wi-fi desligado, para conferir como ele carrega no 4G.

---

## Como alterar o conteúdo depois

Todo o texto da página está dentro do `index.html`. Para mudar algo:

1. Abra o repositório no GitHub
2. Clique no arquivo `index.html`
3. Clique no ícone de lápis (**Edit this file**)
4. Altere o texto
5. Clique em **Commit changes**

A alteração entra no ar em cerca de um minuto.

### Onde ficam as coisas que você mais vai querer mexer

| O que | Procure por |
|---|---|
| Os cinco números grandes | `data-alvo=` |
| O telefone e o WhatsApp | `wa.me` e `tel:` |
| O texto de cada obra | `class="obra"` |
| Os nomes das três gerações | `class="pessoas"` |

### Trocar o número do WhatsApp

O número aparece em quatro lugares no `index.html`, sempre no formato
`5554984346602` (55 do Brasil + 54 do DDD + o número). Troque nos quatro.

### Acrescentar uma obra nova

1. Coloque a foto em `assets/obras/`, de preferência já cortada em formato deitado
2. No `index.html`, copie um bloco inteiro que comece com `<article class="obra">`
   e termine em `</article>`
3. Cole logo abaixo e troque o nome do arquivo da foto, o título, a cidade,
   o ano e a descrição

---

## Domínio próprio (opcional)

Para usar um endereço como `obras.construtorasenger.com.br` em vez do endereço do GitHub:

1. Em Settings > Pages, preencha o campo **Custom domain**
2. No painel onde o domínio `construtorasenger.com.br` está registrado,
   crie um registro **CNAME** apontando `obras` para `SEU-USUARIO.github.io`
3. Volte no GitHub e marque **Enforce HTTPS**

A propagação leva algumas horas.

---

## Notas técnicas

- As fotos das obras foram recortadas dos posts do Instagram e têm 452×310 pixels.
  É pouco para ampliar em tela cheia, mas suficiente para os cards da grade.
  Se conseguir as fotos originais, é só substituir os arquivos mantendo os mesmos nomes.
- A seção "Três gerações" está preparada para receber os retratos de Sérgio,
  Cristian e Miguel quando as fotos existirem.
- O vídeo do hotel está em 720×480. Se aparecer uma versão em resolução maior,
  substitua o arquivo `assets/hotel/hotel_video.mp4` mantendo o mesmo nome.
