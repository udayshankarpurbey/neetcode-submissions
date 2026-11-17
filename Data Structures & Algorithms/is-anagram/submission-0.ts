class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;
        const newS = s.split('').sort();
        const newT = t.split('').sort();
        for(let i = 0 ; i<s.length;i++) {
            if(newS[i] !== newT[i]) return false;
        }
        return true;
    }
}
