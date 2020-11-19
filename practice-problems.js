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
