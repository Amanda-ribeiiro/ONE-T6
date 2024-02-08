# Em javascript

## Funcao com paramentro

Atribuir valor no javascript para inserir no html

```javascript
let campo = document.querySelector(tag);
campo.innerHTML = texto;
```

outra forma de fazer isso seria por meio de function

```javascript
function campos(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

campos('h1', 'Titulo');
campos('p', 'Paragrafo');
```

## Funcao com retorno

Funcao com retorno

```javascript
function gerarNumeroAleatorio () {
    return parsetInt(Math.radom() * 10 + 1);
}
gerarNumeroAleatorio();
```

## anotacoes

- [Responsive Voice](https://responsivevoice.org/)
- [Vercel](vercel.com)
- [Lógica de Programação Crie seus primeiros programas usando Javascript e HTML](https://www.casadocodigo.com.br/products/livro-programacao?_pos=1&_sid=4661f8240&_ss=r)
- [Lógica de programação com Portugol](https://www.casadocodigo.com.br/products/livro-portugol?_pos=2&_sid=4661f8240&_ss=r)
- [Livro: "Estruturas de Dados e Algoritmos com JavaScript"]()
- [](https://www.google.com.br/books/edition/Estruturas_de_dados_e_algoritmos_com_Jav/0nWKDwAAQBAJ?hl=pt-BR&gbpv=1&dq=estrutura+de+dados+javascript&printsec=frontcover)
- [Site: MDN Web Docs](https://developer.mozilla.org/pt-BR/)
- [Eloquent JavaScript 3rd edition (2018)](https://eloquentjavascript.net/)
- [Algoritmos - Teoria e Prática, Thomas H. Cormen](https://books.google.com.br/books/about/Algoritmos_Teoria_e_Pr%C3%A1tica.html?id=6iA4LgEACAAJ&source=kp_book_description&redir_esc=y)
- [JavaScript: O Guia Definitivo](https://www.amazon.com.br/JavaScript-Guia-Definitivo-David-Flanagan/dp/856583719X/ref=sr_1_1?keywords=javascript&qid=1701835643&sr=8-1&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d)
- [ HTML5 e CSS3 Domine a web do futuro](https://www.casadocodigo.com.br/products/livro-html-css?_pos=2&_sid=ee24eb627&_ss=r)
- [ Guia Front-End O caminho das pedras para ser um dev Front-End](https://www.casadocodigo.com.br/products/livro-guia-frontend?_pos=5&_sid=ee24eb627&_ss=r)
