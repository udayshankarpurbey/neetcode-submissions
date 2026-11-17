class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const charterFrequencyOfS = new Map();
        const charterFrequencyOfT = new Map();
        for (let i = 0; i < s.length; i++) {
            charterFrequencyOfS.set(s[i], ((charterFrequencyOfS.get(s[i]) ?? 0) + 1))
            charterFrequencyOfT.set(t[i], ((charterFrequencyOfT.get(t[i]) ?? 0) + 1))
        }

        for(let char of charterFrequencyOfS.keys()) {
            if(charterFrequencyOfS.get(char) !== charterFrequencyOfT.get(char)) return false
        }

        return true;
    }
}
