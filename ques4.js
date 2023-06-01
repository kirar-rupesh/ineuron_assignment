function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    let i = 0;
  
    while (i < flowerbed.length) {
      // Check if the current plot is empty and its adjacent plots are also empty
      if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
        flowerbed[i] = 1; // Plant a flower
        count++; // Increment the count of planted flowers
  
        if (count >= n) {
          return true; // We have planted enough flowers
        }
      }
  
      i++; // Move to the next plot
    }
  
    return false; // Cannot plant enough flowers
  }
 
const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
const canPlant = canPlaceFlowers(flowerbed, n);
console.log(canPlant); // Output: true
