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


let i = 0;
while (i <= 10) {
  if (i % 2 === 0) {
  i++;
  continue;
}
  console.log(i);
  i++;
}