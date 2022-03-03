let botNum = Math.round(Math.random()*20)
alert('Бот загадал число от 0 до 20. Попробуйте угадать это число')

botGame(botNum)

function botGame(botNum){
  while (true){

    let userNum = prompt('Введите число от 0 до 20')
    
    if (userNum == null){
      alert('Досвидания!')
      break
    }

    else{

      if (botNum > Number(userNum)){
        alert('Ваше число меньше! Попробуйте еще раз')
      }

      else if(botNum < Number(userNum)){
        alert('Ваше число больше! Попробуйте еще раз')
      }

      else if(botNum == Number(userNum)){
        alert('Вы угадали!')
        break
      }

      else{
        alert('Введите число!')
      }

    }
  }
}


