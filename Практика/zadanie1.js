function calculator(sum, colvo, promo){
  if (promo == 'ДАРИМ300'){
    sum -= 300
    console.log('Промокод применен, стоимость товаров: ' + sum)
  }
  if (colvo >= 10){
    sum = sum - (sum*0.07)
    console.log('В вашей корзине 10 или более товаров, ваша скидка = 7%, стоимость товара: ' + sum)
  }
  if (sum>50000){
    sum = sum - (sum*0.20)
    console.log('Суммарная стоимость товара более 50000, ваша скидка = 20%, стоимость товара: ' + sum)
  }
  if (promo == 'СКИДКА15' & sum >= 20000){
    sum = sum - (sum*0.15)
    console.log('Стоимость товаров 20000 или более, промокод применен, стоимость товаров: ' + sum)
  }
}
let sum = 100000
let colvo = 10
let promo = 'СКИДКА15'
calculator(sum, colvo, promo)