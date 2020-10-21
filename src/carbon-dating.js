const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== "string") return false
  
  sampleActivity =+ sampleActivity; 
  
  if (typeof(sampleActivity) !== "number" || sampleActivity >= 15 || isNaN(sampleActivity) || sampleActivity <= 0) 
  return false 

  let c = 0.693 / HALF_LIFE_PERIOD
  let n = ((Math.log(MODERN_ACTIVITY / sampleActivity)) / (c))
  return Math.ceil(n)
};
