function distributeCandies(candyType) {
    const n = candyType.length;
    const maxTypes = n / 2;
  
    // Create a Set to keep track of unique candy types
    const uniqueTypes = new Set(candyType);
  
    // Return the maximum number of different types of candies Alice can eat
    return Math.min(uniqueTypes.size, maxTypes);
  }

const candyType = [1, 1, 2, 2, 3, 3];
const maxTypes = distributeCandies(candyType);
console.log(maxTypes); 