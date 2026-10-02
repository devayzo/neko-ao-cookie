# Neko³ ao Cookie

Uma landing page oficial da **Neko³ ao Cookie**, uma marca de pequenos cookies com chocolate servidos em copinhos. O projeto apresenta o produto, comunica a identidade visual da marca e permite que o visitante realize um pedido por meio de um formulário externo.

> **Pequenos cookies. Grande prazer.**

## 🚀 Sobre o projeto

A aplicação é uma experiência web de página única, responsiva e orientada à conversão. Seu conteúdo foi pensado para apresentar a proposta da Neko³ ao Cookie de forma visual, objetiva e descontraída.

O projeto inclui:

* 🍪 Destaque inicial da marca e do produto
* 🧁 Descrição da receita e dos ingredientes principais
* 📏 Opções de tamanho e preço do copinho
* 🔢 Seleção da quantidade desejada
* 💰 Cálculo automático do valor total
* 📝 Encaminhamento do pedido para um Google Forms com os dados pré-preenchidos
* 🔗 Navegação por âncoras entre produto, pedido e informações da marca

A interface usa uma direção de arte contemporânea, com fundo escuro, tipografia monoespaçada para detalhes técnicos, cor de destaque rosa e seções em tons creme e rosa-claro. A imagem principal reforça a apresentação do produto e a identidade visual da marca.

## 🍪 Conteúdo do website

### Hero

A primeira seção apresenta:

* o logotipo Neko³ ao Cookie;
* a mensagem principal “Pequenos cookies. Grande prazer.”;
* uma breve descrição das bolinhas de cookie com chocolate;
* os CTAs **Escolher meu copinho** e **Descobrir a receita**;
* a indicação de que os produtos são feitos em pequenos lotes e entregues fresquinhos;
* a imagem do copinho do produto.

### O produto

A seção de produto descreve a experiência oferecida pela marca: cookies macios por dentro, chocolate em cada mordida e uma porção servida em copo.

A composição apresentada no site é:

1. metade massa de cookie artesanal;
2. gotas generosas de chocolate;
3. metade chocolate delicioso;
4. servido no copo.

### Seu pedido

O visitante pode escolher entre dois tamanhos de copinho:

| Tamanho | Preço unitário |
| --- | ---: |
| 200 ml | R$ 12,00 |
| 300 ml | R$ 15,00 |

Também é possível aumentar ou diminuir a quantidade, mantendo o mínimo de **1 copinho**. O total é atualizado instantaneamente no navegador conforme o tamanho e a quantidade selecionados.

Ao clicar em **Quero meu copinho**, a aplicação abre um Google Forms em uma nova aba e envia automaticamente os seguintes parâmetros:

* tamanho selecionado, no formato `200ml` ou `300ml`;
* quantidade de copinhos escolhida;
* identificação da origem do preenchimento como link pré-preenchido.

> O processamento final do pedido acontece no formulário externo configurado em `src/App.jsx`.

### Rodapé

O rodapé reforça o posicionamento da marca — “cookies pequenos, grande prazer.” — e informa a localização `SP / BR`, o ano de copyright e um link para retornar ao topo da página.

