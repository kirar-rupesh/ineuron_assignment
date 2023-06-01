function minimumScore(nums, k) {
    const n = nums.length;
  
    if (n === 1) {
      return 0; // If there is only one element, the score is always 0
    }
  
    nums.sort((a, b) => a - b); // Sort the array in ascending order
  
    let minScore = nums[n - 1] - nums[0]; // Initialize the minimum score with the difference between the maximum and minimum elements
  
    for (let i = 1; i < n; i++) {
      const maxNum = Math.max(nums[i - 1] + k, nums[n - 1] - k); // Calculate the maximum number we can get by adding k to the previous element or subtracting k from the maximum element
      const minNum = Math.min(nums[0] + k, nums[i] - k); // Calculate the minimum number we can get by adding k to the minimum element or subtracting k from the current element
      minScore = Math.min(minScore, maxNum - minNum); // Update the minimum score if necessary
    }
  
    return minScore;
  }

  const nums = [1];
  const k = 0;
  const minScore = minimumScore(nums, k);
  console.log(minScore); // Output: 0
   