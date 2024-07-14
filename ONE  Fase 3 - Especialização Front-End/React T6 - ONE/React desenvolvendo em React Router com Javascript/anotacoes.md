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

## Outlet

O `<Outlet />` é como um espaço dentro da mala grande onde você coloca as malas menores. Ele é o lugar onde o React Router Dom vai "desempacotar" o conteúdo das rotas filhas.

No nosso caso, a rota pai é a `PaginaPadrao`, que tem o `<main>` e o `<Banner />`. O `<Outlet />` dentro da `PaginaPadrao` é o espaço onde o React Router Dom vai colocar o conteúdo das rotas filhas, como a Inicio e a SobreMim.

Assim, quando você acessa a rota /, o React Router Dom renderiza a `PaginaPadrao` com o `<Banner />` e o conteúdo da rota Inicio dentro do `<Outlet />`. Se você acessar a rota /sobremim, o React Router Dom renderiza a `PaginaPadrao` com o `<Banner />` e o conteúdo da rota SobreMim dentro do `<Outlet />`.

## Rotas index e caminhos relativos

!uando queremos reaproveitar partes da nossa aplicação em apenas algumas rotas em vez de todas, utilizamos o recurso de rotas aninhadas, que são rotas filhas de uma mesma rota pai, [documentação](https://reactrouter.com/en/main/start/overview#nested-routes) e [rotas index.](https://reactrouter.com/en/main/start/concepts#index-routes)


```js
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Activity />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="activity" element={<Activity />} />
      </Route>
    </Routes>
  );
}
```

Veja que há três rotas aninhadas de Layout. A primeira delas possui um atributo index em vez de um atributo `path`. Isso é o mesmo que dizer que o caminho desta rota é igual ao da rota pai, ou seja, nesse caso é a mesma coisa que um atributo `path="/"`.

As outras duas rotas têm caminhos que iniciam sem a `/`. Isso quer dizer que essas rotas serão relativas ao caminho da rota pai, e são equivalentes a `"/invoices"` e "`/activity"`, respectivamente.

Se a rota pai tivesse o caminho `"/qualquercoisa"`, os caminhos das três rotas aninhadas seriam equivalentes a `"/qualquercoisa`, `"/qualquercoisa/invoices"` e `"/qualquercoisa/activity"`. Utilizando rotas index e caminhos relativos, evitamos repetição de código e o deixamos mais legível.

## Linguagem Markdown

o JSON possui limitações, como não permitir quebra de linha nas strings (foi utilizado \n em vez de quebra de linha). Porém, os cenários ideais são um pouco mais avançados, envolvendo consumo de serviços externos. Então, apesar das limitações do JSON, ele é mais simples de utilizar e supre as necessidades do nosso projeto.

Para melhor experiência de escrita, você pode escrever seus posts em markdown e depois passar para a string do JSON, mas se atente para substituir as quebras de linha por \n (e duas quebras de linha \n\n para um novo parágrafo), assim como já está sendo feito no posts.json.

## Webpack

A diferença entre usar `BotaoPrincipal.module.css` e `BotaoPrincipal.css` está na forma como o CSS é organizado e como ele é usado no seu projeto.

`BotaoPrincipal.module.css` (CSS modular):

- Organização: Cada componente tem seu próprio arquivo CSS, o que facilita a organização do código e a manutenção.
- Escopo: As classes CSS definidas em um arquivo `*.module.css` são específicas para aquele componente. Isso significa que elas não podem ser usadas por outros componentes, evitando conflitos de estilos.
- Nomes únicos: O Webpack (ou outro bundler) gera nomes únicos para as classes CSS dentro de cada arquivo `*.module.css.` Isso garante que as classes não sejam sobrescritas por outros componentes.
- Facilidade de reutilização: Você pode reutilizar o componente em diferentes partes do seu projeto sem se preocupar com conflitos de estilos.

`BotaoPrincipal.css` (CSS global):

- Organização: O CSS é definido em um arquivo global, o que pode dificultar a organização do código, especialmente em projetos maiores.
- Escopo: As classes CSS definidas em um arquivo `*.css` são globais, o que significa que elas podem ser usadas por qualquer componente. Isso pode levar a conflitos de estilos.
- Nomes não únicos: As classes CSS definidas em um arquivo `*.css` podem ser sobrescritas por outros componentes.
- Dificuldade de reutilização: Você precisa ter cuidado ao reutilizar componentes que usam CSS global, pois pode haver conflitos de estilos.

**Vantagens do CSS modular:**

- Organização: Código mais organizado e fácil de manter.
- Escopo: Evita conflitos de estilos.
- Reutilização: Facilita a reutilização de componentes.
- Manutenção: Mais fácil de encontrar e corrigir erros.

**Vantagens do CSS global:**

- Simplicidade: Mais simples de implementar em projetos pequenos.
- Flexibilidade: Permite usar as mesmas classes CSS em diferentes componentes.

Em resumo:
O CSS modular é a melhor prática para projetos React, pois oferece mais organização, escopo e reutilização. O CSS global pode ser usado em projetos pequenos, mas é mais propenso a conflitos de estilos e dificulta a manutenção do código

## Navegação no react-router-dom

controle da navegação do `react-router-dom` utilizando o hook `useNavigate` [documentação](https://reactrouter.com/en/main/hooks/use-navigate).

## Routes descendente

Utilizamos um componente Routes dentro do componente Post, que já é uma rota dentro do Routes que é utilizado em routes.js. Este é o recurso de Routes descendente do react-router-dom, que é quando um componente Routes é utilizado dentro de outro.

## Solução alternativa com children

Utilizamos um Routes descendente, para podermos utilizar um Route para PaginaPadrao e reutilizar seu Outlet. Porém, há outra abordagem para resolver esse problema. Para aplicá-la, você pode remover os Routes e Route que colocamos no componente de Post, deixando seu JSX do jeito que estava antes. Agora, vamos envolver diretamente o PostModelo por PaginaPadrao, deixando o JSX assim:

```js
        <PaginaPadrao>
            <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>
            </PostModelo>
        </PaginaPadrao>
```

Porém, para que consigamos renderizar o JSX que passamos para `PaginaPadrao`, devemos utilizar o children do React. Assim, vamos para o `index.js` de `PaginaPadrao` e receber a prop `children`. E, logo abaixo de `<Outlet />`, escrevemos `{children}`. O código fica assim:

```js
export default function PaginaPadrao({ children }) {
    return (
        <main>
            <Banner />

            <Outlet />
            {children}
        </main>
    )
}
```

Ou seja, deixamos o componente `PaginaPadrao` mais reutilizável, podendo ser utilizado como rota pai ou diretamente como um componente pai. De uma forma ou de outra, `PaginaPadrao` irá renderizar o conteúdo ou em `<Outlet />` ou em `{children}`.

## Scroll To Top

Essa [documentação do Scroll To Top](https://v5.reactrouter.com/web/guides/scroll-restoration/scroll-to-top) é da versão 5 do react-router-dom, mas a solução continua válida para a versão 6 que estamos utilizando.

- [filter](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [sort](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [slice](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)


## Referências

- [documentação oficial do React Router 6](https://reactrouter.com/en/6)
- [Markdown: como trabalhar com essa linguagem de markup?](https://www.alura.com.br/artigos/como-trabalhar-com-markdown)
- [Documentação oficial do Webpack](https://webpack.js.org/)
- [Tutorial do Webpack](https://webpack.js.org/guides/gettingstarted/)