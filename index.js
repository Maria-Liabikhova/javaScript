// let a = 5
// console.log(a++);
// console.log(a);





// let a = 'red'
// let b = 'blue'

// let c = a;
// a = b;
// b = c; 

// console.log(a);
// console.log(b);




// 1-1 if...else
// let hour = 20;

// if (hour >= 6 && hour < 12) {
//   console.log('Good morning');
// }
// else if ( hour >= 12 && hour < 18) {
//   console.log('Good afternoon');
// }
// else 
//   console.log('Good evening');


// 2. 2- Switch...case
// let role = 'guest' ;

// switch (role) {
//   case 'guest':
//     console.log('Guest User');
//     break;

//   case 'modarator':
//     console.log('Modarator User');
//     break;

//   default:
//     console.log('Undefined user');
// }


// if (role === 'guest'){
//   console.log('Guest User');
// }
// else if (role === 'moderator'){
//   console.log('Modarator User');
// }
// else
//   console.log('Undefined user');






// LOOPS
// 3. 3- For
// for (let i = 0; i < 5; i++) {
//   console.log('Hello world', i);
// }


// for (let i = 1; i <= 5; i++) {
//   console.log('Hello world', i);
// }

// for (let i = 1; i <= 5; i++) {
//   if (i % 2 !==0) console.log(i);
// }

// for (let i = 5; i >= 1; i--) {
//   if (i % 2 !==0) console.log(i);
// }




// 4. 4- While
// let i = 0;
// while (i <= 5) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }


// 5. 5- Do...While
// let i = 9;
// do {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// } while (i <= 5);


// 6. 6- Infinite Loops
// let i = 0;
// while(i < 5) {
//   console.log(i);
//   i++;
// }


// 7. 7- For...In
// const person = {
//   name: 'Mosh',
//   age: 30
// };

// for (let key in person)
//   console.log(key, person [key]);


//   const colors = ['red', 'green', 'blue'];

//   for (let index in colors)
//     console.log(index, colors[index]);



// 8. 8- For...of
// const colors = ['red', 'green', 'blue'];
// for (let color of colors)
//   console.log(color)


// 9. 9- Break and Continue
// let i = 0;
// while (i <= 10) {
//   if (i === 5) break
//   console.log(i);
//   i++;
// }


// let i = 0;
// while (i <= 10) {
//   if (i % 2 === 0) {
//   i++;
//   continue;
// }
//   console.log(i);
//   i++;
// }







// 22 июня 2020
// 10. 10- Max of Two Numbers

// let number = max(5, 10);
// console.log(number);

// function max(a, b) {
//   if (a > b) return a;
//   else return b;
// }

// function max(a, b) {
//   return (a > b) ? a : b;
// }




// 11. 11- Exercise- Landscape or Portrait
// console.log(isLandscape(300, 600))
// function isLandscape(width, height) {
  // if (width  > height) return true;
  // return false;

//   return (width > height);
// };




// 12. 12- Exercise- FizzBuzz
// const output = fizzBuzz(15);
// console.log(output);

// function fizzBuzz(input) {
//   if (typeof input !== 'number') return 'Not a number';
  
//   if ((input % 3 === 0) && (input % 5 === 0))
//     return 'FizzBuzz';

//   if (input %3 === 0)
//     return 'Fiz'

//   if (input % 5 === 0)
//     return 'Buzz'
 
//   return input;
// };




// 13. 13- Exercise- Demerit Points
// checksSpeed(180)

// function checksSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if (speed < speedLimit + kmPerPoint){
//     console.log('ok');
//     return;
//   }
//     const points = Math.floor ((speed - speedLimit) / kmPerPoint);
//     if (points >= 12)
//       console.log('License suspended');
//     else
//       console.log('Points', points);
// }





// 14. 14- Exercise- Even and Odd Numbers
// showNumbers(10)
// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
    // if (i % 2 ===0) console.log(i, 'EVEN');
    // else console.log(i, 'ODD')

    // const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
    // console.log(i, message);
//   }
// }



// 15. 15- Exercise- Count Truthy
// const array = [0, 1, 2, "", "false", false, true]

// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0;
//   for (let value of array)
//     if (value)
//       count++;
//   return count;
// }


// 16. 16- Exercise- String Properties
// const movie = {
//   title: 'a',
//   releaseYear: 2018,
//   raiting: 4.5,
//   director: 'b'
// };

// showProperties(movie);

// function showProperties(obj) {
//   for (let key in obj)
//     if (typeof obj[key] === 'string')
//       console.log(key, obj[key]);
// }




// 17. 17- Exercise- Sum of Multiples 3 and 5
// console.log(sum(10))

