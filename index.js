const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
   
// Array of battery counts
// const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Using reduce to sum the total number of batteries
const totalBatteries = batteryBatches.reduce((accumulator, currentBatch) => {
  return accumulator + currentBatch;
}, 0); // Initial value is 0
