class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const hashmap = new Map();
        for(const char of s) {
            if(!hashmap.has(char)) {
                hashmap.set(char, 1);
            }
            else {
                hashmap.set(char, hashmap.get(char) + 1)
            }
        }
        for(const char of t) {
            const x = hashmap.get(char);
            if(x && x > 0) {
                if(x - 1 === 0) {
                    hashmap.delete(char)
                }
                else {
                    hashmap.set(char, x - 1)   
                }
            }
            else {
                return false
            }
        }

        if(hashmap.size > 0) {
            return false
        }

        return true
    }
}
