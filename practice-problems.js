//Example problem
const sumOf = function(list) {
    // Base case
    if (list.length === 1) {
        return list[0];
    }
    // General case
    return list[0] + sumOf(list.slice(1));

}

let lst = [2,4,6,8,10];
//console.log(sumOf(lst));

// 1. Counting sheep

const sheepOverFence = function(sheepCount){
  // Base case
  if(sheepCount === 0){
    return 'All sheep jumped over the fence';
  }
  //General case
  return (sheepCount + ':' + 'Another sheep jumps over the fence' + '\n') + sheepOverFence(sheepCount - 1);
}

const sheepCount = 7;
//console.log(sheepOverFence(sheepCount));

// 2. Power Calculator

const powerCalculator = function(base, exponent){

  if(exponent < 0){
    return 'exponent should be >= 0';
  }
  if(exponent === 0){
    return 1;
  }
  //Base case
  if(exponent === 1){
    return base;
  }
  //General case
  return base * powerCalculator(base, exponent-1);
}

//console.log(powerCalculator(10, 2));

// 3. Reverse String

const reverseString = function(string){
   //Base case
   if(string.length === 1){
     return string;
   }
   //General case
   return string[string.length -1] + reverseString(string.slice(0, string.length -1));
}

//console.log(reverseString('Reverse a string'));

// 4. nth Triangular number

const nthTriangularNum = function(n){
  //Base case
  if(n === 1){
    return 1;
  }
  //General Case
  return  n + nthTriangularNum(n-1);
}

//console.log(nthTriangularNum(5));

// 5. String Splitter

const stringSplitter = function(string, separator){
  //Base Case
  if(!string.includes(separator)){
  return string;
}
  //General case
  return  stringSplitter(string.replace(separator, ','), separator);
}

//console.log(stringSplitter('11/18/2020', '/'));

// 6. Fibonacci

const fibonacci = function(n){
  //Base case
  if(n === 0){
    return 0;
  }
  else if(n === 1){
    return 1;
  }
  //General case
  return (fibonacci(n-1) + fibonacci(n-2))
}

//console.log(fibonacci(7))

// 7. Factorial

const factorial = (n) =>{
  //Base case
  if(n == 0){
    return 1;
  }
  //General case
  return n * factorial(n-1)
}

//console.log(factorial(7))

// 8. Find a way out of the maze

// 9. Find ALL the ways out of the maze

// 10. Anagrams

// 11. Organization chart

// 12. Binary representation
const binary = (n) =>{
  //base case
  if (n == 0){
    return 0;
  }
  //General case
if(n<2){
  return '1'
}
if(n%2 == 0){
  return '0' + '.' + binary(n/2)
}
return '1'  + '.' + binary((n -1) /2) 
}

console.log(binary(785).split('.').reverse().join(''))
