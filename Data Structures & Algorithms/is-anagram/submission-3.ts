class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) {
            return false
        }

        const sOccurences: number[] = Array(26).fill(0)
        const tOccurences: number[] = Array(26).fill(0)

        for(let i = 0; i < s.length; i++) {
            const indexS = s.charCodeAt(i) - 97
            const indexT = t.charCodeAt(i) - 97
            sOccurences[indexS]++;
            tOccurences[indexT]++;
        }

        return sOccurences.every((value, index) => value === tOccurences[index]);




    }
}
