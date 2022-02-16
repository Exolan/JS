// let obj = {
//   'Коля': '1000',
//   'Вася': '500',
//   'Петя': '200'
// }
// console.log(obj['Коля'])

// let array = [{name:'Женя', age: 18}, {name:'Леша', age: 19}, {na'Андрей': 30}]
// function myFunction(array){
//   let str = []
//   for (i of array){
//     str.push(`${i.name} ${i.age}`)
//   }
//   return str
// }
// let string = myFunction(array)
// console.log(string)



// let user = [
//   {name: 'John', age: 30},
//   {name: 'Bob', age: 21},
//   {name: 'Anna', age: 19}
// ]
// let name1
// for (i of user){
//   console.log(i)
//   if (i.name == 'Bob'){
//     name1 = i
//   }
  
// }
// for (i in user){
//   console.log(i)
//   if (user[i].name == 'Anna'){
//     delete user[i]
//   }
// }

// console.log(user)
// console.log(name1)

let name = 'Женя'
let surname = 'Бачурин'
function myFunction(){
  console.log(this.name, this.surname)
}

let obj = {
  name,
  surname,
  myFunction
}
obj.myFunction()

