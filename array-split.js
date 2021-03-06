// const nums = [1,2,3,4,5,6,7,8];
// const part = nums.slice(2, 5);
// console.log(part);
// console.log(nums);



// const nums = [1,2,3,4,5,6,7,8];
// const removed = nums.splice(2, 5);  // index 2 thake soru and 5 ta projontu removed hbe
// console.log(removed);
// console.log(nums);



// const nums = [1,2,3,4,5,6,7,8];
// const removed = nums.splice(2, 5, 77, 88);  // removed kore oi space e new number bociya dibe ata ke bole items
// console.log(removed);
// console.log(nums);



// const nums = [1,2,3,4,5,6,7,8];
// const removed = nums.splice(2, 5, 77, 88);  // removed kore oi space e new number bociya dibe ata ke bole items
// const together = nums.join(",")
// console.log(together);


const nums = [1,2,3,4,5,6,7,8,9,5]
const remove = nums.splice(2, 6, 77);
const together = nums.join();
console.log(together);
console.log(remove);