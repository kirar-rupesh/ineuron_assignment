function maximumProduct(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
  
    const n = nums.length;
    const option1 = nums[n - 1] * nums[n - 2] * nums[n - 3]; // Product of the three largest elements
    const option2 = nums[0] * nums[1] * nums[n - 1]; // Product of the two smallest elements and the largest element
  
    return Math.max(option1, option2);
  }

  const nums = [1, 2, 3];
const maxProduct = maximumProduct(nums);
console.log(maxProduct); // Output: 6
