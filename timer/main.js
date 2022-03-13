let button = document.querySelector('.button')
let input = document.querySelector('.input')
let time = null
function timer(){
  if(input.value!=0){
    input.value = parseInt(input.value)-1
  }
  else{
    button.innerHTML='Пуск'
  }
}

button.addEventListener('click', ()=>{
  if (button.innerHTML == 'Пуск'){
    time = setInterval(timer, 1000)
    button.innerHTML = 'Стоп'
  }
  else{
    button.innerHTML = 'Пуск'
    clearInterval(time)
  }
  
})