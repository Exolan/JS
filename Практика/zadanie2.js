function myFunction()
{
  let start = 4;
  let finish = 10;
  let diapos = finish-start;
  let num = Math.round(Math.random()*diapos + start);
  num%2==0?console.log(num, "Число делится без отстатка на 2"):console.log(num,"Число не делится без остатка на 2");
} 
myFunction();