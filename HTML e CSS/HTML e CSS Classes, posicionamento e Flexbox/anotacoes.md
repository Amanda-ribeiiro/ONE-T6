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

```html
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
