const play = document.getElementById('play-pause')
const audioCap = document.getElementById('audio-cap')
const next = document.getElementById('proximo')
const previous = document.getElementById('anterior')
const cap = document.getElementById('cap')
let faixa = false
let capAtual = 1
cap.innerHTML = `Capitulo:${capAtual}`
function tocarFaixa(){
    audioCap.play()
}
function pausarFaixa(){
    audioCap.pause()
}

play.addEventListener('click',()=>{
    if(faixa == false){
        tocarFaixa()
        faixa = true
        play.classList.remove('bi-play-circle-fill')
        play.classList.add('bi-stop-circle-fill')
    }else{
        pausarFaixa()
        faixa = false
        play.classList.remove('bi-stop-circle-fill')
        play.classList.add('bi-play-circle-fill')
    }                                     
})


next.addEventListener('click',()=>{
    if(capAtual == 10){
        capAtual = 1
        
    }else{
        capAtual++
    }
    cap.innerHTML = `Capitulo:${capAtual}`
    console.log(capAtual)
    audioCap.src = 'books/dom-casmurro/'+ capAtual +'.mp3'
})

previous.addEventListener('click',  () => {
    if (capAtual==1) {
       capAtual = 10   
    } else {
        capAtual--   
    }
    cap.innerHTML = `Capitulo:${capAtual}` 
    audioCap.src = 'books/dom-casmurro/'+ capAtual +'.mp3'
})

function atualizacao(){

}

