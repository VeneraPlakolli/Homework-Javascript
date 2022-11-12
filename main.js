// 1. Request a user’s name and display the response “Hello, [name]”.
/*
let name = prompt('Enter your name');
let hello = `Hello ${name}`;
console.log(hello);
*/


// 2. Request a user’s year of birth, count his age, and display the result. Store the current year as a constant.
/*
let birthyear = prompt('Enter your birthday year') * 1;
const currentyear = 2022;
let year = currentyear - birthyear;
console.log(year);
*/

// 3. Request a length of a side of a square from a user and display the perimeter of the square.
/*
let a = prompt('Enter side of square?');
let perimeter = 2 * a;
console.log(perimeter);
*/

// 4. Request a radius of a circle and display the area of such a circle.
/*
let radius = prompt('Enter radius of circle');
const pi = 2.14;
let area = pi * radius * radius;
console.log(area);
*/


// 5. Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time.
/*
let distance = prompt('Enter distance in km') * 1;  // s
let time = 2;  // t = 2h
let speed = distance / time;  // v = s/t
console.log(speed);
*/

// 6. Create a currency converter. A user types in USD and the program converts them to EUR. The exchange rate should be stored as a constant.
/*
let usd = prompt('Enter a usd value') * 1;
let eur = usd * 0.985529;
console.log(eur);
*/

// 7. A user states a flash drive memory in GB. The program has to count how many 820MB files can be stored on this flash drive.
/*
let flash = prompt('Flash drive in GB: ');
const filesGB = 0.82;
let filesstored = flash/filesGB;
console.log(filesstored);
*/


// 8. A user types in an amount of money in a wallet and the price of one chocolate bar. The program counts how many chocolate bars the user can buy, and how much change will he/she have left.
/*
let amountMoney = prompt('Enter amount of moneny') * 1;
let priceChoco = prompt('Enter price of choco') * 1;
let buy = amountMoney / priceChoco;
let left = `Paret e mebetura: ${amountMoney - buy*priceChoco}`;
console.log(buy);
console.log(left);
*/

// The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%. The program counts the sum of interest.
/*
let sum = prompt('Sum: ');
let interestmonth = 0.05/12;
let interest = interestmonth*2;
console.log(interest*sum);
*/