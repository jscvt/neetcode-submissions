class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const reverseCounts: Record<number, number[]> = {}
        const counts = new Map<number, number>()
        const topK: number[] = []

        for(let i = nums.length; i >= 0; i--) {
            reverseCounts[i] = [];
        }




        for(const num of nums) {
            counts.set(num, counts.get(num) + 1 || 1)
        }
        for(const [n, c] of counts.entries()) {
            reverseCounts[c].push(n)
        }

        for(let i = nums.length ; i >= 0; i--) {
            if(reverseCounts[i].length) {
                for(const x of reverseCounts[i]) {
                    if(topK.length < k) {
                        topK.push(x)
                    }
                    else {
                        break;
                    }
                }
            }
        }
        return topK
    }
}
