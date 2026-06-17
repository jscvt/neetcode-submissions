class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let max = nums[0];
        let min = nums[0]
        const s = new Set()
        const finalArray = []


        for(const num of nums) {
            if(num > max) {
                max = num;
            }
            if(num < min) {
                min = num
            }
            s.add(num)
        }


        for(let i = min; i <= max; i++) {
            finalArray[i - min] = s.has(i)
        }



        let maxCount = 0;
        let currentCount = 0;
        for(const x of finalArray) {
            if(x) {
                currentCount++;
                if(currentCount > maxCount) {
                    maxCount = currentCount
                }
            }
            else {
                if(currentCount > maxCount) {
                    maxCount = currentCount
                }
                currentCount = 0;
            }
        }
        return maxCount

    }
}
