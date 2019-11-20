// Stampare tutti i numeri da 1 a 100 con le seguenti regole:
// al posto dei multipli di 3 stampare "Fizz"
// al posto dei multipli di 5 stampare "Buzz"
// al posto dei multipli di 3 e 5 stampare "FizzBuzz"

for (var i = 1; i <= 100; i++) {

 if ((i % 3 == 0) && (i % 5 == 0)) {
   console.log('Fizzbuzz');
 } else if (i % 5 == 0) {
   console.log('Buzz');
 } else if (i % 3 == 0) {
   console.log('Fizz');
 } else {
   console.log(i);
 }
}


//SE UTILIZZO IL WHILE

// var i = 1;
// while (i <= 100) {
//   if ((i % 3 == 0) && (i % 5 == 0)) {
//     console.log('FizzBuzz');
//   } else if (i % 5 == 0) {
//     console.log('Buzz');
//   }  else if (i % 3 == 0) {
//     console.log('Fizz');
//   }
//   else {
//     console.log(i);
//   }
//   i++;
// }
