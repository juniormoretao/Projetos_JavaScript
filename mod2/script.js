function somar(){
    var tn1 = document.getElementById('textn1')
    var tn2 = document.querySelector('input#textn2')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerText = ` A soma entre ${n1} e ${n2} é igual a ${s}`
}