function filter(objects, searchWhere, searchWhat){
  let result = []
  for (let i of objects){
    if (i[searchWhere]===searchWhat){
      result.push(i)
    }
  }
  console.log(result)
}

let searchWhere = 'name'
let searchWhat = 'Евгений'

let objects = [
  {name: 'Евгений', surname: 'Бачурин'},
  {name: 'Алексей', surname: 'Громов'},
  {name: 'Тимофей', surname: 'Рябов'},
  {name: 'Андрей', surname: 'Кузнецов'},
  {name: 'Евгений', surname: 'Зайцев'}
]

filter(objects, searchWhere, searchWhat)




