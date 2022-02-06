//1
/*let roadMines = [true, false, false, false, false, false, false, false, false, true]
i = 0
chetchik = 0
do{
    if (roadMines[i]==true){
        console.log("Танк подорвали")
        chetchik++
        if (chetchik == 2){
            console.log("Танк уничтожен")
            break
        }
    }
    else{
        console.log("Танк продолжает ехать")
    }
    i++
    if (i == 10){
        console.log('Танк проехал маршрут')
    }
        
}while(i<10)*/

//2
let array = []
let dni = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
for (let i = 1; i<=31; i++){
    array.push(i)
    console.log(`${i} января, ${dni[i%7]}`)
}