/*
let resultado = document.querySelector('resultado');
let input = document.querySelector('r');
let botao = document.querySelector('botao');

document.addEventListener('click', function(e){
  const el = e.target;
  if(el.classList.contains('botao')){
    console.log('voce clicou aqui')
    resultado.innerHTML = 'esta funcionado';
  }
  else{
    h1.innerHTML = 'esta funcionado';
  }

  
  
  
})

function calcularArea(){
  let resultado = document.querySelector('resultado');
  resultado.innerHTML = "este e o resultado";
  
}




calcularArea();
*/
var pScore = 1

function play(choice){
  var iaChoice = Math.floor(Math.random() * 3) + 1
  console.log(iaChoice)
  if(
    (iaChoice == 1 && choice == 3) ||
    (iaChoice == 2 && choice == 1) ||
    (iaChoice == 3 && choice == 2)
    
  ){
    console.log('ia venceu')
    
     winner = "IA"
    
  }else if(choice == iaChoice){
    console.log("empate")
    
    winner = "no one"
  }else{
    
    console.log("o player venceu")
     winner = "player"
    pScore++
    
  }
  var res = document.getElementById("resultado")
  res.innerHTML = winner + " wins!!"
  var placar = document.getElementById("placar")
  placar.innerHTML = "player: " +pScore+ " x " +iaScore + "IA"

 
}
/*
var timerId  
function teste(){
  timerId = setTimeout(borboleta, 2000)
}



function borboleta(){
  alert('voce iniciou')
}

function cancelar(){
  clearInterval(timerId)
  alert('cancelado')
}
*/

var iniciar 
var pausar
var zerar 
var div 
var tempo = 0
var timerId



function init(){
  iniciar = document.getElementById('iniciar')
  pausar = document.getElementById('pausar')
  zerar = document.getElementById('zerar')
  divTempo = document.getElementById('tempo')

  iniciar.onclick = start
  pausar.onclick = pause
  zerar.onclick = reset
    
  pausar.disabled = true
  zerar.disabled = true
}
function update(){
  tempo = tempo + 0.1
  divTempo.innerHTML = tempo.toFixed(1) + "s"
} 
function start(){
  iniciar.disabled = true
  pausar.disabled = false
  zerar.disabled = false

  timerId = setInterval(update, 100)
}

function pause(){
  clearInterval(timerId)

  iniciar.disabled = false
  pausar.disabled = true
}

function reset(){
  clearInterval(timerId)
  tempo = 0
  divTempo.innerHTML = '0.0s'
  iniciar.disabled = false
  pausar.disabled = true
  zerar.disabled = true
}

init()







function converter(){
  var moedaIn = document.querySelector('input[name="in"]:checked')
  //var min = moedaIn.value

  var moedaOut = document.querySelector('input[name="out"]:checked')
  var mout = moedaOut.value

  var input = document.getElementById("quantia")
  var valorOriginal = input.value

  var valorEmReal = 0
  if(moedaIn == "dolar"){
    valorEmReal = valorOriginal * 4.67
  }else if(moedaIn == "euro"){
    valorEmReal = valorOriginal * 5.06
  }else if(moedaIn == "libra"){
    valorEmReal = valorOriginal * 6.08
  }else {
    valorEmReal = valorOriginal
  }

  var valorConvertido = 0
  
  if(mout == "dolar"){
    valorConvertido = valorEmReal * 0.21
  }else if(mout == "euro"){
    valorConvertido = valorEmReal * 0.20
  }else if(mout == "libra"){
    valorConvertido = valorEmReal * 0.16
  }else {
    valorConvertido = valorEmReal
  }
  var spanOut = document.getElementById("res")
  spanOut.innerText = valorConvertido
}