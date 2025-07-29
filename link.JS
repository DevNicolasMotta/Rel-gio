function carregar() {

    var img = window.document.getElementById('img')
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var horas = data.getHours()
    
    msg.innerHTML = `agora são ${horas} horas`
    
    if (horas >= 6 && horas < 12) {
        //bom dia
        img.src = 'img/fotomanha.png.png'
        document.body.style.background = 'blue'
    } else if (horas >= 12 && horas < 18) {
        // boa tarde
        img.src = 'img/fototarde.png.png'
        document.body.style.background = 'orange'
    }else if (horas >= 18 && horas < 23){
        //boa noite
        img.src = 'img/fotonoite.png.png'
        document.body.style.background = 'purple'
    } else {
        //boa madrugada
        img.src = 'img/fotomeianoite.png'
        document.body.style.background = 'black'
    }
}
