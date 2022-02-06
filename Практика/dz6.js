  let count = 100
  let n = 1
  let m = 25
  let array = [ ]
  let i = 0
  do{
    array.push(Math.round(Math.random() * (Math.max(n,m) - Math.min(n,m)) + Math.min(n,m)))
    i++
  }while(i < count)
  console.log(array)