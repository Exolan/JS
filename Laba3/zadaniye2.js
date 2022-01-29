let name1 = "Женя"
let surname = "Бачурин"
let truename = name1.slice(0,1).toUpperCase() + name1.slice(1).toLowerCase()
let truesurname = surname.slice(0,1).toUpperCase() + surname.slice(1).toLowerCase()
console.log(truename, truesurname)
if (truename==name1)
{
  console.log("Имя осталось без изменений")
}
else
{
  console.log("Имя преобразовано")
}
if (surname==truesurname)
{
  console.log("Фамилия осталась без изменений")
}
else
{
  console.log("Фамилия преобразована")
}