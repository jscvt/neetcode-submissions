class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {

        let n = matrix[0].length // Column
        let m = matrix.length // Row

        let left = 0
        let right = m * n - 1

        while(left <= right) {
            const center = Math.floor((left + right) / 2)

            const centerRowPosition = Math.floor(center / n); // eg 1 for center 6
            const centerColumnPosition = center % n; // eg 1 for center 6

            if(matrix[centerRowPosition][centerColumnPosition] > target) {
                right = center - 1
            }
            else if (matrix[centerRowPosition][centerColumnPosition] < target) {
                left = center + 1
            }
            else {
                return true
            }


        }
        return false
    }
}
