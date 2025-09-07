/**
 * A pure JavaScript/TypeScript implementation of the Radix Sort algorithm.
 * This implementation handles both positive and negative integers.
 */

/**
 * Helper function to get the digit at a specific place value.
 * @param num The number.
 * @param place The place value (0 for units, 1 for tens, etc.).
 * @returns The digit at the given place.
 */
function getDigit(num: number, place: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

/**
 * Helper function to count the number of digits in a number.
 * @param num The number.
 * @returns The number of digits.
 */
function digitCount(num: number): number {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * Helper function to find the maximum number of digits in an array of numbers.
 * @param nums The array of numbers.
 * @returns The maximum number of digits.
 */
function mostDigits(nums: number[]): number {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

/**
 * Radix sort implementation for an array of numbers.
 * @param arr The array of numbers to sort.
 * @returns A new array with the numbers sorted.
 */
export function radixSort(arr: number[]): number[] {
  if (!arr || arr.length === 0) {
    return [];
  }

  const negatives = arr.filter(n => n < 0);
  const positives = arr.filter(n => n >= 0);

  const sortedPositives = radixSortHelper(positives);

  // Sort negatives by their absolute value and then reverse the order
  const sortedNegativesAbs = radixSortHelper(negatives.map(n => Math.abs(n)));
  const sortedNegatives = sortedNegativesAbs.map(n => -n).reverse();

  return [...sortedNegatives, ...sortedPositives];
}

/**
 * Helper function that performs radix sort on an array of non-negative integers.
 * @param nums The array of non-negative numbers to sort.
 * @returns A new array with the numbers sorted.
 */
function radixSortHelper(nums: number[]): number[] {
  if (!nums || nums.length === 0) {
    return [];
  }

  const maxDigitCount = mostDigits(nums);
  let result = [...nums];

  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets: number[][] = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < result.length; i++) {
      const digit = getDigit(result[i], k);
      digitBuckets[digit].push(result[i]);
    }
    result = ([] as number[]).concat(...digitBuckets);
  }

  return result;
}
