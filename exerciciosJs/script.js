function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var titulo = window.document.getElementById('titulo')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`


    if (hora >= 0 && hora < 12) {
        img.src = "manha1.png"
        document.body.style.background = '#e2cd9f'
        titulo.innerHTML = "Bom dia"


    } else if (hora >= 12 && hora <=18){
        img.src = 'tarde1.png'
        document.body.style.background = '#9e7652'
        titulo.innerHTML = "Boa Tarde!"


    }else {
        img.src = 'noite1.png'
        document.body.style.background = '#172737'
        titulo.innerHTML = "Boa noite!"
    }
}