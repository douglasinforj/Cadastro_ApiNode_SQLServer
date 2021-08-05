const listaClientes = () => {
    return fetch(`http://localhost:3003/clientes`)
    .then( resposta => {
        return resposta.json()
    })
}

listaClientes()
.then(data =>{
    data.forEach(elemento =>{
        tabela.appendChild(criaNovaLinha(elemento.id,elemento.nome, elemento.email))
    })
})

const criaNovaLinha = (id, nome, email) => {
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
                    <td>${id}</td>
                    <td>${nome}</td>
                    <td>${email}</td>
    `
    linhaNovoCliente.innerHTML = conteudo
    return linhaNovoCliente
}
 
const tabela = document.querySelector('[data-tabela]')


//Cadastras clientes

const criarCliente = (nome, email) => {
    return fetch(`http://localhost:3003/clientes`,{
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
        
    }).then(resposta => {
        return resposta.body
    })
}

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    var nome = evento.target.querySelector('[data-nome]').value
    var email = evento.target.querySelector('[data-email]').value
    criarCliente(nome, email)
    .then(()=>{
        window.location.href = './cadastro_sucesso.html'
    })
})


