# Utilizando propriedades CSS personalizadas (variáveis)

- [Variaveis CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Using_CSS_custom_properties)

> Criamos no `:root`, ou seja, no escopo global de um código, uma variável que foi declarada com o nome `--tamanho-da-fonte` e seu valor foi atribuído como `24px`. Toda vez que chamarmos pelo nome `--tamanho-da-fonte`, iremos obter como retorno o valor `24px`.

```css
:root{
     --tamanho-da-fonte:  24px;
}

.minha-class {
    font-size: var(--tamanho-da-fonte);
}
```

## References

- [29 rodapés e cabeçalhos CSS de alta qualidade para sua página web | Creativos Online (Gratuito, Português, Artigo)](https://www.creativosonline.org/pt/27-cabe%C3%A7alhos-e-rodap%C3%A9s-css-para-seu-blog-ou-site.html)

> apresenta uma coleção de 29 cabeçalhos e rodapés em CSS que podem ser usados em blogs ou sites. Inclui exemplos variados, desde cabeçalhos de artigos em tela cheia até cabeçalhos fixos e rodapés, oferecendo ideias práticas para personalizar o visual do cabeçalho do seu site.

- [Utilizando propriedades CSS personalizadas (variáveis) - CSS | MDN (Gratuito, Português, Artigo)](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Using_CSS_custom_properties)

> explica o uso básico de variáveis CSS. A declaração de uma propriedade personalizada é feita com um nome que começa com um hífen duplo (--) e um valor de propriedade que pode ser qualquer valor CSS válido. Este recurso é essencial para entender a sintaxe e o uso prático das variáveis em CSS.

- [Variáveis CSS: um guia prático | desenvolvimento para web (Gratuito, Português, Artigo)](https://www.desenvolvimentoparaweb.com/css/variaveis-css-guia-pratico/)

> como integrar variáveis CSS no fluxo de trabalho de desenvolvimento para tornar as folhas de estilo mais fáceis de manter e evitar repetições desnecessárias. É uma excelente fonte para compreender como as variáveis podem otimizar a manutenção do código.

- [CSS Variables - The var() function - W3Schools (Gratuito, Inglês, Artigo)](https://www.w3schools.com/css/css3_variables.asp)

> guia sobre a função var() em CSS, utilizada para inserir o valor de uma variável CSS. O artigo aborda como criar variáveis com escopo local ou global, alterá-las com JavaScript e basear as mudanças em media queries. Este recurso é útil para entender como as variáveis CSS interagem com o DOM e podem ser aplicadas de forma dinâmica.

- [Construa um CSS mágico com variáveis nativas | Alura (Gratuito, Português, Artigo)](https://www.alura.com.br/artigos/construa-css-magico-variaveis-nativas?_gl=1*ay6ptk*_ga*MjA2MTQxMDE1MS4xNjg1MDQyNjc1*_ga_1EPWSW3PCS*MTcwODM5MDMzOC40My4xLjE3MDgzOTMyMjUuMC4wLjA.*_fplc*a0hYcHclMkJvNkdUOUhCWmtYak5JOFkzTThFZlQxQXd5YlpZdzZsdktjclBjWFlTV2glMkZwN1BHWmViTEs5TCUyQlRUSUloSTB3cFh2SEEyOU1TMnBLbW5kNzJUMzN5cHAyaFNodnMlMkJhMGclMkI5WVlzNFJNY2M1Wm5WYjA4Vlc1THJMdyUzRCUzRA..)

> como utilizar variáveis CSS, destacando a possibilidade de declará-las globalmente ou localmente. Este recurso é valioso para compreender a aplicação prática das variáveis CSS em diferentes escopos de um projeto.

- [Semântica](https://developer.mozilla.org/pt-BR/docs/Glossary/Semantics)
