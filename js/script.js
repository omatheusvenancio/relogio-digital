function load() {

var msg = window.document.getElementById(`msg`)
var img = window.document.getElementById(`imagem`)
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
var dia = data.getDate()
var mes = data.getMonth()
var ano =  data.getFullYear()

if (hora >= 0 && hora < 12){
    //Bom dia 
    img.scr = "imagem-manha.jpg"
    document.body.style.backgroundColor = "khali"
}
else if (hora >= 12 && hora < 18){
    //Boa Tarde
    img.scr = "img/imagem-tarde.jpg"
    documento.body.style.backgroundColor = "orange"
}
else {
    //Boa Noite
    img.scr = "img/imagem-noite.jpg"
    document.body.style.background = "#21262d"
}

}