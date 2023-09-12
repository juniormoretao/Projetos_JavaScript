function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement("img")
        img.setAttribute('id', 'foto');
        if(fsex[0].checked){
            gen = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','criança2M.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem2M.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto2M.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso2M.png')
            }
           //--------------------------------------------- 
        }else if (fsex[1].checked) {
            gen = 'Mulher'
            if(idade >=10 && idade < 10){
                //criança
                img.setAttribute('src', 'criança2F.png')

            } else if (idade <21){
                img.setAttribute('src', 'jovem2F.png')
                //jovem
            } else if (idade <50){
                img.setAttribute('src', 'adulto2F.png')
                
            } else {
                //idoso
                img.setAttribute('src','idosa2F.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}

