# React: estilize componentes com Styled Components e manipule arquivos estáticos

## Criando app

Na nova versão da documentação do React e até com alguns comunicados oficiais que o time que desenvolve o React trouxe para a comunidade, para criarmos uma aplicação que funciona como uma SPA (Single Page Application), eles não recomendam mais o uso do Creative React App.

Isso quer dizer que teremos um monte de aplicações que já estão no Creative React App e está tudo certo, são as aplicações legadas.

Mas para novas aplicações, eles sugerem o uso do Vite ou do Parcel. E, no nosso caso, vamos usar o Vite [documentação do Vite](https://vitejs.dev/guide/).

> criar uma aplicação vite@latest, ou seja, na última versão da aplicação Vite.

```bash
npm create vite@latest
```

> instalar localmente o create-vite na versão 4.3.2, vamos confirmar a instalação.

```bash
Need to install the following packages:

create-vite@4.3.2

Ok to proceed?(y) #sim = y
```

> entrar na pasta create

```bash
cd space-app
```

> executar o comando npm install para instalar todas as dependências

```bash
npm install
```

> comando subirá o ambiente de desenvolvimento e deixará disponível na porta 5173, por padrão `http://localhost:5173/`. No terminal e executar o atalho "Ctrl + C" para parar o npm run dev

```bash
npm run dev
```

> Instalar o style components [documentação do Styled Components](https://styled-components.com/docs/basics#installation)

```bash
npm install styled-components@latest
```

Essa é uma das formas de estilizar componentes React. Essa técnica é chamada de "CSS in JS" e existem outras alternativas além do Styled Components, mas para nosso caso, vamos continuar com ele.

## Aplicando styled-components

Essa interpolação de string já é preparada para receber código CSS, então podemos fazer propriedade e valor, chave e valor. Então, o que queremos aqui é esse background: linear-gradient

```js
const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
`
```

> Essa extensão `vscode-styled-components` consegue identificar que temos código CSS dentro da interpolação de string.

## CSS-in-JS e SCSS

CSS-in-JS é quando escrevemos os estilos dentro do código JavaScript. Os estilos são tratados como objetos JavaScript e são aplicados ao HTML durante a execução do site. Com isso, podemos mudar os estilos de forma dinâmica com base no que está acontecendo no site. Também temos a vantagem de aplicar os estilos apenas aos componentes específicos em que queremos usá-los. Alguns exemplos populares de bibliotecas CSS-in-JS são styled-components e Emotion.

Já o SCSS é uma extensão do CSS que adiciona alguns recursos legais, como variáveis, mixins e aninhamento de seletores. Com o SCSS, podemos escrever estilos de forma mais eficiente e reutilizável. A sintaxe é bem parecida com o CSS comum, mas com esses recursos extras. Porém, é importante lembrar que o SCSS precisa ser transformado em CSS antes de ser usado pelo navegador. Isso é feito usando ferramentas como Node.js e Sass.

Resumindo, CSS-in-JS é quando escrevemos os estilos dentro do JavaScript, permitindo mais dinamismo e estilos específicos para cada componente. Já o SCSS é uma extensão do CSS que adiciona recursos avançados, mas precisa ser convertido em CSS antes de ser usado pelo navegador.

## Importando as fontes do projeto

Basicamente, precisamos determinar a `font-family `e de onde ela vem, ou seja, a `src` dessa fonte. Esta é a maneira como o CSS importa fontes estáticas.

```jsx
@font-face {
  font-family: ;
  src: url();
}
```

Agora, para combinar React, arquivos estáticos e `styled-components`, vamos fazer o seguinte: acima de `EstilosGlobais`, faremos o `import` da fonte `GandhiSansRegular` a partir da pasta "fontes". Digitaremos o caminho do arquivo como `./fontes/GandhiSans-Regular.otf`.

```jsx
import GandhiSansRegular from './fontes/GandhiSans-Regular.otf'
```

A `src`, em vez de passar a URL diretamente com `url()`, vamos alterar essa sintaxe para `local()`. Dessa forma, dizemos que, localmente, é assim que chamamos a fonte.

Podemos usar um nome mais amigável, então localmente, a fonte se chamará `Gandhi Sans Regular`. Em seguida, usamos `local()` novamente passando o nome da fonte junto (`GandhiSansRegular`).

Por fim, passamos a `url()`. Para essa URL, como estamos fazendo uma interpolação de string, usamos a estrutura `${}` e passamos a fonte `GandhiSansRegular` que acabamos de importar.

```jsx
@font-face {
  font-family: 'GandhiSansRegular';
  src: local('Gandhi Sans Regular'), local('GandhiSansRegular'), url(${GandhiSansRegular});
}
```

Agora temos as duas `font-family: GandhiSansRegular`. Por último, queremos declarar no html que, por padrão, a `font-family` será `GandhiSansRegular`.

```jsx
html {
  line-height: 1.15; 
  -webkit-text-size-adjust: 100%; 
  font-family: GandhiSansRegular;
}
```

## Fontes e suas possíveis extensões

TrueType Font (TTF): É um formato de fonte amplamente utilizado em sistemas operacionais Windows e Mac. É compatível com a maioria dos programas e oferece suporte a recursos avançados, como kerning e hinting.

OpenType Font (OTF): É um formato de fonte desenvolvido pela Adobe e pela Microsoft, que combina os recursos do TrueType e do formato PostScript. O OpenType oferece suporte a recursos avançados, como ligaturas, glifos alternativos e fontes com múltiplos idiomas.

PostScript Font (PS): É um formato de fonte desenvolvido pela Adobe. As fontes PostScript são amplamente utilizadas em impressoras e gráficos profissionais. Elas são baseadas em vetores e fornecem alta qualidade de impressão.

Web Open Font Format (WOFF): É um formato de fonte especialmente projetado para uso na web. O WOFF comprime as fontes para um tamanho menor, o que resulta em tempos de carregamento mais rápidos para páginas da web. O WOFF2 é uma versão mais recente e eficiente do WOFF.

## Utilizando Media Queries

Utilizar as Media Queries do CSS dentro do styled-components para aplicar estilos específicos para diferentes tamanhos de tela. Através da interpolação, você pode definir as regras de estilo para cada Media Query de forma responsiva. Por exemplo:

```jsx
const Container = styled.div`
  /* Estilos para todas as telas */
  width: 100%;

  @media (min-width: 768px) {
    /* Estilos para telas a partir de 768px */
    width: 80%;
  }

  @media (min-width: 1200px) {
    /* Estilos para telas a partir de 1200px */
    width: 60%;
  }
`;
```

## importando elementos de um arquivo estático

**Arquivo estático**
Crie um arquivo JSON com os dados que deseja importar. Por exemplo, o nosso arquivo foto.json com o seguinte conteúdo:

```json
[
  {
    "titulo": "Grande Nuvem de Magalhães",
    "fonte": "Alura Space",
    "path": "/imagens/galeria/foto-1.png",
    "id": "1",
    "tagId": 2
  },
  {
    "titulo": "Via Láctea",
    "fonte": "Alura Space",
    "path": "/imagens/galeria/foto-2.png",
    "id": "2",
    "tagId": 2
  }
]
```

**Importação**
No componente React onde você deseja importar os dados do arquivo JSON, que também pode ser o componente pai, adicione o código de importação no início do arquivo:

```jsx
import fotos from './fotos.json'
```

**Utilização**
Agora basta utilizar o método map para percorrer cada objeto do array de fotos JSON. Em cada iteração, estamos extraindo a propriedade "path" do objeto e renderizando-a no componente JSX. Assim, passamos "path" como props do atributo src da tag para exibir a imagem correspondente. A estrutura simplificada seria:

const Galeria no componente Galeria

```jsx
<ImagensContainer>
{fotos.map(foto => <Imagem
key={foto.id}
foto={foto} />)
}
</ImagensContainer>
```

const Imagem no componente Imagem

```jsx
<img src={foto.path} alt={foto.alt} />
```

## Escolher uma modal

No contexto do React, uma modal dialog ou diálogo, é uma janela ou pop-up que aparece sobre o conteúdo principal da página para exibir informações ou solicitar a interação do usuário. Geralmente, é usado para exibir um diálogo ou uma ação específica, como confirmar uma ação, exibir detalhes adicionais ou fornecer um formulário de entrada.

Ao escolher uma modal dialog para o React você pode optar por qual você quiser de acordo com as bibliotecas disponíveis.

## Referências

- [Entenda de vez o hook useEffect e transforme seu código React](https://marcosviniciosneves.medium.com/entenda-de-vez-o-hook-useeffect-e-transforme-seu-c%C3%B3digo-react-39245296ef7e)