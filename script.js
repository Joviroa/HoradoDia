
function carregar() {
var bg= document.body  //pega o body pra colocar o background
var titulo= document.querySelector('h1#title')   //titulo
var msg= document.querySelector('div#msg')      //mensagem acima da imagem
var img= document.querySelector('img#imagem')   //imagem
var data= new Date()   //pega a data
var hora= data.getHours() //pega a hora

msg.innerHTML = `Agora são ${hora} horas.`

if(hora>=12 && hora<18){
    titulo.innerHTML= 'Boa Tarde'
    bg.style.background= 'rgb(97, 60, 11)'
    img.src= 'Imagens/tarde.png'
}else if(hora>=18){
    titulo.innerHTML= 'Boa Noite'
    bg.style.background= 'rgb(46, 46, 46)'
    img.src= 'Imagens/noite.png'
}else if(hora<6){
    titulo.innerHTML= 'Boa Madrugada'
    bg.style.background= 'rgb(30, 30, 30)'
    img.src= 'Imagens/noite.png'
}else{
    titulo.innerHTML= 'Bom Dia'
    bg.style.background= 'rgb(25, 82, 2)'
    img.src= 'Imagens/manha.png'
}

}





