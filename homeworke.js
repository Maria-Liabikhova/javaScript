// 03/07/2020 Home Worke

// 1. Написать функцию, isString(el) 
// которая при передаче в нее строки будет выводить сообщение 'this is a string', 
// во всех остальных случая 'error this isn't a string'

// const output = isString();
// console.log(output);

// function isString(input) {
//   if (typeof input == 'string') return 'this is a string'; 
//   return "error this isn't a string"
// }
// TASK 1 END




// 2. Счастливая семерка, реализуйте функцию luckySeven(el), при передачу в которую она 
// будет выводить в консоль собщение 'lucky seven is : символ из вашей строки на 7 позиции'.
// Пример  luckySeven('Hi Masha') => 'lucky seven is : h'

// const luckySeven = 'Hi Aleksandr :)'
// console.log('lucky seven is : '+ luckySeven[7])
// TASK 2 END



// 3. Голосуй правильно - спаси страну, некоторые несознательные 
// граждане еще вредят нашей стране, думают и пытаются голосовать 
// сами, исправим это fairElections(string) на вход функции 
// передается строка вида `ФИО проголосовал ДА(НЕТ)`, 
// нужно обработать эту строку и сделать правильный выбор, 
// fairElections(`Иванов Иван Иваныч проголосовал НЕТ`) => 
//  `Иванов Иван Иваныч проголосовал ДА`

// let fairElections = "Иванов Иван Иваныч проголосовал НЕТ"
// console.log(fairElections.replace("НЕТ","да"))


// Другой вариант:
// let voise = 'Нет';
// let name = 'Иванов Иван Иванович'
 
// function fairElections(voise){
// if (voise !== 'Да') {
//   console.log('Да');
// }
// else 
//   console.log('Да');
// }
// console.log(name + " проголосовал " + voise)
// TASK 3 END


// 4. Отметим правильных граждан, rewardRightChoice(`ФИО проголосовал ДА(НЕТ)`), если проголосовал ДА => 
// `ФИО проголосовал ДА и получил дополнительную прибавку к пенсии 23 руб 30 копеек.`, если проголосовал НЕТ => 
// `ФИО проголосовал ДА, и получил штраф 5 тыс руб за нарушение общественного порядка при голосовании`.

// rewardRightChoice('нет')
// function rewardRightChoice(voise){
//   if (voise === 'ДА'){
//     console.log('прибавка к пенсии 23 руб 30 копеек')
//   }
//   else if (voise === 'Да'){
//     console.log('прибавка к пенсии 23 руб 30 копеек')
//   }
//   else if (voise === 'да'){
//     console.log('прибавка к пенсии 23 руб 30 копеек')
//   }
//   else if (voise === 'дА'){
//     console.log('прибавка к пенсии 23 руб 30 копеек')
//   }
//   else
//     console.log('штраф 5 тыс руб за нарушение общественного порядка при голосовании')
// }
// TASK 4 END



// РАБОТА НАД ОШИБКАМИ
// 2. Счастливая семерка, реализуйте функцию luckySeven(el), при передачу в которую она 
// будет выводить в консоль собщение 'lucky seven is : символ из вашей строки на 7 позиции'.
// Пример  luckySeven('Hi Masha') => 'lucky seven is : h'


// let message = "Hi Aleksandr :)"
// function luckySeven () {
//   console.log('lucky seven is : '+ message[6])
// }
// luckySeven()
// TASK 2 END

// luckySeven("Hi Aleksandr :)")
// function luckySeven (message) {
//   return console.log('lucky seven is : '+ (message)[6])
// }
// TASK 2 END


// luckySeven("Hi Aleksandr :)")
// function luckySeven (message) {
//   console.log('lucky seven is : '+ (message)[6])
//   return true
// }
// TASK 2 END




// РАБОТА НАД ОШИБКАМИ
// 3. Голосуй правильно - спаси страну, некоторые несознательные 
// граждане еще вредят нашей стране, думают и пытаются голосовать 
// сами, исправим это fairElections(string) на вход функции 
// передается строка вида `ФИО проголосовал ДА(НЕТ)`, 
// нужно обработать эту строку и сделать правильный выбор, 
// fairElections(`Иванов Иван Иваныч проголосовал НЕТ`) => 
//  `Иванов Иван Иваныч проголосовал ДА`

// fairElections("Иванов Иван Иваныч проголосовал НЕТ")
// function fairElections(message){
//   return console.log((message).replace("НЕТ", "да"))
// }
// TASK 3 END




// 5. Криворукий помощник, неправильно забил кучу рекламных текстов для нашего магазина, 
// перепутал рубли и доллары. реализуйте fixUsdToRub
// (`Новые кроссовки Nike Air Max по цене 12 250usd`) => `Новые кроссовки Nike Air Max по цене 12 250руб`

// fixUsdToRub("12 250 usd")
// function fixUsdToRub(price){
//   return console.log((price).replace("usd", "руб"))
// }
// TASK 5 END



// 6. Обрежь это. Для блока новости на главной странице, нам нужна лишь часть новости для заголовка. 
// Реализуйте функцию cutNews(`Рост российской валюты начался на фоне укрепления нефтяных котировок со среды, 1 июля. 
// К утру четверга сентябрьский фьючерс сорта Brent вырос до 42,41 доллара за баррель. 
// Августовский фьючерс WTI поднялся выше 40 долларов. Главные российские индексы, Мосбиржа и РТС, 
// также растут — на 0,8 и 1,8 процента соответственно.`) => `Рост российской валюты...`  . 
// Которая оставит лишь первые 22 символа и добавит ...


// cutNews(`Рост российской валюты начался на фоне укрепления нефтяных котировок со среды, 1 июля. 
// К утру четверга сентябрьский фьючерс сорта Brent вырос до 42,41 доллара за баррель. 
// Августовский фьючерс WTI поднялся выше 40 долларов. Главные российские индексы, Мосбиржа и РТС, 
// также растут — на 0,8 и 1,8 процента соответственно.`)

// function cutNews(text){
//   return console.log((text).substr(0, 22) + "...")
// }
// TASK 6 END

// Функция slice
cutNews(`Рост российской валюты начался на фоне укрепления нефтяных котировок со среды, 1 июля. 
К утру четверга сентябрьский фьючерс сорта Brent вырос до 42,41 доллара за баррель. 
Августовский фьючерс WTI поднялся выше 40 долларов. Главные российские индексы, Мосбиржа и РТС, 
также растут — на 0,8 и 1,8 процента соответственно.`)

function cutNews(text){
  return console.log((text).slice(0, 22) + "...")
}
// TASK 6 END