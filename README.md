# Produtos

Nesta atividade, utilizamos o *framework* Tailwind para formatação estilo `css`:
```html
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

Aprendemos como "puxar" tags do `html` no `javascript`:
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

Além disso, também aprendemos a criar tags `html` pelo `javascript`, como `span` e `div`, utilizando `document.createElement()`:
```javascript
    const spanCodigo = document.createElement('span')
    const spanProduto = document.createElement('span')
    const spanQtde = document.createElement('span')
```

```javascript
    const linha = document.createElement('div')
```

Da mesma forma, aprendemos a formatar de forma `style` pelo `javascript` utilizando `.className = `:
```javascript
    spanCodigo.className = 'bg-blue-200 px-8 py-2 w-5s h-1s'
    spanProduto.className = 'bg-blue-200 px-8 py-2 w-5s h-1s'
    spanQtde.className = 'bg-blue-200 px-8 py-2 w-5s h-1s'
```

```javascript
    linha.className = 'flex gap-2'
```