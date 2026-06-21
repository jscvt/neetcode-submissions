class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        const maxPossibleK = Math.max(...piles); 
        const minPossibleK = 1;

        let currentBestK = null

        let left = minPossibleK;
        let right = maxPossibleK;

        while (left <= right) {
            let hoursConsumed = 0
            let center = Math.floor((left + right) / 2)
            for(const pile of piles) {
                hoursConsumed += Math.ceil(pile / center)
            }

            if(hoursConsumed > h) {
                left = center + 1
            }
            else {
                right = center - 1;
                currentBestK = center;
            }
        }

        return currentBestK
    }
}
