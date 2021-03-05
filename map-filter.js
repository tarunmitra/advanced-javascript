// sonkhar square korbo
    
//  const numbers = [3, 4, 5, 6, 7, 8];
//  const output = [];

//  for(let i = 0; i < numbers.length; i++){
//    const element = numbers[i];       // sonkha nicha
//    const result = element * element;  // element * element square
//    output.push(result);
//  }
//  console.log(output);


// ata aro sohoj vabe korte amra map use korbo
// map 3 ta paramitar nite pare element, index, array


// const numbers = [3, 4, 5, 6, 7, 8];
// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// })


// const numbers = [3, 4, 5, 6, 7, 8];
// const result = numbers.map(function(element){
//   return element * element;
// })
// console.log(result);

// const numbers = [3, 4, 5, 6, 7, 8];
// const result = numbers.map(x => x * x);
// console.log(result);

// const numbers = [3, 4, 5, 6, 7, 8];
// const bigger = numbers.filter( x => x > 5);
// console.log(bigger);

// find prothom jeta pabe otai nibe
const numbers = [3, 4, 5, 6, 7, 8];
const isThere = numbers.find( x => x > 5);
console.log(isThere);