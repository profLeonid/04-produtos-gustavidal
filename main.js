'use strict'

function adicionarProduto() {
    const codigo = document.getElementById('codigo')
    const produto = document.getElementById('produto')
    const quantidade = document.getElementById('quantidade')
    
    const spanCodigo = document.createElement('span')
    const spanProduto = document.createElement('span')
    const spanQtde = document.createElement('span')
    
    const lista = document.getElementById('lista')

    const linha = document.createElement('div')

    if (isNaN(codigo.value)) {
        alert('O código deve ser informada somente por números!')
    } else if (!isNaN(produto.value)) {
        alert('O campo de produtos não pode conter somente números!')
    } else if (isNaN(quantidade.value)) {
        alert('A quantidade deve ser informada somente por números!')
    } else if (codigo.value == '' || produto.value == '' || quantidade.value == '') {
        alert('Preencha todos os campos!')
    } else {
        spanCodigo.className = 'bg-blue-200 px-8 py-2 w-5s h-1s'
        spanProduto.className = 'bg-blue-200 px-8 py-2 w-5s h-1s'
        spanQtde.className = 'bg-blue-200 px-8 py-2 w-5s h-1s'

        spanCodigo.textContent = codigo.value
        spanProduto.textContent = produto.value
        spanQtde.textContent = quantidade.value

        linha.className = 'flex gap-2'

        linha.appendChild(spanCodigo)
        linha.appendChild(spanProduto)
        linha.appendChild(spanQtde)

        lista.appendChild(linha)

        codigo.value = ''
        produto.value = ''
        quantidade.value = ''
    }
}