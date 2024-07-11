# React desenvolvendo com javascript

## React

React é uma biblioteca JavaScript para construir interfaces de usuário. Ele foi criado por Facebook.
A ideia do React era ser algo reativo, ele quer que a página, o DOM da HTML, reaja a mudanças nos dados no nosso estado do componente. Por isso ele está sempre reagindo a algum evento ou alguma alteração no estado.

Uma das principais diferenças dele é que antes tudo era no MVC, então clicávamos em uma página, ele ia para o servidor e o servidor fazia tudo o que era necessário, a página ficava branca por alguns segundos e depois recarregava para renderizar tudo de novo. Toda essa parte do Front-End ficava do lado do servidor em Frameworks MVC.

Hoje, o que temos em muitas áreas diferentes é uma aplicação mais dinâmica que não se renderiza de novo. Ou seja, a página não precisa recarregar a cada interação do usuários. Elas tem o Back-End e as APIs que rodam por baixo dos panos, mas a perspectiva do usuário é algo mais pareciso com um app de celular onde você está sempre na mesma página e apenas porções da página se atualizam e alteram conforme vocês interagem com ela.

Essa é a ideia do React: ser um framework reativo e, basicamente, é uma biblioteca para escrevermos interfaces de usuário. Então montamos, layouts, aplicações, páginas e sites deixando a interação com o usuário maus fluída.

O React facilita muito a nossa vida, porque se fossemos fazer tudo com o vanilla JavaScript precisaríamos de muito mais códigos, nos preocuparíamos em atualizar o DOM, o que é uma operação custosa.

- Comando para criar o projeto:

> quando rodamos o npx quer dizer que estamos rodando o script de forma remota, não está muito vinculado ao ambiente local.

```bash
npx create-react-app nomeDoProjeto
```

- Comando para executar o projeto:

> o npm é utilizado para rodar coisas locais

```bash
npm start
```

Ele vai preparar o ambiente de desenvolvimento para começamor a trabalhar e subirmos a aplicação. Podemos, inclusive, acessá-la pelo o endereço `httpm://localhost:3000` e colamos no navegador o projeto React estará funcionando.

## JSX

O JSX é uma extensão da sintaxe JavaScript que nos permite escrever código HTML dentro do JavaScript. Ele parece HTML, mas não é. O React usa o JSX para criar elementos de interface do usuário.

O React usa o JSX para criar elementos de interface do usuário porque ele é uma forma mais fácil e eficiente de escrever código HTML dentro do JavaScript. O JSX também nos permite usar JavaScript dentro do HTML, o que nos dá mais flexibilidade para criar interfaces de usuário complexas.

Você pode pensar no JSX como uma forma de "misturar" HTML e JavaScript. Ele nos permite usar a sintaxe familiar do HTML para criar elementos de interface do usuário, mas também nos permite usar a flexibilidade do JavaScript para criar elementos dinâmicos e interativos.

## className

parece HTML e não, ele é js e `class` é uma palavra reservada do JavaScript para classes, então, como estamos trabalhando com React vamos usar `className`.

## Organização do código

Pensando na organização do código, geralmente é colocado uma função dentro de uma constante e importamos ela. Criaremos const chamada `CampoTexto` e dentro dela colocamos uma arrow `function {} =>` e fazemos o `export` dela no final.

```js

// ao invés disso:
function CampoTexto() {
    retunr();
}

export default CampoTexto


// fazemos isso:
const CampoTexto = () => {

}

export default CampoTexto
```

## props

Propriedades que recebeu

## React Strict Mode'

redereniza de novo por baixo dos panos

## Eventos

