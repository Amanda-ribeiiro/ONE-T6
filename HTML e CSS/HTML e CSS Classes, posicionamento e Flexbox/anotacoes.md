[Nomes de classes no CSS](https://www.alura.com.br/artigos/nomes-de-classes-no-css?_gl=1*ejg2oo*_ga*MjA2MTQxMDE1MS4xNjg1MDQyNjc1*_ga_1EPWSW3PCS*MTcwODEyODE5NC4zMy4xLjE3MDgxMzA0MjcuMC4wLjA.*_fplc*V2F0WDFNU2p3VHdTQkpDaGwxRURIeGhLQzR4UXMzcVlMWFJ0TG1kQlhaR05uUjEzWE1YQmxlaVolMkZGNHpoY2JpbklRTHZ6UXhJUEt6RERRMVlKWEhaTmlTRlF2Y2J5YU5kd0dOSWlkeXklMkJnMlFBR2Z1TzdCRzZlQmJwRkhKQSUzRCUzRA..)

[Reset CSS: O que é, Exemplos, Como Criar e Utilizar](https://www.alura.com.br/artigos/o-que-e-reset-css?_gl=1*1pohpfn*_ga*MjA2MTQxMDE1MS4xNjg1MDQyNjc1*_ga_1EPWSW3PCS*MTcwODEyODE5NC4zMy4xLjE3MDgxMzA1NDAuMC4wLjA.*_fplc*V2F0WDFNU2p3VHdTQkpDaGwxRURIeGhLQzR4UXMzcVlMWFJ0TG1kQlhaR05uUjEzWE1YQmxlaVolMkZGNHpoY2JpbklRTHZ6UXhJUEt6RERRMVlKWEhaTmlTRlF2Y2J5YU5kd0dOSWlkeXklMkJnMlFBR2Z1TzdCRzZlQmJwRkhKQSUzRCUzRA..)

> Já sabemos que se trata de uma folha de estilo e que podemos usá-la como normalmente utilizamos em um projeto web, seja dentro do arquivo HTML, seja num arquivo externo (e que poderá ser acessado por todos os demais arquivos).
>
> O mais habitual é que antes de se começar a estilizar o projeto, o arquivo reset CSS já seja adicionado para que seja feita a remoção da formatação original dos browsers.
>
> Isso porque, caso o reset CSS seja adicionado no meio do projeto, por exemplo, pode gerar dores de cabeça já que o layout foi criado utilizando como referência a formatação dos navegadores e não na padronização dos elementos que foram resetados.

[técnica e como desenvolveu o seu código reset](https://meyerweb.com/eric/tools/css/reset/)

**Como utilizar:**
```html
<link rel="stylesheet" href="reset.css">
```

```css
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
```

[CSS — seletores avançados que facilitam o desenvolvimento de aplicações web](https://www.alura.com.br/artigos/css-seletores-avancados-aplicacoes-web)

[Normalize]()
> A ideia de existir o Normalize CSS é a mesma que do Reset CSS, mas ele possui algumas diferenças importantes na hora de usar.
>
> O principal objetivo do Normalize é deixar consistente a estilização padrão entre os navegadores.
>
> Algumas estilizações padrões dos navegadores que são úteis para o desenvolvimento de páginas são mantidas, alguns bugs comuns entre os navegadores são corrigidos, algumas melhorias de usabilidade e também todo o código do Normalize é comentado e com uma documentação sobre as modificações.
>
> Confira abaixo, as principais diferenças entre Reset CSS e Normalize:
>
> - O Reset CSS limpa TODOS os padrões dos navegadores. É uma forma muito agressiva de “limpeza”, enquanto o Normalize ainda mantém padrões que são úteis.
>
> - O Normalize CSS corrige alguns bugs que existem nas estilizações padrões dos navegadores.
>
> - O Normalize é modular. O código todo é separado por seções específicas, então você pode procurar por mudanças de forma mais direta.
>
> - O Normalize tem uma documentação detalhada sobre o uso e justificativas das mudanças feitas por ele.

**Como utilizar:**
```html
<link rel="stylesheet" href="normalize.css">
```

**Seletores**
- Seletor de Tag

```html
<p>Esse parágrafo será azul.</p>
```

```css
p {
   color: blue;
}
```

- Seletor de Classe

```html
<p class="exemplo">Este parágrafo terá tamanho de fonte 20px.</p>
```

```css
.exemplo {
   font-size: 20px;
}
```

- Seletor de ID

```html
<div id="unico">O fundo deste div será amarelo.</div>
```

```css
#unico {
   background-color: yellow;
}
```

- Seletor Universal CSS

> O seletor universal * pode afetar todos os elementos da sua página

```css
* {
  margin: 0;
  padding: 0;
}
```

- Seletor de Atributo CSS

```html
<a href="https://www.exemplo.com" target="_blank">Este link será vermelho.</a>
```

```css
a[target="_blank"] {
   color: red;
}
```

**Combinadores**

- Combinador Irmão Adjacente

> O combinador irmão adjacente <code>+</code> seleciona o elemento que vem imediatamente depois do primeiro elemento.

```html
<h2>Título</h2>
<p>Este parágrafo será verde.</p>
<p>Este parágrafo não será afetado.</p>
```
```css
h2 + p {
  color: green;
}
```

- Combinador Irmão Geral

> O combinador irmão geral <code>~</code> é mais abrangente, selecionando todos os elementos que seguem o primeiro.

```html
<h2>Título</h2>
<p>Este parágrafo será verde.</p>
<p>Este parágrafo também será verde.</p>
```
```css
h2 ~ p {
  color: green;
}
```

- Combinador de Filho

> O combinador de filho <code>></code> seleciona apenas os elementos que são filhos diretos do primeiro elemento.

```html
<div>
  <p>Este parágrafo será azul.</p>
  <span><p>Este parágrafo não será azul, pois não é um filho direto do div.</p></span>
</div>
```
```css
div > p {
  color: blue;
}
```

- Combinador de Descendente

> O combinador de descendente (espaço) é o mais generoso, selecionando todos os elementos que são descendentes do primeiro, sejam filhos diretos ou não.

```html
<div>
  <p>Este parágrafo será azul.</p>
  <span><p>Este parágrafo também será azul, mesmo não sendo um filho direto do div.</p></span>
</div>
```
```css
div p {
  color: blue;
}
```

**[Pseudo-classes](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes)**

- :nth-child() e :nth-of-type()

> As pseudo-classes <code>:nth-child()</code> e <code>:nth-of-type()</code> selecionam elementos baseados em sua posição entre os irmãos.

```html
<ul>
  <li>Este item não será afetado.</li>
  <li>Este item será vermelho.</li>
  <li>Este item não será afetado.</li>
</ul>
```
```css
li:nth-child(2) {
  color: red;
}
```

- :not()

> A pseudo-classe <code>:not()</code> é uma forma de negação. Ela seleciona todos os elementos que não correspondem ao seletor dentro dos parênteses.

```html
<div class="classe">Este div não será azul.</div>
<div>Este div será azul.</div>
```
```css
div:not(.classe) {
  color: blue;
}
```

- :hover

> A pseudo-classe <code>:hover</code> aplica estilos a um elemento quando o cursor do mouse está sobre ele.

```html
<button>Quando você passar o mouse por cima, este botão será amarelo.</button>
```
```css
button:hover {
  background-color: yellow;
}
```

- :after e :before

> As pseudo-classes <code>:after</code> e <code>:before</code> permitem a adição de conteúdo antes ou depois do conteúdo de um elemento.

```html
<p>Este parágrafo terá "Coramila: " antes de seu texto. Coramila é um pseudônimo para Camila.</p> 
```
```css
p:before {
  content: "Coramila: ";
}
```

- :has

> As pseudo-classes <code>:after</code> e <code>:before</code> permitem a adição de conteúdo antes ou depois do conteúdo de um elemento.

```html
<div><p>Este div terá uma borda, pois contém um parágrafo.</p></div>
<div>Este div não terá uma borda, pois não contém um parágrafo.</div>
```
```css
div:has(p) {
  border: 1px solid black;
}
```

- :empty

> A pseudo-classe <code>:empty</code> seleciona todos os elementos que não têm filhos.

```html
<div>Este div será exibido.</div>
<div></div> <!-- Este div não será exibido, pois está vazio. -->
```
```css
div:empty {
  display: none;
}
```

- :last-child e :first-child

> As pseudo-classes <code>:last-child</code> e <code>:first-child</code> selecionam o primeiro ou o último filho de um elemento.

```html
<ul>
  <li>Este item será vermelho.</li>
  <li>Este item não será afetado.</li>
</ul>
```
```css
li:first-child {
  color: red;
}
```

- :is() e :where()

> Os pseudo-classes <code>:is()</code> e <code>:where()</code> aceitam uma lista de seletores e retornam o primeiro que corresponder.

```html
<p class="grifinoria">Este parágrafo será azul.</p>
<p class="luffaluffa">Este parágrafo também será azul.</p>
<p class="sonserina">Este parágrafo não será afetado.</p>
```
```css
p:is(.grifinoria, .luffaluffa) {
  color: blue;
}
```

**Personalizando checkbox**
- checkbox 

> Selecione o pseudo-elemento after de um label que é irmão adjacente de um input do tipo checkbox, mas só quando ele estiver marcado (:checked). Após o fter selecionado alteramos sua propriedade left para 42px, o resultado é um belo efeito de deslizamento no nosso checkbox.

```css
input[type="checkbox"]:checked + label:after {
    left: 42px;
}
```

- Efeito Hover em Links Específicos

> Quando eu passar o mouse sobre um link (a:hover), que é descendente direto de um parágrafo com a classe intro, quero que você mude a cor dele para vermelho

```css
p.intro a:hover {
    color: red;
}
```

- Destacando o Único Item de uma Lista

>  Altere a cor para verde, mas só se o li for o único filho (:only-child) dentro da ul

```css
ul li:only-child {
    color: green;
}
```

**Organizando o CSS no seu projeto**
- **[SMACSS](https://smacss.com/)**
> Guia de boas práticas divide seus mandamentos em:

- 1. Base
- 2. Layout
- 3. Module
- 4. State
- 5. Theme

Base é o estilo base de todas as páginas ( reset, container, etc )
Layout é o estilo específico de cada página ( courses.css, carreiras.css, etc )
Module é o estilo de componentes que se repetem em várias páginas ( box.css )

- **[State]()
> conhecido em pt-br como estado, se relaciona com os estados dos nossos componentes. Pense no seguinte componente de menu de navegação.

```html
<navbar class="navbar">
    <a href="#" class="item">Home</a>
    <a href="#" class="item">Cursos</a>
    <a href="#" class="item">Carreiras</a>
</navbar>
```

Quando o item do menu fica nesse estado diferente após clicado, dizemos que ele está agora no estado ativo.para alterar estado do item podemos simplesmente colocar uma classe nele com a cor diferente!

Se clicamos no item do menu, o nosso javascript deve colocar nesse elemento a classe

```javascript
.active {}
````

- **Theme do SMACSS**
> basicamente para organizar CSS quando lidamos com projetos que podem ter toda a sua interface visual modificada rapidamente por outra. Imagina sites que você pode alterar uma opção e mudar para o tema DARK do site, que muda todo o visual.

**[Nomes de classes no CSS](https://www.alura.com.br/artigos/nomes-de-classes-no-css?_gl=1*ejg2oo*_ga*MjA2MTQxMDE1MS4xNjg1MDQyNjc1*_ga_1EPWSW3PCS*MTcwODEyODE5NC4zMy4xLjE3MDgxMzA0MjcuMC4wLjA.*_fplc*V2F0WDFNU2p3VHdTQkpDaGwxRURIeGhLQzR4UXMzcVlMWFJ0TG1kQlhaR05uUjEzWE1YQmxlaVolMkZGNHpoY2JpbklRTHZ6UXhJUEt6RERRMVlKWEhaTmlTRlF2Y2J5YU5kd0dOSWlkeXklMkJnMlFBR2Z1TzdCRzZlQmJwRkhKQSUzRCUzRA..)**

- [BEM (Block Element Modifier)](http://getbem.com/introduction/)
> O que o BEM propõe é organizar esses nomes, que nomes vamos dar para os elementos? E os modifiers? E os blocks? Ele ajuda a gente a seguir um padrão. Para o BEM esse padrão seria:

```css
block__element--modifier
```

Explicando as siglas do BEM temos:

**(B)lock** - Esse seria basicamente o que o SMACSS chama de Módulo e o que chamamos aqui de componente também, isso seria qualquer componente que criamos que possa ser reutilizado em várias páginas, como o caso do nosso box ou da navbar.

De agora em diante quando eu me referir a block ou bloco vou estar falando de algum componente.

**(E)lement** - Esse seria um elemento que está dentro do nosso bloco, por exemplo tanto os nossos itens dentro da nossa navbar, quanto o title e a image dentro do box, lembra?

```html
-- navbar block
<navbar class="navbar">
    <a href="#" class="navbar-item">Home</a>
    <a href="#" class="navbar-item">Courses</a>
    <a href="#" class="navbar-item">Carreiras</a>
</navbar>
```

```css
.navbar {}
.navbar-item {}
```

**(M)odifier** - Esse seria o nosso modificador, lembra do active? navbar-itemActive.
```css
.navbar {}
.navbar__item {}
.navbar__item--active {}
```
