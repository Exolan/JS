let str = 'abcde';
function myFunction()
{
  let i=0;
  while (i<5) 
  {
    console.log(str[i]);
    i++;
    i%2==0?i++:i+0;
  }
}
myFunction(str);

/*let i = 0;
while (i<5) 
{
  console.log(str[i]);
  i++;
  i%2==0?i++:i+0;
}*/

/*console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);*/