No universo React, os [eventos](https://developer.mozilla.org/en-US/docs/Web/Events) são nomeados com [camelCase](https://www.alura.com.br/artigos/convencoes-nomenclatura-camel-pascal-kebab-snake-case), logo: onclick vira onClick.

## Quando utilizar useState ou let

 O `useState` é essencial para garantir que a interface do usuário seja atualizada automaticamente quando o valor de uma variável muda, pois ele mantém o valor da variável entre as renderizações do componente. Já a variável `let` é redefinida a cada renderização, o que impede que a interface seja atualizada automaticamente.

## debugger

Instrução para a V8 do Chrome para o que está acontecendo e conseguirmos entender o fluxo linha linha, conseguimos ver o código parado no ponto em que pedimos, ele mostra o código do nosso "App.js". Inclusive, é possível sabermos o valor dessa variável. Se formos no Console e pedirmos pelo curso ele no devolverá variável recebida no momento.

```js
const aoNovoCursoSalvo = (curso) => {
    debugger
    setCursos([...cursos, curso])
}
```

## Fragment

Durante o desenvolvimento do nosso Organo, tomamos cuidado em sempre criar e exportar um único elemento HTML em cada componente. Se olharmos, por exemplo, o componente do Banner, estamos exportando uma `<header>` com uma imagem dentro.

```js
export const Banner = () => {
    // JSX
    return (
        <header className='banner'>
            <img src="/imagens/Header.png" alt="Banner principal"/>
        </header>
    );
}
```

Como teste, além de header vamos tentar exportar um `h1` chamado Teste.

```js
export const Banner = () => {
    // JSX
    return (
        <header className='banner'>
            <img src="/imagens/Header.png" alt="Banner principal"/>
        </header>
        <h1>Teste</h1>
    );
}
```

O navegador acusa um erro dizendo que não foi possível fazer o build do módulo porque existe um erro de sintaxe: "Elementos JSX adjacentes deveriam estar contidos em uma tag fechada". Ou seja, um elemento único. Nesse cenário, poderíamos criar um `<div> `e colocar tudo dentro dela. Ou nós poríamos usar um fragmento do React e os fragmentos funcionam assim: em vez de colocarmos tudo dentro de uma `<div>` nós chamamos o `<Fragment>`.

```js
<Fragment>
    <header className="banner">
        <img src="/imagens/Header.png" alt="Banner principal"/>
    </header>
    <h1>Teste</h1>
</Fragment>
```

Agora não temos mais a `<div>` do lado de fora e mantemos o resultado que queríamos com a `<header>` e o `<h1>` embaixo sem precisarmos colocar tudo dentro de uma `<div>` porque `<Fragment>` some na hora de virar um elemento do DOM.

Essa é uma prática tão comum que existe um jeito mais simples de usá-lo. Em vez de escrevermos `<Fragment>`, nós podemos apenas deixar o sinal de maior e menor `<>`.

```js
<>
    <header className="banner">
        <img src="/imagens/Header.png" alt="Banner principal"/>
    </header>
    <h1>Teste</h1>
</>
```

## Referências

[Designer](https://www.figma.com/design/T6BLI1HfB81eYOiVgpqQz7/Projeto-Intro-ao-React?node-id=134-128&t=VrhN3ohahfTBU92b-0)
[Quando (e por que) usar as arrow functions da ES6 — e quando não as usar](https://www.freecodecamp.org/portuguese/news/quando-e-por-que-usar-as-arrow-functions-da-es6-e-quando-nao-as-usar/)
[Classes do ES6](https://cursos.alura.com.br/course/javascript-orientacao-a-objetos)
[documentação componentes baseado em classes](https://pt-br.react.dev/reference/react/Component#defining-a-class-component)
[Para saber mais: Node.JS](https://www.hipsters.tech/o-que-e-node-js/)
[JavaScript: Quando devo usar forEach e map](https://www.alura.com.br/artigos/javascript-quando-devo-usar-foreach-e-map)
[Prop Drilling: o que é?](https://www.alura.com.br/artigos/prop-drilling-no-react-js)
[mui react](https://mui.com/)
[ant react](https://ant.design/docs/react/introduce)
