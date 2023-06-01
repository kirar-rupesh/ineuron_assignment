function arrayPairSum(nums) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order
  let sum = 0;
  
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i]; // Sum up every alternate element, which corresponds to the minimum value in each pair
  }
  
  return sum;
}

const nums = [1, 4, 3, 2];
const maximizedSum = arrayPairSum(nums);
console.log(maximizedSum); // Output: 4 (pair: [1, 2])
