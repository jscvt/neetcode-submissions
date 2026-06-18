class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let temp = null;
        let i = 0
        let j = numbers.length - 1

        while(i < j) {
            if(numbers[j] + numbers[i] > target) {
                j--
            }
            else if(numbers[j] + numbers[i] < target) {
                i++
            }
            else {
                return [i + 1, j + 1]
            }

        }
    }
}
