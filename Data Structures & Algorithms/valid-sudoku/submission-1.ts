class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const cMap: Set<string> = new Set([])
        // Line
        for(const line of board) {
            for(const n of line) {
                if(n !== '.'){
                    if(cMap.has(n)) {
                        return false
                    }
                    cMap.add(n)
                }
                
            }
            cMap.clear();
        }
        cMap.clear();
        
        // Column
        for(let i=0; i < 9; i++) {
            for(const line of board) {
                if(line[i] !== '.'){
                    if(cMap.has(line[i])) {
                        return false
                    }
                    cMap.add(line[i])
                }
            }
            cMap.clear();
        }
        cMap.clear();


        // Block
        for(let i=0; i< 9; i++) {
            const xOffset = i % 3 * 3
            const yOffset = 3 * Math.floor(i / 3);

            for(let j=0; j<9; j++) {
                const xIndex = j % 3
                const yIndex = Math.floor(j/3)
                if(board[yOffset + yIndex][xOffset + xIndex] !== '.'){
                if(cMap.has(board[yOffset + yIndex][xOffset + xIndex])) {
                    return false
                }
                cMap.add(board[yOffset + yIndex][xOffset + xIndex])
                }
            }
            cMap.clear();


        }
        cMap.clear();

        return true


    }
}
