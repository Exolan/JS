function filter(objects, searchWhere, searchWhat){
  let result = []
  let nalichie = false
  for (let i of objects){
    if (i[searchWhere]===searchWhat){
      nalichie = true
      result.push(i)
    }
  }
  if (nalichie == false){
    console.log("Такого свойства или значения нет в массиве!")
  }
  else{
    console.log(result)
  }
  
}

let searchWhere = 'name'
let searchWhat = 'Евгений'

let objects = [
  {name: 'Евгений', surname: 'Бачурин'},
  {name: 'Алексей', surname: 'Громов'},
  {name: 'Тимофей', surname: 'Рябов'},
  {name: 'Андрей', surname: 'Кузнецов'},
  {name: 'Евгений', surname: 'Рябов'}
]

filter(objects, searchWhere, searchWhat)