## 🛠️ Tecnologias utilizadas

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![React DOM](https://img.shields.io/badge/React_DOM-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)

* [React](https://react.dev/) 19;
* [React DOM](https://react.dev/reference/react-dom) 19;
* [Vite](https://vite.dev/) 8;
* [Oxlint](https://oxc.rs/docs/guide/usage/linter) para linting;
* JavaScript com módulos ES;
* CSS responsivo;
* Google Fonts com **Space Grotesk** e **DM Mono**;
* Google Forms para recebimento dos pedidos.

## 🧠 Conceitos e funcionalidades praticados

Durante o desenvolvimento deste projeto, foram praticados conceitos e recursos como:

* Componentes React
* Gerenciamento de estado com `useState`
* Manipulação de eventos
* Renderização dinâmica
* Inputs controlados
* Atualização da interface baseada em estado
* Cálculo de valores a partir de seleções do usuário
* Navegação por âncoras
* Responsividade com CSS
* Acessibilidade e navegação por teclado
* Integração com Google Forms

## 📁 Estrutura do projeto

```text
neko-ao-cookie/
├── public/
│   ├── favicon.svg       # Ícone exibido na aba do navegador
│   └── icons.svg         # Ícones estáticos da aplicação
├── src/
│   ├── assets/
│   │   ├── hero.png      # Imagem principal do produto
│   │   ├── logo.png      # Logotipo da marca
│   │   ├── react.svg     # Asset padrão do template
│   │   └── vite.svg      # Asset padrão do template
│   ├── App.css           # Estilos da landing page e responsividade
│   ├── App.jsx           # Layout, conteúdo e lógica do pedido
│   ├── index.css         # Reset e variáveis globais
│   └── main.jsx          # Ponto de entrada do React
├── index.html            # Documento HTML base
├── package.json          # Scripts e dependências
├── package-lock.json     # Versões travadas das dependências
└── vite.config.js        # Configuração do Vite e plugin React
```

A estrutura separa os assets, estilos globais, estilos específicos da aplicação e a lógica principal da landing page, facilitando a organização e a manutenção do projeto.

## 🛒 Como funciona o pedido

A lógica de pedido está concentrada no componente `App`:

1. o tamanho inicial é definido como `200 ml`;
2. a quantidade inicial é definida como `1`;
3. os preços são mantidos em um objeto local:

   ```js
   const cupPrices = { 200: 12, 300: 15 };
   ```

4. a seleção do tamanho atualiza o preço unitário exibido;
5. os botões `−` e `+` alteram a quantidade, sem permitir valores menores que 1;
6. o preço total é calculado pela multiplicação da quantidade pelo preço do tamanho escolhido;
7. a URL do Google Forms é montada com os valores selecionados como parâmetros de campos pré-preenchidos.

Para alterar tamanhos, preços ou campos do formulário, edite `src/App.jsx` e atualize também o conteúdo visual correspondente no README e no site.

## 🎨 Identidade visual e responsividade

A interface foi construída para manter a personalidade da marca em diferentes tamanhos de tela:

* layout em duas colunas no hero e na seção de pedido em telas maiores;
* navegação principal ocultada em telas menores para preservar espaço;
* composição empilhada no mobile;
* botões e controles com estados de foco visíveis;
* tipografia display para títulos e monoespaçada para labels e metadados;
* animação de flutuação na imagem principal;
* transições de hover nos botões e elementos interativos;
* áreas de toque adaptadas para dispositivos móveis.

## ▶️ Executando o projeto

### Requisitos

Antes de começar, instale:

* [Node.js](https://nodejs.org/) em uma versão compatível com o Vite 8;
* npm, incluído na instalação do Node.js.

### Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/devayzo/neko-ao-cookie.git
cd neko-ao-cookie
npm install
```

### Desenvolvimento local

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação, normalmente `http://localhost:5173`.

## 📜 Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento do Vite. |
| `npm run build` | Gera a versão otimizada para produção em `dist/`. |
| `npm run preview` | Serve localmente a build de produção. |
| `npm run lint` | Executa o Oxlint no projeto. |

Para validar a aplicação antes de publicar:

```bash
npm run lint
npm run build
npm run preview
```

## 🚀 Build para produção

Gere os arquivos estáticos de produção com:

```bash
npm run build
```

A saída será criada no diretório `dist/`. Como a aplicação é uma SPA estática sem backend próprio, ela pode ser publicada em serviços como GitHub Pages, Netlify, Vercel ou qualquer servidor que ofereça hospedagem de arquivos estáticos.

Depois da build, faça uma verificação local com:

```bash
npm run preview
```

## 📝 Configuração do formulário

O endereço do formulário é definido diretamente em `src/App.jsx`. Caso seja necessário trocar o destino ou os campos preenchidos automaticamente:

1. crie ou abra o formulário de pedidos;
2. obtenha a URL de resposta/preenchimento correspondente;
3. identifique os códigos dos campos que representam tamanho e quantidade;
4. atualize a URL e os nomes `entry.*` no componente;
5. teste todos os tamanhos e quantidades antes da publicação.

Como o formulário é um serviço externo, sua disponibilidade, permissões e estrutura de campos devem ser mantidas pelo responsável pela operação da Neko³ ao Cookie.

## ♿ Acessibilidade

A aplicação já inclui alguns recursos básicos de acessibilidade, como:

* textos alternativos nas imagens principais;
* navegação semântica por links e seções;
* `aria-label` na navegação, no ticker e nos controles de seleção;
* botões reais para alterar tamanho e quantidade;
* estilos para `:focus-visible` nos controles de tamanho.

Novos componentes e alterações visuais devem preservar navegação por teclado, contraste adequado e textos alternativos descritivos.

## 📄 Licença

Este repositório não possui uma licença open source definida no momento. Até que uma licença seja adicionada, o código e os assets devem ser considerados de uso restrito ao projeto.

## 👨‍💻 Autoria

Projeto **Neko³ ao Cookie** — São Paulo, Brasil.

* Repositório: [github.com/devayzo/neko-ao-cookie](https://github.com/devayzo/neko-ao-cookie)

---

⭐ Este projeto apresenta a identidade da Neko³ ao Cookie e documenta uma experiência de landing page responsiva construída com React e Vite.
