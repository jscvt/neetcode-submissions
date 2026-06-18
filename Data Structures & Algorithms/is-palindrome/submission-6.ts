class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const lcString = s.toLowerCase()
        let i = 0;
        let j = lcString.length - 1
        while(i < j) 
        {
            while(i < j && !/[a-z0-9]/.test(lcString[i])) {
                i++;
            }
            while(i < j && !/[a-z0-9]/.test(lcString[j])) {
                j--;
            }
            if(lcString[i] !== lcString[j]) {
                return false
            }
            i++;
            j--;
        }
        return true
    }
}
