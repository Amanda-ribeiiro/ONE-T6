**[Reset CSS: O que é, Exemplos, Como Criar e Utilizar](https://www.alura.com.br/artigos/o-que-e-reset-css?_gl=1*1pohpfn*_ga*MjA2MTQxMDE1MS4xNjg1MDQyNjc1*_ga_1EPWSW3PCS*MTcwODEyODE5NC4zMy4xLjE3MDgxMzA1NDAuMC4wLjA.*_fplc*V2F0WDFNU2p3VHdTQkpDaGwxRURIeGhLQzR4UXMzcVlMWFJ0TG1kQlhaR05uUjEzWE1YQmxlaVolMkZGNHpoY2JpbklRTHZ6UXhJUEt6RERRMVlKWEhaTmlTRlF2Y2J5YU5kd0dOSWlkeXklMkJnMlFBR2Z1TzdCRzZlQmJwRkhKQSUzRCUzRA..)**

> Já sabemos que se trata de uma folha de estilo e que podemos usá-la como normalmente utilizamos em um projeto web, seja dentro do arquivo HTML, seja num arquivo externo (e que poderá ser acessado por todos os demais arquivos).
>
> O mais habitual é que antes de se começar a estilizar o projeto, o arquivo reset CSS já seja adicionado para que seja feita a remoção da formatação original dos browsers.
>
> Isso porque, caso o reset CSS seja adicionado no meio do projeto, por exemplo, pode gerar dores de cabeça já que o layout foi criado utilizando como referência a formatação dos navegadores e não na padronização dos elementos que foram resetados.

- **[técnica e como desenvolveu o seu código reset](https://meyerweb.com/eric/tools/css/reset/)**
> Como utilizar:

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

- **[Normalize]()**
A ideia de existir o Normalize CSS é a mesma que do Reset CSS, mas ele possui algumas diferenças importantes na hora de usar.

O principal objetivo do Normalize é deixar consistente a estilização padrão entre os navegadores.

Algumas estilizações padrões dos navegadores que são úteis para o desenvolvimento de páginas são mantidas, alguns bugs comuns entre os navegadores são corrigidos, algumas melhorias de usabilidade e também todo o código do Normalize é comentado e com uma documentação sobre as modificações.

> Confira abaixo, as principais diferenças entre Reset CSS e Normalize:

- O Reset CSS limpa TODOS os padrões dos navegadores. É uma forma muito agressiva de “limpeza”, enquanto o Normalize ainda mantém padrões que são úteis.

- O Normalize CSS corrige alguns bugs que existem nas estilizações padrões dos navegadores.

- O Normalize é modular. O código todo é separado por seções específicas, então você pode procurar por mudanças de forma mais direta.

- O Normalize tem uma documentação detalhada sobre o uso e justificativas das mudanças feitas por ele.

> Como utilizar:
```html
<link rel="stylesheet" href="normalize.css">
```

**[CSS — seletores avançados que facilitam o desenvolvimento de aplicações web](https://www.alura.com.br/artigos/css-seletores-avancados-aplicacoes-web)**
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

**[Organizando o CSS no seu projeto](https://www.alura.com.br/artigos/organizando-o-css-no-seu-projeto)**
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

- **[State]()**
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

> block ou bloco é algum componente

**(E)lement** - Esse seria um elemento que está dentro do nosso bloco, por exemplo tanto os nossos itens dentro da nossa <code>navbar</code>, quanto o <code>title</code> e a image dentro do <code>box</code>

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

**(M)odifier** - Esse seria o nosso modificador <code>navbar-itemActive</code>.
```css
.navbar {}
.navbar__item {}
.navbar__item--active {}
```

**[Guia de Unidades no CSS](https://www.alura.com.br/artigos/guia-de-unidades-no-css?_gl=1*1ypycbg*_ga*MjA2MTQxMDE1MS4xNjg1MDQyNjc1*_ga_1EPWSW3PCS*MTcwODE4OTU3Ny4zNi4xLjE3MDgxOTAxOTEuMC4wLjA.*_fplc*V2F0WDFNU2p3VHdTQkpDaGwxRURIeGhLQzR4UXMzcVlMWFJ0TG1kQlhaR05uUjEzWE1YQmxlaVolMkZGNHpoY2JpbklRTHZ6UXhJUEt6RERRMVlKWEhaTmlTRlF2Y2J5YU5kd0dOSWlkeXklMkJnMlFBR2Z1TzdCRzZlQmJwRkhKQSUzRCUzRA..)**

- **Medidas Absolutas**
> São medidas que não estão referenciadas a qualquer outra unidade, ou seja, não dependem de um valor de referência. São unidades de medidas definidas pela física, como o píxel, centímetro, metro, etc...

Essas medidas são fixas e não mudam de acordo com as especificações do dispositivo. Esse tipo de medida é indicada para quando conhecemos perfeitamente as características físicas e as configurações das mídias onde serão exibidos nossos projetos.

- **Medidas Relativas**
>  Essas medidas são calculadas tendo como base uma outra unidade de medida definida, como por exemplo <code>em</code> e o <code>rem</code> (veremos mais sobre essas duas medidas no decorrer do post). O uso delas é mais apropriado para que possamos fazer ajustes em diferentes dispositivos garantindo um layout consistente e fluido em diversas mídias.

**Medidas absolutas no CSS**
- **Píxels (px)**
> píxel é o menor elemento em um dispositivo de exibição
> o píxel do CSS NÃO é realmente um píxel da tela do dispositivo (hardware), e sim o que chamamos de píxel de referência que geralmente é maior do que o píxel real. O que acaba por torná-lo numa medida abstrata onde é necessário controlar o mapeamento desse píxel de referência para o píxel do hardware (acontece por debaixo dos panos!).

A definição de píxel de referência no CSS é o ângulo visual(0.0213deg) de um píxel em um dispositivo com a densidade de 96dpi a uma distancia de um braço do leitor (28 polegadas)

- **Points (pt)**
> Essa medida é geralmente utilizada em propriedades relacionadas a fonte do seu projeto.
>
> Geralmente espera-se que essa medida seja utilizada em folhas de estilo para impressões, quando se precisa ter certeza do tamanho da fonte utilizada. Não é recomendada para a estilização em tela!

- **in (inches/polegadas)**
> Polegada ou inch em inglês é mais uma unidade de medida que conhecemos do mundo das medidas absolutas - geralmente vemos elas quando queremos comprar uma nova TV ou monitor , mas essa unidade também existe no mundo Web.

- **Centímetro e Milímetro (cm / mm)**
> Apesar de bastante comuns, tanto centímetro e milímetro são pouco usadas no CSS. Assim como o pt, o uso dessas duas é esperado para folhas de estilo para impressões (medidas mais precisas), evitando que elas sejam aplicadas para exibições em tela.

- **Paica (pc)**
> Também uma unidade pouco usada no mundo web, a Paica também vem para o CSS sendo herdada da tipografia. Por não ser uma unidade amplamente conhecida, ela acaba sendo fadada ao esquecimento, mas é sempre importante conhecermos todas as ferramentas que estão à nossa disposição. A relação entre as unidades absolutas é:

```css
1 in = 2,54cm = 25,4mm = 72pt = 6pc
```

**Medidas Relativas no CSS**
- **Ems (em)**
>  muda para os elementos filhos de acordo com o tamanho da fonte (font-size) do elemento pai:

```css
<style>
    #pai{
        font-size: 16px;
    }

    #filho{
        font-size: 2em;
    }
</style>
```

```html
<div id="pai">
    div pai
    <div id="filho">
        div filho
    </div>
</div>
```
Para a div mais interna (<code>id=filho</code>), <code>1em</code> será igual a <code>16px</code>, seguindo a lógica, <code>2em</code> será igual a <code>32px</code> e assim por diante. Podemos colocar valores como 1.5 também! Nesse nosso caso, <code>1.5em</code> será igual a <code>24px</code> Quando expressamos tamanhos como <code>margin</code>, <code>padding</code> utilizando em, isso significa que eles serão relativos ao tamanho da fonte do elemento pai.

- **Rems (rem, "root em")**
> O REM vem como sucessor do EM e ambos compartilham a mesma lógica de funcionamento (<code>font-size</code>), porém a forma de implementação é diferente. Enquanto o em está diretamente relacionado ao tamanho da fonte do elemento pai, o rem está relacionado com o tamanho da fonte do elemento root (raiz), no caso, a <code>tag</code>.

Exemplificando, sabemos que a tag <code>html</code> é a tag raiz de todo documento html. Dito isso, se definirmos que o font-size desse elemento será de 18px, então <code>1rem = 18px</code>, <code>2rem = 36px</code> e assim por diante... Normalmente os browsers especificam o tamanho default da fonte do elemento root (raiz) sendo <code>16px</code>

> O motivo para isso é o suporte para essa medida. O chrome e o firefox suportavam tranquilamente, assim como o Opera e o Safari, porém, antigamente grande parte dos usuários utilizavam o IE, mais específicamente o IE 8, e esse browser não lidava muito bem com os rems, isso fazia com que os desenvolvedores precisassem optar por alguma unidade diferente, em muitos casos, o próprio em.

Como disse acima, o valor base é 16px, e isso pode acabar gerando dificuldades para que encontremos alguns tamanhos padrões que costumam ser utilizados. Por exemplo, como faríamos para atingir um tamanho de 10px utilizando rem? Precisamos calcular.

```css
10px = 0.625rem
12px = 0.75rem
14px = 0.875rem
16px = 1rem
18px = 1.125rem
```

Essa solução utiliza <code>px</code>, <code>em</code> e <code>rem</code> de maneira bem definida. A ideia consiste em definir o font-size</code> do elemento root em píxel, módulos utilizando <code>rem</code> e elementos interiores aos módulos utilizando <code>em</code>, facilitando a manipulação do tamanho global que naturalmente escalará o tamanho para os módulos (utilizando <code>rem</code>) e esses por sua vez escalarão os elementos interiores (que utilizam em e referenciam ao elemento pai). Veja um exemplo dessa abordagem. No console será mostrado o tamanho atual da fonte.

```javascript
setInterval(function(){

var el = document.querySelector('html');
var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
var fontSize = parseFloat(style);
console.log(fontSize);

}, 500)
```

- **Porcentagem (%)**
> A porcentagem permite que criemos módulos que sempre vão se readaptar para ocupar a quantidade especificada. Por exemplo, se definirmos um elemento tendo um tamanho de 50%, independente do dispositivo em questão, esse módulo sempre ocupará metade do espaço que lhe cabe (caso esteja dentro de algum outro elemento).

```css
var slider = document.getElementById('slider'),
    mod = document.getElementById('mod'),
    op = document.getElementById('op'),
    op2 = document.getElementById('op2'),
    op3 = document.getElementById('op3'),
    half = document.getElementById('half');

slider.onchange = function () {
  mod.style.width = this.value + 'px';
  mod.style.height = this.value + 'px';
  op.innerHTML = `${this.value} px`;
  op2.innerHTML = `${half.offsetWidth} px`
  op3.innerHTML = `${half.offsetHeight} px`
;}
```
> Veja também que o slider está alterando tanto a largura quanto a altura do elemento, mas se alterarmos cada um separadamente, também funcionará! Visto esse exemplo, podemos dizer que a porcentagem tem um comportamento um tanto parecido ao nosso já conhecido <code>em</code>, já que ele se relaciona diretamente com o tamanho da propriedade do elemento pai.

- **Ex**
> Diferentemente da forma como a EM e a REM funcionavam, essa unidade não se relaciona com o tamanho da fonte (<code>font-size</code>), mas com qual fonte está sendo utilizada naquele momento (<code>font-family</code>), mais especificamente ao tamanho do caractere x dessa fonte em questão (<code>x-height</code>).

Como o browser sabe esse valor? Esse valor pode vir diretamente com a fonte, o browser pode medir o caractere em caixa baixa (lower case) e se esses dois não funcionarem, o browser estipula um valor de <code>0.5em</code> para <code>1ex</code>. 
![image](https://github.com/Amanda-ribeiiro/ONE-T6/assets/108890154/b65b8712-4274-42d4-a33b-64a18b0bf6f9)

> O uso dessa unidade está mais presente em ajustes tipográficos, nos dando um controle mais preciso quando o padrão definido para algumas tags não se adéqua corretamente ao nosso layout.

- **Ch**
> O <code>ch</code> (character unit) é definida na documentação como sendo a "medida avançada" da largura do caractere zero ("0").
A ideia é que um elemento com, por exemplo 100ch de largura poderá comportar uma string de 100 caracteres dessa determinada fonte, caso essa fonte seja monospace (todos os caracteres têm o mesmo tamanho).

A regra de 1ch = 1 caractere se aplica apenas se a fonte usada for monospace (largura fixa). Fontes com a largura variável, qualquer caractere pode ser mais largo ou menos largo que o zero ("0"):
![image](https://github.com/Amanda-ribeiiro/ONE-T6/assets/108890154/504dc2a2-e06c-436b-8d8f-a7e521e36640)

> A tipografia Courier (monospace) obedece a regra acima, porém as outras duas não! O que podemos tirar após observações é que normalmente 1ch é 20% - 30% mais largo, porém isso não é uma verdade absoluta e deve ser observado para cada fonte que você deseja aplicar

- **Vw (viewport width)**
> Viewport nada mais é que a área visível de uma página web para o seu usuário, essa viewport pode variar de acordo com o dispositivo, sendo menor em celulares e maior em desktops.

Essa unidade se relaciona diretamente com a largura da viewport, onde 1vw representa 1% do tamanho da largura dessa área visível. A diferença entre vw e a % é bem semelhante a diferença entre em e rem, onde a % é relativa ao contexto local do elemento e o vw é relativo ao tamanho total da largura da viewport do usuário.

- **Vh (viewport height)**
> Essa unidade funciona da mesma forma que o vw, porém dessa vez, a referência será a altura e não a largura. Existem diversos [exemplos práticos](https://css-tricks.com/fun-viewport-units/) e interessantes de uso dessas duas unidades. 

- **Vh (Vmin (viewport minimun)**
> Anteriormente quando vimos vh e vw precisávamos escolher se gostaríamos de nos basear na altura (vh) ou na largura (vw) da viewport. Diferentemente das anteriores, o vmin utilizará como base a menor dimensão da viewport (altura x largura), vamos ao exemplo:
> Imagine que estamos trabalhando com uma viewport de 1600px de altura e 900px de largura. Nesse caso, 1vmin terá o valor de 9px (1% da menor dimensão!), caso tenhamos 100vmin, esse será igual a 900px!

No caso acima, a menor dimensão foi a da largura, porém se tivéssemos 300px para altura e 1400px para largura, nosso valor de referência seria o 300px! Sempre a menor dimensão!

- **Vh (Vmin (Vmax (viewport maximum))**
> Seguindo a mesma base lógica da unidade anterior, o vmax terá como valor de referência a maior dimensão da viewport. Ou seja, utilizando o mesmo exemplo, se tivermos 1600px de altura e 900px de largura, 1vmax será equivalente a 16px!

No segundo exemplo ocorrerá a mesma inversão, tendo 300px para altura e 1400px para largura, 1vmax será equivalente a 14px. Dessa vez sempre será a maior dimensão!

> ⚠️ **WARNING:** Na versão 9.0 do IE, o vmin foi implementado com um nome diferenciado (vm) Algumas versões do IE ainda não oferecem suporte para o vmax, nas novas versões isso foi corrigido.
Algumas plataformas como o windows tendem a ser inconsistentes na maneira de como eles contam o tamanho da barra de scroll dos browsers. (diminui o viewport ou não) Sempre verifique o suporte dessas medidas, tenha sempre esse [link](https://caniuse.com/?search=vw) no cinto de utilidades.
