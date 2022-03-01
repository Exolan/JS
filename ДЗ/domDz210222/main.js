// let massive = [
//   {value: 'Женя', label: 'Женя' },
//   {value: 'Леша', label: 'Леша' },
//   {value: 'Андрей', label: 'Андрей' },
//   {value: 'Тимофей', label: 'Тимофей' }
// ]
let massive = [1, 'Леша', {value: 'Как', label: 'Как'}, 'Тимофей']

let select = document.createElement('select')
let needValue = 'Тимофей'

function treatmentMassive(massive){
    for (i in massive){
        if (typeof massive[i] != 'object'){
            massive[i] = {value: massive[i], label: massive[i]}
        }
        else if (typeof massive[i] == 'object'){
            massive[i] = {value: massive[i].value, label: massive[i].label}
            
        }

    }
    return massive
}

let resultMassive = treatmentMassive(massive)

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
let result = initOption(resultMassive, needValue)
document.body.append(result)