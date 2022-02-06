let array=["evjekddd@mail.ru", "afasfdgg@mail.ru", "mopvmzpombpz@mail.ru", "gsgsgssc@mail.ru"]
let arraychs=["afasfdgg@mail.ru", "mopvmzpombpz@mail.ru","evjekddd@mail.ru"]
function filter(array, arraychs){
  let arrayclear=[]
  for (let i = 0; i<array.length;i++){
    let znach = false
    znach = arraychs.includes(array[i])
    if(znach==false){
      arrayclear.push(array[i])
    }
  }
  console.log(arrayclear)
}
filter(array, arraychs)
  