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
