class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = []
        const openingChars = ['{', '[', '('];
        const closingChars = ['}', ']', ')'];

        const match = new Map();
        match.set('{', '}')
        match.set('}', '{')
        match.set('[', ']')
        match.set(']', '[')
        match.set('(', ')')
        match.set(')', '(')


        for(const char of s) {
            if(openingChars.includes(char)) {
                stack.push(char)
            }
            if(closingChars.includes(char)) {
                if(stack[stack.length - 1] === match.get(char)) {
                    stack.pop()
                }
                else {
                    return false;
                }
            }
        }

        if(stack.length) {
            return false
        }
        return true
    }
}
