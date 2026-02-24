'use strict'

function adicionarProduto() {
    const produto = document.getElementById('produto')
    const lista = document.getElementById('lista')
    const span = document.createElement('span')

    if (produto.value == '') {
        alert('O campo de produtos não pode estar vazio!')
    } else if (!isNaN(produto.value)){
        alert('O campo de produtos não pode conter somente números!')
    } else {
        span.textContent = produto.value
        span.className = 'bg-blue-200 px-8 py-2'

        lista.appendChild(span)
    }
}