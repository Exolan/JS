//Для перебора всех свойств объекта используют for... in
// for (let key in object){
// key - свойство объекта
// object[key] - значение свойства объекта
// Тело цикла выполняется для всех свойств
// }

//Пример
let salaries = {
  John: 100,
  Ann: 60,
  Pete: 130
}
for (let prop in salaries){
  console.log(prop)
  console.log(salaries[prop])
}

//Задание 1
// let salaries = {
//   John: 100000,
//   Anna: 50000,
//   Pete: 150000
// }
// let sum = 0
// function myFunction(sum){
//   for (let key in salaries){
//   sum += salaries[key]
//   console.log(salaries[key])
// }
// console.log(sum)
// }
// myFunction(sum)

// Еще способы перебрать объект
// Object.keys - создает массив, содержащий свойства объекта
// Object.values - создает массив, содержащий значения свойств объекта
// Object.entries - создает массив массивов. Каждый внутренний массив имеет два элемента. Первый элемент - свойство, второй - значение свойства

// const fruits = {
//   apple: 28,
//   orange: 10,
//   banana: 13
// }

// let keys = Object.keys(fruits)
// let values = Object.values(fruits)
// let entries = Object.entries(fruits)
// console.log(entries)

//Задание 2
// let user = {
//   name: "John",
//   age: 30
// }

// if (Object.keys(user).length == 0){
//   console.log('Объект пуст')
// }
// else{
//   console.log('Объект не пуст')
// }

//typeof и система типов

//console.log(typeof 10) // 'number'
//console.log(typeof '10') // 'string'
//console.log(typeof true) // 'boolean'
//console.log(typeof Symbol('id')) // 'symbol'
//console.log(typeof function(){}) // 'function'
//console.log(typeof {}) // 'object'
//console.log(typeof []) // 'object'

//Задание 3
// let menu = {
// width: 200,
// hight: 300,
// title: 'My menu'
// }
// function myFunction(menu){
//   for (let key in menu){
//   if (typeof menu[key] == 'number'){
//     menu[key] = menu[key] * 2
//     console.log(menu[key])
//   }
//   }
// }

// myFunction(menu)

// Деструктуризация - это особый синтаксис, позволяющий извлекать значение из массива (объекта) и записывать их в новые переменные с минимум кода
// function test({width, hight}){
//   console.log(width)
//   console.log(hight)
// }
// test(menu)
