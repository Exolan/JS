let n = 100
let m = -5
let range = Math.abs(Math.max(n,m)-Math.min(n,m))-2
let randomnum = (Math.round((Math.random() * range) + Math.min(n,m)))
let result = randomnum + (randomnum % 2) + 1
console.log(result)