// function sum(limit) {
//   let sum = 0;

//   for (let i = 0; i<= limit; i++)
//     if (i % 3 === 0 || i % 5 ===0)
//       sum +=i;
    
//   return sum;
// }




// 18. 18- Exercise - Grade

// const marks = [80, 80, 50]

// console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//   let sum = 0;
//   for (let mark of marks)
//     sum += mark;
//   let average = sum / marks.length

//   if (average <60) return 'F'
//   if (average <70) return 'D'
//   if (average <80) return 'C'
//   if (average <90) return 'B'
//   return 'A';
// }




// 19. 19- Exercise - Stars
// showStar(10)

// function showStar(rows) {
//     for (let row = 1; row <= rows; row++) {
//       let pattern = '';
//       for (let i = 0; i < row; i++)
//         pattern += '*';
//       console.log(pattern);
//     }
// }



// 20. 20- Exercise - Prime Numbers
// showPrimes(10);

// function showPrimes(limit) {
//   for (let number = 2; number <= limit; number++) {

//     let isPrime = true;
//     for (let factor = 2;factor < number; factor++) {
//       if (number % factor === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) console.log(number);
//   }
// }

// showPrimes(10);

// function showPrimes(limit) {
//   for (let number = 2; number <= limit; number++) {

//     if (isPrime(number)) console.log(number)
//   }
// }

// function isPrime (number) {
//   for (let factor = 2;factor < number; factor++) 
//     if (number % factor === 0) 
//       return false;
    
//     return true;
// }





// 1. 1- Object-oriented Programming (OOP)
//  


// // 2. 2- Factory Functions
// function createCircle(radius) {
//   return{
//     radius,
//     draw() {
//       console.log('draw');
//     }
//   }
// }

// const circle1 = createCircle(3);
// console.log(circle1);

// const circle2 = createCircle(5);
// console.log(circle2);



// 3. 3- Constructor Functions
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
// }
//  const circle = new Circle(2);
//  console.log(circle)


// 4. 4- Dynamic Nature of Objects
// const circle = {
//   radius: 1
// };

// circle.color = 'yellow';
// circle.draw = function() {}

// delete circle.color;
// delete circle.draw;

// console.log(circle);



// 5. 5- Constructor Property
// circle.constructor - показывает формулу. Вводится в консоль



// 6. 6- Functions are Objects



// 7. 7- Value vs. Reference Types
// let x = { value: 10};
// let y = x;

// x.value = 20;

// let obj = {value: 10};

// function increase(obj) {
//   obj.value++;
// }

// increase(obj);
// console.log(obj);



// 8. 8- Enumerating(перечисление) Properties of an Object
// const circle = {
//   radius: 1,
//   draw() {
//     console.log('draw');
//   }
// };


// for in  - самый простой способ перечислить св-ва о-та 
// for (let key in circle)
//   console.log(key, circle[key]); 

// for (let key of circle)
//   console.log(key); 
  // for of  может использоваться тоько с массивами и картами
  
  // показывает только название св-ва
  // for (let key of Object.keys(circle))
  //   console.log(key); 
  // Object.keys(circle)- превращает "обьект" в "элемент массива"
  
  // показывает и название св-ва и его значение
  //   for (let entry of Object.entries(circle))
  // console.log(entry);
  
  // показывает, есть ли определенное свойство у обьекта
  // if ('radius' in circle) console.log('yes');
  // if ('color' in circle) console.log('yes');
  
  
  
  // 9.9 Cloning an object
  // const circle = {
  //   radius: 1,
  //   draw() {
  //     console.log('draw');
  //   }
  // };

// const another = {};
// for (let key in circle)
//   another[key] = circle[key];

// более современный способ. В {} можно добавлять свойства;
// можно комбинировать сразу несколько объектов:
// const another = Object.assign({
//   color: 'yellow'
// }, circle);

// Более простой способ клон-ть:
// const another = Object.assign({...circle});

// console.log(another);
  


// 12. 12- String
// String бывают примитивными 
// const message = ' This is my \'first message'

// const message = ' This is my\n first message'

//  бывают string objects 
//  const another = new String('hi');

// const name = 'John';
// const message = 
// `Hi ${name} ${2+3}

// Regards, Mosh`











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
// Пример  luckySeven('Hi Masha') => 'lucky seven is : a'

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

let rewardRightChoice = 'ДА'

if (rewardRightChoice === 'ДА'){
  console.log('прибавка к пенсии 23 руб 30 копеек')
}
else
  console.log('штраф 5 тыс руб за нарушение общественного порядка при голосовании')
// TASK 4 END