let squares = document.querySelectorAll('.square')
for(let square of squares){
  square.addEventListener('click', ()=>{
    if (square.style.backgroundColor == "red"){
    square.style.backgroundColor = "green"

    for(let anotherSquare of squares){
      if(anotherSquare != square){
        anotherSquare.style.backgroundColor = 'red'
      }
    }
  }
  else{
    square.style.backgroundColor = "red"
  }
  })
}


