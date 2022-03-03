// Задание 1
// let button = document.querySelector('.button')
// function eventAlert(){
//   alert('Привет, мир!')
// }
// button.onclick = eventAlert

// Задание 2
// let button = document.querySelector('.button')
// let input = document.querySelector('.input')
// button.onclick = function eventClick(){
//   input.value = 'test@mail.ru'
// }

// Задаине 3
// let button = document.querySelector('.button')
// let input = document.querySelector('.input')
// button.onclick = function eventClick(){
//   if (input.value == ""){
//     alert('Вы ничего не ввели!')
//   }
//   else{
//     alert('Вы ввели текст!')
//   }
// }

// Задание 4
// let button = document.querySelector('.button')
// let input1 = document.querySelector('.input1')
// let input2 = document.querySelector('.input2')
// button.onclick = function eventRotate(){
//   let arrayValue = [input1.value, input2.value]
//   input1.value = arrayValue[1]
//   input2.value = arrayValue[0]
// }

// Задание 5
// let button1 = document.querySelector('.button1')
// let button2 = document.querySelector('.button2')
// let input = document.querySelector('.input')
// button1.onclick = function eventUnblock(){
//   input.disabled = false
// }
// button2.onclick = function eventBlock(){
//   input.disabled = true
// }

// Задание 6
// let button = document.querySelector('.button')
// let square = document.querySelector('.square')
// button.addEventListener('click', () => {
//   if (button.innerHTML == "Убрать"){
//     square.style = "background-color: white"
//     button.innerHTML = "Показать"
//   }
//   else{
//     square.style="background-color: blueviolet"
//     button.innerHTML = "Убрать"
//   }
// })

// Задание 7
// let square = document.querySelector('.square')
// square.addEventListener('mouseenter', () => {
//   square.style = "background-color: green" 
// })
// square.addEventListener('mouseleave', () => {
//   square.style = "background-color: red" 
// })

//Задание 8 НЕ ПОЛУЧИЛОСЬ
// let square = document.getElementsByClassName('squareRed')
// let arrayColor = ["squareRed", "squareGreen"]
// for (let i in square){
//   console.log(square[i])
//   square[i].addEventListener('click', () =>{
//      square[i].class = arrayColor[2]
//    })
// }