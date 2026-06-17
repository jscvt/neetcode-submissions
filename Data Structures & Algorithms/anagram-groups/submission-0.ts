class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const output: string[][] = [];

        const availableCharsNumbers: Array<number> = Array(26).fill(() => undefined).map((x,i) => i+97)
        const strHashmap: Map<string, string[]> = new Map()

        for (const str of strs) {
            const current: Array<number> = Array(26).fill(0)
            for(const char of str) {
                current[char.charCodeAt(0) - 97]++;
            }

            if(strHashmap.get(current.join('#'))){
                const x = strHashmap.get(current.join('#'))
                strHashmap.set(current.join('#'), [...x, str])
            }
            else {
                strHashmap.set(current.join('#'), [str])
            }
        }

        const final: string[][] = [...strHashmap.values()];
        return final
    }
}
