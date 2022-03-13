let output = document.querySelector(".output")
let keys = document.querySelectorAll('.key')
let opers = document.querySelectorAll('.operation')
let takeRes = 0
for (let key of keys){
  key.addEventListener('click', ()=>{
    switch(key.innerHTML){
      case 'Del':
        output.innerHTML = '0'
        break;
      case '=':
        output.innerHTML = eval(output.innerHTML).toFixed(2)
        takeRes=1
        break;
      default:
        if (output.innerHTML==0||takeRes==1){
          output.innerHTML = ''
          takeRes = 0
        }
        output.innerHTML += key.innerHTML
    }
  })
}

for (let op of opers){
  op.addEventListener('click', ()=>{
    if(output.innerHTML.slice(-1)!=op.innerHTML){
      output.innerHTML += op.innerHTML
    }
  })
  
}