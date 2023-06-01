function isMonotonic(nums) {
    const n = nums.length;
    let increasing = true;
    let decreasing = true;
  
    for (let i = 1; i < n; i++) {
      if (nums[i] < nums[i - 1]) {
        increasing = false; // If any element is smaller than the previous element, it is not monotone increasing
      }
  
      if (nums[i] > nums[i - 1]) {
        decreasing = false; // If any element is larger than the previous element, it is not monotone decreasing
      }
    }
  
    return increasing || decreasing; // If either increasing or decreasing is true, the array is monotonic
  }

const nums = [1, 2, 2, 3];
const isMonotonicArray = isMonotonic(nums);
console.log(isMonotonicArray); // Output: true
