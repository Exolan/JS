let output = document.querySelector('.output')

let numbers = []

let schetMult=0
let schetSum=0
let schetDiv=0
let schetMinus=0

let res

let num = document.querySelectorAll(".num")
for(let i=0; i<num.length; i++){
  num[i].onclick=function(){
    output.innerHTML+=String(num[i].value)
  }

}
let sub = document.querySelectorAll(".sub")
for(let i=0; i<sub.length; i++){
  let schetPoint = 0
  sub[i].onclick=function(){
    if(sub[i].value == 'point'){
      schetPoint += 1
      if(schetPoint == 1){
        if(output.innerHTML != ''){
          output.innerHTML += "."
        }
        else{
          alert('Точка первая?)')
          
        }
        
      }
      else if(output.innerHTML.indexOf(".")>0){
        alert('Две точки?)')
      }
      else{
        schetPoint = 0
      }
    
    }
    else if(sub[i].value == 'back'){
      output.innerHTML = output.innerHTML.substring(0, output.innerHTML.length-1)
      numbers.pop()
    }
    else if(sub[i].value == 'del'){
      output.innerHTML=""
      numbers = []
    }
    else if(sub[i].value == 'enter'){
      numbers.push(Number(output.innerHTML))
      output.innerHTML=""
      if(schetMult>0){
        res = numbers[0] * numbers[1]
        alert(res)
      }
      else if(schetSum>0){
        res = numbers[0] + numbers[1]
        alert(res)
      }
      else if(schetMinus>0){
        res = numbers[0] - numbers[1]
        alert(res)
      }
      else if(schetDiv>0){
        res = numbers[0]/numbers[1]
        alert(res)
      }
      numbers = []
      schetMult=0
      schetSum=0
      schetDiv=0
      schetMinus=0
    }
  }
  
}
let op = document.querySelectorAll('.op')
for(let i=0; i<op.length; i++){
  op[i].onclick = function(){
    numbers.push(Number(output.innerHTML))
    if (numbers.length < 2){
      if (op[i].value == 'mult'){
        schetMult +=1
        output.innerHTML = ""
      }
      else if (op[i].value == 'sum'){
        schetSum +=1
        output.innerHTML = ""
      }
      else if (op[i].value = 'minus'){
        schetMinus +=1
        output.innerHTML = ""
      }
      else if (op[i].value = 'div'){
        schetDiv +=1
        output.innerHTML = ""
      }
    }
    else{
      alert('Пока что калькулятор может считать только два числа(')
    }
  }
  
}
