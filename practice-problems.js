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
console.log(sumOf(lst));

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
console.log(sheepOverFence(sheepCount));

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

console.log(powerCalculator(10, 2));

// 3. Reverse String

const reverseString = function(string){
   //Base case
   if(string.length === 1){
     return string;
   }
   //General case
   return string[string.length -1] + reverseString(string.slice(0, string.length -1));
}

console.log(reverseString('Reverse a string'));

// 4. nth Triangular number

const nthTriangularNum = function(n){
  //Base case
  if(n === 1){
    return 1;
  }
  //General Case
  return  n + nthTriangularNum(n-1);
}

console.log(nthTriangularNum(5));

// 5. String Splitter

const stringSplitter = function(string, separator){
  //Base Case
  if(!string.includes(separator)){
  return string;
}
  //General case
  return  stringSplitter(string.replace(separator, ','), separator);
}

console.log(stringSplitter('11/18/2020', '/'))
