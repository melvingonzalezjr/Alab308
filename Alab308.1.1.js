/*
Part1: Math Problems
*/
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);


/********************************
 * 
 * 
 * My WORK
 * 
 * **************************************/



//Check all are divisible by 5 and cache in variable
const allDivide50 = (n1 % 5 ==0) && (n2 % 5 ==0) && (n3 % 5 ==0) && (n4 % 5 ==0)
console.log(`Are all 4 numbers divisible by 5? ${allDivide50}`);

//Check if first is larger than last and cache in variable
const firstMoreLast = (n1 > n4);
console.log(`Is the first number larger than the last? ${firstMoreLast}`);

//Arithmetic chain
const arithChain = ((n2 - n1) * n3) % n4;
console.log(`The result from n2-n1, times n3, and the remainder from then dividing by n4: ${arithChain}`)

//Change isOver25 
//Before: const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
const isValidRewritten = isSum50 && isTwoOdd && isOver25==false && isUnique;

console.log(`Double check 'isValid' and 'isValidRewritten' give same result: ${isValid==isValidRewritten}`)


/*
Part 2: Practical Math
*/

//*********At 55mph

//Gallons Needed
const distance = 1500;
const budget = 175;
const fuelCost = 3;

const mpg55 = 30;
const mpg60 = 28;
const mpg75 = 23;

gallons55 = distance / mpg55;
gallons60 = distance / mpg60;
gallons75 = distance / mpg75;

console.log(
    `At 55mph, we need ${gallons55} gallons.
At 60mph, we need ${gallons60} gallons.
At 75mph, we need ${gallons75} gallons.`);

//Budget Enough?

inBudget55 = (fuelCost * gallons55) <= budget
inBudget60 = (fuelCost * gallons60) <= budget
inBudget75 = (fuelCost * gallons75) <= budget

console.log(
    `Can I make it work on my budget at the following speeds?
55mph: ${inBudget55}
60mph: ${inBudget60}
75mph: ${inBudget75} 
    `
)

console.log(`75mph is no longer feasible as it's out of budget`)

//How long will the trip take? 
//Of course at 60mph, it will be less time, but here's the math

duration55 = distance / 55
duration60 = distance / 60

console.log(
    `It will take this many hours at the following speeds:
55mph: ${duration55}
60mph: ${duration60}
Therefore, in terms of time, 60mph is the best way to go!

But in terms of money, driving at 55mph will save us:
\$${(fuelCost * gallons60) - (fuelCost * gallons55)}

SO DO YOU WANT TO SAVE MONEY OR TIME? 
`
)
