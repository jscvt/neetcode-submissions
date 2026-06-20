class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a, b) => a - b);
        const hmap = new Map();
        sortedNums.forEach((num, index) => {
            if (!hmap.has(num)) hmap.set(num, [index]);
            else hmap.get(num).push(index);
        })


        const result = []

        for(let i = 0; i < sortedNums.length - 2; i++) {
            while(sortedNums[i-1] === sortedNums[i]) {
                i++;
            }
            let j = sortedNums.length - 1;

            while(j > i) {
                let middleValueTarget = 0 - (sortedNums[i] + sortedNums[j]);
                if(hmap.has(middleValueTarget)) {
                    const middleValueTargetIndexes = hmap.get(middleValueTarget)
                    if(middleValueTargetIndexes.some(idx => idx < j && idx > i)) {
                        result.push([sortedNums[i], sortedNums[j], middleValueTarget])
                    }
                }
                j--;
                while(sortedNums[j+1] === sortedNums[j]) {
                    j--;
                }
                
            }
        }

        return result

    }
}
