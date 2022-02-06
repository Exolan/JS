let count = 42
let n = -3
let m = -10
let array = [ ]
let i = 0
do{
  array.push(Math.round(Math.random()*(Math.max(n,m)-Math.min(n,m))+Math.min(n,m)))
  i++
}while(i<count)
console.log(array)