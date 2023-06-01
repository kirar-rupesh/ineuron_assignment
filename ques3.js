function findLHS(nums) {
    let maxLen = 0;
    const countMap = new Map();
  
    // Count the frequency of each number in the array
    for (let num of nums) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }
  
    // Iterate through the array
    for (let [num, count] of countMap) {
      // Check if the array contains both num and num + 1
      if (countMap.has(num + 1)) {
        maxLen = Math.max(maxLen, count + countMap.get(num + 1));
      }
    }
  
    return maxLen;
  }

  const nums = [1, 3, 2, 2, 5, 2, 3, 7];
const longestSubsequenceLength = findLHS(nums);
console.log(longestSubsequenceLength); // Output: 5
