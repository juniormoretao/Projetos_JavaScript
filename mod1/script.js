/* var n1 = Number(window.prompt('Digite um numero'))
var n2 = Number(window.prompt('Digite outro numero'))
var soma = n1 + n2

//window.alert('A soma do resultado é: ' + soma )
window.alert(`A soma entre ${n1} e ${n2} é igual a ${soma}`) //mesma coisa que acima com a concatenação */
//-------------------------------------------------------------------------------------------
var a = document.getElementById('area')
    a.addEventListener('click', clicar)
    a.addEventListener('mouseenter', entrar)
    a.addEventListener('mouseout', sair)


    function clicar(){
        a.innerText = "Clicou"
    }

    function entrar(){
        a.innerText = "Entrou"
    }
    
    function sair(){
        a.innerText = "Saiu"
    }

    