let massive = [
  {value: 'Женя', label: 'Женя' },
  {value: 'Леша', label: 'Леша' },
  {value: 'Андрей', label: 'Андрей' },
  {value: 'Тимофей', label: 'Тимофей' }
]

let select = document.createElement('select')
let needValue = 'Тимофей'

// function initOption(massive, value = massive[0].value){
//   let option = []

//   for (let i of massive){
//     if (option[i].value == value){
//     option[i] = document.createElement('option');
//     option[i].value = value
//     option[i].textContent = massive[i].label
//     break
//   }
  
//   for (let i in massive){
//     option[i] = document.createElement('option');
//     option[i].value = massive[i].value
//     option[i].textContent = massive[i].label
//     if (option[i].value != value){
//       select.prepend(option[i])
//     } 
//   return select
//   }
// }
// }
function initOption(massive, value = massive[0].value) {
    let option = []
    for (i of massive) {
        if (i.value == value) {
            option[0] = document.createElement('option')
            option[0].textContent = i.label
            option[0].value = value
            select.append(option[0])
        }
    }

    for (i in massive) {
        option[i] = document.createElement("option")
        option[i].textContent = massive[i].label
        option[i].value = massive[i].value
        if (option[i].value != value) {
            select.append(option[i])
        }
    }
    return select
}
let result = initOption(massive, needValue)
document.body.append(result)