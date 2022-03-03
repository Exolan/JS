let array = [
  {value: 'Женя', label: 'Женя'},
  {value: 'Леша', label: 'Леша'},
  {value: 'Андрей', label: 'Андрей'},
  {value: 'Тимофей', label: 'Тимофей'}
]

let select = document.createElement('select')
// let result = initOption(array, 'Андрей')
// document.body.append(result)

// function initOption(array, value = array[0].value){

//   let option = []

//   for (i of array){
//     if (i.value == value){
//       option[0] = document.createElement('option')
//       option[0].value = value
//       option[0].textContent = i.label
//       select.append(option[0])
//     }
//   }

//   for (i of array){
//     option[i] = document.createElement('option')
//     option[i].value = i.value
//     option[i].textContent = i.label
//     if (option[i].value != value){
//       select.append(option[i])
//     }
//   }
//   return select
// }






function initOption(array, value = massive[0].value) {
    let option = []

    for (i of array) {
        if (i.value == value) {
            option[0] = document.createElement('option')
            option[0].textContent = i.label
            option[0].value = value
            select.append(option[0])
        }
    }

    for (i in array) {
        option[i] = document.createElement("option")
        option[i].textContent = array[i].label
        option[i].value = array[i].value
        if (option[i].value != value) {
            select.append(option[i])
        }
    }
    return select
}
let result = initOption(array, 'Андрей')
document.body.append(result)
