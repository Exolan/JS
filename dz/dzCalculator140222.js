'use strict'
let a = 10
let b = 13

function calculator(a,b){
  let obj ={
    num1: a,
    num2: b,
    sum: function() {
      return this.num1 + this.num2
    },
    mul: function() {
      return this.num1 * this.num2
    }
  }
  console.log(obj.num1, obj.num2, obj.sum(), obj.mul())
}

calculator(a, b)