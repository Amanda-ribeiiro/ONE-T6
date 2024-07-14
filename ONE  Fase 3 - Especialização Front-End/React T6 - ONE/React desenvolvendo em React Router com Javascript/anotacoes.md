# React: desenvolvendo em React Router com JavaScript

## Instalar o react-router-dom;

Utilizamos o comando  que pegamos da própria [documentação](https://reactrouter.com/en/main/start/tutorial) para instalar a versão 6.

```bash
npm install react-router-dom@6
```

Utilizar os componentes `BrowserRouter`, `Routes` e `Route` do `react-router-dom`;

```js
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Pagina nao encontrada!</div>} />
    </Routes>
</BrowserRouter>
```
- Dentro do `BrowserRouter`, conseguimos utilizar os outros componentes da biblioteca.
- O `Routes` alterna entre diferentes rotas e o `Route` renderiza um determinado componente (com o atributo element) em um determinado caminho (com o atributo path). Criar uma rota para um caminho que não existe.
- Adicionando uma `Route` com o `path='*'`, podemos renderizar uma página de 404, caso a URL acessada não corresponda a nenhuma das outras rotas.

## Link no React

A tag `<a>` é um elemento HTML nativo que, quando clicado, faz com que o navegador carregue uma nova página. Isso significa que a página inteira é recarregada, o que pode ser lento e causar uma experiência ruim para o usuário.

```js
<a className={styles.link} href=”/sobremim”>
```

Já a tag `<Link>` do React Router Dom é um componente que permite navegar entre as páginas da sua aplicação React sem recarregar a página inteira. Isso significa que a navegação é muito mais rápida e suave, e a experiência do usuário é muito melhor.

```js
<Link className={styles.link} to=”/sobremim”>
```

- O componente `<Link>` é um componente funcional que recebe um único atributo, `to`.

## useLocation e hooks

O React tem seus próprios [hooks nativos](https://www.alura.com.br/artigos/react-hooks), como `useState` e `useEffect`, mas é comum que bibliotecas feitas para o React forneçam mais hooks para nós utilizarmos. Foi exatamente o nosso caso, onde utilizamos o hook `useLocation` do `react-router-dom`.

## SPA e recursos nativos do JS

Uma SPA (Single Page Application) é uma aplicação que acontece sempre na mesma página HTML, normalmente chamada de `index.html`. A “troca entre páginas” é feita puramente com o JS, ou por alguma ferramenta que abstrai o JS. No caso desse curso é a biblioteca `react-router-dom`, que no final das contas utiliza os próprios recursos do JS para realizar a navegação.

Dessa forma, a navegação entre as rotas é muito mais rápida do que em sites tradicionais, que, onde a cada link que clicamos, devemos esperar uma nova requisição ao servidor, e a página do navegador é recarregada quando a nova página HTML está pronta para ser exibida. Já em uma SPA, a ideia é passar a sensação de que a pessoa usuária está em uma aplicação desktop.

Alguns dos recursos nativos do JS que o `react-router-dom` utiliza por debaixo dos panos são o [window.history](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/history) e o [window.location](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/location). O objetivo da biblioteca é melhorar a experiência de criação de uma SPA, abstraindo esses recursos nativos para métodos e componentes mais intuitivos e manuteníveis do que seria com JS puro.

O React em conjunto com o `react-router-dom` não é a única forma de construir SPAs. Outros frameworks front-end, como Angular e Vue.js também utilizam os mesmos recursos nativos do JS para criar seus próprios ecossistemas de navegação.

## componente NavLink

NavLink da documentação, por padrão, o NavLink adiciona uma classe active para o link que realmente está ativo. 
o hook `useLocation` para obter a rota atual e conseguir destacar o link ativo do menu. Porém, há uma forma alternativa de resolver esse mesmo problema, utilizando o componente NavLink do react-router-dom! Leia sobre ele na [documentação](https://reactrouter.com/en/main/components/nav-link)

```js
import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, to }) {

    return (
        <NavLink
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
            to={to}
            end
        >
            {children}
        </NavLink>
    )
}
```

## Absolute Imports

```js
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

## pacote SVGR

A sintaxe `import { ReactComponent as NomeDoComponente } from 'caminho_do_componente';` é possível devido ao pacote SVGR, que já vem por padrão em um projeto React. Esse pacote permite que utilizemos um [SVG](https://react-svgr.com/) como um componente React, assim não precisamos utilizá-lo como uma tag img.

## formato JSON

[O que é JSON?](https://www.alura.com.br/artigos/o-que-e-json)

## Referências

- [documentação oficial do React Router 6](https://reactrouter.com/en/6)