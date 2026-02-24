# Produtos

Nesta atividade aprendemos como "puxar" tags do `html` no `javascript`. Veja abaixo:

```html
    <input 
        type="text"
        class="border p-2 rounded"
        id="codigo"
        placeholder="Código do produto"
    >
```

```javascript
    const codigo = document.getElementById('codigo')
```

Além disso, também aprendemos a criar tags `html` pelo `javascript`, como `span` e `div`:

```javascript
    const spanCodigo = document.createElement('span')
    const spanProduto = document.createElement('span')
    const spanQtde = document.createElement('span')
```

```javascript
    const linha = document.createElement('div')
```